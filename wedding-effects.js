// =============================================
// WEDDING EFFECTS - Thiệp Cưới Đoàn Quang & Như Quỳnh
// =============================================

function getSakuraSVG(size, extraStyle = '') {
  return `
    <svg width="${size}" height="${size}" viewBox="-25 -25 50 50" style="${extraStyle}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="sakura-petal-grad-dup-${Math.random().toString(36).substr(2, 9)}" cx="50%" cy="100%" r="100%">
          <stop offset="0%" stop-color="#ff4d79"/>
          <stop offset="35%" stop-color="#ff8fab"/>
          <stop offset="75%" stop-color="#ffccd5"/>
          <stop offset="100%" stop-color="#fff0f3"/>
        </radialGradient>
      </defs>
      <g transform="rotate(0)"><path d="M 0 0 C -10 -15, -22 -28, -12 -42 C -7 -49, -2 -42, 0 -38 C 2 -42, 7 -49, 12 -42 C 22 -28, 10 -15, 0 0" fill="url(#sakura-petal-grad-dup)"/></g>
      <g transform="rotate(72)"><path d="M 0 0 C -10 -15, -22 -28, -12 -42 C -7 -49, -2 -42, 0 -38 C 2 -42, 7 -49, 12 -42 C 22 -28, 10 -15, 0 0" fill="url(#sakura-petal-grad-dup)"/></g>
      <g transform="rotate(144)"><path d="M 0 0 C -10 -15, -22 -28, -12 -42 C -7 -49, -2 -42, 0 -38 C 2 -42, 7 -49, 12 -42 C 22 -28, 10 -15, 0 0" fill="url(#sakura-petal-grad-dup)"/></g>
      <g transform="rotate(216)"><path d="M 0 0 C -10 -15, -22 -28, -12 -42 C -7 -49, -2 -42, 0 -38 C 2 -42, 7 -49, 12 -42 C 22 -28, 10 -15, 0 0" fill="url(#sakura-petal-grad-dup)"/></g>
      <g transform="rotate(288)"><path d="M 0 0 C -10 -15, -22 -28, -12 -42 C -7 -49, -2 -42, 0 -38 C 2 -42, 7 -49, 12 -42 C 22 -28, 10 -15, 0 0" fill="url(#sakura-petal-grad-dup)"/></g>
      <g stroke="#ff3366" stroke-width="0.8" opacity="0.85">
        <line x1="0" y1="0" x2="-3" y2="-12"/>
        <line x1="0" y1="0" x2="5" y2="-11"/>
        <line x1="0" y1="0" x2="-9" y2="-7"/>
        <line x1="0" y1="0" x2="9" y2="-6"/>
        <line x1="0" y1="0" x2="-11" y2="3"/>
        <line x1="0" y1="0" x2="11" y2="4"/>
        <line x1="0" y1="0" x2="-7" y2="9"/>
        <line x1="0" y1="0" x2="7" y2="10"/>
        <line x1="0" y1="0" x2="-2" y2="12"/>
        <line x1="0" y1="0" x2="3" y2="12"/>
      </g>
      <g fill="#ffd700" stroke="#fff" stroke-width="0.3">
        <circle cx="-3" cy="-12" r="1.5"/>
        <circle cx="5" cy="-11" r="1.5"/>
        <circle cx="-9" cy="-7" r="1.5"/>
        <circle cx="9" cy="-6" r="1.5"/>
        <circle cx="-11" cy="3" r="1.5"/>
        <circle cx="11" cy="4" r="1.5"/>
        <circle cx="-7" cy="9" r="1.5"/>
        <circle cx="7" cy="10" r="1.5"/>
        <circle cx="-2" cy="12" r="1.5"/>
        <circle cx="3" cy="12" r="1.5"/>
      </g>
      <circle cx="0" cy="0" r="3.5" fill="#ff1a5e" opacity="0.9"/>
      <circle cx="0" cy="0" r="1.5" fill="#ffd700"/>
    </svg>
  `;
}

// BANK CONFIG FOR VietQR
const BANK_CONFIG = {
  bankId: 'vcb', // Vietcombank
  accountNo: '1013898686',
  accountName: 'DOAN VAN QUANG',
  displayName: 'Chú rể Đoàn Quang',
  bankLabel: 'Vietcombank'
};

// BRIDE BANK CONFIG
const BRIDE_BANK_CONFIG = {
  bankId: 'vcb', // Vietcombank
  accountNo: '100000000',
  accountName: 'KIEU NHU QUYNH',
  displayName: 'Cô dâu Như Quỳnh',
  bankLabel: 'Vietcombank'
};

// HELPER FOR REMOVING ACCENTS (VND Banking compatibility)
function removeVietnameseTones(str) {
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
  str = str.replace(/đ/g, "d");
  str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
  str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
  str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
  str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
  str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
  str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
  str = str.replace(/Đ/g, "D");
  str = str.replace(/\u0300|\u0301|\u0309|\u0303|\u0323/g, ""); // Diacritics
  str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // Accent marks
  str = str.replace(/[^a-zA-Z0-9 ]/g, ""); // Keep alpha-numeric & spaces
  str = str.trim().replace(/\s+/g, " ");
  return str;
}

// =============================================
// 1. FLOATING HEARTS
// =============================================
(function initFloatingHearts() {
  const colors = ['#ff6b9d', '#ff8fab', '#ffb3c6', '#ff4d79', '#ff1a5e', '#ff85a1'];

  function createHeart() {
    const card = document.getElementById('card');
    if (!card) return;
    const cardRect = card.getBoundingClientRect();
    const startX = Math.random() * cardRect.width;

    const heart = document.createElement('div');
    heart.classList.add('floating-heart');
    const size = Math.random() * 18 + 10;
    
    const duration = Math.random() * 6 + 6;
    const delay = Math.random() * 3;
    const color = colors[Math.floor(Math.random() * colors.length)];
    const drift = (Math.random() - 0.5) * (cardRect.width * 0.3); // Scale drift to stay inside mockup

    heart.innerHTML = `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="${color}">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
    </svg>`;

    heart.style.cssText = `
      position: absolute;
      left: ${startX}px;
      bottom: -60px;
      z-index: 9999;
      pointer-events: none;
      opacity: 0;
      animation: floatHeart ${duration}s ease-in ${delay}s forwards;
      --drift: ${drift}px;
      filter: drop-shadow(0 0 4px ${color}88);
    `;

    card.appendChild(heart);
    setTimeout(() => heart.remove(), (duration + delay) * 1000 + 200);
  }

  // Launch hearts at interval
  setInterval(createHeart, 900);
  // Burst on load
  for (let i = 0; i < 8; i++) setTimeout(createHeart, i * 180);
})();

// =============================================
// 2. SWAN SECTION
// =============================================
(function initSwanSection() {
  const swanHTML = `
  <section id="swanSection" style="background: linear-gradient(180deg, #fff 0%, #fff0f4 50%, #fff 100%); margin-top: 40px; padding: 40px 20px;">
    <div class="swan-sparkles" id="swanSparkles"></div>
    <div class="swan-hero">
      <svg width="180" height="140" viewBox="0 0 180 140" fill="none" xmlns="http://www.w3.org/2000/svg" style="filter: drop-shadow(0 0 20px #ff8fabaa);">
        <defs>
          <linearGradient id="swan-body-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#ffffff"/>
            <stop offset="45%" stop-color="#fff0f5"/>
            <stop offset="80%" stop-color="#ffb3c6"/>
            <stop offset="100%" stop-color="#ff4d79"/>
          </linearGradient>
        </defs>
        <!-- Left Swan -->
        <ellipse cx="58" cy="95" rx="38" ry="22" fill="url(#swan-body-grad)" stroke="#ff4d79" stroke-width="1.5"/>
        <path d="M58 95 Q40 60 55 30 Q60 20 68 28 Q62 50 70 75" fill="url(#swan-body-grad)" stroke="#ff4d79" stroke-width="1.5"/>
        <ellipse cx="67" cy="28" rx="6" ry="5" fill="#ff8fab"/>
        <path d="M73 28 Q80 26 78 30 Q74 31 73 28Z" fill="#ff4d79"/>
        <!-- Right Swan (mirrored) -->
        <ellipse cx="122" cy="95" rx="38" ry="22" fill="url(#swan-body-grad)" stroke="#ff4d79" stroke-width="1.5"/>
        <path d="M122 95 Q140 60 125 30 Q120 20 112 28 Q118 50 110 75" fill="url(#swan-body-grad)" stroke="#ff4d79" stroke-width="1.5"/>
        <ellipse cx="113" cy="28" rx="6" ry="5" fill="#ff8fab"/>
        <path d="M107 28 Q100 26 102 30 Q106 31 107 28Z" fill="#ff4d79"/>
        <!-- Heart between necks -->
        <path d="M90 45 C90 45 82 37 82 31 C82 26 90 24 90 31 C90 24 98 26 98 31 C98 37 90 45 90 45Z" fill="#ff1a5e" filter="drop-shadow(0 0 5px #ff1a5e)"/>
        <!-- Water ripple -->
        <ellipse cx="90" cy="118" rx="70" ry="10" fill="#ffb3c633"/>
        <ellipse cx="90" cy="122" rx="50" ry="7" fill="#ffb3c622"/>
        <!-- Sparkles -->
        <g fill="#ffd700" filter="drop-shadow(0 0 3px gold)">
          <path d="M30 46 L32 49 L35 50 L32 51 L30 54 L28 51 L25 50 L28 49 Z"/>
          <path d="M150 46 L152 49 L155 50 L152 51 L150 54 L148 51 L145 50 L148 49 Z"/>
          <path d="M90 6 L92 9 L95 10 L92 11 L90 14 L88 11 L85 10 L88 9 Z"/>
        </g>
      <p style="font-family: 'Great Vibes', cursive; font-size: 28px; color: #ff4d79; margin-top: 12px; letter-spacing: 1px;">Forever & Always</p>
      <p style="font-size: 13px; color: #aaa; margin-top: 4px;">Đoàn Quang ❤️ Như Quỳnh</p>
    </div>
  </section>`;

  // Insert before RSVP section
  const rsvp = document.querySelector('.rsvp-section');
  if (rsvp) {
    rsvp.insertAdjacentHTML('beforebegin', swanHTML);
  } else {
    const card = document.querySelector('#card');
    if (card) card.insertAdjacentHTML('beforeend', swanHTML);
  }

  // Add sparkles around swan
  const sparklesEl = document.getElementById('swanSparkles');
  if (!sparklesEl) return;
  for (let i = 0; i < 16; i++) {
    const sp = document.createElement('div');
    sp.className = 'sp';
    sp.style.cssText = `
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      --dur: ${(Math.random() * 2 + 1.5).toFixed(1)}s;
      --del: ${(Math.random() * 2).toFixed(1)}s;
      width: ${Math.random() * 6 + 4}px;
      height: ${Math.random() * 6 + 4}px;
      background: ${['#ff8fab','#ffb3c6','#ff4d79','#fff'][Math.floor(Math.random()*4)]};
    `;
    sparklesEl.appendChild(sp);
  }
})();

// =============================================
// 3. GIFT + QR PANEL (VietQR Integrated)
// =============================================
(function initGiftPanel() {
  const gifts = [
    { icon: '💐', name: 'Bó hoa mừng cưới', price: 200000 },
    { icon: '📷', name: 'Máy ảnh chụp kỷ niệm', price: 500000 },
    { icon: '🦄', name: 'Cầu uyên ương 3D', price: 800000 },
    { icon: '🕊️', name: 'Bồ câu uyên ương', price: 1000000 },
    { icon: '💍', name: 'Cặp nhẫn đính hôn', price: 1200000 },
    { icon: '🪄', name: 'Gậy phép hạnh phúc', price: 1500000 },
    { icon: '🦢', name: 'Đôi thiên nga tình yêu', price: 1800000 },
    { icon: '🎈', name: 'Khinh khí cầu uyên ương', price: 2000000 },
    { icon: '✈️', name: 'Vé bay tuần trăng mật', price: 3000000 },
    { icon: '🌸', name: 'Hoa anh đào', price: 5000000 },
    { icon: '🏰', name: 'Lâu đài tình yêu', price: 10000000 },
    { icon: '🚗', name: 'Xe hoa cưới rước dâu', price: 15000000 },
  ];

  // Create gift button
  const btn = document.createElement('button');
  btn.id = 'weddingGiftBtn';
  btn.title = 'Tặng quà cưới';
  btn.innerHTML = `<svg viewBox="0 0 24 24" fill="white"><path d="M20 6h-2.18c.07-.34.18-.68.18-1a2.997 2.997 0 00-5.45-1.73L12 4.03l-.55-.76C10.87 2.5 9.97 2 9 2A3 3 0 006 5c0 .32.11.66.18 1H4c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm6 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM4 19c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-9H4v9zm8-7h2v2h-2v-2zm0 4h2v2h-2v-2zm-4-4h2v2H8v-2zm0 4h2v2H8v-2zm-2 0H4v-2h2v2zm8 0v-2h2v2h-2zm4 0h-2v-2h2v2zM6 12H4v-2h2v2zm2-2h2v2H8v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2z"/></svg>`;
  document.body.appendChild(btn);

  // Create overlay + panel
  const overlay = document.createElement('div');
  overlay.id = 'weddingGiftOverlay';

  let selectedGift = null;

  overlay.innerHTML = `
    <div id="weddingGiftPanel">
      <div class="sparkle-wrap" id="panelSparkles"></div>
      <button class="gift-close" id="giftClose">✕</button>
      <div class="gift-tabs">
        <button class="gift-tab active" data-tab="gifts">🎁 Tặng Quà</button>
        <button class="gift-tab" data-tab="qr">📱 QR Chuyển Khoản</button>
      </div>

      <!-- GIFTS TAB -->
      <div id="tab-gifts">
        <div class="gift-grid" id="giftGrid"></div>
        <div class="gift-name-row">
          <input type="text" id="giftSenderName" placeholder="Tên của bạn…">
          <button class="gift-send-btn" id="giftSendBtn">Gửi 💝</button>
        </div>
      </div>

      <!-- QR TAB -->
      <div id="tab-qr" style="display:none;">
        <!-- Person toggle -->
        <div class="qr-person-toggle">
          <button class="qr-person-btn active" id="qrBtnGroom">
            <span class="qr-person-avatar">🤵</span>
            <span>Chú rể</span>
          </button>
          <div class="qr-toggle-heart">💑</div>
          <button class="qr-person-btn" id="qrBtnBride">
            <span class="qr-person-avatar">👰</span>
            <span>Cô dâu</span>
          </button>
        </div>
        <div class="qr-content">
          <div class="qr-box" id="qrBox">
            <img id="qrImage" src="" alt="Mã QR VietQR" style="display: none;">
            <div class="qr-spinner"></div>
            <div id="qrDefaultPlaceholder" class="qr-placeholder">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="#ffb3c6">
                <path d="M3 11h8V3H3v8zm2-6h4v4H5V5zm8-2v8h8V3h-8zm6 6h-4V5h4v4zM3 21h8v-8H3v8zm2-6h4v4H5v-4zm13 4h-2v2h2v-2zm0-4h-2v2h2v-2zm2 2h-2v2h2v-2zm-4-4h-2v2h2v-2zm2 2h-2v2h2v-2zm2-2h-2v2h2v-2zm2 2h-2v2h2v-2z"/>
              </svg>
              <span>Đang tạo mã QR thanh toán...</span>
            </div>
          </div>
          <div class="qr-bank-info" id="qrBankInfo">
            <!-- Dynamic bank details filled by JS -->
          </div>
        </div>
      </div>
    </div>`;
  document.body.appendChild(overlay);

  // Fill gift grid
  const grid = document.getElementById('giftGrid');
  gifts.forEach((g, i) => {
    const item = document.createElement('div');
    item.className = 'gift-item';
    item.dataset.idx = i;
    const isCherryIcon = g.icon === '🌸';
    const iconContent = isCherryIcon ? getSakuraSVG(40) : g.icon;
    item.innerHTML = `
      <div class="gift-icon" style="${isCherryIcon ? 'display:flex;justify-content:center;align-items:center;' : ''}">${iconContent}</div>
      <div class="gift-name">${g.name}</div>
      <div class="gift-price">${g.price.toLocaleString()}</div>`;
    item.addEventListener('click', () => {
      document.querySelectorAll('.gift-item').forEach(el => el.classList.remove('selected'));
      item.classList.add('selected');
      selectedGift = g;
      updateQR(); // Update QR dynamically
    });
    grid.appendChild(item);
  });

  // Panel sparkles
  const panelSparkles = document.getElementById('panelSparkles');
  for (let i = 0; i < 12; i++) {
    const sp = document.createElement('div');
    sp.className = 'sp';
    sp.style.cssText = `left:${Math.random()*100}%;top:${Math.random()*100}%;--dur:${(Math.random()*2+1).toFixed(1)}s;--del:${(Math.random()*3).toFixed(1)}s;`;
    panelSparkles.appendChild(sp);
  }

  // Track which person is selected for QR: 'groom' or 'bride'
  let qrPersonSelected = 'groom';

  // Wire up person toggle buttons (after overlay is in DOM)
  setTimeout(() => {
    const btnGroom = document.getElementById('qrBtnGroom');
    const btnBride = document.getElementById('qrBtnBride');
    if (btnGroom && btnBride) {
      btnGroom.addEventListener('click', () => {
        qrPersonSelected = 'groom';
        btnGroom.classList.add('active');
        btnBride.classList.remove('active');
        updateQR();
      });
      btnBride.addEventListener('click', () => {
        qrPersonSelected = 'bride';
        btnBride.classList.add('active');
        btnGroom.classList.remove('active');
        updateQR();
      });
    }
  }, 0);

  // Dynamic QR generator logic
  function updateQR() {
    const qrImage = document.getElementById('qrImage');
    const qrPlaceholder = document.getElementById('qrDefaultPlaceholder');
    const qrBox = document.getElementById('qrBox');
    const qrBankInfo = document.getElementById('qrBankInfo');
    const senderInput = document.getElementById('giftSenderName');

    // Pick active bank config based on person toggle
    const activeCfg = qrPersonSelected === 'bride' ? BRIDE_BANK_CONFIG : BANK_CONFIG;

    const senderName = senderInput ? senderInput.value.trim() : '';
    const cleanSender = senderName ? removeVietnameseTones(senderName) : 'An danh';

    let amount = 0;
    let addInfo = 'Mung cuoi Doan Quang Nhu Quynh';
    let infoHTML = '';

    if (selectedGift) {
      amount = selectedGift.price;
      const giftNameNoSign = removeVietnameseTones(selectedGift.name);
      addInfo = `${cleanSender} tang ${giftNameNoSign}`;

      infoHTML = `
        <p>Người nhận: <strong>${activeCfg.displayName}</strong></p>
        <p>Món quà đã chọn: <strong>${selectedGift.icon} ${selectedGift.name}</strong></p>
        <p>Giá trị quy đổi: <strong style="color: #ff4d79; font-size: 1.1rem;">${selectedGift.price.toLocaleString()}đ</strong></p>
        <p>Ngân hàng: <strong>${activeCfg.bankLabel}</strong> | STK: <strong>${activeCfg.accountNo}</strong></p>
        <p>Chủ tài khoản: <strong>${activeCfg.accountName}</strong></p>
        <p style="margin-top:8px; font-size:12px; color:#aaa; font-style: italic;">* Mã QR động đã được tích hợp sẵn số tiền và nội dung chuyển khoản *</p>
      `;
    } else {
      addInfo = `${cleanSender} chuc mung cuoi`;
      infoHTML = `
        <p>Người nhận: <strong>${activeCfg.displayName}</strong></p>
        <p>Ngân hàng: <strong>${activeCfg.bankLabel}</strong></p>
        <p>Số tài khoản: <strong>${activeCfg.accountNo}</strong></p>
        <p>Chủ tài khoản: <strong>${activeCfg.accountName}</strong></p>
        <p style="margin-top:8px; font-size:12px; color:#aaa; font-style: italic;">* Nhập tên của bạn hoặc chọn một món quà để tạo mã QR động mừng cưới *</p>
      `;
    }

    // Trim addInfo strictly to avoid bank errors (limit 25 chars)
    addInfo = addInfo.substring(0, 25);

    // Build VietQR dynamic image URL
    let qrUrl = `https://img.vietqr.io/image/${activeCfg.bankId}-${activeCfg.accountNo}-compact.png`;
    const params = [];
    if (amount > 0) params.push(`amount=${amount}`);
    if (addInfo) params.push(`addInfo=${encodeURIComponent(addInfo)}`);
    params.push(`accountName=${encodeURIComponent(activeCfg.accountName)}`);
    if (params.length > 0) {
      qrUrl += `?${params.join('&')}`;
    }

    // Set loading state in UI
    if (qrBox) qrBox.classList.add('is-loading');
    if (qrImage) qrImage.classList.add('loading');

    // Preload image
    const tempImg = new Image();
    tempImg.onload = () => {
      if (qrImage) {
        qrImage.src = qrUrl;
        qrImage.style.display = 'block';
      }
      if (qrPlaceholder) qrPlaceholder.style.display = 'none';
      if (qrBox) qrBox.classList.remove('is-loading');
      if (qrImage) qrImage.classList.remove('loading');
    };
    tempImg.onerror = () => {
      if (qrBox) qrBox.classList.remove('is-loading');
      if (qrImage) qrImage.classList.remove('loading');
      if (qrPlaceholder) {
        qrPlaceholder.innerHTML = '<span>Lỗi tải mã QR.<br>Vui lòng chuyển khoản thủ công.</span>';
        qrPlaceholder.style.display = 'flex';
      }
    };
    tempImg.src = qrUrl;

    if (qrBankInfo) {
      qrBankInfo.innerHTML = infoHTML;
    }
  }

  // Trigger QR update on sender name typing
  const senderInput = document.getElementById('giftSenderName');
  if (senderInput) {
    senderInput.addEventListener('input', updateQR);
  }

  // Tab switch
  overlay.querySelectorAll('.gift-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      overlay.querySelectorAll('.gift-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const which = tab.dataset.tab;
      document.getElementById('tab-gifts').style.display = which === 'gifts' ? '' : 'none';
      document.getElementById('tab-qr').style.display = which === 'qr' ? '' : 'none';

      // Always update QR details when switching to QR tab
      if (which === 'qr') {
        updateQR();
      }
    });
  });

  // Open/close
  btn.addEventListener('click', () => {
    overlay.classList.add('active');
    updateQR(); // Initial QR load
  });
  document.getElementById('giftClose').addEventListener('click', () => overlay.classList.remove('active'));
  overlay.addEventListener('click', e => { if (e.target === overlay) overlay.classList.remove('active'); });

  // Send gift
  document.getElementById('giftSendBtn').addEventListener('click', () => {
    const name = document.getElementById('giftSenderName').value.trim() || 'Ẩn danh';
    const gift = selectedGift;
    if (!gift) { showToast('Vui lòng chọn một món quà! 🎁'); return; }
    burstGiftEffects(gift);
    overlay.classList.remove('active');
    
    // Clear state
    document.getElementById('giftSenderName').value = '';
    document.querySelectorAll('.gift-item').forEach(el => el.classList.remove('selected'));
    selectedGift = null;
  });

  function showToast(msg) {
    let toast = document.getElementById('weddingToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'weddingToast';
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
  }

  function createTrailSparkle(x, y) {
    const sp = document.createElement('div');
    sp.textContent = ['✨', '💖', '🌸', '⭐'][Math.floor(Math.random() * 4)];
    sp.style.cssText = `
      position: fixed;
      left: ${x}px;
      top: ${y}px;
      z-index: 9998;
      pointer-events: none;
      font-size: ${14 + Math.random() * 12}px;
      opacity: 1;
      transform: translate(-50%, -50%) scale(0.5);
      transition: transform 0.8s cubic-bezier(0.1, 0.8, 0.3, 1), opacity 0.8s ease-out;
    `;
    document.body.appendChild(sp);
    
    requestAnimationFrame(() => {
      sp.style.transform = `translate(calc(-50% + ${(Math.random()-0.5)*50}px), calc(-50% + ${(Math.random()-0.5)*50}px)) scale(1.4) rotate(${(Math.random()-0.5)*180}deg)`;
      sp.style.opacity = '0';
    });
    setTimeout(() => sp.remove(), 900);
  }

  const activeBanners = [];

  function showTikTokBanner(senderName, gift) {
    const banner = document.createElement('div');
    banner.className = 'tiktok-gift-banner';
    
    // Calculate top position based on current active banners length
    const topPos = 120 + activeBanners.length * 72;
    banner.style.top = `${topPos}px`;
    
    const isCherry = gift.icon.includes('🌸');
    if (isCherry) {
      banner.className = 'tiktok-gift-banner tiktok-banner-cherry';
      banner.innerHTML = `
        <div class="tiktok-avatar" style="border-color: #ffb3c6;">🌸</div>
        <div class="tiktok-info">
          <span class="sender-name" style="color: #fff; font-size: 14px;">${senderName}</span>
          <span class="gift-text" style="color: #ffe0e6; font-weight: bold;">Gửi Hoa Anh Đào</span>
        </div>
        <div class="banner-cherry-deco-left">
          ${getSakuraSVG(44)}
        </div>
        <div class="banner-cherry-deco-right">
          ${getSakuraSVG(30)}
          ${getSakuraSVG(20, 'margin-left: -8px; margin-top: 8px;')}
        </div>
        <div class="tiktok-combo">x1</div>
      `;
    } else {
      banner.innerHTML = `
        <div class="tiktok-avatar">💝</div>
        <div class="tiktok-info">
          <span class="sender-name">${senderName}</span>
          <span class="gift-text">đã tặng ${gift.name}</span>
        </div>
        <div class="tiktok-gift-icon-container">${gift.icon}</div>
        <div class="tiktok-combo">x1</div>
      `;
    }
    
    document.body.appendChild(banner);
    activeBanners.push(banner);
    
    // Auto slide out after 3.2s
    setTimeout(() => {
      banner.classList.add('slide-out');
      setTimeout(() => {
        banner.remove();
        const index = activeBanners.indexOf(banner);
        if (index > -1) {
          activeBanners.splice(index, 1);
          // Shift remaining banners up smoothly
          activeBanners.forEach((b, idx) => {
            b.style.top = `${120 + idx * 72}px`;
            b.style.transition = 'top 0.3s ease';
          });
        }
      }, 350);
    }, 3200);
  }

  function triggerVipEffect(senderName, giftName, contentHTML, durationMs = 5000) {
    const overlay = document.createElement('div');
    overlay.className = 'vip-overlay';
    
    overlay.innerHTML = `
      <div class="vip-container">
        <div class="vip-glow-aura"></div>
        <div class="vip-sparkle-ring">
          <span style="position: absolute; top: 0; left: 50%; transform: translate(-50%, -50%); font-size: 18px; filter: drop-shadow(0 0 5px gold);">✨</span>
          <span style="position: absolute; top: 14.6%; left: 85.4%; transform: translate(-50%, -50%); font-size: 16px; filter: drop-shadow(0 0 5px #ff4d79);">💖</span>
          <span style="position: absolute; top: 50%; left: 100%; transform: translate(-50%, -50%); font-size: 18px; filter: drop-shadow(0 0 5px gold);">✨</span>
          <span style="position: absolute; top: 85.4%; left: 85.4%; transform: translate(-50%, -50%); font-size: 16px; filter: drop-shadow(0 0 5px #ff4d79);">💖</span>
          <span style="position: absolute; top: 100%; left: 50%; transform: translate(-50%, -50%); font-size: 18px; filter: drop-shadow(0 0 5px gold);">✨</span>
          <span style="position: absolute; top: 85.4%; left: 14.6%; transform: translate(-50%, -50%); font-size: 16px; filter: drop-shadow(0 0 5px #ff4d79);">💖</span>
          <span style="position: absolute; top: 50%; left: 0; transform: translate(-50%, -50%); font-size: 18px; filter: drop-shadow(0 0 5px gold);">✨</span>
          <span style="position: absolute; top: 14.6%; left: 14.6%; transform: translate(-50%, -50%); font-size: 16px; filter: drop-shadow(0 0 5px #ff4d79);">💖</span>
        </div>
        ${contentHTML}
      </div>
    `;
    
    document.body.appendChild(overlay);
    
    // Dynamically spawn twinkling gold stars around the central animation
    const numStars = 8;
    for (let i = 0; i < numStars; i++) {
      const star = document.createElement('div');
      star.className = 'vip-twinkle-star';
      star.textContent = Math.random() > 0.45 ? '✦' : '✨';
      
      const leftPos = Math.random() * 70 + 15; // 15% to 85%
      const topPos = Math.random() * 45 + 18;  // 18% to 63%
      
      const scale = 0.5 + Math.random() * 0.8;
      const duration = 1.0 + Math.random() * 1.5;
      const delay = Math.random() * 2;
      const fontSize = 16 + Math.random() * 14;
      
      star.style.left = `${leftPos}%`;
      star.style.top = `${topPos}%`;
      star.style.cssText += `
        --scale: ${scale};
        --twinkle-dur: ${duration}s;
        --size: ${fontSize}px;
        animation-delay: ${delay}s;
      `;
      overlay.appendChild(star);
    }

    // Dynamically spawn floating butterflies
    const numButterflies = 4;
    for (let i = 0; i < numButterflies; i++) {
      const butterfly = document.createElement('div');
      butterfly.className = 'vip-butterfly';
      butterfly.textContent = '🦋';
      
      const leftPos = Math.random() * 80 + 10;
      const floatDur = 4.5 + Math.random() * 2;
      const delay = Math.random() * 1.5;
      const scale = 0.6 + Math.random() * 0.5;
      
      const driftX1 = -40 + Math.random() * 80;
      const driftX2 = -60 + Math.random() * 120;
      const driftX3 = -40 + Math.random() * 80;
      
      butterfly.style.cssText = `
        --float-dur: ${floatDur}s;
        --drift-x1: ${driftX1}px;
        --drift-x2: ${driftX2}px;
        --drift-x3: ${driftX3}px;
        --max-op: 0.95;
        left: ${leftPos}%;
        top: 100%;
        animation-delay: ${delay}s, ${delay}s;
        transform: scale(${scale});
      `;
      overlay.appendChild(butterfly);
    }

    // Dynamically spawn glowing dust and floating particles
    const numParticles = 12;
    const particleColors = ['#ffffff', '#ffd700', '#ff8fab', '#fff59d', '#e0f7fa'];
    for (let i = 0; i < numParticles; i++) {
      const gp = document.createElement('div');
      const isStar = Math.random() > 0.5;
      
      if (isStar) {
        gp.className = 'vip-twinkle-star';
        gp.textContent = Math.random() > 0.5 ? '✦' : '✨';
        gp.style.animation = 'floatUpward var(--float-dur, 5s) ease-out forwards';
      } else {
        gp.className = 'vip-glow-particle';
      }
      
      const leftPos = Math.random() * 95 + 2.5;
      const size = 3 + Math.random() * 6;
      const color = particleColors[Math.floor(Math.random() * particleColors.length)];
      const floatDur = 3.5 + Math.random() * 2.5;
      const delay = Math.random() * 2.5;
      
      const driftX1 = -40 + Math.random() * 80;
      const driftX2 = -50 + Math.random() * 100;
      const driftX3 = -40 + Math.random() * 80;
      
      gp.style.cssText += `
        --size: ${size}px;
        --color: ${color};
        --float-dur: ${floatDur}s;
        --drift-x1: ${driftX1}px;
        --drift-x2: ${driftX2}px;
        --drift-x3: ${driftX3}px;
        --max-op: ${0.6 + Math.random() * 0.35};
        left: ${leftPos}%;
        top: 100%;
        animation-delay: ${delay}s;
      `;
      overlay.appendChild(gp);
    }
    
    // Trigger transition
    requestAnimationFrame(() => {
      overlay.classList.add('active');
    });
    
    // Auto cleanup
    setTimeout(() => {
      overlay.classList.remove('active');
      setTimeout(() => {
        overlay.remove();
      }, 400);
    }, durationMs);
  }

  function createVipHeart() {
    const h = document.createElement('div');
    h.textContent = ['❤️', '💖', '💝', '✨'][Math.floor(Math.random() * 4)];
    h.style.cssText = `
      position: fixed;
      left: 50%;
      top: 50%;
      z-index: 9995;
      pointer-events: none;
      font-size: ${24 + Math.random() * 24}px;
      transform: translate(-50%, -50%) scale(0.2);
      opacity: 1;
      transition: transform 1.5s cubic-bezier(0.1, 0.8, 0.3, 1), opacity 1.5s ease-out;
    `;
    document.body.appendChild(h);
    
    const angle = Math.random() * Math.PI * 2;
    const dist = 120 + Math.random() * 220;
    const tx = Math.cos(angle) * dist;
    const ty = Math.sin(angle) * dist;
    
    requestAnimationFrame(() => {
      h.style.transform = `translate(calc(-50% + ${tx}px), calc(-50% + ${ty}px)) scale(1.6) rotate(${(Math.random() - 0.5) * 120}deg)`;
      h.style.opacity = '0';
    });
    
    setTimeout(() => h.remove(), 1600);
  }

  function createVipFirework(xPct, yPct) {
    const fCenter = document.createElement('div');
    fCenter.style.cssText = `
      position: fixed;
      left: ${xPct}vw;
      top: ${yPct}vh;
      z-index: 9993;
      pointer-events: none;
    `;
    document.body.appendChild(fCenter);
    
    const colors = ['#ffd700', '#ff6b9d', '#ff1a5e', '#00e5ff', '#ffeb3b', '#e040fb'];
    for (let i = 0; i < 18; i++) {
      const spark = document.createElement('div');
      spark.style.cssText = `
        position: absolute;
        width: 6px;
        height: 6px;
        background: ${colors[Math.floor(Math.random() * colors.length)]};
        border-radius: 50%;
        transform: translate(-50%, -50%) scale(1);
        opacity: 1;
        box-shadow: 0 0 10px currentColor;
        transition: transform 1.3s cubic-bezier(0.1, 0.8, 0.3, 1), opacity 1.3s ease-out;
      `;
      fCenter.appendChild(spark);
      
      const angle = (i * Math.PI * 2) / 18 + (Math.random() - 0.5) * 0.15;
      const dist = 60 + Math.random() * 80;
      const tx = Math.cos(angle) * dist;
      const ty = Math.sin(angle) * dist;
      
      requestAnimationFrame(() => {
        spark.style.transform = `translate(calc(-50% + ${tx}px), calc(-50% + ${ty}px)) scale(0.3)`;
        spark.style.opacity = '0';
      });
    }
    
    setTimeout(() => fCenter.remove(), 1600);
  }

  function triggerVipRingsEffect(senderName, giftName) {
    const ringsHTML = `
      <div class="vip-rings-wrap">
        <svg class="vip-ring left-ring" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="35" fill="none" stroke="#ffd700" stroke-width="8"/>
          <ellipse cx="50" cy="18" rx="14" ry="7" fill="#fff" stroke="#ffb3c6" stroke-width="2"/>
          <polygon points="50,6 55,14 50,22 45,14" fill="#e0f7fa"/>
        </svg>
        <svg class="vip-ring right-ring" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="35" fill="none" stroke="#ffd700" stroke-width="8"/>
          <ellipse cx="50" cy="18" rx="14" ry="7" fill="#fff" stroke="#ffb3c6" stroke-width="2"/>
          <polygon points="50,6 55,14 50,22 45,14" fill="#e0f7fa"/>
        </svg>
      </div>
    `;
    triggerVipEffect(senderName, giftName, ringsHTML, 4500);
    
    // Show sparkles & hearts
    for (let i = 0; i < 24; i++) {
      setTimeout(createVipHeart, 500 + i * 90);
    }
  }

  function triggerVipCarEffect(senderName, giftName) {
    const carContainer = document.createElement('div');
    carContainer.className = 'vip-car-wrap';
    
    // Spawn car near the bottom of current viewport (fixed)
    carContainer.style.bottom = '30px';

    // Personalized crop settings for face photos
    // Modify these parameters (x, y, w, h) to align faces perfectly in the circular seats
    const groomFace = {
      img: 'img/le-nam-studio-985840.jpg',
      x: -84,   // Horizontal offset to center the groom's face
      y: -29,   // Vertical offset to center the groom's face
      w: 130,   // Width scale of photo
      h: 195    // Height scale of photo (2:3 aspect ratio)
    };
    
    const brideFace = {
      img: 'img/le-nam-studio-985840.jpg',
      x: -35,   // Horizontal offset to center the bride's face
      y: -43,   // Vertical offset to center the bride's face
      w: 130,   // Width scale of photo
      h: 195    // Height scale of photo (2:3 aspect ratio)
    };

    carContainer.innerHTML = `
      <div class="vip-car-el">
        <svg viewBox="0 0 180 90" width="100%" height="100%" style="overflow: visible;">
          <defs>
            <!-- Circle masks for faces -->
            <clipPath id="bride-face-clip">
              <circle cx="64" cy="35" r="7"/>
            </clipPath>
            <clipPath id="groom-face-clip">
              <circle cx="92" cy="34" r="7.5"/>
            </clipPath>
            
            <!-- Radial Gradients for 3D Balloon Look -->
            <radialGradient id="pink-balloon-grad" cx="30%" cy="30%" r="70%">
              <stop offset="0%" stop-color="#ff8fab"/>
              <stop offset="70%" stop-color="#ff4d79"/>
              <stop offset="100%" stop-color="#c2185b"/>
            </radialGradient>
            <radialGradient id="gold-balloon-grad" cx="30%" cy="30%" r="70%">
              <stop offset="0%" stop-color="#fff59d"/>
              <stop offset="70%" stop-color="#ffb300"/>
              <stop offset="100%" stop-color="#ff8f00"/>
            </radialGradient>
            <radialGradient id="white-balloon-grad" cx="30%" cy="30%" r="70%">
              <stop offset="0%" stop-color="#ffffff"/>
              <stop offset="75%" stop-color="#e0e0e0"/>
              <stop offset="100%" stop-color="#b0bec5"/>
            </radialGradient>
            <radialGradient id="purple-balloon-grad" cx="30%" cy="30%" r="70%">
              <stop offset="0%" stop-color="#f3e5f5"/>
              <stop offset="70%" stop-color="#ba68c8"/>
              <stop offset="100%" stop-color="#7b1fa2"/>
            </radialGradient>
            <radialGradient id="cyan-balloon-grad" cx="30%" cy="30%" r="70%">
              <stop offset="0%" stop-color="#e1f5fe"/>
              <stop offset="70%" stop-color="#4fc3f7"/>
              <stop offset="100%" stop-color="#0288d1"/>
            </radialGradient>
            <radialGradient id="orange-balloon-grad" cx="30%" cy="30%" r="70%">
              <stop offset="0%" stop-color="#ffe0b2"/>
              <stop offset="70%" stop-color="#ffb74d"/>
              <stop offset="100%" stop-color="#e65100"/>
            </radialGradient>
          </defs>

          <!-- Invisible marker for tail tracking -->
          <circle id="car-tail-marker" cx="15" cy="68" r="0.1" fill="none"/>

          <!-- Balloons held by the bride -->
          <g class="car-balloons-group" style="overflow: visible;">
            <!-- Strings starting at bride's hand (83, 49) -->
            <path d="M 83 49 Q 70 30, 63 10" stroke="#ffb3c6" stroke-width="0.6" fill="none" opacity="0.75"/>
            <path d="M 83 49 Q 65 25, 51 0" stroke="#ffe082" stroke-width="0.6" fill="none" opacity="0.75"/>
            <path d="M 83 49 Q 80 18, 75 -15" stroke="#b0bec5" stroke-width="0.6" fill="none" opacity="0.75"/>
            <path d="M 83 49 Q 60 22, 43 -12" stroke="#ba68c8" stroke-width="0.6" fill="none" opacity="0.75"/>
            <path d="M 83 49 Q 85 24, 90 -8" stroke="#4fc3f7" stroke-width="0.6" fill="none" opacity="0.75"/>
            <path d="M 83 49 Q 58 35, 38 12" stroke="#ffb74d" stroke-width="0.6" fill="none" opacity="0.75"/>
            <path d="M 83 49 Q 72 15, 60 -25" stroke="#ff8fab" stroke-width="0.6" fill="none" opacity="0.75"/>

            <!-- Pink Balloon -->
            <g transform="translate(63, 10)">
              <polygon points="0,0 -2,3 2,3" fill="#ff4d79"/>
              <ellipse cx="0" cy="-8" rx="6" ry="8" fill="url(#pink-balloon-grad)"/>
              <ellipse cx="-2" cy="-10" rx="1.5" ry="3" fill="#fff" opacity="0.4" transform="rotate(-15 -2 -10)"/>
            </g>

            <!-- Gold/Yellow Balloon -->
            <g transform="translate(51, 0)">
              <polygon points="0,0 -2,3 2,3" fill="#ffb300"/>
              <ellipse cx="0" cy="-8" rx="6" ry="8" fill="url(#gold-balloon-grad)"/>
              <ellipse cx="-2" cy="-10" rx="1.5" ry="3" fill="#fff" opacity="0.4" transform="rotate(-15 -2 -10)"/>
            </g>

            <!-- White Balloon -->
            <g transform="translate(75, -15)">
              <polygon points="0,0 -2,3 2,3" fill="#b0bec5"/>
              <ellipse cx="0" cy="-8" rx="6" ry="8" fill="url(#white-balloon-grad)"/>
              <ellipse cx="-2" cy="-10" rx="1.5" ry="3" fill="#fff" opacity="0.6" transform="rotate(-15 -2 -10)"/>
            </g>

            <!-- Purple Balloon -->
            <g transform="translate(43, -12)">
              <polygon points="0,0 -2,3 2,3" fill="#7b1fa2"/>
              <ellipse cx="0" cy="-8" rx="6" ry="8" fill="url(#purple-balloon-grad)"/>
              <ellipse cx="-2" cy="-10" rx="1.5" ry="3" fill="#fff" opacity="0.5" transform="rotate(-15 -2 -10)"/>
            </g>

            <!-- Cyan Balloon -->
            <g transform="translate(90, -8)">
              <polygon points="0,0 -2,3 2,3" fill="#0288d1"/>
              <ellipse cx="0" cy="-8" rx="6" ry="8" fill="url(#cyan-balloon-grad)"/>
              <ellipse cx="-2" cy="-10" rx="1.5" ry="3" fill="#fff" opacity="0.5" transform="rotate(-15 -2 -10)"/>
            </g>

            <!-- Orange Balloon -->
            <g transform="translate(38, 12)">
              <polygon points="0,0 -2,3 2,3" fill="#e65100"/>
              <ellipse cx="0" cy="-8" rx="6" ry="8" fill="url(#orange-balloon-grad)"/>
              <ellipse cx="-2" cy="-10" rx="1.5" ry="3" fill="#fff" opacity="0.5" transform="rotate(-15 -2 -10)"/>
            </g>

            <!-- Red Balloon -->
            <g transform="translate(60, -25)">
              <polygon points="0,0 -2,3 2,3" fill="#ff1744"/>
              <ellipse cx="0" cy="-8" rx="6" ry="8" fill="url(#pink-balloon-grad)"/>
              <ellipse cx="-2" cy="-10" rx="1.5" ry="3" fill="#fff" opacity="0.5" transform="rotate(-15 -2 -10)"/>
            </g>
          </g>

          <!-- Bumper Flowers Garland (where strings are tied) -->
          <g class="bumper-flowers" transform="translate(15, 68)">
            <circle cx="-2" cy="-2" r="3.5" fill="#ff4d79" stroke="#fff" stroke-width="0.5"/>
            <circle cx="2" cy="-1" r="3.5" fill="#ffd700" stroke="#fff" stroke-width="0.5"/>
            <circle cx="0" cy="2" r="4" fill="#ff8fab" stroke="#fff" stroke-width="0.5"/>
            <circle cx="0" cy="0" r="1.2" fill="#fff"/>
          </g>

          <!-- Ribbon tails trailing from the back -->
          <path d="M 12 58 Q -2 62, -15 58 M 12 62 Q 0 68, -12 70" stroke="#ff4d79" stroke-width="1.5" fill="none" opacity="0.8"/>
          
          <!-- Bride sitting on the passenger side (left) -->
          <g class="bride-passenger">
            <!-- Veil -->
            <path d="M 64 34 Q 52 40, 55 58 Q 72 58, 68 40 Z" fill="#ffffff" opacity="0.75" stroke="#fff" stroke-width="0.5"/>
            <!-- Dress -->
            <path d="M 64 58 L 76 58 L 74 46 C 74 42, 65 42, 65 46 Z" fill="#ffffff" stroke="#ffb3c6" stroke-width="0.5"/>
            
            <g class="bobble-head-bride">
              <g transform="translate(64, 35) scale(1.8) rotate(-7) translate(-64, -35)">
                <!-- Real Bride Face masked in circle -->
                <image href="${brideFace.img}" x="${64 + brideFace.x}" y="${35 + brideFace.y}" width="${brideFace.w}" height="${brideFace.h}" clip-path="url(#bride-face-clip)"/>
                <!-- Fallback circle stroke -->
                <circle cx="64" cy="35" r="7" fill="none" stroke="#fff" stroke-width="1.2"/>

                <!-- Hair (low opacity so face is visible) -->
                <path d="M 57 35 C 57 29, 71 29, 71 35 C 71 32, 67 31, 64 31 C 61 31, 57 32, 57 35 Z" fill="#5c4033" opacity="0.25"/>
                <!-- Flower Tiara -->
                <circle cx="61" cy="28" r="2.2" fill="#fff"/>
                <circle cx="64" cy="27" r="2.2" fill="#ffb3c6"/>
                <circle cx="67" cy="28" r="2.2" fill="#fff"/>
              </g>
            </g>
            <!-- Large, Detailed Flower Bouquet -->
            <path d="M 72 48 Q 77 46, 81 49" stroke="#ffe0bd" stroke-width="2.5" fill="none" stroke-linecap="round"/>
            <g class="bouquet" style="filter: drop-shadow(0 1px 3px rgba(0,0,0,0.15));">
              <!-- Leaf stems -->
              <path d="M 83 51 L 85 58 M 82 51 L 80 58 M 85 51 L 88 57" stroke="#4caf50" stroke-width="1.2"/>
              <!-- Leaves -->
              <path d="M 76 46 Q 73 42, 78 44 Z" fill="#2e7d32"/>
              <path d="M 90 48 Q 94 45, 91 50 Z" fill="#2e7d32"/>
              
              <!-- Flower petals/dots (7 distinct colored flowers) -->
              <circle cx="83" cy="49" r="4.5" fill="#ff4d79"/>
              <circle cx="87" cy="47" r="4" fill="#ffd700"/>
              <circle cx="80" cy="45" r="3.8" fill="#ff8fab"/>
              <circle cx="84" cy="43" r="4" fill="#ba68c8"/>
              <circle cx="89" cy="51" r="3.5" fill="#e0f7fa"/>
              <circle cx="76" cy="48" r="3.5" fill="#ff1744"/>
              <circle cx="85" cy="46" r="3" fill="#ff9100"/>
              
              <!-- Flower centers -->
              <circle cx="83" cy="49" r="1" fill="#fff"/>
              <circle cx="87" cy="47" r="0.8" fill="#fff"/>
              <circle cx="80" cy="45" r="0.8" fill="#fff"/>
              <circle cx="84" cy="43" r="0.8" fill="#fff"/>
            </g>
          </g>

          <!-- Groom sitting on the driver's side (right) -->
          <g class="groom-driver">
            <!-- Tuxedo -->
            <path d="M 78 58 L 94 58 L 91 44 C 91 40, 81 40, 81 44 Z" fill="#333"/>
            <path d="M 84 44 L 88 44 L 86 48 Z" fill="#fff"/>
            <polygon points="84,45 88,45 86,48" fill="#ff4d79"/>
            
            <g class="bobble-head-groom">
              <g transform="translate(92, 34) scale(1.8) rotate(7) translate(-92, -34)">
                <!-- Real Groom Face masked in circle -->
                <image href="${groomFace.img}" x="${92 + groomFace.x}" y="${34 + groomFace.y}" width="${groomFace.w}" height="${groomFace.h}" clip-path="url(#groom-face-clip)"/>
                <!-- Fallback circle stroke -->
                <circle cx="92" cy="34" r="7.5" fill="none" stroke="#fff" stroke-width="1.2"/>

                <!-- Hair (low opacity so face is visible) -->
                <path d="M 85 34 C 85 28, 99 28, 99 34 C 99 31, 95 30, 92 30 C 89 30, 85 31, 85 34 Z" fill="#2b1d0c" opacity="0.25"/>
              </g>
            </g>
            <!-- Arm holding steering wheel -->
            <path d="M 90 48 Q 97 44, 101 47" stroke="#ffe0bd" stroke-width="2.5" fill="none" stroke-linecap="round"/>
            <!-- Steering Wheel -->
            <circle cx="102" cy="47" r="6" fill="none" stroke="#555" stroke-width="1.5"/>
            <line x1="102" y1="47" x2="102" y2="53" stroke="#555" stroke-width="1.5"/>
          </g>

          <!-- Windshield glass -->
          <path d="M 113 52 L 123 30 L 126 30 L 116 52 Z" fill="#e0f7fa" opacity="0.6" stroke="#00bcd4" stroke-width="0.8"/>

          <!-- Main Car Body (mui trần) -->
          <path d="M 15 68 L 15 56 C 15 52, 25 52, 35 52 L 53 52 L 53 60 L 113 60 L 113 52 L 148 52 C 156 52, 160 55, 163 58 L 163 68 L 166 72 C 166 74, 163 76, 158 76 L 20 76 C 15 76, 12 74, 12 72 Z" fill="#ffb3c6" stroke="#ff4d79" stroke-width="1.8"/>

          <!-- Taillight & Headlight -->
          <rect x="11" y="56" width="4" height="7" rx="1.5" fill="#ff1a5e"/>
          <polygon points="162,56 166,58 166,62 162,62" fill="#ffd700" filter="drop-shadow(2px 0 3px gold)"/>

          <!-- Plaque "JUST MARRIED" -->
          <rect x="58" y="65" width="48" height="8" rx="1.5" fill="#fff" stroke="#ff4d79" stroke-width="0.8"/>
          <text x="82" y="71" font-size="5" font-family="'Lora', serif" font-weight="bold" fill="#ff4d79" text-anchor="middle">JUST MARRIED</text>

          <!-- Decorative Flower on Trunk -->
          <g class="trunk-flower">
            <circle cx="28" cy="52" r="4" fill="#fff" stroke="#ff4d79" stroke-width="0.6"/>
            <circle cx="31" cy="54" r="2.5" fill="#ff8fab"/>
            <circle cx="25" cy="50" r="2.5" fill="#ffd700"/>
          </g>

          <!-- Wheels -->
          <circle cx="45" cy="74" r="14" fill="#333" stroke="#fff" stroke-width="2"/>
          <circle cx="45" cy="74" r="6" fill="#ccc"/>
          <circle cx="125" cy="74" r="14" fill="#333" stroke="#fff" stroke-width="2"/>
          <circle cx="125" cy="74" r="6" fill="#ccc"/>
        </svg>
      </div>
    `;
    document.body.appendChild(carContainer);

    // Release balloons when the car stops in the middle
    setTimeout(() => {
      const balloons = carContainer.querySelector('.car-balloons-group');
      if (balloons) {
        balloons.classList.add('released');
      }
      
      // Spawn a massive burst of flowers and gifts!
      const carEl = carContainer.querySelector('.vip-car-el');
      if (carEl) {
        const marker = carEl.querySelector('#car-tail-marker');
        if (marker) {
          const rect = marker.getBoundingClientRect();
          triggerCelebrationBurst(rect.left, rect.top);
        }
      }
    }, 1600);
    
    // Trail particles
    let trackTime = 0;
    const trackInterval = setInterval(() => {
      const carEl = carContainer.querySelector('.vip-car-el');
      if (carEl) {
        const marker = carEl.querySelector('#car-tail-marker');
        if (marker) {
          const rect = marker.getBoundingClientRect();
          if (rect.left > 0 && rect.left < window.innerWidth) {
            createCarTrailHeart(rect.left, rect.top);
          }
        }
      }
      trackTime += 100;
      if (trackTime >= 5500) clearInterval(trackInterval);
    }, 100);
    
    setTimeout(() => {
      carContainer.remove();
    }, 6000);
  }

  function triggerCelebrationBurst(x, y) {
    const symbols = ['🌸', '🌹', '💖', '🎁', '🎈', '💝', '✨', '🌺', '💕', '🎁', '🎉'];
    const numBurst = 24;
    
    for (let i = 0; i < numBurst; i++) {
      setTimeout(() => {
        const p = document.createElement('div');
        p.textContent = symbols[Math.floor(Math.random() * symbols.length)];
        
        // Spread starting coordinates slightly around the car
        const startX = x + (-30 + Math.random() * 90);
        const startY = y + (-20 + Math.random() * 40);
        
        p.style.cssText = `
          position: fixed;
          left: ${startX}px;
          top: ${startY}px;
          z-index: 9994;
          pointer-events: none;
          font-size: ${18 + Math.random() * 16}px;
          opacity: 1;
          transform: translate(-50%, -50%) scale(0.3);
          transition: transform 2.5s cubic-bezier(0.1, 0.8, 0.3, 1), opacity 2.5s ease-out;
        `;
        document.body.appendChild(p);
        
        // Animate floating up and drifting wide
        const targetX = (-80 + Math.random() * 160);
        const targetY = -400 - Math.random() * 250;
        const rotation = (Math.random() - 0.5) * 360;
        const scale = 0.8 + Math.random() * 0.7;
        
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            p.style.transform = `translate(calc(-50% + ${targetX}px), calc(-50% + ${targetY}px)) scale(${scale}) rotate(${rotation}deg)`;
            p.style.opacity = '0';
          });
        });
        
        setTimeout(() => p.remove(), 2600);
      }, i * 25);
    }
  }

  function createCarTrailHeart(x, y) {
    const h = document.createElement('div');
    h.textContent = ['💖', '🎁', '💝', '🎁', '❤️', '🎁', '💕', '🎁', '✨', '🎁'][Math.floor(Math.random() * 10)];
    h.style.cssText = `
      position: fixed;
      left: ${x}px;
      top: ${y}px;
      z-index: 9994;
      pointer-events: none;
      font-size: ${16 + Math.random() * 14}px;
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
      transition: transform 1.2s ease-out, opacity 1.2s ease-out;
    `;
    document.body.appendChild(h);
    
    requestAnimationFrame(() => {
      h.style.transform = `translate(${-40 - Math.random() * 60}px, ${-15 - Math.random() * 25}px) scale(0.4) rotate(${(Math.random() - 0.5) * 120}deg)`;
      h.style.opacity = '0';
    });
    setTimeout(() => h.remove(), 1300);
  }

  function triggerVipCherryBlossomEffect(senderName, giftName) {
    const cherryHTML = `
      <div class="vip-cherry-wrap">
        <div class="vip-cherry-center-bloom">
          ${getSakuraSVG(220)}
        </div>
        <div class="vip-cherry-sub-bloom left">
          ${getSakuraSVG(120)}
        </div>
        <div class="vip-cherry-sub-bloom right">
          ${getSakuraSVG(100)}
        </div>
      </div>
    `;
    triggerVipEffect(senderName, giftName, cherryHTML, 5000);
    
    // Spawn falling cherry blossom petals!
    const numPetals = 45;
    for (let i = 0; i < numPetals; i++) {
      setTimeout(() => {
        createFallingCherryPetal();
      }, i * 100);
    }
  }

  function createFallingCherryPetal() {
    const card = document.getElementById('card');
    if (!card) return;
    const cardRect = card.getBoundingClientRect();
    const startX = Math.random() * cardRect.width;
    
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const startY = scrollTop - 40;
    
    const petal = document.createElement('div');
    petal.className = 'falling-cherry-petal';
    
    const duration = 3.5 + Math.random() * 2.0;
    const swayX = 15 + Math.random() * 35;
    const driftX = (Math.random() - 0.5) * 160;
    const fallY = 400 + Math.random() * 300;
    
    petal.style.cssText = `
      left: ${startX}px;
      top: ${startY}px;
      --duration: ${duration}s;
      --sway-x: ${swayX}px;
      --drift-x: ${driftX}px;
      --fall-y: ${fallY}px;
    `;
    
    card.appendChild(petal);
    setTimeout(() => petal.remove(), duration * 1000 + 200);
  }

  function triggerVipCastleEffect(senderName, giftName) {
    const castleHTML = `
      <svg class="vip-castle-svg" viewBox="0 0 120 100" xmlns="http://www.w3.org/2000/svg">
        <rect x="25" y="60" width="70" height="30" fill="#ffffff" stroke="#ff8fab" stroke-width="1.5"/>
        <path d="M 50 90 L 50 75 C 50 70, 70 70, 70 75 L 70 90 Z" fill="#ffb3c6" stroke="#ff4d79" stroke-width="1"/>
        <rect x="15" y="45" width="15" height="45" fill="#ffffff" stroke="#ff8fab" stroke-width="1.5"/>
        <polygon points="12,45 22,25 32,45" fill="#ffb3c6" stroke="#ff4d79" stroke-width="1.2"/>
        <rect x="90" y="45" width="15" height="45" fill="#ffffff" stroke="#ff8fab" stroke-width="1.5"/>
        <polygon points="87,45 97,25 107,45" fill="#ffb3c6" stroke="#ff4d79" stroke-width="1.2"/>
        <rect x="45" y="35" width="30" height="25" fill="#ffffff" stroke="#ff8fab" stroke-width="1.5"/>
        <polygon points="40,35 60,10 80,35" fill="#ff4d79" stroke="#ff1a5e" stroke-width="1.5"/>
        <line x1="60" y1="10" x2="60" y2="2" stroke="#ff1a5e" stroke-width="1.2"/>
        <polygon points="60,2 72,5 60,8" fill="#ffd700"/>
      </svg>
    `;
    triggerVipEffect(senderName, giftName, castleHTML, 5000);
    
    // Firework bursts
    for (let i = 0; i < 6; i++) {
      setTimeout(() => {
        createVipFirework(
          20 + Math.random() * 60,
          15 + Math.random() * 30
        );
      }, 400 + i * 800);
    }
  }

  function triggerVipBalloonEffect(senderName, giftName) {
    const groomFace = {
      img: 'img/le-nam-studio-985840.jpg',
      x: -84,
      y: -29,
      w: 130,
      h: 195
    };
    const brideFace = {
      img: 'img/le-nam-studio-985840.jpg',
      x: -35,
      y: -43,
      w: 130,
      h: 195
    };

    const container = document.createElement('div');
    container.className = 'vip-balloon-wrap';
    
    container.innerHTML = `
      <svg viewBox="0 0 120 190" width="100%" height="100%" style="overflow: visible;">
        <defs>
          <!-- Circular head clips - Raised to cy=116 to pop head out of basket -->
          <clipPath id="balloon-bride-face-clip">
            <circle cx="44" cy="116" r="18"/>
          </clipPath>
          <clipPath id="balloon-groom-face-clip">
            <circle cx="76" cy="116" r="18"/>
          </clipPath>
          
          <radialGradient id="balloon-dome-grad" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stop-color="#ffccd5"/>
            <stop offset="40%" stop-color="#ff4d79"/>
            <stop offset="85%" stop-color="#cc003f"/>
            <stop offset="100%" stop-color="#66001f"/>
          </radialGradient>
          
          <linearGradient id="balloon-gold-strip" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#ffe066"/>
            <stop offset="30%" stop-color="#f5d060"/>
            <stop offset="70%" stop-color="#d4af37"/>
            <stop offset="100%" stop-color="#8a6f27"/>
          </linearGradient>

          <linearGradient id="basket-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#5c2e0b"/>
            <stop offset="30%" stop-color="#a0522d"/>
            <stop offset="70%" stop-color="#cd853f"/>
            <stop offset="100%" stop-color="#8b4513"/>
          </linearGradient>

          <linearGradient id="banner-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#ff1a5e"/>
            <stop offset="50%" stop-color="#ff4d79"/>
            <stop offset="100%" stop-color="#d81b60"/>
          </linearGradient>

          <radialGradient id="mini-balloon-grad" cx="30%" cy="30%" r="70%">
            <stop offset="0%" stop-color="#ffb3c6"/>
            <stop offset="70%" stop-color="#ff4d79"/>
            <stop offset="100%" stop-color="#b3002d"/>
          </radialGradient>
        </defs>
        
        <!-- Balloon Dome -->
        <path d="M 23 95 C 10 70, 20 20, 60 20 C 100 20, 110 70, 97 95 C 97 95, 80 130, 72 130 L 48 130 C 40 130, 23 95, 23 95 Z" fill="url(#balloon-dome-grad)" stroke="#ff1a5e" stroke-width="1.5"/>
        
        <!-- 3D Glossy Highlight Overlay on Dome -->
        <path d="M 24 90 C 12 65, 22 25, 60 25 C 75 25, 45 40, 32 75 C 28 85, 24 90, 24 90 Z" fill="#ffffff" opacity="0.25"/>

        <!-- Golden Decorative Stripes -->
        <path d="M 45 22 C 30 50, 40 100, 48 130 L 58 130 C 50 100, 42 50, 50 20 Z" fill="url(#balloon-gold-strip)" opacity="0.85"/>
        <path d="M 75 22 C 90 50, 80 100, 72 130 L 62 130 C 70 100, 78 50, 70 20 Z" fill="url(#balloon-gold-strip)" opacity="0.85"/>
        
        <!-- Glow behind the center heart -->
        <path d="M 60 74 C 60 74, 42 58, 42 46 C 42 36, 56 32, 60 44 C 64 32, 78 36, 78 46 C 78 58, 60 74, 60 74 Z" fill="#ff8fab" opacity="0.4" filter="blur(2px)"/>

        <!-- Large 3D Gold Embossed Heart in center of balloon -->
        <path d="M 60 72 C 60 72, 45 58, 45 48 C 45 40, 56 36, 60 46 C 64 36, 75 40, 75 48 C 75 58, 60 72, 60 72 Z" fill="url(#balloon-gold-strip)" filter="url(#embossGate) drop-shadow(0 4px 10px rgba(0,0,0,0.3))"/>
        
        <!-- Ropes -->
        <line x1="48" y1="130" x2="42" y2="152" stroke="#d4af37" stroke-width="1.2"/>
        <line x1="60" y1="130" x2="60" y2="152" stroke="#d4af37" stroke-width="0.8"/>
        <line x1="72" y1="130" x2="78" y2="152" stroke="#d4af37" stroke-width="1.2"/>
        
        <!-- Bride sitting in basket (left) - Heads raised above basket top rim (152) -->
        <g class="balloon-bride">
          <!-- White dress collar and shoulders extending to basket -->
          <path d="M 27 152 L 29 130 C 29 118, 59 118, 59 130 L 61 152 Z" fill="#fff" stroke="#ffb3c6" stroke-width="0.5"/>
          <image href="${brideFace.img}" x="${44 + brideFace.x * 2.0}" y="${116 + brideFace.y * 2.0}" width="260" height="390" clip-path="url(#balloon-bride-face-clip)"/>
          <circle cx="44" cy="116" r="18" fill="none" stroke="#ffd700" stroke-width="1.5"/>
          <!-- Hair overlay adjusted for cy=116 -->
          <path d="M 26 116 C 26 103, 62 103, 62 116 C 62 108, 53 106, 44 106 C 35 106, 26 108, 26 116 Z" fill="#2b1d0c" opacity="0.3"/>
        </g>
        
        <!-- Groom sitting in basket (right) - Heads raised above basket top rim (152) -->
        <g class="balloon-groom">
          <!-- Tuxedo collar and shoulders extending to basket -->
          <path d="M 59 152 L 61 130 C 61 118, 91 118, 91 130 L 93 152 Z" fill="#333"/>
          <polygon points="71,130 81,130 76,140" fill="#fff"/>
          <polygon points="73,131 79,131 76,135" fill="#ff4d79"/>
          <image href="${groomFace.img}" x="${76 + groomFace.x * 2.0}" y="${116 + groomFace.y * 2.0}" width="260" height="390" clip-path="url(#balloon-groom-face-clip)"/>
          <circle cx="76" cy="116" r="18" fill="none" stroke="#ffd700" stroke-width="1.5"/>
          <!-- Hair overlay adjusted for cy=116 -->
          <path d="M 58 116 C 58 103, 94 103, 94 116 C 94 108, 85 106, 76 106 C 67 106, 58 116, 58 116 Z" fill="#2b1d0c" opacity="0.25"/>
        </g>
        
        <!-- Basket (drawn after heads so rim covers shoulders/necks correctly) -->
        <path d="M 35 152 L 85 152 C 88 152, 90 155, 87 172 C 85 178, 80 180, 60 180 C 40 180, 35 178, 33 172 C 30 155, 32 152, 35 152 Z" fill="url(#basket-grad)" stroke="#5c2e0b" stroke-width="1.5"/>
        <!-- Weaving pattern lines -->
        <path d="M 35 158 H 85 M 34 164 H 86 M 33 170 H 87" stroke="#3d1f07" stroke-width="0.8" fill="none"/>
        <path d="M 45 152 V 180 M 55 152 V 180 M 65 152 V 180 M 75 152 V 180" stroke="#3d1f07" stroke-width="0.8" fill="none"/>
        
        <!-- Gold basket top rim -->
        <rect x="31" y="150" width="58" height="4" fill="url(#balloon-gold-strip)" rx="2" stroke="#8b4513" stroke-width="0.5"/>
        
        <!-- Flower Garland on Basket Rim -->
        <g class="basket-flowers">
          <circle cx="36" cy="152" r="3" fill="#ff4d79" stroke="#fff" stroke-width="0.4"/>
          <circle cx="48" cy="153" r="3" fill="#ffd700" stroke="#fff" stroke-width="0.4"/>
          <circle cx="60" cy="154" r="3.5" fill="#ff8fab" stroke="#fff" stroke-width="0.4"/>
          <circle cx="72" cy="153" r="3" fill="#ffd700" stroke="#fff" stroke-width="0.4"/>
          <circle cx="84" cy="152" r="3" fill="#ff4d79" stroke="#fff" stroke-width="0.4"/>
          <!-- Centers -->
          <circle cx="36" cy="152" r="0.8" fill="#fff"/>
          <circle cx="48" cy="153" r="0.8" fill="#fff"/>
          <circle cx="60" cy="154" r="1" fill="#fff"/>
          <circle cx="72" cy="153" r="0.8" fill="#fff"/>
          <circle cx="84" cy="152" r="0.8" fill="#fff"/>
        </g>

        <!-- Sandbags hanging on basket sides -->
        <path d="M 29 157 C 27 157, 26 163, 29 166 C 31 168, 32 163, 32 157 Z" fill="#d2b48c" stroke="#8b4513" stroke-width="0.5"/>
        <path d="M 91 157 C 89 157, 88 163, 91 166 C 93 168, 94 163, 94 157 Z" fill="#d2b48c" stroke="#8b4513" stroke-width="0.5"/>
        
        <!-- Hanging banner -->
        <path d="M 43 162 L 77 162 L 77 172 L 60 166 L 43 172 Z" fill="url(#banner-grad)" stroke="#fff" stroke-width="0.8"/>
        <text x="60" y="169" font-family="'Lora', serif" font-size="6" fill="#fff" text-anchor="middle" font-weight="bold">LOVE</text>
        
        <!-- Decorative Heart Balloons on the side -->
        <g>
          <!-- Left Balloon -->
          <path d="M 28 152 C 22 135, 12 145, 18 128" stroke="#ffb3c6" stroke-width="0.6" fill="none"/>
          <path d="M 18 128 C 18 128, 13 122, 13 118 C 13 114, 18 112, 18 118 C 18 112, 23 114, 23 118 C 23 122, 18 128, 18 128 Z" fill="url(#mini-balloon-grad)" filter="drop-shadow(0 0 2px #ff8fab)"/>
          
          <!-- Right Balloon -->
          <path d="M 92 152 C 98 135, 108 145, 102 128" stroke="#ff8fab" stroke-width="0.6" fill="none"/>
          <path d="M 102 128 C 102 128, 97 122, 97 118 C 97 114, 102 112, 102 118 C 102 112, 107 114, 107 118 C 107 122, 102 128, 102 128 Z" fill="url(#mini-balloon-grad)" filter="drop-shadow(0 0 2px #ff4d79)"/>
        </g>
      </svg>
    `;
    
    document.body.appendChild(container);
    
    // Helper function to spawn small heart flocks of lovebirds
    function spawnSmallFlock(className, floatAnimation, delayMs) {
      const flockContainer = document.createElement('div');
      flockContainer.className = `vip-flock-container ${className}`;
      flockContainer.style.animation = `${floatAnimation} 7.0s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delayMs}ms forwards`;
      document.body.appendChild(flockContainer);
      
      const birdCount = 10;
      for (let i = 0; i < birdCount; i++) {
        const t = (Math.PI * 2 * i) / birdCount - Math.PI;
        const xVal = 16 * Math.pow(Math.sin(t), 3);
        const yVal = 13 * Math.cos(t) - 5 * Math.cos(2*t) - 2 * Math.cos(3*t) - Math.cos(4*t);
        
        const xScaled = xVal * 3.2;
        const yScaled = -yVal * 3.2;
        
        const bird = document.createElement('div');
        bird.className = 'vip-bird-follower';
        
        // Random starting positions near the bottom of the container
        const startX = 60 + (Math.random() - 0.5) * 80;
        const startY = 180 + Math.random() * 100;
        
        bird.style.left = `${startX}px`;
        bird.style.top = `${startY}px`;
        bird.style.transform = `scale(0.1)`;
        bird.style.opacity = '0';
        // Parabolic arc curve transition with randomized durations
        const duration = 2.0 + Math.random() * 0.8;
        bird.style.transition = `left ${duration}s cubic-bezier(0.25, 0.1, 0.25, 1), top ${duration}s cubic-bezier(0.1, 0.8, 0.3, 1), transform ${duration}s ease-out, opacity ${duration}s ease-out`;
        bird.style.animationDelay = `${Math.random() * -1.2}s, ${Math.random() * -1.6}s`;
        
        bird.innerHTML = `
          <svg viewBox="0 0 50 40" width="100%" height="100%" style="overflow: visible;">
            <!-- Back wing -->
            <path class="bird-wing-flap" style="animation-delay: ${i * 0.05}s;" d="M 20 16 C 10 -2, 22 -5, 24 10 Z" fill="#ffb3c6" stroke="#ff4d79" stroke-width="0.6"/>
            <!-- Tail feathers -->
            <path d="M 8 20 C 2 24, -2 30, -4 34 C 0 30, 4 26, 8 22 Z" fill="#ff8fab" stroke="#ff4d79" stroke-width="0.6"/>
            <!-- Body -->
            <path d="M 8 20 C 15 15, 28 17, 36 12 C 40 10, 42 12, 39 16 C 34 22, 26 26, 18 26 C 13 26, 8 22, 8 20 Z" fill="#ffffff" stroke="#ff4d79" stroke-width="0.8"/>
            <!-- Front wing -->
            <path class="bird-wing-flap" style="animation-delay: ${i * 0.05 + 0.1}s;" d="M 18 18 C 8 2, 20 -1, 22 12 Z" fill="#ff8fab" stroke="#ff1a5e" stroke-width="0.6"/>
            <!-- Eye -->
            <circle cx="33" cy="14" r="1" fill="#222"/>
            <!-- Heart in beak -->
            <text x="35" y="21" font-size="9" fill="#ff1a5e" style="filter: drop-shadow(0 1px 2px rgba(255,26,94,0.4));">❤️</text>
          </svg>
        `;
        flockContainer.appendChild(bird);
        
        const scaleX = xScaled > 0 ? -0.45 : 0.45;
        const scaleY = 0.45;
        const rotation = xScaled > 0 ? -12 : 12;
        
        setTimeout(() => {
          bird.style.left = `${60 + xScaled}px`;
          bird.style.top = `${60 + yScaled}px`;
          bird.style.opacity = '1';
          bird.style.transform = `scaleX(${scaleX}) scaleY(${scaleY}) rotate(${rotation}deg)`;
        }, 50 + i * 40);
      }
      
      // Clean up container
      setTimeout(() => {
        flockContainer.remove();
      }, 8500);
    }
    
    // Spawn 3 small flocks of lovebirds: left, right, and trailing center-below
    spawnSmallFlock('vip-flock-left', 'flockFloatUpLeft', 400);
    spawnSmallFlock('vip-flock-right', 'flockFloatUpRight', 100);
    spawnSmallFlock('vip-flock-center', 'flockFloatUpCenter', 800);
    
    // Sparkle trail interval for all lovebird flocks
    const sparkleInterval = setInterval(() => {
      const birds = document.querySelectorAll('.vip-bird-follower');
      birds.forEach(bird => {
        const rect = bird.getBoundingClientRect();
        if (rect.left > 0 && rect.left < window.innerWidth && rect.top > 0 && rect.top < window.innerHeight) {
          if (Math.random() < 0.4) {
            createTrailSparkle(rect.left + rect.width / 2, rect.top + rect.height / 2);
          }
        }
      });
    }, 150);
    
    // Spawn floating hearts
    for (let i = 0; i < 15; i++) {
      setTimeout(() => {
        createVipHeart();
      }, 500 + i * 350);
    }
    
    // Clean up
    setTimeout(() => {
      container.remove();
    }, 7000);
    setTimeout(() => {
      clearInterval(sparkleInterval);
    }, 8500);
  }

  function triggerNormalCenterEffect(senderName, gift) {
    const normalHTML = `
      <div class="normal-center-pop">${gift.icon}</div>
    `;
    triggerVipEffect(senderName, gift.name, normalHTML, 3200);
    
    // Shower particles in all directions
    setTimeout(() => {
      const centerPoint = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
      for (let i = 0; i < 22; i++) {
        createNormalParticle(centerPoint.x, centerPoint.y, gift.icon);
      }
    }, 450);
  }

  function createNormalParticle(x, y, icon) {
    const p = document.createElement('div');
    // Mix icon with sparkles
    p.textContent = [icon, '✨', '💖', '🌸'][Math.floor(Math.random() * 4)];
    p.style.cssText = `
      position: fixed;
      left: ${x}px;
      top: ${y}px;
      z-index: 9993;
      pointer-events: none;
      font-size: ${22 + Math.random() * 16}px;
      transform: translate(-50%, -50%) scale(0.2);
      opacity: 1;
      transition: transform 1.4s cubic-bezier(0.1, 0.8, 0.3, 1), opacity 1.4s ease-out;
    `;
    document.body.appendChild(p);
    
    const angle = Math.random() * Math.PI * 2;
    const dist = 110 + Math.random() * 180;
    const tx = Math.cos(angle) * dist;
    const ty = Math.sin(angle) * dist;
    
    requestAnimationFrame(() => {
      p.style.transform = `translate(calc(-50% + ${tx}px), calc(-50% + ${ty}px)) scale(1.4) rotate(${(Math.random() - 0.5) * 180}deg)`;
      p.style.opacity = '0';
    });
    
    setTimeout(() => p.remove(), 1500);
  }

  function triggerSwanSquadron() {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const swanCount = 26;
    
    // Create temporary blurred backdrop overlay
    const bgOverlay = document.createElement('div');
    bgOverlay.className = 'swan-bg-overlay';
    bgOverlay.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: radial-gradient(circle at center, rgba(32, 2, 7, 0.72) 0%, rgba(12, 1, 3, 0.88) 100%);
      backdrop-filter: blur(5px);
      z-index: 9991;
      opacity: 0;
      pointer-events: none;
      transition: opacity 1.5s ease;
    `;
    document.body.appendChild(bgOverlay);
    
    requestAnimationFrame(() => {
      bgOverlay.style.opacity = '1';
    });
    
    // Create names element to fade in at the center of the heart
    const namesEl = document.createElement('div');
    namesEl.className = 'swan-heart-names';
    namesEl.innerHTML = `
      <div style="font-family: 'Great Vibes', cursive; font-size: 26px; font-weight: 700; color: #ffffff; text-shadow: 0 0 8px #ffd700, 0 0 16px #ff4d79, 0 2px 4px rgba(0,0,0,0.8);">Đoàn Quang</div>
      <div style="font-size: 16px; color: #ff1a5e; margin: 2px 0; filter: drop-shadow(0 0 5px #ff1a5e); transform: scale(1.2);">❤️</div>
      <div style="font-family: 'Great Vibes', cursive; font-size: 26px; font-weight: 700; color: #ffffff; text-shadow: 0 0 8px #ffd700, 0 0 16px #ff4d79, 0 2px 4px rgba(0,0,0,0.8);">Như Quỳnh</div>
    `;
    namesEl.style.cssText = `
      position: fixed;
      left: ${centerX}px;
      top: ${centerY}px;
      transform: translate(-50%, -50%) scale(0.6);
      z-index: 10000;
      opacity: 0;
      text-align: center;
      transition: opacity 1.2s cubic-bezier(0.25, 0.8, 0.25, 1), transform 1.2s cubic-bezier(0.25, 0.8, 0.25, 1);
      pointer-events: none;
      white-space: nowrap;
    `;
    document.body.appendChild(namesEl);
    
    // Fade in names as the heart forms (at 2200ms)
    setTimeout(() => {
      namesEl.style.opacity = '1';
      namesEl.style.transform = 'translate(-50%, -50%) scale(1)';
    }, 2200);

    for (let i = 0; i < swanCount; i++) {
      setTimeout(() => {
        // Calculate heart coordinates directly
        const t = (Math.PI * 2 * i) / swanCount - Math.PI;
        const xVal = 16 * Math.pow(Math.sin(t), 3);
        const yVal = 13 * Math.cos(t) - 5 * Math.cos(2*t) - 2 * Math.cos(3*t) - Math.cos(4*t);
        const xScaled = xVal * 10.2;
        const yScaled = -yVal * 10.2;

        // Orient to face the center of the heart
        let scaleX = 0.48;
        const scaleY = 0.48;
        let rotation = 0;

        if (xScaled > 0) {
          scaleX = -0.48;
          const angle = Math.atan2(-yScaled, -xScaled);
          rotation = (angle - Math.PI) * 180 / Math.PI;
        } else {
          scaleX = 0.48;
          const angle = Math.atan2(-yScaled, -xScaled);
          rotation = angle * 180 / Math.PI;
        }

        const container = document.createElement('div');
        container.className = 'swan-flying-container';
        
        // Initial spawn position: bottom of current visible viewport
        const spawnX = centerX + (Math.random() - 0.5) * window.innerWidth * 0.8;
        const spawnY = window.innerHeight + 100;
        
        container.style.position = 'fixed';
        container.style.left = `${spawnX}px`;
        container.style.top = `${spawnY}px`;
        container.style.opacity = '0';
        container.style.transform = `translate(-50%, -50%) scale(0.1)`;
        
        // Parabolic arc transition with randomized duration
        const duration = 2.2 + Math.random() * 0.8;
        container.style.transition = `left ${duration}s cubic-bezier(0.25, 0.1, 0.25, 1), top ${duration}s cubic-bezier(0.1, 0.8, 0.3, 1), transform ${duration}s ease-out, opacity ${duration}s ease-out`;
        
        container.innerHTML = `
          <svg viewBox="0 0 100 80" class="swan-svg-flying" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="flying-swan-body-grad-${i}" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#ffffff"/>
                <stop offset="40%" stop-color="#ffd54f"/>
                <stop offset="100%" stop-color="#ff8f00"/>
              </linearGradient>
              <linearGradient id="flying-swan-wing-grad-${i}" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#ffffff"/>
                <stop offset="50%" stop-color="#ff8fab"/>
                <stop offset="100%" stop-color="#d81b60"/>
              </linearGradient>
            </defs>
            <g>
              <path class="swan-wing far-wing" d="M 45 45 C 30 10, 60 5, 65 30 C 65 30, 52 35, 45 45 Z" fill="url(#flying-swan-wing-grad-${i})" stroke="#c2185b" stroke-width="0.8"/>
              <path class="swan-body" d="M 22 52 C 32 52, 45 57, 54 47 C 62 38, 60 22, 66 20 C 70 19, 73 24, 69 32 C 62 46, 54 53, 44 56 C 30 57, 22 53, 22 52 Z" fill="url(#flying-swan-body-grad-${i})" stroke="#d84315" stroke-width="1"/>
              <path d="M 68 20 L 73 22 L 70 25 Z" fill="#ff6d00" stroke="#d84315" stroke-width="0.5"/>
              <circle cx="65" cy="23" r="1" fill="#222"/>
              <path class="swan-wing near-wing" d="M 40 48 C 20 15, 50 10, 55 35 C 55 35, 46 40, 40 48 Z" fill="url(#flying-swan-wing-grad-${i})" stroke="#c2185b" stroke-width="0.8"/>
            </g>
          </svg>
        `;
        
        document.body.appendChild(container);
        
        // Trigger flight to heart position
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            container.style.left = `${centerX + xScaled}px`;
            container.style.top = `${centerY + yScaled}px`;
            container.style.opacity = '1';
            container.style.transform = `translate(-50%, -50%) scaleX(${scaleX}) scaleY(${scaleY}) rotate(${rotation}deg)`;
            
            // Start organic hovering/swaying after arrival
            setTimeout(() => {
              container.classList.add('swan-hovering');
              container.style.animationDelay = `${Math.random() * -2.2}s`;
            }, duration * 1000);
          });
        });
        
        // Sparkle trail interval while holding formation
        let trailInterval = null;
        setTimeout(() => {
          trailInterval = setInterval(() => {
            const rect = container.getBoundingClientRect();
            createTrailSparkle(rect.left + rect.width / 2, rect.top + rect.height / 2);
          }, 150);
        }, 800);
        
        // Staggered Fly Away phase
        setTimeout(() => {
          if (trailInterval) clearInterval(trailInterval);
          container.classList.remove('swan-hovering');
          
          const flyDuration = 1.4 + Math.random() * 0.6;
          container.style.transition = `left ${flyDuration}s ease-in, top ${flyDuration}s cubic-bezier(0.55, 0.085, 0.68, 0.53), transform ${flyDuration}s ease-in, opacity ${flyDuration - 0.2}s ease-in`;
          container.style.top = `-150px`;
          container.style.opacity = '0';
          const extraRot = (Math.random() - 0.5) * 90;
          container.style.transform = `translate(-50%, -50%) scaleX(${scaleX * 0.3}) scaleY(${scaleY * 0.3}) rotate(${rotation + 90 + extraRot}deg)`;
          
          setTimeout(() => container.remove(), flyDuration * 1000 + 100);
        }, 5500 + i * 50);
        
      }, i * 70);
    }
    
    // Fade out names when the fly-away starts
    setTimeout(() => {
      namesEl.style.opacity = '0';
      namesEl.style.transform = 'translate(-50%, -50%) scale(0.8)';
      setTimeout(() => namesEl.remove(), 1200);
    }, 5500);

    // Fade out background overlay
    setTimeout(() => {
      bgOverlay.style.opacity = '0';
      setTimeout(() => bgOverlay.remove(), 1500);
    }, 5500);
  }

  function triggerDovesEffect(senderName, giftName) {
    const dovesHTML = `
      <div class="vip-doves-wrap">
        <!-- Left Pink Dove SVG with head crest & long tail -->
        <svg class="dove-svg dove-left" viewBox="-10 5 100 85" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="pink-dove-body" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#ffc2d1"/>
              <stop offset="60%" stop-color="#ff8fab"/>
              <stop offset="100%" stop-color="#d81b60"/>
            </linearGradient>
            <linearGradient id="pink-dove-wing-1" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#ffe0e6"/>
              <stop offset="100%" stop-color="#ff4d79"/>
            </linearGradient>
            <linearGradient id="pink-dove-wing-2" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#f3e5f5"/>
              <stop offset="100%" stop-color="#ba68c8"/>
            </linearGradient>
            <linearGradient id="pink-dove-wing-3" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#e1f5fe"/>
              <stop offset="100%" stop-color="#29b6f6"/>
            </linearGradient>
          </defs>
          <!-- Blue Head Crest -->
          <g>
            <path d="M 64 20 Q 56 10, 48 12 Q 54 16, 62 21 Z" fill="#81d4fa" stroke="#0288d1" stroke-width="0.5"/>
            <path d="M 64 19 Q 58 6, 52 7 Q 56 12, 62 20 Z" fill="#81d4fa" stroke="#0288d1" stroke-width="0.5"/>
          </g>
          <!-- Long Pink Tail Feathers -->
          <g>
            <path d="M 22 52 Q 10 58, 2 72 Q 8 68, 20 54 Z" fill="url(#pink-dove-body)" stroke="#ff1a5e" stroke-width="0.8"/>
            <path d="M 22 54 Q 5 65, -5 85 Q 3 76, 18 56 Z" fill="#ff8fab" stroke="#ff4d79" stroke-width="0.8"/>
          </g>
          <!-- Back Wing (flapping) -->
          <g class="dove-wing-flap">
            <path d="M 45 45 C 30 10, 60 5, 65 30 Q 52 35, 45 45 Z" fill="url(#pink-dove-wing-2)" stroke="#ba68c8" stroke-width="0.5"/>
            <path d="M 42 47 C 32 15, 55 10, 58 32 Q 48 37, 42 47 Z" fill="url(#pink-dove-wing-1)" stroke="#ff4d79" stroke-width="0.5"/>
          </g>
          <!-- Body and neck pointing right -->
          <path d="M 22 52 C 32 52, 45 57, 54 47 C 62 38, 60 22, 66 20 C 70 19, 73 24, 69 32 C 62 46, 54 53, 44 56 C 30 57, 22 53, 22 52 Z" fill="url(#pink-dove-body)" stroke="#ff1a5e" stroke-width="1.2"/>
          <path d="M 68 20 L 74 22 L 69 24 Z" fill="#ffd700" stroke="#ff4d79" stroke-width="0.4"/>
          <circle cx="64" cy="22" r="1.2" fill="#222"/>
          <!-- Front Wing (flapping) -->
          <g class="dove-wing-flap-near">
            <path d="M 40 48 C 20 15, 50 10, 55 35 Q 46 40, 40 48 Z" fill="url(#pink-dove-wing-3)" stroke="#0288d1" stroke-width="0.6"/>
            <path d="M 37 50 C 23 20, 45 15, 48 38 Q 41 43, 37 50 Z" fill="url(#pink-dove-wing-2)" stroke="#ba68c8" stroke-width="0.6"/>
            <path d="M 34 52 C 26 25, 40 20, 42 41 Q 36 46, 34 52 Z" fill="url(#pink-dove-wing-1)" stroke="#ff4d79" stroke-width="0.6"/>
          </g>
        </svg>

        <!-- Right Blue Dove SVG with head crest & long tail -->
        <svg class="dove-svg dove-right" viewBox="-10 5 100 85" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="blue-dove-body" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#b3e5fc"/>
              <stop offset="60%" stop-color="#81d4fa"/>
              <stop offset="100%" stop-color="#0288d1"/>
            </linearGradient>
            <linearGradient id="blue-dove-wing-1" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#e1f5fe"/>
              <stop offset="100%" stop-color="#29b6f6"/>
            </linearGradient>
            <linearGradient id="blue-dove-wing-2" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#f3e5f5"/>
              <stop offset="100%" stop-color="#ba68c8"/>
            </linearGradient>
            <linearGradient id="blue-dove-wing-3" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#ffe0e6"/>
              <stop offset="100%" stop-color="#ff4d79"/>
            </linearGradient>
          </defs>
          <!-- Pink Head Crest -->
          <g>
            <path d="M 64 20 Q 56 10, 48 12 Q 54 16, 62 21 Z" fill="#ff8fab" stroke="#ff4d79" stroke-width="0.5"/>
            <path d="M 64 19 Q 58 6, 52 7 Q 56 12, 62 20 Z" fill="#ff8fab" stroke="#ff4d79" stroke-width="0.5"/>
          </g>
          <!-- Long Blue Tail Feathers -->
          <g>
            <path d="M 22 52 Q 10 58, 2 72 Q 8 68, 20 54 Z" fill="url(#blue-dove-body)" stroke="#0288d1" stroke-width="0.8"/>
            <path d="M 22 54 Q 5 65, -5 85 Q 3 76, 18 56 Z" fill="#81d4fa" stroke="#0288d1" stroke-width="0.8"/>
          </g>
          <!-- Back Wing (flapping) -->
          <g class="dove-wing-flap">
            <path d="M 45 45 C 30 10, 60 5, 65 30 Q 52 35, 45 45 Z" fill="url(#blue-dove-wing-2)" stroke="#ba68c8" stroke-width="0.5"/>
            <path d="M 42 47 C 32 15, 55 10, 58 32 Q 48 37, 42 47 Z" fill="url(#blue-dove-wing-1)" stroke="#29b6f6" stroke-width="0.5"/>
          </g>
          <!-- Body and neck pointing right -->
          <path d="M 22 52 C 32 52, 45 57, 54 47 C 62 38, 60 22, 66 20 C 70 19, 73 24, 69 32 C 62 46, 54 53, 44 56 C 30 57, 22 53, 22 52 Z" fill="url(#blue-dove-body)" stroke="#0288d1" stroke-width="1.2"/>
          <path d="M 68 20 L 74 22 L 69 24 Z" fill="#ffd700" stroke="#0288d1" stroke-width="0.4"/>
          <circle cx="64" cy="22" r="1.2" fill="#222"/>
          <!-- Front Wing (flapping) -->
          <g class="dove-wing-flap-near">
            <path d="M 40 48 C 20 15, 50 10, 55 35 Q 46 40, 40 48 Z" fill="url(#blue-dove-wing-3)" stroke="#ff4d79" stroke-width="0.6"/>
            <path d="M 37 50 C 23 20, 45 15, 48 38 Q 41 43, 37 50 Z" fill="url(#blue-dove-wing-2)" stroke="#ba68c8" stroke-width="0.6"/>
            <path d="M 34 52 C 26 25, 40 20, 42 41 Q 36 46, 34 52 Z" fill="url(#blue-dove-wing-1)" stroke="#29b6f6" stroke-width="0.6"/>
          </g>
        </svg>

        <!-- Connecting Green Twig SVG -->
        <svg class="dove-ribbon-svg" viewBox="0 0 280 160" style="position: absolute; left: 0; top: 0; width: 100%; height: 100%; pointer-events: none; overflow: visible;">
          <!-- Green leafy twig path connecting beaks -->
          <path d="M 97 51 Q 140 35, 183 51" stroke="#4caf50" stroke-width="2" fill="none" stroke-linecap="round" filter="drop-shadow(0 2px 4px rgba(76, 175, 80, 0.4))"/>
          <!-- Leaves -->
          <path d="M 115 45 C 111 38, 120 35, 120 35 C 120 35, 123 41, 115 45 Z" fill="#81c784" stroke="#388e3c" stroke-width="0.3"/>
          <path d="M 130 45 C 132 38, 141 37, 141 37 C 141 37, 139 44, 130 45 Z" fill="#66bb6a" stroke="#2e7d32" stroke-width="0.3"/>
          <path d="M 148 46 C 146 39, 155 36, 155 36 C 155 36, 157 42, 148 46 Z" fill="#81c784" stroke="#388e3c" stroke-width="0.3"/>
          <path d="M 163 47 C 166 40, 175 40, 175 40 C 175 40, 173 47, 163 47 Z" fill="#66bb6a" stroke="#2e7d32" stroke-width="0.3"/>
        </svg>

        <!-- Popping Heart -->
        <div class="dove-heart">💖</div>
      </div>
    `;
    triggerVipEffect(senderName, giftName, dovesHTML, 4500);

    // Spawn falling feathers and sparkles
    for (let i = 0; i < 20; i++) {
      setTimeout(createVipHeart, 300 + i * 150);
      setTimeout(createFallingFeather, 500 + i * 180);
    }
  }

  function createFallingFeather() {
    const card = document.getElementById('card');
    if (!card) return;
    const cardRect = card.getBoundingClientRect();
    const startX = Math.random() * cardRect.width;
    
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const startY = scrollTop - 40;
    
    const f = document.createElement('div');
    f.textContent = '🪶';
    f.style.cssText = `
      position: absolute;
      left: ${startX}px;
      top: ${startY}px;
      z-index: 9993;
      pointer-events: none;
      font-size: ${16 + Math.random() * 10}px;
      opacity: 0.9;
      transform: rotate(0deg);
      transition: transform 3.5s linear, top 3.5s linear, left 3.5s linear, opacity 3.5s ease-out;
    `;
    card.appendChild(f);
    
    const driftX = (Math.random() - 0.5) * 160;
    const fallDist = 300 + Math.random() * 200;
    const rotation = 180 + Math.random() * 360;
    
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        f.style.left = `${startX + driftX}px`;
        f.style.top = `${startY + fallDist}px`;
        f.style.transform = `rotate(${rotation}deg)`;
        f.style.opacity = '0';
      });
    });
    
    setTimeout(() => f.remove(), 3700);
  }

  function triggerPlaneSquadron() {
    const planeCount = 3;
    const flyPaths = ['fly-lr', 'fly-rl', 'fly-lr'];
    
    // Helper function to create dropped gifts
    function createFallingParachuteGift(x, y) {
      const giftEl = document.createElement('div');
      giftEl.className = 'falling-dropped-gift';
      
      giftEl.innerHTML = `
        <div class="balloon-parachute">🎈</div>
        <div class="gift-box-attached">🎁</div>
      `;
      
      giftEl.style.left = `${x}px`;
      giftEl.style.top = `${y}px`;
      
      const driftX = (Math.random() - 0.5) * 100;
      const spin = (Math.random() - 0.5) * 180;
      const fallDuration = 3.5 + Math.random() * 1.5;
      
      giftEl.style.setProperty('--drift-x', `${driftX}px`);
      giftEl.style.setProperty('--spin', `${spin}deg`);
      giftEl.style.setProperty('--duration', `${fallDuration}s`);
      
      document.body.appendChild(giftEl);
      
      setTimeout(() => {
        giftEl.remove();
      }, fallDuration * 1000 + 200);
    }

    for (let i = 0; i < planeCount; i++) {
      setTimeout(() => {
        const container = document.createElement('div');
        container.classList.add('plane-flying-container', flyPaths[i]);
        
        // Spawn relative to current viewport scroll inside card
        const startTop = (0.1 + (i * 0.15) + Math.random() * 0.1) * window.innerHeight;
        container.style.top = `${startTop}px`;
        
        const duration = 6 + Math.random() * 1.5;
        container.style.setProperty('--duration', `${duration}s`);
        
        container.innerHTML = `
          <svg viewBox="0 0 100 60" class="plane-svg-flying" xmlns="http://www.w3.org/2000/svg">
            <path d="M 15 28 C 15 28, 30 20, 50 20 C 70 20, 85 28, 88 32 C 85 36, 70 42, 50 42 C 30 42, 15 36, 15 28 Z" fill="#ffffff" stroke="#ff4d79" stroke-width="1.2"/>
            <path d="M 88 32 C 86 30, 82 29, 80 32 C 82 35, 86 34, 88 32 Z" fill="#ff4d79"/>
            <path d="M 48 31 L 28 8 C 26 5, 30 5, 34 8 L 54 31 Z" fill="#ffb3c6" stroke="#ff4d79" stroke-width="1"/>
            <path d="M 18 29 L 8 15 C 6 12, 10 12, 12 15 L 22 29 Z" fill="#ff8fab" stroke="#ff4d79" stroke-width="0.8"/>
            <circle cx="55" cy="30" r="2" fill="#ff4d79" opacity="0.6"/>
            <circle cx="63" cy="31" r="2" fill="#ff4d79" opacity="0.6"/>
            <circle cx="71" cy="32" r="2" fill="#ff4d79" opacity="0.6"/>
          </svg>
        `;
        
        document.body.appendChild(container);
        
        const dropInterval = setInterval(() => {
          const rect = container.getBoundingClientRect();
          if (rect.left > -100 && rect.left < window.innerWidth + 100) {
            createFallingParachuteGift(rect.left + rect.width / 2, rect.top + rect.height / 2);
          }
        }, 250);
        
        setTimeout(() => {
          clearInterval(dropInterval);
          container.remove();
        }, duration * 1000 + 500);
        
      }, i * 1500);
    }
  }

  function burstGiftEffects(gift) {
    const senderInput = document.getElementById('giftSenderName');
    const senderName = senderInput ? senderInput.value.trim() : '';
    const cleanSender = senderName || 'Ẩn danh';

    // 1. Show TikTok style slide-in Banner
    showTikTokBanner(cleanSender, gift);

    // 2. Identify the gift type and trigger effects
    const isSwan = gift.icon.includes('🦢');
    const isDove = gift.icon.includes('🕊️');
    const isPlane = gift.icon.includes('✈️');
    const isRing = gift.icon.includes('💍');
    const isCar = gift.icon.includes('🚗');
    const isCherry = gift.icon.includes('🌸');
    const isCastle = gift.icon.includes('🏰');
    const isBalloon = gift.icon.includes('🎈');

    if (isSwan) {
      triggerSwanSquadron();
    } else if (isDove) {
      triggerDovesEffect(cleanSender, gift.name);
    } else if (isPlane) {
      triggerPlaneSquadron();
    } else if (isRing) {
      triggerVipRingsEffect(cleanSender, gift.name);
    } else if (isCar) {
      triggerVipCarEffect(cleanSender, gift.name);
    } else if (isCherry) {
      triggerVipCherryBlossomEffect(cleanSender, gift.name);
    } else if (isCastle) {
      triggerVipCastleEffect(cleanSender, gift.name);
    } else if (isBalloon) {
      triggerVipBalloonEffect(cleanSender, gift.name);
    } else {
      triggerNormalCenterEffect(cleanSender, gift);
    }
  }
})();

// =============================================
// 4. CLICK / TOUCH HEART TRAIL (RESTORED)
// =============================================
(function initClickHearts() {
  function spawnAt(x, y) {
    const h = document.createElement('div');
    const size = Math.random() * 16 + 10;
    h.innerHTML = `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="#ff6b9d"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`;
    h.style.cssText = `position:fixed;left:${x - size/2}px;top:${y - size/2}px;z-index:9997;pointer-events:none;opacity:0;animation:floatHeart 1.2s ease-out forwards;--drift:${(Math.random()-0.5)*80}px;`;
    document.body.appendChild(h);
    setTimeout(() => h.remove(), 1400);
  }

  const card = document.getElementById('card');
  if (card) {
    card.addEventListener('click', e => {
      if (e.target.closest('#weddingGiftBtn') || e.target.closest('#weddingGiftPanel') || e.target.closest('#weddingMusicBtn') || e.target.closest('button') || e.target.closest('input') || e.target.closest('select')) {
        return;
      }
      spawnAt(e.clientX, e.clientY);
    });
    card.addEventListener('touchstart', e => {
      if (e.target.closest('#weddingGiftBtn') || e.target.closest('#weddingGiftPanel') || e.target.closest('#weddingMusicBtn') || e.target.closest('button') || e.target.closest('input') || e.target.closest('select')) {
        return;
      }
      Array.from(e.touches).forEach(t => spawnAt(t.clientX, t.clientY));
    }, { passive: true });
  }
})();

// =============================================
// 5. BACKGROUND MUSIC PLAYER
// =============================================
(function initWeddingMusic() {
  const musicUrl = 'https://assets.mixkit.co/music/preview/mixkit-beautiful-dream-493.mp3';
  
  // Create Audio
  const audio = document.createElement('audio');
  audio.id = 'weddingAudio';
  audio.src = musicUrl;
  audio.loop = true;
  document.body.appendChild(audio);

  // Create Music Button (Vinyl record design in HTML)
  const btn = document.createElement('button');
  btn.id = 'weddingMusicBtn';
  btn.title = 'Bật/Tắt nhạc nền';
  
  // Custom play/pause SVG icons
  const playIcon = `<svg viewBox="0 0 24 24" id="musicPlayIcon"><path d="M8 5v14l11-7z"/></svg>`;
  const pauseIcon = `<svg viewBox="0 0 24 24" id="musicPauseIcon" style="display:none;"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>`;
  
  btn.innerHTML = playIcon + pauseIcon;
  document.body.appendChild(btn);

  let isPlaying = false;
  let noteInterval = null;

  function playMusic() {
    audio.play().then(() => {
      isPlaying = true;
      btn.classList.add('playing');
      document.getElementById('musicPlayIcon').style.display = 'none';
      document.getElementById('musicPauseIcon').style.display = 'block';
      startNotes();
    }).catch(err => {
      console.log("Autoplay blocked by browser policy, waiting for user interaction.");
    });
  }

  function pauseMusic() {
    audio.pause();
    isPlaying = false;
    btn.classList.remove('playing');
    document.getElementById('musicPlayIcon').style.display = 'block';
    document.getElementById('musicPauseIcon').style.display = 'none';
    stopNotes();
  }

  function toggleMusic() {
    if (isPlaying) {
      pauseMusic();
    } else {
      playMusic();
    }
  }

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMusic();
  });

  // Autoplay handler on first click/touch
  function handleAutoplay() {
    if (!isPlaying) {
      playMusic();
    }
    document.removeEventListener('click', handleAutoplay);
    document.removeEventListener('touchstart', handleAutoplay);
  }

  // Register load listener and body interactions
  window.addEventListener('load', () => {
    setTimeout(() => {
      playMusic();
      if (!isPlaying) {
        document.addEventListener('click', handleAutoplay);
        document.addEventListener('touchstart', handleAutoplay);
      }
    }, 800);
  });

  // Spawn note particles
  function spawnNote() {
    const card = document.getElementById('card');
    if (!card) return;
    const cardRect = card.getBoundingClientRect();

    const notes = ['🎵', '🎶', '♩', '☊', '💖'];
    const note = document.createElement('div');
    note.className = 'music-note';
    note.textContent = notes[Math.floor(Math.random() * notes.length)];
    
    // Set position starting near the music button (bottom left) dynamically relative to #card
    const musicBtn = document.getElementById('weddingMusicBtn');
    if (musicBtn) {
      const rect = musicBtn.getBoundingClientRect();
      const relativeX = rect.left + rect.width / 2 - cardRect.left;
      const relativeY = rect.top + rect.height / 2 - cardRect.top;
      note.style.left = `${relativeX}px`;
      note.style.top = `${relativeY}px`;
    } else {
      note.style.left = '48px';
      note.style.top = `${(window.innerHeight - 80) - cardRect.top}px`;
    }
    
    // Random drift and rotation properties (drift inwards/upwards relative to the card)
    const driftX = -10 + Math.random() * 60;
    const driftY = -120 - Math.random() * 80;
    const spin = (Math.random() - 0.5) * 180;
    const duration = 2 + Math.random() * 1.5;
    
    note.style.setProperty('--drift-x', `${driftX}px`);
    note.style.setProperty('--drift-y', `${driftY}px`);
    note.style.setProperty('--spin', `${spin}deg`);
    note.style.setProperty('--duration', `${duration}s`);
    
    card.appendChild(note);
    setTimeout(() => note.remove(), duration * 1000 + 200);
  }

  function startNotes() {
    if (noteInterval) clearInterval(noteInterval);
    noteInterval = setInterval(spawnNote, 800);
    spawnNote();
  }

  function stopNotes() {
    if (noteInterval) {
      clearInterval(noteInterval);
      noteInterval = null;
    }
  }
})();
