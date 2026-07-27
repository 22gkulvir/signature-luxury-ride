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
    rates:        { enabled: true,  label: 'Rates',     href: 'rates.html'    },
    fleet:        { enabled: true,  label: 'Our Fleet', href: 'fleet.html'    },
    about:        { enabled: true,  label: 'About',     href: 'about.html'    },
    booking:      { enabled: true,  label: 'Contact',   href: 'booking.html'  },
    signin:       { enabled: false, label: 'Sign In',   href: 'signin.html'   },
    profile:      { enabled: false, label: 'Dashboard', href: 'profile.html'  },
    feedback:     { enabled: true,  label: 'Feedback',  href: 'feedback.html' },
    legal:        { enabled: true,  label: 'Legal',     href: 'legal.html'    },
  },

  /* ── Site-wide settings ────────────────────────────────────
     Central place for contact info, branding, etc.
     Reference these in JS as SLR_CONFIG.site.phone etc.
     UPDATE siteUrl to your GitHub Pages URL before printing QR. */
  site: {
    name:    'Signature Luxury Ride Inc.',
    tagline: 'Premium Black Car Service — Dallas, TX',
    phone:   '(469) 325-9301',
    email:         'contactus@signatureluxuryride.com',
    feedbackEmail: 'feedback@signatureluxuryride.com',
    address: 'Garland, TX — DFW Metroplex',
    facebook: 'https://www.facebook.com/61589647287220',
    launchYear: 2026,
    siteUrl: 'https://signatureluxuryride.com',
  },

};
