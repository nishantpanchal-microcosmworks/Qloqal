# Qloqal Stitch Dark — Build Plan

> **Goal:** Rebuild the Stitch-generated dark-mode marketing site (`../stitch dark version /stitch_qloqal_saas_marketing_website/`) as a real, production-grade Qloqal site, using the same tech stack the team has already standardised on in [website/lovable/](../lovable/).
>
> **Source design (visual contract):**
> - Design tokens — [`../stitch dark version /stitch_qloqal_saas_marketing_website/lumina_hyperlocal/DESIGN.md`](../stitch%20dark%20version%20/stitch_qloqal_saas_marketing_website/lumina_hyperlocal/DESIGN.md)
> - Page-by-page HTML refs — `qloqal_homepage/`, `solutions_qloqal/`, `pricing_qloqal/`, `enterprise_qloqal/`, `resources_qloqal/`
> - Brand mark — `qloqal_brand_logo/screen.png`
>
> **Target output folder:** `website/stitch-dark/app/` (created in Phase 0).

---

## 1. What we're building (one paragraph)

A 5-page B2B SaaS marketing site for Qloqal in a "Modern-Tech / Linear-meets-Stripe" dark-mode aesthetic: deep near-black surfaces, glassmorphic cards, vibrant `#47E865` neon-green accents, deep `#2C3DBF` blue secondaries, ambient radial glows, gradient borders, and high-density bento layouts. Every page in the Stitch reference must come across pixel-faithful in spirit (not literally), but rebuilt as composable, accessible React components — not raw HTML with `cdn.tailwindcss.com`.

The five pages, in build order:

1. **Home** (`/`) — Hero with floating glass cards, How-it-Works (3 steps), WhatsApp Automation split, Bento feature grid, Dashboard preview, AI section, 3-tier Pricing, Testimonials (3), Final CTA.
2. **Solutions** (`/solutions`) — Bento grid of vertical solutions (Grocery, Pharmacy, Salons & Spas, Lifestyle Retail), each with embedded chat / image preview.
3. **Pricing** (`/pricing`) — 3 plan cards (Starter / Growth / Enterprise), feature comparison table, FAQ accordion.
4. **Enterprise** (`/enterprise`) — Hero with brand-mark composition, trust strip, bento architecture grid, stats row (99.99% / 24/7 / <50ms / 140+), demo-request form.
5. **Resources** (`/resources`) — Featured article hero, search + category chips, bento card grid (guides / updates / insights / templates), newsletter band.

---

## 2. Tech stack — adopt lovable's stack as-is

The lovable repo (`website/lovable/`) is the most current, fully-typed, fully-tooled scaffold the team uses. Rather than fork it, we mirror the same stack for the dark-mode site so future merges / shared components stay trivial.

| Layer | Choice | Source of truth |
|---|---|---|
| Framework | **TanStack Start** (file-based router + SSR-ready) | [lovable/package.json](../lovable/package.json) |
| Runtime | React 19 | — |
| Language | TypeScript (strict) | — |
| Build | Vite 7 | — |
| Styling | **Tailwind v4** with `@tailwindcss/vite` (no `tailwind.config.js` — tokens live in CSS via `@theme`) | [lovable/src/styles.css](../lovable/src/styles.css) |
| Component primitives | **shadcn/ui** (style: `new-york`, `cssVariables: true`) over Radix | [lovable/components.json](../lovable/components.json) |
| Icons | **lucide-react** (replaces Material Symbols from the HTML refs) | — |
| Animation | framer-motion | — |
| Forms | react-hook-form + zod + @hookform/resolvers | — |
| SEO | react-helmet-async | — |
| Data viz (dashboard preview) | recharts | — |
| Toasts | sonner | — |
| Utilities | clsx, tailwind-merge, class-variance-authority | — |
| Hosting | Cloudflare (via `@cloudflare/vite-plugin`) | [lovable/wrangler.jsonc](../lovable/wrangler.jsonc) |

> **Do NOT pick the older claude versions' stack** (React 18 + Vite 5 + Tailwind 3 + react-router-dom). They predate the lovable consolidation and would re-fragment the codebase.

> **One swap from the Stitch HTML:** the references load `Material Symbols Outlined` and `cdn.tailwindcss.com`. Both are dropped — we use lucide-react and Tailwind v4 via Vite. Material Symbol names map cleanly to lucide (table in §6).

---

## 3. Design system — extract once, reference everywhere

All tokens are defined in [`../stitch dark version /stitch_qloqal_saas_marketing_website/lumina_hyperlocal/DESIGN.md`](../stitch%20dark%20version%20/stitch_qloqal_saas_marketing_website/lumina_hyperlocal/DESIGN.md). They become CSS variables in `app/src/styles.css` under a `@theme` block, exactly the way lovable already does it.

### 3.1 Colors (full palette → CSS vars)

```css
/* Surfaces */
--color-surface: #101415;
--color-surface-dim: #101415;
--color-surface-bright: #363a3b;
--color-surface-container-lowest: #0b0f10;
--color-surface-container-low: #191c1e;
--color-surface-container: #1d2022;
--color-surface-container-high: #272a2c;
--color-surface-container-highest: #323537;

/* Text */
--color-on-surface: #e0e3e5;
--color-on-surface-variant: #bbcbb7;

/* Brand — primary green */
--color-primary: #96ff9a;
--color-primary-container: #47e865;
--color-on-primary: #00390e;
--color-on-primary-container: #006420;
--color-primary-fixed: #6dff7f;
--color-primary-fixed-dim: #40e360;
--color-surface-tint: #40e360;

/* Brand — secondary blue */
--color-secondary: #bcc2ff;
--color-secondary-container: #2234b8;
--color-on-secondary: #00179c;
--color-on-secondary-container: #a6afff;

/* Tertiary, error, outline (see DESIGN.md frontmatter for full list) */
--color-error: #ffb4ab;
--color-error-container: #93000a;
--color-outline: #869582;
--color-outline-variant: #3d4a3b;
```

The full set comes from the DESIGN.md frontmatter (lines 3–50) — copy verbatim, do not re-pick.

### 3.2 Typography

```css
--font-display: "Plus Jakarta Sans", "Inter", ui-sans-serif, sans-serif;
--font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
```

Type scale (apply via Tailwind utilities `text-h1` etc., defined as Tailwind v4 `--text-*` vars in `@theme`):

| Token | Size / line-height / weight / tracking | Family |
|---|---|---|
| h1 | 48 / 1.1 / 700 / -0.04em | Plus Jakarta Sans |
| h2 | 32 / 1.2 / 600 / -0.02em | Plus Jakarta Sans |
| h3 | 24 / 1.3 / 600 / -0.01em | Plus Jakarta Sans |
| body-lg | 18 / 1.6 / 400 | Inter |
| body-md | 16 / 1.5 / 400 | Inter |
| body-sm | 14 / 1.5 / 400 | Inter |
| label-caps | 12 / 1 / 600 / 0.05em uppercase | Inter |
| button | 14 / 1 / 500 | Inter |

### 3.3 Spacing & radii

Custom Tailwind v4 spacing scale (in `@theme`):

```
--spacing-xs: 4px; --spacing-sm: 8px; --spacing-md: 16px;
--spacing-lg: 24px; --spacing-xl: 40px; --spacing-xxl: 64px;
--spacing-gutter: 24px; --spacing-container-max: 1440px;
```

Radii: `sm 4px / DEFAULT 8px / md 12px / lg 16px / xl 24px / full 9999px`.

### 3.4 Effects (the visual signature)

Three custom utilities that live in `styles.css` (already half-present in the Stitch HTML — formalise them):

```css
@utility glass-card {
  background: rgba(29, 32, 34, 0.6);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.10);
}

@utility glow-hover {
  &:hover { box-shadow: 0 0 20px rgba(71, 232, 101, 0.15); }
}

@utility gradient-border {
  border: 1px solid transparent;
  background:
    linear-gradient(to bottom right, var(--color-surface-container), var(--color-surface)) padding-box,
    linear-gradient(to bottom right, rgba(255,255,255,0.10), transparent) border-box;
}
```

Hero-style ambient gradient (compose inline where needed):
```css
background:
  radial-gradient(circle at top right, rgba(71,232,101,0.15), transparent),
  radial-gradient(circle at bottom left, rgba(44,61,191,0.15), transparent);
```

---

## 4. Project layout (target)

```
website/stitch-dark/
├── PLAN.md                       # this file
└── app/                          # the actual project (created in Phase 0)
    ├── package.json
    ├── vite.config.ts
    ├── tsconfig.json
    ├── components.json           # copy from lovable, retarget to ./src
    ├── wrangler.jsonc            # if deploying to CF; OK to defer
    ├── public/
    │   ├── favicon.svg
    │   ├── og-default.png
    │   └── logo-qloqal.svg       # vectorised from qloqal_brand_logo/screen.png
    └── src/
        ├── start.ts              # TanStack Start entry
        ├── server.ts             # SSR entry
        ├── router.tsx            # router builder
        ├── routeTree.gen.ts      # generated by router-plugin
        ├── styles.css            # @theme tokens + utilities
        ├── routes/
        │   ├── __root.tsx        # <html>, <head>, Header, Footer, <Outlet/>
        │   ├── index.tsx         # Home
        │   ├── solutions.tsx
        │   ├── pricing.tsx
        │   ├── enterprise.tsx
        │   └── resources.tsx
        ├── components/
        │   ├── layout/
        │   │   ├── TopNav.tsx
        │   │   ├── Footer.tsx
        │   │   └── MobileDrawer.tsx
        │   ├── sections/
        │   │   ├── Hero.tsx                  # variant prop: home | solutions | enterprise | resources | pricing
        │   │   ├── HowItWorks.tsx            # 3-step
        │   │   ├── WhatsAppAutomation.tsx    # phone mockup + 3-feature list
        │   │   ├── BentoFeatures.tsx         # home 6-tile grid
        │   │   ├── DashboardPreview.tsx      # framed image
        │   │   ├── AISection.tsx             # radial glow + neuron icon
        │   │   ├── PricingTable.tsx          # 3 cards + comparison table
        │   │   ├── Testimonials.tsx          # 3-card row
        │   │   ├── FinalCTA.tsx              # green block w/ inverted CTAs
        │   │   ├── SolutionsBento.tsx        # solutions 12-col bento
        │   │   ├── EnterpriseBento.tsx       # enterprise 12-col bento
        │   │   ├── EnterpriseStats.tsx       # 4-up stat row
        │   │   ├── EnterpriseDemoForm.tsx    # split: copy + form
        │   │   ├── ResourcesFeatured.tsx     # full-bleed featured card
        │   │   ├── ResourcesGrid.tsx         # 12-col bento of cards
        │   │   ├── ResourcesNewsletter.tsx
        │   │   ├── TrustedBy.tsx             # home/enterprise logo strip
        │   │   └── PricingFAQ.tsx
        │   ├── primitives/
        │   │   ├── GlassCard.tsx             # asChild + className passthrough
        │   │   ├── GradientBorderCard.tsx
        │   │   ├── SectionHeader.tsx         # eyebrow + h2 + lede
        │   │   ├── Eyebrow.tsx               # label-caps pill
        │   │   ├── PhoneMockup.tsx           # used in home + solutions
        │   │   ├── ChatBubble.tsx            # incoming / outgoing variants
        │   │   ├── StatBlock.tsx
        │   │   ├── Logo.tsx                  # SVG mark (green speech bubble + Q)
        │   │   ├── GlowHalo.tsx              # absolute-positioned blur orb
        │   │   ├── Container.tsx             # max-w-container-max + px-gutter
        │   │   └── Section.tsx               # py-xxl wrapper
        │   ├── ui/                           # shadcn/ui generated files
        │   │   ├── button.tsx                # variants: primary | outline | ghost-glow | inverse
        │   │   ├── input.tsx
        │   │   ├── select.tsx
        │   │   ├── textarea.tsx
        │   │   ├── accordion.tsx
        │   │   ├── tabs.tsx
        │   │   └── … (added on demand via `pnpm dlx shadcn add <name>`)
        │   └── seo/
        │       └── Seo.tsx
        ├── data/
        │   ├── nav.ts                        # nav items (active route highlights)
        │   ├── pricing.ts                    # 3 plans + comparison rows
        │   ├── solutions.ts                  # 4 vertical cards
        │   ├── features.ts                   # bento tiles (home)
        │   ├── enterpriseFeatures.ts         # bento tiles (enterprise)
        │   ├── stats.ts                      # 4 stat tuples
        │   ├── resources.ts                  # featured + 5 grid items
        │   ├── faqs.ts                       # 3-5 pricing FAQs
        │   ├── testimonials.ts
        │   └── trusted.ts                    # vertical chips
        ├── hooks/
        │   ├── useScrollLock.ts              # for MobileDrawer
        │   └── useMediaQuery.ts
        └── lib/
            ├── utils.ts                      # cn() = clsx + tailwind-merge
            └── icon-map.ts                   # MS-symbol → lucide map (§6)
```

### Why split `primitives/` and `sections/`?
Sections are page-specific compositions; primitives are layout atoms reused across sections. This is the same shape as lovable's `components/` (Header, Hero, FAQAccordion are sections; `ui/` are primitives) — extended one level for clarity since this site has more bento variants.

---

## 5. Components, page-by-page

### 5.1 Home (`/`) — composes
`Hero` (home variant) → `TrustedBy` → `HowItWorks` → `WhatsAppAutomation` → `BentoFeatures` → `DashboardPreview` → `AISection` → `PricingTable` (compact) → `Testimonials` → `FinalCTA`

Reference HTML: `qloqal_homepage/code.html`. Visual: `qloqal_homepage/screen.png`.

### 5.2 Solutions (`/solutions`) — composes
`Hero` (solutions variant: eyebrow `HYPERLOCAL COMMERCE`, gradient text on subhead, single CTA + brand-mark image card on right) → `SolutionsBento` (12-col: Grocery span-7 with embedded chat preview, Pharmacy span-5 with image + caption overlay, Salons span-5 with appointment-card preview, Lifestyle Retail span-7 grayscale-on-hover image) → `FinalCTA` (smaller, single glass card variant).

Ref: `solutions_qloqal/code.html` + `screen.png`.

### 5.3 Pricing (`/pricing`) — composes
`Hero` (pricing variant: gradient-clipped headline, no image, centered) → `PricingTable` (full — 3 cards with `MOST POPULAR` badge on Growth, `md:-translate-y-4` lift) → comparison table → `PricingFAQ` (accordion) → `FinalCTA`.

Ref: `pricing_qloqal/code.html` + `screen.png`. Plans live in `data/pricing.ts`.

### 5.4 Enterprise (`/enterprise`) — composes
`Hero` (enterprise variant: dual radial glow background, eyebrow `ENTERPRISE SOLUTIONS`, brand-mark card right) → `TrustedBy` (logo skeleton bars per the screenshot) → `EnterpriseBento` (12-col: span-8 multi-vendor with hub bg-icon, span-4 API integrations, span-4 Security, span-8 Global scale w/ stacked avatars) → `EnterpriseStats` (4-up: 99.99% / 24/7 / <50ms / 140+) → `EnterpriseDemoForm`.

Ref: `enterprise_qloqal/code.html` + `screen.png`.

### 5.5 Resources (`/resources`) — composes
`ResourcesFeatured` (full-bleed image, gradient overlay, `LATEST NEWS` eyebrow, single primary CTA) → search + category chips row → `ResourcesGrid` (12-col bento — span-8 large card with image, span-4 product update, span-4 image card, span-4 expert insight w/ avatar stack, span-4 template library w/ outline CTA) → `ResourcesNewsletter` (radial-glow bg, split copy + email input).

Ref: `resources_qloqal/code.html` + `screen.png`.

### 5.6 Shared chrome

- **TopNav** — fixed, `bg-surface/80 backdrop-blur-xl`, gradient bottom-border via `border-b border-outline-variant/30 shadow-xl shadow-primary/5`, height 64px (=`h-xxl`). Active link = `text-primary` + bottom border. Right side: ghost `Login` + filled `Get Started` (uses `primary-container`/`on-primary-container`).
- **MobileDrawer** — `useScrollLock`, slide-in from right, full-height `surface-container`, all 4 nav items + both CTAs.
- **Footer** — 6-col grid (md:4-col, sm:2-col), brand block (logo + tagline + 3 social icons) spans 2; columns: Product / Solutions / Developers / Legal. Background `surface-container-lowest`.

---

## 6. Material Symbols → lucide-react map

The Stitch HTML references roughly two dozen `material-symbols-outlined` icons. Translate during component authoring:

| Material Symbol | lucide-react | Material Symbol | lucide-react |
|---|---|---|---|
| `shopping_bag` | `ShoppingBag` | `warning` | `AlertTriangle` |
| `store` | `Store` | `medical_services` | `Stethoscope` |
| `content_cut` | `Scissors` | `restaurant` | `Utensils` |
| `qr_code_2` | `QrCode` | `inventory_2` | `Package` |
| `rocket_launch` | `Rocket` | `chat` | `MessageCircle` |
| `sync_alt` | `RefreshCw` | `notifications_active` | `BellRing` |
| `map` | `Map` | `auto_awesome` | `Sparkles` |
| `payments` | `CreditCard` | `groups` | `Users` |
| `bar_chart` | `BarChart3` | `local_shipping` | `Truck` |
| `bolt` | `Zap` | `neurology` | `BrainCircuit` |
| `check` / `check_circle` | `Check` / `CheckCircle2` | `arrow_forward` | `ArrowRight` |
| `chevron_right` | `ChevronRight` | `expand_more` | `ChevronDown` |
| `flash_on` | `Zap` | `storefront` | `Storefront` (or `Store`) |
| `event_available` | `CalendarCheck` | `groups_3` | `Users` |
| `api` | `Plug` | `shield_lock` | `ShieldCheck` |
| `hub` | `Network` | `public` | `Globe` |
| `database` | `Database` | `share` | `Share2` |
| `forum` | `MessagesSquare` | `arrow_outward` | `ArrowUpRight` |
| `person` | `User` | `search` | `Search` |
| `star` (filled) | `Star` (`fill="currentColor"`) | `play_arrow` | `Play` |

Anything missing: stub it in `lib/icon-map.ts` so designers can extend without component edits.

---

## 7. Phase plan (10 working days, solo)

Each phase ends green: dev server boots, no console errors, visited routes render.

### Phase 0 — Scaffold (½ day)

- `pnpm create vite` is **not** the path — the cleanest move is to copy the lovable scaffold:
  ```bash
  cp -r website/lovable website/stitch-dark/app
  ```
  Then strip lovable-specific pages (`about`, `contact`, `customers`, `faq`, `how-it-works`, `pricing`, `privacy`, `terms`, `thank-you`, `vendors`) and the WhatsApp-light-theme components. Keep: `__root.tsx`, `router.tsx`, `start.ts`, `server.ts`, `lib/utils.ts`, `components/ui/*`, `components/Seo.tsx`, the build/tsconfig/vite/eslint configs, `wrangler.jsonc`.
- Rename `package.json` `name` to `qloqal-stitch-dark`.
- `pnpm install`, `pnpm dev` should boot at `http://localhost:5173` (or whatever lovable uses) showing a stripped __root.

### Phase 1 — Theme tokens & utilities (½ day)

- Replace `src/styles.css` brand vars block with the dark-first palette from §3.1.
- Switch root `<html>` to `class="dark"` (or just default to dark — there's no light mode in this brief; remove the `@custom-variant dark` if not needed).
- Add custom `--text-*`, `--font-*`, `--spacing-*`, `--radius-*` tokens from §3.2 / §3.3.
- Add `@utility glass-card / glow-hover / gradient-border` from §3.4.
- Wire Plus Jakarta Sans + Inter via `<link>` in `__root.tsx` `<head>`.
- Verify with a throwaway test page that `text-h1 font-display`, `bg-surface`, `glass-card`, `text-primary` all work.

### Phase 2 — Chrome: TopNav, Footer, MobileDrawer (1 day)

- Build `Logo` SVG (green chat-bubble + blue Q + dot accent — vectorise from `qloqal_brand_logo/screen.png`).
- Build `TopNav` with `nav` data-driven from `data/nav.ts`. Active-route highlight via TanStack Router's `useMatch`.
- Build `MobileDrawer` (Radix `Dialog` from shadcn/ui works fine).
- Build `Footer` matching home reference — 6-col grid degrades to 2-col. Brand col spans 2. Three social icons.
- Add `Container` and `Section` primitives so every later section is a one-liner: `<Section><Container>…</Container></Section>`.

### Phase 3 — Primitives (1 day)

- `GlassCard` — wraps `<div class="glass-card rounded-xl …">`. Accept `asChild` so it can wrap `<a>`.
- `GradientBorderCard` — same idea for the bento tiles.
- `Eyebrow` — `label-caps` pill with `bg-primary/10 border border-primary/20 text-primary`.
- `SectionHeader` — eyebrow (optional) + h2 + lede; centered or left variants.
- `PhoneMockup` — wraps a `9/19` aspect-ratio glass frame with a slot for content (used by `WhatsAppAutomation` and the Solutions Grocery card).
- `ChatBubble` — `variant: incoming | outgoing`, asymmetric rounded corners (`rounded-tl-none` / `rounded-tr-none`), optional avatar.
- `StatBlock` — large primary number + label-caps subtitle.
- `GlowHalo` — absolutely positioned blurred orb; props for `position`, `color`, `size`. Used in hero, AI section, enterprise hero, newsletter band.

### Phase 4 — Home page (2 days)

Day-A: Hero, TrustedBy, HowItWorks, WhatsAppAutomation, BentoFeatures (6 tiles).
Day-B: DashboardPreview (use a placeholder image at `public/dashboard-preview.png` until a real screenshot exists), AISection, PricingTable (compact: pulls from `data/pricing.ts` + `compact` prop), Testimonials, FinalCTA.

The **MOST POPULAR** badge on the Growth pricing card uses absolute positioning (`-top-4 left-1/2 -translate-x-1/2`) — copy the exact ribbon styling from the Stitch HTML.

### Phase 5 — Solutions, Enterprise, Resources, Pricing (3 days)

- Day-A: `/solutions` (SolutionsBento has tightly coupled inline previews — author them as small inline JSX blocks per tile, not new components).
- Day-B: `/enterprise` (EnterpriseBento + EnterpriseStats + EnterpriseDemoForm with react-hook-form + zod; submit is a no-op `console.log` for now, wire to Web3Forms or a `/api` route in Phase 7).
- Day-C: `/resources` (ResourcesFeatured + ResourcesGrid + ResourcesNewsletter) and `/pricing` (full PricingTable + comparison table + FAQ accordion via shadcn `accordion`).

### Phase 6 — Animations & polish (1 day)

- Hero floating cards: `animate-bounce` and `animate-pulse` from the HTML are fine, but lift them into framer-motion `motion.div` with `y` keyframes for smoother loops.
- "Glow on hover" via Tailwind `hover:shadow-…` — already `glow-hover`. Add `transition-all duration-300` consistently.
- Hover-grayscale-off image (Solutions Lifestyle Retail card) — straight Tailwind `grayscale group-hover:grayscale-0`.
- Dashboard preview parallax (optional): `useScroll` + `useTransform` from framer-motion to translate y by ±20px through viewport.

### Phase 7 — SEO, accessibility, forms (1 day)

- Per-route `<Seo>` (title, description, OG image, canonical). Use the existing lovable component.
- Skip-to-content link in `__root.tsx`.
- Tab-through audit — every interactive has a visible focus ring (Tailwind `focus-visible:ring-2 ring-primary`).
- Confirm contrast on dark surfaces — `on-surface-variant` (#bbcbb7) on `surface` (#101415) ≈ 11.5:1 ✅.
- Wire EnterpriseDemoForm + ResourcesNewsletter submission to Web3Forms (env var `VITE_WEB3FORMS_KEY`) — show success/error states with `sonner` toasts. No silent failures.
- robots.txt + sitemap.xml in `public/`.

### Phase 8 — Build, deploy, smoke (½ day)

- `pnpm build` clean, no TS errors.
- `pnpm preview` works.
- Deploy to Cloudflare via `wrangler deploy` (lovable's setup ports over) OR Vercel if simpler — both supported by TanStack Start's adapter, pick whichever the rest of qloqal-website uses by then.
- Lighthouse mobile: Performance ≥ 90, A11y ≥ 95, SEO 100.

---

## 8. Acceptance criteria

- [ ] Five routes render: `/`, `/solutions`, `/pricing`, `/enterprise`, `/resources`.
- [ ] No usage of `cdn.tailwindcss.com`, no inline `<script>` configs from the Stitch HTML.
- [ ] No Material Symbols font load — all icons via lucide-react.
- [ ] All colors come from `@theme` tokens; no hex literals scattered through `.tsx` files (one allowed exception: the gradient backdrop colours that *are* literally semi-transparent of a token — comment why).
- [ ] No content-rich data (pricing tiers, FAQs, solutions cards, resources cards) is hardcoded inside section components — everything routes through `src/data/*.ts`.
- [ ] Mobile (≤ 768px): TopNav collapses to hamburger, MobileDrawer opens, body scroll-locked, all CTAs reachable, no horizontal overflow.
- [ ] Both forms (EnterpriseDemoForm, ResourcesNewsletter) validate with zod, show inline errors, disable submit while in-flight, surface success/error via sonner.
- [ ] Lighthouse mobile: Performance ≥ 90, A11y ≥ 95, SEO 100, Best Practices ≥ 95.
- [ ] No console errors / warnings in `pnpm dev` or `pnpm preview`.
- [ ] `pnpm lint` passes.

---

## 9. Out of scope (do **not** ship in this phase)

- Light-mode theme. The brief is dark-first; the lovable light components don't get re-skinned here.
- Vendor signup form (lives in the lovable site, not this dark variant — different audience).
- Legal pages (`/privacy`, `/terms`) — none in the Stitch reference; defer.
- Localization. Copy is English-only and globally generic per the standing memory rule (no Indian terms or city names in marketing copy).
- Real CMS / blog backend for `/resources`. Cards are static data this phase; revisit once content team exists.
- Anything in the "banned features" list of [PLAN-WEBSITE2.md §5](../PLAN-WEBSITE2.md) (live chat, real-time GPS, vendor portal, AI recommendations, etc.).

---

## 10. Open questions to resolve before Phase 0

1. **Hosting:** Cloudflare (matches lovable) or Vercel (matches the older claude versions)? Defaulting to Cloudflare unless told otherwise.
2. **Pricing currency / amounts:** Stitch references show $29 / $79 / Custom on Home and $0 / $49 / Custom on Pricing — these conflict. Need a single source-of-truth from product before launch.
3. **Logo SVG:** vectorise the `qloqal_brand_logo/screen.png` mark or wait for a designer-supplied SVG? Phase-0 ships a vectorised approximation.
4. **Final CTA destination:** "Start Free" / "Get Started" buttons currently `href="#"`. Where do they go — `/signup`? Open external app? Confirm before Phase 7.
5. **Web3Forms vs `/api` route:** the lovable repo uses Cloudflare Workers — if we keep that runtime we can write a real `/api/contact` instead of relying on a third-party form bridge.

---

## 11. Reference index

- Visual contract — [DESIGN.md](../stitch%20dark%20version%20/stitch_qloqal_saas_marketing_website/lumina_hyperlocal/DESIGN.md)
- Page HTML refs — [`qloqal_homepage/code.html`](../stitch%20dark%20version%20/stitch_qloqal_saas_marketing_website/qloqal_homepage/code.html), [`solutions_qloqal/code.html`](../stitch%20dark%20version%20/stitch_qloqal_saas_marketing_website/solutions_qloqal/code.html), [`pricing_qloqal/code.html`](../stitch%20dark%20version%20/stitch_qloqal_saas_marketing_website/pricing_qloqal/code.html), [`enterprise_qloqal/code.html`](../stitch%20dark%20version%20/stitch_qloqal_saas_marketing_website/enterprise_qloqal/code.html), [`resources_qloqal/code.html`](../stitch%20dark%20version%20/stitch_qloqal_saas_marketing_website/resources_qloqal/code.html)
- Brand mark — [`qloqal_brand_logo/screen.png`](../stitch%20dark%20version%20/stitch_qloqal_saas_marketing_website/qloqal_brand_logo/screen.png)
- Tech-stack source — [website/lovable/](../lovable/), specifically [package.json](../lovable/package.json), [components.json](../lovable/components.json), [src/styles.css](../lovable/src/styles.css)
- Higher-level brief — [WEBSITE-PROMPT.md](../WEBSITE-PROMPT.md), [PLAN-WEBSITE2.md](../PLAN-WEBSITE2.md)
