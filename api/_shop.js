// Gedeelde logica voor de betaalfuncties. Leest menu en prijzen uit app.js,
// zodat er maar één plek is waar prijzen staan en niemand ze in de browser kan aanpassen.
const fs = require('fs');
const path = require('path');

let cache;
function shop() {
  if (cache) return cache;
  const src = fs.readFileSync(path.join(process.cwd(), 'app.js'), 'utf8');
  const head = src.slice(0, src.indexOf('const state = {'));
  cache = new Function(head + '\nreturn { CONFIG, MENU, DRINKS };')();
  return cache;
}

const money = v => `€${v.toFixed(2).replace('.', ',')}`;
const cents = v => Math.round(v * 100);

// Rekent een winkelmand opnieuw uit op de server. Gooit een fout met een nette Nederlandse melding.
function priceOrder(body, opts = {}) {
  const { CONFIG, MENU, DRINKS } = shop();
  const all = [...MENU, ...DRINKS];
  if (!body || !Array.isArray(body.cart) || !body.cart.length) throw new Error('Je winkelmand is leeg.');
  if (body.cart.length > 30) throw new Error('Te veel regels in je bestelling.');
  if (Date.now() > new Date(CONFIG.drop.deadline).getTime()) throw new Error('De bestellijn voor deze ronde is gesloten.');
  // Op de echte site pas bestellen vanaf het openingstijdstip; op de acceptatieversie altijd.
  if (opts.prod && !CONFIG.orderingOpen && CONFIG.orderingOpenAt && Date.now() < new Date(CONFIG.orderingOpenAt).getTime()) throw new Error('De bestellijn is nog niet open. Tot zo!');

  const used = {}, maxes = {}, names = {};
  let sub = 0;
  const lines = body.cart.map(i => {
    const d = all.find(x => x.id === i.dishId);
    const v = d && d.variants.find(x => x.id === i.variantId);
    const qty = Number(i.qty);
    if (!d || !v || !Number.isInteger(qty) || qty < 1 || qty > 50) throw new Error('Er klopt iets niet in je bestelling. Ververs de pagina en probeer opnieuw.');
    const own = !!v.portions;
    const key = own ? `${d.id}:${v.id}` : d.id;
    const max = (d.soldOut || v.soldOut) ? 0 : (own ? v.portions : d.portions);
    used[key] = (used[key] || 0) + qty;
    maxes[key] = max; names[key] = v.cart || d.name;
    if (used[key] > max) throw new Error(`${v.cart || d.name} is (bijna) op. Pas je aantal aan.`);
    const ids = Array.isArray(i.extras) ? i.extras : [];
    const ex = d.extras.filter(e => ids.includes(e.id) && (!e.only || e.only.includes(v.id)));
    const unit = v.price + ex.reduce((s, e) => s + e.price, 0);
    const label = [v.cart || d.name, v.cart ? '' : v.name, ...ex.map(e => e.cart || '+ ' + e.name.toLowerCase())].filter(Boolean).join(' ');
    sub += unit * qty;
    return { qty, label, total: unit * qty };
  });

  const mode = body.mode === 'bezorgen' ? 'bezorgen' : 'afhalen';
  const slots = mode === 'bezorgen' ? CONFIG.delivery.slots : CONFIG.pickup.slots;
  if (!slots.includes(body.slot)) throw new Error('Kies een tijd.');
  const f = body.form || {};
  const clean = (s, n) => String(s || '').replace(/[\r\n]+/g, ' ').trim().slice(0, n);
  const form = { name: clean(f.name, 80), phone: clean(f.phone, 30), email: clean(f.email, 120).toLowerCase(), street: clean(f.street, 100), postcode: clean(f.postcode, 10).toUpperCase().replace(/\s+/g, ''), note: clean(f.note, 200) };
  if (!form.name) throw new Error('Vul je naam in.');
  if (form.phone.replace(/\D/g, '').length < 9) throw new Error('Vul je telefoonnummer in.');
  if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email)) throw new Error('Dit e-mailadres klopt niet. Laat het leeg of controleer het.');
  let zone = '', R = null;
  if (mode === 'bezorgen') {
    if (!form.street) throw new Error('Vul je straat en huisnummer in.');
    if (!/^\d{4}[A-Z]{2}$/.test(form.postcode)) throw new Error('Vul een geldige postcode in.');
    const n = Number(form.postcode.slice(0, 4));
    R = CONFIG.delivery.zones.find(z => z.ranges.some(([x, y]) => n >= x && n <= y));
    zone = n >= 1311 && n <= 1364 ? 'almere' : R ? R.key : 'buiten';
    if (zone === 'buiten') throw new Error('Op dit adres bezorgen we helaas niet.');
    if (R && cents(sub) < cents(R.minOrder)) throw new Error(`Bezorgen in ${R.label} kan vanaf ${money(R.minOrder)}.`);
  }
  const code = require('./_codes').validate(body.code, mode); // gooit een fout bij ongeldige code
  const C = require('./_codes'), kind = C.kindOf(code), pct = C.percentOf(code);
  const discount = kind === 'actie' ? Math.round(cents(sub) * pct / 100) / 100 : 0; // korting op de gerechten, niet op bezorgkosten
  const fee = mode !== 'bezorgen' || kind === 'woc' ? 0 : R ? R.fee : (sub < CONFIG.delivery.freeFrom ? CONFIG.delivery.fee : 0);
  const total = cents(sub - discount + fee) / 100;

  const msg = [
    `Bestelling Switi Spang – ${CONFIG.drop.label}`, '',
    ...lines.map(l => `${l.qty}× ${l.label} – ${money(l.total)}`), '',
    ...(mode === 'bezorgen' ? [`Bezorgen: ${fee ? money(fee) : 'gratis'}`] : []),
    ...(kind === 'woc' ? [`Kortingscode: ${code} (gratis bezorging)`] : []),
    ...(kind === 'actie' ? [`Kortingscode: ${code} (${pct}% korting): -${money(discount)}`] : []),
    `Totaal: ${money(total)}`, '',
    mode === 'bezorgen' ? `Bezorgen tussen ${body.slot}` : `Afhalen om ${body.slot}`,
    ...(mode === 'bezorgen' ? [`Adres: ${form.street}, ${form.postcode}${zone !== 'almere' ? ' (buiten Almere)' : ' Almere'}`] : []),
    `Naam: ${form.name}`, `Telefoon: ${form.phone}`,
    ...(form.email ? [`E-mail: ${form.email}`] : []),
    ...(form.note ? [`Opmerking: ${form.note}`] : [])
  ].join('\n');

  return { CONFIG, total, msg, form, mode, code, slot: body.slot, used, maxes, names, slotKey: `${mode}|${body.slot}` };
}

async function mollie(method, url, data) {
  const key = process.env.MOLLIE_API_KEY;
  if (!key) throw Object.assign(new Error('Online betalen is nog niet ingesteld (MOLLIE_API_KEY ontbreekt).'), { status: 503 });
  const r = await fetch('https://api.mollie.com/v2' + url, {
    method,
    headers: { Authorization: 'Bearer ' + key, 'Content-Type': 'application/json' },
    body: data ? JSON.stringify(data) : undefined
  });
  const j = await r.json().catch(() => ({}));
  if (!r.ok) {
    console.error('Mollie', r.status, j);
    throw Object.assign(new Error('Betalen lukt even niet. Probeer het zo opnieuw of bestel via WhatsApp.'), { status: 502 });
  }
  return j;
}

function origin(req) {
  const host = req.headers['x-forwarded-host'] || req.headers.host;
  const proto = req.headers['x-forwarded-proto'] || 'https';
  return `${proto}://${host}`;
}

// Mollie-metadata mag max 1 KB zijn: de bestelling zelf wordt ingekort als het niet past.
function buildMeta(o) {
  const meta = { drop: o.CONFIG.drop.label, slot: o.slotKey, used: o.used, code: o.code || '', email: o.form.email || '', notified: false, void: false };
  let order = o.msg;
  while (Buffer.byteLength(JSON.stringify({ ...meta, order })) > 980) order = order.slice(0, -20);
  return { ...meta, order: order === o.msg ? order : order + '…' };
}

// ---- Voorraad en ophaaltijden: geteld uit de Mollie-betalingen van deze ronde (geen database nodig) ----
const SLOT_MAX = 2; // maximaal zoveel ophaalbestellingen per tijd
const isLive = p => ['paid', 'authorized', 'pending'].includes(p.status) ||
  (p.status === 'open' && (p.expiresAt ? new Date(p.expiresAt).getTime() > Date.now() : Date.now() - new Date(p.createdAt).getTime() < 15 * 60e3));

async function dropPayments(drop) {
  const j = await mollie('GET', '/payments?limit=250');
  return ((j._embedded && j._embedded.payments) || []).filter(p => p.metadata && p.metadata.drop === drop && !p.metadata.void && isLive(p));
}

function tally(payments) {
  const used = {}, slots = {};
  for (const p of payments) {
    const m = p.metadata;
    for (const [k, q] of Object.entries(m.used || {})) used[k] = (used[k] || 0) + Number(q);
    if (m.slot && m.slot.startsWith('afhalen|')) slots[m.slot] = (slots[m.slot] || 0) + 1;
  }
  return { used, slots };
}

function overLimit(o, t) {
  for (const [k, q] of Object.entries(o.used)) {
    if (o.maxes[k] !== undefined && (t.used[k] || 0) + q > o.maxes[k]) return `${o.names[k]} is (bijna) op. Pas je aantal aan of kies iets anders.`;
  }
  if (o.mode === 'afhalen' && (t.slots[o.slotKey] || 0) >= SLOT_MAX) return 'Deze ophaaltijd is vol. Kies een andere tijd.';
  return '';
}

// Alle porties en hun maximum, zoals priceOrder ze telt.
function pools() {
  const { MENU, DRINKS } = shop();
  const out = {};
  for (const d of [...MENU, ...DRINKS]) {
    if (d.portions) out[d.id] = d.soldOut ? 0 : d.portions;
    for (const v of d.variants) if (v.portions) out[`${d.id}:${v.id}`] = (d.soldOut || v.soldOut) ? 0 : v.portions;
  }
  return out;
}

const PROD_HOSTS = ['switispang.nl', 'www.switispang.nl', 'switispang.vercel.app'];
const hostOf = req => String(req.headers['x-forwarded-host'] || req.headers.host || '').split(':')[0];

module.exports = { isLive, priceOrder, mollie, origin, buildMeta, dropPayments, tally, overLimit, pools, shop, SLOT_MAX, PROD_HOSTS, hostOf };
