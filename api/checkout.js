const { priceOrder, mollie, origin, fitMeta } = require('./_shop');

module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Alleen POST.' });
  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body;
    const o = priceOrder(body);
    const base = origin(req);
    const p = await mollie('POST', '/payments', {
      amount: { currency: 'EUR', value: o.total.toFixed(2) },
      description: `Switi Spang ${o.CONFIG.drop.label} – ${o.form.name}`.slice(0, 255),
      redirectUrl: `${base}/bedankt.html`,
      cancelUrl: `${base}/?betaling=geannuleerd`,
      locale: 'nl_NL',
      metadata: { order: fitMeta(o.msg) }
    });
    // Nu we het betaal-ID hebben: stuur de klant na betalen terug naar een pagina die de status kan opvragen.
    await mollie('PATCH', `/payments/${p.id}`, { redirectUrl: `${base}/bedankt.html?id=${p.id}` });
    res.status(200).json({ id: p.id, checkoutUrl: p._links.checkout.href, total: o.total, testmode: p.mode === 'test' });
  } catch (e) {
    res.status(e.status || 400).json({ error: e.message });
  }
};
