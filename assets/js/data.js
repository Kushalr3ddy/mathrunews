/* =====================================================================
   MSM TV NEWS — site data (bilingual: English + Kannada)
   Launch / "coming soon" promotional site — no news articles.
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
    phoneMD:   "+91 94825 29566",
    phoneMDRaw:"919482529566",
    email:     "MSMTVNEWSchannel@gmail.com",
    website:   "www.mathrunews.com",
    websiteUrl:"https://www.mathrunews.com",
    slogan:    { en: "News for Social Justice", kn: "ಸಾಮಾಜಿಕ ನ್ಯಾಯಕ್ಕಾಗಿ ಸುದ್ದಿ" },
    // Public corporate identity — verified from MCA records (ZaubaCorp / Tracxn), Sep 2026
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

  /* rolling launch announcements (marquee) */
  announcements: [
    { en: "MSM TV NEWS — a new 24×7 global news channel, launching soon", kn: "ಎಂಎಸ್‌ಎಂ ಟಿವಿ ನ್ಯೂಸ್ — ಹೊಸ 24×7 ಜಾಗತಿಕ ಸುದ್ದಿ ವಾಹಿನಿ, ಶೀಘ್ರದಲ್ಲೇ ಆರಂಭ" },
    { en: "Now onboarding advertisers — your brand, our platform", kn: "ಈಗ ಜಾಹೀರಾತುದಾರರ ಸೇರ್ಪಡೆ — ನಿಮ್ಮ ಬ್ರ್ಯಾಂಡ್, ನಮ್ಮ ವೇದಿಕೆ" },
    { en: "Got a story or a news telecast request? Reach our desk", kn: "ಸುದ್ದಿ ಅಥವಾ ಪ್ರಸಾರ ವಿನಂತಿ ಇದೆಯೇ? ನಮ್ಮ ಕೇಂದ್ರವನ್ನು ಸಂಪರ್ಕಿಸಿ" },
    { en: "Truth · Trust · Transparency — your voice, your channel", kn: "ಸತ್ಯ · ವಿಶ್ವಾಸ · ಪಾರದರ್ಶಕತೆ — ನಿಮ್ಮ ಧ್ವನಿ, ನಿಮ್ಮ ವಾಹಿನಿ" }
  ],

  /* coverage areas / beats */
  categories: [
    { id: "politics", en: "Politics", kn: "ರಾಜಕೀಯ", color: "#b8342b",
      desc: { en: "State and national politics, elections, policy and the decisions that shape public life.",
              kn: "ರಾಜ್ಯ ಮತ್ತು ರಾಷ್ಟ್ರ ರಾಜಕೀಯ, ಚುನಾವಣೆ, ನೀತಿ ಮತ್ತು ಸಾರ್ವಜನಿಕ ಜೀವನವನ್ನು ರೂಪಿಸುವ ನಿರ್ಧಾರಗಳು." } },
    { id: "national", en: "National", kn: "ರಾಷ್ಟ್ರೀಯ", color: "#c0631f",
      desc: { en: "The big stories from across India — governance, society and everything in between.",
              kn: "ಭಾರತದಾದ್ಯಂತ ದೊಡ್ಡ ಸುದ್ದಿಗಳು — ಆಡಳಿತ, ಸಮಾಜ ಮತ್ತು ಅದರ ನಡುವಿನ ಎಲ್ಲವೂ." } },
    { id: "international", en: "International", kn: "ಅಂತಾರಾಷ್ಟ್ರೀಯ", color: "#1f6f8b",
      desc: { en: "World affairs, diplomacy and global events — brought home in your language.",
              kn: "ಜಾಗತಿಕ ವಿದ್ಯಮಾನ, ರಾಜತಾಂತ್ರಿಕತೆ ಮತ್ತು ಜಗತ್ತಿನ ಘಟನೆಗಳು — ನಿಮ್ಮ ಭಾಷೆಯಲ್ಲಿ." } },
    { id: "business", en: "Business", kn: "ವಾಣಿಜ್ಯ", color: "#1e7a4d",
      desc: { en: "Markets, startups, jobs and the economy — clear analysis you can act on.",
              kn: "ಮಾರುಕಟ್ಟೆ, ಸ್ಟಾರ್ಟಪ್, ಉದ್ಯೋಗ ಮತ್ತು ಆರ್ಥಿಕತೆ — ಸ್ಪಷ್ಟ ವಿಶ್ಲೇಷಣೆ." } },
    { id: "technology", en: "Technology", kn: "ತಂತ್ರಜ್ಞಾನ", color: "#4b3fa6",
      desc: { en: "Innovation, gadgets, AI and the digital shifts changing how we live.",
              kn: "ನಾವೀನ್ಯತೆ, ಗ್ಯಾಜೆಟ್, ಎಐ ಮತ್ತು ಜೀವನವನ್ನು ಬದಲಿಸುತ್ತಿರುವ ಡಿಜಿಟಲ್ ಬದಲಾವಣೆಗಳು." } },
    { id: "sports", en: "Sports", kn: "ಕ್ರೀಡೆ", color: "#0e7c86",
      desc: { en: "Cricket, kabaddi and every game that matters — live scores, analysis and drama.",
              kn: "ಕ್ರಿಕೆಟ್, ಕಬಡ್ಡಿ ಮತ್ತು ಪ್ರತಿ ಆಟ — ಲೈವ್ ಸ್ಕೋರ್, ವಿಶ್ಲೇಷಣೆ ಮತ್ತು ರೋಚಕತೆ." } },
    { id: "entertainment", en: "Entertainment", kn: "ಮನರಂಜನೆ", color: "#a5257c",
      desc: { en: "Cinema, OTT, music and celebrity news from Sandalwood and beyond.",
              kn: "ಸಿನಿಮಾ, ಒಟಿಟಿ, ಸಂಗೀತ ಮತ್ತು ಸ್ಯಾಂಡಲ್‌ವುಡ್‌ನ ತಾರಾ ಸುದ್ದಿಗಳು." } },
    { id: "culture", en: "Culture", kn: "ಸಂಸ್ಕೃತಿ", color: "#9c6b1a",
      desc: { en: "Heritage, festivals, art and the traditions that define Karnataka and India.",
              kn: "ಪರಂಪರೆ, ಹಬ್ಬ, ಕಲೆ ಮತ್ತು ಕರ್ನಾಟಕ-ಭಾರತವನ್ನು ವ್ಯಾಖ್ಯಾನಿಸುವ ಸಂಪ್ರದಾಯಗಳು." } },
    { id: "health", en: "Health", kn: "ಆರೋಗ್ಯ", color: "#2f7d32",
      desc: { en: "Wellness, medicine and lifestyle — practical health news for every family.",
              kn: "ಸ್ವಾಸ್ಥ್ಯ, ವೈದ್ಯಕೀಯ ಮತ್ತು ಜೀವನಶೈಲಿ — ಪ್ರತಿ ಕುಟುಂಬಕ್ಕೆ ಉಪಯುಕ್ತ ಆರೋಗ್ಯ ಸುದ್ದಿ." } }
  ],

  /* 24×7 programme line-up (show titles kept in English; headings bilingual) */
  programmes: [
    { en: "News Bulletins", kn: "ಸುದ್ದಿ ಬುಲೆಟಿನ್‌ಗಳು", items: ["Global Morning Headlines", "World News Now", "Global News Update", "World News Hour", "Global Evening News", "World Prime", "Global Night News", "World News Round-Up"] },
    { en: "International Regions", kn: "ಅಂತಾರಾಷ್ಟ್ರೀಯ ವಲಯಗಳು", items: ["Asia News Desk", "Europe News Desk", "Americas News Desk", "Middle East News Desk", "Africa News Desk", "Australia & Pacific Desk", "South Asia News"] },
    { en: "Special & Investigative", kn: "ವಿಶೇಷ ಮತ್ತು ತನಿಖಾ", items: ["Global Investigative Report", "Global Special Report", "Inside the Story", "The Global Investigation", "Fact Check Global", "Ground Report", "Global Exclusive"] },
    { en: "Business & Economy", kn: "ವಾಣಿಜ್ಯ ಮತ್ತು ಆರ್ಥಿಕತೆ", items: ["Global Business Today", "World Markets", "Global Economy", "Business Leaders", "Global Investment Desk", "Future of Business"] },
    { en: "Politics & Public Affairs", kn: "ರಾಜಕೀಯ ಮತ್ತು ಸಾರ್ವಜನಿಕ ವ್ಯವಹಾರ", items: ["World Politics", "Global Policy Forum", "International Affairs", "World Leaders", "Diplomacy Desk", "Global Public Affairs"] },
    { en: "Technology & Science", kn: "ತಂತ್ರಜ್ಞಾನ ಮತ್ತು ವಿಜ್ಞಾನ", items: ["Global Tech Today", "Future World", "Science & Innovation", "AI & Digital World", "Space & Beyond", "Climate & Environment"] },
    { en: "Sports", kn: "ಕ್ರೀಡೆ", items: ["Global Sports Desk", "World Sports Today", "International Cricket", "Football World", "Olympic & Global Games", "Sports Analysis"] },
    { en: "Culture & Lifestyle", kn: "ಸಂಸ್ಕೃತಿ ಮತ್ತು ಜೀವನಶೈಲಿ", items: ["Global Culture", "World Entertainment", "Travel Around the World", "Global Food & Lifestyle", "Arts & Heritage", "People of the World"] },
    { en: "Interviews & Discussion", kn: "ಸಂದರ್ಶನ ಮತ್ತು ಚರ್ಚೆ", items: ["Global Interview", "World Leaders Interview", "Global Expert Forum", "The International Debate", "One-on-One", "People's Voice Global"] },
    { en: "Public Interest", kn: "ಸಾರ್ವಜನಿಕ ಹಿತಾಸಕ್ತಿ", items: ["Global Human Rights", "Social Justice Worldwide", "Global Education", "Health Around the World", "Women & Society", "Youth Global", "Environment Watch", "Global Citizen"] },
    { en: "Weekend & Documentary", kn: "ವಾರಾಂತ್ಯ ಮತ್ತು ಸಾಕ್ಷ್ಯಚಿತ್ರ", items: ["Global Documentary", "World History", "Hidden Worlds", "Global Investigations Special", "Weekend World", "The Week in Review"] }
  ],

  /* advertising categories */
  adCategories: [
    { en: "Corporate & Business", kn: "ಕಾರ್ಪೊರೇಟ್ ಮತ್ತು ವಾಣಿಜ್ಯ" },
    { en: "Banking & Finance", kn: "ಬ್ಯಾಂಕಿಂಗ್ ಮತ್ತು ಹಣಕಾಸು" },
    { en: "Technology & Digital", kn: "ತಂತ್ರಜ್ಞಾನ ಮತ್ತು ಡಿಜಿಟಲ್" },
    { en: "Automobile & Aviation", kn: "ವಾಹನ ಮತ್ತು ವಾಯುಯಾನ" },
    { en: "Education & Careers", kn: "ಶಿಕ್ಷಣ ಮತ್ತು ವೃತ್ತಿ" },
    { en: "Healthcare & Wellness", kn: "ಆರೋಗ್ಯ ಮತ್ತು ಸ್ವಾಸ್ಥ್ಯ" },
    { en: "Real Estate & Infrastructure", kn: "ರಿಯಲ್ ಎಸ್ಟೇಟ್ ಮತ್ತು ಮೂಲಸೌಕರ್ಯ" },
    { en: "Consumer Products", kn: "ಗ್ರಾಹಕ ಉತ್ಪನ್ನಗಳು" },
    { en: "Travel & Hospitality", kn: "ಪ್ರಯಾಣ ಮತ್ತು ಆತಿಥ್ಯ" },
    { en: "Government & Public Info", kn: "ಸರ್ಕಾರ ಮತ್ತು ಸಾರ್ವಜನಿಕ ಮಾಹಿತಿ" },
    { en: "Entertainment & Media", kn: "ಮನರಂಜನೆ ಮತ್ತು ಮಾಧ್ಯಮ" },
    { en: "Sports", kn: "ಕ್ರೀಡೆ" },
    { en: "Global & International", kn: "ಜಾಗತಿಕ ಮತ್ತು ಅಂತಾರಾಷ್ಟ್ರೀಯ" }
  ],

  /* advertising formats grouped */
  adFormats: [
    { en: "Television", kn: "ಟೆಲಿವಿಷನ್", items: ["10 / 20 / 30 / 60-second spots", "Commercial break sponsorship", "Programme sponsorship", "Segment sponsorship", "News bulletin sponsorship"] },
    { en: "Digital", kn: "ಡಿಜಿಟಲ್", items: ["Website banner", "Mobile advertisement", "YouTube advertisement", "Social-media promotion", "Sponsored video", "Newsletter advertising", "App advertising"] },
    { en: "Partnerships", kn: "ಪಾಲುದಾರಿಕೆ", items: ["Presented By", "Powered By", "Associate / Co-Sponsor", "Official / Event Partner", "Knowledge Partner", "Digital Partner"] }
  ],

  /* departments & roles (for the Careers page) */
  departments: [
    { en: "Top Management", kn: "ಉನ್ನತ ಆಡಳಿತ", roles: ["Chairman", "Managing Director", "CEO", "COO", "Global Channel Head", "General Manager", "Regional Directors"] },
    { en: "Editorial", kn: "ಸಂಪಾದಕೀಯ", roles: ["Editor-in-Chief", "Executive Editor", "Managing Editor", "News Director", "International & Regional Editors", "Assignment / Input / Output Editors", "Copy & Language Editors"] },
    { en: "News & Reporting", kn: "ಸುದ್ದಿ ಮತ್ತು ವರದಿ", roles: ["Bureau Chiefs", "Correspondents (Senior / Foreign / Special)", "Staff & Field Reporters", "Investigative Journalists", "Photojournalists", "Video Journalists", "Stringers / Freelancers"] },
    { en: "Anchors & Presenters", kn: "ನಿರೂಪಕರು", roles: ["Prime-Time Anchors", "News Anchors", "Business Anchors", "Sports Anchors", "Weather Presenters", "Programme & Interview Hosts", "News Readers"] },
    { en: "Production", kn: "ನಿರ್ಮಾಣ", roles: ["Executive & Senior Producers", "News / Programme Producers", "Associate Producers", "Production Managers & Coordinators", "Script Writers", "Researchers"] },
    { en: "Technical & Broadcast", kn: "ತಾಂತ್ರಿಕ ಮತ್ತು ಪ್ರಸಾರ", roles: ["Broadcast & Studio Engineers", "Camera Operators", "Video / Audio Editors", "Lighting Technicians", "Graphics & Motion Artists", "MCR / PCR / Playout Operators", "Satellite / DSNG Engineers"] },
    { en: "Digital & Social Media", kn: "ಡಿಜಿಟಲ್ ಮತ್ತು ಸಾಮಾಜಿಕ ಮಾಧ್ಯಮ", roles: ["Digital Content Head", "Website & Digital Editors", "Social Media Managers", "YouTube Managers", "SEO Specialists", "Multimedia Journalists", "Data Analysts"] },
    { en: "Language & Translation", kn: "ಭಾಷೆ ಮತ್ತು ಅನುವಾದ", roles: ["Translators & Interpreters", "Multilingual Editors", "Subtitling Specialists", "Dubbing / Voice-over Artists"] },
    { en: "Business & Commercial", kn: "ವಾಣಿಜ್ಯ ಮತ್ತು ಮಾರಾಟ", roles: ["Chief Commercial Officer", "Marketing Head", "Sales Managers (National / International)", "Brand & Business Development", "Sponsorship & PR", "Client Relations"] },
    { en: "Finance, HR & Admin", kn: "ಹಣಕಾಸು, ಎಚ್‌ಆರ್ ಮತ್ತು ಆಡಳಿತ", roles: ["CFO & Finance Managers", "Accounts", "HR & Recruitment", "Legal & Compliance", "Administration & Procurement"] },
    { en: "Technology & Cybersecurity", kn: "ತಂತ್ರಜ್ಞಾನ ಮತ್ತು ಸೈಬರ್ ಭದ್ರತೆ", roles: ["CTO / IT Director", "Network & Systems Engineers", "Cloud Engineers", "Cybersecurity Specialists", "Software Developers", "Support Engineers"] },
    { en: "Field Operations & Support", kn: "ಕ್ಷೇತ್ರ ಕಾರ್ಯ ಮತ್ತು ಬೆಂಬಲ", roles: ["News Safety & Security", "Drivers & Logistics", "Travel Coordinators", "Studio & Office Assistants", "Facility Management"] }
  ]
};
