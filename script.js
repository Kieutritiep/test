// ===================== KHỞI ĐỘNG KHI TRANG LOAD =====================
window.addEventListener('DOMContentLoaded', () => {
  const hero = document.querySelector('.hero-text');
  if (hero) hero.classList.add('show');

  renderCalendarVN({ days: [15, 16], month: 3, year: 2026 });

  const henImg = document.getElementById('henImg');
  if (henImg) setTimeout(() => henImg.classList.add('show'), 500);

  // startHearts(); // Disabled to use premium SVG hearts from wedding-effects.js instead
  initScrollReveal();

  // Tên khách từ URL
  const params = new URLSearchParams(window.location.search);
  const name = params.get("name");
  if (name) {
    document.getElementById("guestName").innerText = name;
    const envGuest = document.getElementById("envelopeGuestName");
    if (envGuest) envGuest.innerText = name;
  }

  // Khởi tạo hạt vàng bay lơ lửng trên màn cổng
  initAmbientSparkles();

  // Xử lý mở thiệp thư cưới
  const envelope = document.getElementById('wedding-envelope-wrapper');
  if (envelope) {
    envelope.addEventListener('click', () => {
      if (envelope.classList.contains('opening')) return;
      envelope.classList.add('opening');
      
      // Tạo vụ nổ hạt lấp lánh màu vàng kim ở giữa màn hình (nơi dấu sáp vỡ ra)
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      for (let i = 0; i < 30; i++) {
        const sparkle = document.createElement('div');
        sparkle.innerText = Math.random() > 0.5 ? '✨' : '✦';
        sparkle.style.cssText = `
          position: fixed;
          left: ${centerX}px;
          top: ${centerY}px;
          z-index: 999999;
          font-size: ${12 + Math.random() * 14}px;
          color: #ffd700;
          text-shadow: 0 0 8px #ffb300;
          pointer-events: none;
          transform: translate(-50%, -50%);
          transition: transform 1.2s cubic-bezier(0.1, 0.8, 0.3, 1), opacity 1.2s ease-out;
        `;
        document.body.appendChild(sparkle);
        
        const angle = Math.random() * Math.PI * 2;
        const dist = 60 + Math.random() * 140;
        const tx = Math.cos(angle) * dist;
        const ty = Math.sin(angle) * dist;
        
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            sparkle.style.transform = `translate(calc(-50% + ${tx}px), calc(-50% + ${ty}px)) scale(1.5) rotate(${Math.random() * 360}deg)`;
            sparkle.style.opacity = '0';
          });
        });
        
        setTimeout(() => sparkle.remove(), 1300);
      }
      
      // Tự động phát nhạc nếu có nút nhạc nền hoạt động
      const musicBtn = document.getElementById('weddingMusicBtn');
      if (musicBtn && !musicBtn.classList.contains('playing')) {
        musicBtn.click();
      }
      
      setTimeout(() => {
        envelope.classList.add('opened');
        document.body.classList.add('card-opened');
        
        // Buộc trình duyệt tính toán lại hiệu ứng cuộn reveal
        window.dispatchEvent(new Event('scroll'));
        
        setTimeout(() => {
          envelope.remove();
        }, 1200);
      }, 1300);
    });
  }
});

// ===================== SCROLL REVEAL =====================
function initScrollReveal() {
  const revealTop    = document.querySelectorAll('.reveal-top');
  const revealBottom = document.querySelectorAll('.reveal-bottom');
  const revealLeft   = document.querySelectorAll('.reveal-left');
  const revealRight  = document.querySelectorAll('.reveal-right');
  const revealNormal = document.querySelectorAll('.reveal, .cd-left, .cd-right, .cd-top, .cd-bottom');

  const createObserver = (elements) => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.3,
      rootMargin: "0px 0px -80px 0px"
    });
    elements.forEach(el => observer.observe(el));
  };

  createObserver(revealTop);
  createObserver(revealBottom);
  createObserver(revealLeft);
  createObserver(revealRight);
  createObserver(revealNormal);
}

// ===================== TIM BAY (DISABLED) =====================
/*
function startHearts() {
  setInterval(() => {
    const heart = document.createElement('div');
    heart.classList.add('falling-heart');
    heart.style.left = Math.random() * 90 + 'vw';
    heart.style.fontSize = (20 + Math.random() * 20) + 'px';
    heart.style.animationDuration = (6 + Math.random() * 4) + 's';
    heart.textContent = '❤️';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 10000);
  }, 1200);
}
*/

// ===================== CANVAS TIM =====================
const canvas = document.getElementById("heartCanvas");
const ctx = canvas.getContext("2d");
canvas.width = 100;
canvas.height = 100;

let particles = [];

function heartFunction(t) {
  let x = 16 * Math.pow(Math.sin(t), 3);
  let y = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);
  return { x, y: -y };
}

for (let i = 0; i < 500; i++) {
  let t = Math.random() * Math.PI * 2;
  let pos = heartFunction(t);
  particles.push({
    baseX: canvas.width / 2 + pos.x * 2.5,
    baseY: canvas.height / 2 + pos.y * 2.5,
    x: 0, y: 0,
    size: Math.random() * 2 + 0.5,
    alpha: Math.random(),
    offset: Math.random() * 100
  });
}

let time = 0;
function drawHeart() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    let pulse = Math.sin(time + p.offset) * 1.5;
    p.x = p.baseX + pulse;
    p.y = p.baseY + pulse;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255,80,80,${p.alpha})`;
    ctx.fill();
  });
  time += 0.05;
  requestAnimationFrame(drawHeart);
}
drawHeart();

// ===================== CALENDAR =====================
function renderCalendarVN({ days, month, year }) {
  const container = document.getElementById("calendar-days");
  const monthEl   = document.getElementById("calendar-month");
  const yearEl    = document.getElementById("calendar-year");

  container.innerHTML = "";
  let firstDay = new Date(year, month, 1).getDay();
  firstDay = (firstDay + 6) % 7;
  const totalDays = new Date(year, month + 1, 0).getDate();
  const months = ["Tháng 1","Tháng 2","Tháng 3","Tháng 4","Tháng 5","Tháng 6",
                  "Tháng 7","Tháng 8","Tháng 9","Tháng 10","Tháng 11","Tháng 12"];
  monthEl.innerText = months[month];
  yearEl.innerText = `Năm ${year}`;

  for (let i = 0; i < firstDay; i++) {
    container.appendChild(document.createElement("div"));
  }

  for (let d = 1; d <= totalDays; d++) {
    const div = document.createElement("div");
    div.className = `day reveal relative flex items-center justify-center h-12 rounded-xl cursor-pointer bg-white border text-sm font-semibold hover:scale-105 transition duration-700`;
    div.innerText = d;

    if (days.includes(d)) {
      div.classList.add("bg-pink-200", "border-pink-400");
      div.innerHTML = `${d}<span class="absolute top-1 right-1 text-red-500 text-xs">❤️</span>`;
    }

    div.style.setProperty('--delay', `${d * 0.05}s`);
    container.appendChild(div);
  }

  const dayEls = container.querySelectorAll('.day');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        el.classList.add('show');
        if (el.querySelector('span')) {
          const heart = document.createElement('span');
          heart.classList.add('day-heart');
          heart.textContent = '❤️';
          el.appendChild(heart);
          setTimeout(() => heart.remove(), 1000);
        }
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.3, rootMargin: "0px 0px -40px 0px" });

  dayEls.forEach(el => observer.observe(el));
}

// ===================== COUNTDOWN =====================
const wedding = new Date("2026-06-15T10:30:00").getTime();

function runCountdown() {
  const now  = new Date().getTime();
  const diff = wedding - now;
  if (diff < 0) return;

  document.getElementById("d").innerText = Math.floor(diff / (1000 * 60 * 60 * 24));
  document.getElementById("h").innerText = Math.floor((diff / (1000 * 60 * 60)) % 24);
  document.getElementById("m").innerText = Math.floor((diff / (1000 * 60)) % 60);
  document.getElementById("s").innerText = Math.floor((diff / 1000) % 60);
}

setInterval(runCountdown, 1000);
runCountdown();

// ===================== SLIDESHOW =====================
const slides = document.getElementById("slides");
const thumbs = document.querySelectorAll("#thumbs img");
let index = 0;
const total = thumbs.length;

function updateSlide() {
  slides.style.transform = `translateX(-${index * 100}%)`;
  thumbs.forEach(t => t.classList.remove("active"));
  thumbs[index].classList.add("active");
}

thumbs.forEach((thumb, i) => {
  thumb.addEventListener("click", () => { index = i; updateSlide(); });
});

document.querySelector(".next").onclick = () => { index = (index + 1) % total; updateSlide(); };
document.querySelector(".prev").onclick = () => { index = (index - 1 + total) % total; updateSlide(); };

setInterval(() => { index = (index + 1) % total; updateSlide(); }, 4000);

/* =============================================
   Ambient Sparkles – Golden stars drifting up
   before the gates open
   ============================================= */
function initAmbientSparkles() {
  const wrapper = document.getElementById('wedding-envelope-wrapper');
  if (!wrapper) return;

  const CHARS = ['✦', '✧', '✨', '⋆', '✫', '✬'];
  const SPARKLE_COUNT = 14;

  for (let i = 0; i < SPARKLE_COUNT; i++) {
    const el = document.createElement('span');
    el.className = 'ambient-sparkle';
    el.innerText = CHARS[Math.floor(Math.random() * CHARS.length)];

    // Random horizontal position across full width
    const left = 4 + Math.random() * 92;
    // Start at a random vertical position in the bottom 60%
    const startBottom = 5 + Math.random() * 60;
    // Random size (slightly smaller for elegance)
    const size = 10 + Math.random() * 10;
    // Random duration (slow drift: 5-12s)
    const dur = (5 + Math.random() * 7).toFixed(2);
    // Random delay so they are staggered
    const delay = (Math.random() * 8).toFixed(2);

    el.style.cssText = `
      left: ${left}%;
      bottom: ${startBottom}%;
      font-size: ${size}px;
      animation-duration: ${dur}s;
      animation-delay: ${delay}s;
      text-shadow: 0 0 6px rgba(245,208,96,0.7);
    `;

    wrapper.appendChild(el);
  }
}