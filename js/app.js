const formatPrice = (n) => 'Tsh ' + Number(n).toLocaleString('en-TZ');

function getCart() {
  try {
    const data = localStorage.getItem('niffer_cart');
    return data ? JSON.parse(data) : [];
  } catch { return []; }
}

function saveCart(cart) {
  localStorage.setItem('niffer_cart', JSON.stringify(cart));
  updateCartCount();
}

function addToCart(productId, quantity = 1, size, color) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  const cart = getCart();
  const match = (i) => i.id === productId && (size ? i.size === size : !i.size) && (color ? i.color === color : !i.color);
  const existing = cart.find(match);
  if (existing) existing.quantity += quantity;
  else cart.push({ ...product, quantity, size: size || undefined, color: color || undefined });
  saveCart(cart);
  const variant = [size, color].filter(Boolean).join(', ');
  showToast(product.name + (variant ? ` (${variant})` : '') + ' added to cart');
}

function removeFromCart(productId, size, color) {
  const cart = getCart().filter(i => !(i.id === productId && (size ? i.size === size : !i.size) && (color ? i.color === color : !i.color)));
  saveCart(cart);
  return cart;
}

function updateCartQuantity(productId, change, size, color) {
  const cart = getCart();
  const item = cart.find(i => i.id === productId && (size ? i.size === size : !i.size) && (color ? i.color === color : !i.color));
  if (!item) return;
  item.quantity += change;
  if (item.quantity <= 0) {
    cart.splice(cart.indexOf(item), 1);
  }
  saveCart(cart);
}

function getCartTotal() {
  return getCart().reduce((s, i) => s + (i.price * i.quantity), 0);
}

function updateCartCount() {
  const el = document.getElementById('cart-count');
  if (el) el.textContent = getCart().reduce((s, i) => s + i.quantity, 0);
}

function showToast(msg) {
  const t = document.createElement('div');
  t.className = 'fixed bottom-4 left-1/2 -translate-x-1/2 glass px-6 py-3 rounded-full text-sm font-medium z-50';
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 3000);
}

function renderStars(rating) {
  return Array(5).fill(0).map((_, i) => i < rating ? '★' : '☆').join('');
}

function closeMobileSearch() {
  const el = document.getElementById('search-results-mobile');
  const menu = document.getElementById('mobile-menu');
  if (el) el.classList.remove('visible');
  if (menu) menu.classList.add('hidden');
}
function renderSearchResults(results, resultsEl, isMobile) {
  if (!resultsEl || typeof PRODUCTS === 'undefined') return;
  if (results.length === 0) {
    resultsEl.innerHTML = '<p class="search-results-empty">No products found</p>';
  } else {
    resultsEl.innerHTML = results.map((p, i) => `
      <a href="product.html?id=${p.id}" ${isMobile ? 'onclick="closeMobileSearch()"' : ''} class="search-result-item" style="animation-delay: ${i * 0.05}s">
        <img src="${p.images[0]}" alt="">
        <div class="search-result-info">
          <p class="search-result-name">${p.name}</p>
          <p class="search-result-category">${p.category}</p>
        </div>
        <span class="search-result-price">${formatPrice(p.price)}</span>
      </a>
    `).join('');
  }
}
function handleSearch(event) {
  if (typeof PRODUCTS === 'undefined') return;
  const query = event.target.value.toLowerCase().trim();
  if (query.length > 0) hideAnimatedPlaceholder('search-input');
  const resultsEl = document.getElementById('search-results-dropdown');
  if (!resultsEl) return;
  if (query.length < 2) { resultsEl.innerHTML = ''; resultsEl.classList.remove('visible'); return; }
  const results = PRODUCTS.filter(p => p.name.toLowerCase().includes(query) || p.category.toLowerCase().includes(query));
  renderSearchResults(results, resultsEl, false);
  resultsEl.classList.add('visible');
}
function handleSearchFocus() {
  const input = document.getElementById('search-input');
  const query = input?.value?.toLowerCase().trim();
  const resultsEl = document.getElementById('search-results-dropdown');
  if (query && query.length >= 2 && resultsEl) resultsEl.classList.add('visible');
}
function handleSearchMobile(event) {
  if (typeof PRODUCTS === 'undefined') return;
  const query = event.target.value.toLowerCase().trim();
  if (query.length > 0) hideAnimatedPlaceholder('search-input-mobile');
  const resultsEl = document.getElementById('search-results-mobile');
  if (!resultsEl) return;
  if (query.length < 2) { resultsEl.innerHTML = ''; resultsEl.classList.remove('visible'); return; }
  const results = PRODUCTS.filter(p => p.name.toLowerCase().includes(query) || p.category.toLowerCase().includes(query));
  renderSearchResults(results, resultsEl, true);
  resultsEl.classList.add('visible');
}
function initSearchClickOutside() {
  document.addEventListener('click', function(e) {
    const dropdown = document.getElementById('search-results-dropdown');
    const mobileDropdown = document.getElementById('search-results-mobile');
    const searchWrap = document.getElementById('search-input')?.closest('.search-bar-wrap');
    const mobileSearchWrap = document.getElementById('search-input-mobile')?.closest('.search-bar-wrap');
    if (dropdown && searchWrap && !searchWrap.contains(e.target)) dropdown.classList.remove('visible');
    if (mobileDropdown && mobileSearchWrap && !mobileSearchWrap.contains(e.target)) mobileDropdown.classList.remove('visible');
  });
}
document.addEventListener('DOMContentLoaded', initSearchClickOutside);

/* Animated placeholder - cycles product names */
function getPlaceholderEl(inputId) {
  return inputId === 'search-input' ? document.getElementById('search-placeholder-animated') : document.getElementById('search-placeholder-mobile-animated');
}

function hideAnimatedPlaceholder(inputId) {
  const el = getPlaceholderEl(inputId);
  if (el) el.classList.add('hidden');
}

function handleSearchBlur(inputId) {
  const input = document.getElementById(inputId);
  const el = getPlaceholderEl(inputId);
  if (input && el && !input.value.trim()) el.classList.remove('hidden');
}

function initAnimatedPlaceholder() {
  const placeholders = [
    document.getElementById('search-placeholder-animated'),
    document.getElementById('search-placeholder-mobile-animated')
  ].filter(Boolean);

  if (placeholders.length === 0 || typeof PRODUCTS === 'undefined') return;

  const productNames = PRODUCTS.map(p => p.name).filter(Boolean);
  if (productNames.length === 0) return;

  const ROTATE_INTERVAL = 2500;

  function cyclePlaceholder(el) {
    if (!el || el.classList.contains('hidden')) return;
    el.classList.add('changing');
    setTimeout(() => {
      const idx = (parseInt(el.dataset.idx || '0', 10) + 1) % productNames.length;
      el.dataset.idx = String(idx);
      const span = document.createElement('span');
      span.className = 'search-placeholder-text animate-in';
      span.textContent = 'Search "' + productNames[idx] + '"';
      el.innerHTML = '';
      el.appendChild(span);
      el.classList.remove('changing');
      setTimeout(() => span.classList.remove('animate-in'), 350);
    }, 200);
  }

  placeholders.forEach(el => {
    const span = document.createElement('span');
    span.className = 'search-placeholder-text';
    span.textContent = 'Search "' + (productNames[0] || '') + '"';
    el.innerHTML = '';
    el.appendChild(span);
    el.dataset.idx = '0';
  });

  const intervalId = setInterval(() => {
    placeholders.forEach(el => {
      const inputId = el.id === 'search-placeholder-animated' ? 'search-input' : 'search-input-mobile';
      const input = document.getElementById(inputId);
      if (input && !input.value.trim() && document.activeElement !== input) cyclePlaceholder(el);
    });
  }, ROTATE_INTERVAL);
}
document.addEventListener('DOMContentLoaded', initAnimatedPlaceholder);
