/* ============================================================================
   site.js — builds each page from the details in config.js.
   You normally do NOT need to edit this file; edit config.js instead.
   ============================================================================ */
(function () {
  "use strict";

  // Escape text so quotes / & / < don't break the markup.
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  // Resolve the little placeholder tokens used in config (e.g. USE_EMAIL).
  function resolve(v) {
    switch (v) {
      case "USE_EMAIL":        return SITE.email;
      case "USE_INSTAGRAM":    return SITE.instagram;
      case "USE_ADDRESS_FULL": return SITE.addressFull;
      case "USE_ADDRESS_SHORT":return SITE.addressShort;
      default:                 return v;
    }
  }

  /* ---- Shared header ------------------------------------------------------- */
  function header(activePage) {
    var links = SITE.nav.map(function (n) {
      var cls = n.page === activePage ? ' class="active"' : "";
      return '<li><a' + cls + ' href="' + esc(n.href) + '">' + esc(n.label) + "</a></li>";
    }).join("");

    return '' +
      '<header class="site-header"><div class="wrap nav">' +
        '<a class="brand" href="index.html">' +
          '<span class="mark">' + esc(SITE.logoEmoji) + "</span>" +
          '<span class="name"><b>' + esc(SITE.brandLine1) + "</b>" +
          "<span>" + esc(SITE.brandLine2) + "</span></span>" +
        "</a>" +
        '<button class="nav-toggle" aria-label="Toggle navigation" ' +
          "onclick=\"document.getElementById('menu').classList.toggle('open')\">&#9776;</button>" +
        '<ul class="nav-links" id="menu">' + links + "</ul>" +
      "</div></header>";
  }

  /* ---- Shared footer ------------------------------------------------------- */
  function footer() {
    var links = SITE.nav.map(function (n) {
      return '<li><a href="' + esc(n.href) + '">' + esc(n.label) + "</a></li>";
    }).join("");

    return '' +
      '<footer class="site-footer"><div class="wrap">' +
        '<div class="footer-grid">' +
          '<div class="footer-brand"><h4>' + esc(SITE.name) + "</h4>" +
            "<p>" + esc(SITE.footerBlurb) + "</p></div>" +
          "<div><h4>Explore</h4><ul>" + links + "</ul></div>" +
          "<div><h4>Get in touch</h4><ul>" +
            '<li><a href="mailto:' + esc(SITE.email) + '">' + esc(SITE.email) + "</a></li>" +
            "<li>" + esc(SITE.addressShort) + "</li>" +
          "</ul></div>" +
        "</div>" +
        '<div class="footer-bottom">' +
          "<span>&copy; " + esc(SITE.founded) + " " + esc(SITE.name) + "</span>" +
          "<span>" + esc(SITE.affiliation) + "</span>" +
        "</div>" +
      "</div></footer>";
  }

  /* ---- Small building blocks ---------------------------------------------- */
  function hero(eyebrow, heading, lede, buttons) {
    var btns = "";
    if (buttons && buttons.length) {
      btns = '<div class="btn-row">' + buttons.map(function (b, i) {
        var cls = i === 0 ? "btn btn-primary" : "btn btn-ghost";
        return '<a class="' + cls + '" href="' + esc(b.href) + '">' + esc(b.label) + "</a>";
      }).join("") + "</div>";
    }
    return '<section class="hero"><div class="wrap">' +
      '<p class="eyebrow">' + esc(eyebrow) + "</p>" +
      "<h1>" + esc(heading) + "</h1>" +
      (lede ? '<p class="lede">' + esc(lede) + "</p>" : "") +
      btns +
    "</div></section>";
  }

  function sectionHead(eyebrow, heading, intro) {
    return '<div class="section-head">' +
      (eyebrow ? '<p class="eyebrow">' + esc(eyebrow) + "</p>" : "") +
      "<h2>" + esc(heading) + "</h2>" +
      (intro ? "<p>" + esc(intro) + "</p>" : "") +
    "</div>";
  }

  function cards(items) {
    return '<div class="grid cols-3">' + items.map(function (c) {
      return '<div class="card">' +
        '<span class="icon">' + esc(c.icon) + "</span>" +
        "<h3>" + esc(c.title) + "</h3>" +
        "<p>" + esc(c.text) + "</p></div>";
    }).join("") + "</div>";
  }

  function cta(heading, text, button) {
    return '<section class="block" style="padding-top:0"><div class="wrap">' +
      '<div class="cta"><h2>' + esc(heading) + "</h2>" +
      "<p>" + esc(text) + "</p>" +
      (button ? '<a class="btn btn-primary" href="' + esc(button.href) + '">' + esc(button.label) + "</a>" : "") +
      "</div></div></section>";
  }

  /* ---- Page: Home --------------------------------------------------------- */
  function renderHome() {
    var d = SITE.home;
    return (
      hero(d.eyebrow, d.heroHeading, d.heroLede, [d.primaryCta, d.secondaryCta]) +
      '<section class="block"><div class="wrap">' +
        sectionHead(d.featuresEyebrow, d.featuresHeading, d.featuresIntro) +
        cards(d.features) +
      "</div></section>" +
      '<section class="block" style="padding-top:0"><div class="wrap">' +
        '<div class="stats">' + d.stats.map(function (s) {
          return '<div class="stat"><div class="num">' + esc(s.num) + "</div>" +
                 '<div class="lbl">' + esc(s.label) + "</div></div>";
        }).join("") + "</div>" +
        (d.statsNote ? '<p style="text-align:center;color:var(--muted);font-size:13px;margin-top:14px">' + esc(d.statsNote) + "</p>" : "") +
      "</div></section>" +
      cta(d.ctaHeading, d.ctaText, d.ctaButton)
    );
  }

  /* ---- Page: Term Card ---------------------------------------------------- */
  function renderTermcard() {
    var d = SITE.termcard;
    var events = d.events.map(function (e) {
      return '<div class="event">' +
        '<div class="when"><span class="wk">' + esc(e.week) + "</span>" +
          '<span class="date">' + esc(e.date) + "</span></div>" +
        '<div class="what"><h4>' + esc(e.title) + "</h4>" +
          (e.speaker ? '<p class="speaker">' + esc(e.speaker) + "</p>" : "") +
          "<p>" + esc(e.desc) + "</p></div>" +
        '<div class="meta"><span class="tag">' + esc(e.tag) + "</span>" +
          (e.location ? "<br>" + esc(e.location) : "") + "</div>" +
      "</div>";
    }).join("");

    return (
      hero(d.eyebrow, d.heading, d.lede) +
      '<section class="block"><div class="wrap">' +
        '<div class="termcard"><div class="tc-head">' +
          "<h3>" + esc(d.cardTitle) + "</h3>" +
          '<span class="term">' + esc(d.cardSubtitle) + "</span>" +
        "</div>" + events + "</div>" +
        '<div class="cta" style="margin-top:40px"><h2>' + esc(d.ctaHeading) + "</h2>" +
          "<p>" + esc(d.ctaText) + "</p>" +
          '<a class="btn btn-primary" href="' + esc(d.ctaButton.href) + '">' + esc(d.ctaButton.label) + "</a>" +
        "</div>" +
      "</div></section>"
    );
  }

  /* ---- Page: About -------------------------------------------------------- */
  function renderAbout() {
    var d = SITE.about;
    var prose = d.sections.map(function (s) {
      return "<h2>" + esc(s.heading) + "</h2>" +
        s.paragraphs.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("");
    }).join("");

    var team = d.committee.map(function (m) {
      return '<div class="person"><div class="avatar">' + esc(m.emoji) + "</div>" +
        "<b>" + esc(m.name) + "</b><span>" + esc(m.role) + "</span></div>";
    }).join("");

    return (
      hero(d.eyebrow, d.heroHeading, d.heroLede) +
      '<section class="block"><div class="wrap prose">' + prose + "</div></section>" +
      '<section class="block" style="padding-top:0"><div class="wrap">' + cards(d.values) + "</div></section>" +
      '<section class="block" style="padding-top:0"><div class="wrap">' +
        sectionHead(d.committeeEyebrow, d.committeeHeading, d.committeeIntro) +
        '<div class="team">' + team + "</div>" +
      "</div></section>" +
      cta(d.ctaHeading, d.ctaText, d.ctaButton)
    );
  }

  /* ---- Page: Join --------------------------------------------------------- */
  function renderJoin() {
    var d = SITE.join;
    var points = d.pricePoints.map(function (p) {
      return '<li style="display:flex;gap:10px;padding:8px 0;border-top:1px solid var(--line)"><span>✓</span><span>' + esc(p) + "</span></li>";
    }).join("");

    var haveForm = SITE.signupUrl && SITE.signupUrl.indexOf("PASTE_YOUR") !== 0;
    var signupAction = haveForm
      ? '<a class="btn btn-primary" href="' + esc(SITE.signupUrl) + '" target="_blank" rel="noopener">' + esc(d.signupButton) + "</a>"
      : '<p class="form-note" style="margin-top:0">⚠️ Sign-up link not set yet — paste your Microsoft Form link into <b>signupUrl</b> in config.js.</p>' +
        '<a class="btn btn-primary" href="mailto:' + esc(SITE.email) + '">Email us to join</a>';

    return (
      hero(d.eyebrow, d.heroHeading, d.heroLede) +
      '<section class="block"><div class="wrap">' +
        sectionHead(d.benefitsEyebrow, d.benefitsHeading, "") +
        '<div class="grid cols-3">' + d.benefits.map(function (b) {
          return '<div class="card"><span class="icon">' + esc(b.icon) + "</span>" +
                 "<h3>" + esc(b.title) + "</h3><p>" + esc(b.text) + "</p></div>";
        }).join("") + "</div>" +
      "</div></section>" +

      '<section class="block" style="padding-top:0"><div class="wrap"><div class="contact-grid">' +
        // Left: sign-up call to action (links to the Microsoft Form)
        '<div><div class="card">' +
          "<h2 style=\"margin-top:0\">" + esc(d.signupHeading) + "</h2>" +
          "<p style=\"color:var(--ink-2)\">" + esc(d.signupText) + "</p>" +
          signupAction +
          (d.signupNote ? '<p class="form-note">' + esc(d.signupNote) + "</p>" : "") +
        "</div></div>" +
        // Right: price card
        '<div><div class="card">' +
          "<h3 style=\"margin-top:0\">" + esc(d.priceHeading) + "</h3>" +
          '<div style="display:flex;align-items:baseline;gap:8px;margin:6px 0 4px">' +
            '<span style="font-family:var(--serif);font-size:44px;color:var(--sky);font-weight:600">' + esc(d.price) + "</span>" +
            '<span style="color:var(--ink-2)">' + esc(d.pricePeriod) + "</span></div>" +
          '<p style="color:var(--ink-2);margin-top:0">' + esc(d.priceNote) + "</p>" +
          '<ul style="list-style:none;padding:0;margin:8px 0 0">' + points + "</ul>" +
        "</div></div>" +
      "</div></div></section>"
    );
  }

  /* ---- Page: Contact ------------------------------------------------------ */
  function renderContact() {
    var d = SITE.contact;
    var topicOpts = d.topics.map(function (t) { return "<option>" + esc(t) + "</option>"; }).join("");

    var info = d.info.map(function (i) {
      var val = resolve(i.value);
      var inner;
      if (i.value === "USE_EMAIL")      inner = '<a href="mailto:' + esc(val) + '">' + esc(val) + "</a>";
      else                              inner = esc(val);
      return '<li><span class="ci-icon">' + esc(i.icon) + "</span>" +
        "<span><b>" + esc(i.label) + "</b><span>" + inner + "</span></span></li>";
    }).join("");

    return (
      hero(d.eyebrow, d.heroHeading, d.heroLede) +
      '<section class="block"><div class="wrap"><div class="contact-grid">' +
        // Left: message form
        "<div><h2 style=\"margin-top:0\">" + esc(d.formHeading) + "</h2>" +
        "<form onsubmit=\"event.preventDefault(); this.style.display='none'; document.getElementById('sent').style.display='block';\">" +
          '<div class="field"><label for="name">Your name</label><input id="name" type="text" required autocomplete="name"></div>' +
          '<div class="field"><label for="email">Email address</label><input id="email" type="email" required autocomplete="email" placeholder="you@ox.ac.uk"></div>' +
          '<div class="field"><label for="topic">What\'s this about?</label><select id="topic">' + topicOpts + "</select></div>" +
          '<div class="field"><label for="message">Message</label><textarea id="message" required></textarea></div>' +
          '<button class="btn btn-primary" type="submit">Send message</button>' +
          '<p class="form-note">' + esc(d.formNote) + "</p>" +
        "</form>" +
        '<div id="sent" style="display:none"><div class="card"><span class="icon">✅</span>' +
          "<h3>" + esc(d.sentHeading) + "</h3><p>" + esc(d.sentText) + " " +
          '<a href="mailto:' + esc(SITE.email) + '">' + esc(SITE.email) + "</a>.</p></div></div>" +
        "</div>" +
        // Right: contact info
        "<div><h2 style=\"margin-top:0\">" + esc(d.infoHeading) + "</h2>" +
          '<ul class="contact-info">' + info + "</ul>" +
        "</div>" +
      "</div></div></section>"
    );
  }

  /* ---- Boot --------------------------------------------------------------- */
  var renderers = {
    home: renderHome, termcard: renderTermcard, about: renderAbout,
    join: renderJoin, contact: renderContact,
  };

  document.addEventListener("DOMContentLoaded", function () {
    if (typeof SITE === "undefined") return;
    var page = document.body.getAttribute("data-page");
    var app = document.getElementById("app");
    var body = renderers[page] ? renderers[page]() : "";
    if (app) app.innerHTML = header(page) + body + footer();
  });
})();
