# GRAMPS.me (formerly gramps.top)

Static site for **GRAMPS.me** — Dan Barton's porch-light site:
the stories, the humor, and the wisdom that comes with 72 years.

As of Oct 2026 the primary domain is **gramps.me**; gramps.top should forward
to it (see Hosting). The folder keeps its old name so the git remote and local
paths don't change.

Hand-built HTML styled with a locally compiled Tailwind CSS build, assembled by
**Jekyll** — which GitHub Pages runs on every push, so there's nothing extra to
deploy. Pages without front matter are copied as-is.

## Pages

| File                    | Page                                                         |
| ----------------------- | ------------------------------------------------------------ |
| `index.html`            | Home — hero, what's here, GUS, bio, Santa GRAMPS, network, CTA |
| `stories.html`          | Story list, built from `_stories/`, newest first             |
| `_layouts/story.html`   | One story — body, "— GRAMPS", comments, more stories         |
| `poetry.html`           | Poems shown in full, built from `_poems/`, newest first      |

Shared pieces live in `_includes/`: `head.html`, `header.html` (menu — Shop is
always last), `footer.html`, `comments.html`. Edit the menu there once and every
page follows. Site-wide settings — the **Shop URL** and the **Cusdis App ID** —
are in `_config.yml`.

Stories get their own address: `_stories/2026-10-31-divine-intervention-and-the-cpap-mask.md`
→ `gramps.me/stories/divine-intervention-and-the-cpap-mask/`.

## Posting a poem or a story

**Dan posts from his browser (phone or computer) with Pages CMS** —
https://app.pagescms.org. Sign in with the GitHub account that owns this repo,
open the repo, and "Poems" and "Stories" appear as simple forms (title, date,
the poem or story, optional photo). Saving commits a file; GitHub Pages
rebuilds the site in a minute or two. The forms are defined in `.pages.yml`.

To do it by hand instead, add a Markdown file:

- **Poem** — `_poems/YYYY-MM-DD-short-name.md`, front matter only. Put the poem
  in a `poem: |` block; every line break and blank stanza line is kept.
  Optional: `epigraph`, `afterword`, `note`.
- **Story** — `_stories/YYYY-MM-DD-short-name.md` with `title`, `date` and a
  `teaser`, then the story as ordinary paragraphs. A line starting with `>`
  becomes a pull quote. Optional: `image`, `image_alt`.

The first poem ("Picture Or Story", from Dan's Jul 19, 2026 text) and first
story ("Divine Intervention and the CPAP Mask", from the old PictureOrStory
site) are Dan's own.

## Comments

Each story ends with a comments section powered by **Cusdis** (https://cusdis.com):
readers type a name and a comment — no account — and nothing appears until it's
approved from the Cusdis dashboard or the email it sends.

To switch it on: create a free Cusdis account, add a website, and paste its
**App ID** into `cusdis_app_id` in `_config.yml`. Until then the section shows
a "Write to GRAMPS" email link (DRB@danbarton.me) instead.

## Develop & Build

Tailwind is installed locally (no CDN). The CSS compiles from `src/input.css`
to `style.css`, scanning the pages, `_includes/` and `_layouts/`.

```bash
npm install        # one time
npm run build      # compile + minify style.css for production
npm run watch      # rebuild style.css on change while developing
```

Re-run `npm run build` after changing classes in any page, include or layout,
or in `src/input.css`. **A change that isn't rebuilt won't show up.** New poems
and stories don't need a rebuild — they use classes that are already there.

To preview the whole site locally you need Jekyll (`gem install jekyll`), then
`jekyll serve` and open http://localhost:4000. A plain static server won't
work any more: the includes and the poem/story lists are filled in by Jekyll.

## Design system

Same DNA as andsatanlaughed.com and danbarton.me — Cormorant Garamond
(display serif), Inter (body), Caveat (the handwritten GUS voice) — loaded
from Google Fonts in the page `<head>`.

The difference is which brand color leads. The flagship leads with red;
**GRAMPS.top leads with gold** (`brand.gold` `#b8891f`) and keeps red as the
accent on the handwritten lines. Warm `paper` cream, warm near-black `ink`.
All of it is in `tailwind.config.js`; the reusable component classes
(`.btn-primary`, `.card`, `.eyebrow`, `.nav-link`) are in `src/input.css`.

Gold carries real text here, which it doesn't on the other sites, so the ramp
is split by job: `brand.gold` `#b8891f` is decorative and display-size only
(the word "Gramps.", rules, bullets); `brand.gold-deep` `#8c6512` is anything
small — eyebrows, links, button backgrounds — because it clears 4.5:1 on the
cream and `brand.gold` only clears 3:1. `brand.gold-dark` is the button hover.
Keep small gold text on `gold-deep`.

## Copy note

GRAMPS.top is deliberately *not* the GROWTH CONCEPT site — those live at
Growth-Concept.com, which is linked from the network section. Keep this page
on the personal side: stories, humor, hard-won wisdom.

## Pre-launch notice

The dark strip above the header (`.build-notice` in `src/input.css`) says the
site is a work in progress. **Delete that `<div>` from `index.html` when the
site is done** — the same strip is on the other pre-launch sites in the
network, and each carries its own wording.

## Images

Photos are copied from `danbarton.me/images` (both `.webp` and `.jpg`
fallbacks): the `logo-drb` monogram, `headshot-now` (hero), `writing` (bio).
If those are re-cropped on danbarton.me, re-copy them here.

### Favicons

Each site in the network gets its own mark so the tabs are tellable apart —
gramps.top is a cream **G** on brand gold, godrepurposesskeletons.com is a
bone **S** on brand red, both set in Cormorant Garamond to match the display
face. They're generated, not hand-drawn:

| File                        | Size    | Used for                          |
| --------------------------- | ------- | --------------------------------- |
| `favicon.ico`               | 16/32/48 | Browsers request `/favicon.ico` by default |
| `images/favicon-32.png`     | 32      | Tab icon                          |
| `images/favicon-16.png`     | 16      | Tab icon, small                   |
| `images/apple-touch-icon.png` | 180   | iOS home screen                   |
| `images/icon-512.png`       | 512     | Source / any future manifest      |

Two variants exist on purpose: the 180 and 512 carry a rounded square with a
thin inner ring, while 16/32 drop the ring and set the letter larger — at
16px the ring and the serifs turn to mush. If you regenerate them, check the
result at true 16px before shipping, not zoomed in.


## Links out

- **Santa GRAMPS** (nav, footer, home section) → https://santagramps.com
- **Shop** (last item in the menu and footer, with a bag icon) → `shop_url` in
  `_config.yml`, currently the placeholder `https://shop-url-here.fourthwall.com`
  until Dan's Fourthwall shop URL is known. The other sites hard-code the same
  placeholder; see `santagramps.com/README.md` for a one-line swap across all.

## Hosting

Intended for **GitHub Pages** with a custom domain via the `CNAME` file →
`gramps.me`. Order matters when switching: point gramps.me's DNS at GitHub
Pages first, push the new `CNAME`, then make gramps.top a redirect to
https://gramps.me (a Cloudflare redirect rule, since gramps.top is already on
Cloudflare). GitHub Pages serves only the one domain in `CNAME`, so gramps.top
stops working on its own the moment the new `CNAME` is live. Static only, so there's no server-side form — the Say Hello
section uses a `mailto:` link to **DRB@danbarton.me**, same as danbarton.me.
