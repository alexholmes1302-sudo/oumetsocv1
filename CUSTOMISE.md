# Customising the website

Almost everything you'll want to change lives in **one file: `config.js`**.
Open it in any text editor, change the text between the `"quotes"`, save, and
refresh the page in your browser. You do **not** need to touch the `.html` files.

## Where things are

| File            | What it's for                                              |
|-----------------|-----------------------------------------------------------|
| `config.js`     | **All your content** — name, email, events, committee, etc. Edit this. |
| `style.css`     | Colours, fonts and spacing. Edit only if you want a visual restyle. |
| `site.js`       | The engine that builds the pages. You shouldn't need to edit this. |
| `*.html`        | Thin page shells that load the above. Leave as-is.        |

## Common changes

- **Society name / email / address** — top of `config.js` (the "Brand" section).
- **Change the colours** — in `style.css`, edit the variables under `:root`
  (e.g. `--oxford`, `--sky`). They control the whole site.
- **Add an event** — in `config.js` under `termcard.events`, copy one
  `{ week: ..., date: ..., ... }` block, paste it, and edit it. Keep the commas.
- **Add / remove a committee member** — same idea under `about.committee`.
- **Add a membership benefit** — under `join.benefits`.
- **Menu links** — the `nav` list near the top of `config.js`.

## Notes

- **Sign-up (Join page)** goes to your **Microsoft Form** — paste your form's
  share link into `signupUrl` near the top of `config.js` and the Join button
  will use it. Until you do, the button falls back to an "email us to join" link.
- The **contact** form is still a demo (it shows a confirmation but doesn't send).
  People can reach you via the email/links listed beside it. If you'd rather it
  also went to a Microsoft Form, just ask.
- See `HOSTING.md` for how to put the site online for free (GitHub Pages).
- Emoji are optional placeholders for a logo/crest. Replace `logoEmoji` (and the
  committee `emoji`) whenever you have your own artwork.
- The pages are built by JavaScript, so view them through a browser (double-click
  an `.html` file, or host the folder). They won't render as plain text files.
