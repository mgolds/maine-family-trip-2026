# Goldsberry Maine Trip 2026

A static family trip website for the Goldsberry family's Maine adventure — Portland, Camden, Bar Harbor, and Acadia National Park (July 31 – August 7, 2026).

## Live site

**https://mgolds.github.io/maine-family-trip-2026/**

## Viewing Locally

No build step required. Open any HTML file in a browser:

1. Navigate to this folder in File Explorer.
2. Double-click `index.html`, or
3. From a terminal, start a simple server:

```bash
# Python 3
python -m http.server 8000

# Node.js (if npx is available)
npx serve .
```

Then visit [http://localhost:8000](http://localhost:8000).

A local server is recommended so relative asset paths and gallery behavior work consistently.

## Project Structure

```
Maine/
├── index.html                  # Trip overview, lodging, reservations, day cards
├── day-01-arrival.html         # Day 1 — Arrive Portland
├── day-02-peaks-island.html    # Day 2 — Peaks Island & Eastern Prom
├── day-03-camden-bar-harbor.html
├── day-04-cadillac-ocean-path.html
├── day-05-bubbles-jordan-pond.html
├── day-06-long-pond.html
├── day-07-great-head-lobster.html
├── day-08-departure.html
├── README.md
├── CREDITS.md
└── assets/
    ├── css/
    │   └── style.css           # Shared styles
    ├── js/
    │   └── main.js             # Nav toggle, active link, photo lightbox
    └── images/
        ├── shared/             # Hero and cross-day images
        ├── day-01/ … day-08/   # Per-day photo galleries
```

## Editing Tips

- **Shared layout:** Every page uses the same header nav, footer, Google Fonts, and asset links.
- **Active nav:** `main.js` automatically highlights the current page in the nav.
- **Day pages:** Follow the pattern: day hero → timing table → activities → trails → gallery → videos → confirm notes → prev/next nav.
- **Styling:** Add new styles to `assets/css/style.css` rather than inline styles (except hero background images).

## Credits

See [CREDITS.md](CREDITS.md) for photo and video attribution.
