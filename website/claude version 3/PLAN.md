# Qloqal Website — `paper` version

A new Qloqal marketing site that is intentionally distinct from the existing
`stitch-dark`, `stitch-green`, and `lovable` versions. Same product, fully
different visual language, structure, imagery, and copy.

---

## 1. Direction (locked decisions)

| Aspect            | Choice                                                                                  |
| ----------------- | --------------------------------------------------------------------------------------- |
| Visual style      | **Warm / paper / human** — cream + earth palette, hand-drawn SVG accents, soft shadows  |
| Wireframe         | **Bento-grid landing** + multi-page (other pages reuse the bento tile system)           |
| Imagery           | **Unsplash hotlinks** — workspaces, hands-at-work, textures, paper/desk scenes (no portraits) |
| Copy              | **Rewritten end-to-end** — same data shapes as stitch-green, every word fresh           |
| Tech stack        | Vite 6 + React 19 + TS 5.8 (matches stitch-green for build/deploy parity)               |
| Folder            | `website/paper/`                                                                        |

### Differentiation vs. existing versions

| Existing version | What it leans on                              | How `paper` differs                                                         |
| ---------------- | --------------------------------------------- | --------------------------------------------------------------------------- |
| `stitch-dark`    | Dark UI, neon accents                         | Inverse: light cream, hand-drawn warmth                                     |
| `stitch-green`   | Saturated green primary, glassy cards         | Muted earth palette, paper-card tactile feel                                |
| `lovable`        | Polished SaaS sectioned scroll                | Asymmetric bento grid, magazine pacing, photographic textures               |

---

## 2. Tech stack & tooling

Matches `stitch-green` so build/deploy infra is interchangeable.

```
vite 6                  @tailwindcss/vite v4
react 19 / react-dom    typescript 5.8
react-router-dom v6     react-helmet-async
react-hook-form + zod   framer-motion
lucide-react            clsx + tailwind-merge
```

Scripts: `dev` / `build` (`tsc -b && vite build`) / `preview` / `lint`.

`vercel.json` mirrors stitch-green's SPA rewrite + security/cache headers.

---

## 3. Design system

### 3.1 Color tokens (CSS `@theme` block in `src/styles.css`)

Warm/paper palette, all chosen with WCAG AA in mind on the cream surface.

```
--color-surface              #f6f1e8   /* cream paper */
--color-surface-dim          #ece4d4
--color-surface-bright       #fbf7ee
--color-surface-container    #efe7d6   /* card base */
--color-surface-variant      #e6dcc6

--color-on-surface           #1f1a13   /* deep ink */
--color-on-surface-variant   #5b4f3b
--color-outline              #b9a98a
--color-outline-variant      #d8cdb1

--color-primary              #b34a1f   /* terracotta */
--color-on-primary           #fff8ee
--color-primary-container    #f3c9a6
--color-on-primary-container #5a2310

--color-secondary            #2f5d4d   /* deep moss */
--color-on-secondary         #f5efde
--color-secondary-container  #c7d8c8

--color-tertiary             #6b4a2e   /* coffee */
--color-on-tertiary          #fff8ee

--color-accent-mustard       #c8932a
--color-accent-ink           #1f1a13
--color-error                #a13a2a
--color-whatsapp             #25d366   /* mockups only */
```

### 3.2 Typography

| Role     | Family                       | Use                            |
| -------- | ---------------------------- | ------------------------------ |
| Display  | **Fraunces** (serif)         | Headlines, hero, section titles |
| Body     | **Inter** (sans)             | Paragraphs, UI                 |
| Mono     | **JetBrains Mono** (mono)    | Stamps, kicker labels, prices  |

Loaded via Google Fonts in `index.html`.

### 3.3 Texture & motion

- Subtle **paper grain** SVG noise overlay on `<body>` (low-opacity, fixed).
- **Hand-drawn SVG accents**: underline scribbles, arrow doodles, stamp circles, asterisks — used sparingly to point at headlines and connect bento tiles.
- **Soft layered shadows** instead of glassy blur: `0 1px 0 rgba(31,26,19,.06), 0 8px 24px rgba(31,26,19,.06)`.
- Bento tiles get a `~0.4°` random rotation on hover (framer-motion) — paper-pinned feel.
- Respect `prefers-reduced-motion`; disable rotate/scale animations.

### 3.4 Component primitives (`src/components/ui/`)

`Button`, `Card`, `BentoTile` (new), `Stamp` (new), `KickerLabel` (new), `Badge`, `Container`, `Section`, `Accordion`, `Input`, `Textarea`, `Select`, `FormField`, `Logo`, `PaperGrain` (new — fixed grain overlay), `ScribbleUnderline` (new), `ArrowDoodle` (new).

---

## 4. Page structure (13 routes — same as stitch-green)

`/`, `/vendors`, `/customers`, `/how-it-works`, `/pricing`, `/our-customers`, `/about`, `/faq`, `/contact`, `/privacy`, `/terms`, `/thank-you`, `*` (NotFound).

### 4.1 Home — bento grid (the centerpiece)

A single 12-column / 6-row bento on desktop. Each tile is independent in tone, photo, and weight. No long stacked sections; the grid IS the page.

```
+----------------------+----------+--------------+
|                      |          |              |
|  HERO TILE  (6×3)    |  WA       |  STATS      |
|  Headline + CTA      |  bubble   |  3 numbers  |
|  + scribble under    |  mockup   |  stamped    |
|                      |  (3×2)    |  (3×2)      |
|                      +-----------+-------------+
|                      |   CATALOG mockup        |
|                      |   tile    (6×1)         |
+----------+-----------+-----------+-------------+
| QUOTE    | USE CASE  | USE CASE  | USE CASE    |
| stamp    | photo     | photo     | photo       |
| (3×2)    | (3×2)     | (3×2)     | (3×2)       |
+----------+-----------+-----------+-------------+
| WHY WA   | WHY WA    | PAYMENTS mockup         |
| bullet   | bullet    | tile      (6×2)         |
| (3×2)    | (3×2)     |                         |
+----------+-----------+-------------------------+
| PRICING TEASER       | LOGO STRIP / TRUST      |
| 2 plans (6×2)        | (6×2)                   |
+----------------------+-------------------------+
| FAQ tile (4 Qs)      | CTA BAND                |
| (6×2)                | (6×2)                   |
+----------------------+-------------------------+
```

Mobile collapses to a single column; tiles stack but keep their distinct visual character. Each tile gets a kicker label like `*01 — chat`, `*02 — catalog` (mono, mustard) so the page reads like a zine spread.

### 4.2 Other pages

All non-Home pages adopt a consistent **page header → bento section grid → CTA strip** pattern, but with photo subjects and tile shapes chosen per page.

| Page              | Bento focus                                                                  |
| ----------------- | ---------------------------------------------------------------------------- |
| `/vendors`        | "For sellers" — onboarding steps as numbered stamp tiles + screenshot tile  |
| `/customers`      | "For shoppers" — chat/scan/pay flow tiles                                   |
| `/how-it-works`   | 4-step horizontal-scrolling timeline (paper sticky-note metaphor)            |
| `/pricing`        | Three plans rendered as paper price-tag tiles, comparison table below       |
| `/our-customers`  | Photo-heavy bento gallery of merchant stories with pull-quotes              |
| `/about`          | Founders/mission as a typed letter ("Dear shopkeepers,…") + values stamps   |
| `/faq`            | Categorized accordion, kicker labels per category                           |
| `/contact`        | Two-column: address-card tile + form on lined paper background              |
| `/thank-you`      | Single warm tile + next-steps stamps                                        |
| `/privacy`/`/terms` | Long-form, narrow column, serif body — feels like printed legal paper     |
| `*` (NotFound)    | "Page got lost in the post" — torn-paper SVG, link home                     |

---

## 5. Sections / components

Most are bento tiles, not full-bleed sections, so naming differs from stitch-green.

```
src/components/
├── layout/
│   ├── Layout.tsx          # outer shell, paper grain, header, footer
│   ├── Header.tsx          # nav with hand-drawn underline on active link
│   └── Footer.tsx          # 3-column, mono micro-copy, signed-off look
├── bento/                  # NEW family — each tile self-contained
│   ├── HeroTile.tsx
│   ├── StatsTile.tsx
│   ├── QuoteTile.tsx
│   ├── UseCaseTile.tsx
│   ├── WhyWhatsAppTile.tsx
│   ├── PricingTeaserTile.tsx
│   ├── LogoStripTile.tsx
│   ├── FAQTile.tsx
│   └── CTATile.tsx
├── mockups/
│   ├── WhatsAppBubble.tsx  # restyled in paper palette
│   ├── CatalogMockup.tsx
│   └── PaymentRowMockup.tsx
├── ui/                     # primitives listed in §3.4
├── decor/
│   ├── ScribbleUnderline.tsx
│   ├── ArrowDoodle.tsx
│   ├── StampCircle.tsx
│   └── PaperGrain.tsx
├── forms/
│   └── ContactForm.tsx     # rhf + zod, lined-paper input styling
└── SEO.tsx                 # react-helmet-async wrapper
```

---

## 6. Data files (`src/data/`) — fully rewritten copy

Same shapes as stitch-green so types are interchangeable; every string rewritten.

| File                | Shape                                            | Copy direction                                                      |
| ------------------- | ------------------------------------------------ | ------------------------------------------------------------------- |
| `nav.ts`            | `{ label, to }[]` for header & footer           | Same labels (shop owners speak the same language)                   |
| `pricing.ts`        | 3 tiers (Starter / Growth / Studio)             | Plan names + benefit copy reworded; numbers stay realistic          |
| `faqs.ts`           | grouped Q&A array                                | All questions and answers re-written; tone warmer, concrete examples |
| `testimonials.ts`   | `{ quote, author, role, location }[]`           | Generic, no Indian/UPI references; locations like "London" / "Lisbon" |
| `categories.ts`     | merchant verticals                               | Coffee shop, florist, bakery, bookshop, tailor, repair shop, etc.    |
| `whyWhatsApp.ts`    | bullet list                                      | Reasons rewritten around "where your customers already are"          |
| `useCases.ts` (new) | bento tiles for Home                             | 4 short scenarios with photo + 1-line story                          |
| `steps.ts` (new)    | how-it-works timeline                            | 4 steps, hand-drawn arrow flow                                       |

**Copy guardrails (from memory):** globally generic — no kirana/tiffin/UPI/Dwarka or other Indian-only terms. Locations and merchant types should read as international.

---

## 7. Imagery strategy

All photos via **Unsplash hotlinks** with `?w=…&q=80&auto=format&fit=crop` params; centralized in `src/data/images.ts` so they're easy to swap.

Subject buckets (deliberately *not* people-portraits, to differentiate from the existing versions):

- **Workspaces** — counter tops, market stalls, studio desks
- **Hands at work** — wrapping, plating, packing, stitching
- **Textures** — kraft paper, linen, ceramic, wood grain (for tile backgrounds)
- **Objects** — receipts, twine, stamps, ledgers

Each `images.ts` entry: `{ id, url, alt, credit }`. `<img loading="lazy" decoding="async">` everywhere. Always set explicit width/height to avoid CLS.

---

## 8. Routing, SEO, deployment

- `main.tsx`: `BrowserRouter` + `HelmetProvider` + `<App/>` (mirror stitch-green).
- `App.tsx`: `<Layout>` + `<Routes>` with the 13 routes.
- `SEO` component sets title/description/canonical/og per page.
- `public/`: `favicon.svg` (stamp mark), `og-image.svg`, `robots.txt`, `sitemap.xml`.
- `vercel.json`: SPA rewrite + same security headers + 1-year cache for `/assets/*`.

---

## 9. File tree (target)

```
website/paper/
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
    │   ├── useCases.ts
    │   ├── steps.ts
    │   └── images.ts
    ├── components/
    │   ├── SEO.tsx
    │   ├── layout/      (Layout, Header, Footer)
    │   ├── ui/          (primitives — see §3.4)
    │   ├── decor/       (Scribble, Arrow, Stamp, PaperGrain)
    │   ├── bento/       (tile family — see §5)
    │   ├── mockups/     (WhatsAppBubble, CatalogMockup, PaymentRowMockup)
    │   └── forms/       (ContactForm)
    └── pages/           (13 page files matching the routes)
```

---

## 10. Build order

Sequenced so each step compiles & runs on its own.

1. **Scaffold** — `package.json`, `tsconfig*`, `vite.config.ts`, `vercel.json`, `index.html`, `public/*`, `src/main.tsx`, `src/App.tsx` (stub routes), `src/styles.css` (tokens).
2. **Design system** — UI primitives (`Button`, `Card`, `BentoTile`, `Stamp`, `KickerLabel`, `Container`, `Section`), decor SVGs (`Scribble`, `Arrow`, `Stamp`, `PaperGrain`), `cn()` helper.
3. **Layout shell** — `Header` (with active-link scribble), `Footer`, `Layout`, `SEO`.
4. **Data files** — write all 9 data modules with fresh copy.
5. **Mockups** — re-skin `WhatsAppBubble`, `CatalogMockup`, `PaymentRowMockup` in paper palette.
6. **Bento tiles** — Hero, Stats, Quote, UseCase, WhyWhatsApp, PricingTeaser, LogoStrip, FAQ, CTA.
7. **Home** — assemble bento grid using CSS Grid (`grid-template-columns: repeat(12,1fr)`).
8. **Inner pages** — Vendors, Customers, HowItWorks, Pricing, OurCustomers, About, FAQ, Contact, ThankYou, Privacy, Terms, NotFound.
9. **Forms** — Contact form with rhf + zod, lined-paper input styling.
10. **Verify** — `npm install`, `npm run build`, `npm run dev`; smoke-test every route.

---

## 11. Open items / nice-to-haves (post-MVP)

- Page-transition cross-fade via framer-motion `AnimatePresence`.
- A `/blog` route with MDX (only if requested later).
- Replace Unsplash hotlinks with self-hosted optimized AVIFs once content is final.
- Light/dark toggle (a "lamp on / lamp off" warm-dark variant) — out of scope for v1.
