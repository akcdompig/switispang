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
    hero: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80',
    saoto: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80',
    nasi: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80',
    bami: 'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=900&q=80',
    tjauwmin: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=900&q=80',
    pom: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=900&q=80',
    roti: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80'
  }
};

const products = [
  {
    id: 'saoto',
    category: 'soep',
    name: 'Saoto',
    price: 9.5,
    stock: 20,
    sold: 12,
    signature: true,
    desc: 'Heldere Surinaamse kippensoep met kip, taugé, ei, vermicelli en verse toppings.',
    allergens: 'Ei, soja, gluten',
    image: switiSpangConfig.images.saoto,
    extras: [{ name: 'Extra kip', price: 3.5 }, { name: 'Sambal', price: 0.75 }]
  },
  {
    id: 'nasi',
    category: 'hoofdgerecht',
    name: 'Surinaamse Nasi',
    price: 12.5,
    stock: 16,
    sold: 8,
    signature: true,
    desc: 'Rijst, kip, saté, bami, groente en heerlijke house sambal. Een ware crowd-pleaser.',
    allergens: 'Soja, gluten',
    image: switiSpangConfig.images.nasi,
    extras: [{ name: 'Extra kip', price: 4.0 }, { name: 'Zuur', price: 1.5 }]
  },
  {
    id: 'bami',
    category: 'hoofdgerecht',
    name: 'Surinaamse Bami',
    price: 11.5,
    stock: 14,
    sold: 9,
    desc: 'Wok-gerechten met kip, kool, taugé en een lichte ketjap-smaak die diep en warm blijft hangen.',
    allergens: 'Gluten, soja, ei',
    image: switiSpangConfig.images.bami,
    extras: [{ name: 'Gebakken ei', price: 1.5 }, { name: 'Extra kip', price: 3.5 }]
  },
  {
    id: 'tjauwmin',
    category: 'hoofdgerecht',
    name: 'Tjauwmin',
    price: 10.5,
    stock: 12,
    sold: 7,
    desc: 'Rundvlees in een rijke, diepe saus met groenten en het bekende Surinaamse comfortgevoel.',
    allergens: 'Soja, gluten',
    image: switiSpangConfig.images.tjauwmin,
    extras: [{ name: 'Extra rundvlees', price: 4.0 }, { name: 'Zuur', price: 1.5 }]
  },
  {
    id: 'pom',
    category: 'special',
    name: 'SWITI SPANG POM',
    price: 13.0,
    stock: 8,
    sold: 5,
    signature: true,
    desc: 'Geraspte pomtajer met kip, kruiden en citrus, langzaam gebakken voor die perfecte rijke bite.',
    allergens: 'Ei, citrus',
    image: switiSpangConfig.images.pom,
    extras: [{ name: 'Extra portie', price: 6.0 }]
  },
  {
    id: 'roti-doks',
    category: 'special',
    name: 'ROTI DOKS',
    price: 14.5,
    stock: 6,
    sold: 4,
    desc: 'Deze week een beperkte special: roti met doksvlees, verse kruiden en een warme, zachte finish.',
    allergens: 'Gluten, ei',
    image: switiSpangConfig.images.roti,
    extras: [{ name: 'Extra roti', price: 2.5 }, { name: 'Sambal', price: 0.75 }]
  },
  {
    id: 'gember',
    category: 'drink',
    name: 'Huisgemaakte gemberdrank',
    price: 3.5,
    stock: 25,
    sold: 10,
    desc: 'Verse gember, citroen en rietsuiker. Helder, fris en bijpassend bij de spice.',
    allergens: '—',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'bojo',
    category: 'dessert',
    name: 'Bojo cake',
    price: 4.5,
    stock: 18,
    sold: 8,
    desc: 'Zachte cassavecake met kokos, warm en licht zoet voor na de maaltijd.',
    allergens: 'Ei, gluten, kokos',
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'zuur',
    category: 'bijgerecht',
    name: 'Komkommer in zuur',
    price: 2.0,
    stock: 30,
    sold: 12,
    desc: 'Verse komkommer in zuur met ui en lichte pit.',
    allergens: '—',
    image: 'https://images.unsplash.com/photo-1546094096-0df4bcaaa337?auto=format&fit=crop&w=900&q=80'
  }
];

const categoryMap = [
  { id: 'alles', label: 'Alles' },
  { id: 'soep', label: 'Soep' },
  { id: 'hoofdgerecht', label: 'Hoofdgerechten' },
  { id: 'special', label: 'Specials' },
  { id: 'drink', label: 'Dranken' },
  { id: 'dessert', label: 'Dessert' },
  { id: 'bijgerecht', label: 'Bijgerechten' }
];

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

  const featured = ['saoto', 'nasi', 'bami', 'pom', 'roti-doks'];
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

function renderMenu() {
  const menuGrid = document.getElementById('menuGrid');
  if (!menuGrid) return;

  const visible = state.activeCategory === 'alles'
    ? products
    : products.filter(product => product.category === state.activeCategory);

  menuGrid.innerHTML = visible.map(product => {
    const remaining = getRemaining(product);
    const out = remaining <= 0;
    const low = remaining > 0 && remaining <= 4;
    const percent = Math.max(12, Math.round((remaining / Math.max(product.stock, 1)) * 100));
    const currentQty = 1;

    return `
      <article class="dish ${out ? 'soldout' : ''}">
        <div class="dish-image">
          <img src="${product.image}" alt="${product.name}" />
        </div>
        <div class="dish-body">
          <div class="dish-top">
            <h3>${product.name}</h3>
            <span class="price">${formatMoney(product.price)}</span>
          </div>
          <p class="dish-desc">${product.desc}</p>
          <div class="meta-row">
            ${product.signature ? '<span class="chip accent">Signature</span>' : ''}
            <span class="chip">Vers bereid</span>
            ${product.category === 'special' ? '<span class="chip accent">Deze week</span>' : ''}
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
                <span data-qty-for="${product.id}">${currentQty}</span>
                <button type="button" data-qty-change="1" data-id="${product.id}">+</button>
              </div>
              <button class="add-btn" type="button" data-add="${product.id}">Toevoegen</button>
            `}
          </div>
        </div>
      </article>
    `;
  }).join('');

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
