# MSM TV NEWS — launch site

A single-page, fully static **"launching soon" site** for **MSM TV NEWS**, the
news channel of **Matru Smruthi Media Private Limited** (a Karnataka-based
company, Bengaluru). Built for **GitHub Pages** — no server, no build step, no
dependencies.

Live: **https://kushalr3ddy.github.io/mathrunews/**

- Clean URLs: each page is a folder with an `index.html`, so it serves at
  `/about/`, `/coverage/`, `/advertise/`, `/contact/` (no `.html`). A base-path
  variable (`window.MSM_BASE`) keeps every asset/link resolving from any depth.
- Bilingual: **English + Kannada** (toggle in the top bar, remembered per browser)
- Sections: launch hero · coverage areas · why choose us · about + corporate info · advertise · contact
- Live **IST clock** and a rolling launch-updates ticker
- No news feed — this is a promotional/landing site until the channel goes live
- Contact & advertise forms open the visitor's email app (`mailto:`) — nothing is stored

## Run locally

```bash
python3 -m http.server 8080
```

Then open http://localhost:8080

## Deploy / update

The repo is already on GitHub Pages. To publish changes:

```bash
git add -A && git commit -m "update" && git push
```

Pages rebuilds automatically in ~1 minute. `.nojekyll` is included so `assets/`
is served as-is.

## Editing content

Everything lives in plain files — no CMS needed.

| What | File |
|------|------|
| Brand, phone, email, corporate details | `assets/js/data.js` → `MSM.brand` |
| Launch-ticker messages | `assets/js/data.js` → `MSM.announcements` |
| Coverage areas | `assets/js/data.js` → `MSM.categories` |
| All UI / section text (EN + KN) | `assets/js/i18n.js` |
| Page structure & sections | `assets/js/app.js` → `renderLanding()` |
| Look & feel (colours, fonts) | `assets/css/style.css` (`:root` variables at top) |

### Coverage images

Each coverage tile uses `assets/img/cat/<id>.jpg` (e.g. `sports.jpg`). They are
free-to-use **Unsplash** stock photos (Unsplash License — commercial use, no
attribution) used as **topical placeholders**; replace them with the channel's
own photography before the real launch (keep the filenames, ~4:3 ratio). If a
photo fails to load, the tile falls back to a category-coloured gradient.

## Notes

- Corporate facts (CIN, incorporation date, capital, registered office) are
  verified from public MCA records.
- **To do before launch:** real social links (currently `#`), optionally a live
  stream / countdown, and swapping placeholder coverage photos for owned imagery.
