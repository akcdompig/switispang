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
function priceOrder(body) {
  const { CONFIG, MENU, DRINKS } = shop();
  const all = [...MENU, ...DRINKS];
  if (!body || !Array.isArray(body.cart) || !body.cart.length) throw new Error('Je winkelmand is leeg.');
  if (body.cart.length > 30) throw new Error('Te veel regels in je bestelling.');
  if (Date.now() > new Date(CONFIG.drop.deadline).getTime()) throw new Error('De bestellijn voor deze ronde is gesloten.');

  const used = {};
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
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email)) throw new Error('Vul een geldig e-mailadres in voor je bevestiging.');
  if (mode === 'bezorgen') {
    const pc = Number(form.postcode.slice(0, 4));
    if (!form.street) throw new Error('Vul je straat en huisnummer in.');
    if (!/^\d{4}[A-Z]{2}$/.test(form.postcode) || pc < 1311 || pc > 1364) throw new Error('We bezorgen alleen in Almere (postcode 1311–1364).');
  }
  const fee = mode === 'bezorgen' && sub < CONFIG.delivery.freeFrom ? CONFIG.delivery.fee : 0;
  const total = cents(sub + fee) / 100;

  const msg = [
    `Bestelling Switi Spang – ${CONFIG.drop.label}`, '',
    ...lines.map(l => `${l.qty}× ${l.label} – ${money(l.total)}`), '',
    ...(mode === 'bezorgen' ? [`Bezorgen: ${fee ? money(fee) : 'gratis'}`] : []),
    `Totaal: ${money(total)}`, '',
    mode === 'bezorgen' ? `Bezorgen tussen ${body.slot}` : `Afhalen om ${body.slot}`,
    ...(mode === 'bezorgen' ? [`Adres: ${form.street}, ${form.postcode} Almere`] : []),
    `Naam: ${form.name}`, `Telefoon: ${form.phone}`, `E-mail: ${form.email}`,
    ...(form.note ? [`Opmerking: ${form.note}`] : [])
  ].join('\n');

  return { CONFIG, total, msg, form, mode, slot: body.slot };
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

// Mollie-metadata mag max 1 KB zijn: houd de bestelling compact.
function fitMeta(msg) {
  let m = msg;
  while (Buffer.byteLength(JSON.stringify({ order: m, email: 'x'.repeat(120), notified: false })) > 1000) m = m.slice(0, -20);
  return m === msg ? m : m + '…';
}

module.exports = { priceOrder, mollie, origin, fitMeta };
