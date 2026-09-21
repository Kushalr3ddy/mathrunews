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
    email:     "MSMTVNEWSchannel@gmail.com",
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
  ]
};
