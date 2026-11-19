/* ============================================================
   SWITI SPANG — instellingen voor deze week
   Pas hier het menu, de prijzen en het WhatsApp-nummer aan.
   ============================================================ */
const CONFIG = {
  // WhatsApp-nummer voor bestellingen, internationaal zonder + of 0 vooraan (06 12345678 -> '31612345678').
  // Leeg = bestelknop staat uit.
  whatsapp: '31624584854',

  // Bestellijn: false = site staat online, maar bestellen opent binnenkort. Zet op true zodra alles goedgekeurd is.
  orderingOpen: true,
  // Automatisch open vanaf dit moment (op de echte site). Op de acceptatieversie staat bestellen altijd open.
  orderingOpenAt: '2026-11-15T20:00:00+01:00',

  // Lancering: tot dit moment ziet de bezoeker een aftelpagina. Daarna verdwijnt die vanzelf.
  // Testen vóór de lancering: zet ?preview achter de link.
  launchAt: '2026-11-14T20:00:00+01:00',

  // Contact (staat in de footer en op de contactpagina)
  email: 'info@switispang.nl',
  phoneLabel: '06 24 58 48 54',
  kvk: '94670099', // KvK-nummer; leeg = niet tonen

  // Online betalen via Mollie (iDEAL). Op de acceptatieversie staat dit altijd aan, op switispang.nl pas als dit true is.
  payOnline: true,

  drop: {
    label: 'Zaterdag 21 november',
    dayShort: 'zaterdag',
    deadline: '2026-11-20T17:00:00+01:00', // bestellen sluit
    deadlineLabel: 'vrijdag 20 november, 17:00'
  },
  next: 'Woensdag 25 november: menu volgt zaterdagavond op Instagram. Bestellen kan tot dinsdag 20:00.',

  pickup: {
    area: 'Almere-Buiten',
    slots: ['17:00', '17:30', '18:00', '18:30', '19:00', '19:30']
  },
  delivery: {
    fee: 2.5,
    freeFrom: 30,
    slots: ['17:00 – 18:00', '18:00 – 19:00', '19:00 – 20:00'],
    // Buiten Almere: alleen vanaf een minimumbedrag, met hogere bezorgkosten (rit moet rendabel zijn)
    // Buiten Almere: per zone een minimumbestelling + vaste bezorgkosten (rit moet rendabel zijn)
    zones: [
      { key: 'dichtbij',  label: 'Diemen, Weesp, Muiden, Bussum en Naarden', minOrder: 60, fee: 12.5, ranges: [[1111, 1112], [1380, 1382], [1398, 1399], [1400, 1412]] },
      { key: 'gooi',      label: 'Hilversum en het Gooi',                    minOrder: 70, fee: 15,   ranges: [[1211, 1228]] },
      { key: 'amsterdam', label: 'Amsterdam',                                minOrder: 80, fee: 17.5, ranges: [[1000, 1109]] }
    ]
  },
  instagram: 'https://www.instagram.com/switispang',
  tiktok: 'https://www.tiktok.com/@switispang'
};

// Uitverkocht? Zet soldOut: true bij een gerecht of bij een keuze (bv. de rotirol).
// De teller telt per bestelling; houd zelf bij hoeveel er via WhatsApp binnen zijn.
const MENU = [
  {
    id: 'bravoe',
    name: 'Bravoe',
    portions: 10,
    image: 'img/bravoe.jpg',
    origin: 'Surinaamse feestsoep · alle volken in één pan',
    desc: 'Een krachtige maaltijdsoep met rund en gerookte kip, aardvruchten (groene banaan, cassave, zoete aardappel) en groenten, met krontomirki (kokosmelk). Met witte rijst, sambal apart.',
    story: 'Ala kondre bravoe betekent soep uit alle landen. Alle bevolkingsgroepen van Suriname komen samen in één pan, en daarom eet je hem op nationale feestdagen.',
    allergens: 'Selderij',
    variants: [{ id: 'std', name: 'met rijst', price: 15.0 }],
    extras: [
      { id: 'rijst', name: 'Extra rijst', price: 1.5 }
    ]
  },
  {
    id: 'saoto',
    name: 'Saoto',
    portions: 10,
    image: 'img/saoto.jpg',
    origin: 'Javaanse keuken · 1890',
    desc: 'Een volle maaltijdsoep: heldere, kruidige kippensoep met kip, taugé, gebakken aardappel en ei. Met witte rijst; sambal, ketjap en gebakken uitjes apart.',
    story: 'Op 9 augustus 1890 kwamen de eerste Javaanse contractarbeiders aan in Suriname. Uit hun soto ayam groeide saoto, met Surinaamse ingrediënten. Nu is het de soep van heel Suriname.',
    allergens: 'Ei, gluten, selderij. Ketjap en gebakken uitjes (apart, optioneel): soja, gluten',
    variants: [{ id: 'std', name: 'met rijst', price: 10.5 }],
    extras: [
      { id: 'vulling', name: 'Extra vulling', hint: 'kip, taugé en gebakken aardappel', price: 3.0 },
      { id: 'ei', name: 'Extra ei', price: 1.5 },
      { id: 'rijst', name: 'Extra rijst', price: 1.5 }
    ]
  }
];

// Drankjes: altijd erbij te bestellen. Pas prijzen hier aan.
const DRINKS = [
  { id: 'spa', name: 'Spa blauw', portions: 99, variants: [{ id: 'std', name: '', price: 2.0 }], extras: [] },
  { id: 'cola', name: 'Cola', portions: 99, variants: [{ id: 'std', name: '', price: 2.5 }], extras: [] },
  { id: 'fernandes', name: 'Fernandes', note: 'alle smaken, zet je smaak bij opmerking', portions: 99, variants: [{ id: 'std', name: '', price: 2.5 }], extras: [] }
];

const COMING = [
  { name: 'Okersoep', image: 'img/okersoep.jpg' },
  { name: 'Tayersoep', image: 'img/tayersoep.jpg' }
];

// De Switi Spang-keuken: wat er de komende weken langskomt (geen prijzen, wisselt per week).
// Items: tekst, of [tekst, prijs]. Prijzen incl. btw; formule: (kostprijs + ~€10) × 1,09, getoetst aan concurrenten in Almere.
const REPERTOIRE = [
  { icon: '🍲', title: 'Soepen', sub: 'Maaltijdsoepen, traditioneel, met rijst', items: [['Gritibana', 13.5], ['Okersoep', 13.5], ['Bravoe', 15], ['Tayersoep', 13.5], ['Pindasoep', 13.5], ['Cassavesoep', 13.5], ['Saoto', 10.5]] },
  { icon: '🫓', title: 'Roti', sub: 'Met verse rotiplaat, aardappel, kousenband en ei', items: [['Roti kip (kippenbout)', 17.5], ['Roti kip (kippendijfilet)', 18.5], ['Roti lams', 19.5], ['Roti masala doks: op traditionele wijze boven de chula (houtskoolvuur) gegaard', 21.5], ['Roti vega', 15], ['Rotirol kippendijfilet', 11.95], ['Rotirol lams', 13.95]] },
  { icon: '🍛', title: 'Hoofdgerechten', sub: 'Met rijst, bami of chow mein · gestoofd of geroosterd, zoals thuis', items: [['Rijst met kip en antroewa', 16.5], ['Rijst met kip en sopropo', 14.95], ['Rijst met gestoofd rundvlees en Surinaamse zuurkool, met aardappel en kiprookworst', 14.95], ['Witte rijst met kousenband, aardappel en garnalen', 14.95], ['Masoesa moksi alesi met geroosterde kip', 14.95], ['Nasi met geroosterde kip', 14.95], ['Bami met geroosterde kip', 14.95], ['Chow mein met geroosterde kip', 14.95]] },
  { icon: '🥟', title: 'Buns', sub: 'Van traditie naar trendy · met frisse toppings als prei en komkommer', items: [['Garnalen bun: garnalen in pittige tomatenjus (2 stuks)', 9.5], ['Redi Fowru bun: geroosterde kip met rode kruiden (2 stuks)', 9.5], 'Extra spicy saus? Kan erbij'] },
  { icon: '🦀', title: 'Seafood boil · Paramaribo style', sub: 'Binnenkort · alleen als speciale ronde', items: ['Prijs volgt zodra hij op het menu staat', 'Krab, grote garnalen, rivierkreeft en spinkrab', 'Met krieltjes, maïs en worst in masala en kokosmelk', 'Hoe pittig? Dat kies je zelf'] },
  { icon: '✨', title: 'Weekend specials', sub: 'Surinaams in een ander jasje', items: ['Elke week een verrassing', 'Volg Instagram en onze WhatsApp-community'] },
  { icon: '🥤', title: 'Binnenkort te drinken', sub: 'Huisgemaakt', items: ['Gemberbier', 'Surinaamse cola (colasiroop)', 'Markoesa-sap'] }
];

/* ============================================================ */

const state = {
  code: '', codeKind: '', codePct: 0, codeMsg: '', // geldige kortingscode (gratis bezorging) + melding
  cart: [], // { key, dishId, variantId, extras:[ids], qty }
  mode: 'afhalen',
  slot: '',
  full: [], // ophaaltijden die vol zijn (uit /api/stock)
  sent: false
};

// Acceptatie = elke link die niet de echte site is (Vercel-previewlinks, localhost).
const PROD_HOSTS = ['switispang.nl', 'www.switispang.nl', 'switispang.vercel.app'];
const ACC = !PROD_HOSTS.includes(location.hostname) && !location.search.includes('prod'); // ?prod = test als echte site
const PAY = CONFIG.payOnline || ACC;
const store = {
  get(k) { try { return JSON.parse(sessionStorage.getItem(k)); } catch (e) { return null; } },
  set(k, v) { try { sessionStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* geen opslag: geen probleem */ } },
  del(k) { try { sessionStorage.removeItem(k); } catch (e) { /* idem */ } }
};

const $ = id => document.getElementById(id);
const money = v => `€${Number(v).toFixed(2).replace('.', ',')}`;
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

function isSoon() { return !(CONFIG.orderingOpen || ACC || (CONFIG.orderingOpenAt && Date.now() >= new Date(CONFIG.orderingOpenAt).getTime())); }
function isClosed() {
  return isSoon() || Date.now() > new Date(CONFIG.drop.deadline).getTime();
}

function extraAllowed(e, variantId) { return !e.only || e.only.includes(variantId); }

function dish(id) { return MENU.find(d => d.id === id) || DRINKS.find(d => d.id === id); }

function lineInfo(item) {
  const d = dish(item.dishId);
  const v = d.variants.find(x => x.id === item.variantId);
  const ex = d.extras.filter(e => item.extras.includes(e.id) && extraAllowed(e, item.variantId));
  const unit = v.price + ex.reduce((s, e) => s + e.price, 0);
  const label = [v.cart || d.name, v.cart ? '' : v.name, ...ex.map(e => e.cart || '+ ' + e.name.toLowerCase())].filter(Boolean).join(' ');
  return { d, v, ex, unit, label };
}

// Porties: een keuze met eigen 'portions' (zoals de rotirol) heeft een eigen teller.
function pool(d, variantId) {
  const v = d.variants.find(x => x.id === variantId) || d.variants[0];
  const own = !!v.portions;
  const out = d.soldOut || v.soldOut;
  return { key: own ? `${d.id}:${v.id}` : d.id, max: out ? 0 : (own ? v.portions : d.portions) };
}
function qtyInPool(key) {
  return state.cart.filter(i => pool(dish(i.dishId), i.variantId).key === key).reduce((s, i) => s + i.qty, 0);
}
function leftFor(d, variantId) { const p = pool(d, variantId); return Math.max(0, p.max - qtyInPool(p.key)); }
function selectedVariant(d) {
  const el = document.querySelector(`input[name="var-${d.id}"]:checked`);
  return el ? el.value : d.variants[0].id;
}

function subtotal() { return state.cart.reduce((s, i) => s + lineInfo(i).unit * i.qty, 0); }
function discount() { return state.code && state.codeKind === 'actie' ? Math.round(subtotal() * 100 * state.codePct / 100) / 100 : 0; }
function payTotal() { return Math.round((subtotal() - discount() + deliveryFee()) * 100) / 100; }
function clearCode() { state.code = ''; state.codeKind = ''; state.codePct = 0; state.codeMsg = ''; }
function zoneOf(pcRaw) {
  const pc = String(pcRaw || '').toUpperCase().replace(/\s+/g, '');
  if (!/^\d{4}[A-Z]{2}$/.test(pc)) return '';
  const n = Number(pc.slice(0, 4));
  if (n >= 1311 && n <= 1364) return 'almere';
  const z = CONFIG.delivery.zones.find(z => z.ranges.some(([a, b]) => n >= a && n <= b));
  return z ? z.key : 'buiten';
}
function zoneInfo(key) { return CONFIG.delivery.zones.find(z => z.key === key); }
function currentZone() { return state.mode === 'bezorgen' ? zoneOf(readForm().postcode) : ''; }
function deliveryFee() {
  if (state.mode !== 'bezorgen') return 0;
  if (state.code && state.codeKind === 'woc') return 0;
  const z = currentZone();
  if (zoneInfo(z)) return zoneInfo(z).fee;
  return subtotal() >= CONFIG.delivery.freeFrom ? 0 : CONFIG.delivery.fee;
}
// Melding bij het gekozen adres (leeg = alles goed)
function deliveryProblem() {
  if (state.mode !== 'bezorgen') return '';
  const z = currentZone(), R = zoneInfo(z);
  if (z === 'buiten') return 'Hier bezorgen we helaas niet. We bezorgen in Almere, Amsterdam, Diemen en het Gooi. Afhalen kan altijd.';
  if (R && subtotal() < R.minOrder) return `Bezorgen in ${R.label} kan vanaf ${money(R.minOrder)}. Nog ${money(R.minOrder - subtotal())} te gaan, of kies afhalen.`;
  return '';
}

/* ---------- hero board + countdown ---------- */
function renderBoard() {
  $('dropDate').textContent = CONFIG.drop.label;
  $('boardList').innerHTML = MENU.map(d => {
    const own = d.variants.filter(v => v.portions).map(v => ` · ${v.portions} ${v.unit || 'stuks'}`).join('');
    return `<li><span class="board-item-name">${d.name}${d.fixed ? ' <small>(altijd)</small>' : ''}</span><span class="board-item-stock ${d.soldOut ? 'out' : ''}">${d.soldOut ? 'Uitverkocht' : `${d.variants.length > 1 ? 'vanaf ' : ''}${money(Math.min(...d.variants.map(v => v.price)))}`}</span></li>`;
  }).join('');
  $('deadlineLabel').textContent = isSoon() ? 'Bestellen opent binnenkort. Volg ons op Instagram en WhatsApp.' : isClosed() ? 'Bestellen is gesloten voor deze ronde' : (new Date(CONFIG.drop.deadline).getTime() - Date.now() < 3600e3 ? `🔥 Bijna uitverkocht · laatste kans, bestellen sluit ${CONFIG.drop.deadlineLabel}` : `Bestellen sluit ${CONFIG.drop.deadlineLabel}`);
  document.querySelectorAll('[data-deadline]').forEach(n => { n.textContent = CONFIG.drop.deadlineLabel; });
  document.querySelectorAll('[data-droplabel]').forEach(n => { n.textContent = CONFIG.drop.label; });
  $('nextDrop').textContent = CONFIG.next;
  $('statusText').textContent = isSoon() ? 'Bestellen opent binnenkort' : isClosed() ? 'Bestellen gesloten' : 'Bestellen open';
  $('statusDot').classList.toggle('off', isClosed());
}

function renderCountdown() {
  const el = $('countdown');
  if (isSoon()) { el.innerHTML = '<div class="box"><strong>Binnenkort</strong><span>bestellen open</span></div>'; return; }
  const diff = Math.max(0, Math.floor((new Date(CONFIG.drop.deadline).getTime() - Date.now()) / 1000));
  if (!diff) { el.innerHTML = '<div class="box"><strong>Gesloten</strong><span>deze ronde</span></div>'; return; }
  const parts = [['D', Math.floor(diff / 86400)], ['U', Math.floor(diff % 86400 / 3600)], ['M', Math.floor(diff % 3600 / 60)], ['S', diff % 60]];
  el.innerHTML = parts.map(([l, v]) => `<div class="box"><strong>${String(v).padStart(2, '0')}</strong><span>${l}</span></div>`).join('');
}

/* ---------- menu ---------- */
function dishCard(d, closed) {
  const firstOk = (d.variants.find(v => !v.soldOut) || d.variants[0]).id;
  const left = leftFor(d, firstOk);
  const own = d.variants.filter(v => v.portions).map(v => ` · ${v.portions} ${v.unit || 'stuks'}`).join('');
  return `
    <article class="dish ${d.soldOut ? 'soldout' : ''}">
      <div class="dish-image"><img src="${d.image}" alt="${d.name}" loading="lazy" /></div>
      <div class="dish-body">
        <div class="dish-top"><h3>${d.name}</h3><span class="price">${d.variants.length > 1 ? 'vanaf ' : ''}${money(Math.min(...d.variants.map(v => v.price)))}</span></div>
        <p class="dish-desc">${d.desc}</p>
        <div class="meta-row">${d.fixed ? '<span class="chip accent">Basis · altijd te bestellen</span>' : ''}<span class="chip accent">${d.origin}</span><span class="chip">100% halal</span><span class="chip">Beperkt aantal beschikbaar</span></div>
        <p class="allergen visible"><b>Allergenen:</b> ${d.allergens}. <a href="allergenen.html">Meer info</a></p>
        <details class="dish-details"><summary>Het verhaal</summary><p class="story-text">${d.story}</p></details>
        ${d.variants.length > 1 ? `
          <div class="choice" role="radiogroup" aria-label="Maak je keuze">
            ${d.variants.map(v => `
              <label class="choice-opt ${v.soldOut ? 'disabled' : ''}"><input type="radio" name="var-${d.id}" value="${v.id}" ${v.id === firstOk ? 'checked' : ''} ${v.soldOut ? 'disabled' : ''}/><span>${v.name.replace(/^met /, '')}${v.soldOut ? '<small class="opt-hint">uitverkocht</small>' : v.hint ? `<small class="opt-hint">${v.hint}</small>` : ''}</span><b>${money(v.price)}</b></label>`).join('')}
          </div>` : ''}
        ${d.extras.map(e => `
          <label class="choice-opt extra" ${e.only ? `data-only="${e.only.join(',')}"` : ''}><input type="checkbox" name="ex-${d.id}" value="${e.id}"/><span>${e.name}${e.hint ? `<small class="opt-hint">${e.hint}</small>` : ''}</span><b>+${money(e.price)}</b></label>`).join('')}
        <div class="dish-actions">
          ${closed ? `<button class="waitlist-btn" disabled>${isSoon() ? 'Bestellen opent binnenkort' : 'Bestellen gesloten'}</button>` : d.soldOut ? '<button class="waitlist-btn" disabled>Uitverkocht</button>' : `
          <div class="qty-picker">
            <button type="button" data-q="-1" data-id="${d.id}" aria-label="Minder">−</button>
            <span id="q-${d.id}">1</span>
            <button type="button" data-q="1" data-id="${d.id}" aria-label="Meer">+</button>
          </div>
          <button class="add-btn" type="button" id="add-${d.id}" data-add="${d.id}" ${left ? '' : 'disabled'}>${left ? 'Toevoegen' : 'Max bereikt'}</button>`}
        </div>
      </div>
    </article>`;
}

function renderMenu() {
  const closed = isClosed();
  $('menuGrid').innerHTML = MENU.filter(d => !d.fixed).map(d => dishCard(d, closed)).join('');
  $('fixedGrid').innerHTML = MENU.filter(d => d.fixed).map(d => dishCard(d, closed)).join('');

  document.querySelectorAll('[data-q]').forEach(b => b.addEventListener('click', () => {
    const n = $('q-' + b.dataset.id);
    const d = dish(b.dataset.id);
    const max = Math.max(1, leftFor(d, selectedVariant(d)));
    n.textContent = String(Math.min(max, Math.max(1, Number(n.textContent) + Number(b.dataset.q))));
  }));
  document.querySelectorAll('[data-add]').forEach(b => b.addEventListener('click', () => addToCart(b.dataset.add)));
  MENU.forEach(d => {
    document.querySelectorAll(`input[name="var-${d.id}"]`).forEach(r => r.addEventListener('change', () => syncExtras(d.id)));
    syncExtras(d.id);
  });

  $('drinksGrid').innerHTML = DRINKS.map(d => `
    <div class="drink">
      <div><strong>${d.name}</strong>${d.note ? `<small>${d.note}</small>` : ''}</div>
      <b>${money(d.variants[0].price)}</b>
      ${closed ? '' : `<button type="button" class="drink-add" data-drink="${d.id}" aria-label="${d.name} toevoegen">+</button>`}
    </div>`).join('');
  document.querySelectorAll('[data-drink]').forEach(b => b.addEventListener('click', () => addDrink(b.dataset.drink)));

  $('comingGrid').innerHTML = COMING.map(c => `
    <figure class="coming"><img src="${c.image}" alt="${c.name}" loading="lazy"/><figcaption>${c.name}</figcaption></figure>`).join('');

  $('repertoire').innerHTML = REPERTOIRE.map(r => `
    <div class="rep-card">
      <h4><span aria-hidden="true">${r.icon}</span> ${r.title}</h4>
      <p class="rep-sub">${r.sub}</p>
      <ul>${r.items.map(i => Array.isArray(i) ? `<li class="priced"><span>${i[0]}</span><b>${money(i[1])}</b></li>` : `<li>${i}</li>`).join('')}</ul>
    </div>`).join('');
}

function addDrink(id) {
  const d = dish(id);
  const key = id + '|std';
  const found = state.cart.find(i => i.key === key);
  if (found) found.qty += 1; else state.cart.push({ key, dishId: id, variantId: 'std', extras: [], qty: 1 });
  state.sent = false;
  toast(`${d.name} toegevoegd`);
  renderCart();
}

function syncExtras(dishId) {
  const v = document.querySelector(`input[name="var-${dishId}"]:checked`);
  const d = dish(dishId);
  const btn = $('add-' + dishId);
  if (btn && d) {
    const left = leftFor(d, v ? v.value : d.variants[0].id);
    btn.disabled = !left;
    btn.textContent = left ? 'Toevoegen' : 'Max bereikt';
    const q = $('q-' + dishId);
    if (q) q.textContent = String(Math.max(1, Math.min(Number(q.textContent), left || 1)));
  }
  document.querySelectorAll(`.choice-opt[data-only]`).forEach(label => {
    const input = label.querySelector(`input[name="ex-${dishId}"]`);
    if (!input) return;
    const ok = !v || label.dataset.only.split(',').includes(v.value);
    input.disabled = !ok;
    if (!ok) input.checked = false;
    label.classList.toggle('disabled', !ok);
  });
}

function addToCart(dishId) {
  const d = dish(dishId);
  const qty = Number($('q-' + dishId).textContent);
  const variantEl = document.querySelector(`input[name="var-${dishId}"]:checked`);
  const variantId = variantEl ? variantEl.value : d.variants[0].id;
  const extras = [...document.querySelectorAll(`input[name="ex-${dishId}"]:checked`)].map(e => e.value).filter(id => extraAllowed(d.extras.find(x => x.id === id), variantId));
  const p = pool(d, variantId);
  if (qtyInPool(p.key) + qty > p.max) { toast(p.max ? 'Meer kunnen we deze ronde niet maken. Op = op!' : 'Helaas, dit is uitverkocht.'); return; }
  const key = [dishId, variantId, ...extras.sort()].join('|');
  const found = state.cart.find(i => i.key === key);
  if (found) found.qty += qty; else state.cart.push({ key, dishId, variantId, extras, qty });
  state.sent = false;
  toast(`${qty}× ${d.name} toegevoegd`);
  renderMenu();
  renderCart();
  loadStock();
  if (isSoon() && CONFIG.orderingOpenAt) setTimeout(() => location.reload(), Math.max(1000, new Date(CONFIG.orderingOpenAt).getTime() - Date.now() + 1500));
}

/* ---------- cart + checkout ---------- */
function readForm() {
  const v = id => ($(id) ? $(id).value.trim() : '');
  return { name: v('fName'), phone: v('fPhone'), email: v('fEmail'), street: v('fStreet'), postcode: v('fPostcode').toUpperCase().replace(/\s+/g, ''), note: v('fNote') };
}

function renderCart() {
  const count = state.cart.reduce((s, i) => s + i.qty, 0);
  $('cartCount').textContent = String(count);
  $('stickyTotal').textContent = money(payTotal());
  $('stickyCart').classList.toggle('show', count > 0 && !state.sent);

  const body = $('drawerBody');
  const foot = $('drawerFooter');

  if (state.sent) {
    body.innerHTML = `
      <div class="empty-state">
        <span class="script">✓</span>
        <h3>Bijna klaar!</h3>
        <p style="margin-top:12px">Je bestelling staat in WhatsApp. <strong>Druk daar op verzenden</strong>, anders komt hij niet bij ons aan.</p>
        <p style="margin-top:12px;color:var(--muted)">Je krijgt van ons een bevestiging en een betaalverzoek. Pas na betaling staat je bestelling vast.</p>
      </div>`;
    foot.innerHTML = '<button class="checkout-btn" id="resendBtn">WhatsApp opnieuw openen</button><button class="ghost-btn" id="newOrderBtn">Nieuwe bestelling</button>';
    $('resendBtn').addEventListener('click', openWhatsApp);
    $('newOrderBtn').addEventListener('click', () => { state.cart = []; state.sent = false; renderCart(); renderMenu(); closeCart(); });
    return;
  }

  if (!count) {
    body.innerHTML = `<div class="empty-state"><span class="script">🍲</span><h3>Nog niets gekozen</h3><p>Kies je gerechten uit het menu van ${esc(CONFIG.drop.label.toLowerCase())}.</p></div>`;
    foot.innerHTML = '';
    return;
  }

  const prev = readForm();
  const slots = (state.mode === 'bezorgen' ? CONFIG.delivery.slots : CONFIG.pickup.slots).filter(s => state.mode === 'bezorgen' || !state.full.includes(s));
  if (!slots.includes(state.slot)) state.slot = '';

  body.innerHTML = `
    ${state.cart.map((i, idx) => {
      const L = lineInfo(i);
      return `<div class="cart-item"><div><strong>${esc(L.label)}</strong><small>${money(L.unit)} per stuk</small></div>
        <div class="cart-meta"><strong>${money(L.unit * i.qty)}</strong>
        <div class="qty-adjust"><button type="button" data-c="-1" data-i="${idx}">−</button><span>${i.qty}</span><button type="button" data-c="1" data-i="${idx}">+</button></div></div></div>`;
    }).join('')}

    <div class="field"><label>Afhalen of bezorgen?</label>
      <div class="toggle">
        <button type="button" class="${state.mode === 'afhalen' ? 'active' : ''}" data-mode="afhalen">Afhalen</button>
        <button type="button" class="${state.mode === 'bezorgen' ? 'active' : ''}" data-mode="bezorgen">Bezorgen</button>
      </div>
      <p class="hint">${state.mode === 'afhalen'
        ? `Afhalen in ${CONFIG.pickup.area}. Het adres krijg je bij je bevestiging.`
        : `Almere: bezorgen ${money(CONFIG.delivery.fee)}, gratis vanaf ${money(CONFIG.delivery.freeFrom)}. Buiten Almere: ${CONFIG.delivery.zones.map(z => `${z.label} vanaf ${money(z.minOrder)} (bezorgkosten ${money(z.fee)})`).join('; ')}.`}</p>
    </div>

    <div class="field"><label>${state.mode === 'afhalen' ? 'Ophaaltijd' : 'Tijdvak'} op ${esc(CONFIG.drop.dayShort)}</label>
      <div class="slot-grid">${slots.map(s => `<button type="button" class="slot-button ${state.slot === s ? 'active' : ''}" data-slot="${s}">${s}</button>`).join('')}</div>${slots.length ? '' : '<p class="drawer-note">Alle ophaaltijden zijn vol. Kies bezorgen of probeer het later nog eens.</p>'}
    </div>

    <div class="field"><label for="fName">Naam</label><input id="fName" type="text" autocomplete="name" placeholder="Voor- en achternaam" value="${esc(prev.name)}"/></div>
    <div class="field"><label for="fPhone">Telefoon</label><input id="fPhone" type="tel" autocomplete="tel" placeholder="Voor als er iets is" value="${esc(prev.phone)}"/></div>
    ${PAY ? `<div class="field"><label for="fEmail">E-mail (optioneel)</label><input id="fEmail" type="email" autocomplete="email" placeholder="Voor je bevestiging" value="${esc(prev.email)}"/></div>` : ''}
    ${state.mode === 'bezorgen' ? `
      <div class="field"><label for="fStreet">Straat + huisnummer</label><input id="fStreet" type="text" autocomplete="street-address" value="${esc(prev.street)}"/></div>
      <div class="field"><label for="fPostcode">Postcode</label><input id="fPostcode" type="text" autocomplete="postal-code" placeholder="Postcode, bijv. 1315 AB" value="${esc(prev.postcode)}"/></div>
` : ''}
    <div class="field"><label for="fCode">Kortingscode (optioneel)</label>
        <div style="display:flex;gap:8px"><input id="fCode" type="text" autocapitalize="characters" autocomplete="off" placeholder="Heb je een code?" value="${esc(state.code)}" ${state.code ? 'readonly' : ''} style="flex:1"/><button type="button" class="ghost-btn" id="codeBtn" style="width:auto;padding:0 16px">${state.code ? 'Weghalen' : 'Toepassen'}</button></div>
        <p class="hint" id="codeMsg" style="${state.code ? 'color:#5fbf7a;font-weight:600' : ''}">${esc(state.codeMsg)}</p></div>
    <div class="field"><label for="fNote">Opmerking of allergie (optioneel)</label><input id="fNote" type="text" value="${esc(prev.note)}"/></div>
  `;

  renderFoot();

  body.querySelectorAll('[data-c]').forEach(b => b.addEventListener('click', () => {
    const i = state.cart[Number(b.dataset.i)];
    const d = dish(i.dishId);
    const delta = Number(b.dataset.c);
    const p = pool(d, i.variantId);
    if (delta > 0 && qtyInPool(p.key) >= p.max) { toast('Meer kunnen we deze ronde niet maken. Op = op!'); return; }
    i.qty += delta;
    if (i.qty <= 0) state.cart.splice(Number(b.dataset.i), 1);
    renderCart(); renderMenu();
  }));
  body.querySelectorAll('[data-mode]').forEach(b => b.addEventListener('click', () => { state.mode = b.dataset.mode; if (state.mode !== 'bezorgen' && state.codeKind === 'woc') clearCode(); renderCart(); }));
  const codeBtn = $('codeBtn');
  if (codeBtn) codeBtn.addEventListener('click', applyCode);
  body.querySelectorAll('[data-slot]').forEach(b => b.addEventListener('click', () => { state.slot = b.dataset.slot; renderCart(); }));
  const pcEl = $('fPostcode');
  if (pcEl) pcEl.addEventListener('input', () => { renderFoot(); });
}

async function applyCode() {
  if (state.code) { clearCode(); return renderCart(); }
  const raw = ($('fCode') || {}).value || '';
  if (!raw.trim()) { $('codeMsg').textContent = 'Vul een code in.'; return; }
  const btn = $('codeBtn'); btn.disabled = true;
  try {
    const r = await fetch('/api/code', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ code: raw, mode: state.mode }) });
    const j = await r.json().catch(() => ({}));
    if (!r.ok || !j.ok) throw new Error(j.error || 'Code controleren lukt even niet.');
    state.code = j.code; state.codeKind = j.kind; state.codePct = j.pct || 0; state.codeMsg = `Code toegepast: ${j.label}`;
    renderCart();
  } catch (e) { btn.disabled = false; $('codeMsg').textContent = e.message; $('codeMsg').style.color = '#e0ae42'; }
}

function renderFoot() {
  const foot = $('drawerFooter');
  $('stickyTotal').textContent = money(payTotal());
  const fee = deliveryFee();
  const problem = deliveryProblem();
  const ready = !!CONFIG.whatsapp && !isClosed() && !problem;
  foot.innerHTML = `
    <div class="totals">
      <div class="line-total"><span>Subtotaal</span><strong>${money(subtotal())}</strong></div>
      ${discount() ? `<div class="line-total"><span>Korting (${esc(state.code)})</span><strong>-${money(discount())}</strong></div>` : ''}
      <div class="line-total"><span>${state.mode === 'bezorgen' ? 'Bezorgen' : 'Afhalen'}</span><strong>${fee ? money(fee) : 'Gratis'}</strong></div>
      <div class="line-total total"><span>Totaal</span><strong>${money(payTotal())}</strong></div>
    </div>
    ${problem ? `<p class="drawer-note" style="color:#e0ae42;font-weight:600">${esc(problem)}</p>` : ''}
    <button class="checkout-btn ${PAY ? '' : 'wa'}" type="button" id="checkoutBtn" ${ready ? '' : 'disabled'}>${!ready ? (problem ? 'Controleer je adres' : 'Bestellen opent binnenkort') : PAY ? `Betalen met iDEAL · ${money(payTotal())}` : 'Bestellen en betalen via WhatsApp'}</button>
    <div class="drawer-note">${PAY ? 'Je betaalt veilig via Mollie. Daarna zie je meteen je bevestiging.' : 'Na je bestelling krijg je een betaalverzoek. Je bestelling staat vast na betaling.'} Door te bestellen ga je akkoord met onze <a href="voorwaarden.html" target="_blank">voorwaarden</a> en <a href="privacy.html" target="_blank">privacyverklaring</a>.</div>
  `;

  const cb = $('checkoutBtn');
  if (cb) cb.addEventListener('click', checkout);
}

function buildMessage(f) {
  const lines = [];
  lines.push(`Bestelling Switi Spang – ${CONFIG.drop.label}`);
  lines.push('');
  state.cart.forEach(i => { const L = lineInfo(i); lines.push(`${i.qty}× ${L.label} – ${money(L.unit * i.qty)}`); });
  lines.push('');
  const fee = deliveryFee();
  if (state.mode === 'bezorgen') lines.push(`Bezorgen: ${fee ? money(fee) : 'gratis'}`);
  if (discount()) lines.push(`Kortingscode: ${state.code} (${state.codePct}% korting): -${money(discount())}`);
  lines.push(`Totaal: ${money(payTotal())}`);
  lines.push('');
  lines.push(state.mode === 'bezorgen' ? `Bezorgen tussen ${state.slot}` : `Afhalen om ${state.slot}`);
  if (state.mode === 'bezorgen') lines.push(`Adres: ${f.street}, ${f.postcode}${zoneOf(f.postcode) !== 'almere' ? ' (buiten Almere)' : ' Almere'}`);
  lines.push(`Naam: ${f.name}`);
  lines.push(`Telefoon: ${f.phone}`);
  if (f.note) lines.push(`Opmerking: ${f.note}`);
  return lines.join('\n');
}

function checkout() {
  const f = readForm();
  if (!state.slot) return toast(state.mode === 'bezorgen' ? 'Kies een tijdvak.' : 'Kies een ophaaltijd.');
  if (!f.name) return toast('Vul je naam in.');
  if (f.phone.replace(/\D/g, '').length < 9) return toast('Vul je telefoonnummer in.');
  if (PAY && f.email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(f.email)) return toast('Dit e-mailadres klopt niet. Laat het leeg of controleer het.');
  if (state.mode === 'bezorgen') {
    if (!f.street) return toast('Vul je straat en huisnummer in.');
    if (!/^\d{4}[A-Z]{2}$/.test(f.postcode)) return toast('Vul een geldige postcode in, bijvoorbeeld 1315AB.');
    const problem = deliveryProblem();
    if (problem) return toast(problem);
  }
  state.lastMessage = buildMessage(f);
  if (PAY) return payOnline(f);
  openWhatsApp();
  state.sent = true;
  renderCart();
}

async function payOnline(f) {
  const btn = $('checkoutBtn');
  btn.disabled = true; btn.textContent = 'Even geduld…';
  try {
    const r = await fetch('/api/checkout', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ cart: state.cart.map(({ dishId, variantId, extras, qty }) => ({ dishId, variantId, extras, qty })), mode: state.mode, slot: state.slot, form: f, code: state.code })
    });
    const j = await r.json().catch(() => ({}));
    if (!r.ok || !j.checkoutUrl) { if (j.refresh) loadStock(); if (j.codeUsed) { clearCode(); renderCart(); } throw new Error(j.error || 'Betalen lukt even niet. Probeer het zo opnieuw.'); }
    store.set('ss_order', { msg: state.lastMessage, id: j.id, cart: state.cart, mode: state.mode, slot: state.slot, form: f, code: state.code });
    location.href = j.checkoutUrl;
  } catch (e) {
    toast(e.message);
    renderCart();
  }
}

// Wat is er op en welke ophaaltijden zijn vol? Uit de betalingen van alle klanten (server).
async function loadStock() {
  if (!PAY) return;
  try {
    const j = await (await fetch('/api/stock', { cache: 'no-store' })).json();
    const sig = JSON.stringify([j.soldOut || [], j.fullSlots || []]);
    if (sig === state.stockSig) return; // niets veranderd: menu niet opnieuw tekenen
    state.stockSig = sig;
    CONFIG_RUNTIME_RESET();
    (j.soldOut || []).forEach(k => {
      const [id, vid] = k.split(':');
      const d = dish(id);
      if (!d) return;
      if (vid) { const v = d.variants.find(x => x.id === vid); if (v) v.soldOut = true; } else d.soldOut = true;
    });
    state.full = j.fullSlots || [];
    if (state.slot && state.full.includes(state.slot) && state.mode === 'afhalen') state.slot = '';
    renderBoard(); renderMenu(); renderCart();
  } catch (e) { /* geen verbinding met voorraad: de server controleert bij het afrekenen toch */ }
}
// Zet eerder gezette 'op'-markeringen terug, zodat een ronde die weer vrijkomt (bv. na een verlopen betaling) weer te bestellen is.
const BASE_SOLD = new Map();
function CONFIG_RUNTIME_RESET() {
  if (!BASE_SOLD.size) [...MENU, ...DRINKS].forEach(d => { BASE_SOLD.set(d.id, !!d.soldOut); d.variants.forEach(v => BASE_SOLD.set(d.id + ':' + v.id, !!v.soldOut)); });
  [...MENU, ...DRINKS].forEach(d => { d.soldOut = BASE_SOLD.get(d.id); d.variants.forEach(v => { v.soldOut = BASE_SOLD.get(d.id + ':' + v.id); }); });
}

// Terug van Mollie zonder te betalen: zet de winkelmand terug.
function restoreAfterCancel() {
  if (!location.search.includes('betaling=geannuleerd')) return;
  const o = store.get('ss_order');
  if (o && o.cart) { state.cart = o.cart; state.mode = o.mode; state.slot = o.slot; }
  history.replaceState(null, '', location.pathname);
  setTimeout(() => { toast('Betaling geannuleerd. Je bestelling staat nog in je mandje.'); if (state.cart.length) openCart(); }, 400);
}

function accBanner() {
  if (!ACC) return;
  const b = document.createElement('div');
  b.className = 'acc-banner';
  b.textContent = 'ACCEPTATIE · testversie, niet de echte site';
  document.body.prepend(b);
}

function openWhatsApp() {
  if (!CONFIG.whatsapp || !state.lastMessage) return;
  window.open(`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(state.lastMessage)}`, '_blank');
}

/* ---------- ui helpers ---------- */
function toast(msg) {
  const t = $('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toast.t);
  toast.t = setTimeout(() => t.classList.remove('show'), 2400);
}
function openCart() { loadStock(); $('cartDrawer').classList.add('open'); $('scrim').classList.add('show'); document.body.style.overflow = 'hidden'; }
function closeCart() { $('cartDrawer').classList.remove('open'); $('scrim').classList.remove('show'); document.body.style.overflow = ''; }

function initLaunch() {
  const el = $('launch');
  if (!el) return;
  const at = new Date(CONFIG.launchAt).getTime();
  if (Date.now() >= at || location.search.includes('preview')) return;
  el.hidden = false;
  document.body.classList.add('prelaunch');
  const tick = () => {
    const diff = Math.max(0, Math.floor((at - Date.now()) / 1000));
    if (!diff) {
      el.classList.add('gone');
      document.body.classList.remove('prelaunch');
      setTimeout(() => { el.hidden = true; }, 900);
      clearInterval(t);
      return;
    }
    const parts = [['uur', Math.floor(diff / 3600)], ['min', Math.floor(diff % 3600 / 60)], ['sec', diff % 60]];
    $('launchCount').innerHTML = parts.map(([l, v]) => `<div class="box"><strong>${String(v).padStart(2, '0')}</strong><span>${l}</span></div>`).join('');
  };
  const t = setInterval(tick, 1000);
  tick();
}

function init() {
  accBanner();
  initLaunch();
  document.querySelectorAll('[data-ig]').forEach(a => { a.href = CONFIG.instagram; });
  document.querySelectorAll('[data-tt]').forEach(a => { a.href = CONFIG.tiktok; });
  document.querySelectorAll('[data-mail]').forEach(a => { a.href = 'mailto:' + CONFIG.email; a.textContent = CONFIG.email; });
  document.querySelectorAll('[data-wa]').forEach(a => { a.href = 'https://wa.me/' + CONFIG.whatsapp; a.textContent = CONFIG.phoneLabel; });
  document.querySelectorAll('[data-kvk]').forEach(n => { if (CONFIG.kvk) n.textContent = ' · KvK ' + CONFIG.kvk; });
  if (!$('menuGrid')) return; // subpagina's: alleen contactgegevens invullen
  restoreAfterCancel();
  $('openCartBtn').addEventListener('click', openCart);
  $('stickyCartBtn').addEventListener('click', openCart);
  $('closeCartBtn').addEventListener('click', closeCart);
  $('scrim').addEventListener('click', closeCart);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeCart(); });
  renderBoard();
  renderCountdown();
  setInterval(renderCountdown, 1000);
  renderMenu();
  renderCart();
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
