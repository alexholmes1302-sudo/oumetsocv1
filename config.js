/* ============================================================================
   ★ EDIT ME ★  —  All of your society's details live in this one file.
   Change anything below and every page updates automatically.
   You do NOT need to touch the .html files or the stylesheet.

   Tips:
   • Text goes inside "quotes".
   • To add another event / committee member / benefit, copy one { ... } block,
     paste it, and edit it. Keep the commas between blocks.
   • Emoji are optional — you can replace them or leave them blank ("").
   ============================================================================ */

const SITE = {

  /* ---- Brand: shown in the header & footer on every page -------------------- */
  name:            "Oxford University Meteorological Society",
  brandLine1:      "Oxford University",     // small header logo, line 1
  brandLine2:      "Meteorological Society",// small header logo, line 2
  logoEmoji:       "",
  founded:         "2026",
  email:           "Insert When We Have One",
  instagram:       "Insert When We Have One",
  // ↓ Paste your Microsoft Form share link between the quotes (Form → Collect responses → Copy link).
  signupUrl:       "PASTE_YOUR_MICROSOFT_FORM_LINK_HERE",
  addressShort:    "--",
  addressFull:     "--",
  membershipPrice: "--",
  footerBlurb:     "A student society of the University of Oxford for the study and appreciation of weather and climate.",
  affiliation:     "Affiliated to the Oxford SU · Not affiliated with the Met Office",

  /* ---- Navigation: the menu links (order matters) -------------------------- */
  nav: [
    { label: "Home",      page: "home",     href: "index.html" },
    { label: "Term Card", page: "termcard", href: "termcard.html" },
    { label: "About Us",  page: "about",    href: "about.html" },
    { label: "Join",      page: "join",     href: "join.html" },
    { label: "Contact",   page: "contact",  href: "contact.html" },
  ],

  /* ---- HOME PAGE ----------------------------------------------------------- */
  home: {
    eyebrow:    "Founded 2026 · University of Oxford",
    heroHeading:"",
    heroLede:   "",
    primaryCta:   { label: "Join the Society", href: "join.html" },
    secondaryCta: { label: "See this term's events", href: "termcard.html" },

    featuresEyebrow: "What we do",
    featuresHeading: "Oxford Meteorogical Society aims to share the passion for the weather across the University, across all levels of prior knowledge",
    featuresIntro:   "Forecasting sessions, guest speakers, lectures, social events, trips, and more",
    features: [
      { icon: "🎙️", title: "Guest Lectures",    text: "Talks from leading forecasters and scientists on a wide variety of topics." },
      { icon: "🎈", title: "Field & Practical", text: "Oxford hosts the oldest meteorogical observatory in the UK at the Radcliffe Observatory" },
      { icon: "🌍", title: "Socials & Trips",   text: "Social events, cross-society and cross-university collaborations" },
    ],

    stats: [
      { num: "TBD", label: "Members" },
      { num: "Many",    label: "Events / term" },
      { num: "1772", label: "Oldest UK weather record*" },
      { num: "£5",   label: "Annual membership" },
    ],
    statsNote: "*The Radcliffe Observatory holds one of the longest continuous weather records in Britain.",

    ctaHeading: "New term, new skies",
    ctaText:    "Our Michaelmas programme is live. Come along to the first talk — free for all Oxford students, and your first session is on us.",
    ctaButton:  { label: "View the Term Card", href: "termcard.html" },
  },

  /* ---- TERM CARD PAGE ------------------------------------------------------ */
  termcard: {
    eyebrow:  "Michaelmas Term 2026",
    heading:  "Term Card",
    lede:     "",
    cardTitle:  "Weekly Programme",
    cardSubtitle: "Weeks 0–8 · Michaelmas",
    events: [
      { week: "Week 0", date: "October 10th", title: "Welcome Drinks & Freshers' Forecast", speaker: "", desc: "Meet the committee, sign up for the year, and try your hand at a live forecasting competition. Super fun, and there will be drinks/snacks!", tag: "Social", location: "Earth Sciences Department" },
      { week: "Week 1", date: "October 17th", title: "Tornado and Storm Research Organisation Conference", speaker: "", desc: "An incredible event, showcasing the latest research in tornado and storm science in the UK. Numerous talks by professional meteorologists and academics", tag: "Conference", location: "Oxford Brookes Conference Hall" },
      { week: "Week 3", date: "October 27th", title: "Meteorological Quiz Night", speaker: "", desc: "Fun quiz night ", tag: "Quiz", location: "Earth Sciences Department" },
      { week: "Week 5", date: "November 14th", title: "Forecast and Weather Discussion Evening", speaker: "", desc: "A fun, chill night, talking about recent weather events, sharing storm experiences, and more", tag: "Social", location: "Earth Sciences Department" },
      { week: "Week 6", date: "TBD", title: "Potential Speaker Event", speaker: "" , desc: "TBD", tag: "Talk", location: "TBD" },
      { week: "Week 7", date: "November 25th", title: "Meteorological Society Bar Crawl", speaker: "", desc: "Bar Crawl", tag: "Bar Crawl", location: "Oxford College Bars" },
      { week: "Week 8", date: "December 1st",  title: "Meteorology Movie Night", speaker: "", desc: "Watch a meteorolgical movie (decided by a vote) as a fun way to round off the term", tag: "Social", location: "Earth Sciences Department" },
    ],
    ctaHeading: "Never miss an event",
    ctaText:    "",
    ctaButton:  { label: "Become a Member", href: "join.html" },
  },

  /* ---- ABOUT PAGE ---------------------------------------------------------- */
  about: {
    eyebrow:    "About the Society",
    heroHeading:"A society for anyone who looks up.",
    heroLede:   "We bring together students from every college and discipline to explore the science, beauty and impact of the weather.",

    sections: [
      { heading: "Our story", paragraphs: [
        "The Meteorological Society was founded in 2026 by a small group of Earth Sciences students who love to learn, think, and talk about the weather. What began as an informal group of friends who would watch tornado videos  aims to grow into a society that loves everything weather.",
        "Oxford has a remarkable meteorological heritage: the Radcliffe Observatory has recorded the city's weather almost continuously since 1772, giving Britain one of its longest unbroken climate records. We're proud to carry a little of that tradition forward — this time with social events!",
      ]},
      { heading: "What we stand for", paragraphs: [
        "We believe understanding the atmosphere should be open to everyone, not just physicists. Whether you want to forecast, photograph, or simply understand the sky above you, there's a place for you here. We're committed to being accessible, welcoming, and genuinely fun — and to taking climate seriously along the way.",
      ]},
    ],

    values: [
      { icon: "🔭", title: "Curiosity first", text: "No prior knowledge needed. We start every topic from the ground up." },
      { icon: "🤝", title: "Open to all",     text: "Every college, every subject, every year. Undergraduates, postgraduates and staff are all welcome." },
      { icon: "🌱", title: "Not Just Climate",   text: "We focus on the dynamic, changing nature of the weather, not just long term patterns or Climate Change." },
    ],

    committeeEyebrow: "The Committee",
    committeeHeading: "Meet the 2026–27 team",
    committeeIntro:   "Your friendly, weather-obsessed committee. Come and say hello at any event.",
    committee: [
      { emoji: "🌩️", name: "Alex Holmes",  role: "President and Founder" },
      { emoji: "🌬️", name: "Amber Wells",    role: "Vice-President and Founder" },
      { emoji: "📊", name: "Matthew Saunders", role: "Treasurer" },
      { emoji: "✉️", name: "Elliot Yu",  role: "Secretary" },
      { emoji: "🎈", name: "Honcques Laus and Evangeline Ashton",  role: "Social Secretarys" },
      { emoji: "📷", name: "Holly Neaves and Max Turnbull",  role: "Social Media Officers" },
      { emoji: "🎓", name: "Eva Westcott",   role: "Welfare Officer" },
      { emoji: "🌍", name: "Nihal Bedi", role: "Research Officer" },
    ],

    ctaHeading: "Come and join us",
    ctaText:    "The membership fee is to be decided.",
    ctaButton:  { label: "Join the Society", href: "join.html" },
  },

  /* ---- JOIN PAGE ----------------------------------------------------------- */
  join: {
    eyebrow:    "Membership",
    heroHeading:"Join the Society.",
    heroLede:   "Membership is open to all members of the University.",

    benefitsEyebrow: "Why join",
    benefitsHeading: "What membership gets you",
    benefits: [
      { icon: "🎟️", title: "Every event, included", text: "Free or discounted entry to all our talks, workshops and field trips throughout the year." },
      { icon: "📩", title: "The weekly bulletin",   text: "Our term card and a friendly reminder each week so you never miss what's on." },
      { icon: "🎈", title: "Priority on trips",     text: "First dibs on limited-place expeditions like radiosonde launches and observatory visits." },
      { icon: "🍽️", title: "Members' socials",     text: "Termly dinners and socials, including a discounted ticket to our annual dinner." },
      { icon: "🎓", title: "Careers & contacts",    text: "Careers events and introductions to alumni working across meteorology and climate." },
      { icon: "🤝", title: "A ready-made community", text: "A welcoming group of people across every college who love the weather as much as you do." },
    ],

    priceHeading: "Annual membership",
    price:        "£TBD",
    pricePeriod:  "for the full year",
    priceNote:    "One-off payment covering Michaelmas, Hilary and Trinity terms. Your first event is free.",
    pricePoints: [
      "Open to all Oxford students & staff",
      "First event free — no commitment",
    ],

    // Sign-up uses your Microsoft Form (link set as "signupUrl" in the Brand section above).
    signupHeading: "Ready to join?",
    signupText:    "Sign-up takes two minutes via our official form. We'll then add you to the official members' Whatsapp group.",
    signupButton:  "Open the sign-up form",
    signupNote:    "The form opens in a new tab. Trouble with it? Email us and we'll sign you up manually.",
  },

  /* ---- CONTACT PAGE -------------------------------------------------------- */
  contact: {
    eyebrow:    "Get in touch",
    heroHeading:"Say hello.",
    heroLede:   "Questions about an event, keen to join, or interested in giving a talk? Drop us a line — we usually reply within a day or two.",

    formHeading: "Send us a message",
    topics: [
      "I'd like to join the society",
      "Question about an event",
      "I'd like to give a talk",
      "Sponsorship / partnership",
      "Something else",
    ],
    formNote:    "This is a demo form — it won't send anything yet. Please email us directly in the meantime.",
    sentHeading: "Thanks — message noted!",
    sentText:    "This is a demonstration form, so nothing was actually sent. To reach us for real, please email us directly.",

    infoHeading: "Other ways to reach us",
    info: [
      { icon: "✉️", label: "Email",          value: "USE_EMAIL" },     // USE_EMAIL = the address above
      { icon: "📸", label: "Instagram",      value: "USE_INSTAGRAM" }, // USE_INSTAGRAM = the handle above
      { icon: "💬", label: "Members' group", value: "Join the WhatsApp after signing up" },
      { icon: "📍", label: "Where to find us", value: "USE_ADDRESS_FULL" }, // USE_ADDRESS_FULL = the full address above
      { icon: "🕒", label: "Committee hours", value: "We answer messages during Oxford full term, Mon–Fri" },
    ],
  },

};
