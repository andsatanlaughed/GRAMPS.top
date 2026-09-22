# gramps.top

Static landing page for **GRAMPS.top** — Dan Barton's porch-light site:
the stories, the humor, and the wisdom that comes with 71 years.

One hand-built HTML page styled with a locally compiled Tailwind CSS build.
No framework, no runtime — static files you can host anywhere (GitHub Pages,
Netlify, Cloudflare Pages, plain Apache/Nginx).

## Pages

| File         | Page                                                    |
| ------------ | ------------------------------------------------------- |
| `index.html` | Everything — hero, what's here, GUS, bio, network, CTA  |

It's a single page with anchor sections (`#whats-here`, `#gus`, `#who`,
`#connect`). When a section outgrows the page — the stories, most likely —
break it out into its own file and switch the nav links over.

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


## Hosting

Intended for **GitHub Pages** with a custom domain via the `CNAME` file →
`gramps.top`. Static only, so there's no server-side form — the Say Hello
section uses a `mailto:` link to **DRB@danbarton.me**, same as danbarton.me.
