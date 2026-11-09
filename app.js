const HF = 'https://d8j0ntlcm91z4.cloudfront.net/user_3JzqNSPzcBvxImvT5rkQXlGVhM9/';

const switiSpangConfig = {
  brand: 'SWITI SPANG',
  slogan: 'Switi eten. Spang geregeld.',
  orderDeadline: 'donderdag 20:00',
  pickupDay: 'vrijdag',
  pickupStart: '17:00',
  pickupEnd: '20:00',
  location: 'Almere',
  cashless: true,
  mollieReady: true,
  stockWarningThreshold: 4,
  weeklyCategory: 'weekmenu',
  images: {
    saoto: HF + 'hf_20261104_065540_8e1097df-d42f-480c-a889-035cfe1d3a07.png',
    rotiKip: HF + 'hf_20261104_101053_42471c8d-684c-4ae0-b996-8c3380cbe116.png',
    rotiKipdij: HF + 'hf_20261104_152454_f8a296c8-32ea-4cc2-959d-85a0f2bf314d.png',
    rotiDoks: HF + 'hf_20261104_131555_89ed6633-e6e7-40c0-bb66-74129d870887.png',
    bami: HF + 'hf_20261104_183955_fdc46e3e-2d4e-4d08-acb9-2451b49e7115.png',
    gritibana: HF + 'hf_20261104_070338_7975f782-7b76-4a98-88ab-9dfd5667b2eb.png',
    oker: HF + 'hf_20261104_071706_ed335a11-6eb4-4421-b1a6-0a1fa2306056.png',
    cassave: HF + 'hf_20261104_082131_a432bb97-b1e0-413d-b47d-a65e36dbab09.png',
    bravoe: HF + 'hf_20261104_083225_5a75c1c2-4c34-4c2b-87bc-ecf6c238bbd1.png',
    tayer: HF + 'hf_20261104_092606_49facc1b-f040-488b-8df8-e4fdde84c5e0.png'
  }
};

// category: 'vast' = vaste kaart (basisgerechten), 'weekend' = weekend specials (wisselen per week), 'extra' = erbij
const products = [
  {
    id: 'roti-doks',
    category: 'vast',
    name: 'Roti Doks',
    price: 14.5,
    stock: 6,
    sold: 0,
    signature: true,
    origin: 'Hindostaans',
    desc: 'Onze favoriet. Eend in kleine stukjes gehakt en traditioneel op de chula boven houtskool gegaard in donkere masala. Met zachte roti en masala-aardappel met kousenband.',
    allergens: 'Gluten',
    image: switiSpangConfig.images.rotiDoks,
    extras: [{ name: 'Extra roti', price: 2.5 }, { name: 'Sambal', price: 0.75 }]
  },
  {
    id: 'roti-kip',
    category: 'vast',
    name: 'Roti Kip',
    price: 12.5,
    stock: 15,
    sold: 0,
    origin: 'Hindostaans',
    desc: 'Kippenbout in goudgele masala, masala-aardappel met kousenband, een in olie gebakken masala-ei en zachte, droge roti. Zoals de Hindostaanse oma het maakte.',
    allergens: 'Gluten, ei',
    image: switiSpangConfig.images.rotiKip,
    extras: [{ name: 'Extra roti', price: 2.5 }, { name: 'Extra ei', price: 1.5 }, { name: 'Sambal', price: 0.75 }]
  },
  {
    id: 'roti-kipdij',
    category: 'vast',
    name: 'Roti Kippendijfilet',
    price: 13.0,
    stock: 12,
    sold: 0,
    origin: 'Hindostaans',
    desc: 'Liever geen bot? Sappige kippendijfilet in masala, met masala-aardappel, kousenband, masala-ei en zachte roti.',
    allergens: 'Gluten, ei',
    image: switiSpangConfig.images.rotiKipdij,
    extras: [{ name: 'Extra roti', price: 2.5 }, { name: 'Extra ei', price: 1.5 }, { name: 'Sambal', price: 0.75 }]
  },
  {
    id: 'saoto',
    category: 'vast',
    name: 'Saoto',
    price: 9.5,
    stock: 20,
    sold: 0,
    signature: true,
    origin: 'Javaans',
    desc: 'Heldere, kruidige kippensoep met kip, taugé, aardappelstengels, gebakken uitjes en ei. Met rijst, ketjap en sambal. Meegebracht door de Javaanse contractarbeiders.',
    allergens: 'Ei, soja',
    image: switiSpangConfig.images.saoto,
    extras: [{ name: 'Extra kip', price: 3.5 }, { name: 'Sambal', price: 0.75 }]
  },
  {
    id: 'bami',
    category: 'vast',
    name: 'Lipgloss Bami',
    price: 11.5,
    stock: 14,
    sold: 0,
    origin: 'Chinees-Javaans',
    desc: 'Glanzende bami in ketjap met gestoofde ketjapkip, kort gebakken kousenband, zuur van komkommer en rode ui, en sambal.',
    allergens: 'Gluten, soja',
    image: switiSpangConfig.images.bami,
    extras: [{ name: 'Extra kip', price: 3.5 }, { name: 'Sambal', price: 0.75 }]
  },
  {
    id: 'gritibana',
    category: 'weekend',
    name: 'Gritibana soep',
    price: 10.5,
    stock: 10,
    sold: 0,
    origin: 'Creools',
    desc: 'Romige kokossoep met balletjes van geraspte groene banaan en cassave, gerookte krabbetjes, kip en zoutvlees. Familiekost die je bijna nergens meer vindt. Met rijst.',
    allergens: 'Ei',
    image: switiSpangConfig.images.gritibana
  },
  {
    id: 'okersoep',
    category: 'weekend',
    name: 'Okersoep',
    price: 10.5,
    stock: 10,
    sold: 0,
    origin: 'Creools',
    desc: 'Okersoep met tajerblad, antroewa, kip en zoutvlees. Smaken met Afrikaanse wortels. Met rijst.',
    allergens: '—',
    image: switiSpangConfig.images.oker
  },
  {
    id: 'cassavesoep',
    category: 'weekend',
    name: 'Cassavesoep',
    price: 10.5,
    stock: 10,
    sold: 0,
    origin: 'Creools',
    desc: 'Romige kokosbouillon met zachte cassave, gerookte krabbetjes, kip en zoutvlees. Met rijst.',
    allergens: '—',
    image: switiSpangConfig.images.cassave
  },
  {
    id: 'bravoe',
    category: 'weekend',
    name: 'Bravoe soep',
    price: 11.0,
    stock: 10,
    sold: 0,
    origin: 'Creools',
    desc: 'Volle maaltijdsoep met cassave, zoete patat, groene en rijpe bakbanaan, kip, tajerblad en oker.',
    allergens: '—',
    image: switiSpangConfig.images.bravoe
  },
  {
    id: 'tayersoep',
    category: 'weekend',
    name: 'Tayersoep',
    price: 10.5,
    stock: 10,
    sold: 0,
    origin: 'Creools',
    desc: 'Romige soep van Chinese tayer, met zoutvlees en kip. Zacht, vullend en echt van thuis. Met rijst.',
    allergens: '—',
    image: switiSpangConfig.images.tayer
  },
  {
    id: 'gember',
    category: 'extra',
    name: 'Huisgemaakte gemberdrank',
    price: 3.5,
    stock: 25,
    sold: 0,
    desc: 'Verse gember, citroen en rietsuiker. Fris en lekker bij de pit.',
    allergens: '—',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'bojo',
    category: 'extra',
    name: 'Bojo cake',
    price: 4.5,
    stock: 18,
    sold: 0,
    desc: 'Zachte cassavecake met kokos, warm en licht zoet voor na het eten.',
    allergens: 'Ei, kokos',
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'zuur',
    category: 'extra',
    name: 'Komkommer in zuur',
    price: 2.0,
    stock: 30,
    sold: 0,
    desc: 'Komkommer met rode ui in zuur, met een lichte pit.',
    allergens: '—',
    image: 'https://images.unsplash.com/photo-1546094096-0df4bcaaa337?auto=format&fit=crop&w=900&q=80'
  }
];

const categoryMap = [
  { id: 'alles', label: 'Alles' },
  { id: 'vast', label: 'Vaste kaart' },
  { id: 'weekend', label: 'Weekend specials' },
  { id: 'extra', label: 'Erbij' }
];

const categoryInfo = {
  vast: {
    title: 'Vaste kaart',
    note: 'Onze basis: roti, saoto en bami. Elke week te bestellen.'
  },
  weekend: {
    title: 'Weekend specials',
    note: 'Wisselt elke week. Welke specials er dit weekend zijn, zie je in onze status en op Instagram. Hieronder een greep uit wat langskomt.'
  },
  extra: {
    title: 'Erbij',
    note: 'Drankje, zoetigheid of extra zuur erbij.'
  }
};

const state = {
  cart: [],
  activeCategory: 'alles',
  selectedSlot: '17:00',
  orderPlaced: false
};

function formatMoney(value) {
  return `€${Number(value).toFixed(2).replace('.', ',')}`;
}

function getRemaining(item) {
  const inCart = state.cart.filter(entry => entry.id === item.id).reduce((sum, entry) => sum + entry.qty, 0);
  return Math.max(0, item.stock - item.sold - inCart);
}

function isSoldOut(item) {
  return getRemaining(item) <= 0;
}

function getCountdownParts() {
  const now = new Date();
  const target = new Date(now);
  const day = now.getDay();
  const daysUntilThursday = (4 - day + 7) % 7 || 7;
  target.setDate(now.getDate() + daysUntilThursday);
  target.setHours(20, 0, 0, 0);

  const diff = target.getTime() - now.getTime();
  const totalSeconds = Math.max(0, Math.floor(diff / 1000));

  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60
  };
}

function renderCountdown() {
  const countdownEl = document.getElementById('countdown');
  if (!countdownEl) return;

  const parts = getCountdownParts();

  if (parts.days === 0 && parts.hours === 0 && parts.minutes === 0 && parts.seconds === 0) {
    countdownEl.innerHTML = '<div class="box"><strong>Gesloten</strong><span>Voor deze week</span></div>';
    return;
  }

  countdownEl.innerHTML = [
    { label: 'D', value: parts.days },
    { label: 'H', value: parts.hours },
    { label: 'M', value: parts.minutes },
    { label: 'S', value: parts.seconds }
  ].map(item => `
    <div class="box">
      <strong>${String(item.value).padStart(2, '0')}</strong>
      <span>${item.label}</span>
    </div>
  `).join('');
}

function renderBoard() {
  const boardList = document.getElementById('boardList');
  const dropDate = document.getElementById('dropDate');
  if (!boardList) return;

  const featured = ['roti-doks', 'roti-kip', 'saoto', 'bami', 'gritibana'];
  boardList.innerHTML = featured.map(id => {
    const item = products.find(product => product.id === id);
    const remaining = getRemaining(item);
    const statusClass = remaining === 0 ? 'out' : remaining <= 4 ? 'low' : '';
    const statusText = remaining === 0 ? 'Uitverkocht' : `Nog ${remaining}`;
    return `
      <li>
        <span class="board-item-name">${item.name}</span>
        <span class="board-item-stock ${statusClass}">${statusText}</span>
      </li>
    `;
  }).join('');

  if (dropDate) {
    dropDate.textContent = 'Vrijdag 17:00 – 20:00';
  }
}

function renderTabs() {
  const tabs = document.getElementById('categoryTabs');
  if (!tabs) return;

  tabs.innerHTML = categoryMap.map(category => `
    <button class="pill ${state.activeCategory === category.id ? 'active' : ''}" data-category="${category.id}">${category.label}</button>
  `).join('');

  tabs.querySelectorAll('.pill').forEach(button => {
    button.addEventListener('click', () => {
      state.activeCategory = button.dataset.category;
      renderTabs();
      renderMenu();
    });
  });
}

function renderDish(product) {
  const remaining = getRemaining(product);
  const out = remaining <= 0;
  const low = remaining > 0 && remaining <= 4;
  const percent = Math.max(12, Math.round((remaining / Math.max(product.stock, 1)) * 100));

  return `
    <article class="dish ${out ? 'soldout' : ''}">
      <div class="dish-image">
        <img src="${product.image}" alt="${product.name}" loading="lazy" />
      </div>
      <div class="dish-body">
        <div class="dish-top">
          <h3>${product.name}</h3>
          <span class="price">${formatMoney(product.price)}</span>
        </div>
        <p class="dish-desc">${product.desc}</p>
        <div class="meta-row">
          ${product.signature ? '<span class="chip accent">Signature</span>' : ''}
          ${product.origin ? `<span class="chip">${product.origin}</span>` : ''}
          ${product.category === 'weekend' ? '<span class="chip accent">Weekend special</span>' : '<span class="chip">Vers bereid</span>'}
        </div>
        <div class="stock ${out ? 'out' : low ? 'low' : ''}">${out ? 'Uitverkocht' : `Nog ${remaining} beschikbaar`}</div>
        <div class="bar ${low ? 'low' : ''}"><span style="width:${percent}%"></span></div>
        ${product.extras ? `
          <details class="dish-details">
            <summary>Extra's</summary>
            <div class="options">
              ${product.extras.map(extra => `
                <label class="option">
                  <span>${extra.name}</span>
                  <b>+${formatMoney(extra.price)}</b>
                </label>
              `).join('')}
            </div>
          </details>
        ` : ''}
        <div class="dish-actions">
          ${out ? `
            <button class="waitlist-btn" data-waitlist="${product.id}">Zet me op de wachtlijst</button>
          ` : `
            <div class="qty-picker">
              <button type="button" data-qty-change="-1" data-id="${product.id}">−</button>
              <span data-qty-for="${product.id}">1</span>
              <button type="button" data-qty-change="1" data-id="${product.id}">+</button>
            </div>
            <button class="add-btn" type="button" data-add="${product.id}">Toevoegen</button>
          `}
        </div>
      </div>
    </article>
  `;
}

function renderGroup(categoryId) {
  const items = products.filter(product => product.category === categoryId);
  if (!items.length) return '';
  const info = categoryInfo[categoryId];
  return `
    <div class="menu-group">
      <div class="menu-group-head">
        <h3>${info.title}</h3>
        <p>${info.note}</p>
      </div>
      <div class="menu-grid">${items.map(renderDish).join('')}</div>
    </div>
  `;
}

function renderMenu() {
  const menuGrid = document.getElementById('menuGrid');
  if (!menuGrid) return;

  const groups = state.activeCategory === 'alles'
    ? ['vast', 'weekend', 'extra']
    : [state.activeCategory];

  menuGrid.innerHTML = groups.map(renderGroup).join('');

  menuGrid.querySelectorAll('[data-add]').forEach(button => {
    button.addEventListener('click', () => addToCart(button.dataset.add));
  });

  menuGrid.querySelectorAll('[data-qty-change]').forEach(button => {
    button.addEventListener('click', () => changeQty(button.dataset.id, Number(button.dataset.qtyChange)));
  });

  menuGrid.querySelectorAll('[data-waitlist]').forEach(button => {
    button.addEventListener('click', () => {
      const product = products.find(item => item.id === button.dataset.waitlist);
      showToast(`Je staat op de wachtlijst voor ${product.name}`);
    });
  });
}

function changeQty(productId, delta) {
  const product = products.find(item => item.id === productId);
  const qtyNode = document.querySelector(`[data-qty-for="${productId}"]`);
  if (!qtyNode) return;

  let qty = Number(qtyNode.textContent);
  qty = Math.max(1, qty + delta);
  const remaining = getRemaining(product);
  qty = Math.min(qty, remaining || 1);
  qtyNode.textContent = String(qty);
}

function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(showToast.timeoutId);
  showToast.timeoutId = setTimeout(() => toast.classList.remove('show'), 2200);
}

function addToCart(productId) {
  const product = products.find(item => item.id === productId);
  const qtyNode = document.querySelector(`[data-qty-for="${productId}"]`);
  const qty = qtyNode ? Number(qtyNode.textContent) : 1;
  const remaining = getRemaining(product);

  if (qty > remaining || remaining <= 0) {
    showToast('Er zijn niet meer genoeg porties beschikbaar.');
    return;
  }

  const existing = state.cart.find(item => item.id === productId);
  if (existing) {
    existing.qty += qty;
  } else {
    state.cart.push({ id: product.id, name: product.name, price: product.price, qty, extras: [] });
  }

  showToast(`${qty} x ${product.name} toegevoegd`);
  renderCart();
}

function updateCartItem(index, delta) {
  const item = state.cart[index];
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    state.cart.splice(index, 1);
  }

  renderCart();
}

function getSubtotal() {
  return state.cart.reduce((sum, item) => sum + item.price * item.qty, 0);
}

function renderCart() {
  const drawerBody = document.getElementById('drawerBody');
  const drawerFooter = document.getElementById('drawerFooter');
  const cartCount = document.getElementById('cartCount');
  const stickyTotal = document.getElementById('stickyTotal');
  const stickyCart = document.getElementById('stickyCart');

  if (cartCount) {
    cartCount.textContent = String(state.cart.reduce((sum, item) => sum + item.qty, 0));
  }

  if (stickyTotal) {
    stickyTotal.textContent = formatMoney(getSubtotal());
  }

  if (!drawerBody || !drawerFooter) return;

  if (state.orderPlaced) {
    drawerBody.innerHTML = `
      <div class="empty-state">
        <span class="script">✓</span>
        <h3>SWITI SPANG is geregeld</h3>
        <p style="margin-top: 10px; color: var(--muted);">Je bestelnummer is <strong>SW-2026-${String(Math.floor(Math.random() * 9000) + 1000)}</strong>.</p>
        <p style="margin-top: 18px;">Haal vrijdag jouw bestelling op tussen 17:00 en 20:00.</p>
      </div>
    `;
    drawerFooter.innerHTML = '<button class="checkout-btn" id="newOrderBtn">Nog een bestelling</button>';
    const newOrderBtn = document.getElementById('newOrderBtn');
    if (newOrderBtn) {
      newOrderBtn.addEventListener('click', () => {
        state.orderPlaced = false;
        state.cart = [];
        state.selectedSlot = '17:00';
        renderCart();
        closeCart();
      });
    }
    if (stickyCart) stickyCart.classList.toggle('show', false);
    return;
  }

  if (!state.cart.length) {
    drawerBody.innerHTML = `
      <div class="empty-state">
        <span class="script">🛒</span>
        <h3>Nog niets in je mandje</h3>
        <p>Kies je favoriete gerechten uit het weekmenu en kom terug als je bent klaar.</p>
      </div>
    `;
    drawerFooter.innerHTML = '';
    if (stickyCart) stickyCart.classList.toggle('show', false);
    return;
  }

  drawerBody.innerHTML = `
    ${state.cart.map((item, index) => `
      <div class="cart-item">
        <div>
          <strong>${item.name}</strong>
          <small>${formatMoney(item.price)} per stuk</small>
        </div>
        <div class="cart-meta">
          <strong>${formatMoney(item.price * item.qty)}</strong>
          <div class="qty-adjust">
            <button type="button" data-cart-change="-1" data-index="${index}">−</button>
            <span>${item.qty}</span>
            <button type="button" data-cart-change="1" data-index="${index}">+</button>
          </div>
        </div>
      </div>
    `).join('')}

    <div class="cart-upsell">
      <strong>Vergeet je niets?</strong>
      <div class="chip-row">
        <button class="small-chip" type="button" data-upsert="gember">Gemberdrank · €3,50</button>
        <button class="small-chip" type="button" data-upsert="bojo">Bojo cake · €4,50</button>
        <button class="small-chip" type="button" data-upsert="zuur">Zuur · €2,00</button>
      </div>
    </div>

    <div class="field">
      <label>Kies je ophaaltijd</label>
      <div class="slot-grid">
        ${['17:00','17:30','18:00','18:30','19:00','19:30'].map(slot => `
          <button type="button" class="slot-button ${state.selectedSlot === slot ? 'active' : ''}" data-slot="${slot}">${slot}</button>
        `).join('')}
      </div>
    </div>

    <div class="field">
      <label>Naam</label>
      <input type="text" placeholder="Voor- en achternaam" />
    </div>
    <div class="field">
      <label>E-mail</label>
      <input type="email" placeholder="voor je bevestiging" />
    </div>
    <div class="field">
      <label>Telefoon</label>
      <input type="tel" placeholder="voor als er iets is" />
    </div>
  `;

  drawerFooter.innerHTML = `
    <div class="totals">
      <div class="line-total"><span>Subtotaal</span><strong>${formatMoney(getSubtotal())}</strong></div>
      <div class="line-total"><span>Afhalen</span><strong>Gratis</strong></div>
      <div class="line-total"><span>Totaal</span><strong>${formatMoney(getSubtotal())}</strong></div>
    </div>
    <button class="checkout-btn" type="button" id="checkoutBtn">Betalen met Mollie</button>
    <div class="drawer-note">Je haalt op om ${state.selectedSlot} op vrijdag.</div>
  `;

  const checkoutBtn = document.getElementById('checkoutBtn');
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      state.orderPlaced = true;
      renderCart();
      showToast('Bestelling geplaatst');
    });
  }

  drawerBody.querySelectorAll('[data-cart-change]').forEach(button => {
    button.addEventListener('click', () => updateCartItem(Number(button.dataset.index), Number(button.dataset.cartChange)));
  });

  drawerBody.querySelectorAll('[data-slot]').forEach(button => {
    button.addEventListener('click', () => {
      state.selectedSlot = button.dataset.slot;
      renderCart();
    });
  });

  drawerBody.querySelectorAll('[data-upsert]').forEach(button => {
    button.addEventListener('click', () => {
      const id = button.dataset.upsert;
      const item = products.find(product => product.id === id);
      if (!item) return;
      const index = state.cart.findIndex(entry => entry.id === id);
      if (index >= 0) {
        state.cart[index].qty += 1;
      } else {
        state.cart.push({ id: item.id, name: item.name, price: item.price, qty: 1, extras: [] });
      }
      renderCart();
    });
  });

  if (stickyCart) stickyCart.classList.toggle('show', state.cart.length > 0 && !state.orderPlaced);
}

function openCart() {
  const cartDrawer = document.getElementById('cartDrawer');
  const scrim = document.getElementById('scrim');
  if (!cartDrawer || !scrim) return;
  cartDrawer.classList.add('open');
  scrim.classList.add('show');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  const cartDrawer = document.getElementById('cartDrawer');
  const scrim = document.getElementById('scrim');
  if (!cartDrawer || !scrim) return;
  cartDrawer.classList.remove('open');
  scrim.classList.remove('show');
  document.body.style.overflow = '';
}

function initHomePage() {
  const openCartBtn = document.getElementById('openCartBtn');
  const stickyCartBtn = document.getElementById('stickyCartBtn');
  const closeCartBtn = document.getElementById('closeCartBtn');
  const scrim = document.getElementById('scrim');

  if (openCartBtn) openCartBtn.addEventListener('click', openCart);
  if (stickyCartBtn) stickyCartBtn.addEventListener('click', openCart);
  if (closeCartBtn) closeCartBtn.addEventListener('click', closeCart);
  if (scrim) scrim.addEventListener('click', closeCart);

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeCart();
  });

  renderCountdown();
  setInterval(renderCountdown, 1000);
  renderTabs();
  renderBoard();
  renderMenu();
  renderCart();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initHomePage);
} else {
  initHomePage();
}
