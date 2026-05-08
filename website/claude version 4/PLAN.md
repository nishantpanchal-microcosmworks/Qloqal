---
name: Qloqal v4 — `mono-zine`
description: Brutalist mono-zine site, horizontal-scroll home, 100% SVG/CSS imagery
type: project
---

# Qloqal Website — `mono-zine` (claude version 4)

A new Qloqal marketing site, intentionally distinct from every existing version
(`stitch-dark`, `stitch-green`, `lovable`, `claude version1`, `claude version2`,
`claude version 3 / paper`). Same product, same 13 routes, same brand
guardrails — totally different visual language, structure, and copy.

---

## 1. Locked decisions

| Aspect           | Choice                                                                        |
| ---------------- | ----------------------------------------------------------------------------- |
| Visual style     | **Brutalist / mono-zine** — mono typeface, hard 2px borders, ASCII rules, primary-color blocks |
| Wireframe        | **Horizontal-scroll narrative** on `/` (chapters scroll left→right). Inner pages are conventional vertical scroll, same brutalist chrome |
| Imagery          | **100% generated SVG/CSS** — no photography at all. Everything is custom SVG/CSS art (chat mockups, phone frames, hatched fills, ASCII diagrams) |
| Copy             | **Rewritten end-to-end** — zine voice (declarative, numbered, terminal-flavored). No region-specific terms |
| Tech stack       | Vite 6 + React 19 + TS 5.8 + Tailwind v4 (matches stitch-green / paper for build & deploy parity) |
| Folder           | `website/claude version 4/`                                                   |

### Differentiation vs. existing versions

| Existing version | What it leans on                              | How `mono-zine` differs                                                  |
| ---------------- | --------------------------------------------- | ------------------------------------------------------------------------ |
| `stitch-dark`    | Dark UI, neon accents, glassy cards           | Stark white paper, hard ink borders, no glow, mono typography           |
| `stitch-green`   | Saturated green primary, SaaS sections        | Off-white surface, green only as block fill, no rounded cards           |
| `lovable`        | Polished SaaS sectioned scroll                | Horizontal scroll narrative, raw HTML feel, intentionally un-polished   |
| `paper` (v3)     | Warm cream + terracotta, Unsplash photos, bento grid | Cool ink + signal green/blue, SVG-only, scroll-jacked horizontal flow |

---

## 2. Tech stack & tooling

Mirrors `paper` (v3) so the build/deploy infra is interchangeable.

```
vite 6                  @tailwindcss/vite v4
react 19 / react-dom    typescript 5.8
react-router-dom v6     react-helmet-async
react-hook-form + zod   framer-motion
lucide-react            clsx + tailwind-merge
```

Scripts: `dev` / `build` (`tsc -b && vite build`) / `preview` / `lint`.

`vercel.json` mirrors v3's SPA rewrite + security/cache headers.

---

## 3. Design system

### 3.1 Color tokens (CSS `@theme` block in `src/styles.css`)

Stark, signal-coloured, high-contrast. Ink-on-paper plus the two brand greens.

```
--color-paper            #f4f1ea   /* off-white surface — slightly cooler than v3 */
--color-paper-2          #ebe6db   /* alt block fill */
--color-ink              #0b0d10   /* near-black */
--color-ink-2            #2a2d33
--color-ink-mute         #6b6f78
--color-rule             #0b0d10   /* hairlines == ink */

--color-signal-green     #47e865   /* brand primary, used only as block fill / underline */
--color-signal-green-dim #2bc74a
--color-signal-blue      #2c3dbf   /* brand secondary */
--color-signal-blue-dim  #1f2c99
--color-signal-yellow    #ffe14a   /* zine-style highlighter for KEY phrases */
--color-signal-red       #ff3b30   /* errors only */
```

> Brand spec in `WEBSITE-PROMPT.md` calls for `#47E865` to dominate. We honor that
> by using it as **flat block fills** on banners, CTA surfaces, and selected
> tiles — never as a soft gradient. Blue and yellow are accents only.

### 3.2 Typography

Single-family monospace **everywhere**. Variation comes from weight + size, not
family. This is the strongest "brutalist mono-zine" lever.

| Role            | Family                       | Weights        | Use                                |
| --------------- | ---------------------------- | -------------- | ---------------------------------- |
| Display & body  | **JetBrains Mono**           | 400 / 500 / 700 / 800 | Everything. No serif anywhere |

- Headings: `clamp(28px, 4.5vw, 88px)`, weight 800, tight tracking (-0.02em).
- Body: 16/24, weight 400.
- Kickers / captions: 12/16, weight 700, **uppercase**, letter-spacing 0.12em.
- All text uses tabular numerals (`font-feature-settings: "tnum"`) for the
  ledger feel.

### 3.3 Layout & motion

- Hard 2px ink borders on every block — `border: 2px solid var(--color-ink)`.
- **No rounded corners.** `border-radius: 0` everywhere.
- ASCII rules: a `<HR>` component that renders `+ ─── ─── ─── ─── ─── +` style
  rules using box-drawing chars + monospace alignment.
- Hatched / dotted SVG fills via `<pattern>` defs, used as block backgrounds
  when a tile needs texture.
- Hover: invert (paper↔ink). Active: 2px translate to mimic a printing-press
  press. No long animations.
- Respect `prefers-reduced-motion`: disable transforms.

### 3.4 Component primitives (`src/components/ui/`)

`Button` (primary inverts paper↔ink; secondary is outline; tertiary is
underlined link), `Block` (the brutalist box: 2px ink border, optional fill),
`Container`, `Section`, `Hr` (ASCII rule), `KickerLabel`, `Stamp` (square ink
block with mono number, e.g. `[ 03 / 09 ]`), `Marquee` (infinite-scroll mono
ticker), `Input`, `Textarea`, `Select`, `Radio`, `Checkbox`, `FormField`,
`Logo` (text-mark in mono — `q*loqal` with the asterisk in green), `Highlight`
(yellow background span for key phrases).

---

## 4. Page structure (13 routes — same as `WEBSITE-PROMPT.md`)

`/`, `/vendors`, `/customers`, `/how-it-works`, `/pricing`, `/our-customers`,
`/about`, `/faq`, `/contact`, `/privacy`, `/terms`, `/thank-you`, `*` (NotFound).

### 4.1 Home — horizontal-scroll narrative (the centerpiece)

Desktop ≥ 1024px: a horizontal-scroll-jacked story. The page is a single
horizontally-flowing track of 9 chapters, each ~100vw wide × 100vh tall. Vertical
mouse-wheel / trackpad input maps to horizontal translation via a CSS
`position: sticky` track + transform driven by scroll progress (no JS scroll
hijacking — this works on any input device including touch).

Mobile / tablet < 1024px: degrades to vertical stacked sections, same content.

A persistent zine **chapter rail** sits at the top: `[ 01 ] [ 02 ] [ 03 ] …
[ 09 ]` with the active chapter inverted (ink fill, paper text). Click jumps.

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  q*loqal           HOW IT WORKS · VENDORS · CUSTOMERS · PRICING · CONTACT   │
│  [ 01 / 09 ]  cover         > > > >                          [START SELLING]│
├──────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  CHAPTER 01 · COVER                                                          │
│   ┌───────────────────────────────────────┐                                  │
│   │  RUN YOUR SHOP                        │                                  │
│   │  ON  ▓▓▓ WHATSAPP ▓▓▓                 │ <- yellow highlighter           │
│   │  ───────────────────                  │                                  │
│   │  [ scroll right →→ ]                  │                                  │
│   └───────────────────────────────────────┘                                  │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

Chapters:

| #  | Title                                | Contents                                                                |
| -- | ------------------------------------ | ----------------------------------------------------------------------- |
| 01 | COVER                                | Hero headline + scroll-right hint + signature stamp                     |
| 02 | THE THESIS                           | Big-type one-line claim + ASCII frame + supporting paragraph           |
| 03 | THE FLOW                             | 3-frame chat mockup: order → accept → ready (pure SVG, no images)       |
| 04 | THE SPLIT                            | Side-by-side phone frames: customer (Qloqal app) vs vendor (WhatsApp)   |
| 05 | WHO IT'S FOR                         | Category grid — 10 verticals as bordered tiles                          |
| 06 | WHY WHATSAPP                         | 6 numbered reasons in a 3×2 grid, each with a hatched-pattern accent    |
| 07 | NUMBERS & PROOF                      | Three large stat blocks + 3 vendor pull-quotes in ledger style          |
| 08 | PRICING (TEASER)                     | Two columns, mono price-tag tiles, link to `/pricing`                   |
| 09 | CTA / COLOPHON                       | Final CTA on signal-green block + footer-style colophon (issue, year)   |

### 4.2 Other pages — vertical, same chrome

All non-Home pages share a header strip + page-number stamp + ASCII rule pattern.

| Page              | Layout focus                                                                |
| ----------------- | --------------------------------------------------------------------------- |
| `/vendors`        | "FIELD MANUAL FOR SELLERS" — numbered procedure (01..06) + signup form on lined paper |
| `/customers`      | "FIELD MANUAL FOR CUSTOMERS" — chat/scan/pay flow, app-store badge blocks   |
| `/how-it-works`   | Long-form spec sheet, monospace pseudo-code blocks describing the flow      |
| `/pricing`        | Two columns rendered as bordered "RECEIPT" blocks, comparison table below   |
| `/our-customers`  | Three case-study cards — quote, role, location — no photos, just SVG marks  |
| `/about`          | Manifesto in numbered statements (`#01.`, `#02.`, …) + values stamps        |
| `/faq`            | Categorized accordion with kicker labels per category                       |
| `/contact`        | Two-column: contact card tile + form on lined paper                         |
| `/thank-you`      | Single warm tile + receipt-style "next steps"                               |
| `/privacy` / `/terms` | Long-form legal scaffold, narrow column, mono body, page numbers        |
| `*` (NotFound)    | "ERROR 404 · ROUTE NOT IN INDEX" — ASCII art + link home                    |

---

## 5. Components / source tree

```
src/components/
├── layout/
│   ├── Layout.tsx           # outer shell, page-number stamp, header, footer
│   ├── Header.tsx           # mono nav with hard-rule underline on active link
│   ├── Footer.tsx           # 4-column, mono micro-copy, "issue / year" colophon
│   └── ChapterRail.tsx      # horizontal-scroll progress + chapter index (Home only)
├── chapters/                # NEW — one component per Home chapter
│   ├── ChapterCover.tsx
│   ├── ChapterThesis.tsx
│   ├── ChapterFlow.tsx
│   ├── ChapterSplit.tsx
│   ├── ChapterCategories.tsx
│   ├── ChapterWhyWhatsApp.tsx
│   ├── ChapterProof.tsx
│   ├── ChapterPricing.tsx
│   └── ChapterColophon.tsx
├── mockups/                 # 100% SVG/CSS, no images
│   ├── ChatMockup.tsx       # WhatsApp-style chat in mono palette + hard borders
│   ├── PhoneFrame.tsx       # CSS-art phone shell (no SVG icons of phones)
│   ├── CatalogMockup.tsx    # SVG list-of-items mockup with halftone fills
│   └── PaymentMockup.tsx    # SVG receipt-style payment row
├── ui/                      # primitives — see §3.4
├── decor/
│   ├── Hatch.tsx            # SVG <pattern> hatched fills (45°, 90°, dot)
│   ├── AsciiDivider.tsx     # box-drawing horizontal rules
│   ├── BlockMark.tsx        # signal-color square marker (used as bullet)
│   └── Marquee.tsx          # infinite-scroll mono ticker
├── forms/
│   ├── ContactForm.tsx      # rhf + zod, lined-paper inputs
│   └── VendorForm.tsx       # rhf + zod, full vendor signup
└── SEO.tsx                  # react-helmet-async wrapper
```

---

## 6. Data files (`src/data/`) — fully rewritten copy

Same shapes as `paper` so types are interchangeable; every string rewritten to
the brutalist/zine voice. Voice rules: declarative, numbered, terminal-flavored,
one idea per line, occasional bracketed asides `[LIKE THIS]`. Globally generic —
no Indian-specific terms, no city names beyond generic international examples
(London, Lisbon, São Paulo, Manila, Lagos).

| File                | Shape                                            | Copy direction                                                       |
| ------------------- | ------------------------------------------------ | -------------------------------------------------------------------- |
| `nav.ts`            | `{ label, to }[]` for header & footer            | UPPER-CASE mono labels                                              |
| `pricing.ts`        | 3 tiers (Free / Per-Order / Studio)              | Receipt-style copy, line-items                                       |
| `faqs.ts`           | grouped Q&A array                                | Direct, terminal-style answers                                       |
| `testimonials.ts`   | `{ quote, author, role, location }[]`            | International locations only, no UPI/kirana terms                    |
| `categories.ts`     | merchant verticals                               | Bakery, florist, repair, books, salon, hardware, etc. (10 entries)   |
| `whyWhatsApp.ts`    | bullet list                                      | 6 numbered reasons, each ≤ 12 words                                  |
| `chapters.ts` (new) | Home chapter index for the rail                  | `{ id, label, page }`                                                |
| `steps.ts` (new)    | how-it-works numbered procedure                  | 6 steps, `INPUT → STATE → OUTPUT` style                              |
| `manifesto.ts` (new)| about-page numbered claims                       | 8 declarative sentences                                              |

**Copy guardrails (from memory):** no kirana/tiffin/UPI/Dwarka or other Indian-only
terms in marketing copy.

---

## 7. Imagery strategy

**Zero photography. Zero hotlinks.** Everything below is rendered inline in
React using SVG, CSS, or HTML.

- **Chat mockup** — pure SVG: rounded-rect bubbles (border-radius 0 except
  bubble corners), monospace order text, ink/paper palette with a single
  signal-green Accept button.
- **Phone frame** — pure CSS: a 2px ink-bordered rectangle with a notch and a
  status bar made of CSS pseudo-elements; the screen is a flex column.
- **Catalog mockup** — SVG list-rows with hatched price columns, mono labels.
- **Payment mockup** — SVG receipt with dotted line + total row.
- **Stats / charts** — SVG bar/line charts drawn from data, no chart lib.
- **Decor** — SVG `<pattern>` defs for diagonal hatch, dot, halftone.
- **Logo / favicon** — pure SVG: `q*` glyph, `*` filled signal-green.
- **og-image.svg** — a single SVG composition of the cover chapter.

This is a hard rule: **no `<img src="…">` referencing external assets**.

---

## 8. Routing, SEO, deployment

- `main.tsx`: `BrowserRouter` + `HelmetProvider` + `<App/>`.
- `App.tsx`: `<Layout>` wrapping `<Routes>` for the 13 routes.
- `SEO` component sets title / description / canonical / og per page; the OG
  image is `/og-image.svg` (we render it ourselves).
- `public/`: `favicon.svg`, `og-image.svg`, `robots.txt`, `sitemap.xml`.
- `vercel.json`: SPA rewrite + same security headers + 1-year cache for `/assets/*`.

Lighthouse targets: Performance ≥ 95 (zero photos = trivial), Accessibility ≥ 95,
Best Practices ≥ 95, SEO ≥ 95.

---

## 9. File tree (target)

```
website/claude version 4/
├── PLAN.md                  ← this file
├── README.md
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
├── vercel.json
├── index.html
├── public/
│   ├── favicon.svg
│   ├── og-image.svg
│   ├── robots.txt
│   └── sitemap.xml
└── src/
    ├── main.tsx
    ├── App.tsx
    ├── styles.css
    ├── vite-env.d.ts
    ├── lib/
    │   └── cn.ts
    ├── data/
    │   ├── nav.ts
    │   ├── pricing.ts
    │   ├── faqs.ts
    │   ├── testimonials.ts
    │   ├── categories.ts
    │   ├── whyWhatsApp.ts
    │   ├── chapters.ts
    │   ├── steps.ts
    │   └── manifesto.ts
    ├── components/
    │   ├── SEO.tsx
    │   ├── layout/      (Layout, Header, Footer, ChapterRail)
    │   ├── ui/          (primitives — see §3.4)
    │   ├── decor/       (Hatch, AsciiDivider, BlockMark, Marquee)
    │   ├── chapters/    (9 Home chapter components)
    │   ├── mockups/     (ChatMockup, PhoneFrame, CatalogMockup, PaymentMockup)
    │   └── forms/       (ContactForm, VendorForm)
    └── pages/           (13 page files matching the routes)
```

---

## 10. Build order

Sequenced so each step compiles & runs on its own.

1. **Scaffold** — `package.json`, `tsconfig*`, `vite.config.ts`, `vercel.json`,
   `index.html`, `public/*`, `src/main.tsx`, `src/App.tsx` (stub routes),
   `src/styles.css` (tokens + base).
2. **Design system** — UI primitives (`Button`, `Block`, `Container`, `Section`,
   `Hr`, `KickerLabel`, `Stamp`, `Highlight`, `Logo`, `Marquee`), decor SVG
   defs (`Hatch`, `AsciiDivider`, `BlockMark`), `cn()` helper.
3. **Layout shell** — `Header`, `Footer`, `Layout`, `SEO`.
4. **Data files** — write all 9 data modules with fresh copy.
5. **Mockups** — `ChatMockup`, `PhoneFrame`, `CatalogMockup`, `PaymentMockup`.
6. **Home chapters** — 9 `ChapterX.tsx` components.
7. **Home page** — assemble chapters in a horizontal-scroll track with
   `ChapterRail`. Mobile fallback to vertical stack.
8. **Inner pages** — Vendors, Customers, HowItWorks, Pricing, OurCustomers,
   About, FAQ, Contact, ThankYou, Privacy, Terms, NotFound.
9. **Forms** — Contact + Vendor forms with rhf + zod.
10. **Verify** — `npm install`, `npm run build`; smoke test routes.

---

## 11. Out of scope

- No real backend; forms POST to a placeholder endpoint with a clear `// TODO`.
- No analytics integration beyond `data-cta` attributes on every CTA.
- No A/B testing, no feature flags.
- No /blog (out of scope for v1).
- No light/dark toggle (the brutalist style is intrinsically high-contrast on
  paper; an inverted-mode is a future nice-to-have).
