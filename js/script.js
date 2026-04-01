/* ============================================
   VV Construction & Interior Design
   Main JavaScript File
   ============================================ */

(function () {
  'use strict';

  /* ── Navbar Scroll Effect ── */
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  });

  /* ── Active Nav Link ── */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === currentPage) a.classList.add('active');
  });

  /* ── Mobile Menu ── */
  const hamburger = document.querySelector('.hamburger');
  const navLinks  = document.querySelector('.nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      navLinks.classList.toggle('mobile-open');
      document.body.style.overflow = navLinks.classList.contains('mobile-open') ? 'hidden' : '';
    });
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navLinks.classList.remove('mobile-open');
        document.body.style.overflow = '';
      });
    });
  }

  /* ── Testimonials Slider ── */
  const slider  = document.querySelector('.testimonials-slider');
  const dots    = document.querySelectorAll('.testi-dot');
  const prevBtn = document.querySelector('.testi-btn.prev');
  const nextBtn = document.querySelector('.testi-btn.next');
  if (slider) {
    let current = 0;
    const slides = slider.querySelectorAll('.testimonial-slide');
    const total  = slides.length;
    let autoTimer;

    function goTo(n) {
      current = (n + total) % total;
      slider.style.transform = `translateX(-${current * 100}%)`;
      dots.forEach((d, i) => d.classList.toggle('active', i === current));
    }

    function startAuto() {
      autoTimer = setInterval(() => goTo(current + 1), 5000);
    }

    function resetAuto() {
      clearInterval(autoTimer);
      startAuto();
    }

    if (prevBtn) prevBtn.addEventListener('click', () => { goTo(current - 1); resetAuto(); });
    if (nextBtn) nextBtn.addEventListener('click', () => { goTo(current + 1); resetAuto(); });
    dots.forEach((d, i) => d.addEventListener('click', () => { goTo(i); resetAuto(); }));
    startAuto();
  }

  /* ── Counter Animation ── */
  function animateCounter(el, target) {
    const duration = 2000;
    const step     = 16;
    const steps    = duration / step;
    const inc      = target / steps;
    let   cur      = 0;
    const interval = setInterval(() => {
      cur += inc;
      if (cur >= target) { cur = target; clearInterval(interval); }
      el.textContent = Math.floor(cur) + (el.dataset.suffix || '');
    }, step);
  }

  const counters = document.querySelectorAll('[data-counter]');
  if (counters.length && 'IntersectionObserver' in window) {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          animateCounter(e.target, parseInt(e.target.dataset.counter));
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.6 });
    counters.forEach(c => obs.observe(c));
  }

  /* ── Gallery Filter ── */
  const filterBtns  = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');
  if (filterBtns.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.dataset.filter;
        galleryItems.forEach(item => {
          const show = filter === 'all' || item.dataset.cat === filter;
          item.style.opacity    = show ? '1' : '0';
          item.style.transform  = show ? 'scale(1)' : 'scale(0.9)';
          item.style.pointerEvents = show ? '' : 'none';
          item.style.transition = 'all .35s ease';
          item.style.display    = show ? '' : 'none';
          // Animate back in with delay
          if (show) {
            setTimeout(() => { item.style.opacity = '1'; item.style.transform = 'scale(1)'; }, 10);
          }
        });
      });
    });
  }

  /* ── Lightbox ── */
  const lightbox   = document.getElementById('lightbox');
  const lbImg      = lightbox ? lightbox.querySelector('img') : null;
  const lbCap      = lightbox ? lightbox.querySelector('.lb-caption') : null;
  const lbClose    = lightbox ? lightbox.querySelector('.lb-close') : null;
  const lbPrev     = lightbox ? lightbox.querySelector('.lb-prev') : null;
  const lbNext     = lightbox ? lightbox.querySelector('.lb-next') : null;
  let   lbImages   = [];
  let   lbIndex    = 0;

  if (lightbox) {
    document.querySelectorAll('.gallery-item').forEach((item, idx) => {
      item.addEventListener('click', () => {
        lbImages = Array.from(document.querySelectorAll('.gallery-item img'));
        lbIndex  = idx;
        openLb();
      });
    });

    function openLb() {
      const src = lbImages[lbIndex].src;
      const alt = lbImages[lbIndex].alt;
      lbImg.src = src;
      if (lbCap) lbCap.textContent = alt;
      lightbox.classList.add('open');
      document.body.style.overflow = 'hidden';
    }

    function closeLb() {
      lightbox.classList.remove('open');
      document.body.style.overflow = '';
    }

    if (lbClose) lbClose.addEventListener('click', closeLb);
    lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLb(); });
    if (lbPrev) lbPrev.addEventListener('click', () => {
      const visible = Array.from(document.querySelectorAll('.gallery-item')).filter(i => i.style.display !== 'none');
      lbImages = visible.map(i => i.querySelector('img'));
      lbIndex  = (lbIndex - 1 + lbImages.length) % lbImages.length;
      openLb();
    });
    if (lbNext) lbNext.addEventListener('click', () => {
      const visible = Array.from(document.querySelectorAll('.gallery-item')).filter(i => i.style.display !== 'none');
      lbImages = visible.map(i => i.querySelector('img'));
      lbIndex  = (lbIndex + 1) % lbImages.length;
      openLb();
    });
    document.addEventListener('keydown', e => {
      if (!lightbox.classList.contains('open')) return;
      if (e.key === 'Escape') closeLb();
      if (e.key === 'ArrowLeft' && lbPrev) lbPrev.click();
      if (e.key === 'ArrowRight' && lbNext) lbNext.click();
    });
  }

  /* ── Contact Form Validation ── */
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      let valid = true;

      const fields = [
        { id: 'name',    msg: 'Please enter your name.' },
        { id: 'email',   msg: 'Please enter a valid email.',   pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
        { id: 'phone',   msg: 'Please enter a valid phone.',   pattern: /^[\d\s\+\-]{7,15}$/ },
        { id: 'message', msg: 'Please enter your message.' },
      ];

      fields.forEach(f => {
        const group = contactForm.querySelector(`#${f.id}`)?.closest('.form-group');
        const input = contactForm.querySelector(`#${f.id}`);
        const error = group?.querySelector('.form-error');
        if (!input) return;
        const val   = input.value.trim();
        const bad   = !val || (f.pattern && !f.pattern.test(val));
        if (group)  group.classList.toggle('has-error', bad);
        if (error)  error.textContent = f.msg;
        if (bad)    valid = false;
      });

      if (valid) {
        const successEl = contactForm.querySelector('.form-success');
        if (successEl) {
          successEl.style.display = 'block';
          contactForm.reset();
          setTimeout(() => { successEl.style.display = 'none'; }, 5000);
        }
      }
    });

    // Clear error on input
    contactForm.querySelectorAll('input, textarea').forEach(inp => {
      inp.addEventListener('input', () => {
        inp.closest('.form-group')?.classList.remove('has-error');
      });
    });
  }

  /* ── Smooth Scroll for anchor links ── */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ── Init AOS ── */
  if (typeof AOS !== 'undefined') {
    AOS.init({ duration: 700, easing: 'ease-out-cubic', once: true, offset: 60 });
  }

})();


