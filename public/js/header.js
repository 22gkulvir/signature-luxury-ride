/* ============================================================
   header.js — Signature Luxury Ride | Shared Navigation
   Reads config.js for feature flags — disabled pages get
   their nav link swapped to under-construction.html
   Usage: <script src="config.properties"></script>
          <div id="site-header"></div>
          <script src="header.js"></script>
   ============================================================ */

(function () {
  /* ── Config helper ── */
  function pageHref(key, fallback) {
    if (typeof SLR_CONFIG === 'undefined') return fallback;
    var cfg = SLR_CONFIG.pages[key];
    if (!cfg) return fallback;
    return cfg.enabled ? cfg.href : ('under-construction.html?page=' + key);
  }
  function pageEnabled(key) {
    if (typeof SLR_CONFIG === 'undefined') return true;
    var cfg = SLR_CONFIG.pages[key];
    return cfg ? cfg.enabled : true;
  }

  /* ── Detect active page ── */
  var page = window.location.pathname.split('/').pop() || 'index.html';
  function active(href) {
    return page === href ? ' class="active"' : '';
  }

  /* ── Build nav links (skip disabled pages entirely from nav) ── */
  function navLink(key, label, extraClass) {
    var href = pageHref(key, SLR_CONFIG && SLR_CONFIG.pages[key] ? SLR_CONFIG.pages[key].href : '#');
    var isUC = !pageEnabled(key);
    var cls  = extraClass || '';
    if (isUC) cls += (cls ? ' ' : '') + 'nav-disabled';
    var activeAttr = (!isUC && page === href) ? ' class="active' + (cls ? ' ' + cls : '') + '"' : (cls ? ' class="' + cls + '"' : '');
    return '<a href="' + href + '"' + activeAttr + (isUC ? ' title="Coming Soon"' : '') + '>' + label + (isUC ? ' <span class="nav-uc-badge">Soon</span>' : '') + '</a>';
  }

  /* ── Inject HTML ── */
  var placeholder = document.getElementById('site-header');
  if (!placeholder) return;

  placeholder.innerHTML =
    '<nav class="navbar" id="navbar">' +
      '<a href="index.html" class="nav-logo">' +
        '<span class="nav-logo-top">Signature Luxury Ride</span>' +
        '<span class="nav-logo-sub">Inc. &mdash; Dallas, TX</span>' +
      '</a>' +
      '<div class="nav-links">' +
        navLink('home',     'Home') +
        navLink('services', 'Services') +
        navLink('fleet',    'Our Fleet') +
        navLink('about',    'About') +
        navLink('booking',  'Contact') +
        '<a href="' + pageHref('signin', 'signin.html') + '" class="nav-signin" style="color:var(--gold);">' +
          (pageEnabled('signin') ? 'Sign In' : 'Sign In <span class="nav-uc-badge">Soon</span>') +
        '</a>' +
        '<a href="profile.html" class="nav-profile-wrap" style="display:none;color:var(--gold);">&#128100; <span class="nav-user-name"></span></a>' +
        '<a href="' + pageHref('booking', 'booking.html') + '" class="btn btn-gold nav-cta">Book a Ride</a>' +
      '</div>' +
      '<button class="hamburger" id="hamburger" aria-label="Open menu">' +
        '<span></span><span></span><span></span>' +
      '</button>' +
    '</nav>' +

    '<div class="mobile-menu" id="mobileMenu">' +
      '<a href="index.html" onclick="SLR_closeMobile()">Home</a>' +
      '<a href="' + pageHref('services', 'services.html') + '" onclick="SLR_closeMobile()">Services' + (pageEnabled('services') ? '' : ' <span class="nav-uc-badge">Soon</span>') + '</a>' +
      '<a href="' + pageHref('fleet',    'fleet.html')    + '" onclick="SLR_closeMobile()">Our Fleet' + (pageEnabled('fleet') ? '' : ' <span class="nav-uc-badge">Soon</span>') + '</a>' +
      '<a href="' + pageHref('about',    'about.html')    + '" onclick="SLR_closeMobile()">About' + (pageEnabled('about') ? '' : ' <span class="nav-uc-badge">Soon</span>') + '</a>' +
      '<a href="' + pageHref('booking',  'booking.html')  + '" onclick="SLR_closeMobile()">Contact' + (pageEnabled('booking') ? '' : ' <span class="nav-uc-badge">Soon</span>') + '</a>' +
      '<a href="' + pageHref('signin',   'signin.html')   + '" class="nav-signin" onclick="SLR_closeMobile()" style="color:var(--gold);">Sign In' + (pageEnabled('signin') ? '' : ' <span class="nav-uc-badge">Soon</span>') + '</a>' +
      '<a href="profile.html" class="nav-profile-wrap" onclick="SLR_closeMobile()" style="display:none;color:var(--gold);">My Dashboard</a>' +
      '<a href="' + pageHref('booking',  'booking.html')  + '" class="btn btn-gold" onclick="SLR_closeMobile()">Book a Ride</a>' +
    '</div>';

  /* ── Scroll effect ── */
  var navbar = document.getElementById('navbar');
  if (page !== 'index.html' && page !== '') {
    navbar.classList.add('scrolled');
  }
  window.addEventListener('scroll', function () {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  });

  /* ── Hamburger ── */
  var hamburger = document.getElementById('hamburger');
  var mobileMenu = document.getElementById('mobileMenu');
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

  /* ── Auth nav state ── */
  function applyAuth() {
    if (typeof SLR !== 'undefined') SLR.updateNav();
  }
  applyAuth();
  window.addEventListener('load', applyAuth);
})();
