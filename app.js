/* ============================================================
   SWITI SPANG — instellingen voor deze week
   Pas hier het menu, de prijzen en het WhatsApp-nummer aan.
   ============================================================ */
const CONFIG = {
  // WhatsApp-nummer voor bestellingen, internationaal zonder + of 0 vooraan (06 12345678 -> '31612345678').
  // Leeg = bestelknop staat uit.
  whatsapp: '',

  drop: {
    label: 'Woensdag 18 november',
    dayShort: 'woensdag',
    deadline: '2026-11-16T20:00:00+01:00', // bestellen sluit
    deadlineLabel: 'maandag 16 november, 20:00'
  },
  next: 'Zaterdag 21 november: menu volgt woensdagavond op Instagram.',

  pickup: {
    area: 'Almere-Buiten',
    slots: ['17:00', '17:30', '18:00', '18:30', '19:00', '19:30']
  },
  delivery: {
    fee: 2.5,
    freeFrom: 30,
    slots: ['17:00 – 18:00', '18:00 – 19:00', '19:00 – 20:00']
  },
  instagram: 'https://www.instagram.com/switispang',
  tiktok: 'https://www.tiktok.com/@switispang'
};

const MENU = [
  {
    id: 'roti',
    name: 'Roti',
    portions: 10,
    image: 'img/roti-kip.jpg',
    origin: 'India → Suriname · 1873',
    desc: 'Zachte roti met kip in masala met jeera, aardappel, kousenband en ei. Kies kippenbout, kippendijfilet of vega (zonder kip). Zoals het in de familie al generaties gemaakt wordt.',
    story: 'Op 5 juni 1873 legde de Lalla Rookh aan in Suriname, met mensen uit India aan boord. Met hun kruiden en hun brood. Zo kwam roti naar Suriname, en werd hij van ons allemaal.',
    allergens: 'Gluten, ei, soja, selderij, mosterd',
    variants: [
      { id: 'bout', name: 'met kippenbout', price: 17.5 },
      { id: 'filet', name: 'met kippendijfilet', price: 18.5 },
      { id: 'vega', name: 'vega (zonder kip) 🌱', price: 15.0 }
    ],
    extras: [{ id: 'roti', name: 'Extra roti', price: 3.0 }]
  },
  {
    id: 'gritibana',
    name: 'Gritibana',
    portions: 10,
    image: 'img/gritibana.jpg',
    origin: 'Creoolse keuken · Afrikaanse wortels',
    desc: 'Soep van geraspte groene banaan, met kippendij, halal zoutvlees en krontomirki (kokosmelk). Met witte rijst.',
    story: 'Griti = raspen, bana = banaan. De banaan wordt met de hand geraspt en tot balletjes gedraaid. Echte oso nyan: wat je bij oma kreeg als het koud was.',
    allergens: 'Gluten, selderij',
    variants: [{ id: 'std', name: 'met rijst', price: 13.5 }],
    extras: []
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
  { name: 'Saoto', image: 'img/saoto.jpg' },
  { name: 'Bravoe', image: 'img/bravoe.jpg' },
  { name: 'Tayersoep', image: 'img/tayersoep.jpg' }
];

// De Switi Spang-keuken: wat er de komende weken langskomt (geen prijzen, wisselt per week).
const REPERTOIRE = [
  { icon: '🍲', title: 'Soepen', sub: 'Traditioneel, met rijst', items: ['Gritibana', 'Saoto', 'Okersoep', 'Bravoe', 'Tayersoep', 'Pindasoep', 'Cassavesoep'] },
  { icon: '🫓', title: 'Roti', sub: 'Met aardappel, kousenband en ei', items: ['Roti kip (kippenbout)', 'Roti kip (kippendijfilet)', 'Roti lams', 'Roti masala doks', 'Roti vega'] },
  { icon: '🍛', title: 'Rijstgerechten', sub: 'Gestoofd of geroosterd, zoals thuis', items: ['Rijst met kip en antroewa', 'Rijst met kip en sopropo', 'Rijst met gestoofd rundvlees en Surinaamse zuurkool', 'Rijst met aardappel en rookworst', 'Witte rijst met kousenband, aardappel en garnalen', 'Moksi alesi met geroosterde kip', 'Chow mein met geroosterde kip'] },
  { icon: '🥟', title: 'Buns', sub: 'Van traditie naar trendy', items: ['Bun met krokante garnalen', 'Redi Fowru bun: red roasted chicken'] },
  { icon: '🦀', title: 'Seafood boil · Paramaribo style', sub: 'Binnenkort', items: ['Krab, grote garnalen, rivierkreeft en spinkrab', 'Met krieltjes, maïs en worst', 'In masala en kokosmelk', 'Hoe pittig? Dat kies je zelf'] },
  { icon: '✨', title: 'Weekend specials', sub: 'Surinaams in een ander jasje', items: ['Elke week een verrassing', 'Volg Instagram en onze WhatsApp-community'] },
  { icon: '🥤', title: 'Binnenkort te drinken', sub: 'Huisgemaakt', items: ['Gemberbier', 'Surinaamse cola (colasiroop)', 'Markoesa-sap'] }
];

/* ============================================================ */

const state = {
  cart: [], // { key, dishId, variantId, extras:[ids], qty }
  mode: 'afhalen',
  slot: '',
  sent: false
};

const $ = id => document.getElementById(id);
const money = v => `€${Number(v).toFixed(2).replace('.', ',')}`;
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

function isClosed() {
  return Date.now() > new Date(CONFIG.drop.deadline).getTime();
}

function dish(id) { return MENU.find(d => d.id === id) || DRINKS.find(d => d.id === id); }

function lineInfo(item) {
  const d = dish(item.dishId);
  const v = d.variants.find(x => x.id === item.variantId);
  const ex = d.extras.filter(e => item.extras.includes(e.id));
  const unit = v.price + ex.reduce((s, e) => s + e.price, 0);
  const label = [d.name, v.name, ...ex.map(e => '+ ' + e.name.toLowerCase())].filter(Boolean).join(' ');
  return { d, v, ex, unit, label };
}

function qtyInCart(dishId) {
  return state.cart.filter(i => i.dishId === dishId).reduce((s, i) => s + i.qty, 0);
}

function subtotal() { return state.cart.reduce((s, i) => s + lineInfo(i).unit * i.qty, 0); }
function deliveryFee() {
  if (state.mode !== 'bezorgen') return 0;
  return subtotal() >= CONFIG.delivery.freeFrom ? 0 : CONFIG.delivery.fee;
}

/* ---------- hero board + countdown ---------- */
function renderBoard() {
  $('dropDate').textContent = CONFIG.drop.label;
  $('boardList').innerHTML = MENU.map(d => `
    <li><span class="board-item-name">${d.name}</span><span class="board-item-stock">${d.portions} porties</span></li>
  `).join('');
  $('deadlineLabel').textContent = isClosed() ? 'Bestellen is gesloten voor deze ronde' : `Bestellen sluit ${CONFIG.drop.deadlineLabel}`;
  document.querySelectorAll('[data-deadline]').forEach(n => { n.textContent = CONFIG.drop.deadlineLabel; });
  document.querySelectorAll('[data-droplabel]').forEach(n => { n.textContent = CONFIG.drop.label; });
  $('nextDrop').textContent = CONFIG.next;
  $('statusText').textContent = isClosed() ? 'Bestellen gesloten' : 'Bestellen open';
  $('statusDot').classList.toggle('off', isClosed());
}

function renderCountdown() {
  const el = $('countdown');
  const diff = Math.max(0, Math.floor((new Date(CONFIG.drop.deadline).getTime() - Date.now()) / 1000));
  if (!diff) { el.innerHTML = '<div class="box"><strong>Gesloten</strong><span>deze ronde</span></div>'; return; }
  const parts = [['D', Math.floor(diff / 86400)], ['U', Math.floor(diff % 86400 / 3600)], ['M', Math.floor(diff % 3600 / 60)], ['S', diff % 60]];
  el.innerHTML = parts.map(([l, v]) => `<div class="box"><strong>${String(v).padStart(2, '0')}</strong><span>${l}</span></div>`).join('');
}

/* ---------- menu ---------- */
function renderMenu() {
  const closed = isClosed();
  $('menuGrid').innerHTML = MENU.map(d => {
    const left = Math.max(0, d.portions - qtyInCart(d.id));
    return `
    <article class="dish">
      <div class="dish-image"><img src="${d.image}" alt="${d.name}" loading="lazy" /></div>
      <div class="dish-body">
        <div class="dish-top"><h3>${d.name}</h3><span class="price">${d.variants.length > 1 ? 'vanaf ' : ''}${money(Math.min(...d.variants.map(v => v.price)))}</span></div>
        <p class="dish-desc">${d.desc}</p>
        <div class="meta-row"><span class="chip accent">${d.origin}</span><span class="chip">100% halal</span><span class="chip">Max. ${d.portions} porties</span></div>
        <details class="dish-details"><summary>Het verhaal</summary><p class="story-text">${d.story}</p><p class="allergen">Allergenen: ${d.allergens}. Alles halal; sporen van andere allergenen mogelijk.</p></details>
        ${d.variants.length > 1 ? `
          <div class="choice" role="radiogroup" aria-label="Kies je vlees">
            ${d.variants.map((v, i) => `
              <label class="choice-opt"><input type="radio" name="var-${d.id}" value="${v.id}" ${i === 0 ? 'checked' : ''}/><span>${v.name.replace(/^met /, '')}</span><b>${money(v.price)}</b></label>`).join('')}
          </div>` : ''}
        ${d.extras.map(e => `
          <label class="choice-opt extra"><input type="checkbox" name="ex-${d.id}" value="${e.id}"/><span>${e.name}</span><b>+${money(e.price)}</b></label>`).join('')}
        <div class="dish-actions">
          ${closed ? '<button class="waitlist-btn" disabled>Bestellen gesloten</button>' : `
          <div class="qty-picker">
            <button type="button" data-q="-1" data-id="${d.id}" aria-label="Minder">−</button>
            <span id="q-${d.id}">1</span>
            <button type="button" data-q="1" data-id="${d.id}" aria-label="Meer">+</button>
          </div>
          <button class="add-btn" type="button" data-add="${d.id}" ${left ? '' : 'disabled'}>${left ? 'Toevoegen' : 'Max bereikt'}</button>`}
        </div>
      </div>
    </article>`;
  }).join('');

  document.querySelectorAll('[data-q]').forEach(b => b.addEventListener('click', () => {
    const n = $('q-' + b.dataset.id);
    const d = dish(b.dataset.id);
    const max = Math.max(1, d.portions - qtyInCart(d.id));
    n.textContent = String(Math.min(max, Math.max(1, Number(n.textContent) + Number(b.dataset.q))));
  }));
  document.querySelectorAll('[data-add]').forEach(b => b.addEventListener('click', () => addToCart(b.dataset.add)));

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
      <ul>${r.items.map(i => `<li>${i}</li>`).join('')}</ul>
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

function addToCart(dishId) {
  const d = dish(dishId);
  const qty = Number($('q-' + dishId).textContent);
  const variantEl = document.querySelector(`input[name="var-${dishId}"]:checked`);
  const variantId = variantEl ? variantEl.value : d.variants[0].id;
  const extras = [...document.querySelectorAll(`input[name="ex-${dishId}"]:checked`)].map(e => e.value);
  if (qtyInCart(dishId) + qty > d.portions) { toast(`Er zijn maximaal ${d.portions} porties ${d.name}.`); return; }
  const key = [dishId, variantId, ...extras.sort()].join('|');
  const found = state.cart.find(i => i.key === key);
  if (found) found.qty += qty; else state.cart.push({ key, dishId, variantId, extras, qty });
  state.sent = false;
  toast(`${qty}× ${d.name} toegevoegd`);
  renderMenu();
  renderCart();
}

/* ---------- cart + checkout ---------- */
function readForm() {
  const v = id => ($(id) ? $(id).value.trim() : '');
  return { name: v('fName'), phone: v('fPhone'), street: v('fStreet'), postcode: v('fPostcode').toUpperCase().replace(/\s+/g, ''), note: v('fNote') };
}

function renderCart() {
  const count = state.cart.reduce((s, i) => s + i.qty, 0);
  $('cartCount').textContent = String(count);
  $('stickyTotal').textContent = money(subtotal() + deliveryFee());
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
  const slots = state.mode === 'bezorgen' ? CONFIG.delivery.slots : CONFIG.pickup.slots;
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
        : `Alleen binnen Almere. Bezorgen ${money(CONFIG.delivery.fee)}, gratis vanaf ${money(CONFIG.delivery.freeFrom)}.`}</p>
    </div>

    <div class="field"><label>${state.mode === 'afhalen' ? 'Ophaaltijd' : 'Tijdvak'} op ${esc(CONFIG.drop.dayShort)}</label>
      <div class="slot-grid">${slots.map(s => `<button type="button" class="slot-button ${state.slot === s ? 'active' : ''}" data-slot="${s}">${s}</button>`).join('')}</div>
    </div>

    <div class="field"><label for="fName">Naam</label><input id="fName" type="text" autocomplete="name" placeholder="Voor- en achternaam" value="${esc(prev.name)}"/></div>
    <div class="field"><label for="fPhone">Telefoon</label><input id="fPhone" type="tel" autocomplete="tel" placeholder="Voor als er iets is" value="${esc(prev.phone)}"/></div>
    ${state.mode === 'bezorgen' ? `
      <div class="field"><label for="fStreet">Straat + huisnummer</label><input id="fStreet" type="text" autocomplete="street-address" value="${esc(prev.street)}"/></div>
      <div class="field"><label for="fPostcode">Postcode</label><input id="fPostcode" type="text" autocomplete="postal-code" placeholder="13.. ..  (Almere)" value="${esc(prev.postcode)}"/></div>` : ''}
    <div class="field"><label for="fNote">Opmerking of allergie (optioneel)</label><input id="fNote" type="text" value="${esc(prev.note)}"/></div>
  `;

  const fee = deliveryFee();
  const ready = !!CONFIG.whatsapp;
  foot.innerHTML = `
    <div class="totals">
      <div class="line-total"><span>Subtotaal</span><strong>${money(subtotal())}</strong></div>
      <div class="line-total"><span>${state.mode === 'bezorgen' ? 'Bezorgen' : 'Afhalen'}</span><strong>${fee ? money(fee) : 'Gratis'}</strong></div>
      <div class="line-total total"><span>Totaal</span><strong>${money(subtotal() + fee)}</strong></div>
    </div>
    <button class="checkout-btn wa" type="button" id="checkoutBtn" ${ready ? '' : 'disabled'}>${ready ? 'Bestelling versturen via WhatsApp' : 'Bestellen opent binnenkort'}</button>
    <div class="drawer-note">Je betaalt via een betaalverzoek dat je na je bestelling van ons krijgt.</div>
  `;

  body.querySelectorAll('[data-c]').forEach(b => b.addEventListener('click', () => {
    const i = state.cart[Number(b.dataset.i)];
    const d = dish(i.dishId);
    const delta = Number(b.dataset.c);
    if (delta > 0 && qtyInCart(d.id) >= d.portions) { toast(`Maximaal ${d.portions} porties ${d.name}.`); return; }
    i.qty += delta;
    if (i.qty <= 0) state.cart.splice(Number(b.dataset.i), 1);
    renderCart(); renderMenu();
  }));
  body.querySelectorAll('[data-mode]').forEach(b => b.addEventListener('click', () => { state.mode = b.dataset.mode; renderCart(); }));
  body.querySelectorAll('[data-slot]').forEach(b => b.addEventListener('click', () => { state.slot = b.dataset.slot; renderCart(); }));
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
  lines.push(`Totaal: ${money(subtotal() + fee)}`);
  lines.push('');
  lines.push(state.mode === 'bezorgen' ? `Bezorgen tussen ${state.slot}` : `Afhalen om ${state.slot}`);
  if (state.mode === 'bezorgen') lines.push(`Adres: ${f.street}, ${f.postcode} Almere`);
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
  if (state.mode === 'bezorgen') {
    if (!f.street) return toast('Vul je straat en huisnummer in.');
    const pc = Number(f.postcode.slice(0, 4));
    if (!/^\d{4}[A-Z]{2}$/.test(f.postcode) || pc < 1311 || pc > 1364) return toast('We bezorgen alleen in Almere (postcode 1311–1364).');
  }
  state.lastMessage = buildMessage(f);
  openWhatsApp();
  state.sent = true;
  renderCart();
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
function openCart() { $('cartDrawer').classList.add('open'); $('scrim').classList.add('show'); document.body.style.overflow = 'hidden'; }
function closeCart() { $('cartDrawer').classList.remove('open'); $('scrim').classList.remove('show'); document.body.style.overflow = ''; }

function init() {
  document.querySelectorAll('[data-ig]').forEach(a => { a.href = CONFIG.instagram; });
  document.querySelectorAll('[data-tt]').forEach(a => { a.href = CONFIG.tiktok; });
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
