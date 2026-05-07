# Qloqal — Marketing Website Plan (v2)

> **Audience:** Developer (you / juniors) realigning the Qloqal marketing site to the v2 brief.
> **Goal:** Ship a vendor-first marketing site that makes one thing obvious — *if you can chat on WhatsApp, you can run an online shop on Qloqal.*
> **Timeline:** 10 working days, solo build.
> **Companion docs:** [WEBSITE-PROMPT.md](WEBSITE-PROMPT.md) is the AI-builder brief and the source of truth for content/design. **This plan is the engineering execution of that brief.** [PLAN-WEBSITE1.md](PLAN-WEBSITE1.md) is **superseded** by this doc.

---

## 1. What this plan is — and isn't

This is the engineering plan to refactor the existing [qloqal-website/](qloqal-website/) repo to match [WEBSITE-PROMPT.md](WEBSITE-PROMPT.md) v2. The existing repo already has:

- Vite + React + TS + Tailwind scaffolding
- All page routes stubbed out
- A first pass of components (Hero, FeatureGrid, WhatsAppMockup, FAQAccordion, etc.)
- Forms (Vendor inquiry, Contact, Notify-me)
- vercel.json with SPA rewrite + security headers

So this is **not a from-scratch build** — it's a realignment. The most important shifts vs. what's there now:

| What changes | From | To |
|---|---|---|
| Brand colors | `#3E52E7` blue / `#10B981` green | `#47E865` green / `#2C3DBF` blue |
| Color hierarchy | Blue dominant | Green dominant (≥ 50% of colored UI) |
| CTA priority | Customer & vendor co-equal | **Vendor first**, customer secondary |
| Copy tone | Region-specific terminology | Globally generic — no city names, no region-specific words |
| Mobile UX | Responsive but no sticky CTA | Sticky bottom vendor CTA + full-screen drawer |
| WhatsApp moat | One mockup section | Visual dominance — chat mockups in 3+ sections |
| "Why WhatsApp works" | Implicit | Dedicated 6-card section on Home + /vendors |

### Success criteria (1 month post-launch)

| Metric | Target |
|---|---|
| Vendor signup form submissions | 5+ / month |
| Contact form messages | 10+ / month |
| Lighthouse Performance (mobile) | ≥ 90 |
| Lighthouse Accessibility | ≥ 95 |
| Lighthouse SEO | 100 |
| Bounce on `/` | < 60% |

---

## 2. Tech Stack (already in place — keep)

| Layer | Tech | Version |
|---|---|---|
| Build tool | Vite | 5.x |
| Framework | React | 18.x |
| Language | TypeScript | 5.x (strict) |
| Routing | React Router | 6.x |
| Styling | Tailwind CSS | 3.4.x |
| Icons | lucide-react | latest |
| Animation | Framer Motion | 11.x |
| Forms | React Hook Form + Zod | latest |
| SEO | react-helmet-async | 2.x |
| Form backend | Web3Forms (no backend) | — |
| Hosting | **Vercel** | — |

No new dependencies needed. Stay on the existing setup.

---

## 3. Project Structure (target)

```
qloqal-website/
├── src/
│   ├── App.tsx                 # Router + Layout wrapper
│   ├── main.tsx                # Entry — HelmetProvider + BrowserRouter
│   ├── pages/
│   │   ├── Home.tsx            # Vendor-first homepage
│   │   ├── Vendors.tsx         # Main conversion page
│   │   ├── Customers.tsx       # Secondary
│   │   ├── HowItWorks.tsx
│   │   ├── Pricing.tsx
│   │   ├── About.tsx
│   │   ├── FAQ.tsx
│   │   ├── Contact.tsx
│   │   ├── ThankYou.tsx
│   │   ├── Privacy.tsx
│   │   ├── Terms.tsx
│   │   └── NotFound.tsx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Layout.tsx
│   │   │   ├── MobileDrawer.tsx        # NEW
│   │   │   └── StickyMobileCTA.tsx     # NEW
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── CategoryStrip.tsx       # NEW (replaces ad-hoc category lists)
│   │   │   ├── VendorFlow.tsx          # NEW (3-step WhatsApp mockup walkthrough)
│   │   │   ├── CustomerFlow.tsx        # NEW (subordinate)
│   │   │   ├── WhyWhatsApp.tsx         # NEW (6-card section)
│   │   │   ├── FeatureGrid.tsx
│   │   │   ├── WhatsAppMockup.tsx      # KEEP, restyle to brand colors
│   │   │   ├── PhoneMockup.tsx
│   │   │   ├── ComparisonTable.tsx     # NEW (single source of competitor names)
│   │   │   ├── TestimonialRow.tsx
│   │   │   ├── CTABand.tsx
│   │   │   ├── FAQAccordion.tsx
│   │   │   ├── TrustStrip.tsx
│   │   │   └── SectionHeader.tsx
│   │   ├── ui/
│   │   │   ├── Button.tsx              # variants: primary | secondary | tertiary
│   │   │   ├── Input.tsx
│   │   │   ├── Select.tsx
│   │   │   ├── Textarea.tsx
│   │   │   ├── RadioGroup.tsx          # NEW (delivery model field)
│   │   │   ├── Checkbox.tsx
│   │   │   ├── PhoneInput.tsx          # NEW (country code + E.164 validation)
│   │   │   ├── Card.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── Container.tsx
│   │   │   ├── Section.tsx
│   │   │   ├── FormField.tsx
│   │   │   └── Logo.tsx
│   │   ├── forms/
│   │   │   ├── VendorInquiryForm.tsx   # extend with new fields
│   │   │   └── ContactForm.tsx
│   │   └── seo/
│   │       └── Seo.tsx                 # title, desc, og, twitter, canonical
│   ├── data/
│   │   ├── categories.ts               # NEW — single source of truth
│   │   ├── faqs.ts
│   │   └── testimonials.ts
│   ├── lib/
│   │   ├── analytics.ts                # data-cta helpers
│   │   └── validators.ts               # zod schemas
│   └── styles/
│       └── globals.css
├── public/
│   ├── favicon.svg
│   ├── og-default.png
│   └── ...mockup images
├── index.html
├── tailwind.config.js                  # update colors to v2
├── vercel.json                         # already good — see §6
└── package.json
```

---

## 4. Day-by-Day Plan (10 days)

> Each day ends with a working state — never leave the site broken overnight.

### **Day 1 — Foundation realign**

**Goal:** New brand system in place, app boots clean, no broken pages.

- Update `tailwind.config.js` to the v2 theme block from [WEBSITE-PROMPT.md §11](WEBSITE-PROMPT.md). Replace existing `brand` and `accent` palettes with the new `brand.green*` and `brand.blue*` keys. Keep `ink`, `muted`, `surface`.
- Run a search for hardcoded `#3E52E7`, `#10B981`, `bg-brand-500`, `bg-accent-500` and remove/replace.
- Update `index.html` `<meta name="theme-color">` to `#47E865` and rewrite the `<meta name="description">`.
- Audit `App.tsx` routes against the v2 IA — confirm all 12 routes exist and 404 fallback is wired.
- Smoke test: `npm run dev` → every route renders without console errors (content can be temporarily stale).
- **End-of-day check:** every page loads, no red in console, brand colors visibly green-dominant on the homepage.

### **Day 2 — UI primitives + layout shell**

**Goal:** A consistent design system the rest of the build composes from.

- Refactor `<Button>` to v2 variants (primary green, secondary blue outline, tertiary blue link). Make `data-cta` a required prop.
- Add `<Input>`, `<Select>`, `<Textarea>`, `<RadioGroup>`, `<Checkbox>` if missing. Keep them framework-thin — wrap `<input>` etc., no heavy abstractions.
- Build `<PhoneInput>`: country-code dropdown (use a static common-country list, ~30 entries), strips formatting, validates E.164 via zod.
- Update `<Header>`: vendor CTA is the primary green button; customer CTA is secondary outline. Mobile = hamburger only.
- Create `<MobileDrawer>`: full-screen slide-down, scroll-locked body, 250ms ease-out, all nav links + both CTAs.
- Create `<StickyMobileCTA>`: full-width green button + small secondary text link, sticky at bottom on `< 768px`, dismissible with X. Hide on `/thank-you`, `/privacy`, `/terms`, `/404`.

### **Day 3 — Reusable sections**

**Goal:** All cross-page section components rebuilt against v2.

- `<CategoryStrip>` — reads from `src/data/categories.ts`, renders 10 chips with icon + label, clickable.
- `<VendorFlow>` — 3 stacked WhatsApp-style chat mockups: order in → Accept → Mark Ready. This is the visual centerpiece of the site.
- `<CustomerFlow>` — 3-step app screenshot strip, visually smaller/secondary to VendorFlow.
- `<WhyWhatsApp>` — 6 cards with alternating green/blue accent borders, content from [WEBSITE-PROMPT.md §5](WEBSITE-PROMPT.md).
- `<ComparisonTable>` — the only place competitor names appear. Render the §1 table from the prompt.
- `<CTABand>` — green background, dark ink text, dual-CTA (vendor primary, customer link).
- Restyle existing `<WhatsAppMockup>` to use brand colors (chat bubbles in `brand.green-soft` / `brand.blue-soft` accents — *not* WhatsApp green).

### **Day 4 — Home page**

**Goal:** Homepage matches [WEBSITE-PROMPT.md §7](WEBSITE-PROMPT.md) section by section.

Compose in order: Hero → CategoryStrip → VendorFlow → WhyWhatsApp → "Built for every kind of small business" grid → CustomerFlow → 4-card "Why Qloqal" → TrustStrip → Vendor testimonials (3) → Customer testimonials (2, smaller) → CTABand → Footer.

- Vendor CTA must be above the fold and visually larger than the customer CTA
- All 10 categories must be referenced in the category section
- WhatsApp-style chat mockup must appear in the hero AND in VendorFlow

### **Day 5 — `/vendors` page (the main conversion)**

**Goal:** The page that turns shop owners into signups.

- Rebuild hero with vendor copy from prompt.
- Pull in `<VendorFlow>`, `<WhyWhatsApp>`, "What you'll need" checklist, "Built for every business type" chips, "How you get paid" block.
- Extend `<VendorInquiryForm>` with these fields:
  - Shop name (required)
  - Owner / contact name (required)
  - WhatsApp number — `<PhoneInput>` (required, E.164)
  - Business category — `<Select>` populated from `categories.ts` + "Other" (required)
  - Business hours — simple weekly grid, optional
  - Delivery model — `<RadioGroup>`: "I deliver myself" / "Customer pickup only" / "I want Qloqal to handle delivery" (required)
  - Tell us about your shop — `<Textarea>` (optional)
- On submit: POST to Web3Forms with `VITE_WEB3FORMS_KEY` → navigate to `/thank-you?from=vendor`.

### **Day 6 — Remaining pages**

**Goal:** All secondary pages match the prompt.

- `/customers` — hero, phone-mockup carousel, 4 sections, app-store badges (placeholder hrefs), mini-FAQ
- `/how-it-works` — vendor journey first, then customer journey, then "behind the scenes" panel
- `/pricing` — two-column (Customers / Vendors) with placeholder commission, mini-FAQ row
- `/about` — mission paragraph, "what we believe" 3 bullets, founder placeholder
- `/faq` — 12–15 Qs from `faqs.ts`, accordion UI, grouped tabs (Vendors / Customers / Payments / Privacy)
- `/contact` — simple form (name, email, message) → Web3Forms → `/thank-you?from=contact`
- `/thank-you` — read `?from=` query param, render different success copy for vendor vs contact submissions
- `/privacy` and `/terms` — placeholder scaffolds clearly marked `[REPLACE WITH LEGAL]`
- `/404` — green illustration, "Back home" button

### **Day 7 — Forms hardening**

**Goal:** Both forms validate cleanly, behave well on mobile, and don't double-submit.

- Centralise zod schemas in `src/lib/validators.ts`.
- Inline error messages under each field, red border on invalid, ARIA `aria-invalid` and `aria-describedby` wired.
- Disable submit button while in flight; show a spinner.
- On Web3Forms failure: keep form state, show a toast/error band — don't navigate away.
- Test with screen reader (VoiceOver / NVDA) — every label is announced.

### **Day 8 — SEO + analytics-ready CTAs**

**Goal:** Every page is share-ready and trackable.

- `<Seo>` component used by every page — accepts `title`, `description`, `ogImage`, `canonical`. Sets:
  - `<title>`
  - `<meta name="description">`
  - `<meta property="og:title|description|image|url|type>`
  - `<meta name="twitter:card|title|description|image>`
  - `<link rel="canonical">`
- Add target keyword phrases from [WEBSITE-PROMPT.md §13](WEBSITE-PROMPT.md) into H1/H2/meta where natural. Don't keyword-stuff.
- Create a default `og-default.png` (1200×630) — placeholder OK if branded.
- Add `data-cta="..."` on every CTA button, form submit, and primary link. Naming: `kebab-case-section-action`.
- Generate `public/sitemap.xml` and `public/robots.txt`.

### **Day 9 — Accessibility + Lighthouse polish**

**Goal:** Hit Lighthouse targets (Perf ≥ 90, A11y ≥ 95, SEO 100, Best Practices ≥ 95).

- Run Lighthouse on `/`, `/vendors`, `/contact` in mobile profile.
- Compress all images (use WebP where possible, max 200 KB hero images).
- Add `loading="lazy"` to below-the-fold images and `decoding="async"`.
- Confirm `<html lang="en">` is set and skip-to-content link works.
- Tab through every page — every interactive element shows a visible focus ring.
- Color contrast: run axe DevTools, fix any contrast failures (especially green/white CTAs — `text-ink` on `brand.green` should pass).
- Test at 360px / 768px / 1280px / 1536px — no horizontal scroll anywhere.

### **Day 10 — Deploy to Vercel + smoke test**

**Goal:** Live site, custom domain, working forms.

See **§6 Vercel Deployment** below for the full sequence.

---

## 5. Banned features (don't ship these)

The marketing site must not depict or promise features Qloqal doesn't actually have. From [WEBSITE-PROMPT.md §10](WEBSITE-PROMPT.md):

- Live chat between customer and vendor
- Real-time GPS rider tracking on a map
- Vendor login / web portal / vendor dashboard
- Centralized inventory across multiple shops
- Guaranteed delivery times
- AI recommendations, voice ordering, AR
- Subscription tiers, "premium vendor" plans, paid placement

If a section drifts toward any of these during the build, cut it.

---

## 6. Vercel Deployment

The repo already has [vercel.json](qloqal-website/vercel.json) with the SPA rewrite and security headers — keep it. Below is the full sequence to ship.

### One-time setup

1. **Push the repo to GitHub** (or GitLab / Bitbucket). Vercel reads from git.
   ```bash
   cd qloqal-website
   git init                       # if not already
   git add -A
   git commit -m "Realign to v2 brief"
   git remote add origin git@github.com:<org>/qloqal-website.git
   git push -u origin main
   ```
2. **Create Vercel project**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Import the GitHub repo
   - **Framework preset:** Vite (auto-detected)
   - **Root directory:** `qloqal-website` if monorepo, else default
   - **Build command:** `npm run build` (already in `package.json`)
   - **Output directory:** `dist` (Vite default)
   - **Install command:** `npm install`
3. **Environment variables** (add in Vercel dashboard → Settings → Environment Variables):
   - `VITE_WEB3FORMS_KEY` — copy from `.env.example` setup at [web3forms.com](https://web3forms.com)
   - Apply to *Production*, *Preview*, *Development* scopes
4. **First deploy** runs automatically after import — confirm green check on the build log.

### Verifying [vercel.json](qloqal-website/vercel.json)

The existing file does two important things — keep both:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }],
  "headers": [ /* security headers */ ]
}
```

- **`rewrites`** — sends every unmatched URL to `/` so React Router handles the route client-side. Without this, hitting `/vendors` directly would 404.
- **`headers`** — `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy` for camera/mic/geo. These are already correct.

Optional additions for v2 (consider but not required):

```json
{
  "redirects": [
    { "source": "/vendor", "destination": "/vendors", "permanent": true },
    { "source": "/customer", "destination": "/customers", "permanent": true }
  ]
}
```

### Custom domain

1. Vercel dashboard → *Domains* → add the domain (e.g. `qloqal.com` and `www.qloqal.com`).
2. Vercel will show DNS records to add at the registrar:
   - `A` record → `76.76.21.21` (Vercel's anycast)
   - `CNAME` for `www` → `cname.vercel-dns.com`
3. Set `qloqal.com` as the **Primary Domain**; redirect `www` → apex (or vice versa — pick one and stick).
4. Vercel auto-provisions Let's Encrypt SSL once DNS resolves.

### Preview deployments

Vercel automatically builds a preview URL for **every git branch and PR** — no extra config. Use these for review before merging to `main`. The `main` branch is what deploys to production.

### Form testing post-deploy

After first production deploy:

1. Open `/vendors`, fill the signup form with real data, submit. Confirm `/thank-you?from=vendor` renders and the email arrives at `devcloudteam2025@gmail.com`.
2. Open `/contact`, fill, submit. Confirm `/thank-you?from=contact` and email delivery.
3. View page source on `/` — confirm `<meta property="og:image">` resolves (paste OG URL into [opengraph.xyz](https://www.opengraph.xyz)).
4. Run Lighthouse on the production URL (not localhost) — confirm targets hit.

### Common Vercel gotchas

| Symptom | Cause | Fix |
|---|---|---|
| Direct URL like `/vendors` returns 404 | Missing SPA rewrite | Confirm `vercel.json` rewrite rule |
| Form "submits" locally but does nothing in prod | Env var not added in Vercel dashboard | Add `VITE_WEB3FORMS_KEY` to all scopes, redeploy |
| Build fails: "tsc command not found" | TypeScript missing from `dependencies` | Move to `dependencies` or use `--build` from `devDependencies` (Vercel uses `--include=dev` by default — should work) |
| `import.meta.env` undefined in prod | Env var doesn't have `VITE_` prefix | Vite only exposes vars starting with `VITE_` to the client |
| Stale CSS after deploy | Tailwind purge missing a path | Confirm `content` array in `tailwind.config.js` includes all source paths |

---

## 7. Acceptance Checklist (mirrors prompt §14)

Before declaring v2 shipped:

- [ ] All 12 routes render without console errors
- [ ] `#47E865` is the visually dominant color across the site
- [ ] `#2C3DBF` appears on every page as accent/secondary
- [ ] Vendor CTA is above the fold on every page; visually primary on home
- [ ] At least 6 distinct small-business categories named on the home page
- [ ] WhatsApp-style chat mockups appear in 3+ sections
- [ ] Vendor signup form validates and routes to `/thank-you?from=vendor`
- [ ] Contact form validates and routes to `/thank-you?from=contact`
- [ ] 360px breakpoint fully usable — no horizontal scroll, sticky bottom CTA visible
- [ ] Hamburger drawer opens, locks body scroll, closes on link tap
- [ ] No competitor names mentioned outside the comparison table
- [ ] No region-specific terms or city names anywhere in copy
- [ ] No banned features (§5) depicted or promised
- [ ] No lorem ipsum — placeholder copy is plausible English
- [ ] Lighthouse Performance ≥ 90 (mobile, production URL)
- [ ] Lighthouse Accessibility ≥ 95
- [ ] Lighthouse SEO 100
- [ ] Custom domain live with SSL
- [ ] Both forms successfully deliver to the configured inbox in production

---

## 8. After v2 — what's next

Out of scope for this build, parked for future:

- Blog / content marketing
- Press / media kit page
- Careers page
- Multi-language support
- Real-time vendor onboarding (vs. form → manual follow-up)
- Customer login on the marketing site
- A/B testing framework
- Cookie consent banner (revisit if EU traffic grows)

---

**End of Plan.**
