/* ============================================================
   footer.js — Signature Luxury Ride | Shared Footer
   Usage: <div id="site-footer"></div><script src="footer.js"></script>
   ============================================================ */

(function () {
  const placeholder = document.getElementById('site-footer');
  if (!placeholder) return;

  placeholder.innerHTML = `
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">

          <div class="footer-brand">
            <div class="nav-logo">
              <span class="nav-logo-top">Signature Luxury Ride</span>
              <span class="nav-logo-sub">Inc. &mdash; Dallas, TX</span>
            </div>
            <p>Premium black car service across the DFW Metroplex. Professional, punctual, and private — every ride, every time.</p>
            <div class="footer-social">
              <a href="https://www.facebook.com/share/1BJxjkeFNV/" target="_blank" rel="noopener" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
            </div>
          </div>

          <div>
            <div class="footer-heading">Navigation</div>
            <ul class="footer-links">
              <li><a href="index.html">Home</a></li>
              <li><a href="services.html">Services</a></li>
              <li><a href="fleet.html">Our Fleet</a></li>
              <li><a href="about.html">About Us</a></li>
              <li><a href="booking.html">Book a Ride</a></li>
            </ul>
          </div>

          <div>
            <div class="footer-heading">Services</div>
            <ul class="footer-links">
              <li><a href="services.html">Airport Transfers</a></li>
              <li><a href="services.html">Corporate Travel</a></li>
              <li><a href="services.html">Special Events</a></li>
              <li><a href="services.html">Hourly Chauffeur</a></li>
              <li><a href="services.html">Group Transport</a></li>
            </ul>
          </div>

          <div>
            <div class="footer-heading">Contact</div>
            <ul class="footer-contact">
              <li><span>&#128205;</span><span>Garland, TX &mdash; DFW Metroplex</span></li>
              <li><span>&#128222;</span><span><a href="tel:+19725550100">(972) 555-0100</a></span></li>
              <li><span>&#9993;</span><span><a href="mailto:info@signatureluxuryride.com">info@signatureluxuryride.com</a></span></li>
              <li><span>&#128336;</span><span>Available 24 Hours, 7 Days</span></li>
            </ul>
          </div>

        </div>

        <div class="footer-bottom">
          <span>&copy; ${new Date().getFullYear()} Signature Luxury Ride Inc. All rights reserved.</span>
          <span>Dallas &middot; Garland &middot; Plano &middot; Frisco &middot; Arlington</span>
        </div>
      </div>
    </footer>
  `;
})();
