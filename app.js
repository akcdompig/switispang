/* ============================================================
   SWITI SPANG — instellingen voor deze week
   Pas hier het menu, de prijzen en het WhatsApp-nummer aan.
   ============================================================ */
const CONFIG = {
  // WhatsApp-nummer voor bestellingen, internationaal zonder + of 0 vooraan (06 12345678 -> '31612345678').
  // Leeg = bestelknop staat uit.
  whatsapp: '31624584854',

  // Bestellijn: false = site staat online, maar bestellen opent binnenkort. Zet op true zodra alles goedgekeurd is.
  orderingOpen: false,

  // Lancering: tot dit moment ziet de bezoeker een aftelpagina. Daarna verdwijnt die vanzelf.
  // Testen vóór de lancering: zet ?preview achter de link.
  launchAt: '2026-11-14T20:00:00+01:00',

  // Contact (staat in de footer en op de contactpagina)
  email: 'info@switispang.nl',
  phoneLabel: '06 24 58 48 54',
  kvk: '', // KvK-nummer; leeg = niet tonen

  drop: {
    label: 'Woensdag 18 november',
    dayShort: 'woensdag',
    deadline: '2026-11-17T20:00:00+01:00', // bestellen sluit
    deadlineLabel: 'dinsdag 17 november, 20:00'
  },
  next: 'Zaterdag 21 november: menu volgt woensdagavond op Instagram. Bestellen kan tot vrijdag 17:00.',

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

// Uitverkocht? Zet soldOut: true bij een gerecht of bij een keuze (bv. de rotirol).
// De teller telt per bestelling; houd zelf bij hoeveel er via WhatsApp binnen zijn.
const MENU = [
  {
    id: 'roti',
    name: 'Roti kip',
    portions: 10,
    image: 'img/roti-kip.jpg',
    origin: 'India → Suriname · 1873',
    desc: 'De rotiplaat wordt vers met de hand gemaakt, en daar proef je het verschil. Alleen de rotiplaat zelf is al heerlijk om zo te eten. Met kip in masala met jeera, aardappel, kousenband en ei. Kies kippenbout, kippendijfilet of vega (zonder kip). Liever een rotirol? Kies "rotirol": kippendijfilet met aardappel, kousenband en ei, gerold in een verse rotiplaat. Makkelijk mee te nemen.',
    story: 'Op 5 juni 1873 legde de Lalla Rookh aan in Suriname, met mensen uit India aan boord. Met hun kruiden en hun brood. Zo kwam roti naar Suriname, en werd hij van ons allemaal.',
    allergens: 'Gluten, ei, soja, selderij, mosterd',
    variants: [
      { id: 'bout', name: 'met kippenbout', price: 17.5 },
      { id: 'filet', name: 'met kippendijfilet', price: 18.5 },
      { id: 'vega', name: 'vega 🌱', hint: 'aardappel, kousenband en ei', cart: 'Roti vega', price: 15.0 },
      { id: 'rol', name: 'rotirol', hint: 'kippendijfilet gerold in een verse rotiplaat', cart: 'Rotirol kippendijfilet', price: 11.95, portions: 10, unit: 'rotirollen' } // eigen teller
    ],
    extras: [
      { id: 'groot', name: "Maak 'm groot", cart: '(groot)', price: 3.5, only: ['bout', 'filet', 'lams'], hint: 'extra stuk kip, meer aardappel en kousenband' },
      { id: 'ei', name: 'Extra ei', price: 1.5 },
      { id: 'roti', name: 'Extra verse rotiplaat', hint: 'lekker om zo bij te eten', price: 3.0, only: ['bout', 'filet', 'vega', 'lams'] }
    ]
  },
  {
    id: 'gritibana',
    name: 'Gritibana',
    portions: 10,
    image: 'img/gritibana.jpg',
    origin: 'Creoolse keuken · Afrikaanse wortels',
    desc: 'Een volle maaltijdsoep van geraspte groene banaan, met kippendij, halal zoutvlees en krontomirki (kokosmelk). Met witte rijst, sambal apart.',
    story: 'Griti = raspen, bana = banaan. De banaan wordt met de hand geraspt en tot balletjes gedraaid. Echte oso nyan: wat je bij oma kreeg als het koud was.',
    allergens: 'Gluten, selderij',
    variants: [{ id: 'std', name: 'met rijst', price: 13.5 }],
    extras: [
      { id: 'rijst', name: 'Extra rijst', price: 1.5 }
    ]
  },
  {
    id: 'saoto',
    name: 'Saoto',
    fixed: true, // basissoep: altijd te bestellen, elke ronde
    portions: 10,
    image: 'img/saoto.jpg',
    origin: 'Javaanse keuken · 1890',
    desc: 'Onze basissoep, altijd te bestellen. Een volle maaltijdsoep: heldere, kruidige kippensoep met kip, taugé, gebakken aardappel, ei en gebakken uitjes. Met witte rijst, sambal apart.',
    story: 'Op 9 augustus 1890 kwamen de eerste Javaanse contractarbeiders aan in Suriname. Uit hun soto ayam groeide saoto, met Surinaamse ingrediënten. Nu is het de soep van heel Suriname.',
    allergens: 'Ei, soja, gluten, selderij',
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
  { name: 'Bravoe', image: 'img/bravoe.jpg' },
  { name: 'Tayersoep', image: 'img/tayersoep.jpg' }
];

// De Switi Spang-keuken: wat er de komende weken langskomt (geen prijzen, wisselt per week).
const REPERTOIRE = [
  { icon: '🍲', title: 'Soepen', sub: 'Maaltijdsoepen met rijst · €13,50 · saoto (basis) €10,50', items: ['Gritibana', 'Saoto', 'Okersoep', 'Bravoe', 'Tayersoep', 'Pindasoep', 'Cassavesoep'] },
  { icon: '🫓', title: 'Roti', sub: 'Met aardappel, kousenband en ei', items: ['Roti kip (kippenbout)', 'Roti kip (kippendijfilet)', 'Roti lams', 'Roti masala doks', 'Roti vega'] },
  { icon: '🍛', title: 'Rijstgerechten', sub: 'Gestoofd of geroosterd, zoals thuis', items: ['Rijst met kip en antroewa', 'Rijst met kip en sopropo', 'Rijst met gestoofd rundvlees en Surinaamse zuurkool, met aardappel en kiprookworst', 'Witte rijst met kousenband, aardappel en garnalen', 'Masoesa moksi alesi met geroosterde kip', 'Chow mein met geroosterde kip'] },
  { icon: '🥟', title: 'Buns', sub: 'Van traditie naar trendy', items: ['Garnalen bun: garnalen in pittige tomatenjus, extra spicy saus optioneel', 'Redi Fowru bun: geroosterde kip met rode kruiden en een lekker sausje', 'Met frisse toppings als prei en komkommer'] },
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

function isSoon() { return !CONFIG.orderingOpen; }
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
function deliveryFee() {
  if (state.mode !== 'bezorgen') return 0;
  return subtotal() >= CONFIG.delivery.freeFrom ? 0 : CONFIG.delivery.fee;
}

/* ---------- hero board + countdown ---------- */
function renderBoard() {
  $('dropDate').textContent = CONFIG.drop.label;
  $('boardList').innerHTML = MENU.map(d => {
    const own = d.variants.filter(v => v.portions).map(v => ` · ${v.portions} ${v.unit || 'stuks'}`).join('');
    return `<li><span class="board-item-name">${d.name}${d.fixed ? ' <small>(altijd)</small>' : ''}</span><span class="board-item-stock">${d.soldOut ? 'Uitverkocht' : `${d.portions} porties${own}`}</span></li>`;
  }).join('');
  $('deadlineLabel').textContent = isSoon() ? 'Bestellen opent binnenkort. Volg ons op Instagram en WhatsApp.' : isClosed() ? 'Bestellen is gesloten voor deze ronde' : `Bestellen sluit ${CONFIG.drop.deadlineLabel}`;
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
        <div class="meta-row">${d.fixed ? '<span class="chip accent">Basis · altijd te bestellen</span>' : ''}<span class="chip accent">${d.origin}</span><span class="chip">100% halal</span><span class="chip">Max. ${d.portions} porties${own}</span></div>
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
  if (qtyInPool(p.key) + qty > p.max) { toast(p.max ? `Er zijn er maximaal ${p.max} van.` : 'Helaas, dit is uitverkocht.'); return; }
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
  const ready = !!CONFIG.whatsapp && !isClosed();
  foot.innerHTML = `
    <div class="totals">
      <div class="line-total"><span>Subtotaal</span><strong>${money(subtotal())}</strong></div>
      <div class="line-total"><span>${state.mode === 'bezorgen' ? 'Bezorgen' : 'Afhalen'}</span><strong>${fee ? money(fee) : 'Gratis'}</strong></div>
      <div class="line-total total"><span>Totaal</span><strong>${money(subtotal() + fee)}</strong></div>
    </div>
    <button class="checkout-btn wa" type="button" id="checkoutBtn" ${ready ? '' : 'disabled'}>${ready ? 'Bestellen en betalen via WhatsApp' : 'Bestellen opent binnenkort'}</button>
    <div class="drawer-note">Na je bestelling krijg je een betaalverzoek. Je bestelling staat vast na betaling. Door te bestellen ga je akkoord met onze <a href="voorwaarden.html" target="_blank">voorwaarden</a> en <a href="privacy.html" target="_blank">privacyverklaring</a>.</div>
  `;

  body.querySelectorAll('[data-c]').forEach(b => b.addEventListener('click', () => {
    const i = state.cart[Number(b.dataset.i)];
    const d = dish(i.dishId);
    const delta = Number(b.dataset.c);
    const p = pool(d, i.variantId);
    if (delta > 0 && qtyInPool(p.key) >= p.max) { toast(`Maximaal ${p.max} hiervan.`); return; }
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
  initLaunch();
  document.querySelectorAll('[data-ig]').forEach(a => { a.href = CONFIG.instagram; });
  document.querySelectorAll('[data-tt]').forEach(a => { a.href = CONFIG.tiktok; });
  document.querySelectorAll('[data-mail]').forEach(a => { a.href = 'mailto:' + CONFIG.email; a.textContent = CONFIG.email; });
  document.querySelectorAll('[data-wa]').forEach(a => { a.href = 'https://wa.me/' + CONFIG.whatsapp; a.textContent = CONFIG.phoneLabel; });
  document.querySelectorAll('[data-kvk]').forEach(n => { if (CONFIG.kvk) n.textContent = ' · KvK ' + CONFIG.kvk; });
  if (!$('menuGrid')) return; // subpagina's: alleen contactgegevens invullen
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
