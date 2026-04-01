/* ================================================
   VV CONSTRUCTION — Shared Components
   components.js
   ================================================ */

/* ── Inject Navbar ─────────────────────────────── */
document.body.insertAdjacentHTML('afterbegin', `
<nav id="navbar">
  <!-- Top info bar -->
  <div class="nav-top-bar">
    <div class="container">
      <div class="nav-top-inner">
        <div class="nav-top-info">
          <div class="nav-top-item">
            <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
            +91 95007 58441
          </div>
          <div class="nav-top-item">
            <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            vijaykumarm86@gmail.com
          </div>
          <div class="nav-top-item">
            <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            Mon–Sat: 9:00 AM – 7:00 PM
          </div>
        </div>
        <div class="nav-top-socials">
          <a href="#" aria-label="Facebook">FB</a>
          <a href="#" aria-label="Instagram">IG</a>
          <a href="#" aria-label="LinkedIn">LI</a>
          <a href="#" aria-label="YouTube">YT</a>
        </div>
      </div>
    </div>
  </div>
  <!-- Main navbar -->
  <div class="nav-main">
    <div class="container">
      <div class="nav-inner">
        <a href="index.html" class="nav-logo" aria-label="VV Construction Home">
          <img src="assets/images/logo.png" alt="VV Construction & Interior Design Logo" />
        </a>
        <ul class="nav-links" role="list">
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="services.html">Services</a></li>
          <li><a href="projects.html">Projects</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
        <a href="contact.html" class="btn btn-gold nav-cta">Free Estimate</a>
        <button class="hamburger" id="hamburger" aria-label="Toggle menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
      <!-- Mobile menu -->
      <nav class="mobile-nav" id="mobileNav" role="navigation" aria-label="Mobile navigation">
        <a href="index.html">Home <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg></a>
        <a href="about.html">About <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg></a>
        <a href="services.html">Services <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg></a>
        <a href="projects.html">Projects <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg></a>
        <a href="contact.html">Contact <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg></a>
      </nav>
    </div>
  </div>
</nav>
`);

/* ── Inject Footer ─────────────────────────────── */
document.body.insertAdjacentHTML('beforeend', `
<footer>
  <div class="container">
    <div class="footer-grid">
      <!-- Brand -->
      <div class="footer-brand">
        <img src="assets/images/logo.png" alt="VV Construction Logo" />
        <p>Building dreams with engineering excellence across South India. From residential villas to industrial turnkey projects — quality, trust, and timely delivery since 2010.</p>
        <div class="footer-socials">
          <a href="#" class="footer-social" aria-label="Facebook">f</a>
          <a href="#" class="footer-social" aria-label="Instagram">in</a>
          <a href="#" class="footer-social" aria-label="LinkedIn">Li</a>
          <a href="#" class="footer-social" aria-label="YouTube">YT</a>
        </div>
      </div>
      <!-- Quick Links -->
      <div class="footer-col">
        <h5>Quick Links</h5>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html">About Us</a></li>
          <li><a href="services.html">Our Services</a></li>
          <li><a href="projects.html">Projects</a></li>
          <li><a href="contact.html">Contact Us</a></li>
        </ul>
      </div>
      <!-- Services -->
      <div class="footer-col">
        <h5>Services</h5>
        <ul>
          <li><a href="services.html#construction">Construction</a></li>
          <li><a href="services.html#interior">Interior Design</a></li>
          <li><a href="services.html#ceiling">False Ceiling</a></li>
          <li><a href="services.html#renovation">Renovation</a></li>
          <li><a href="services.html#turnkey">Turnkey Projects</a></li>
        </ul>
      </div>
      <!-- Contact -->
      <div class="footer-col">
        <h5>Contact</h5>
        <div class="footer-contact-item">
          <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
          <span>+91 95007 58441</span>
        </div>
        <div class="footer-contact-item">
          <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
          <span>vijaykumarm86@gmail.com</span>
        </div>
        <div class="footer-contact-item">
          <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
          <span>Chennai | Bangalore | Delhi</span>
        </div>
        <div class="footer-contact-item">
          <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/></svg>
          <span>Tada &amp; SriCity, AP</span>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2025 VV Construction &amp; Interior Design. All Rights Reserved.</p>
      <div class="footer-cert">
        <span class="cert-badge">ISO 9001:2015</span>
        <span class="cert-badge">RERA Registered</span>
        <span class="cert-badge">Made in India 🇮🇳</span>
      </div>
    </div>
  </div>
</footer>

<!-- WhatsApp Float -->
<a href="https://wa.me/919500758441?text=Hello%20VV%20Construction%2C%20I%20am%20interested%20in%20your%20services.%20Please%20contact%20me."
   class="wa-float" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
  <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
</a>
`);

/* ── Active Nav Link ───────────────────────────── */
const page = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a, .mobile-nav a').forEach(a => {
  if (a.getAttribute('href') === page) a.classList.add('active');
});

/* ── Sticky Navbar ─────────────────────────────── */
const navbar = document.getElementById('navbar');
const onScroll = () => navbar.classList.toggle('scrolled', window.scrollY > 80);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* ── Hamburger ─────────────────────────────────── */
const ham    = document.getElementById('hamburger');
const mobileN = document.getElementById('mobileNav');
ham?.addEventListener('click', () => {
  const open = ham.classList.toggle('open');
  mobileN.classList.toggle('open', open);
  ham.setAttribute('aria-expanded', open);
});
mobileN?.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    ham.classList.remove('open');
    mobileN.classList.remove('open');
  });
});

/* ── Scroll Reveal ─────────────────────────────── */
const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
const revObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      // stagger children if parent has data-stagger
      const delay = e.target.dataset.delay || 0;
      setTimeout(() => e.target.classList.add('revealed'), delay);
      revObs.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });
revealEls.forEach(el => revObs.observe(el));

/* ── Counter Animation ─────────────────────────── */
function animCount(el, to, suffix) {
  let start = 0; const dur = 2000;
  const step = ts => {
    if (!el._ts) el._ts = ts;
    const prog = Math.min((ts - el._ts) / dur, 1);
    const ease = 1 - Math.pow(1 - prog, 4);
    el.textContent = Math.floor(ease * to) + suffix;
    if (prog < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}
const cntObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const el  = e.target;
      const to  = +el.dataset.to;
      const sfx = el.dataset.suffix || '';
      animCount(el, to, sfx);
      cntObs.unobserve(el);
    }
  });
}, { threshold: 0.6 });
document.querySelectorAll('[data-to]').forEach(el => cntObs.observe(el));
