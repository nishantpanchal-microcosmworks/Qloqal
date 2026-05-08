# Qloqal — Marketing Website Plan (Green Edition)

> **Audience:** Developer (you / juniors) building the Qloqal product website.
> **Goal:** Ship a multi-page marketing site that makes one promise obvious — *if you can chat on WhatsApp, you can run an online shop on Qloqal.* Visual identity is locked to the **Stitch Green** design system. Stack is **Vite + React + TypeScript + Tailwind**, deployed to **Vercel**.
> **Source of truth (design):** [`website/stitch green version /stitch_qloqal_marketing_site/`](stitch%20green%20version%20/stitch_qloqal_marketing_site/) — HTML mockups + screens + design tokens.
> **Companion docs:** [PLAN-WEBSITE1.md](PLAN-WEBSITE1.md) (v1, audience/SEO baseline), [PLAN-WEBSITE2.md](PLAN-WEBSITE2.md) (v2, vendor-first realignment), [PLAN-LOVABLE-DEPLOY.md](../PLAN-LOVABLE-DEPLOY.md) (Vite-SPA-on-Vercel surgery already proven on the Lovable export).
> **Supersedes:** PLAN-WEBSITE1.md and PLAN-WEBSITE2.md for visual identity. Tech-stack and content-structure decisions from those plans still hold unless contradicted here.

---

## 1. What we're building

A static marketing site that:

1. Sells the Qloqal value prop to **shop owners** (primary) and **shoppers** (secondary).
2. Ships **four working forms** (Vendor Inquiry · Customer Notify-me · Contact · Newsletter) that email submissions to `devcloudteam2025@gmail.com`.
3. Renders identically to the Stitch Green mockups — same color palette, type, spacing, card radii, glow gradient, orb backgrounds.
4. Deploys to **Vercel** with one `git push`. No backend, no SSR, no Workers.

### Out of scope

- No real ordering / cart / catalog (that's the product app, not the marketing site).
- No CMS, no blog, no auth, no i18n at launch.
- No analytics beyond Vercel Analytics.
- No region-specific copy. **Globally generic** — currency in `$`, no city names, no India-only payment terms. (See §13 hard constraints.)

### Success bar (1 month live)

| Metric | Target |
|---|---|
| Vendor inquiry form submissions | 5+ / month |
| Contact form messages | 10+ / month |
| Lighthouse Mobile Performance | ≥ 90 |
| Lighthouse Accessibility | ≥ 95 |
| Lighthouse SEO | 100 |
| First-load page weight | < 500 KB |
| Bounce on `/` | < 60% |

---

## 2. Tech Stack (locked)

| Layer | Tech | Version | Notes |
|---|---|---|---|
| Build tool | **Vite** | 7.x | Fast HMR, ESM-native; same as the Lovable export |
| Framework | **React** | 19.x | Matches the existing Lovable codebase; downgrade only if a needed lib forces it |
| Language | **TypeScript** | 5.x | `strict: true` |
| Routing | **React Router** | 6.x | Plain SPA routing — chosen over TanStack Router for smaller learning curve and identical Vercel SPA behavior |
| Styling | **Tailwind CSS** | 4.x | Tokens injected via `@tailwindcss/vite`; theme defined in `src/styles.css` `@theme` block |
| Icons | **lucide-react** + **Material Symbols Outlined** (web font) | latest | Material Symbols matches the Stitch HTML; lucide for everything else |
| Animation | **Framer Motion** | 12.x | Scroll-triggered fades, sticky reveals, button hover scales |
| Forms | **react-hook-form** + **zod** | latest | Client-side validation |
| Form → Email | **Web3Forms** | — | POST JSON to `https://api.web3forms.com/submit` with access key |
| SEO meta | **react-helmet-async** | latest | Per-route `<head>` |
| Fonts | **Plus Jakarta Sans** (display, 400/500/600/700/800) + **Inter** (body, 400/500/600/700) | Google Fonts | |
| Hosting | **Vercel** | — | Auto-deploy on push, free SSL, free preview deploys |
| Analytics | **Vercel Analytics** | — | Privacy-friendly, zero-config |
| Domain | `qloqal.com` | — | DNS already locked |

### Why React Router (not TanStack Router)

The Lovable export uses TanStack Router. We're switching to **React Router 6** for this build because:

1. The site is plain SPA navigation — no nested loaders, no route-level data, no streaming SSR.
2. React Router has a smaller mental footprint for a junior picking this up cold.
3. `vercel.json`'s `rewrites: [{ "source": "/(.*)", "destination": "/" }]` works identically with both — no deploy advantage to TanStack here.

If you want to reuse the Lovable codebase as-is with TanStack Router, follow [PLAN-LOVABLE-DEPLOY.md](../PLAN-LOVABLE-DEPLOY.md) instead and skip §6/§7 below.

### Why Web3Forms (not a serverless function)

Free, instant, no backend code, no SMTP setup. ~250 submissions/month on free tier. When we exceed that, swap to a Vercel serverless function + Resend (one file change in `lib/submitForm.ts`).

---

## 3. Design System — Stitch Green (locked)

Source: [`website/stitch green version /stitch_qloqal_marketing_site/qloqal_design_system/DESIGN.md`](stitch%20green%20version%20/stitch_qloqal_marketing_site/qloqal_design_system/DESIGN.md). Reproduced here because the rest of the plan depends on it.

### 3.1 Colors

Use semantic Material-3-style names. Define once in Tailwind theme; reference everywhere via `text-primary`, `bg-surface`, etc.

```css
/* src/styles.css (Tailwind v4 @theme block) */
@theme {
  /* Surfaces */
  --color-surface:                    #f3fced;
  --color-surface-dim:                #d3ddce;
  --color-surface-bright:             #f3fced;
  --color-surface-container-lowest:   #ffffff;
  --color-surface-container-low:      #edf7e7;
  --color-surface-container:          #e7f1e2;
  --color-surface-container-high:     #e1ebdc;
  --color-surface-container-highest:  #dce5d7;
  --color-surface-variant:            #dce5d7;

  /* Text on surfaces */
  --color-on-surface:                 #151e15;
  --color-on-surface-variant:         #3d4a3b;
  --color-inverse-surface:            #2a3329;
  --color-inverse-on-surface:         #eaf4e5;

  /* Borders / outlines */
  --color-outline:                    #6c7b69;
  --color-outline-variant:            #bbcbb7;

  /* Primary — green (growth, freshness, primary CTAs) */
  --color-primary:                    #006e23;
  --color-on-primary:                 #ffffff;
  --color-primary-container:          #47e865;
  --color-on-primary-container:       #006420;
  --color-inverse-primary:            #40e360;

  /* Secondary — blue (institutional, navigation, secondary brand) */
  --color-secondary:                  #3c4dcd;
  --color-on-secondary:               #ffffff;
  --color-secondary-container:        #5767e8;
  --color-on-secondary-container:     #fffbff;

  /* Tertiary — warm clay (occasional accent, never a CTA) */
  --color-tertiary:                   #845332;
  --color-on-tertiary:                #ffffff;
  --color-tertiary-container:         #ffbd95;

  /* Status */
  --color-error:                      #ba1a1a;
  --color-on-error:                   #ffffff;
  --color-error-container:            #ffdad6;
  --color-on-error-container:         #93000a;

  /* Background = same as surface */
  --color-background:                 #f3fced;
  --color-on-background:              #151e15;
}
```

#### Color usage rules (locked)

| Element | Token |
|---|---|
| Page background | `bg-surface` (`#f3fced`) |
| Card surface | `bg-surface-container-lowest` (`#ffffff`) |
| Tinted section background | `bg-surface-container-low` / `bg-surface-bright` |
| Primary CTA fill | `glow-gradient` (135° green→blue) on text-`on-primary` |
| Primary CTA simple variant | `bg-primary text-on-primary` |
| Secondary CTA outline | `border-[1.5px] border-secondary text-secondary` |
| H1 / H2 | `text-on-surface` |
| Body | `text-on-surface-variant` |
| Borders | `border-outline-variant` |
| Success / "free" badges | `bg-primary-container/30 text-on-primary-container` |
| WhatsApp brand callouts | `#25D366` literal — use only for the WhatsApp bubble mockup |

#### The signature gradient

```css
.glow-gradient {
  background: linear-gradient(135deg, #006e23 0%, #3c4dcd 100%);
}
```

Use for: hero primary CTA, "Choose Standard" pricing card, hero `<span>` accent on the WhatsApp word, the "Ready to take your shop online" final CTA band.

#### Decorative orbs

Behind hero sections only. Two soft blurred circles, one primary, one secondary. Never on top of text.

```css
.orb { position: absolute; border-radius: 50%; filter: blur(80px); z-index: -1; opacity: 0.15; }
```

### 3.2 Typography

```css
/* Tailwind v4 theme additions */
@theme {
  --font-display: "Plus Jakarta Sans", system-ui, sans-serif;
  --font-body:    "Inter", system-ui, sans-serif;

  --text-h1:      48px;   /* hero on desktop; bump to 64px in hero override */
  --text-h2:      36px;
  --text-h3:      24px;
  --text-body-lg: 18px;
  --text-body-md: 16px;
  --text-body-sm: 14px;
  --text-label:   12px;
}
```

| Use | Font / weight / size | Line height |
|---|---|---|
| Hero H1 (override) | Display 800, 64px desktop / 36px mobile | 1.1 |
| H1 | Display 800, 48px / 32px | 1.2 |
| H2 | Display 700, 36px / 28px | 1.2 |
| H3 | Display 700, 24px | 1.3 |
| Body lg | Body 400, 18px | 1.6 |
| Body md | Body 400, 16px | 1.5 |
| Body sm | Body 500, 14px | 1.4 |
| Label / chip | Body 600, 12px, letter-spacing 0.05em uppercase | 1 |

### 3.3 Spacing & layout

| Token | Value |
|---|---|
| `--container-max` | 1280px |
| `--gutter` (mobile padding) | 24px |
| `--desktop-padding` (lg+ side padding) | 96px |
| Section vertical padding | 96px desktop / 64px mobile (`py-24 md:py-32`) |
| Card radius (large) | 24px |
| Card radius (small) | 12px |
| Button radius | `rounded-full` (pill) for primary, `rounded-full` for secondary too |
| Card shadow | `0 4px 20px rgba(14, 19, 48, 0.05)` |
| Card hover shadow | `0 8px 30px rgba(14, 19, 48, 0.10)` |

### 3.4 Component conventions

| Component | Spec |
|---|---|
| **Buttons** | Pill (`rounded-full`). Primary = `glow-gradient` + `text-on-primary` + `shadow-lg` + `hover:scale-105`. Secondary = `border-[1.5px] border-secondary text-secondary hover:bg-secondary/5`. Tertiary = `text-on-surface-variant hover:text-primary`. Padding `px-8 py-4` (lg), `px-6 py-2.5` (md), `px-4 py-2` (sm). |
| **Cards** | `rounded-[24px] bg-surface-container-lowest p-8 card-shadow` (use `card-shadow-hover` class for interactive cards). |
| **Inputs** | `rounded-xl border-[1.5px] border-outline-variant focus:border-secondary focus:ring-4 focus:ring-secondary/15`. |
| **Chips / Badges** | `bg-primary-container/30 text-on-primary-container px-3 py-1 rounded-full font-label`. |
| **Sticky nav** | `bg-surface/80 backdrop-blur-md` (`.glass-nav`). 80px tall on desktop, 64px mobile. |
| **Icons** | Material Symbols Outlined, 1.5px stroke equivalent (`fill 0`). Lucide for non-Material concepts. Always 20px in body, 32px in feature cards. |
| **Images** | All product/scenery imagery uses 24px radius. Soft inner shadow optional. |

### 3.5 Mobile rules

- Mobile-first. Build the 360px-wide layout first; add `md:` (768px), `lg:` (1024px), `xl:` (1280px) overrides.
- Hamburger drawer for nav on `<md`. Drawer = full-screen, `glass-nav`, links centered.
- Sticky bottom CTA on Vendors and Pricing pages on `<md` only — pill button anchored 16px from bottom, `glow-gradient`, "Start selling" / "Get started".
- All tap targets ≥ 44px square.

---

## 4. Information Architecture

Eight indexable pages + three utility pages. Mirrors the Stitch Green folder set, expanded with the standard legal trio.

```
/                  Home                          (stitch: home_qloqal)
/vendors           For Vendors / Sellers         (stitch: for_vendors_qloqal)
/customers         For Customers / Shoppers      (stitch: for_customers_qloqal)
/how-it-works      How It Works                  (stitch: how_it_works_qloqal)
/pricing           Pricing                       (stitch: pricing_qloqal)
/our-customers     Customer stories / showcases  (stitch: our_customers_qloqal) — testimonials + logos
/contact           Contact us                    (stitch: contact_us_qloqal)
/about             About / Mission               (NEW — not in stitch set; stays text-only at launch)
/faq               Frequently Asked Questions    (NEW)
/privacy           Privacy Policy                (utility)
/terms             Terms of Service              (utility)
/thank-you         Form-success landing          (utility, ?type=vendor|customer|contact|newsletter)
*                  404                           (utility)
```

### Top-level navbar (left → right)

```
[Qloqal logo]   For Vendors · For Customers · How it Works · Pricing · Customers      [Start selling →]
```

The CTA is always **green primary** ("Start selling") — vendor-first. Secondary surfaces (Customers, How it Works) flip the CTA to "See it in action" linking to `/customers`.

### Footer (4 cols on desktop, stacked on mobile)

| Column | Links |
|---|---|
| **Qloqal** (brand block) | one-liner, social icons (placeholder for now) |
| **Product** | Features · Vendor Dashboard · Integrations · Marketplace |
| **Company** | About Us · Customers · Careers · Blog |
| **Legal** | Privacy Policy · Terms of Service · Cookie Policy |

`Careers` and `Blog` are placeholder links to `/contact?subject=careers` until those pages exist.

---

## 5. Page-by-page spec

For every page: hero with orbs → main content → final `CTABand` → footer. Every page registers `<Helmet>` with title, description, canonical, OG image.

### 5.1 `/` Home (vendor-first, mirrors `home_qloqal/code.html`)

1. **Hero.** H1: *"Run your shop online. Take every order on `<span>WhatsApp</span>`. That's it."* Sub: *"Qloqal turns any small business into a high-converting online shop. Manage your catalog, take payments, and keep your customers happy where they already are."* CTAs: `[Start selling]` (glow gradient) + `[See it in action]` (outline secondary). Orbs behind.
2. **Showcase strip** — 5 small cards (Live orders, WhatsApp accept, Customer app, Payments, Insights) with Material icons. The middle one (`WhatsApp accept`) gets the secondary border to anchor the WhatsApp story.
3. **Stats banner** on `bg-surface-bright` — `6+ Categories · 10 min Setup time · 3 taps Per order · 0 apps For customers`. H1-sized green numerals.
4. **Use-case grid** "If they sell, Qloqal works." — 10 image tiles (Grocery, Bakery, Pharmacy, Clothing, Hardware, Electronics, Restaurant, Lifestyle, Decor, Market) with overlay gradient + label.
5. **Tabbed feature explorer** — Orders / Catalog / Payments / Customers / Insights pills. Active tab loads a card with H2 + bullet list + a screenshot mockup. Default = Orders.
6. **Alternating product rows** (3 rows): Chat that converts (WhatsApp mockup left, copy right) · Your catalog elevated (laptop mockup right, copy left) · Seamless payments (payment row mockup left, copy right).
7. **Why WhatsApp** — sticky-left WhatsApp bubble mockup; right column has 6 reasons with Material icons (High Trust, Instant Reach, Zero Friction, Auto-pilot, Works Everywhere, Repeat Sales).
8. **Pricing teaser** — three pricing cards (Starter $0, Standard $29 highlighted with `POPULAR` ribbon + glow gradient CTA, Pro $89). Link to `/pricing` for full table.
9. **Logo strip** — placeholder partner logos, grayscale-on-default, color-on-hover.
10. **Testimonials** — 3 white cards on `surface-bright`, each with a big H1-stat (300%, 12 hrs, 0 missed) + quote + avatar placeholder + name/role.
11. **Customer-side teaser** — large `bg-secondary/5` rounded-`[48px]` block with H1 "Delight your customers." + secondary CTA → `/customers`.
12. **FAQ accordion** (top 5 from `data/faqs.ts`).
13. **Final CTA band** — full-width `glow-gradient` block: "Ready to take your shop online? — Start selling".
14. **Footer.**

### 5.2 `/vendors` (mirrors `for_vendors_qloqal/screen.png`)

1. Hero — H1 *"Triple your orders. Don't change a thing."* Sub: *"Join 500+ local merchants growing their business with Qloqal's hyperlocal commerce engine."* CTAs: `[Get your shop ready]` (glow) + small chip "FAST SUPPORT" above headline.
2. Feature grid — 6 cards with Material icons: Custom Shop QR · Smart WhatsApp Bot · Inventory Sync · Sales Analytics · Instant Payments · Delivery Drops.
3. Alternating rows (4): "No more manual *'is this available?'* chats." (laptop dashboard mockup) · "Own your customer relationships." (chat-with-merchant photo) · "Delivery on your terms." (delivery van photo) · "Keep 100% of your margins." (handshake photo).
4. **Why WhatsApp** band — same 6 cards as Home, on `bg-inverse-surface text-inverse-on-surface` (dark green-black panel).
5. "Getting started is simple" — 3 numbered steps with green check circles.
6. **Pricing teaser** — same 3 cards. CTA on Standard.
7. Vendor Inquiry form (lead-gen, full width, white card, accent green submit). See §7.2.
8. "Trusted by 500+ local shops" — 3 testimonial mini-cards (avatar + line + name).
9. Final CTA band — "Stop turning customers away. — Get Started Now".
10. Footer.

**Sticky bottom CTA** on mobile: pill `[Start selling]` floating 16px from bottom.

### 5.3 `/customers` (mirrors `for_customers_qloqal/screen.png`)

1. Hero (`bg-surface-container-low`) — H1 *"Real shops. Real prices. Real fast."* Sub: *"Discover your neighborhood like never before. Shop from local vendors with transparent pricing and lightning-fast delivery to your doorstep."* CTAs: `[Shop Now]` (primary) + `[Learn More]` (outline). Right side: phone-mockup illustration. Top chip: `HYPERLOCAL EXPERIENCE`.
2. 3-card strip — See real shops · Live tracking · Pay any way (each in a white card with Material icon).
3. Category grid (8 cards): Groceries · Restaurants · Pharmacy · Bakery · Florist · Pet Supplies · Fruit & Veg · Essentials · Services · Others.
4. App-download band — `bg-surface-container-low` rounded-[48px]: H2 "Download Qloqal today." + App Store / Play Store buttons (placeholder links). Right: phone-in-hand image.
5. FAQ accordion (4 customer-side Qs).
6. Footer.

### 5.4 `/how-it-works` (mirrors `how_it_works_qloqal/screen.png`)

1. Hero — H1 *"From browse to bag, in minutes."* Sub: *"Experience the speed of hyperlocal commerce. We've bridged the gap between digital convenience and physical proximity."* 5-step visual ribbon: Discover → Select → Checkout → Notify → Pack → Handoff.
2. **Synchronized success** — two-column journey:
   - Left (customer): Browse Local Catalog · Secure Instant Pay · Track via WhatsApp.
   - Right (merchant): Receive WhatsApp Alert · Tap to Confirm · Payout Disbursed.
   Connecting lines between matching steps.
3. **The engine under the hood** — dark green band: Customer App → WhatsApp API → Vendor Device, with Material icons + arrows.
4. "Zero learning curve with WhatsApp" — phone mockup left, 3-bullet list right (Familiar Interface · Instant Notifications · Universal Accessibility).
5. CTA band — "Ready to connect your neighborhood? Join 2,500+ local merchants and start selling in under 10 minutes."
6. Footer.

### 5.5 `/pricing` (mirrors `pricing_qloqal/screen.png`)

1. Hero — top chip `SIMPLE ECONOMICS`. H1 *"Pay when you sell. Not before."* Sub: *"Qloqal empowers local businesses with high-end commerce tools. No hidden fees, no monthly surprises. Only pay for the success we help you achieve."*
2. **Three pricing cards**:
   - **Starter** — $0/mo "No monthly fee", "Perfect for individuals and shops starting their journey". Up to 50 orders, hyperlocal map listing, basic inventory (50 items), standard dashboard.
   - **Growth** — $49/mo with `MOST POPULAR` ribbon and glow gradient CTA. "For local degree scaling their delivery and neighborhood presence." 1.5% + $0.30 per transaction, featured map placement, unlimited inventory, advanced analytics, CRM + loyalty.
   - **Scale** — $199/mo. "Custom solutions for regional chains and large local conglomerates." 1.0% + $0.30 per transaction, custom WL app, dedicated account manager, API + POS integration.
3. **Compare features table** — feature × plan matrix with green checkmarks. Sticky header on scroll.
4. Pricing FAQ — 6 Qs (Can I switch plans later? · What qualifies as a transaction? · Are there any hidden setup fees? · How does the Hyperlocal Map work? · Is my data secure? · Do I need a credit card to start the free plan?).
5. Final CTA band — "Ready to own your neighborhood?" `[Get Started Free]` + `[Pricing]`.
6. Footer.

### 5.6 `/our-customers`

Showcase reel: filter pills by category, masonry grid of merchant cards (logo, name, one-line, "Read story" link → modal or stub). At launch all entries are placeholder — clearly marked "Sample customer" in development; replaced post-launch as real merchants opt in. **Never fake a quote with a real-sounding name.**

### 5.7 `/contact` (mirrors `contact_us_qloqal/screen.png`)

1. Hero — top chip `FAST SUPPORT`. H1 *"Talk to us — we reply within a day."* Sub: *"Have a question about Qloqal? Whether you're a local merchant or a curious shopper, our team is ready to assist you in building your hyperlocal network."*
2. Two-column body:
   - Left: Contact form (Full name · Email · Subject dropdown: General Inquiry / Vendor Support / Customer Support / Partnership / Press / Other · Message · `[Send message →]` glow gradient submit). See §7.4.
   - Right: stacked cards — `Email us` (mailto), `WhatsApp Business` (wa.me link). Below: a single team-photo card with quote *"Supported. Local. Together."*
3. **Find what you need** — 4 small cards: Help Center · System Status · Press Kit · Investors (each links to a placeholder page or a mailto for now).
4. Footer.

### 5.8 `/about`

Pure text page. Sections: Mission (2 paragraphs) · What we believe (3 cards) · Roadmap timeline (Phase 1 → Phase 4, no dates) · Founding team (1 founder card with photo placeholder) · Inline CTA → `/contact`.

Copy stays globally generic. No specific city or country callouts.

### 5.9 `/faq`

Accordion split into **For Vendors** (6 Qs) and **For Customers** (6 Qs). Top of page: search box that filters items live (client-side `Array.filter`). All Q&A lives in `src/data/faqs.ts` so the writer can edit copy without touching components.

### 5.10 `/privacy` and `/terms`

Boilerplate placeholder marked at the top: *"Draft — pending legal review."* Sections per [PLAN-WEBSITE1.md §4](PLAN-WEBSITE1.md). Replace with reviewed copy before public launch.

### 5.11 `/thank-you`

Reads `?type=` query param. Renders custom message + next-step CTA per type:

| `type` | Headline | Next CTA |
|---|---|---|
| `vendor` | "Thanks — your shop is on our radar." | "While you wait, see how it works →" → `/how-it-works` |
| `customer` | "We'll let you know when we're live near you." | "Meanwhile, peek at the merchants joining →" → `/our-customers` |
| `contact` | "Got it. We reply within a business day." | "Read our FAQ →" → `/faq` |
| `newsletter` | "You're in. Check your inbox to confirm." | "Back home →" → `/` |
| (none) | "Thanks!" | "Back home →" → `/` |

### 5.12 `*` (404)

Branded not-found. Orbs background. H1 "Page not found." Sub: "The link you followed may be broken, or the page may have been removed." `[Back home]` glow CTA.

---

## 6. Folder structure

```
qloqal-website/
├── public/
│   ├── favicon.svg
│   ├── og-image.png                # 1200×630
│   └── robots.txt
├── src/
│   ├── main.tsx                    # ReactDOM mount
│   ├── App.tsx                     # <BrowserRouter> + <Layout> + <Routes>
│   ├── styles.css                  # Tailwind v4 entry + @theme block + .glow-gradient/.orb/.card-shadow utilities
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Layout.tsx
│   │   │   ├── Navbar.tsx          # sticky, glass-nav
│   │   │   ├── Footer.tsx
│   │   │   ├── MobileDrawer.tsx
│   │   │   └── StickyMobileCTA.tsx
│   │   ├── ui/                     # primitives
│   │   │   ├── Button.tsx          # variants: primary | secondary | ghost
│   │   │   ├── Card.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── Container.tsx       # max-w-[1280px] + gutter padding
│   │   │   ├── Section.tsx         # vertical padding + bg variant
│   │   │   ├── Input.tsx
│   │   │   ├── Textarea.tsx
│   │   │   ├── Select.tsx
│   │   │   ├── PhoneInput.tsx      # country-code prefix, E.164 validator
│   │   │   ├── Checkbox.tsx
│   │   │   ├── FormField.tsx       # wraps label + control + error
│   │   │   ├── Logo.tsx
│   │   │   ├── Orbs.tsx            # decorative absolute-positioned orbs
│   │   │   └── Accordion.tsx
│   │   ├── sections/               # composed marketing blocks
│   │   │   ├── Hero.tsx
│   │   │   ├── ShowcaseStrip.tsx
│   │   │   ├── StatsBanner.tsx
│   │   │   ├── UseCaseGrid.tsx
│   │   │   ├── TabbedFeatureExplorer.tsx
│   │   │   ├── AlternatingRows.tsx
│   │   │   ├── WhyWhatsApp.tsx
│   │   │   ├── PricingTeaser.tsx
│   │   │   ├── PricingCardsFull.tsx
│   │   │   ├── ComparisonTable.tsx
│   │   │   ├── LogoStrip.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── CustomerTeaser.tsx
│   │   │   ├── HowItWorksJourney.tsx
│   │   │   ├── EngineUnderTheHood.tsx
│   │   │   ├── CategoryGrid.tsx
│   │   │   ├── AppDownloadBand.tsx
│   │   │   ├── ContactColumns.tsx
│   │   │   ├── FAQAccordion.tsx
│   │   │   └── CTABand.tsx
│   │   ├── mockups/                # dumb visual components
│   │   │   ├── WhatsAppBubble.tsx
│   │   │   ├── PhoneMockup.tsx
│   │   │   ├── DashboardMockup.tsx
│   │   │   └── PaymentRowMockup.tsx
│   │   └── forms/
│   │       ├── VendorInquiryForm.tsx
│   │       ├── CustomerNotifyForm.tsx
│   │       ├── ContactForm.tsx
│   │       └── NewsletterForm.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Vendors.tsx
│   │   ├── Customers.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Pricing.tsx
│   │   ├── OurCustomers.tsx
│   │   ├── About.tsx
│   │   ├── FAQ.tsx
│   │   ├── Contact.tsx
│   │   ├── Privacy.tsx
│   │   ├── Terms.tsx
│   │   ├── ThankYou.tsx
│   │   └── NotFound.tsx
│   ├── data/
│   │   ├── faqs.ts
│   │   ├── pricing.ts
│   │   ├── categories.ts
│   │   ├── useCases.ts
│   │   ├── whyWhatsApp.ts
│   │   ├── testimonials.ts
│   │   └── nav.ts
│   ├── lib/
│   │   ├── submitForm.ts           # Web3Forms POST wrapper
│   │   ├── validators.ts           # zod schemas per form
│   │   ├── seo.ts                  # default <Helmet> values
│   │   └── cn.ts                   # tailwind-merge + clsx helper
│   └── hooks/
│       ├── useScrollSpy.ts
│       └── useReducedMotion.ts
├── .env.example                    # VITE_WEB3FORMS_KEY=
├── .env.local                      # gitignored
├── .gitignore
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── vercel.json
└── README.md
```

---

## 7. Forms (4 total)

All forms share `<FormField>` + `submitForm()` + zod validation + redirect to `/thank-you?type=...` on success.

### 7.1 Web3Forms wrapper

```ts
// src/lib/submitForm.ts
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;

export type SubmitArgs = {
  subject: string;
  data: Record<string, unknown>;
};

export async function submitForm({ subject, data }: SubmitArgs) {
  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ access_key: ACCESS_KEY, subject, ...data }),
  });
  if (!res.ok) throw new Error(`Submission failed (${res.status})`);
  return res.json();
}
```

Every form includes a hidden `botcheck` honeypot input — Web3Forms drops submissions where it's filled.

### 7.2 Vendor Inquiry — `/vendors`

| Field | Type | Required | Notes |
|---|---|---|---|
| Shop name | text | yes | |
| Owner name | text | yes | |
| WhatsApp number | tel | yes | E.164, country code dropdown |
| Email | email | yes | |
| Country | select | yes | ISO list, no defaults |
| City / area | text | yes | |
| Category | select | yes | Grocery / Bakery / Pharmacy / Restaurant / Clothing / Hardware / Electronics / Other |
| Years in business | number | no | |
| Avg orders / day | number | no | |
| "Are you on WhatsApp daily?" | radio Yes/No | yes | |
| Honeypot | hidden | — | |

Subject: `[Qloqal] New Vendor Inquiry — <shop name>, <country>`. Redirect: `/thank-you?type=vendor`.

### 7.3 Customer Notify-me — `/customers`

| Field | Type | Required |
|---|---|---|
| Name | text | yes |
| Email or phone | text | yes (validate as either) |
| Country | select | yes |
| City | text | yes |
| Honeypot | hidden | — |

Subject: `[Qloqal] Customer Interest — <city>, <country>`. Redirect: `/thank-you?type=customer`.

### 7.4 Contact — `/contact`

| Field | Type | Required |
|---|---|---|
| Full name | text | yes |
| Email | email | yes |
| Subject | select | yes (General / Vendor Support / Customer Support / Partnership / Press / Other) |
| Message | textarea | yes (min 20 chars) |
| Honeypot | hidden | — |

Subject: `[Qloqal] Contact — <subject>`. Redirect: `/thank-you?type=contact`.

### 7.5 Newsletter — footer

| Field | Type | Required |
|---|---|---|
| Email | email | yes |
| Honeypot | hidden | — |

Subject: `[Qloqal] Newsletter signup`. Redirect: `/thank-you?type=newsletter`.

---

## 8. Routing

```tsx
// src/App.tsx
<HelmetProvider>
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vendors" element={<Vendors />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/our-customers" element={<OurCustomers />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  </BrowserRouter>
</HelmetProvider>
```

`vercel.json` rewrites every path to `index.html` so deep links + refresh + back-button all work for the SPA.

---

## 9. SEO

| Page | Title | Description |
|---|---|---|
| `/` | Qloqal — Run your shop on WhatsApp | Qloqal turns any small business into an online shop. Customers order in the app; you take orders right on WhatsApp. |
| `/vendors` | Triple your orders. Don't change a thing. — Qloqal | Join hundreds of local merchants growing with Qloqal's hyperlocal commerce engine. Free to start. |
| `/customers` | Real shops. Real prices. Real fast. — Qloqal | Discover your neighborhood. Shop from local vendors with transparent pricing and lightning-fast delivery. |
| `/how-it-works` | How Qloqal works | Customers in the app, merchants on WhatsApp — here's how Qloqal connects them in seconds. |
| `/pricing` | Pricing — Qloqal | Pay when you sell. No monthly surprises. Three plans for shops at every stage. |
| `/our-customers` | Customers — Qloqal | The local shops powering their neighborhoods with Qloqal. |
| `/about` | About Qloqal | We're building the commerce stack for the world's local shops. |
| `/faq` | Frequently Asked Questions — Qloqal | Answers for vendors and customers. |
| `/contact` | Talk to us — Qloqal | Reach the Qloqal team. We reply within a business day. |
| `/privacy` | Privacy Policy — Qloqal | How we collect, use, and protect your information. |
| `/terms` | Terms of Service — Qloqal | The terms governing your use of Qloqal. |

Per-route `<Helmet>` sets `<title>`, `<meta name="description">`, `<link rel="canonical">`, `<meta property="og:*">`, `<meta name="twitter:card" content="summary_large_image">`. OG image is `/og-image.png` (1200×630, glow-gradient background, "Qloqal" wordmark + tagline).

`public/robots.txt`:
```
User-agent: *
Allow: /
Sitemap: https://qloqal.com/sitemap.xml
```

`public/sitemap.xml`: lists all 11 indexable URLs (utility pages excluded).

---

## 10. Build timeline (5 days)

> Each day ends with something deployed to a Vercel preview URL.

### Day 1 — Foundation
- Scaffold `npm create vite@latest qloqal-website -- --template react-ts`.
- Install: `tailwindcss @tailwindcss/vite react-router-dom react-helmet-async react-hook-form zod @hookform/resolvers framer-motion lucide-react clsx tailwind-merge`.
- Set up Tailwind v4 with `@theme` tokens from §3.1 and §3.2.
- Build `src/styles.css` utility classes: `.glow-gradient`, `.orb`, `.card-shadow`, `.card-shadow-hover`, `.glass-nav`.
- Build UI primitives: Button, Card, Section, Container, Badge, Input, Textarea, Select, FormField, Logo, Orbs.
- Build Layout: Navbar (sticky + glass), Footer, MobileDrawer, StickyMobileCTA.
- Stub all 13 routes with placeholder text.
- Wire `submitForm()` + `.env.local` + `.env.example`.
- Deploy to Vercel preview. Verify `vercel.json` rewrites work for deep links.

### Day 2 — Home + Vendors
- Build all sections used on Home (`Hero`, `ShowcaseStrip`, `StatsBanner`, `UseCaseGrid`, `TabbedFeatureExplorer`, `AlternatingRows`, `WhyWhatsApp`, `PricingTeaser`, `LogoStrip`, `Testimonials`, `CustomerTeaser`, `FAQAccordion`, `CTABand`).
- Compose Home page; pixel-match against `home_qloqal/screen.png`.
- Compose Vendors page using shared sections + new ones; pixel-match against `for_vendors_qloqal/screen.png`.
- Wire Vendor Inquiry form. Submit one real entry; confirm email arrives at `devcloudteam2025@gmail.com` within 30s.
- Add sticky mobile CTA on Vendors.

### Day 3 — Customers + How It Works + Pricing
- Build `CategoryGrid`, `AppDownloadBand`, `HowItWorksJourney`, `EngineUnderTheHood`, `PricingCardsFull`, `ComparisonTable`.
- Compose Customers, How It Works, Pricing.
- Wire Customer Notify-me form.
- Pixel-match against the 3 corresponding stitch screens.

### Day 4 — Our Customers + About + FAQ + Contact + legal + 404 + thank-you
- `OurCustomers` with placeholder cards (clearly marked as samples).
- `About` text page.
- `FAQ` accordion + client-side filter.
- `Contact` with form, mailto + wa.me cards, "Find what you need" 4-card row.
- Wire Contact form + Newsletter form.
- Privacy, Terms (boilerplate, draft banner).
- ThankYou with `?type=` switch.
- 404.

### Day 5 — Polish + ship
- Real-phone pass on every page (≥ 2 phones, both portrait + landscape).
- Add framer-motion fades to: hero, alternating rows, stats banner.
- Generate OG image (1200×630).
- Write `robots.txt` + `sitemap.xml`.
- Lighthouse pass — chase Performance ≥ 90 / Accessibility ≥ 95 / SEO 100. Lazy-load below-fold images, swap PNGs for SVGs where possible, drop unused Google Font weights.
- Submit each form once on production. Confirm 4 emails arrive.
- Point `qloqal.com` DNS at Vercel; wait for SSL.
- Tag `v1.0.0` and ship.

**Buffer:** half-day for inevitable copy edits + a Lighthouse-Performance fight.

---

## 11. Vercel deploy

### `vercel.json`

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" },
        { "key": "Permissions-Policy", "value": "camera=(), microphone=(), geolocation=()" }
      ]
    },
    {
      "source": "/assets/(.*)",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
      ]
    }
  ]
}
```

### One-time setup
1. `vercel link` from project root.
2. Project Settings → Environment Variables → add `VITE_WEB3FORMS_KEY` to **Production** + **Preview** + **Development**.
3. Build Command: `npm run build` · Output: `dist` · Install: `npm install`. (Vercel auto-detects Vite.)
4. Push to `main` → production deploy. Open PRs → preview deploys.
5. Domains → add `qloqal.com` and `www.qloqal.com`. Set DNS at registrar (A/AAAA or CNAME per Vercel's instructions).

### Pre-flight checklist
- [ ] `.env.local` not committed (`.gitignore` includes `.env*`).
- [ ] OG image present at `/public/og-image.png`.
- [ ] `robots.txt` + `sitemap.xml` present at `/public/`.
- [ ] All 4 forms submit successfully from production URL (not just preview).
- [ ] `Cache-Control: public, max-age=31536000, immutable` on `/assets/*`.
- [ ] No `console.log` left in production bundle.

---

## 12. Hard constraints

| # | Rule | Why |
|---|---|---|
| 1 | **Globally generic copy.** No city names, no India-only payment terms (UPI, etc.), no region-specific words like *kirana / tiffin / Dwarka*. Currency is `$` everywhere. | Per saved feedback: marketing surfaces stay globally generic. Indian-specific terms only appear in technical docs. |
| 2 | Web3Forms access key never committed. | Anyone with the key can spam the inbox. |
| 3 | Honeypot `botcheck` field on every form. | Spam will arrive within 24h of public launch. |
| 4 | No fake testimonials, no fake "trusted by" logos. | Loses trust the moment it's noticed. Use placeholder companies clearly styled as illustrative. |
| 5 | No specific launch dates we can't hit. | Use "soon" / "during our pilot" — never a date. |
| 6 | Mobile-first. | Most traffic in the target markets is mobile. |
| 7 | First-load page weight < 500 KB. | 4G is the floor. SVG over PNG, lazy-load below-fold images, no heavy fonts. |
| 8 | Privacy + Terms banner: "Draft — pending legal review." | Public site has legal exposure. Remove banner only after counsel signs off. |
| 9 | Stitch Green tokens are the only colors. | Drift here breaks the brand within a week. If a designer wants a new color, it lands in `@theme` first. |
| 10 | No real ordering, cart, or auth on the marketing site. | This is informational. CTAs route to forms or info pages only. |

---

## 13. Open questions (resolve before Day 5)

1. **Logo asset** — wordmark in Plus Jakarta Sans 800 is sufficient for V1; replace with a real mark when designed.
2. **WhatsApp Business number on Contact page** — provision one or hide the card.
3. **Founder photo + name on About** — placeholder OK at launch; replace within a week.
4. **OG image artwork** — simple "Qloqal" wordmark on glow-gradient with the tagline. Designer can refine post-launch.
5. **Customer logos** — keep placeholder grayscale set until real merchants onboard. Don't backfill with fake names.

---

## 14. What "done" means

The site ships when:

1. All 13 routes render correctly on mobile + desktop with zero console errors.
2. All 4 forms submit successfully from `qloqal.com` and emails arrive at `devcloudteam2025@gmail.com` within 30s.
3. Lighthouse Mobile: Performance ≥ 90, Accessibility ≥ 95, SEO 100, Best Practices ≥ 95.
4. `qloqal.com` is live with valid SSL.
5. OG image renders correctly when the URL is shared on WhatsApp, LinkedIn, Twitter.
6. No region-specific copy anywhere on the site (grep-check passes for `kirana`, `tiffin`, `UPI`, city names).
7. README documents local dev (`npm run dev`), env vars, and deploy.
8. Deep-link refresh works on every route (e.g., visiting `qloqal.com/pricing` directly returns 200).

---

**End of plan.**

> When in doubt: open the matching screen at [`stitch green version /stitch_qloqal_marketing_site/<page>/screen.png`](stitch%20green%20version%20/stitch_qloqal_marketing_site/) and copy the layout. The HTML in `code.html` next to each screen is the closest-to-source reference for spacing and Tailwind classes.
