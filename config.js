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
  email:           "committee@oumetsoc.ox.ac.uk",
  instagram:       "@oumetsoc",
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
    featuresHeading: "Weather, from the ground up",
    featuresIntro:   "Each term we run a programme of talks, hands-on sessions and expeditions — all open to members across every college and subject.",
    features: [
      { icon: "🎙️", title: "Guest Lectures",    text: "Weekly talks from leading forecasters, climate scientists and Oxford researchers on everything from monsoons to Martian weather." },
      { icon: "🎈", title: "Field & Practical", text: "Launch radiosondes, tour the Radcliffe Meteorological Station, and learn to read synoptic charts and satellite imagery." },
      { icon: "🌍", title: "Socials & Trips",   text: "Storm-chasing weekends, observatory visits and termly dinners — because the best forecasts are made among friends." },
    ],

    stats: [
      { num: "240+", label: "Members" },
      { num: "8",    label: "Events / term" },
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
    lede:     "Eight weeks of talks, practicals and socials. Unless noted, talks begin at 6:15pm and everyone is welcome — bring a friend.",
    cardTitle:  "Weekly Programme",
    cardSubtitle: "Weeks 1–8 · Michaelmas",
    events: [
      { week: "Week 1", date: "Oct 16", title: "Welcome Drinks & Freshers' Forecast", speaker: "", desc: "Meet the committee, sign up for the year, and try your hand at a live forecasting game. Refreshments provided.", tag: "Social", location: "Beckit Room, 7pm" },
      { week: "Week 2", date: "Oct 23", title: "How the Met Office Makes a Forecast", speaker: "Dr Priya Nair · Senior Operational Meteorologist", desc: "From observations to supercomputers — the journey of a modern weather forecast.", tag: "Talk", location: "Lecture Theatre A" },
      { week: "Week 3", date: "Oct 30", title: "Reading the Sky: A Cloud Identification Workshop", speaker: "", desc: "Hands-on session on cloud types, what they tell you, and photographing them well.", tag: "Practical", location: "University Parks" },
      { week: "Week 4", date: "Nov 6",  title: "Extreme Weather in a Warming World", speaker: "Prof. Alan Whitcombe · Dept. of Physics (AOPP)", desc: "What the science really says about heatwaves, floods and the storms to come.", tag: "Talk", location: "Martin Wood Theatre" },
      { week: "Week 5", date: "Nov 13", title: "Radiosonde Launch & Station Tour", speaker: "", desc: "Help launch a weather balloon and tour the historic Radcliffe Meteorological Station. Places limited — book early.", tag: "Field Trip", location: "Green Templeton, 2pm" },
      { week: "Week 6", date: "Nov 20", title: "Weather of Other Worlds", speaker: "Dr Kofi Mensah · Planetary Physics", desc: "Dust storms on Mars, diamond rain on Neptune, and supersonic winds beyond.", tag: "Talk", location: "Lecture Theatre A" },
      { week: "Week 7", date: "Nov 27", title: "Forecasting Careers Panel", speaker: "", desc: "Alumni working in the Met Office, reinsurance, aviation and research share how they got there.", tag: "Careers", location: "Beckit Room" },
      { week: "Week 8", date: "Dec 4",  title: "Annual Meteorological Dinner", speaker: "", desc: "Round off the term in style with our black-tie dinner and guest speaker. Tickets via the committee.", tag: "Social", location: "College Hall, 7:30pm" },
    ],
    ctaHeading: "Never miss an event",
    ctaText:    "Members get the term card, weekly reminders and priority booking for trips. Sign up in two minutes.",
    ctaButton:  { label: "Become a Member", href: "join.html" },
  },

  /* ---- ABOUT PAGE ---------------------------------------------------------- */
  about: {
    eyebrow:    "About the Society",
    heroHeading:"A society for anyone who looks up.",
    heroLede:   "We bring together students from every college and discipline to explore the science, beauty and impact of the weather.",

    sections: [
      { heading: "Our story", paragraphs: [
        "The Oxford University Meteorological Society was founded in 2026 by a small group of students who kept ending up on the same rooftops during thunderstorms. What began as an informal cloud-appreciation group has grown into one of Oxford's most welcoming scientific societies.",
        "Oxford has a remarkable meteorological heritage: the Radcliffe Observatory has recorded the city's weather almost continuously since 1772, giving Britain one of its longest unbroken climate records. We're proud to carry a little of that tradition forward — with rather more coffee and considerably better waterproofs.",
      ]},
      { heading: "What we stand for", paragraphs: [
        "We believe understanding the atmosphere should be open to everyone, not just physicists. Whether you want to forecast, photograph, or simply understand the sky above you, there's a place for you here. We're committed to being accessible, welcoming, and genuinely fun — and to taking climate seriously along the way.",
      ]},
    ],

    values: [
      { icon: "🔭", title: "Curiosity first", text: "No prior knowledge needed. We start every topic from the ground up and love a good beginner's question." },
      { icon: "🤝", title: "Open to all",     text: "Every college, every subject, every year. Undergraduates, postgraduates and staff are all welcome." },
      { icon: "🌱", title: "Climate aware",   text: "We connect the weather outside the window to the bigger questions of a changing climate." },
    ],

    committeeEyebrow: "The Committee",
    committeeHeading: "Meet the 2026–27 team",
    committeeIntro:   "Your friendly, slightly weather-obsessed committee. Come and say hello at any event.",
    committee: [
      { emoji: "🌩️", name: "Eleanor Frost",  role: "President" },
      { emoji: "🌬️", name: "Rahul Desai",    role: "Vice-President" },
      { emoji: "📊", name: "Marta Kowalski", role: "Treasurer" },
      { emoji: "✉️", name: "Tom Ashby",      role: "Secretary" },
      { emoji: "🎈", name: "Aisha Bello",    role: "Events Officer" },
      { emoji: "📷", name: "Liu Wei",        role: "Media Officer" },
      { emoji: "🎓", name: "Sophie Grant",   role: "Careers Officer" },
      { emoji: "🌍", name: "James O'Connor", role: "Outreach Officer" },
    ],

    ctaHeading: "Come and join us",
    ctaText:    "Membership is £5 for the whole year and your first event is always free. We'd love to see you there.",
    ctaButton:  { label: "Join the Society", href: "join.html" },
  },

  /* ---- JOIN PAGE ----------------------------------------------------------- */
  join: {
    eyebrow:    "Membership",
    heroHeading:"Join the Society.",
    heroLede:   "Membership is open to all members of the University. It costs £5 for the whole year — and your first event is always free, so you can try us before you sign up.",

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
    price:        "£5",
    pricePeriod:  "for the full year",
    priceNote:    "One-off payment covering Michaelmas, Hilary and Trinity terms. Your first event is free.",
    pricePoints: [
      "Open to all Oxford students & staff",
      "First event free — no commitment",
      "Cancel any time, no questions asked",
    ],

    // Sign-up uses your Microsoft Form (link set as "signupUrl" in the Brand section above).
    signupHeading: "Ready to join?",
    signupText:    "Sign-up takes two minutes via our official form. We'll then be in touch about payment and adding you to the members' group.",
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
      { icon: "💬", label: "Members' group", value: "Join the WhatsApp / Discord after signing up" },
      { icon: "📍", label: "Where to find us", value: "USE_ADDRESS_FULL" }, // USE_ADDRESS_FULL = the full address above
      { icon: "🕒", label: "Committee hours", value: "We answer messages during Oxford full term, Mon–Fri" },
    ],
  },

};
