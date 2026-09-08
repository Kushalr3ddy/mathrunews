/* =====================================================================
   MSM TV NEWS — content data (bilingual: English + Kannada)
   All articles below are SAMPLE / placeholder content for launch.
   Replace with real reporting from the CMS/editor as it comes in.
   ===================================================================== */

const MSM = {
  brand: {
    company:   { en: "Mathru Smruthi Media Private Limited", kn: "ಮಾತೃ ಸ್ಮೃತಿ ಮೀಡಿಯಾ ಪ್ರೈವೇಟ್ ಲಿಮಿಟೆಡ್" },
    channel:   "MSM TV NEWS",
    tagline:   { en: "Voice of Truth · Vision of Future", kn: "ಸತ್ಯದ ಧ್ವನಿ · ಭವಿಷ್ಯದ ದೃಷ್ಟಿ" },
    mission:   { en: "Your News · Your Voice · Our Mission", kn: "ನಿಮ್ಮ ಸುದ್ದಿ · ನಿಮ್ಮ ಧ್ವನಿ · ನಮ್ಮ ಧ್ಯೇಯ" },
    promise:   { en: "Bringing truth to light and stories to life.", kn: "ಸತ್ಯವನ್ನು ಬೆಳಕಿಗೆ, ಕಥೆಗಳನ್ನು ಜೀವಂತಗೊಳಿಸುತ್ತೇವೆ." },
    values:    { en: "Fair · Fast · Fearless · Trusted", kn: "ನ್ಯಾಯ · ವೇಗ · ನಿರ್ಭೀತ · ವಿಶ್ವಾಸಾರ್ಹ" },
    phone:     "+91 94827 90007",
    phoneRaw:  "919482790007",
    email:     "MSMTVNEWSchannel@gmail.com",
    // Public corporate identity — verified from MCA records (ZaubaCorp), Sep 2026
    cin:       "U73100KA2026PTC221419",
    regNo:     "221419",
    incorp:    { en: "22 May 2026", kn: "22 ಮೇ 2026" },
    status:    { en: "Active", kn: "ಸಕ್ರಿಯ" },
    roc:       { en: "RoC — Bangalore, Karnataka", kn: "ಆರ್‌ಒಸಿ — ಬೆಂಗಳೂರು, ಕರ್ನಾಟಕ" },
    classType: { en: "Private · Non-government company · Limited by shares", kn: "ಖಾಸಗಿ · ಸರ್ಕಾರೇತರ ಕಂಪನಿ · ಷೇರುಗಳಿಂದ ಸೀಮಿತ" },
    authCapital: "₹ 10,00,000",
    paidCapital: "₹ 1,00,000",
    address:   {
      en: "No. 277/A, 1st Floor, 6th Cross, Jayanagar 3rd Block, Bangalore South, Bengaluru, Karnataka – 560011",
      kn: "ನಂ. 277/ಎ, 1ನೇ ಮಹಡಿ, 6ನೇ ಕ್ರಾಸ್, ಜಯನಗರ 3ನೇ ಬ್ಲಾಕ್, ಬೆಂಗಳೂರು ದಕ್ಷಿಣ, ಬೆಂಗಳೂರು, ಕರ್ನಾಟಕ – 560011"
    }
  },

  categories: [
    { id: "politics",      en: "Politics",       kn: "ರಾಜಕೀಯ",        color: "#b8342b" },
    { id: "national",      en: "National",       kn: "ರಾಷ್ಟ್ರೀಯ",     color: "#c0631f" },
    { id: "international",  en: "International",  kn: "ಅಂತಾರಾಷ್ಟ್ರೀಯ", color: "#1f6f8b" },
    { id: "business",      en: "Business",       kn: "ವಾಣಿಜ್ಯ",       color: "#1e7a4d" },
    { id: "technology",    en: "Technology",     kn: "ತಂತ್ರಜ್ಞಾನ",     color: "#4b3fa6" },
    { id: "sports",        en: "Sports",         kn: "ಕ್ರೀಡೆ",         color: "#0e7c86" },
    { id: "entertainment", en: "Entertainment",  kn: "ಮನರಂಜನೆ",       color: "#a5257c" },
    { id: "culture",       en: "Culture",        kn: "ಸಂಸ್ಕೃತಿ",       color: "#9c6b1a" },
    { id: "health",        en: "Health",         kn: "ಆರೋಗ್ಯ",        color: "#2f7d32" }
  ],

  /* Breaking-news ticker items */
  breaking: [
    { en: "Cabinet clears new irrigation package for North Karnataka districts", kn: "ಉತ್ತರ ಕರ್ನಾಟಕ ಜಿಲ್ಲೆಗಳಿಗೆ ಹೊಸ ನೀರಾವರಿ ಪ್ಯಾಕೇಜ್‌ಗೆ ಸಂಪುಟ ಒಪ್ಪಿಗೆ" },
    { en: "Bengaluru Metro Phase-3 tender process to begin next month", kn: "ಬೆಂಗಳೂರು ಮೆಟ್ರೋ ಹಂತ-3 ಟೆಂಡರ್ ಪ್ರಕ್ರಿಯೆ ಮುಂದಿನ ತಿಂಗಳು ಆರಂಭ" },
    { en: "IMD forecasts heavy rain across coastal Karnataka for 48 hours", kn: "ಕರಾವಳಿ ಕರ್ನಾಟಕದಲ್ಲಿ 48 ಗಂಟೆ ಭಾರೀ ಮಳೆ — ಹವಾಮಾನ ಇಲಾಖೆ ಮುನ್ಸೂಚನೆ" },
    { en: "State startups raise record funding in the first half of the year", kn: "ವರ್ಷದ ಮೊದಲಾರ್ಧದಲ್ಲಿ ರಾಜ್ಯದ ಸ್ಟಾರ್ಟಪ್‌ಗಳಿಂದ ದಾಖಲೆ ಬಂಡವಾಳ ಸಂಗ್ರಹ" }
  ],

  /*  articles ---------------------------------------------------------
      id, cat, date (YYYY-MM-DD), featured, place{en,kn},
      title{en,kn}, excerpt{en,kn}, body{en:[..], kn:[..]}                 */
  articles: [
    {
      id: "p1", cat: "politics", date: "2026-09-08", featured: true,
      place: { en: "Bengaluru", kn: "ಬೆಂಗಳೂರು" },
      title: { en: "State assembly clears landmark local-governance bill",
               kn: "ರಾಜ್ಯ ವಿಧಾನಸಭೆಯಿಂದ ಮಹತ್ವದ ಸ್ಥಳೀಯ ಆಡಳಿತ ಮಸೂದೆಗೆ ಒಪ್ಪಿಗೆ" },
      excerpt: { en: "The bill devolves greater financial powers to gram panchayats and city wards, in a move welcomed across party lines.",
                 kn: "ಈ ಮಸೂದೆ ಗ್ರಾಮ ಪಂಚಾಯಿತಿ ಮತ್ತು ನಗರ ವಾರ್ಡ್‌ಗಳಿಗೆ ಹೆಚ್ಚಿನ ಆರ್ಥಿಕ ಅಧಿಕಾರ ನೀಡುತ್ತದೆ; ಪಕ್ಷಾತೀತ ಸ್ವಾಗತ." },
      body: {
        en: ["The state assembly on Monday passed a local-governance bill that transfers a larger share of state revenue directly to gram panchayats and urban local bodies.",
             "Supporters say the change will speed up ward-level projects such as roads, drainage and streetlights by cutting the number of approvals required from the state secretariat.",
             "The bill now goes to the legislative council before receiving the Governor's assent. Officials expect the new framework to take effect from the next financial year."],
        kn: ["ರಾಜ್ಯ ವಿಧಾನಸಭೆ ಸೋಮವಾರ ಸ್ಥಳೀಯ ಆಡಳಿತ ಮಸೂದೆಯನ್ನು ಅಂಗೀಕರಿಸಿದ್ದು, ರಾಜ್ಯದ ಆದಾಯದ ದೊಡ್ಡ ಪಾಲನ್ನು ನೇರವಾಗಿ ಗ್ರಾಮ ಪಂಚಾಯಿತಿ ಮತ್ತು ನಗರ ಸ್ಥಳೀಯ ಸಂಸ್ಥೆಗಳಿಗೆ ವರ್ಗಾಯಿಸುತ್ತದೆ.",
             "ಈ ಬದಲಾವಣೆಯಿಂದ ರಸ್ತೆ, ಚರಂಡಿ, ಬೀದಿದೀಪದಂತಹ ವಾರ್ಡ್ ಮಟ್ಟದ ಕಾಮಗಾರಿಗಳು ವೇಗ ಪಡೆಯಲಿವೆ ಎಂದು ಬೆಂಬಲಿಗರು ಹೇಳಿದ್ದಾರೆ.",
             "ಮಸೂದೆ ಈಗ ವಿಧಾನ ಪರಿಷತ್ತಿಗೆ, ಬಳಿಕ ರಾಜ್ಯಪಾಲರ ಅಂಗೀಕಾರಕ್ಕೆ ಹೋಗಲಿದೆ. ಮುಂದಿನ ಆರ್ಥಿಕ ವರ್ಷದಿಂದ ಜಾರಿಗೆ ಬರುವ ನಿರೀಕ್ಷೆ."]
      }
    },
    {
      id: "p2", cat: "politics", date: "2026-09-07",
      place: { en: "Kalaburagi", kn: "ಕಲಬುರಗಿ" },
      title: { en: "All-party meet seeks central funds for drought relief",
               kn: "ಬರ ಪರಿಹಾರಕ್ಕೆ ಕೇಂದ್ರದ ಅನುದಾನ ಕೋರಿ ಸರ್ವಪಕ್ಷ ಸಭೆ" },
      excerpt: { en: "Leaders across parties resolved to press for an interim relief package for farmers in the affected taluks.",
                 kn: "ಬಾಧಿತ ತಾಲ್ಲೂಕುಗಳ ರೈತರಿಗೆ ಮಧ್ಯಂತರ ಪರಿಹಾರ ಪ್ಯಾಕೇಜ್ ಒತ್ತಾಯಿಸಲು ನಾಯಕರ ನಿರ್ಧಾರ." },
      body: {
        en: ["An all-party meeting resolved to send a joint delegation to the centre seeking an interim drought-relief package for farmers.",
             "District officials said crop loss surveys have been completed in most affected taluks and reports will be submitted this week.",
             "Farmer associations welcomed the unity but asked that relief reach bank accounts before the next sowing season."],
        kn: ["ರೈತರಿಗೆ ಮಧ್ಯಂತರ ಬರ ಪರಿಹಾರ ಪ್ಯಾಕೇಜ್ ಕೋರಿ ಜಂಟಿ ನಿಯೋಗವನ್ನು ಕೇಂದ್ರಕ್ಕೆ ಕಳುಹಿಸಲು ಸರ್ವಪಕ್ಷ ಸಭೆ ನಿರ್ಧರಿಸಿದೆ.",
             "ಬಾಧಿತ ಬಹುತೇಕ ತಾಲ್ಲೂಕುಗಳಲ್ಲಿ ಬೆಳೆ ಹಾನಿ ಸಮೀಕ್ಷೆ ಪೂರ್ಣಗೊಂಡಿದ್ದು, ವರದಿ ಈ ವಾರ ಸಲ್ಲಿಕೆಯಾಗಲಿದೆ ಎಂದು ಜಿಲ್ಲಾಧಿಕಾರಿಗಳು ತಿಳಿಸಿದ್ದಾರೆ.",
             "ಒಗ್ಗಟ್ಟನ್ನು ಸ್ವಾಗತಿಸಿದ ರೈತ ಸಂಘಟನೆಗಳು, ಮುಂದಿನ ಬಿತ್ತನೆ ಹಂಗಾಮಿಗೆ ಮುನ್ನ ಪರಿಹಾರ ಖಾತೆಗೆ ತಲುಪಬೇಕೆಂದು ಆಗ್ರಹಿಸಿವೆ."]
      }
    },
    {
      id: "n1", cat: "national", date: "2026-09-08", featured: true,
      place: { en: "New Delhi", kn: "ನವದೆಹಲಿ" },
      title: { en: "Centre launches nationwide digital literacy mission",
               kn: "ದೇಶಾದ್ಯಂತ ಡಿಜಿಟಲ್ ಸಾಕ್ಷರತಾ ಅಭಿಯಾನ ಆರಂಭಿಸಿದ ಕೇಂದ್ರ" },
      excerpt: { en: "The programme targets rural households and aims to train one member from every family within three years.",
                 kn: "ಗ್ರಾಮೀಣ ಕುಟುಂಬಗಳನ್ನು ಗುರಿಯಾಗಿಸಿ, ಮೂರು ವರ್ಷದೊಳಗೆ ಪ್ರತಿ ಕುಟುಂಬದ ಒಬ್ಬರಿಗೆ ತರಬೇತಿ ನೀಡುವ ಗುರಿ." },
      body: {
        en: ["The union government launched a national digital-literacy mission aimed at training at least one member from every rural household over the next three years.",
             "The scheme will use existing common service centres and self-help groups as delivery points, officials said.",
             "States will co-fund the programme and identify local trainers, with the first phase covering aspirational districts."],
        kn: ["ಮುಂದಿನ ಮೂರು ವರ್ಷಗಳಲ್ಲಿ ಪ್ರತಿ ಗ್ರಾಮೀಣ ಕುಟುಂಬದ ಕನಿಷ್ಠ ಒಬ್ಬ ಸದಸ್ಯರಿಗೆ ತರಬೇತಿ ನೀಡುವ ಗುರಿಯ ರಾಷ್ಟ್ರೀಯ ಡಿಜಿಟಲ್ ಸಾಕ್ಷರತಾ ಅಭಿಯಾನವನ್ನು ಕೇಂದ್ರ ಸರ್ಕಾರ ಆರಂಭಿಸಿದೆ.",
             "ಈಗಿರುವ ಸಾಮಾನ್ಯ ಸೇವಾ ಕೇಂದ್ರಗಳು ಮತ್ತು ಸ್ವಸಹಾಯ ಗುಂಪುಗಳನ್ನು ವಿತರಣಾ ಕೇಂದ್ರಗಳಾಗಿ ಬಳಸಲಾಗುವುದು ಎಂದು ಅಧಿಕಾರಿಗಳು ತಿಳಿಸಿದ್ದಾರೆ.",
             "ರಾಜ್ಯಗಳು ಸಹ-ಅನುದಾನ ನೀಡಲಿದ್ದು, ಸ್ಥಳೀಯ ತರಬೇತುದಾರರನ್ನು ಗುರುತಿಸಲಿವೆ; ಮೊದಲ ಹಂತ ಮಹತ್ವಾಕಾಂಕ್ಷಿ ಜಿಲ್ಲೆಗಳಲ್ಲಿ."]
      }
    },
    {
      id: "n2", cat: "national", date: "2026-09-06",
      place: { en: "Mumbai", kn: "ಮುಂಬೈ" },
      title: { en: "Railways to add 200 new services ahead of festive season",
               kn: "ಹಬ್ಬದ ಋತುವಿಗೆ ಮುನ್ನ 200 ಹೊಸ ರೈಲು ಸೇವೆ ಆರಂಭಿಸಲಿರುವ ರೈಲ್ವೆ" },
      excerpt: { en: "Special trains will connect major cities to reduce the festive rush and clear waitlists.",
                 kn: "ಹಬ್ಬದ ದಟ್ಟಣೆ ತಗ್ಗಿಸಲು ಪ್ರಮುಖ ನಗರಗಳ ನಡುವೆ ವಿಶೇಷ ರೈಲುಗಳು." },
      body: {
        en: ["The railways announced around 200 special services to handle the festive rush and clear long waiting lists on popular routes.",
             "Additional coaches will be attached to regular trains on demand, and reservation counters will stay open longer at major stations.",
             "Passengers have been advised to book early and avoid touts offering premium tickets."],
        kn: ["ಹಬ್ಬದ ದಟ್ಟಣೆ ನಿಭಾಯಿಸಲು ಹಾಗೂ ಜನಪ್ರಿಯ ಮಾರ್ಗಗಳ ಸುದೀರ್ಘ ಕಾಯುವಿಕೆ ಪಟ್ಟಿ ತೆರವಿಗೆ ಸುಮಾರು 200 ವಿಶೇಷ ಸೇವೆಗಳನ್ನು ರೈಲ್ವೆ ಘೋಷಿಸಿದೆ.",
             "ಬೇಡಿಕೆಗೆ ಅನುಗುಣವಾಗಿ ಸಾಮಾನ್ಯ ರೈಲುಗಳಿಗೆ ಹೆಚ್ಚುವರಿ ಬೋಗಿ ಜೋಡಿಸಲಾಗುವುದು; ಪ್ರಮುಖ ನಿಲ್ದಾಣಗಳಲ್ಲಿ ಕಾಯ್ದಿರಿಸುವ ಕೌಂಟರ್ ಹೆಚ್ಚು ಹೊತ್ತು ತೆರೆದಿರಲಿವೆ.",
             "ಮೊದಲೇ ಟಿಕೆಟ್ ಕಾಯ್ದಿರಿಸಿ, ದಲ್ಲಾಳಿಗಳ ಪ್ರೀಮಿಯಂ ಟಿಕೆಟ್‌ಗಳಿಂದ ದೂರವಿರಲು ಪ್ರಯಾಣಿಕರಿಗೆ ಸೂಚನೆ."]
      }
    },
    {
      id: "i1", cat: "international", date: "2026-09-07", featured: true,
      place: { en: "Geneva", kn: "ಜಿನೀವಾ" },
      title: { en: "Global climate summit agrees on new green-funding target",
               kn: "ಹೊಸ ಹಸಿರು-ನಿಧಿ ಗುರಿಗೆ ಜಾಗತಿಕ ಹವಾಮಾನ ಶೃಂಗಸಭೆ ಒಪ್ಪಿಗೆ" },
      excerpt: { en: "Developing nations will get expanded access to low-cost finance for clean-energy projects.",
                 kn: "ಶುದ್ಧ-ಇಂಧನ ಯೋಜನೆಗಳಿಗೆ ಅಭಿವೃದ್ಧಿಶೀಲ ರಾಷ್ಟ್ರಗಳಿಗೆ ಕಡಿಮೆ ವೆಚ್ಚದ ಹಣಕಾಸು ಸೌಲಭ್ಯ." },
      body: {
        en: ["Delegates at a global climate summit agreed on a new funding target to help developing nations invest in clean energy and climate resilience.",
             "The deal expands low-cost credit lines and technology transfer, though some groups said the timeline remains too slow.",
             "Implementation details will be worked out by a technical committee before the next round of talks."],
        kn: ["ಅಭಿವೃದ್ಧಿಶೀಲ ರಾಷ್ಟ್ರಗಳಿಗೆ ಶುದ್ಧ ಇಂಧನ ಮತ್ತು ಹವಾಮಾನ ಸ್ಥಿತಿಸ್ಥಾಪಕತೆಗೆ ಹೂಡಿಕೆ ಮಾಡಲು ನೆರವಾಗುವ ಹೊಸ ನಿಧಿ ಗುರಿಗೆ ಜಾಗತಿಕ ಹವಾಮಾನ ಶೃಂಗಸಭೆಯ ಪ್ರತಿನಿಧಿಗಳು ಒಪ್ಪಿದ್ದಾರೆ.",
             "ಈ ಒಪ್ಪಂದ ಕಡಿಮೆ ವೆಚ್ಚದ ಸಾಲ ಮತ್ತು ತಂತ್ರಜ್ಞಾನ ವರ್ಗಾವಣೆಯನ್ನು ವಿಸ್ತರಿಸುತ್ತದೆ; ಆದರೆ ಕಾಲಮಿತಿ ಇನ್ನೂ ನಿಧಾನ ಎಂದು ಕೆಲ ಸಂಘಟನೆಗಳು ಹೇಳಿವೆ.",
             "ಮುಂದಿನ ಸುತ್ತಿನ ಮಾತುಕತೆಗೆ ಮುನ್ನ ತಾಂತ್ರಿಕ ಸಮಿತಿ ಅನುಷ್ಠಾನದ ವಿವರ ಸಿದ್ಧಪಡಿಸಲಿದೆ."]
      }
    },
    {
      id: "b1", cat: "business", date: "2026-09-08", featured: true,
      place: { en: "Bengaluru", kn: "ಬೆಂಗಳೂರು" },
      title: { en: "Karnataka startups raise record funding in first half",
               kn: "ಮೊದಲಾರ್ಧದಲ್ಲಿ ಕರ್ನಾಟಕ ಸ್ಟಾರ್ಟಪ್‌ಗಳಿಂದ ದಾಖಲೆ ಬಂಡವಾಳ" },
      excerpt: { en: "Deep-tech and agri-tech ventures led the surge, according to an industry report released on Monday.",
                 kn: "ಡೀಪ್-ಟೆಕ್ ಮತ್ತು ಅಗ್ರಿ-ಟೆಕ್ ಉದ್ಯಮಗಳು ಮುಂಚೂಣಿ — ಸೋಮವಾರದ ವರದಿ." },
      body: {
        en: ["Startups in Karnataka raised record funding in the first half of the year, led by deep-tech, agri-tech and healthcare ventures, an industry report said.",
             "Investors pointed to a strong engineering talent pool and improving exit options as reasons for renewed confidence.",
             "Analysts cautioned that later-stage funding remains selective and that profitability is now a bigger factor in deals."],
        kn: ["ವರ್ಷದ ಮೊದಲಾರ್ಧದಲ್ಲಿ ಕರ್ನಾಟಕದ ಸ್ಟಾರ್ಟಪ್‌ಗಳು ದಾಖಲೆ ಬಂಡವಾಳ ಸಂಗ್ರಹಿಸಿದ್ದು, ಡೀಪ್-ಟೆಕ್, ಅಗ್ರಿ-ಟೆಕ್ ಮತ್ತು ಆರೋಗ್ಯ ಕ್ಷೇತ್ರದ ಉದ್ಯಮಗಳು ಮುಂಚೂಣಿಯಲ್ಲಿವೆ ಎಂದು ವರದಿ ತಿಳಿಸಿದೆ.",
             "ಬಲಿಷ್ಠ ಎಂಜಿನಿಯರಿಂಗ್ ಪ್ರತಿಭೆ ಮತ್ತು ಸುಧಾರಿತ ನಿರ್ಗಮನ ಆಯ್ಕೆಗಳೇ ಹೊಸ ವಿಶ್ವಾಸಕ್ಕೆ ಕಾರಣ ಎಂದು ಹೂಡಿಕೆದಾರರು ಹೇಳಿದ್ದಾರೆ.",
             "ನಂತರದ ಹಂತದ ಹೂಡಿಕೆ ಆಯ್ಕೆಯಾಗಿಯೇ ಉಳಿದಿದೆ; ಲಾಭದಾಯಕತೆ ಈಗ ಒಪ್ಪಂದಗಳಲ್ಲಿ ದೊಡ್ಡ ಅಂಶ ಎಂದು ವಿಶ್ಲೇಷಕರು ಎಚ್ಚರಿಸಿದ್ದಾರೆ."]
      }
    },
    {
      id: "b2", cat: "business", date: "2026-09-05",
      place: { en: "Hubballi", kn: "ಹುಬ್ಬಳ್ಳಿ" },
      title: { en: "New textile park to create thousands of jobs in North Karnataka",
               kn: "ಉತ್ತರ ಕರ್ನಾಟಕದಲ್ಲಿ ಹೊಸ ಜವಳಿ ಪಾರ್ಕ್ — ಸಾವಿರಾರು ಉದ್ಯೋಗ ಸೃಷ್ಟಿ" },
      excerpt: { en: "The integrated park will house spinning, weaving and garment units under one roof.",
                 kn: "ಸಮಗ್ರ ಪಾರ್ಕ್‌ನಲ್ಲಿ ನೂಲುವ, ನೇಯುವ ಮತ್ತು ಉಡುಪು ಘಟಕಗಳು ಒಂದೇ ಸೂರಿನಡಿ." },
      body: {
        en: ["A new integrated textile park will come up in North Karnataka, bringing spinning, weaving and garment units together to cut logistics costs.",
             "Officials said the project is expected to create thousands of direct and indirect jobs, with priority hiring for local workers.",
             "Skill-training centres will be set up alongside the park to prepare the workforce."],
        kn: ["ಉತ್ತರ ಕರ್ನಾಟಕದಲ್ಲಿ ಹೊಸ ಸಮಗ್ರ ಜವಳಿ ಪಾರ್ಕ್ ಸ್ಥಾಪನೆಯಾಗಲಿದ್ದು, ನೂಲುವ, ನೇಯುವ ಮತ್ತು ಉಡುಪು ಘಟಕಗಳನ್ನು ಒಟ್ಟುಗೂಡಿಸಿ ಸಾಗಣೆ ವೆಚ್ಚ ತಗ್ಗಿಸಲಿದೆ.",
             "ಸ್ಥಳೀಯರಿಗೆ ಆದ್ಯತೆಯ ನೇಮಕದೊಂದಿಗೆ ಸಾವಿರಾರು ನೇರ ಮತ್ತು ಪರೋಕ್ಷ ಉದ್ಯೋಗ ಸೃಷ್ಟಿಯಾಗುವ ನಿರೀಕ್ಷೆ ಎಂದು ಅಧಿಕಾರಿಗಳು ತಿಳಿಸಿದ್ದಾರೆ.",
             "ಕಾರ್ಮಿಕರನ್ನು ಸಜ್ಜುಗೊಳಿಸಲು ಪಾರ್ಕ್‌ನ ಜೊತೆಗೆ ಕೌಶಲ ತರಬೇತಿ ಕೇಂದ್ರಗಳನ್ನೂ ಸ್ಥಾಪಿಸಲಾಗುವುದು."]
      }
    },
    {
      id: "t1", cat: "technology", date: "2026-09-08", featured: true,
      place: { en: "Bengaluru", kn: "ಬೆಂಗಳೂರು" },
      title: { en: "State rolls out AI helpdesk for citizen services",
               kn: "ನಾಗರಿಕ ಸೇವೆಗಳಿಗೆ ಎಐ ಸಹಾಯವಾಣಿ ಆರಂಭಿಸಿದ ರಾಜ್ಯ" },
      excerpt: { en: "The multilingual assistant will answer queries on certificates, pensions and utility bills.",
                 kn: "ಪ್ರಮಾಣಪತ್ರ, ಪಿಂಚಣಿ, ಬಿಲ್ ಕುರಿತ ಪ್ರಶ್ನೆಗಳಿಗೆ ಬಹುಭಾಷಾ ಸಹಾಯಕ ಉತ್ತರ." },
      body: {
        en: ["The state government launched an AI-powered helpdesk to answer citizen queries on certificates, pensions and utility bills in multiple languages.",
             "The assistant works over phone, web and popular messaging apps, and hands complex cases to human officers.",
             "Data-privacy safeguards and a grievance channel have been built in, officials said."],
        kn: ["ಪ್ರಮಾಣಪತ್ರ, ಪಿಂಚಣಿ ಮತ್ತು ಸೇವಾ ಬಿಲ್‌ಗಳ ಕುರಿತ ನಾಗರಿಕರ ಪ್ರಶ್ನೆಗಳಿಗೆ ಹಲವು ಭಾಷೆಗಳಲ್ಲಿ ಉತ್ತರಿಸುವ ಎಐ ಆಧಾರಿತ ಸಹಾಯವಾಣಿಯನ್ನು ರಾಜ್ಯ ಸರ್ಕಾರ ಆರಂಭಿಸಿದೆ.",
             "ಈ ಸಹಾಯಕ ದೂರವಾಣಿ, ವೆಬ್ ಮತ್ತು ಜನಪ್ರಿಯ ಸಂದೇಶ ಆ್ಯಪ್‌ಗಳಲ್ಲಿ ಕಾರ್ಯನಿರ್ವಹಿಸಿ, ಸಂಕೀರ್ಣ ಪ್ರಕರಣಗಳನ್ನು ಅಧಿಕಾರಿಗಳಿಗೆ ವರ್ಗಾಯಿಸುತ್ತದೆ.",
             "ದತ್ತಾಂಶ ಗೌಪ್ಯತೆ ಸುರಕ್ಷತೆ ಮತ್ತು ದೂರು ಮಾರ್ಗವನ್ನೂ ಅಳವಡಿಸಲಾಗಿದೆ ಎಂದು ಅಧಿಕಾರಿಗಳು ತಿಳಿಸಿದ್ದಾರೆ."]
      }
    },
    {
      id: "s1", cat: "sports", date: "2026-09-08", featured: true,
      place: { en: "Bengaluru", kn: "ಬೆಂಗಳೂರು" },
      title: { en: "State cricket team seals spot in national one-day final",
               kn: "ರಾಷ್ಟ್ರೀಯ ಏಕದಿನ ಫೈನಲ್‌ಗೆ ರಾಜ್ಯ ಕ್ರಿಕೆಟ್ ತಂಡ ಪ್ರವೇಶ" },
      excerpt: { en: "A disciplined bowling effort and a captain's knock powered the side into the title clash.",
                 kn: "ಶಿಸ್ತಿನ ಬೌಲಿಂಗ್ ಮತ್ತು ನಾಯಕನ ಇನ್ನಿಂಗ್ಸ್‌ನಿಂದ ಪ್ರಶಸ್ತಿ ಸೆಣಸಾಟಕ್ಕೆ ತಂಡ." },
      body: {
        en: ["The state cricket team booked its place in the national one-day final after a composed all-round performance in the semifinal.",
             "A disciplined bowling display in the middle overs and an unbeaten captain's knock proved decisive.",
             "The final will be played this weekend, and the team management said the squad is fit and confident."],
        kn: ["ಸೆಮಿಫೈನಲ್‌ನಲ್ಲಿ ಸಂಯಮದ ಸರ್ವಾಂಗೀಣ ಆಟದ ಬಳಿಕ ರಾಜ್ಯ ಕ್ರಿಕೆಟ್ ತಂಡ ರಾಷ್ಟ್ರೀಯ ಏಕದಿನ ಫೈನಲ್‌ಗೆ ಸ್ಥಾನ ಗಿಟ್ಟಿಸಿದೆ.",
             "ಮಧ್ಯದ ಓವರ್‌ಗಳಲ್ಲಿ ಶಿಸ್ತಿನ ಬೌಲಿಂಗ್ ಮತ್ತು ನಾಯಕನ ಅಜೇಯ ಇನ್ನಿಂಗ್ಸ್ ನಿರ್ಣಾಯಕವಾಯಿತು.",
             "ಫೈನಲ್ ಈ ವಾರಾಂತ್ಯ ನಡೆಯಲಿದ್ದು, ತಂಡ ಸದೃಢ ಹಾಗೂ ಆತ್ಮವಿಶ್ವಾಸದಿಂದ ಇದೆ ಎಂದು ಆಡಳಿತ ಮಂಡಳಿ ತಿಳಿಸಿದೆ."]
      }
    },
    {
      id: "e1", cat: "entertainment", date: "2026-09-07", featured: true,
      place: { en: "Bengaluru", kn: "ಬೆಂಗಳೂರು" },
      title: { en: "Kannada cinema shines at regional film awards",
               kn: "ಪ್ರಾದೇಶಿಕ ಚಲನಚಿತ್ರ ಪ್ರಶಸ್ತಿಯಲ್ಲಿ ಮಿಂಚಿದ ಕನ್ನಡ ಚಿತ್ರರಂಗ" },
      excerpt: { en: "Independent films and fresh talent dominated this year's honours list.",
                 kn: "ಈ ವರ್ಷದ ಗೌರವ ಪಟ್ಟಿಯಲ್ಲಿ ಸ್ವತಂತ್ರ ಚಿತ್ರ ಮತ್ತು ಹೊಸ ಪ್ರತಿಭೆಗಳ ಪಾರಮ್ಯ." },
      body: {
        en: ["Kannada cinema had a strong showing at this year's regional film awards, with independent films and first-time directors picking up major honours.",
             "Jury members praised the range of stories rooted in local settings and languages.",
             "Producers said the recognition should help smaller films find wider theatrical and streaming audiences."],
        kn: ["ಈ ವರ್ಷದ ಪ್ರಾದೇಶಿಕ ಚಲನಚಿತ್ರ ಪ್ರಶಸ್ತಿಯಲ್ಲಿ ಕನ್ನಡ ಚಿತ್ರರಂಗ ಪ್ರಬಲ ಸಾಧನೆ ತೋರಿದ್ದು, ಸ್ವತಂತ್ರ ಚಿತ್ರಗಳು ಮತ್ತು ಹೊಸ ನಿರ್ದೇಶಕರು ಪ್ರಮುಖ ಗೌರವ ಗಳಿಸಿದ್ದಾರೆ.",
             "ಸ್ಥಳೀಯ ಪರಿಸರ ಮತ್ತು ಭಾಷೆಗಳಲ್ಲಿ ಬೇರೂರಿದ ಕಥೆಗಳ ವೈವಿಧ್ಯವನ್ನು ತೀರ್ಪುಗಾರರು ಶ್ಲಾಘಿಸಿದ್ದಾರೆ.",
             "ಈ ಗುರುತಿಸುವಿಕೆ ಸಣ್ಣ ಚಿತ್ರಗಳಿಗೆ ವಿಶಾಲ ಪ್ರೇಕ್ಷಕರನ್ನು ತಲುಪಲು ನೆರವಾಗಲಿದೆ ಎಂದು ನಿರ್ಮಾಪಕರು ಹೇಳಿದ್ದಾರೆ."]
      }
    },
    {
      id: "c1", cat: "culture", date: "2026-09-06", featured: true,
      place: { en: "Mysuru", kn: "ಮೈಸೂರು" },
      title: { en: "Heritage city gears up for its grand annual festival",
               kn: "ಭವ್ಯ ವಾರ್ಷಿಕ ಉತ್ಸವಕ್ಕೆ ಸಜ್ಜಾಗುತ್ತಿರುವ ಪಾರಂಪರಿಕ ನಗರ" },
      excerpt: { en: "Artisans, folk troupes and food stalls will line the streets during the ten-day celebration.",
                 kn: "ಹತ್ತು ದಿನಗಳ ಸಂಭ್ರಮದಲ್ಲಿ ಕುಶಲಕರ್ಮಿಗಳು, ಜಾನಪದ ತಂಡಗಳು, ಆಹಾರ ಮಳಿಗೆಗಳ ಸಾಲು." },
      body: {
        en: ["The heritage city is preparing for its grand annual festival, with artisans, folk troupes and food stalls set to fill the streets for ten days.",
             "Authorities have arranged extra transport, parking and crowd-management measures for visitors.",
             "Cultural organisers said the festival will showcase traditional crafts alongside contemporary performances."],
        kn: ["ಪಾರಂಪರಿಕ ನಗರ ತನ್ನ ಭವ್ಯ ವಾರ್ಷಿಕ ಉತ್ಸವಕ್ಕೆ ಸಜ್ಜಾಗುತ್ತಿದ್ದು, ಹತ್ತು ದಿನ ಕುಶಲಕರ್ಮಿಗಳು, ಜಾನಪದ ತಂಡಗಳು ಮತ್ತು ಆಹಾರ ಮಳಿಗೆಗಳು ಬೀದಿಗಳನ್ನು ತುಂಬಲಿವೆ.",
             "ಸಂದರ್ಶಕರಿಗೆ ಹೆಚ್ಚುವರಿ ಸಾರಿಗೆ, ಪಾರ್ಕಿಂಗ್ ಮತ್ತು ಜನಸಂದಣಿ ನಿರ್ವಹಣಾ ಕ್ರಮಗಳನ್ನು ಅಧಿಕಾರಿಗಳು ಸಿದ್ಧಪಡಿಸಿದ್ದಾರೆ.",
             "ಸಾಂಪ್ರದಾಯಿಕ ಕರಕುಶಲ ಜೊತೆಗೆ ಸಮಕಾಲೀನ ಪ್ರದರ್ಶನಗಳನ್ನೂ ಉತ್ಸವ ಪ್ರದರ್ಶಿಸಲಿದೆ ಎಂದು ಸಂಘಟಕರು ತಿಳಿಸಿದ್ದಾರೆ."]
      }
    },
    {
      id: "h1", cat: "health", date: "2026-09-07", featured: true,
      place: { en: "Bengaluru", kn: "ಬೆಂಗಳೂರು" },
      title: { en: "Free health screening camps to run across all districts",
               kn: "ಎಲ್ಲ ಜಿಲ್ಲೆಗಳಲ್ಲಿ ಉಚಿತ ಆರೋಗ್ಯ ತಪಾಸಣಾ ಶಿಬಿರ" },
      excerpt: { en: "Camps will focus on early detection of diabetes, blood pressure and vision problems.",
                 kn: "ಮಧುಮೇಹ, ರಕ್ತದೊತ್ತಡ ಮತ್ತು ದೃಷ್ಟಿ ಸಮಸ್ಯೆಗಳ ಆರಂಭಿಕ ಪತ್ತೆಗೆ ಒತ್ತು." },
      body: {
        en: ["The health department will run free screening camps across all districts, focusing on early detection of diabetes, high blood pressure and vision problems.",
             "People who test positive will be referred to nearby government hospitals for follow-up care.",
             "Officials urged residents, especially those above 40, to attend and get baseline checks done."],
        kn: ["ಮಧುಮೇಹ, ಅಧಿಕ ರಕ್ತದೊತ್ತಡ ಮತ್ತು ದೃಷ್ಟಿ ಸಮಸ್ಯೆಗಳ ಆರಂಭಿಕ ಪತ್ತೆಗೆ ಒತ್ತು ನೀಡಿ ಎಲ್ಲ ಜಿಲ್ಲೆಗಳಲ್ಲಿ ಉಚಿತ ತಪಾಸಣಾ ಶಿಬಿರಗಳನ್ನು ಆರೋಗ್ಯ ಇಲಾಖೆ ನಡೆಸಲಿದೆ.",
             "ಪಾಸಿಟಿವ್ ಬಂದವರನ್ನು ಮುಂದಿನ ಚಿಕಿತ್ಸೆಗೆ ಹತ್ತಿರದ ಸರ್ಕಾರಿ ಆಸ್ಪತ್ರೆಗಳಿಗೆ ಶಿಫಾರಸು ಮಾಡಲಾಗುವುದು.",
             "ವಿಶೇಷವಾಗಿ 40 ವರ್ಷ ಮೇಲ್ಪಟ್ಟವರು ಶಿಬಿರಕ್ಕೆ ಹಾಜರಾಗಿ ಮೂಲ ತಪಾಸಣೆ ಮಾಡಿಸಿಕೊಳ್ಳುವಂತೆ ಅಧಿಕಾರಿಗಳು ಮನವಿ ಮಾಡಿದ್ದಾರೆ."]
      }
    }
  ]
};
