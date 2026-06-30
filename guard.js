/* ============================================================
   guard.js — Signature Luxury Ride | Page Access Guard
   Redirects to under-construction page if the page flag is
   set to false in config.js.

   Usage — add to <head> AFTER config.js:
     <script>var SLR_PAGE_KEY = 'services';</script>
     <script src="guard.js"></script>
   ============================================================ */

(function () {
  if (typeof SLR_PAGE_KEY === 'undefined') return;
  if (typeof SLR_CONFIG  === 'undefined') return;

  var cfg = SLR_CONFIG.pages[SLR_PAGE_KEY];
  if (cfg && !cfg.enabled) {
    window.location.replace('under-construction.html?page=' + SLR_PAGE_KEY);
  }
})();
