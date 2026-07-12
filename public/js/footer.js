/* ============================================================
   footer.js — Signature Luxury Ride | Shared Footer
   All contact info and branding is read from config.properties
   Usage: <div id="site-footer"></div><script src="footer.js"></script>
   ============================================================ */

(function () {
  var placeholder = document.getElementById('site-footer');
  if (!placeholder) return;

  /* ── Read from config.properties (SLR_CONFIG.site) ── */
  var site = (typeof SLR_CONFIG !== 'undefined' && SLR_CONFIG.site) ? SLR_CONFIG.site : {};

  /* FIX (feature flags): footer links previously pointed straight at pages
     that are disabled in config.js, bypassing the "Coming Soon" flow the
     header nav uses. Route them through the same flag check as header.js. */
  function pageHref(key, fallback) {
    if (typeof SLR_CONFIG === 'undefined' || !SLR_CONFIG.pages) return fallback;
    var cfg = SLR_CONFIG.pages[key];
    if (!cfg) return fallback;
    return cfg.enabled ? cfg.href : ('under-construction.html?page=' + key);
  }

  var name       = site.name       || 'Signature Luxury Ride Inc.';
  var tagline    = site.tagline    || 'Premium Black Car Service — Dallas, TX';
  var phone      = site.phone      || '';
  var email      = site.email      || '';
  var address    = site.address    || '';
  var facebook   = site.facebook   || '#';
  var year       = site.launchYear || new Date().getFullYear();

  var phoneHref  = phone ? 'tel:+1' + phone.replace(/\D/g, '') : '#';
  var emailHref  = email ? 'mailto:' + email : '#';
  /* Name may already end in a period ("… Inc.") — strip it to avoid "Inc.." */
  var nameClean  = name.replace(/\.$/, '');
  var copyright  = '&copy; ' + new Date().getFullYear() + ' ' + nameClean + '. All rights reserved.';

  placeholder.innerHTML = '\
    <footer class="footer">\
      <div class="container">\
        <div class="footer-grid">\
\
          <div class="footer-brand">\
            <div class="nav-logo">\
              <span class="nav-logo-top">' + name.replace(' Inc.', '') + '</span>\
              <span class="nav-logo-sub">Inc. &mdash; Dallas, TX</span>\
            </div>\
            <p>' + tagline.replace(' — ', ' &mdash; ') + '. Professional, punctual, and private &mdash; every ride, every time.</p>\
            <div class="footer-social">\
              <a href="' + facebook + '" target="_blank" rel="noopener noreferrer" aria-label="' + name + ' on Facebook">\
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>\
              </a>\
            </div>\
          </div>\
\
          <div>\
            <div class="footer-heading">Navigation</div>\
            <ul class="footer-links">\
              <li><a href="' + pageHref('home', 'index.html') + '">Home</a></li>\
              <li><a href="' + pageHref('services', 'services.html') + '">Services</a></li>\
              <li><a href="' + pageHref('fleet', 'fleet.html') + '">Our Fleet</a></li>\
              <li><a href="' + pageHref('about', 'about.html') + '">About Us</a></li>\
              <li><a href="' + pageHref('booking', 'booking.html') + '">Book a Ride</a></li>\
              <li><a href="' + pageHref('feedback', 'feedback.html') + '">Leave a Review</a></li>\
              <li><a href="' + pageHref('legal', 'legal.html') + '">Legal &amp; Compliance</a></li>\
            </ul>\
          </div>\
\
          <div>\
            <div class="footer-heading">Services</div>\
            <ul class="footer-links">\
              <li><a href="' + pageHref('services', 'services.html') + '">Airport Transfers</a></li>\
              <li><a href="' + pageHref('services', 'services.html') + '">Corporate Travel</a></li>\
              <li><a href="' + pageHref('services', 'services.html') + '">Special Events</a></li>\
              <li><a href="' + pageHref('services', 'services.html') + '">Hourly Chauffeur</a></li>\
              <li><a href="' + pageHref('services', 'services.html') + '">Group Transport</a></li>\
            </ul>\
          </div>\
\
          <div>\
            <div class="footer-heading">Contact</div>\
            <ul class="footer-contact">\
              ' + (address ? '<li><span>&#128205;</span><span>' + address + '</span></li>' : '') + '\
              ' + (phone   ? '<li><span>&#128222;</span><span><a href="' + phoneHref + '">' + phone + '</a></span></li>' : '') + '\
              ' + (email   ? '<li><span>&#9993;</span><span><a href="' + emailHref + '">' + email + '</a></span></li>' : '') + '\
              <li><span>&#128336;</span><span>Available 24 Hours, 7 Days</span></li>\
            </ul>\
          </div>\
\
        </div>\
\
        <div class="footer-bottom">\
          <span>' + copyright + '</span>\
          <span>Dallas &middot; Garland &middot; Plano &middot; Frisco &middot; Arlington</span>\
        </div>\
      </div>\
    </footer>';

  /* ── Floating WhatsApp badge (all pages that load the footer) ──
     Number comes from config: site.whatsapp if set, else site.phone. */
  var waNumber = (site.whatsapp || phone || '').replace(/\D/g, '');
  if (waNumber && !document.getElementById('slr-wa-badge')) {
    if (waNumber.length === 10) waNumber = '1' + waNumber; /* assume US */
    var waMsg  = encodeURIComponent("Hello Signature Luxury Ride! I'd like a quick quote.");
    var waHref = 'https://wa.me/' + waNumber + '?text=' + waMsg;

    var waCss = document.createElement('style');
    waCss.textContent =
      '#slr-wa-badge{position:fixed;bottom:22px;right:22px;z-index:9999;display:flex;align-items:center;gap:0;text-decoration:none;}' +
      /* Always-visible green pill with the CTA text */
      /* Right edge is carved into a concave arc (radial-gradient mask) that
         mirrors the circle, leaving a ~6px gap so both shapes read separately.
         filter:drop-shadow (not box-shadow) is used so the shadow follows the
         carved shape. */
      '#slr-wa-badge .wa-label{background:#25D366;color:#fff;height:52px;display:flex;align-items:center;' +
        'font:700 0.9rem/1 Inter,system-ui,sans-serif;letter-spacing:0.02em;white-space:nowrap;padding:0 32px 0 18px;' +
        'border-radius:26px 0 0 26px;filter:drop-shadow(0 4px 10px rgba(0,0,0,0.3));transition:background .2s ease;' +
        '-webkit-mask:radial-gradient(35px at calc(100% + 23px) 50%, transparent 34px, #000 35px);' +
        'mask:radial-gradient(35px at calc(100% + 23px) 50%, transparent 34px, #000 35px);}' +
      '#slr-wa-badge:hover .wa-label{background:#20b95b;}' +
      '#slr-wa-badge .wa-btn{width:58px;height:58px;border-radius:50%;background:#25D366;display:flex;align-items:center;justify-content:center;' +
        'position:relative;margin-left:-6px;box-shadow:0 4px 16px rgba(0,0,0,0.35),0 0 0 0 rgba(37,211,102,0.5);flex-shrink:0;' +
        'transition:transform .2s ease,box-shadow .2s ease;animation:slr-wa-pulse 2.6s ease-out infinite;}' +
      '#slr-wa-badge:hover .wa-btn{transform:scale(1.06);box-shadow:0 6px 22px rgba(0,0,0,0.4);animation:none;}' +
      '#slr-wa-badge svg{width:32px;height:32px;display:block;}' +
      '@keyframes slr-wa-pulse{0%{box-shadow:0 4px 16px rgba(0,0,0,0.35),0 0 0 0 rgba(37,211,102,0.45);}' +
        '70%{box-shadow:0 4px 16px rgba(0,0,0,0.35),0 0 0 14px rgba(37,211,102,0);}' +
        '100%{box-shadow:0 4px 16px rgba(0,0,0,0.35),0 0 0 0 rgba(37,211,102,0);}}' +
      '@media (max-width:600px){#slr-wa-badge{bottom:16px;right:16px;}' +
        '#slr-wa-badge .wa-btn{width:52px;height:52px;margin-left:-4px;}#slr-wa-badge svg{width:28px;height:28px;}' +
        '#slr-wa-badge .wa-label{height:46px;font-size:0.85rem;padding:0 30px 0 16px;' +
        '-webkit-mask:radial-gradient(32px at calc(100% + 22px) 50%, transparent 31px, #000 32px);' +
        'mask:radial-gradient(32px at calc(100% + 22px) 50%, transparent 31px, #000 32px);}}' +
      '@media print{#slr-wa-badge{display:none !important;}}' +
      '@media (prefers-reduced-motion:reduce){#slr-wa-badge .wa-btn{animation:none;}}';
    document.head.appendChild(waCss);

    var waLink = document.createElement('a');
    waLink.id = 'slr-wa-badge';
    waLink.href = waHref;
    waLink.target = '_blank';
    waLink.rel = 'noopener noreferrer';
    waLink.setAttribute('aria-label', 'Get a quick quote on WhatsApp');
    waLink.innerHTML =
      '<span class="wa-label">Quick Quote</span>' +
      '<span class="wa-btn">' +
        '<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
          '<path fill="#fff" d="M16.04 4.5c-6.35 0-11.5 5.11-11.5 11.41 0 2.01.53 3.98 1.55 5.71L4.5 27.5l6.06-1.57a11.6 11.6 0 0 0 5.48 1.38c6.35 0 11.5-5.11 11.5-11.4 0-3.05-1.2-5.92-3.37-8.07A11.47 11.47 0 0 0 16.04 4.5Zm0 20.86c-1.72 0-3.4-.46-4.87-1.32l-.35-.21-3.6.93.96-3.48-.23-.36a9.36 9.36 0 0 1-1.46-5.01c0-5.22 4.29-9.47 9.56-9.47 2.55 0 4.95.99 6.75 2.78a9.35 9.35 0 0 1 2.8 6.7c0 5.23-4.29 9.44-9.56 9.44Zm5.24-7.08c-.29-.14-1.7-.83-1.96-.93-.26-.1-.46-.14-.65.15-.19.28-.74.92-.9 1.11-.17.19-.34.21-.62.07-.29-.14-1.21-.44-2.3-1.4a8.6 8.6 0 0 1-1.6-1.96c-.16-.28-.02-.44.13-.58.13-.13.28-.33.43-.5.14-.17.19-.28.29-.47.1-.19.05-.36-.02-.5-.07-.14-.65-1.54-.88-2.11-.23-.55-.47-.48-.65-.49h-.55c-.19 0-.5.07-.77.36-.26.28-1 .97-1 2.36 0 1.4 1.03 2.75 1.17 2.94.14.19 2.02 3.05 4.89 4.28.68.29 1.22.47 1.63.6.69.22 1.31.19 1.8.11.55-.08 1.7-.69 1.94-1.35.24-.66.24-1.23.17-1.35-.07-.12-.26-.19-.55-.33Z"/>' +
        '</svg>' +
      '</span>';

    /* Try the native WhatsApp app first (whatsapp:// protocol); if nothing
       takes over the page within ~1.2s, fall back to WhatsApp Web (wa.me).
       On phones wa.me already deep-links into the app, but desktops/tablets
       with the app installed would otherwise always land on the web version. */
    var waAppUrl = 'whatsapp://send?phone=' + waNumber + '&text=' + waMsg;
    waLink.addEventListener('click', function (e) {
      e.preventDefault();
      var fallback = setTimeout(function () {
        /* App didn't open (page still visible) — use WhatsApp Web */
        if (!document.hidden) window.open(waHref, '_blank', 'noopener');
      }, 1200);
      /* If the app opened, the page loses visibility — cancel the fallback */
      var cancel = function () {
        if (document.hidden) {
          clearTimeout(fallback);
          document.removeEventListener('visibilitychange', cancel);
        }
      };
      document.addEventListener('visibilitychange', cancel);
      window.location.href = waAppUrl;
    });

    document.body.appendChild(waLink);
  }
})();
