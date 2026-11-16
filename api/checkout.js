const { usedBefore } = require('./_codes');
const { priceOrder, mollie, origin, buildMeta, dropPayments, tally, overLimit, PROD_HOSTS, hostOf } = require('./_shop');

module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Alleen POST.' });
  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body;
    const o = priceOrder(body, { prod: PROD_HOSTS.includes(hostOf(req)) });
    const label = o.CONFIG.drop.label;

    // 1. Is er nog genoeg over?
    const err = overLimit(o, tally(await dropPayments(label)));
    if (err) return res.status(409).json({ error: err, refresh: true });

    if (o.code && await usedBefore(o.code)) return res.status(409).json({ error: 'Deze code is al gebruikt.', codeUsed: true });

    // 2. Betaling aanmaken
    const base = origin(req);
    const meta = buildMeta(o);
    const p = await mollie('POST', '/payments', {
      amount: { currency: 'EUR', value: o.total.toFixed(2) },
      description: `Switi Spang ${label} – ${o.form.name}`.slice(0, 255),
      redirectUrl: `${base}/bedankt.html`,
      cancelUrl: `${base}/?betaling=geannuleerd`,
      webhookUrl: `${base}/api/webhook`,
      locale: 'nl_NL',
      metadata: meta
    });

    // 3. Gelijktijdige bestellingen: de eerste (op aanmaaktijd) wint. Bij twee mensen tegelijk valt de tweede af.
    const all = (await dropPayments(label)).filter(x => x.id !== p.id);
    const before = all.filter(x => x.createdAt < p.createdAt || (x.createdAt === p.createdAt && x.id < p.id));
    const err2 = overLimit(o, tally(before));
    if (err2) {
      await mollie('PATCH', `/payments/${p.id}`, { metadata: { ...meta, void: true } }).catch(() => {});
      return res.status(409).json({ error: err2, refresh: true });
    }

    // Zelfde voor de kortingscode: bij twee gelijktijdige betalingen met dezelfde code wint de eerste.
    if (o.code && await usedBefore(o.code, p.createdAt, p.id)) {
      await mollie('PATCH', `/payments/${p.id}`, { metadata: { ...meta, void: true } }).catch(() => {});
      return res.status(409).json({ error: 'Deze code is al gebruikt.', codeUsed: true });
    }

    // Nu we het betaal-ID hebben: terug naar een pagina die de status kan opvragen.
    await mollie('PATCH', `/payments/${p.id}`, { redirectUrl: `${base}/bedankt.html?id=${p.id}` });
    res.status(200).json({ id: p.id, checkoutUrl: p._links.checkout.href, total: o.total, testmode: p.mode === 'test' });
  } catch (e) {
    res.status(e.status || 400).json({ error: e.message });
  }
};
