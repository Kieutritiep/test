// =============================================
// WEDDING EFFECTS - Thiệp Cưới Đoàn Quang & Như Quỳnh
// =============================================

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
        <!-- Left Swan -->
        <ellipse cx="58" cy="95" rx="38" ry="22" fill="#fff" stroke="#ffb3c6" stroke-width="1.5"/>
        <path d="M58 95 Q40 60 55 30 Q60 20 68 28 Q62 50 70 75" fill="#fff" stroke="#ffb3c6" stroke-width="1.5"/>
        <ellipse cx="67" cy="28" rx="6" ry="5" fill="#ff8fab"/>
        <path d="M73 28 Q80 26 78 30 Q74 31 73 28Z" fill="#ff4d79"/>
        <!-- Right Swan (mirrored) -->
        <ellipse cx="122" cy="95" rx="38" ry="22" fill="#fff" stroke="#ffb3c6" stroke-width="1.5"/>
        <path d="M122 95 Q140 60 125 30 Q120 20 112 28 Q118 50 110 75" fill="#fff" stroke="#ffb3c6" stroke-width="1.5"/>
        <ellipse cx="113" cy="28" rx="6" ry="5" fill="#ff8fab"/>
        <path d="M107 28 Q100 26 102 30 Q106 31 107 28Z" fill="#ff4d79"/>
        <!-- Heart between necks -->
        <path d="M90 45 C90 45 82 37 82 31 C82 26 90 24 90 31 C90 24 98 26 98 31 C98 37 90 45 90 45Z" fill="#ff4d79"/>
        <!-- Water ripple -->
        <ellipse cx="90" cy="118" rx="70" ry="10" fill="#ffb3c633"/>
        <ellipse cx="90" cy="122" rx="50" ry="7" fill="#ffb3c622"/>
        <!-- Sparkles -->
        <circle cx="30" cy="50" r="3" fill="#ff8fab" opacity="0.7"/>
        <circle cx="150" cy="50" r="3" fill="#ff8fab" opacity="0.7"/>
        <circle cx="90" cy="10" r="4" fill="#ffb3c6" opacity="0.8"/>
        <circle cx="20" cy="90" r="2" fill="#ff4d79" opacity="0.6"/>
        <circle cx="160" cy="90" r="2" fill="#ff4d79" opacity="0.6"/>
      </svg>
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
    { icon: '🎁', name: 'Hộp quà kỳ lân', price: 1000000 },
    { icon: '💍', name: 'Cặp nhẫn đính hôn', price: 1200000 },
    { icon: '🪄', name: 'Gậy phép hạnh phúc', price: 1500000 },
    { icon: '🦢', name: 'Đôi thiên nga tình yêu', price: 1800000 },
    { icon: '🎈', name: 'Khinh khí cầu uyên ương', price: 2000000 },
    { icon: '✈️', name: 'Vé bay tuần trăng mật', price: 3000000 },
    { icon: '🎡', name: 'Vòng quay hạnh phúc', price: 5000000 },
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
    item.innerHTML = `
      <div class="gift-icon">${g.icon}</div>
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
    const card = document.getElementById('card');
    if (!card) return;
    const cardRect = card.getBoundingClientRect();
    const relativeX = x - cardRect.left;
    const relativeY = y - cardRect.top + (window.pageYOffset || document.documentElement.scrollTop);

    const sp = document.createElement('div');
    sp.textContent = ['✨', '💖', '🌸', '⭐'][Math.floor(Math.random() * 4)];
    sp.style.cssText = `
      position: absolute;
      left: ${relativeX}px;
      top: ${relativeY}px;
      z-index: 9998;
      pointer-events: none;
      font-size: ${14 + Math.random() * 12}px;
      opacity: 1;
      transform: translate(-50%, -50%) scale(0.5);
      transition: transform 0.8s cubic-bezier(0.1, 0.8, 0.3, 1), opacity 0.8s ease-out;
    `;
    card.appendChild(sp);
    
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
    
    banner.innerHTML = `
      <div class="tiktok-avatar">💝</div>
      <div class="tiktok-info">
        <span class="sender-name">${senderName}</span>
        <span class="gift-text">đã tặng ${gift.name}</span>
      </div>
      <div class="tiktok-gift-icon-container">${gift.icon}</div>
      <div class="tiktok-combo">x1</div>
    `;
    
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
        <h2 class="vip-sender-title">${senderName}</h2>
        <p class="vip-gift-title">${giftName}</p>
      </div>
    `;
    
    const card = document.getElementById('card');
    if (card) {
      card.appendChild(overlay);
    } else {
      document.body.appendChild(overlay);
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
    const card = document.getElementById('card');
    if (!card) return;
    const carContainer = document.createElement('div');
    carContainer.className = 'vip-car-wrap';
    
    // Spawn car near the bottom of current scroll viewport
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const startTop = scrollTop + window.innerHeight - 150;
    carContainer.style.top = `${startTop}px`;

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
        <svg viewBox="0 0 180 90" width="100%" height="100%">
          <defs>
            <!-- Circle masks for faces -->
            <clipPath id="bride-face-clip">
              <circle cx="70" cy="35" r="7"/>
            </clipPath>
            <clipPath id="groom-face-clip">
              <circle cx="86" cy="34" r="7.5"/>
            </clipPath>
          </defs>

          <!-- Ribbon tails trailing from the back -->
          <path d="M 12 58 Q -2 62, -15 58 M 12 62 Q 0 68, -12 70" stroke="#ff4d79" stroke-width="1.5" fill="none" opacity="0.8"/>
          
          <!-- Bride sitting on the passenger side (left) -->
          <g class="bride-passenger">
            <!-- Veil -->
            <path d="M 64 34 Q 52 40, 55 58 Q 72 58, 68 40 Z" fill="#ffffff" opacity="0.75" stroke="#fff" stroke-width="0.5"/>
            <!-- Dress -->
            <path d="M 64 58 L 76 58 L 74 46 C 74 42, 65 42, 65 46 Z" fill="#ffffff" stroke="#ffb3c6" stroke-width="0.5"/>
            
            <!-- Real Bride Face masked in circle -->
            <image href="${brideFace.img}" x="${70 + brideFace.x}" y="${35 + brideFace.y}" width="${brideFace.w}" height="${brideFace.h}" clip-path="url(#bride-face-clip)"/>
            <!-- Fallback circle stroke -->
            <circle cx="70" cy="35" r="7" fill="none" stroke="#fff" stroke-width="1"/>

            <!-- Hair (low opacity so face is visible) -->
            <path d="M 63 35 C 63 29, 77 29, 77 35 C 77 32, 73 31, 70 31 C 67 31, 63 32, 63 35 Z" fill="#5c4033" opacity="0.25"/>
            <!-- Flower Tiara -->
            <circle cx="67" cy="28" r="2.2" fill="#fff"/>
            <circle cx="70" cy="27" r="2.2" fill="#ffb3c6"/>
            <circle cx="73" cy="28" r="2.2" fill="#fff"/>
            <!-- Flower Bouquet -->
            <path d="M 72 48 Q 77 46, 81 49" stroke="#ffe0bd" stroke-width="2.5" fill="none" stroke-linecap="round"/>
            <g class="bouquet">
              <circle cx="83" cy="49" r="4.5" fill="#ff4d79"/>
              <circle cx="87" cy="47" r="4" fill="#ffd700"/>
              <circle cx="80" cy="45" r="3.5" fill="#ff8fab"/>
              <path d="M 83 51 L 85 56 M 82 51 L 81 56" stroke="#4caf50" stroke-width="1.2"/>
            </g>
          </g>

          <!-- Groom sitting on the driver's side (right) -->
          <g class="groom-driver">
            <!-- Tuxedo -->
            <path d="M 78 58 L 94 58 L 91 44 C 91 40, 81 40, 81 44 Z" fill="#333"/>
            <path d="M 84 44 L 88 44 L 86 48 Z" fill="#fff"/>
            <polygon points="84,45 88,45 86,48" fill="#ff4d79"/>
            
            <!-- Real Groom Face masked in circle -->
            <image href="${groomFace.img}" x="${86 + groomFace.x}" y="${34 + groomFace.y}" width="${groomFace.w}" height="${groomFace.h}" clip-path="url(#groom-face-clip)"/>
            <!-- Fallback circle stroke -->
            <circle cx="86" cy="34" r="7.5" fill="none" stroke="#fff" stroke-width="1"/>

            <!-- Hair (low opacity so face is visible) -->
            <path d="M 79 34 C 79 28, 93 28, 93 34 C 93 31, 89 30, 86 30 C 83 30, 79 31, 79 34 Z" fill="#2b1d0c" opacity="0.25"/>
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
    card.appendChild(carContainer);
    
    // Trail particles
    let trackTime = 0;
    const trackInterval = setInterval(() => {
      const carEl = carContainer.querySelector('.vip-car-el');
      if (carEl) {
        const rect = carEl.getBoundingClientRect();
        if (rect.left > 0 && rect.left < window.innerWidth) {
          createCarTrailHeart(rect.left + 15, rect.top + rect.height / 2 + 10);
        }
      }
      trackTime += 100;
      if (trackTime >= 5500) clearInterval(trackInterval);
    }, 100);
    
    setTimeout(() => {
      carContainer.remove();
    }, 6000);
  }

  function createCarTrailHeart(x, y) {
    const card = document.getElementById('card');
    if (!card) return;
    const cardRect = card.getBoundingClientRect();
    const relativeX = x - cardRect.left;
    const relativeY = y - cardRect.top + (window.pageYOffset || document.documentElement.scrollTop);

    const h = document.createElement('div');
    h.textContent = ['💖', '🎁', '💝', '🎁', '❤️', '🎁', '💕', '🎁', '✨', '🎁'][Math.floor(Math.random() * 10)];
    h.style.cssText = `
      position: absolute;
      left: ${relativeX}px;
      top: ${relativeY}px;
      z-index: 9994;
      pointer-events: none;
      font-size: ${16 + Math.random() * 14}px;
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
      transition: transform 1.2s ease-out, opacity 1.2s ease-out;
    `;
    card.appendChild(h);
    
    requestAnimationFrame(() => {
      h.style.transform = `translate(${-40 - Math.random() * 60}px, ${-15 - Math.random() * 25}px) scale(0.4) rotate(${(Math.random() - 0.5) * 120}deg)`;
      h.style.opacity = '0';
    });
    setTimeout(() => h.remove(), 1300);
  }

  function triggerVipFerrisWheelEffect(senderName, giftName) {
    const wheelHTML = `
      <div class="vip-wheel-wrap">
        <svg class="vip-wheel-svg" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
          <circle cx="60" cy="60" r="45" fill="none" stroke="#ff4d79" stroke-width="2.5" stroke-dasharray="4, 4"/>
          <circle cx="60" cy="60" r="40" fill="none" stroke="#ff8fab" stroke-width="1.5"/>
          <line x1="60" y1="60" x2="60" y2="15" stroke="#ffb3c6" stroke-width="1"/>
          <line x1="60" y1="60" x2="60" y2="105" stroke="#ffb3c6" stroke-width="1"/>
          <line x1="60" y1="60" x2="15" y2="60" stroke="#ffb3c6" stroke-width="1"/>
          <line x1="60" y1="60" x2="105" y2="60" stroke="#ffb3c6" stroke-width="1"/>
          <line x1="60" y1="60" x2="28" y2="28" stroke="#ffb3c6" stroke-width="1"/>
          <line x1="60" y1="60" x2="92" y2="92" stroke="#ffb3c6" stroke-width="1"/>
          <line x1="60" y1="60" x2="28" y2="92" stroke="#ffb3c6" stroke-width="1"/>
          <line x1="60" y1="60" x2="92" y2="28" stroke="#ffb3c6" stroke-width="1"/>
          <circle cx="60" cy="60" r="8" fill="#ff4d79" stroke="#fff" stroke-width="1.5"/>
          <circle cx="60" cy="15" r="4" fill="#ffd700"/>
          <circle cx="60" cy="105" r="4" fill="#ffd700"/>
          <circle cx="15" cy="60" r="4" fill="#ffd700"/>
          <circle cx="105" cy="60" r="4" fill="#ffd700"/>
          <circle cx="28" cy="28" r="4" fill="#ffd700"/>
          <circle cx="92" cy="92" r="4" fill="#ffd700"/>
          <circle cx="28" cy="92" r="4" fill="#ffd700"/>
          <circle cx="92" cy="28" r="4" fill="#ffd700"/>
          <path d="M 60 60 L 40 110 M 60 60 L 80 110" stroke="#ff4d79" stroke-width="2"/>
        </svg>
      </div>
    `;
    triggerVipEffect(senderName, giftName, wheelHTML, 5000);
    
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
    const card = document.getElementById('card');
    if (!card) return;
    const cardRect = card.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const viewportHeight = window.innerHeight;
    const centerX = cardRect.width / 2;
    const centerY = scrollTop + viewportHeight / 2;
    
    const swanCount = 20; // Increased to 20 for a denser, fuller heart shape
    
    // Create names element to fade in at the center of the heart
    const namesEl = document.createElement('div');
    namesEl.className = 'swan-heart-names';
    namesEl.innerHTML = `
      <div style="font-family: 'Great Vibes', cursive; font-size: 24px; font-weight: 700; color: #ff4d79;">Đoàn Quang</div>
      <div style="font-size: 16px; color: #ff1a5e; margin: 2px 0; transform: scale(1.2);">❤️</div>
      <div style="font-family: 'Great Vibes', cursive; font-size: 24px; font-weight: 700; color: #ff4d79;">Như Quỳnh</div>
    `;
    namesEl.style.cssText = `
      position: absolute;
      left: ${centerX}px;
      top: ${centerY}px;
      transform: translate(-50%, -50%) scale(0.6);
      z-index: 10000;
      opacity: 0;
      text-align: center;
      transition: opacity 1.2s cubic-bezier(0.25, 0.8, 0.25, 1), transform 1.2s cubic-bezier(0.25, 0.8, 0.25, 1);
      text-shadow: 0 2px 8px rgba(255, 77, 121, 0.3);
      pointer-events: none;
      white-space: nowrap;
    `;
    card.appendChild(namesEl);
    
    // Fade in names as the heart starts to form completely (at 2200ms)
    setTimeout(() => {
      namesEl.style.opacity = '1';
      namesEl.style.transform = 'translate(-50%, -50%) scale(1)';
    }, 2200);

    for (let i = 0; i < swanCount; i++) {
      setTimeout(() => {
        // Calculate points on the heart curve
        // t goes from -PI to PI
        const t = (Math.PI * 2 * i) / swanCount - Math.PI;
        const xVal = 16 * Math.pow(Math.sin(t), 3);
        const yVal = 13 * Math.cos(t) - 5 * Math.cos(2*t) - 2 * Math.cos(3*t) - Math.cos(4*t);
        
        // Scale values to fit card dimensions (heart width ~260px, height ~220px)
        const xScaled = xVal * 8.5;
        const yScaled = -yVal * 8.5; // Negative because Y points down in screen coords
        
        // Calculate orientation to face the center (0, 0)
        let rotation = 0;
        let scaleX = 0.45; // Reduced scale from 0.55 to 0.45 so 20 swans fit beautifully
        let scaleY = 0.45;
        
        if (xScaled > 0) {
          // Right side of heart: flip horizontally so it faces left towards the center
          scaleX = -0.45;
          const angle = Math.atan2(-yScaled, -xScaled);
          rotation = (angle - Math.PI) * 180 / Math.PI;
        } else {
          // Left side of heart: face right towards the center
          scaleX = 0.45;
          const angle = Math.atan2(-yScaled, -xScaled);
          rotation = angle * 180 / Math.PI;
        }

        const container = document.createElement('div');
        container.className = 'swan-flying-container';
        
        // Initial spawn position: bottom of current visible viewport, spread horizontally
        const spawnX = centerX + (Math.random() - 0.5) * cardRect.width * 0.8;
        const spawnY = scrollTop + viewportHeight + 100;
        
        container.style.position = 'absolute';
        container.style.left = `${spawnX}px`;
        container.style.top = `${spawnY}px`;
        container.style.opacity = '0';
        container.style.transform = `translate(-50%, -50%) scale(0.1)`;
        // Slow flight up to their respective position
        container.style.transition = 'left 2.0s cubic-bezier(0.25, 0.8, 0.25, 1), top 2.0s cubic-bezier(0.25, 0.8, 0.25, 1), transform 2.0s ease, opacity 2.0s ease';
        
        container.innerHTML = `
          <svg viewBox="0 0 100 80" class="swan-svg-flying" xmlns="http://www.w3.org/2000/svg">
            <g>
              <path class="swan-wing far-wing" d="M 45 45 C 30 10, 60 5, 65 30 C 65 30, 52 35, 45 45 Z" fill="#fff0f4" stroke="#ffb3c6" stroke-width="0.8"/>
              <path class="swan-body" d="M 22 52 C 32 52, 45 57, 54 47 C 62 38, 60 22, 66 20 C 70 19, 73 24, 69 32 C 62 46, 54 53, 44 56 C 30 57, 22 53, 22 52 Z" fill="#ffffff" stroke="#ff8fab" stroke-width="1"/>
              <path d="M 68 20 L 73 22 L 70 25 Z" fill="#ff4d79"/>
              <circle cx="65" cy="23" r="1" fill="#222"/>
              <path class="swan-wing near-wing" d="M 40 48 C 20 15, 50 10, 55 35 C 55 35, 46 40, 40 48 Z" fill="#ffffff" stroke="#ff4d79" stroke-width="0.8"/>
            </g>
          </svg>
        `;
        
        card.appendChild(container);
        
        // Trigger flight to target heart position
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            container.style.left = `${centerX + xScaled}px`;
            container.style.top = `${centerY + yScaled}px`;
            container.style.opacity = '1';
            container.style.transform = `translate(-50%, -50%) scaleX(${scaleX}) scaleY(${scaleY}) rotate(${rotation}deg)`;
          });
        });
        
        // Sparkle trail interval while they are moving and holding
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
          
          // Fly up rapidly out of viewport
          container.style.transition = 'left 1.5s ease-in, top 1.5s cubic-bezier(0.55, 0.085, 0.68, 0.53), transform 1.5s ease-in, opacity 1.2s ease-in';
          container.style.top = `${scrollTop - 150}px`;
          container.style.opacity = '0';
          container.style.transform = `translate(-50%, -50%) scaleX(${scaleX * 0.4}) scaleY(${scaleY * 0.4}) rotate(${rotation + (Math.random() - 0.5) * 45}deg)`;
          
          setTimeout(() => container.remove(), 1600);
        }, 5500 + i * 50); // Increased hold time to 5.5 seconds, staggered at 50ms intervals
        
      }, i * 70); // Spread spawning stagger at 70ms intervals
    }
    
    // Fade out names when the fly-away starts
    setTimeout(() => {
      namesEl.style.opacity = '0';
      namesEl.style.transform = 'translate(-50%, -50%) scale(0.8)';
      setTimeout(() => namesEl.remove(), 1200);
    }, 5500);
  }

  function triggerPlaneSquadron() {
    const card = document.getElementById('card');
    if (!card) return;
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
      
      const cardRect = card.getBoundingClientRect();
      const relativeX = x - cardRect.left;
      const relativeY = y - cardRect.top + (window.pageYOffset || document.documentElement.scrollTop);
      
      giftEl.style.left = `${relativeX}px`;
      giftEl.style.top = `${relativeY}px`;
      
      const driftX = (Math.random() - 0.5) * 100;
      const spin = (Math.random() - 0.5) * 180;
      const fallDuration = 3.5 + Math.random() * 1.5;
      
      giftEl.style.setProperty('--drift-x', `${driftX}px`);
      giftEl.style.setProperty('--spin', `${spin}deg`);
      giftEl.style.setProperty('--duration', `${fallDuration}s`);
      
      card.appendChild(giftEl);
      
      setTimeout(() => {
        giftEl.remove();
      }, fallDuration * 1000 + 200);
    }

    for (let i = 0; i < planeCount; i++) {
      setTimeout(() => {
        const container = document.createElement('div');
        container.classList.add('plane-flying-container', flyPaths[i]);
        
        // Spawn relative to current viewport scroll inside card
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const startTop = scrollTop + (0.1 + (i * 0.15) + Math.random() * 0.1) * window.innerHeight;
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
        
        card.appendChild(container);
        
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
    const isPlane = gift.icon.includes('✈️');
    const isRing = gift.icon.includes('💍');
    const isCar = gift.icon.includes('🚗');
    const isWheel = gift.icon.includes('🎡');
    const isCastle = gift.icon.includes('🏰');

    if (isSwan) {
      triggerSwanSquadron();
    } else if (isPlane) {
      triggerPlaneSquadron();
    } else if (isRing) {
      triggerVipRingsEffect(cleanSender, gift.name);
    } else if (isCar) {
      triggerVipCarEffect(cleanSender, gift.name);
    } else if (isWheel) {
      triggerVipFerrisWheelEffect(cleanSender, gift.name);
    } else if (isCastle) {
      triggerVipCastleEffect(cleanSender, gift.name);
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
      const relativeY = rect.top + rect.height / 2 - cardRect.top + (window.pageYOffset || document.documentElement.scrollTop);
      note.style.left = `${relativeX}px`;
      note.style.top = `${relativeY}px`;
    } else {
      note.style.left = '48px';
      note.style.top = `${(window.pageYOffset || document.documentElement.scrollTop) + window.innerHeight - 80}px`;
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
