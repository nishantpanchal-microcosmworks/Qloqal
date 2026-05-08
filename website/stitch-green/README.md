# Qloqal — Marketing Website (Green Edition)

Production marketing site for Qloqal, built from the Stitch Green design system. Vite + React + TypeScript + Tailwind v4 + React Router 6, ready to deploy to Vercel.

The full plan that drives this codebase lives in [PLAN.md](PLAN.md).

---

## Local development

```bash
npm install
cp .env.example .env.local   # then fill in VITE_WEB3FORMS_KEY (optional in dev)
npm run dev
```

Dev server runs at http://localhost:5173.

When `VITE_WEB3FORMS_KEY` is unset, form submissions log to the console and pretend to succeed — useful for local UI work. Set the key to actually email submissions to `devcloudteam2025@gmail.com`.

## Build

```bash
npm run build       # type-check + Vite build → ./dist
npm run preview     # serve the prod build at http://localhost:4173
```

## Deploy to Vercel

1. `vercel link` from this directory.
2. Add `VITE_WEB3FORMS_KEY` in **Project Settings → Environment Variables** (Production + Preview).
3. Push to `main`. Vercel auto-detects Vite and serves `./dist`.
4. SPA deep links + refresh work via [`vercel.json`](vercel.json) rewrites.
5. Custom domain: add `qloqal.com` and `www.qloqal.com` in **Domains**, then update DNS at the registrar.

## Project structure

```
src/
├── App.tsx                 # Router + layout
├── main.tsx                # ReactDOM mount + providers
├── styles.css              # Tailwind v4 entry, design tokens, utilities
├── components/
│   ├── layout/             # Navbar, Footer, Layout
│   ├── ui/                 # Button, Card, Section, Container, FormField, …
│   ├── sections/           # Hero, ShowcaseStrip, WhyWhatsApp, CTABand, …
│   ├── mockups/            # WhatsAppBubble, DashboardMockup, …
│   ├── forms/              # VendorInquiry, CustomerNotify, Contact, Newsletter
│   └── SEO.tsx             # Per-route <Helmet>
├── pages/                  # 13 routes
├── data/                   # Static content (faqs, pricing, nav, testimonials, …)
└── lib/                    # cn, submitForm, validators, seo
```

## Forms

All four forms POST to Web3Forms and route to `/thank-you?type=...` on success:

| Form              | Subject line                                     | Page             |
|-------------------|--------------------------------------------------|------------------|
| Vendor Inquiry    | `[Qloqal] New Vendor Inquiry — <shop>, <country>` | /vendors         |
| Customer Notify   | `[Qloqal] Customer Interest — <city>, <country>`  | /customers       |
| Contact           | `[Qloqal] Contact — <subject>`                    | /contact         |
| Newsletter        | `[Qloqal] Newsletter signup`                      | Footer (every page) |

Every form has a hidden `botcheck` honeypot — Web3Forms drops submissions where it's filled.

## Design tokens

All colors, typography, and spacing live in [src/styles.css](src/styles.css) inside an `@theme` block. The site is locked to the **Stitch Green** palette — `#006e23` primary green, `#3c4dcd` secondary blue, light `#f3fced` surface, with a 135° green→blue glow gradient on hero CTAs.

Use `bg-primary`, `text-secondary`, `bg-surface-container-low` etc — not raw hex codes.

## Constraints

- Copy is **globally generic**. No region-specific terms, no city names, currency in `$`. Technical docs may keep regional terms; marketing copy may not.
- Privacy and Terms pages carry a "Draft — pending legal review" banner until counsel signs off.
- No fake testimonials. Sample stories on `/our-customers` are clearly labeled.
