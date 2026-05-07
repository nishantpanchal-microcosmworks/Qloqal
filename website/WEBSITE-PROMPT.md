# Qloqal — Marketing Website Build Prompt (v2)

> Paste this entire document into Lovable / Bolt / v0 / Cursor / any AI website builder.
> It is self-contained: brand, audiences, pages, copy guidance, design system, deliverables, acceptance criteria.

---

## 1. The Project (read this first)

**Qloqal** is the easiest way for any small business to start selling online — without learning a new app. Customers order in the **Qloqal mobile app**. The shop owner takes orders right on **WhatsApp**.

**One-line pitch:**
> *If you can chat on WhatsApp, you can run an online shop on Qloqal.*

This is not "another marketplace". The product is a **vendor operating system that hides inside WhatsApp.** A grocery store, a bakery, a pharmacy, a salon, an electronics repair shop — none of them have to install anything, learn anything, or buy a tablet. They get an order message, tap **Accept**, and they're selling online.

**Why it's different from existing marketplaces:**

| Platform           | Vendor side          | Setup effort         | Qloqal's twist                              |
|--------------------|----------------------|----------------------|---------------------------------------------|
| Big-box e-commerce | Required app/portal  | High                 | We use WhatsApp — zero install              |
| Quick-commerce     | Owns dark stores     | Capital-heavy        | We use *existing* neighborhood shops        |
| Food delivery      | Tablet + training    | Medium-high          | We use the phone the owner already owns     |

The bet: **small business owners already live on WhatsApp.** Meeting them there removes the #1 reason small shops never go online — *"I don't have time to learn a new app."*

> Mention competitor names **only inside the comparison table above**. Do not repeat them elsewhere on the site.

---

## 2. Audience priority — VENDOR-FIRST

A marketplace dies without supply. Phase 1 of Qloqal is about getting small businesses onboard, not about consumer scale. The website must reflect that.

### Audience A — Small Business Owners (vendors) — **PRIMARY**
- Want: more orders without learning new tech, no monthly fees, no extra device
- Pain: too busy running the shop to learn a new app; existing platforms charge 20–30% commissions and demand tablets, training, and constant attention
- **Primary CTA across the entire site:** **"Start selling on Qloqal"** (green) → `/vendors` signup form

### Audience B — Customers (people who order) — **SECONDARY**
- Want: discover nearby shops, order quickly, support local
- Pain: existing apps surface giant chains, not the actual shop on their street
- **Secondary CTA:** **"Get the customer app"** (outline blue) → app store badges (placeholder links OK)

**Conversion rule:** every page must have a vendor CTA above the fold. The customer CTA may exist alongside it but must be visually subordinate (outline, smaller, or below).

---

## 3. Positioning

Qloqal is for **any small business** — not one category. Examples to feature throughout the site:

- 🛒 Grocery & corner shops
- 🥖 Bakeries & sweet shops
- 💊 Pharmacies & health stores
- 📱 Electronics & mobile-repair shops
- 📚 Stationery & book shops
- 🥛 Dairy & milk shops
- 💇 Salons, barbers, beauty parlours
- 🔧 Hardware & home-repair services
- 🌸 Florists & gift shops
- 🍱 Home kitchens & meal-prep services

**Copy rule:** Lead with the operational promise (*"run your shop on WhatsApp"*), then list categories to prove breadth. Use globally-neutral vocabulary. Do **not** lean into food-delivery or grocery-only imagery — Qloqal is broader than restaurants.

---

## 4. The WhatsApp moat — make it visually dominant

WhatsApp is the entire reason Qloqal exists. The site must show that, not just say it.

**Visual directive (non-negotiable):**

- The WhatsApp order flow must appear as a **realistic chat-style UI mockup** in at least **three** distinct sections: hero, "How it works (vendor side)", and `/vendors` page hero.
- Mockups must show: an incoming order card with itemised list and total, an **Accept** / **Reject** button row, and a follow-up *"Mark Ready"* interaction.
- Use WhatsApp-familiar visual language: chat bubbles, message timestamps, double-tick read receipts — but in **Qloqal's brand colors**, not WhatsApp green. The vendor-side UI is *recognisably WhatsApp-like*, not a clone.
- At least one section must show the contrast: customer phone (Qloqal app, polished UI) ↔ vendor phone (chat-style WhatsApp message). This split is the entire product story.

Without this, the AI builder will default to a generic marketplace homepage. Don't let it.

---

## 5. Why WhatsApp works (dedicated section — Home + /vendors)

This is the strongest business insight. Don't hide it. Build a section titled something like **"Why we built this on WhatsApp"** with these points:

- Shop owners already check WhatsApp all day
- No new device, no tablet, no training
- Works on any low-end Android phone
- Family-run shops can share access naturally
- Zero learning curve — they already know the buttons
- Push notifications they actually see (their phone is already pinging)

Format: 6 small cards, alternating green/blue accent borders, with a one-line explanation each.

---

## 6. Design Reference & Visual Direction

**Reference for energy (not layout):** [https://6ammart.app/](https://6ammart.app/) — bright, confident, dual-audience marketplace site. Match the vibrancy, not the layout. Qloqal should feel cleaner, more product-led, less stock-illustration-heavy.

### Brand colors (strict — use exactly these hex codes)

| Role                  | Hex       | Usage                                                          |
|-----------------------|-----------|----------------------------------------------------------------|
| **Primary green**     | `#47E865` | **Majority color.** Primary buttons, hero accents, large blocks, success states, illustrations |
| **Secondary blue**    | `#2C3DBF` | Heading accents, secondary CTAs, links, chips, subtle UI lines |
| Ink (text)            | `#0E1330` | Body text, headings on light backgrounds                       |
| Muted text            | `#5B6080` | Secondary copy, captions                                       |
| Surface / off-white   | `#F6F8FA` | Section backgrounds                                            |
| Pure white            | `#FFFFFF` | Cards, hero blocks                                             |

**Color rules:**
- `#47E865` dominates the visual identity — at least 50%+ of colored UI mass
- `#2C3DBF` plays a supporting role — accents, headings, secondary buttons, link color
- Don't saturate both at once in the same hot zone; let green lead, blue accent
- Gradient `#47E865 → #2C3DBF` allowed sparingly for hero / CTA flourishes only

### Typography
- **Headings:** Plus Jakarta Sans 700/800 (or Inter 800 fallback)
- **Body:** Inter 400/500
- Generous heading sizes on hero (clamp 40–72px). Tight line-height on H1/H2.

### Visual language
- Rounded corners: 12–24px on cards/buttons (consistent scale)
- Soft shadows, not heavy
- Outline icons (Lucide preferred)
- Subtle motion via Framer Motion — fade-up on scroll, micro-interactions on hover. Nothing flashy.
- **No AI-generated stock photos of "smiling shopkeepers".** Use clean UI mockups, phone screens, and simple iconography instead. No human face photography unless real customers/vendors are sourced.

---

## 7. Information Architecture — Pages

Build these routes. Each section lists the required blocks.

### `/` — Home (vendor-first)

1. **Sticky nav** — logo (Qloqal) | links: How it works, For Vendors, For Customers, Pricing, FAQ, Contact | right-side: **"Start selling"** (primary green) and **"Get the app"** (outline blue)
2. **Hero**
   - Headline: *"Run your shop on WhatsApp."*
   - Sub: *"Qloqal turns any small business into an online shop. Orders come straight to your WhatsApp — no app to install, no tablet, no training. Customers order from the Qloqal app; you just tap Accept."*
   - Two CTAs: **Start selling on Qloqal** (green, primary) and **Get the customer app** (blue, outline)
   - Visual: split mockup — left: customer phone showing nearby shops in the Qloqal app; right: vendor's WhatsApp chat with an Accept/Reject order message
3. **Category strip** — 10 chips with icon: Grocery 🛒, Bakery 🥖, Pharmacy 💊, Electronics 📱, Stationery 📚, Dairy 🥛, Salon 💇, Hardware 🔧, Florist 🌸, Home Kitchen 🍱 — each clickable (filters to that category on `/vendors`)
4. **Vendor flow (visual)** — three steps with WhatsApp-style chat mockups
   1. Order arrives in your WhatsApp
   2. Tap **Accept**
   3. Tap **Mark Ready** when it's prepared
5. **Why we built this on WhatsApp** — the dedicated section from §5 above, 6 cards
6. **Built for every kind of small business** — large grid of categories with one-line examples (e.g., "Bakery — your morning bread, every morning"; "Salon — book a haircut without phone tag")
7. **Customer flow (smaller, secondary)** — three steps: open app → pick a nearby shop → pay & track. Visually subordinate to the vendor flow.
8. **Why Qloqal — 4 feature cards**
   - 🟢 *Zero-app vendor onboarding* — runs on WhatsApp the owner already uses
   - 🔵 *Hyperlocal first* — only shops within walking / quick-delivery distance
   - 🟢 *Fair to small businesses* — no setup fees, no monthly minimums, no tablet
   - 🔵 *Pay your way* — cards, wallets, instant bank transfer
9. **Trust strip** — "Powered by WhatsApp Business · Secure payments built in · Works on any smartphone"
10. **Vendor testimonials** — 3 placeholder quotes from shop owners (different categories)
11. **Customer testimonials** — 2 placeholder quotes (smaller treatment)
12. **Final CTA band** — `#47E865` background, dark ink text — *"Your shop is one message away from going online."* Primary CTA: **Start selling on Qloqal**. Secondary link: *"Or download the customer app"*.
13. **Footer** — links (Vendors, Customers, How it works, Pricing, FAQ, About, Contact, Privacy, Terms), social icons, © Qloqal {current year}.

### `/vendors` — For Small Business Owners (the main conversion page)

- Hero: *"Sell more, on the WhatsApp you already use."*
- Big sub: *"No new app. No tablet. No monthly minimum. If you can chat on WhatsApp, you can run your Qloqal shop."*
- Sections:
  - **"How it works on your side"** — chat-style WhatsApp mockup walkthrough (full sequence: order in → Accept → Mark Ready → done)
  - **"Why we built this on WhatsApp"** — the 6-card section repeated here
  - **"What you'll need"** — checklist: a smartphone with WhatsApp, a bank account for payouts, ~10 minutes to list your top items
  - **"Built for every business type"** — category chips (same 10 as homepage)
  - **"How you get paid"** — secure payment partner, automatic settlement to your bank account, transparent commission
- **Vendor signup form** (primary conversion on this page) with fields:
  - Shop name *
  - Owner / contact name *
  - WhatsApp number * (international phone input with country code selector + E.164 validation)
  - Business category * (dropdown matching the 10 categories above + "Other")
  - Business hours (simple "open" / "closed" weekly grid, optional)
  - Delivery model * (radio: "I deliver myself" / "Customer pickup only" / "I want Qloqal to handle delivery")
  - "Tell us about your shop" (textarea, optional)
  - Submit → posts to a placeholder endpoint, redirects to `/thank-you`
- Trust line below the form: *"Free to list. We never charge a setup fee. You only pay a small per-order commission when an order is delivered."*

### `/customers` — For Customers (secondary)
- Hero: *"Order from your favourite local shops in seconds."*
- Phone-mockup carousel — Home (nearby), Storefront, Cart, Order tracking
- Sections: "Find what's actually near you", "Real shops, real prices", "Track every order in real time", "Pay any way you like"
- App store + Play Store badge block (placeholder links)
- Mini-FAQ (5 Qs)

### `/how-it-works` — Long-form explainer
- The vendor journey first, illustrated step-by-step (chat mockup of full message flow: notification → accept → mark ready → done)
- The customer journey, illustrated (search → pick shop → cart → pay → track → receive)
- Behind-the-scenes panel: where Qloqal sits between the customer app, the WhatsApp message, and the payment provider
- One-line *"Why WhatsApp?"* aside linking to the dedicated section on home/vendors

### `/pricing`
- Two columns:
  - **For Customers:** *"Free to use. Always."*
  - **For Vendors:** *"Free to list. Pay only on orders."* — placeholder commission *"starting at 5% per delivered order"*, no monthly fees, no setup fees, no hidden charges
- FAQ-style row: "When do I get paid?" "What about refunds?" "Can I pause my shop anytime?" "What does Qloqal take?"

### `/about`
- One-paragraph mission: *"Local shops are the heart of every neighbourhood. We're putting them online without forcing them to change how they work."*
- "What we believe" — 3 short bullets on operational simplicity for shop owners
- Founder note placeholder + photo placeholder
- Contact link

### `/faq`
- 12–15 Qs split into Vendors / Customers / Payments / Privacy
- Accordion UI

### `/contact`
- Simple form: name, email, message → /thank-you
- Email + WhatsApp business contact placeholders (no map block — keep it generic)

### `/thank-you`
- Generic post-form-submit page with reassuring copy + link back home
- Different success message depending on referrer (`/vendors` form vs `/contact` form)

### `/privacy` and `/terms`
- Standard scaffolds — placeholder copy clearly marked `[REPLACE WITH LEGAL]`

### `/404`
- Friendly 404 with a green illustration and a "Back home" button

---

## 8. Mobile navigation — explicit spec

Audiences are heavily mobile-first. AI builders frequently break mobile nav. Implement exactly:

- Mobile breakpoint ≤ 768px: replace top nav with a **hamburger** that opens a **full-screen slide-down drawer** with all nav links, both CTAs, and a footer link group
- Drawer animation: slide from top, 250ms ease-out
- Body scroll locked while drawer is open
- **Sticky bottom CTA bar** on every page below 768px: full-width green button **"Start selling on Qloqal"** + a smaller text link *"Get the customer app"*. Persistent until the user is in the form or has dismissed it via an X.
- All tap targets ≥ 44×44 px

---

## 9. Tone of Voice
- **Confident, warm, direct.** No corporate fluff.
- Short sentences. Specific examples. *"Your bakery, your salon, your hardware store."*
- Speak to the small business owner with respect — they are not "non-technical losers", they are busy operators who chose a hard job
- Globally neutral English. Do not use region-specific colloquialisms or place names anywhere on the site

---

## 10. Don't invent features (guardrail)

Many features the AI builder might *imagine* are not actually shipped. **Do not depict or promise:**

- Live chat between customer and vendor (orders flow through the app + WhatsApp; there is no in-app messaging)
- Real-time GPS rider tracking on a map (tracking is status-based, not GPS-based)
- A vendor login / web portal (vendors only use WhatsApp — there is no vendor app or vendor dashboard for them)
- Centralized inventory across multiple shops (each shop manages its own stock)
- Guaranteed delivery times (delivery is per-shop, not platform-guaranteed)
- AI recommendations, voice ordering, AR product previews
- Subscription tiers, "premium vendor" plans, paid placement

If a feature is not described in this prompt, do not invent it. Show only what's listed.

---

## 11. Tech & Implementation Notes

If the AI builder is choosing the stack: **React + Vite + TypeScript + Tailwind CSS + React Router + Framer Motion + React Hook Form + Zod + Lucide icons + react-helmet-async**.

- Mobile-first responsive. Test at 360px, 768px, 1280px, 1536px
- Keyboard-accessible nav, focus rings visible (don't disable outlines)
- Lighthouse target: Performance ≥ 90, Accessibility ≥ 95
- Forms: client-side validation (zod schemas), graceful error states, success state redirects to `/thank-you`
- No real backend required — placeholder fetch URLs are fine; comment them clearly with `// TODO: replace with real endpoint`

### Tailwind config — extend theme

```js
theme: {
  extend: {
    colors: {
      brand: {
        green:        '#47E865',
        'green-dark': '#2BC74A',
        'green-soft': '#E8FBEC',
        blue:         '#2C3DBF',
        'blue-dark':  '#1F2C99',
        'blue-soft':  '#E8EBFB',
      },
      ink:     '#0E1330',
      muted:   '#5B6080',
      surface: '#F6F8FA',
    },
    fontFamily: {
      sans:    ['Inter', 'ui-sans-serif', 'system-ui'],
      display: ['"Plus Jakarta Sans"', 'Inter', 'ui-sans-serif'],
    },
    borderRadius: {
      xl:   '1rem',
      '2xl': '1.5rem',
    },
  },
}
```

### Button conventions
- Primary CTA → `bg-brand-green text-ink`, hover `bg-brand-green-dark`
- Secondary CTA → `border-2 border-brand-blue text-brand-blue` outline
- Tertiary / link → `text-brand-blue underline-offset-4 hover:underline`

### Analytics-ready

Every CTA, form submit, and primary link must carry `data-cta="<name>"` (kebab-case) for downstream analytics wiring. Examples: `data-cta="hero-start-selling"`, `data-cta="vendor-form-submit"`, `data-cta="footer-get-app"`.

---

## 12. Required deliverables (what "done" looks like as code)

Generate, at minimum:

- **Layout components:** `<Header>`, `<Footer>`, `<MobileDrawer>`, `<StickyMobileCTA>`
- **Reusable section components:** `<Hero>`, `<CategoryStrip>`, `<FeatureGrid>`, `<WhatsAppMockup>`, `<TestimonialRow>`, `<CTABand>`, `<FAQAccordion>`
- **UI primitives:** `<Button>` (variants: primary, secondary, tertiary), `<Input>`, `<Select>`, `<Textarea>`, `<RadioGroup>`, `<Checkbox>`, `<Card>`
- **Form schemas:** Zod schemas for the vendor form and contact form, wired to React Hook Form
- **SEO utility:** a `<Seo title description ogImage canonical />` component using react-helmet-async, used by every page
- **Route structure:** React Router with all routes from §7
- **404 fallback** wired into the router
- A `src/data/categories.ts` file exporting the category list as the single source of truth (used by homepage strip, vendors page, and form dropdown)

---

## 13. SEO

Each page must set:
- `<title>` — page-specific
- `<meta name="description">` — 150–160 chars, page-specific
- Open Graph + Twitter card meta with `og:image` placeholder
- Canonical link tag
- Site-wide `<meta name="theme-color" content="#47E865">`

### Target keyword phrases (use across H1/H2/meta)
- hyperlocal marketplace
- WhatsApp commerce platform
- WhatsApp ordering for shops
- nearby local stores app
- online ordering for small businesses
- local business ordering platform
- small shop online sales
- chat-based commerce

Suggested home title:
> *Qloqal — Run your shop on WhatsApp. Sell more, with zero setup.*

Suggested home description:
> *Qloqal turns any small business into an online shop. Customers order in the app; you take orders right on WhatsApp. No vendor app, no tablet, no training.*

---

## 14. Acceptance Criteria

- [ ] All routes render without console errors
- [ ] `#47E865` is the visually dominant color across the site
- [ ] `#2C3DBF` appears on every page as accent/secondary
- [ ] Vendor CTA appears above the fold on every page; visually primary on home
- [ ] At least 6 distinct small-business categories are mentioned by name on the home page
- [ ] WhatsApp-style chat mockups appear in at least 3 sections (home hero, vendor flow, /vendors hero)
- [ ] Vendor signup form on `/vendors` validates and routes to `/thank-you`
- [ ] Contact form on `/contact` validates and routes to `/thank-you`
- [ ] Mobile breakpoint (360px) is fully usable — no horizontal scroll, hero readable, sticky bottom CTA visible
- [ ] Hamburger drawer opens, locks body scroll, closes on link tap
- [ ] No competitor names mentioned outside the comparison table
- [ ] No region-specific terms or city names anywhere in copy
- [ ] No invented features from the §10 banned list
- [ ] No lorem ipsum left in the build — placeholder copy is plausible English
- [ ] Lighthouse Performance ≥ 90 on the home page

---

## 15. What NOT to do (summary)

- Don't make the site grocery-only or food-delivery-only — Qloqal is broader
- Don't put a vendor login or vendor dashboard on the marketing site (vendors don't have a portal — they use WhatsApp)
- Don't use AI-generated stock photos of "diverse smiling shopkeepers". Use clean product mockups + simple iconography
- Don't promise features that don't exist (see §10 list)
- Don't use region-specific words (kirana, tiffin, paratha, bodega, dépanneur, sari-sari, etc.) or city names
- Don't make customer CTAs visually equal to or larger than vendor CTAs
- Don't repeat competitor names outside the comparison table
- Don't fabricate metrics ("500+ shops onboarded", "10k orders/day") — use placeholder testimonials only

---

**End of brief. Build the site.**
