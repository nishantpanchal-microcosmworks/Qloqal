# Qloqal — Product Website

The public product website for Qloqal — *the marketplace for kirana shops, powered by WhatsApp.*

Built per [PLAN-WEBSITE.md](../PLAN-WEBSITE.md).

## Stack

- **Vite 5** + **React 18** + **TypeScript 5** (strict)
- **Tailwind CSS 3.4** (mobile-first)
- **React Router 6** (SPA, 12 routes)
- **react-hook-form + zod** (form validation)
- **Web3Forms** (form → email, no backend)
- **react-helmet-async** (per-page SEO)
- **lucide-react**, **framer-motion**

## Local development

```bash
cd qloqal-website
npm install
cp .env.example .env.local
# Edit .env.local — paste your Web3Forms key
npm run dev
```

The app boots at **http://localhost:5173**.

> Without `VITE_WEB3FORMS_KEY` set, forms still submit and navigate to `/thank-you` — they log the payload to the console instead of actually emailing. Useful for demoing the UI before wiring email.

## Form → Email setup (one-time)

1. Visit https://web3forms.com
2. Enter `devcloudteam2025@gmail.com` → click **Create Access Key**
3. Paste the key into `.env.local`:
   ```
   VITE_WEB3FORMS_KEY=your-key-here
   ```
4. On Vercel: set the same env var in **Project Settings → Environment Variables** (Production + Preview)

Each form sends a tagged subject so you can filter your inbox:

| Form | Subject |
|---|---|
| Notify-me (shoppers) | `[Qloqal] Shopper Interest — <city>` |
| Vendor inquiry (kiranas) | `[Qloqal] New Kirana Inquiry — <shop name>` |
| Contact | `[Qloqal] Contact — <subject>` |

## Scripts

```bash
npm run dev       # local dev server with HMR
npm run build     # type-check + production build to dist/
npm run preview   # serve the built dist/ locally
npm run lint      # ESLint (when configured)
```

## Routes (12)

| Path | Page |
|---|---|
| `/` | Home |
| `/customers` | For Shoppers |
| `/vendors` | For Kiranas (Founding Kirana inquiry) |
| `/how-it-works` | How It Works |
| `/pricing` | Pricing (Pilot · Pro · Enterprise) |
| `/about` | About |
| `/faq` | FAQ |
| `/contact` | Contact |
| `/privacy` | Privacy Policy (draft) |
| `/terms` | Terms of Service (draft) |
| `/thank-you` | Submission confirmation |
| `*` | 404 |

## Deploy to Vercel

```bash
# Option A: Vercel CLI
npm i -g vercel
vercel link
vercel --prod

# Option B: connect the GitHub repo on vercel.com
```

`vercel.json` rewrites all paths to `/index.html` so deep links and hard refreshes work for the SPA.

Don't forget to set `VITE_WEB3FORMS_KEY` in the Vercel project settings.

## Brand

| Token | Value |
|---|---|
| Primary blue | `#3E52E7` |
| Accent green | `#10B981` |
| Display font | Plus Jakarta Sans |
| Body font | Inter |

Brand identity is **proudly Indian-rooted, globally available**. The word **kirana** is the primary term throughout — never substituted with generic equivalents.

## Folder structure

```
src/
├── components/
│   ├── layout/      # Navbar, Footer, Layout
│   ├── ui/          # Button, Card, Section, Container, Badge, FormField, Logo
│   ├── sections/    # Hero, FeatureGrid, FAQAccordion, PhoneMockup, etc.
│   ├── forms/       # NotifyMeForm, VendorInquiryForm, ContactForm
│   └── seo/         # Seo (helmet wrapper)
├── pages/           # Home, Customers, Vendors, etc. (1 per route)
├── data/            # faqs, features, pricing, roadmap (static content)
├── lib/             # submitForm, validators (zod), utils
├── styles/          # index.css (Tailwind + custom layers)
├── App.tsx          # router config
└── main.tsx         # entry
```
