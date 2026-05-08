# Qloqal — `mono-zine` (claude version 4)

A brutalist-mono-zine take on the Qloqal marketing site, with a horizontal-scroll narrative on `/` and 100% generated SVG/CSS imagery.

## Stack

Vite 6 + React 19 + TS 5.8 + Tailwind v4, react-router-dom v6, react-helmet-async, react-hook-form + zod, framer-motion, lucide-react.

## Scripts

```bash
npm install
npm run dev      # http://localhost:5175
npm run build    # tsc -b && vite build
npm run preview
npm run lint
```

## Layout

- `src/components/ui` — primitives (`Button`, `Block`, `Stamp`, `KickerLabel`, `Highlight`, `Logo`, `Hr`, `FormField`)
- `src/components/decor` — `Marquee`, `AsciiDivider`, `BlockMark`, `Hatch`
- `src/components/mockups` — pure SVG/CSS phone, chat, catalog, payment mockups
- `src/components/chapters` — nine Home chapters (Cover, Thesis, Flow, Split, Categories, WhyWhatsApp, Proof, Pricing, Colophon)
- `src/components/layout` — Header, Footer, Layout, ChapterRail, PageHeader
- `src/components/forms` — VendorForm, ContactForm
- `src/data` — nav, categories, faqs, pricing, testimonials, whyWhatsApp, chapters, steps, manifesto
- `src/pages` — 13 routes: Home, Vendors, Customers, HowItWorks, Pricing, OurCustomers, About, FAQ, Contact, ThankYou, Privacy, Terms, NotFound

See `PLAN.md` for the full design rationale.
