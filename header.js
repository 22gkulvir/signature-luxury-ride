/* ============================================================
   header.js — Signature Luxury Ride | Shared Navigation
   Usage: <div id="site-header"></div><script src="header.js"></script>
   ============================================================ */

(function () {
  /* -- Detect active page -- */
  const page = window.location.pathname.split('/').pop() || 'index.html';
  function active(href) {
    return page === href ? ' class="active"' : '';
  }

  /* -- Inject HTML -- */
  const placeholder = document.getElementById('site-header');
  if (!placeholder) return;

  placeholder.innerHTML = `
    <nav class="navbar" id="navbar">
      <a href="index.html" class="nav-logo">
        <span class="nav-logo-top">Signature Luxury Ride</span>
        <span class="nav-logo-sub">Inc. &mdash; Dallas, TX</span>
      </a>

      <div class="nav-links">
        <a href="index.html"${active('index.html')}>Home</a>
        <a href="services.html"${active('services.html')}>Services</a>
        <a href="fleet.html"${active('fleet.html')}>Our Fleet</a>
        <a href="about.html"${active('about.html')}>About</a>
        <a href="booking.html"${active('booking.html')}>Contact</a>
        <a href="signin.html" class="nav-signin" style="color:var(--gold);">Sign In</a>
        <a href="profile.html" class="nav-profile-wrap" style="display:none;color:var(--gold);">&#128100; <span class="nav-user-name"></span></a>
        <a href="booking.html" class="btn btn-gold nav-cta">Book a Ride</a>
      </div>

      <button class="hamburger" id="hamburger" aria-label="Open menu">
        <span></span><span></span><span></span>
      </button>
    </nav>

    <div class="mobile-menu" id="mobileMenu">
      <a href="index.html" onclick="SLR_closeMobile()">Home</a>
      <a href="services.html" onclick="SLR_closeMobile()">Services</a>
      <a href="fleet.html" onclick="SLR_closeMobile()">Our Fleet</a>
      <a href="about.html" onclick="SLR_closeMobile()">About</a>
      <a href="booking.html" onclick="SLR_closeMobile()">Contact</a>
      <a href="signin.html" class="nav-signin" onclick="SLR_closeMobile()" style="color:var(--gold);">Sign In</a>
      <a href="profile.html" class="nav-profile-wrap" onclick="SLR_closeMobile()" style="display:none;color:var(--gold);">My Dashboard</a>
      <a href="booking.html" class="btn btn-gold" onclick="SLR_closeMobile()">Book a Ride</a>
    </div>
  `;

  /* -- Scroll effect -- */
  const navbar = document.getElementById('navbar');

  /* Inner pages (not home) start with solid navbar */
  if (page !== 'index.html' && page !== '') {
    navbar.classList.add('scrolled');
  }

  window.addEventListener('scroll', function () {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  });

  /* -- Hamburger -- */
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
    document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
  });

  window.SLR_closeMobile = function () {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  };

  /* -- Auth nav state (runs after auth.js if present) -- */
  function applyAuth() {
    if (typeof SLR !== 'undefined') {
      SLR.updateNav();
    }
  }
  /* Try immediately, then wait for auth.js to load */
  applyAuth();
  window.addEventListener('load', applyAuth);
})();
