# Qloqal — Product Website Plan

> **Audience:** Developer (you / juniors) building the public product website.
> **Goal:** Ship a multi-page React product website that introduces Qloqal to the world. A first-time visitor anywhere on the planet — India, US, UAE, anywhere — should land here and understand what Qloqal is, who it's for, and how it works.
> **Timeline:** 4–5 working days, solo build.
> **Companion docs:** [PLAN.md](PLAN.md) (full vision), [PLAN-MVP.md](PLAN-MVP.md) (5-week MVP build).

---

## 1. What this site is — and isn't

This is **Qloqal's evergreen public face on the web**. Think Razorpay.com, Stripe.com, Shopify.com — a product website that explains the brand and the offering to anyone who arrives, regardless of where they live or whether they've heard of us.

### Brand positioning (locked)

| | |
|---|---|
| **Tagline** | *"The marketplace for kirana shops — powered by WhatsApp."* |
| **One-liner** | *"Every kirana, online. Without an app."* |
| **Identity** | Proudly Indian-rooted, globally available. We use the word **kirana** throughout — not "neighborhood store" or "local shop." Visitors from outside India learn the term from the site itself. It's a feature, not a bug. |
| **Voice** | Confident product company, not "we're testing an idea." Honest about being early — never fake testimonials or fake metrics. |

### Audience

- **Primary:** Customers and kirana shop owners in India who want to understand what we do
- **Secondary:** International visitors — investors, press, prospective partners, curious technologists, future-market shop owners
- **Tertiary:** Search engines and social-share previews (SEO + OG)

### What this site is NOT

- Not the product itself — no real ordering, no real catalog, no live order tracking
- Not a vendor onboarding portal — `/contact` collects vendor interest, but onboarding happens via direct conversation
- Not a CMS-driven blog or content marketing site — no blog, no press section, no careers in V1
- Not a research/validation site — copy is evergreen, written for long-term use

### What "success" looks like (after 1 month live)

| Metric | Target | Why |
|---|---|---|
| Bounce rate on `/` | < 60% | First-time visitors stick around to learn |
| Avg time on `/customers` or `/vendors` | > 1 min | Pitch is engaging enough to read |
| Vendor inquiry forms / month | 5+ | Real shop owners reaching out |
| Contact form messages / month | 10+ | Site works as a credible front door |
| Lighthouse Mobile Performance | ≥ 90 | Fast on 4G — most India traffic is mobile |
| Lighthouse Accessibility | ≥ 95 | Usable for everyone |
| Lighthouse SEO | 100 | Discoverable |

---

## 2. Tech Stack

| Layer | Technology | Version | Notes |
|---|---|---|---|
| Build tool | **Vite** | 5.x | Fast HMR, no SSR overhead needed |
| Framework | **React** | 18.x | |
| Language | **TypeScript** | 5.x | Strict mode |
| Routing | **React Router** | 6.x | Multi-page navigation, SPA |
| Styling | **Tailwind CSS** | 3.4.x | Utility-first |
| Icons | **lucide-react** | latest | Clean, modern icon set |
| Animation | **Framer Motion** | 11.x | Light scroll/fade effects only |
| Forms | **react-hook-form** + **zod** | latest | Validation |
| Form → Email | **Web3Forms** | - | Submissions email directly to admin — no backend |
| SEO meta | **react-helmet-async** | latest | Per-page `<head>` tags |
| Fonts | **Inter** + **Plus Jakarta Sans** (display) | via Google Fonts | |
| Hosting | **Vercel** | - | Free, push-to-deploy, free SSL, free custom domain |
| Analytics | **Vercel Analytics** | - | Privacy-friendly, zero-config |
| Domain | **`qloqal.com`** | - | Locked: `.com` for global reach |

### Why Web3Forms

Free, instant setup, no SMTP, no backend. All four forms POST a JSON body to `https://api.web3forms.com/submit` with your access key, and submissions arrive at `devcloudteam2025@gmail.com` within seconds. Free tier covers ~250 submissions/month — more than enough for a product info site.

If we exceed it, we migrate to a small Vercel serverless function + Resend.

---

## 3. Design System

### Color tokens (Tailwind config)

```js
colors: {
  brand: {
    50:  '#EEF0FE',
    100: '#D9DDFC',
    200: '#B4BBF9',
    300: '#8E99F5',
    400: '#6877F0',
    500: '#3E52E7',  // ← PRIMARY
    600: '#2C3DBF',
    700: '#222F94',
    800: '#192269',
    900: '#0F153F',
  },
  accent: {
    50:  '#ECFDF5',
    100: '#D1FAE5',
    200: '#A7F3D0',
    300: '#6EE7B7',
    400: '#34D399',
    500: '#10B981',  // ← ACCENT
    600: '#059669',
    700: '#047857',
    800: '#065F46',
    900: '#064E3B',
  },
  ink: {
    900: '#0F172A',  // primary text
    700: '#334155',  // secondary text
    500: '#64748B',  // muted text
    300: '#CBD5E1',  // borders
    100: '#F1F5F9',  // section bg
    50:  '#F8FAFC',  // page bg
  },
}
```

### Color usage rules

| Element | Color |
|---|---|
| Primary CTAs, brand links | `brand-500` |
| CTA hover | `brand-600` |
| Hero gradient (customer side) | `brand-500` → `brand-700` |
| Hero gradient (vendor side) | `accent-500` → `accent-700` |
| Vendor section accents, "Free" badges, success states | `accent-500` |
| Vendor CTAs | `accent-500` (hover `accent-600`) |
| Headings | `ink-900` |
| Body text | `ink-700` |
| Muted / captions | `ink-500` |
| Section backgrounds | `white` or `ink-50` (alternating) |
| Card borders | `ink-300` |

**Visual logic:** blue = customer side / brand / trust. Green = vendor side / "free / earn / opportunity." Always keep them on different cards/sections so the dual-audience story is visually obvious.

### Typography

| Use | Font | Weight | Mobile / Desktop |
|---|---|---|---|
| Hero H1 | Plus Jakarta Sans | 800 | 36px / 64px |
| Section H2 | Plus Jakarta Sans | 700 | 28px / 44px |
| Sub-heading H3 | Plus Jakarta Sans | 600 | 20px / 28px |
| Body | Inter | 400 | 16px / 18px |
| Lead paragraph | Inter | 400 | 18px / 20px |
| Small / caption | Inter | 400 | 14px |
| Buttons | Inter | 600 | 16px |

### Spacing & layout

- Container max width: `1200px`, padded `24px` mobile / `40px` desktop
- Section vertical padding: `80px` mobile / `120px` desktop
- Card border radius: `16px`
- Button border radius: `12px`
- Soft shadow: `0 4px 24px rgba(15, 23, 42, 0.06)`

### Responsive breakpoints

| Name | Width | Behavior |
|---|---|---|
| mobile | < 640px | Default; hamburger nav, single column |
| sm | 640px+ | Tablet portrait |
| md | 768px+ | Tablet landscape; horizontal nav |
| lg | 1024px+ | Desktop; 2-col layouts unlock |
| xl | 1280px+ | Max container width |

Mobile-first throughout. Test on real phones, not just dev tools.

---

## 4. Pages — Detailed Spec (10 pages)

### Page 1: `/` — Home

| Section | Content | Components |
|---|---|---|
| Navbar (sticky) | Logo · Customers · Vendors · How It Works · Pricing · About · FAQ · `[Contact]` button | `<Navbar/>` |
| Hero | H1: *"Every kirana, online. Without an app."* Sub: *"Qloqal connects shoppers with their neighborhood kirana shops. Vendors take orders on WhatsApp — nothing to install, nothing new to learn."* CTA: `[Explore as a shopper]` (brand) `[Sell as a kirana]` (accent outline) | `<Hero/>` |
| Trust strip | "Made in India · Built for kiranas everywhere · Free during pilot · No vendor app needed" | `<TrustStrip/>` |
| Problem | 3-card row: (1) "Big platforms ignore your local kirana." (2) "Kirana owners don't have time for new apps." (3) "Neighborhood prices stay offline — you pay more elsewhere." | `<ProblemCards/>` |
| Solution | H2: *"We meet kiranas where they already are — WhatsApp."* 2-col: text + illustration showing app → WhatsApp → kirana flow | `<SolutionBlock/>` |
| How it works (preview) | 3 steps with icons: Order in app → Kirana accepts on WhatsApp → Pickup or delivery. Link "See full flow →" | `<HowItWorksPreview/>` |
| Dual audience split | Two large cards side-by-side. Blue "For Shoppers" → `/customers`. Green "For Kiranas" → `/vendors`. | `<DualAudienceSplit/>` |
| Why Qloqal | 3-card row: "Zero install for vendors" · "Real local prices" · "Money goes to your kirana, not a warehouse" | `<WhyQloqal/>` |
| FAQ teaser | Top 4 Qs in accordion + "View all FAQs →" | `<FAQAccordion limit={4}/>` |
| CTA band | Final big CTA: dual buttons to `/customers` and `/vendors` | `<CTABand/>` |
| Footer | Logo · Quick links · Legal · Contact · Copyright | `<Footer/>` |

### Page 2: `/customers` — For Shoppers

| Section | Content |
|---|---|
| Hero (blue gradient) | H1: *"Order from your kirana, in seconds."* Sub: *"All your neighborhood kiranas, in one app. Pay with UPI. Track in real time."* CTA: `[Notify me when Qloqal launches near me]` |
| Feature grid (6) | Nearby kiranas · Real local prices · UPI / cards / netbanking · Live order tracking · No minimum order · Cash on delivery on select kiranas |
| Phone mockups | 3 mockup screens (placeholder SVGs for V1): vendor list, cart, order tracking |
| Comparison table | **Qloqal** vs. Big delivery apps vs. Going to the kirana yourself. Columns: Selection, Price, Delivery time, Supports your kirana, Personal relationship |
| How it works (shopper view) | 4 steps with icons + screenshots |
| Notify-me form | Name · Phone · City — submits to admin email (subject: `[Qloqal] Shopper Interest — <city>`) |
| CTA band | Link to `/vendors` ("Run a kirana? See the vendor side →") |
| Footer | Shared |

### Page 3: `/vendors` — For Kiranas

| Section | Content |
|---|---|
| Hero (green gradient) | H1: *"Get more orders. Keep using WhatsApp."* Sub: *"Customers find your kirana. Orders come to your phone. You stay in control."* CTA: `[Become a Founding Kirana]` |
| Why-vendors block (6 green cards) | Zero app to install · Manage stock from WhatsApp · Daily summary on WhatsApp · Same-day payouts · Free during pilot · No commission for first 50 kiranas |
| How it works for kiranas | 4 steps with WhatsApp screenshots: (1) Customer orders (2) You get a WhatsApp message (3) Tap Accept (4) Mark Ready |
| Sample WhatsApp message mockup | Realistic WhatsApp bubble showing the order-notification template with `[Accept]` `[Reject]` buttons |
| Earnings calculator | Inputs: avg orders/day, avg order value. Output: estimated additional ₹/month. Pure client-side math. |
| Built for Indian kiranas | Short block on language plans, payout via UPI, support for shop hours/holidays — addresses real concerns |
| Vendor inquiry form | Shop name · Owner name · WhatsApp number · City + Locality · Category (Grocery / General Store / Electronics / Other) · Years in business · Avg customers per day · "Are you on WhatsApp daily?" (Yes/No) |
| Footer | Shared |

### Page 4: `/how-it-works`

| Section | Content |
|---|---|
| Hero | H1: *"How Qloqal works — for both sides."* Sub: *"Shoppers in the app. Kiranas on WhatsApp. We bridge them — automatically."* |
| Side-by-side flows | Left (blue): shopper journey, 8 steps. Right (green): kirana journey, 5 steps. Animated step indicators highlight on scroll. |
| Order lifecycle diagram | Visual: pending_payment → paid → vendor_notified → accepted → ready → completed. Branches for rejected and auto_cancelled. |
| WhatsApp template gallery | 3 sample message cards: order_notification, daily_inventory_summary, low_stock_alert. (Match what the real bot sends — see [PLAN-MVP.md §5](PLAN-MVP.md).) |
| Trust + safety | 3 cards: "Money is held safely by Razorpay" · "Refund if order isn't accepted in 15 minutes" · "Your phone number stays private" |
| CTA band | Dual CTA back to `/customers` and `/vendors` |

### Page 5: `/pricing` — NEW

Inspired by 6ammart.app/pricing — three-tier pricing card layout.

| Section | Content |
|---|---|
| Hero | H1: *"Pricing that grows with your kirana."* Sub: *"Free during our pilot. Simple plans when we scale."* |
| Three-tier pricing cards | **Pilot** (highlighted, ₹0) — Free for first 50 kiranas, no commission, full features, daily summary, low-stock alerts. **Pro** (Coming soon) — small monthly fee, featured placement, advanced analytics, priority support. **Enterprise** (Coming soon) — multi-outlet kiranas, custom integrations, dedicated account manager. |
| Comparison table | Feature × Plan matrix — make it obvious that Pilot is the right pick today |
| FAQ snippet | 4 pricing-related Qs: "Is Qloqal really free?" · "What happens after the pilot?" · "Do you take a commission?" · "Are there hidden fees?" |
| CTA | `[Become a Founding Kirana]` → `/vendors` form |
| Footer | Shared |

### Page 6: `/about`

| Section | Content |
|---|---|
| Hero | H1: *"We're building the marketplace kiranas actually want to use."* |
| Mission | 2 paragraphs: why kiranas matter, why WhatsApp is the unlock, the long-term vision (multi-city, services, etc.) |
| What is a kirana? | Short callout box for international visitors: *"A kirana is a small, family-run neighborhood shop — the heart of Indian retail. There are over 12 million of them across India, and they serve nearly every household in the country."* |
| Origin story | Short founder note (placeholder text — fill in later) |
| Roadmap | Visual timeline: Phase 1 (Pilot) → Phase 2 (Services + Hindi) → Phase 3 (Subscriptions) → Phase 4 (Expansion + AI) — matches [PLAN.md §2](PLAN.md) |
| Team | Placeholder card(s) — 1 founder for now |
| Inline CTA | Link to `/contact` |

### Page 7: `/faq`

Accordion split into two sections — **For Shoppers** and **For Kiranas**. ~12 questions total.

**For Shoppers**
- When are you launching?
- Which areas are you starting with?
- Is it really free?
- How do I pay?
- What if my order isn't accepted?
- Can I cancel an order?

**For Kiranas**
- Do I need a smartphone or computer?
- Do I need to install anything?
- How do I get paid?
- Do you charge commission?
- Can I pause my kirana on busy days?
- What if I don't speak English well?

Each answer 2–4 sentences max. Honest about being pre-launch.

### Page 8: `/contact`

| Section | Content |
|---|---|
| Hero | H1: *"Get in touch."* Sub: *"Questions, partnerships, press, support — write to us."* |
| Contact form | Name · Email · Subject (dropdown: Customer Question / Kirana Owner Question / Partnership / Press / Investor / Other) · Message · Submit |
| Direct contacts | Email link to `devcloudteam2025@gmail.com` · WhatsApp number (placeholder) |
| Office | No specific city/address shown — keep contact location-neutral |

### Page 9: `/privacy` — Privacy Policy

Placeholder boilerplate content — clearly marked at the top: *"This is an early draft of our Privacy Policy. It will be reviewed by counsel before our public launch."*

Sections:
- Introduction & scope
- Information we collect (form data: name, phone, email, business details)
- How we use the information (respond to inquiries, no marketing without consent)
- Sharing (we don't sell data; service providers like Web3Forms are listed)
- Cookies (Vercel Analytics, no third-party trackers in V1)
- Your rights (access, correction, deletion — relevant for GDPR / India DPDP Act)
- Children's privacy
- Contact for privacy concerns
- Last updated date

### Page 10: `/terms` — Terms of Service

Placeholder boilerplate, clearly marked as draft. Sections:
- Acceptance of terms
- Use of the website (informational only at this stage)
- Intellectual property
- Disclaimers (no guarantees about future product, pricing, launch date)
- Limitation of liability
- Governing law (India)
- Changes to terms
- Contact

### Page 11: `/thank-you`

Reads `?type=` query param: `customer` / `vendor` / `contact`. Custom thank-you message and next-step CTA per type.

### Page 12: `*` — 404

Branded not-found page with CTA back to `/`.

---

## 5. Shared Components

### Layout

| Component | Notes |
|---|---|
| `<Navbar/>` | Sticky on desktop; hamburger drawer on mobile. Active route highlighted. |
| `<Footer/>` | 4 cols on desktop, stacked on mobile. Includes legal links (Privacy, Terms). |
| `<Layout/>` | Wraps every page with Navbar + Footer + main container |

### UI primitives

| Component | Variants |
|---|---|
| `<Button/>` | `variant`: primary (brand-500), secondary (white + brand border), accent (accent-500), ghost. `size`: sm, md, lg |
| `<Card/>` | `variant`: default, brand (blue tint), accent (green tint) |
| `<Section/>` | Wraps a section with consistent padding + max-width. `bg`: white / ink-50 / brand-gradient / accent-gradient |
| `<Badge/>` | `variant`: brand, accent, neutral, success |
| `<Container/>` | Max-width 1200px wrapper |
| `<FormField/>` | input / textarea / select / chip group with built-in label + error |

### Page sections (composed)

| Component | Used on |
|---|---|
| `<Hero/>` | Home, Customers, Vendors, How It Works, Pricing, About, FAQ, Contact |
| `<TrustStrip/>` | Home |
| `<ProblemCards/>` | Home |
| `<SolutionBlock/>` | Home |
| `<HowItWorksPreview/>` | Home |
| `<HowItWorksFull/>` | How It Works |
| `<DualAudienceSplit/>` | Home |
| `<WhyQloqal/>` | Home |
| `<FeatureGrid/>` | Customers, Vendors |
| `<ComparisonTable/>` | Customers, Pricing |
| `<EarningsCalculator/>` | Vendors |
| `<WhatsAppMockup/>` | Vendors, How It Works |
| `<PhoneMockup/>` | Customers |
| `<PricingCards/>` | Pricing |
| `<KiranaCallout/>` | About — explains "kirana" to non-Indian visitors |
| `<Roadmap/>` | About |
| `<FAQAccordion/>` | Home (limited), FAQ, Pricing |
| `<CTABand/>` | Bottom of Home, Customers, Vendors, How It Works, Pricing |

### Forms

| Component | Subject line on email |
|---|---|
| `<NotifyMeForm/>` (customer) | `[Qloqal] Shopper Interest — <city>` |
| `<VendorInquiryForm/>` | `[Qloqal] New Kirana Inquiry — <shop name>` |
| `<ContactForm/>` | `[Qloqal] Contact — <subject>` |

All three forms share the `<FormField/>` primitive and a common `submitForm()` helper.

---

## 6. Form → Email Integration

### Flow

```
User submits form
        │
        ▼
React calls submitForm() helper (with zod validation upstream)
        │
        ▼
POST https://api.web3forms.com/submit
  body: { access_key, subject, ...formData, botcheck }
        │
        ▼
Web3Forms validates + emails devcloudteam2025@gmail.com
        │
        ▼
React redirects to /thank-you?type=customer|vendor|contact
```

### `src/lib/submitForm.ts` (sketch)

```ts
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;

export async function submitForm(subject: string, data: Record<string, unknown>) {
  const res = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({ access_key: ACCESS_KEY, subject, ...data }),
  });
  if (!res.ok) throw new Error('Submission failed');
  return res.json();
}
```

### Setup steps (one-time)

1. Visit [web3forms.com](https://web3forms.com)
2. Enter `devcloudteam2025@gmail.com`
3. Click "Create Access Key" — copy the key
4. Create `.env.local` in project root:
   ```
   VITE_WEB3FORMS_KEY=your-key-here
   ```
5. `.env.local` is gitignored by default in Vite
6. On Vercel: add `VITE_WEB3FORMS_KEY` in Project Settings → Environment Variables (Production + Preview)

### Validation

- Client-side: **react-hook-form** + **zod** schema per form
- Required fields enforced; phone uses regex `^\+?[6-9]\d{9}$` for Indian numbers, but allows international format `+<country>...` for global submissions
- Inline error messages, disabled submit while pending
- Honeypot field (hidden `botcheck` input) — Web3Forms ignores submissions where it's filled

---

## 7. Folder Structure

```
qloqal-website/
├── public/
│   ├── favicon.svg
│   └── og-image.png
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Layout.tsx
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Section.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── Container.tsx
│   │   │   └── FormField.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── TrustStrip.tsx
│   │   │   ├── ProblemCards.tsx
│   │   │   ├── SolutionBlock.tsx
│   │   │   ├── HowItWorksPreview.tsx
│   │   │   ├── HowItWorksFull.tsx
│   │   │   ├── DualAudienceSplit.tsx
│   │   │   ├── WhyQloqal.tsx
│   │   │   ├── FeatureGrid.tsx
│   │   │   ├── ComparisonTable.tsx
│   │   │   ├── EarningsCalculator.tsx
│   │   │   ├── WhatsAppMockup.tsx
│   │   │   ├── PhoneMockup.tsx
│   │   │   ├── PricingCards.tsx
│   │   │   ├── KiranaCallout.tsx
│   │   │   ├── Roadmap.tsx
│   │   │   ├── FAQAccordion.tsx
│   │   │   └── CTABand.tsx
│   │   └── forms/
│   │       ├── NotifyMeForm.tsx
│   │       ├── VendorInquiryForm.tsx
│   │       └── ContactForm.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Customers.tsx
│   │   ├── Vendors.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Pricing.tsx
│   │   ├── About.tsx
│   │   ├── FAQ.tsx
│   │   ├── Contact.tsx
│   │   ├── Privacy.tsx
│   │   ├── Terms.tsx
│   │   ├── ThankYou.tsx
│   │   └── NotFound.tsx
│   ├── data/
│   │   ├── faqs.ts
│   │   ├── features.ts
│   │   ├── pricing.ts
│   │   └── roadmap.ts
│   ├── lib/
│   │   ├── submitForm.ts
│   │   ├── validators.ts
│   │   └── utils.ts
│   ├── hooks/
│   │   └── useScrollSpy.ts
│   ├── styles/
│   │   └── index.css
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
├── .env.local
├── .env.example
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── vite.config.ts
├── package.json
├── README.md
└── vercel.json
```

---

## 8. Routing

```tsx
// App.tsx
<HelmetProvider>
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/vendors" element={<Vendors />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/pricing" element={<Pricing />} />
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

`vercel.json` rewrites all paths to `index.html` so deep-linking + refresh work for the SPA.

---

## 9. SEO & Metadata

| Page | Title | Description |
|---|---|---|
| `/` | Qloqal — The marketplace for kirana shops, powered by WhatsApp | Every kirana, online. Without an app. Connect with your neighborhood kiranas — they take orders on WhatsApp. |
| `/customers` | Order from your kirana — Qloqal | Real local prices, UPI payments, live tracking. Find every kirana in your neighborhood, in one app. |
| `/vendors` | Get more orders. Keep using WhatsApp. — Qloqal for Kiranas | Zero app to install. Free during pilot. No commission for the first 50 kiranas. |
| `/how-it-works` | How Qloqal works | Shoppers in the app, kiranas on WhatsApp. Here's the full flow. |
| `/pricing` | Pricing — Qloqal | Free during our pilot. Simple plans when we scale. |
| `/about` | About Qloqal | We're building the marketplace kiranas actually want to use. |
| `/faq` | Frequently Asked Questions — Qloqal | Answers for shoppers and kirana owners. |
| `/contact` | Contact Qloqal | Get in touch — partnerships, press, support, or just say hello. |
| `/privacy` | Privacy Policy — Qloqal | How we collect, use, and protect your information. |
| `/terms` | Terms of Service — Qloqal | The terms governing your use of Qloqal's website and services. |

Implementation: per-page `<head>` tags via `react-helmet-async`. Set `og:image` (1200×630), `og:title`, `og:description`, `twitter:card=summary_large_image`. Add `<link rel="canonical">` to each page.

`robots.txt`: allow all, point to sitemap. `sitemap.xml`: list all 10 indexable pages (Privacy, Terms, ThankYou included; 404 excluded).

---

## 10. Analytics

**At launch:**
- **Vercel Analytics** — free, zero-config, gives page views and Core Web Vitals
- Track form submissions by counting emails in the inbox (sufficient at this stage)

**After ~1k monthly visitors:**
- Add **Plausible** or **Posthog** for funnel tracking (hero CTA click → form view → form submit)

**Never:**
- No GA4. No Meta Pixel. No third-party trackers in V1 — keeps the privacy policy short and avoids consent banner mess for international visitors.

---

## 11. Build Timeline (5 days)

> Each day ends with something deployed to Vercel preview.

### Day 1 — Foundation

- [ ] Scaffold Vite + React + TS + Tailwind + Router + helmet-async
- [ ] Configure Tailwind theme (colors, fonts, breakpoints) per §3
- [ ] Build UI primitives: Button, Card, Section, Container, Badge, FormField
- [ ] Build Layout shell: Navbar (with active route highlighting + mobile drawer) + Footer
- [ ] Set up routing skeleton — all 12 routes render placeholder text
- [ ] Set up `submitForm()` helper + `.env` wiring
- [ ] Deploy to Vercel preview URL

### Day 2 — Home + Vendors

- [ ] Home page: Hero, TrustStrip, ProblemCards, SolutionBlock, HowItWorksPreview, DualAudienceSplit, WhyQloqal, FAQ teaser, CTABand
- [ ] Vendors page: Hero (green), feature grid, how-it-works-for-kiranas, WhatsApp mockup, earnings calculator, vendor inquiry form
- [ ] Wire `<VendorInquiryForm/>` to Web3Forms; verify email arrives

### Day 3 — Customers + How It Works + Pricing

- [ ] Customers page: Hero, feature grid, phone mockup, comparison table, how-it-works (shopper view), Notify-me form
- [ ] How It Works page: side-by-side flows, order lifecycle diagram, WhatsApp template gallery, trust block
- [ ] Pricing page: hero, three-tier `<PricingCards/>`, comparison table, FAQ snippet, CTA
- [ ] Wire `<NotifyMeForm/>` to Web3Forms

### Day 4 — About + FAQ + Contact + Legal

- [ ] About page: mission, kirana callout, origin story, roadmap, team
- [ ] FAQ page: full accordion with content from `data/faqs.ts`
- [ ] Contact page: form with subject dropdown, direct contacts
- [ ] Wire `<ContactForm/>` to Web3Forms
- [ ] Privacy page (placeholder boilerplate)
- [ ] Terms page (placeholder boilerplate)
- [ ] ThankYou page with `?type=` branching
- [ ] 404 page

### Day 5 — Polish + ship

- [ ] Responsive pass on all pages (real phone test, not just dev tools)
- [ ] SEO meta tags on every page via helmet-async
- [ ] Build OG image (1200×630)
- [ ] `robots.txt` + `sitemap.xml`
- [ ] Lighthouse pass — target Mobile Performance ≥ 90, Accessibility ≥ 95, SEO 100
- [ ] Custom domain setup: `qloqal.com` → Vercel
- [ ] Final QA: submit each form once, confirm email arrives within 30s
- [ ] Ship to production

**Buffer:** half-day for inevitable copy edits, mockup tweaks, Lighthouse fixes.

---

## 12. Deployment

### Vercel setup

1. `vercel link` from project root
2. Add env var: `VITE_WEB3FORMS_KEY` (Production + Preview)
3. Build command: `npm run build` · Output: `dist`
4. Auto-deploy on push to `main`
5. Preview deploys on every PR

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
    }
  ]
}
```

### Custom domain

`qloqal.com` is locked. Either point DNS at Vercel or use Cloudflare in front of Vercel.

---

## 13. Hard Constraints

| # | Constraint | Why | Mitigation |
|---|---|---|---|
| 1 | Web3Forms key NEVER committed to git | Anyone with the key can spam your inbox | `.env.local` gitignored; set in Vercel UI |
| 2 | Honeypot on every form | Spam will arrive within 24h of public launch | Hidden `botcheck` field; Web3Forms drops filled submissions |
| 3 | No fake testimonials, no fake "trusted by" logos | Loses trust the moment it's noticed | Use honest "we're inviting our first 50 kiranas" copy |
| 4 | No specific launch dates we can't hit | Damages trust if missed | Use "launching soon" / "during our pilot" — never a date |
| 5 | No ordering / no cart on this site | This is informational, not the product | All CTAs route to inquiry forms or info pages |
| 6 | Mobile-first | 80%+ India traffic is mobile, similar in most emerging markets | Build mobile layout first, adapt up |
| 7 | Page weight < 500KB on first load | 4G is the floor for our users | SVG over PNG, lazy-load below-fold, no huge libraries |
| 8 | Privacy + Terms marked "Draft — pending legal review" | Public site has legal exposure | Clear banner at top of both pages until counsel reviews |
| 9 | "Kirana" is the primary term — never substituted | Brand identity is Indian-rooted by design | When in doubt, use kirana; explain it in `<KiranaCallout/>` for international visitors |

---

## 14. Locked Decisions

| # | Decision | Locked value |
|---|---|---|
| 1 | Domain | **`qloqal.com`** |
| 2 | Pricing page | **Yes** — three-tier (Pilot / Pro / Enterprise) |
| 3 | Privacy + Terms | **Yes**, placeholder boilerplate marked as draft pending legal review |
| 4 | Blog / Press / Careers | **No** — not in V1 |
| 5 | Notify-me form country field | **No** — name, phone, city only |
| 6 | Form submissions email target | **`devcloudteam2025@gmail.com`** via Web3Forms |
| 7 | Color theme | **`#3E52E7` blue + `#10B981` green** |
| 8 | Hosting | **Vercel** |
| 9 | Terminology | **"Kirana"** primary; never substitute with generic equivalents |
| 10 | Audience | **Worldwide**, evergreen — not anchored to any specific city or neighborhood |

### Still open (need before Day 5)

- Logo / wordmark — text wordmark in Plus Jakarta Sans for V1; real logo can replace later
- Founder name + photo for About page — placeholder OK at launch; replace within 1 week
- WhatsApp number to display on Contact — get one or hide until ready
- OG image design — simple "Qloqal" wordmark on brand-blue gradient with tagline

---

## 15. Post-Launch Roadmap (V2 of the website)

Trigger: after 1 month live with healthy traffic.

- Add real testimonials from founding kiranas and early shoppers
- Replace placeholder mockups with real product screenshots
- Add Hindi version of `/customers` and `/vendors` (Phase 2 product also ships Hindi)
- Embed a small "kiranas onboarded so far" counter (manually updated)
- Replace Web3Forms with a Vercel serverless function + Resend that writes to MongoDB — same DB the MVP app uses, so signup data is reusable
- Add the blog/resources section (only after we have things to say)
- Get Privacy + Terms reviewed by counsel and remove draft banners

---

## 16. What "Done" Means for the Website

The site is shipped when:

1. All 12 routes render correctly on mobile + desktop with no console errors
2. All 3 forms submit successfully and emails arrive at `devcloudteam2025@gmail.com` within 30 seconds
3. Lighthouse Mobile: Performance ≥ 90, Accessibility ≥ 95, SEO 100, Best Practices ≥ 95
4. `qloqal.com` is live with SSL
5. OG image renders correctly when shared on WhatsApp / LinkedIn / Twitter
6. Each form is submittable on a real phone in under 60 seconds
7. Privacy + Terms pages are live (with draft banner)
8. README documents how to run locally, env vars, and deploy

---

## 17. Glossary (for juniors)

| Term | Meaning |
|---|---|
| **Kirana** | A small, family-run neighborhood shop in India. There are 12+ million across the country — the heart of Indian retail. |
| **Vite** | Modern frontend build tool — replaces webpack. Fast HMR, ESM-native. |
| **HMR** | Hot Module Replacement — code changes show up in the browser without a full reload. |
| **Web3Forms** | Free service that turns any HTML/JS form into "send me an email when submitted." No backend required. |
| **Honeypot field** | Hidden input that bots fill in but humans don't. If filled, you discard the submission. |
| **OG image** | Open Graph image — what gets shown when someone shares your URL on WhatsApp, Twitter, LinkedIn. |
| **SPA rewrite** | Hosting rule that says "any URL → serve `index.html`" so client-side routing works on direct visits and refreshes. |
| **Lighthouse** | Google's audit tool for Performance, Accessibility, SEO, Best Practices. Built into Chrome DevTools. |
| **Mobile-first** | Design and build the mobile layout first; add desktop styles on top via media queries. |
| **DPDP Act** | India's Digital Personal Data Protection Act — privacy law analogous to GDPR. |

---

**End of Website Plan.**

> When in doubt: re-read §1 (what we're building) and §13 (hard constraints). The site is the public face of a brand that's proudly Indian-rooted and globally available. Build for the world; sound like Qloqal.
