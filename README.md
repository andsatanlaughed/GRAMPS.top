# GRAMPS.me (formerly gramps.top)

Static site for **GRAMPS.me** — Dan Barton's porch-light site:
the stories, the humor, and the wisdom that comes with 71 years.

As of Oct 2026 the primary domain is **gramps.me**; gramps.top should forward
to it (see Hosting). The folder keeps its old name so the git remote and local
paths don't change.

Hand-built HTML pages styled with a locally compiled Tailwind CSS build.
No framework, no runtime — static files you can host anywhere (GitHub Pages,
Netlify, Cloudflare Pages, plain Apache/Nginx).

## Pages

| File                | Page                                                         |
| ------------------- | ------------------------------------------------------------ |
| `index.html`        | Home — hero, what's here, GUS, bio, Santa GRAMPS, network, CTA |
| `stories.html`      | Story list — one card per story                              |
| `story-sample.html` | Story template, with the comments area at the end            |
| `poetry.html`       | Poems, shown in full, newest first                           |

The home page keeps its anchor sections (`#whats-here`, `#gus`, `#who`,
`#santa`, `#connect`); the other pages link to them as `index.html#who`.

### Adding a story or a poem

- **Story:** copy `story-sample.html` to `story-<short-name>.html`, write the
  story, then copy the card in `stories.html` and point it at the new file.
  Remove the `noindex` meta tag in the copy.
- **Poem:** copy an `<article>` block in `poetry.html`, give it a new `id`, and
  paste the poem into `<div class="poem">` — line breaks are kept as written.

Rebuild the CSS after either (`npm run build`).

The sample story and poem are placeholders marked "Sample". How Dan submits
his own writing and how reader comments work hasn't been decided yet — the
comments area on the story page is a mailto fallback until a comment system
is picked.

## Develop & Build

Tailwind is installed locally (no CDN). The CSS compiles from `src/input.css`
to `style.css`.

```bash
npm install        # one time
npm run build      # compile + minify style.css for production
npm run watch      # rebuild style.css on change while developing
npm run serve      # http://localhost:8000
```

Re-run `npm run build` after editing `index.html` (it holds the Tailwind
classes) or `src/input.css`. **A change that isn't rebuilt won't show up.**

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
- **Shop** (nav, footer) → `https://shop-url-here.fourthwall.com`, a placeholder
  until Dan's Fourthwall shop URL is known. The same placeholder is used on
  every site in the network; see `santagramps.com/README.md` for a one-line
  swap.

## Hosting

Intended for **GitHub Pages** with a custom domain via the `CNAME` file →
`gramps.me`. Order matters when switching: point gramps.me's DNS at GitHub
Pages first, push the new `CNAME`, then make gramps.top a redirect to
https://gramps.me (a Cloudflare redirect rule, since gramps.top is already on
Cloudflare). GitHub Pages serves only the one domain in `CNAME`, so gramps.top
stops working on its own the moment the new `CNAME` is live. Static only, so there's no server-side form — the Say Hello
section uses a `mailto:` link to **DRB@danbarton.me**, same as danbarton.me.
