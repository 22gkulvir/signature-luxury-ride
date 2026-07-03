# Signature Luxury Ride Inc.

Premium luxury black car service website for **Signature Luxury Ride Inc.** — serving the Dallas–Fort Worth Metroplex.

## Pages

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Hero, services overview, fleet preview, testimonials |
| Services | `services.html` | Full service list, pricing, DFW coverage area |
| Fleet | `fleet.html` | Vehicle showcase with specs and amenities |
| About | `about.html` | Story, values, team, and the Signature Promise |
| Book a Ride | `booking.html` | Reservation form with contact info sidebar |

## Run Locally

### Option 1 — npx serve (no install needed)

```bash
npx serve . --listen 3000
```

Then open [http://localhost:3000](http://localhost:3000)

### Option 2 — live-server (auto-reload on save)

```bash
npx live-server --port=3000 --open=index.html
```

### Option 3 — npm start

```bash
npm start
```

## Deploy to GitHub Pages

1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Set source to **main branch / root**
4. Your site will be live at `https://<your-username>.github.io/<repo-name>/`

## Customize

Before going live, update these placeholders in every page's footer and in `booking.html`:

| Placeholder | Replace with |
|-------------|-------------|
| `(972) 555-0100` | Real phone number |
| `info@signatureluxuryride.com` | Real email address |
| `Garland, TX` | Correct address if different |

Search all files: `Ctrl+Shift+H` in VS Code → find & replace all at once.

## Tech Stack

- Pure HTML5, CSS3, JavaScript — no frameworks, no dependencies
- Google Fonts (Playfair Display + Inter)
- Unsplash images (free to use, swap with real photos anytime)
- Fully responsive — mobile, tablet, desktop
