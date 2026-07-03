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

  var name       = site.name       || 'Signature Luxury Ride Inc.';
  var tagline    = site.tagline    || 'Premium Black Car Service — Dallas, TX';
  var phone      = site.phone      || '';
  var email      = site.email      || '';
  var address    = site.address    || '';
  var facebook   = site.facebook   || '#';
  var year       = site.launchYear || new Date().getFullYear();

  var phoneHref  = phone ? 'tel:+1' + phone.replace(/\D/g, '') : '#';
  var emailHref  = email ? 'mailto:' + email : '#';
  var copyright  = '&copy; ' + year + (new Date().getFullYear() > year ? '&ndash;' + new Date().getFullYear() : '') + ' ' + name + '. All rights reserved.';

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
              <a href="' + facebook + '" target="_blank" rel="noopener" aria-label="Facebook on Facebook">\
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>\
              </a>\
            </div>\
          </div>\
\
          <div>\
            <div class="footer-heading">Navigation</div>\
            <ul class="footer-links">\
              <li><a href="index.html">Home</a></li>\
              <li><a href="services.html">Services</a></li>\
              <li><a href="fleet.html">Our Fleet</a></li>\
              <li><a href="about.html">About Us</a></li>\
              <li><a href="booking.html">Book a Ride</a></li>\
            </ul>\
          </div>\
\
          <div>\
            <div class="footer-heading">Services</div>\
            <ul class="footer-links">\
              <li><a href="services.html">Airport Transfers</a></li>\
              <li><a href="services.html">Corporate Travel</a></li>\
              <li><a href="services.html">Special Events</a></li>\
              <li><a href="services.html">Hourly Chauffeur</a></li>\
              <li><a href="services.html">Group Transport</a></li>\
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
})();
