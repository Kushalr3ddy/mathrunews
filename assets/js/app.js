/* =====================================================================
   MSM TV NEWS — shared app logic: chrome, routing, rendering
   Pure client-side. No build step, no external JS dependencies.
   ===================================================================== */

/* ---------- helpers ---------- */
function el(html) { const d = document.createElement("div"); d.innerHTML = html.trim(); return d.firstElementChild; }
function qs(name) { return new URLSearchParams(location.search).get(name); }
function L(obj) { const lang = currentLang(); return (obj && (obj[lang] != null)) ? obj[lang] : (obj && obj.en) || ""; }
function esc(s) { return String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])); }
function getCat(id) { return MSM.categories.find(c => c.id === id) || { id, en: id, kn: id, color: "#555" }; }

const KN_MONTHS = ["ಜನವರಿ","ಫೆಬ್ರವರಿ","ಮಾರ್ಚ್","ಏಪ್ರಿಲ್","ಮೇ","ಜೂನ್","ಜುಲೈ","ಆಗಸ್ಟ್","ಸೆಪ್ಟೆಂಬರ್","ಅಕ್ಟೋಬರ್","ನವೆಂಬರ್","ಡಿಸೆಂಬರ್"];
const EN_MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
function fmtDate(iso) {
  const d = new Date(iso + "T00:00:00");
  if (isNaN(d)) return iso;
  const day = d.getDate(), y = d.getFullYear();
  return currentLang() === "kn" ? `${day} ${KN_MONTHS[d.getMonth()]} ${y}` : `${day} ${EN_MONTHS[d.getMonth()]} ${y}`;
}

/* live India Standard Time (correct for any visitor timezone) */
function istClockText() {
  const parts = {};
  new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Kolkata", year: "numeric", month: "numeric", day: "numeric",
    hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true
  }).formatToParts(new Date()).forEach(p => parts[p.type] = p.value);
  const months = currentLang() === "kn" ? KN_MONTHS : EN_MONTHS;
  const date = `${+parts.day} ${months[+parts.month - 1]} ${parts.year}`;
  const time = `${parts.hour}:${parts.minute}:${parts.second} ${(parts.dayPeriod || "").toUpperCase()}`;
  return `${date} · ${time} IST`;
}

/* ---------- brand logo (inline SVG, gold shield with mic + M) ---------- */
function msmLogo(size) {
  const h = size || 46;
  return `
  <svg viewBox="0 0 120 120" width="${h}" height="${h}" aria-hidden="true" class="msm-logo-mark">
    <defs>
      <linearGradient id="gold" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#f6d365"/><stop offset=".5" stop-color="#d4af37"/><stop offset="1" stop-color="#a9821f"/>
      </linearGradient>
    </defs>
    <path d="M60 6 L106 20 V60 C106 88 86 106 60 116 C34 106 14 88 14 60 V20 Z"
          fill="none" stroke="url(#gold)" stroke-width="5"/>
    <text x="60" y="82" text-anchor="middle" font-family="Georgia,serif" font-weight="700"
          font-size="62" fill="url(#gold)">M</text>
    <rect x="54" y="20" width="12" height="26" rx="6" fill="url(#gold)"/>
    <rect x="49" y="26" width="22" height="3" fill="#12224a"/>
    <rect x="49" y="32" width="22" height="3" fill="#12224a"/>
    <rect x="49" y="38" width="22" height="3" fill="#12224a"/>
    <rect x="57" y="46" width="6" height="12" fill="url(#gold)"/>
    <rect x="50" y="58" width="20" height="4" rx="2" fill="url(#gold)"/>
  </svg>`;
}

/* ---------- thumbnail: category photo + overlay (gradient as fallback) ---------- */
function thumb(cat, title, imgOverride) {
  const c = getCat(cat);
  const dark = shade(c.color, -32);
  const src = imgOverride || `assets/img/cat/${cat}.jpg`;
  return `
  <div class="thumb" style="background:linear-gradient(135deg,${c.color},${dark})">
    <img class="thumb-img" src="${src}" alt="${esc(L(c))}" loading="lazy" onerror="this.remove()">
    <span class="thumb-scrim"></span>
    <span class="thumb-cat">${esc(L(c))}</span>
    <span class="thumb-mark">MSM<b>TV</b></span>
  </div>`;
}
function shade(hex, pct) {
  const n = parseInt(hex.slice(1), 16);
  let r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
  r = Math.max(0, Math.min(255, r + pct)); g = Math.max(0, Math.min(255, g + pct)); b = Math.max(0, Math.min(255, b + pct));
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

/* ---------- article helpers ---------- */
function articleUrl(a) { return `article.html?id=${encodeURIComponent(a.id)}`; }
function categoryUrl(id) { return `category.html?cat=${encodeURIComponent(id)}`; }
function sortByDate(list) { return list.slice().sort((a, b) => (a.date < b.date ? 1 : -1)); }

function card(a, opts) {
  opts = opts || {};
  const c = getCat(a.cat);
  return `
  <a class="card ${opts.big ? "card-big" : ""}" href="${articleUrl(a)}">
    ${thumb(a.cat, L(a.title), a.img)}
    <div class="card-body">
      <span class="pill" style="--pc:${c.color}">${esc(L(c))}</span>
      <h3 class="card-title">${esc(L(a.title))}</h3>
      ${opts.excerpt !== false ? `<p class="card-excerpt">${esc(L(a.excerpt))}</p>` : ""}
      <div class="card-meta"><span>${esc(L(a.place))}</span><span aria-hidden="true">·</span><span>${fmtDate(a.date)}</span></div>
    </div>
  </a>`;
}

/* ---------- header / nav ---------- */
const NAV_MAIN = ["politics", "national", "business", "technology", "sports", "entertainment"];
const NAV_MORE = ["international", "culture", "health"];

function buildHeader(active) {
  const b = MSM.brand;
  const navItem = (id) => `<a class="nav-link ${active === id ? "is-active" : ""}" href="${categoryUrl(id)}">${esc(L(getCat(id)))}</a>`;
  const moreItems = NAV_MORE.map(navItem).join("");
  const host = document.getElementById("site-header");
  host.innerHTML = `
  <div class="topbar">
    <div class="wrap topbar-inner">
      <span class="topbar-date" id="istClock">${istClockText()}</span>
      <span class="topbar-tag">${esc(L(b.tagline))}</span>
      <div class="topbar-right">
        <a class="topbar-live" href="live.html"><span class="dot"></span>${esc(t("live"))}</a>
        <button class="lang-toggle" id="langToggle" type="button" aria-label="Switch language"></button>
      </div>
    </div>
  </div>
  <div class="masthead">
    <div class="wrap masthead-inner">
      <a class="brand" href="index.html" aria-label="MSM TV NEWS home">
        ${msmLogo(52)}
        <span class="brand-text">
          <span class="brand-msm">MSM<b>TV</b><i>NEWS</i></span>
          <span class="brand-co">${esc(L(b.company))}</span>
        </span>
      </a>
      <a class="mast-cta" href="advertise.html">${esc(t("nav_advertise"))}</a>
    </div>
  </div>
  <nav class="mainnav">
    <div class="wrap mainnav-inner">
      <button class="nav-burger" id="navBurger" aria-label="Menu" aria-expanded="false"><span></span><span></span><span></span></button>
      <div class="nav-links" id="navLinks">
        <a class="nav-link ${active === "home" ? "is-active" : ""}" href="index.html">${esc(t("nav_home"))}</a>
        ${NAV_MAIN.map(navItem).join("")}
        <div class="nav-dd">
          <button class="nav-link nav-dd-btn" type="button" aria-expanded="false">${esc(t("more"))} ▾</button>
          <div class="nav-dd-menu">${moreItems}</div>
        </div>
        <a class="nav-link ${active === "about" ? "is-active" : ""}" href="about.html">${esc(t("nav_about"))}</a>
        <a class="nav-link ${active === "contact" ? "is-active" : ""}" href="contact.html">${esc(t("nav_contact"))}</a>
        <a class="nav-link nav-live ${active === "live" ? "is-active" : ""}" href="live.html"><span class="dot"></span>${esc(t("nav_live"))}</a>
      </div>
    </div>
  </nav>`;

  // live IST clock
  if (!window.__istTimer) {
    window.__istTimer = setInterval(function () {
      const c = document.getElementById("istClock");
      if (c) c.textContent = istClockText();
    }, 1000);
  }

  // language toggle
  const lt = document.getElementById("langToggle");
  lt.textContent = currentLang() === "kn" ? "English" : "ಕನ್ನಡ";
  lt.addEventListener("click", () => {
    LangStore.set(currentLang() === "kn" ? "en" : "kn");
    location.reload();
  });

  // mobile burger
  const burger = document.getElementById("navBurger");
  const links = document.getElementById("navLinks");
  burger.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    burger.setAttribute("aria-expanded", open ? "true" : "false");
  });
  // dropdown (click on touch, hover on desktop via CSS)
  const ddBtn = host.querySelector(".nav-dd-btn");
  if (ddBtn) ddBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const dd = ddBtn.closest(".nav-dd");
    dd.classList.toggle("open");
  });
}

/* ---------- ticker ---------- */
function buildTicker() {
  const host = document.getElementById("ticker");
  if (!host) return;
  const items = MSM.breaking.map(b => `<span class="tick-item">${esc(L(b))}</span>`).join('<span class="tick-sep">✦</span>');
  host.innerHTML = `
    <span class="tick-label">${esc(t("breaking"))}</span>
    <div class="tick-viewport"><div class="tick-track">${items}<span class="tick-sep">✦</span>${items}</div></div>`;
}

/* ---------- footer ---------- */
function buildFooter() {
  const b = MSM.brand;
  const host = document.getElementById("site-footer");
  const year = new Date().getFullYear();
  const secLinks = MSM.categories.map(c => `<a href="${categoryUrl(c.id)}">${esc(L(c))}</a>`).join("");
  host.innerHTML = `
  <div class="wrap footer-inner">
    <div class="foot-brand">
      <div class="foot-logo">${msmLogo(46)}<span class="brand-msm">MSM<b>TV</b><i>NEWS</i></span></div>
      <p class="foot-tag">${esc(t("foot_tag"))}</p>
      <p class="foot-mission">${esc(L(b.mission))}</p>
      <div class="foot-social">
        <a href="#" aria-label="Facebook" title="Facebook">f</a>
        <a href="#" aria-label="YouTube" title="YouTube">▶</a>
        <a href="#" aria-label="X" title="X">𝕏</a>
        <a href="#" aria-label="Instagram" title="Instagram">◎</a>
        <a href="https://wa.me/${b.phoneRaw}" aria-label="WhatsApp" title="WhatsApp">✆</a>
      </div>
    </div>
    <div class="foot-col">
      <h4>${esc(t("foot_sections"))}</h4>
      <div class="foot-links">${secLinks}</div>
    </div>
    <div class="foot-col">
      <h4>${esc(t("foot_company"))}</h4>
      <div class="foot-links">
        <a href="about.html">${esc(t("nav_about"))}</a>
        <a href="live.html">${esc(t("nav_live"))}</a>
        <a href="advertise.html">${esc(t("nav_advertise"))}</a>
        <a href="contact.html">${esc(t("nav_contact"))}</a>
      </div>
    </div>
    <div class="foot-col">
      <h4>${esc(t("foot_connect"))}</h4>
      <div class="foot-links">
        <a href="tel:${b.phoneRaw}">${esc(b.phone)}</a>
        <a href="mailto:${b.email}">${esc(b.email)}</a>
        <span class="foot-addr">${esc(L(b.address))}</span>
      </div>
    </div>
  </div>
  <div class="footer-bar">
    <div class="wrap footer-bar-inner">
      <span>${esc(t("foot_disclaimer").replace("%Y%", year))}</span>
      <span class="foot-powered">${esc(t("foot_powered"))} · CIN ${esc(b.cin)}</span>
    </div>
  </div>`;
}

/* ---------- page chrome bootstrap ---------- */
function initChrome(active) {
  const lang = currentLang();
  document.documentElement.lang = lang;
  document.documentElement.setAttribute("dir", I18N[lang].dir);
  document.body.classList.toggle("lang-kn", lang === "kn");
  buildHeader(active);
  buildTicker();
  buildFooter();
}

/* =====================================================================
   PAGE RENDERERS
   ===================================================================== */

/* ---- Home ---- */
function renderHome() {
  const all = sortByDate(MSM.articles);
  const featured = all.filter(a => a.featured);
  const lead = featured[0] || all[0];
  const secondary = (featured.slice(1, 5).length ? featured.slice(1, 5) : all.slice(1, 5));

  // hero
  const hero = document.getElementById("home-hero");
  hero.innerHTML = `
    <a class="hero-lead" href="${articleUrl(lead)}">
      ${thumb(lead.cat, L(lead.title), lead.img)}
      <div class="hero-lead-body">
        <span class="pill" style="--pc:${getCat(lead.cat).color}">${esc(L(getCat(lead.cat)))}</span>
        <h2>${esc(L(lead.title))}</h2>
        <p>${esc(L(lead.excerpt))}</p>
        <div class="card-meta"><span>${esc(L(lead.place))}</span><span aria-hidden="true">·</span><span>${fmtDate(lead.date)}</span></div>
      </div>
    </a>
    <div class="hero-side">
      <h3 class="rail-title">${esc(t("top_stories"))}</h3>
      ${secondary.map(a => `
        <a class="side-item" href="${articleUrl(a)}">
          <span class="side-dot" style="background:${getCat(a.cat).color}"></span>
          <span>
            <span class="pill-min" style="color:${getCat(a.cat).color}">${esc(L(getCat(a.cat)))}</span>
            <span class="side-title">${esc(L(a.title))}</span>
          </span>
        </a>`).join("")}
    </div>`;

  // latest grid
  const grid = document.getElementById("home-latest");
  grid.innerHTML = all.slice(0, 6).map(a => card(a)).join("");

  // per-category rows
  const rows = document.getElementById("home-sections");
  const featuredCats = ["politics", "business", "sports", "entertainment", "technology", "health"];
  rows.innerHTML = featuredCats.map(cid => {
    const items = sortByDate(MSM.articles.filter(a => a.cat === cid)).slice(0, 3);
    if (!items.length) return "";
    const c = getCat(cid);
    return `
    <section class="cat-row">
      <div class="cat-row-head" style="--pc:${c.color}">
        <h3>${esc(L(c))}</h3>
        <a href="${categoryUrl(cid)}">${esc(t("view_all"))} →</a>
      </div>
      <div class="cards cards-3">${items.map(a => card(a)).join("")}</div>
    </section>`;
  }).join("");
}

/* ---- Category ---- */
function renderCategory() {
  const cid = qs("cat");
  const c = getCat(cid);
  const items = sortByDate(MSM.articles.filter(a => a.cat === cid));
  document.title = `${L(c)} · MSM TV NEWS`;
  const head = document.getElementById("cat-head");
  head.style.setProperty("--pc", c.color);
  head.innerHTML = `<span class="cat-kicker">${esc(t("all_in"))}</span><h1>${esc(L(c))}</h1>`;
  const wrap = document.getElementById("cat-list");
  if (!items.length) { wrap.innerHTML = `<p class="empty">${esc(t("no_stories"))}</p>`; return; }
  const [lead, ...rest] = items;
  wrap.innerHTML = `
    <div class="cat-lead">${card(lead, { big: true })}</div>
    <div class="cards cards-3">${rest.map(a => card(a)).join("")}</div>`;
}

/* ---- Article ---- */
function renderArticle() {
  const id = qs("id");
  const a = MSM.articles.find(x => x.id === id);
  const root = document.getElementById("article-root");
  if (!a) { root.innerHTML = `<p class="empty">${esc(t("no_stories"))}</p><p><a href="index.html">← ${esc(t("back_home"))}</a></p>`; return; }
  const c = getCat(a.cat);
  document.title = `${L(a.title)} · MSM TV NEWS`;
  const body = L(a.body).map(p => `<p>${esc(p)}</p>`).join("");
  const shareUrl = encodeURIComponent(location.href);
  const shareTxt = encodeURIComponent(L(a.title) + " — MSM TV NEWS");
  root.innerHTML = `
    <nav class="crumbs"><a href="index.html">${esc(t("nav_home"))}</a> › <a href="${categoryUrl(a.cat)}">${esc(L(c))}</a></nav>
    <span class="pill" style="--pc:${c.color}">${esc(L(c))}</span>
    <h1 class="art-title">${esc(L(a.title))}</h1>
    <div class="art-meta">
      <span>${esc(L(a.place))}</span><span aria-hidden="true">·</span>
      <span>${esc(t("published"))} ${fmtDate(a.date)}</span>
    </div>
    ${thumb(a.cat, L(a.title), a.img)}
    <div class="art-body">${body}</div>
    <div class="art-share">
      <span>${esc(t("share"))}:</span>
      <a href="https://wa.me/?text=${shareTxt}%20${shareUrl}" target="_blank" rel="noopener">WhatsApp</a>
      <a href="https://twitter.com/intent/tweet?text=${shareTxt}&url=${shareUrl}" target="_blank" rel="noopener">X</a>
      <a href="https://www.facebook.com/sharer/sharer.php?u=${shareUrl}" target="_blank" rel="noopener">Facebook</a>
    </div>`;
  const rel = document.getElementById("article-related");
  const related = sortByDate(MSM.articles.filter(x => x.cat === a.cat && x.id !== a.id)).slice(0, 3);
  const pool = related.length ? related : sortByDate(MSM.articles.filter(x => x.id !== a.id)).slice(0, 3);
  rel.innerHTML = `<h3 class="rail-title">${esc(t("related"))}</h3><div class="cards cards-3">${pool.map(x => card(x)).join("")}</div>`;
}
