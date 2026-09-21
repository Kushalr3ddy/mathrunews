/* =====================================================================
   MSM TV NEWS — site logic. Pure client-side, no dependencies.
   Pages: index (landing) · about.html · contact.html
   ===================================================================== */

/* ---------- helpers ---------- */
function L(obj) { const lang = currentLang(); return (obj && (obj[lang] != null)) ? obj[lang] : (obj && obj.en) || ""; }
function esc(s) { return String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])); }
function getCat(id) { return MSM.categories.find(c => c.id === id) || { id, en: id, kn: id, color: "#555" }; }

const KN_MONTHS = ["ಜನವರಿ","ಫೆಬ್ರವರಿ","ಮಾರ್ಚ್","ಏಪ್ರಿಲ್","ಮೇ","ಜೂನ್","ಜುಲೈ","ಆಗಸ್ಟ್","ಸೆಪ್ಟೆಂಬರ್","ಅಕ್ಟೋಬರ್","ನವೆಂಬರ್","ಡಿಸೆಂಬರ್"];
const EN_MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

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
      <linearGradient id="gold${h}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#f6d365"/><stop offset=".5" stop-color="#d4af37"/><stop offset="1" stop-color="#a9821f"/>
      </linearGradient>
    </defs>
    <path d="M60 6 L106 20 V60 C106 88 86 106 60 116 C34 106 14 88 14 60 V20 Z"
          fill="none" stroke="url(#gold${h})" stroke-width="5"/>
    <text x="60" y="82" text-anchor="middle" font-family="Georgia,serif" font-weight="700"
          font-size="62" fill="url(#gold${h})">M</text>
    <rect x="54" y="20" width="12" height="26" rx="6" fill="url(#gold${h})"/>
    <rect x="49" y="26" width="22" height="3" fill="#12224a"/>
    <rect x="49" y="32" width="22" height="3" fill="#12224a"/>
    <rect x="49" y="38" width="22" height="3" fill="#12224a"/>
    <rect x="57" y="46" width="6" height="12" fill="url(#gold${h})"/>
    <rect x="50" y="58" width="20" height="4" rx="2" fill="url(#gold${h})"/>
  </svg>`;
}

function shade(hex, pct) {
  const n = parseInt(hex.slice(1), 16);
  let r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
  r = Math.max(0, Math.min(255, r + pct)); g = Math.max(0, Math.min(255, g + pct)); b = Math.max(0, Math.min(255, b + pct));
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
function orbs() {
  return '<div class="orbs" aria-hidden="true"><span class="orb o1"></span><span class="orb o2"></span><span class="orb o3"></span></div>';
}
function coverageCard(cat) {
  const c = getCat(cat.id), dark = shade(c.color, -32);
  return `
  <div class="cov-card" style="background:linear-gradient(135deg,${c.color},${dark})">
    <img class="cov-img" src="assets/img/cat/${c.id}.jpg" alt="${esc(L(c))}" loading="lazy" onerror="this.remove()">
    <span class="cov-scrim"></span><span class="cov-label">${esc(L(c))}</span>
  </div>`;
}

/* ---------- header / nav ---------- */
const NAV = [
  ["index.html", "nav_home", "home"],
  ["about.html", "nav_about", "about"],
  ["coverage.html", "nav_coverage", "coverage"],
  ["advertise.html", "nav_advertise", "advertise"],
  ["contact.html", "nav_contact", "contact"]
];
function buildHeader(active) {
  const b = MSM.brand;
  const host = document.getElementById("site-header");
  host.innerHTML = `
  <div class="topbar">
    <div class="wrap topbar-inner">
      <span class="topbar-date" id="istClock">${istClockText()}</span>
      <span class="topbar-tag">${esc(L(b.tagline))}</span>
      <div class="topbar-right">
        <span class="topbar-live"><span class="dot"></span>${esc(t("launching"))}</span>
        <button class="lang-toggle" id="langToggle" type="button" aria-label="Switch language"></button>
      </div>
    </div>
  </div>
  <div class="masthead">
    <div class="wrap masthead-inner">
      <a class="brand" href="index.html" aria-label="MSM TV NEWS">
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
        ${NAV.map(n => `<a class="nav-link ${active === n[2] && n[2] ? "is-active" : ""}" href="${n[0]}">${esc(t(n[1]))}</a>`).join("")}
      </div>
    </div>
  </nav>`;

  if (!window.__istTimer) {
    window.__istTimer = setInterval(() => { const c = document.getElementById("istClock"); if (c) c.textContent = istClockText(); }, 1000);
  }
  const lt = document.getElementById("langToggle");
  lt.textContent = currentLang() === "kn" ? "English" : "ಕನ್ನಡ";
  lt.addEventListener("click", () => { LangStore.set(currentLang() === "kn" ? "en" : "kn"); location.reload(); });
  const burger = document.getElementById("navBurger"), links = document.getElementById("navLinks");
  burger.addEventListener("click", () => { const o = links.classList.toggle("open"); burger.setAttribute("aria-expanded", o ? "true" : "false"); });
  links.querySelectorAll("a").forEach(a => a.addEventListener("click", () => links.classList.remove("open")));
}

/* ---------- ticker ---------- */
function buildTicker() {
  const host = document.getElementById("ticker");
  if (!host) return;
  const items = MSM.announcements.map(x => `<span class="tick-item">${esc(L(x))}</span>`).join('<span class="tick-sep">✦</span>');
  host.innerHTML = `<span class="tick-label">${esc(t("updates"))}</span>
    <div class="tick-viewport"><div class="tick-track">${items}<span class="tick-sep">✦</span>${items}</div></div>`;
}

/* ---------- footer ---------- */
function buildFooter() {
  const b = MSM.brand, host = document.getElementById("site-footer"), year = new Date().getFullYear();
  host.innerHTML = `
  <div class="wrap footer-inner">
    <div class="foot-brand">
      <div class="foot-logo">${msmLogo(46)}<span class="brand-msm">MSM<b>TV</b><i>NEWS</i></span></div>
      <p class="foot-tag">${esc(t("foot_tag"))}</p>
      <p class="foot-mission">${esc(L(b.mission))}</p>
      ${socialRow(b)}
    </div>
    <div class="foot-col">
      <h4>${esc(t("foot_sections"))}</h4>
      <div class="foot-links">${NAV.map(n => `<a href="${n[0]}">${esc(t(n[1]))}</a>`).join("")}</div>
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

/* ---------- chrome bootstrap ---------- */
function initChrome(active) {
  const lang = currentLang();
  document.documentElement.lang = lang;
  document.documentElement.setAttribute("dir", I18N[lang].dir);
  document.body.classList.toggle("lang-kn", lang === "kn");
  buildHeader(active);
  buildTicker();
  buildFooter();
}

/* ---------- shared pieces ---------- */
function inspirationSection() {
  return `
  <section class="section section-alt" id="inspiration">
    <div class="wrap insp-wrap">
      <div class="insp-photo">
        <img src="assets/img/inspiration.jpg" alt="${esc(t("insp_name"))}" loading="lazy">
        <span class="insp-cap">${esc(t("insp_name"))}</span>
      </div>
      <div class="insp-text">
        <span class="sec-kicker">${esc(t("insp_h"))}</span>
        <h2>${esc(t("insp_name"))}</h2>
        <p class="insp-role">${esc(t("insp_role"))}</p>
        <p>${esc(t("insp_body"))}</p>
        <blockquote class="insp-quote">${esc(t("insp_quote"))}<cite>— ${esc(t("insp_name"))}</cite></blockquote>
      </div>
    </div>
  </section>`;
}
function valuesGrid() {
  const lang = currentLang();
  const values = [
    { en: ["Fair", "Balanced reporting, every side heard."], kn: ["ನ್ಯಾಯ", "ಸಮತೋಲಿತ ವರದಿ, ಎಲ್ಲ ಕಡೆಯ ಧ್ವನಿ."] },
    { en: ["Fast", "Breaking news the moment it happens."], kn: ["ವೇಗ", "ಘಟನೆ ನಡೆದ ಕ್ಷಣವೇ ಸುದ್ದಿ."] },
    { en: ["Fearless", "Journalism without fear or favour."], kn: ["ನಿರ್ಭೀತ", "ಭಯ, ಪಕ್ಷಪಾತವಿಲ್ಲದ ಪತ್ರಿಕೋದ್ಯಮ."] },
    { en: ["Trusted", "Truth, trust and transparency."], kn: ["ವಿಶ್ವಾಸಾರ್ಹ", "ಸತ್ಯ, ವಿಶ್ವಾಸ, ಪಾರದರ್ಶಕತೆ."] }
  ];
  return `<div class="values-grid">${values.map(v => { const x = lang === "kn" ? v.kn : v.en; return `<div class="vcard"><b>${esc(x[0])}</b><span>${esc(x[1])}</span></div>`; }).join("")}</div>`;
}
function corporateTable() {
  const b = MSM.brand, lang = currentLang();
  const corp = [
    [lang === "kn" ? "ಕಂಪನಿ" : "Company", L(b.company)],
    ["CIN", b.cin],
    [lang === "kn" ? "ನೋಂದಣಿ ಸಂಖ್ಯೆ" : "Registration No.", b.regNo],
    [lang === "kn" ? "ಸ್ಥಾಪನೆ ದಿನಾಂಕ" : "Date of Incorporation", L(b.incorp)],
    [lang === "kn" ? "ಸ್ಥಿತಿ" : "Status", '<span class="badge-active">' + L(b.status) + '</span>'],
    [lang === "kn" ? "ವರ್ಗ" : "Class", L(b.classType)],
    ["ROC", L(b.roc)],
    [lang === "kn" ? "ಅಧಿಕೃತ ಬಂಡವಾಳ" : "Authorised Capital", b.authCapital],
    [lang === "kn" ? "ಪಾವತಿ ಬಂಡವಾಳ" : "Paid-up Capital", b.paidCapital],
    [t("address_label"), L(b.address)]
  ];
  return `<table class="corp">${corp.map(r => `<tr><th>${r[0]}</th><td>${r[1]}</td></tr>`).join("")}</table>`;
}
function ctaBand() {
  return `
  <section class="section cta-band">
    <div class="wrap cta-inner">
      <div>
        <h2>${esc(t("cta_band_h"))}</h2>
        <p>${esc(t("cta_band_sub"))}</p>
      </div>
      <div class="cta-actions">
        <a class="btn-gold" href="advertise.html">${esc(t("nav_advertise"))}</a>
        <a class="btn-ghost" href="contact.html">${esc(t("cta_contact"))}</a>
      </div>
    </div>
  </section>`;
}
function contactInfoCard() {
  const b = MSM.brand;
  return contactItem("✆", t("call_us"), '<a href="tel:' + b.phoneRaw + '">' + esc(b.phone) + '</a>') +
    contactItem("✉", t("email_us"), '<a href="mailto:' + b.email + '">' + esc(b.email) + '</a>') +
    contactItem("⌖", t("address_label"), '<span>' + esc(L(b.address)) + '</span>') +
    contactItem("◷", "24 × 7", '<span>' + esc(t("hours")) + '</span>') +
    contactItem("♺", t("follow"), socialRow(b));
}

/* =====================================================================
   PAGE: LANDING
   ===================================================================== */
function renderLanding() {
  const b = MSM.brand;
  const stats = [["stat_1n","stat_1l"],["stat_2n","stat_2l"],["stat_3n","stat_3l"],["stat_4n","stat_4l"]];
  const why = [["r_reach","r_reach_d"],["r_impact","r_impact_d"],["r_trust","r_trust_d"],["r_team","r_team_d"],["r_cover","r_cover_d"],["r_fast","r_fast_d"]];
  const checkSvg = '<svg viewBox="0 0 24 24" class="why-ic" aria-hidden="true"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  document.getElementById("app").innerHTML = `
  <section class="hero" id="home">
    <div class="hero-glow"></div>
    ${orbs()}
    <div class="wrap hero-inner">
      <div class="hero-logo">${msmLogo(96)}</div>
      <span class="hero-kicker">${esc(t("hero_kicker"))}</span>
      <h1 class="hero-brand">MSM<b>TV</b><i>NEWS</i></h1>
      <div class="soon-badge"><span class="dot"></span>${esc(t("hero_soon"))}</div>
      <p class="hero-sub">${esc(t("hero_sub"))}</p>
      <div class="hero-cta">
        <a class="btn-gold" href="index.html#advertise">${esc(t("cta_advertise"))}</a>
        <a class="btn-ghost" href="contact.html">${esc(t("cta_contact"))}</a>
      </div>
      <div class="hero-values">${esc(L(b.values))}</div>
      <a class="hero-scroll" href="#stats">${esc(t("scroll"))} ↓</a>
    </div>
  </section>

  <section class="stats" id="stats">
    <div class="wrap">
      <h2 class="stats-h">${esc(t("stats_h"))}</h2>
      <div class="stats-grid">
        ${stats.map(s => `<div class="stat"><b>${esc(t(s[0]))}</b><span>${esc(t(s[1]))}</span></div>`).join("")}
      </div>
    </div>
  </section>

  <section class="section" id="coverage">
    <div class="wrap">
      <div class="sec-head"><span class="sec-kicker">${esc(t("hero_kicker"))}</span><h2>${esc(t("coverage_h"))}</h2><p>${esc(t("coverage_sub"))}</p></div>
      <div class="cov-grid">${MSM.categories.map(coverageCard).join("")}</div>
      <div class="sec-cta"><a class="btn-outline" href="coverage.html">${esc(t("view_coverage"))} →</a></div>
    </div>
  </section>

  <section class="section section-alt2" id="why">
    <div class="wrap">
      <div class="sec-head"><h2>${esc(t("why_h"))}</h2><p>${esc(t("why_sub"))}</p></div>
      <div class="why-grid">${why.map(w => `<div class="why-card">${checkSvg}<div><b>${esc(t(w[0]))}</b><span>${esc(t(w[1]))}</span></div></div>`).join("")}</div>
    </div>
  </section>

  ${inspirationSection()}

  ${ctaBand()}`;
}

/* =====================================================================
   PAGE: ABOUT
   ===================================================================== */
function renderAbout() {
  const b = MSM.brand, lang = currentLang();
  const whoEn = "MSM TV NEWS is the flagship channel of " + L(b.company) + ", a Karnataka-based media company headquartered in Bengaluru. We are building a 24×7 global news platform for television and digital — covering politics, national and international affairs, business, technology, sports, entertainment, culture and health. Rooted locally and looking outward, our newsroom is designed to bring credible, fast and fearless journalism to every screen our audience is on.";
  const whoKn = "ಎಂಎಸ್‌ಎಂ ಟಿವಿ ನ್ಯೂಸ್ ಎಂಬುದು ಬೆಂಗಳೂರು ಕೇಂದ್ರಿತ " + L(b.company) + " ಕಂಪನಿಯ ಪ್ರಮುಖ ವಾಹಿನಿ. ರಾಜಕೀಯ, ರಾಷ್ಟ್ರೀಯ ಮತ್ತು ಅಂತಾರಾಷ್ಟ್ರೀಯ ವಿದ್ಯಮಾನ, ವಾಣಿಜ್ಯ, ತಂತ್ರಜ್ಞಾನ, ಕ್ರೀಡೆ, ಮನರಂಜನೆ, ಸಂಸ್ಕೃತಿ ಮತ್ತು ಆರೋಗ್ಯವನ್ನು ಒಳಗೊಂಡ 24×7 ಜಾಗತಿಕ ಸುದ್ದಿ ವೇದಿಕೆಯನ್ನು ನಾವು ರೂಪಿಸುತ್ತಿದ್ದೇವೆ — ಟಿವಿ ಮತ್ತು ಡಿಜಿಟಲ್‌ನಲ್ಲಿ. ಸ್ಥಳೀಯವಾಗಿ ಬೇರೂರಿ, ಜಗತ್ತಿನತ್ತ ದೃಷ್ಟಿಯಿಟ್ಟು, ವಿಶ್ವಾಸಾರ್ಹ, ವೇಗದ ಮತ್ತು ನಿರ್ಭೀತ ಪತ್ರಿಕೋದ್ಯಮವನ್ನು ಪ್ರತಿ ಪರದೆಗೆ ತಲುಪಿಸುವುದೇ ನಮ್ಮ ಗುರಿ.";

  document.getElementById("app").innerHTML = `
  <section class="page-hero">${orbs()}
    <div class="wrap"><h1>${esc(t("about_h"))}</h1><p>${esc(t("about_sub"))}</p></div>
  </section>
  <section class="section">
    <div class="wrap about-wrap">
      <div class="about-main">
        <h3 class="mini-h">${esc(t("about_who"))}</h3>
        <p class="lead">${esc(lang === "kn" ? whoKn : whoEn)}</p>
        <h3 class="mini-h">${esc(t("about_mission_h"))}</h3>
        <p>${esc(L(b.mission))} — ${esc(L(b.tagline))}.</p>
        <h3 class="mini-h">${esc(t("about_vision_h"))}</h3>
        <p>${esc(t("about_vision"))}</p>
        <h3 class="mini-h">${esc(t("about_promise_h"))}</h3>
        <p>${esc(t("about_promise"))}</p>
        <h3 class="mini-h">${esc(t("about_values_h"))}</h3>
        ${valuesGrid()}
      </div>
      <aside class="about-side">
        <h3 class="mini-h">${esc(t("corporate_h"))}</h3>
        ${corporateTable()}
      </aside>
    </div>
  </section>
  ${inspirationSection()}`;
}

/* =====================================================================
   PAGE: CONTACT
   ===================================================================== */
function renderContact() {
  const lang = currentLang();
  const faq = I18N[lang].faq || I18N.en.faq;

  document.getElementById("app").innerHTML = `
  <section class="page-hero">${orbs()}
    <div class="wrap"><h1>${esc(t("contact_h"))}</h1><p>${esc(t("contact_page_sub"))}</p></div>
  </section>
  <section class="section">
    <div class="wrap two-col">
      <div class="contact-card" id="ct-info"></div>
      <div class="contact-card">
        <h3 class="mini-h" style="margin-top:0">${esc(t("send_msg_h"))}</h3>
        <form class="msm-form" id="ct-form"></form>
      </div>
    </div>
    <div class="map-wrap">
      <h3 class="mini-h">${esc(t("find_us"))}</h3>
      <iframe class="map-embed" title="MSM TV NEWS location"
        src="https://www.google.com/maps?q=${encodeURIComponent("277/A, 6th Cross, Jayanagar 3rd Block, Bangalore South, Bengaluru, Karnataka 560011")}&output=embed"
        loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </section>
  <section class="section section-alt2">
    <div class="wrap faq-wrap">
      <div class="sec-head"><h2>${esc(t("faq_h"))}</h2></div>
      <div class="faq-list">
        ${faq.map(q => `<details class="faq-item"><summary>${esc(q[0])}</summary><p>${esc(q[1])}</p></details>`).join("")}
      </div>
    </div>
  </section>
  ${ctaBand()}`;

  document.getElementById("ct-info").innerHTML = contactInfoCard();
  buildForm("ct-form", t("contact_h"));
}

/* =====================================================================
   PAGE: COVERAGE
   ===================================================================== */
function renderCoverage() {
  const rows = MSM.categories.map((c, i) => `
    <div class="beat ${i % 2 ? "beat-rev" : ""}">
      <div class="beat-photo">${coverageCard(c)}</div>
      <div class="beat-text">
        <h3>${esc(L(c))}</h3>
        <p>${esc(L(c.desc))}</p>
      </div>
    </div>`).join("");
  document.getElementById("app").innerHTML = `
  <section class="page-hero">${orbs()}
    <div class="wrap"><h1>${esc(t("coverage_h"))}</h1><p>${esc(t("coverage_page_sub"))}</p></div>
  </section>
  <section class="section"><div class="wrap beat-list">${rows}</div></section>
  ${ctaBand()}`;
}

/* =====================================================================
   PAGE: ADVERTISE
   ===================================================================== */
function renderAdvertise() {
  const lang = currentLang();
  const formats = I18N[lang].formats || I18N.en.formats;
  const why = [["r_reach", "r_reach_d"], ["r_impact", "r_impact_d"], ["r_trust", "r_trust_d"], ["r_cover", "r_cover_d"]];
  const checkSvg = '<svg viewBox="0 0 24 24" class="why-ic" aria-hidden="true"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  document.getElementById("app").innerHTML = `
  <section class="page-hero">${orbs()}
    <div class="wrap"><h1>${esc(t("advertise_h"))}</h1><p>${esc(t("advertise_sub"))}</p></div>
  </section>

  <section class="section">
    <div class="wrap">
      <p class="lead center-lead">${esc(t("adv_intro"))}</p>
      <div class="sec-head"><h2>${esc(t("adv_why_h"))}</h2></div>
      <div class="why-grid why-grid-4">${why.map(w => `<div class="why-card">${checkSvg}<div><b>${esc(t(w[0]))}</b><span>${esc(t(w[1]))}</span></div></div>`).join("")}</div>
    </div>
  </section>

  <section class="section section-alt2">
    <div class="wrap">
      <div class="sec-head"><h2>${esc(t("adv_formats_h"))}</h2></div>
      <div class="fmt-grid">
        ${formats.map((f, i) => `<div class="fmt-card"><span class="fmt-num">${String(i + 1).padStart(2, "0")}</span><b>${esc(f[0])}</b><span class="fmt-d">${esc(f[1])}</span></div>`).join("")}
      </div>
      <p class="adv-timing">${esc(t("adv_timing"))}</p>
    </div>
  </section>

  <section class="section section-dark" id="enquire">
    <div class="wrap two-col">
      <div>
        <div class="sec-head left light"><h2>${esc(t("adv_enquire_h"))}</h2><p>${esc(t("advertise_sub"))}</p></div>
        <div class="adv-reasons">${["r_reach", "r_impact", "r_trust", "r_team", "r_cover", "r_fast"].map(r => `<span class="adv-pill">${esc(t(r))}</span>`).join("")}</div>
      </div>
      <div class="contact-card"><form class="msm-form" id="ad-form"></form></div>
    </div>
  </section>`;

  buildForm("ad-form", t("advertise_h"));
}
