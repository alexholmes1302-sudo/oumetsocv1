# Putting the website online (free) — GitHub Pages

This hosts the site for **£0**, with no monthly fees. Once set up, anyone on the
committee can update the site by editing `config.js` in their browser.

You'll do this once. Budget ~15 minutes.

---

## Part 1 — One-time setup

### 1. Create a GitHub account for the society
- Go to <https://github.com> and sign up.
- **Recommended:** use a shared society email (e.g. your `committee@…` address), not
  a personal one, so the account can be handed to next year's committee.
- *(Optional but ideal for handover:* after signing up, create an **Organisation**
  — top-right **+** → *New organization* → free plan — named e.g. `oumetsoc`.
  You then add/remove committee members each year instead of sharing a password.)

### 2. Create the repository ("repo")
- Click the **+** (top-right) → **New repository**.
- **Repository name:** `oumetsoc` (or anything — this becomes part of the web address).
- Set it to **Public**.
- Tick **Add a README file**.
- Click **Create repository**.

### 3. Upload the website files
- On the repo page, click **Add file** → **Upload files**.
- Drag in **the contents of the `metsoc` folder** — i.e. `index.html`, `about.html`,
  `termcard.html`, `join.html`, `contact.html`, `style.css`, `config.js`, `site.js`.
  **Upload the files themselves, not the `metsoc` folder** (so `index.html` sits at
  the top level of the repo).
- Scroll down, click **Commit changes**.

### 4. Turn on GitHub Pages
- In the repo, go to **Settings** (top tab) → **Pages** (left sidebar).
- Under **Build and deployment → Source**, choose **Deploy from a branch**.
- **Branch:** select `main`, folder `/ (root)`, then **Save**.
- Wait ~1–2 minutes. Refresh the page — it'll show your live address, e.g.
  **`https://oumetsoc.github.io/oumetsoc/`**. Done! 🎉

---

## Part 2 — Updating the site later (the easy bit)

No software needed. To change events, committee, text, etc.:

1. Open the repo on github.com and click **`config.js`**.
2. Click the **pencil ✏️** (top-right of the file) to edit.
3. Make your changes (see `CUSTOMISE.md` for what's what).
4. Scroll down, click **Commit changes**.
5. Wait ~1 minute and refresh the site — your edits are live.

---

## Part 3 — Handing over to next year's committee

- **If you used an Organisation:** add the new committee as members
  (Org → People → Invite), and remove those who've left. Nothing else to do.
- **If you used a plain account:** pass on the login details securely, or ask the
  new committee to create their own account and give them access to the repo
  (repo → Settings → Collaborators).

---

## Optional: a nicer web address

The free `github.io` address works forever. If you later want something like
`oumetsoc.org.uk`, buy a domain (~£5–12/year from any registrar) and point it at
GitHub Pages (repo → Settings → Pages → **Custom domain**). Ask if you want steps.

## Also worth trying
Email the **Oxford SU** — they may host society sites and can sometimes give you a
tidier web address for free.
