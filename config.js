/* ============================================================
   config.js — Signature Luxury Ride | Feature Flag Config
   ============================================================
   Set a page to false to hide it from nav and redirect visitors
   to the "Under Construction" page. Set to true to go live.

   No code changes needed — just flip the flag and push.
   ============================================================ */

const SLR_CONFIG = {

  /* ── Page flags ────────────────────────────────────────────
     true  = page is live and accessible
     false = nav link redirects to under-construction page;
             direct URL access also redirects                  */
  pages: {
    home:         { enabled: true,  label: 'Home',      href: 'index.html'    },
    services:     { enabled: true,  label: 'Services',  href: 'services.html' },
    fleet:        { enabled: true,  label: 'Our Fleet', href: 'fleet.html'    },
    about:        { enabled: true,  label: 'About',     href: 'about.html'    },
    booking:      { enabled: true,  label: 'Contact',   href: 'booking.html'  },
    signin:       { enabled: true,  label: 'Sign In',   href: 'signin.html'   },
    profile:      { enabled: true,  label: 'Dashboard', href: 'profile.html'  },
  },

  /* ── Site-wide settings ────────────────────────────────────
     Central place for contact info, branding, etc.
     Reference these in JS as SLR_CONFIG.site.phone etc.      */
  site: {
    name:    'Signature Luxury Ride Inc.',
    tagline: 'Premium Black Car Service — Dallas, TX',
    phone:   '(972) 555-0100',
    email:   'info@signatureluxuryride.com',
    address: 'Garland, TX — DFW Metroplex',
    facebook: 'https://www.facebook.com/share/1BJxjkeFNV/',
    launchYear: 2024,
  },

};
