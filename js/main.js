/* ================================================
   VV CONSTRUCTION — Main JS
   main.js
   ================================================ */

/* ── Project Filter ─────────────────────────── */
const filterBtns = document.querySelectorAll('.f-btn');
const projCards  = document.querySelectorAll('.proj-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const cat = btn.dataset.filter;

    projCards.forEach(card => {
      const match = cat === 'all' || card.dataset.cat === cat;
      if (match) {
        card.style.display = 'block';
        card.style.opacity = '0';
        card.style.transform = 'scale(0.9)';
        requestAnimationFrame(() => {
          card.style.transition = 'opacity 0.45s ease, transform 0.45s ease';
          card.style.opacity = '1';
          card.style.transform = 'scale(1)';
        });
      } else {
        card.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
        card.style.opacity = '0';
        card.style.transform = 'scale(0.9)';
        setTimeout(() => { card.style.display = 'none'; }, 280);
      }
    });
  });
});

/* ── Contact Form ───────────────────────────── */
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    const btn = contactForm.querySelector('.btn-submit');
    btn.textContent = 'Sending…';
    btn.disabled = true;
    setTimeout(() => {
      contactForm.style.display = 'none';
      document.getElementById('formSuccess').style.display = 'block';
    }, 1600);
  });
}

/* ── Hero Parallax (subtle) ─────────────────── */
const heroBg = document.querySelector('.hero-bg');
if (heroBg) {
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    heroBg.style.transform = `translateY(${y * 0.35}px)`;
  }, { passive: true });
}

/* ── Image Fallback Handling ────────────────── */
document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll('img');
  // High quality construction placeholder
  const fallbackSrc = 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80';
  images.forEach(img => {
    img.addEventListener('error', function() {
      if (this.src !== fallbackSrc) {
        this.src = fallbackSrc;
      }
    });
  });
});
