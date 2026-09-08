# MSM TV NEWS — website

A fully static, client-side website for **MSM TV NEWS**, the news channel of
**Matru Smruthi Media Private Limited** (a Karnataka-based company, Bengaluru).
Built to be hosted on **GitHub Pages** — no server, no build step, no dependencies.

- Bilingual: **English + Kannada** (toggle in the top bar, remembered per browser)
- Multi-page: Home, category pages, article pages, Live TV, About, Contact, Advertise
- Breaking-news ticker, featured/lead stories, per-category rows
- Contact & advertise forms open the visitor's email app (`mailto:`) — nothing is stored

## Run locally

Any static file server works. For example:

```bash
python3 -m http.server 8080
```

Then open http://localhost:8080

## Deploy to GitHub Pages

1. Create a repo and push these files to the default branch (e.g. `main`).
2. Repo **Settings → Pages → Build and deployment**: Source = *Deploy from a branch*,
   Branch = `main`, folder = `/ (root)`.
3. Your site goes live at `https://<user>.github.io/<repo>/`.

```bash
git init
git add .
git commit -m "MSM TV NEWS site"
git branch -M main
git remote add origin https://github.com/<user>/<repo>.git
git push -u origin main
```

`.nojekyll` is included so the `assets/` folder is served as-is.

## Editing content

Everything lives in plain files — no CMS needed.

| What | File |
|------|------|
| News articles (bilingual) | `assets/js/data.js` → `MSM.articles` |
| Breaking ticker items | `assets/js/data.js` → `MSM.breaking` |
| Categories / sections | `assets/js/data.js` → `MSM.categories` |
| Brand info, phone, email, corporate details | `assets/js/data.js` → `MSM.brand` |
| UI labels (EN/KN) | `assets/js/i18n.js` |
| Look & feel (colours, fonts) | `assets/css/style.css` (`:root` variables at top) |

### Add an article

Add an object to `MSM.articles` in `assets/js/data.js`:

```js
{
  id: "p3", cat: "politics", date: "2026-09-10", featured: false,
  place: { en: "Belagavi", kn: "ಬೆಳಗಾವಿ" },
  title:   { en: "…", kn: "…" },
  excerpt: { en: "…", kn: "…" },
  body:    { en: ["para 1", "para 2"], kn: ["…", "…"] }
}
```

`cat` must be one of the ids in `MSM.categories`. Set `featured: true` to make it
eligible for the home hero.

### Images

Each story shows a photo based on its category, from `assets/img/cat/<category>.jpg`
(e.g. `sports.jpg`, `technology.jpg`). To give one story its own photo, add an
`img` field to the article, e.g. `img: "assets/img/mystory.jpg"`.

The bundled category photos are free-to-use stock images from **Unsplash**
(Unsplash License — free for commercial use, no attribution required). They are
**topical placeholders** — replace them with the channel's own photography/footage
stills before production by overwriting the files in `assets/img/cat/` (keep the
same filenames, 16:9 ratio). If a photo ever fails to load, the card falls back to
a category-coloured gradient automatically.

## Notes

- The **24×7 LIVE** page shows a "launching soon" placeholder. To go live, embed a
  YouTube live URL inside `#lv-screen` in `live.html`.
- Corporate facts on the About page (CIN, incorporation date, capital, registered
  office) are verified from public MCA records. Director names are intentionally
  **not** published.
- Article content shipped here is **sample/placeholder** for launch — replace with
  real reporting.
