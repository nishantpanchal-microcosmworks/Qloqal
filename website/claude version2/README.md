# Qloqal Website (v2)

Marketing site for Qloqal — vendor-first, WhatsApp-native commerce.

Built per [PLAN-WEBSITE2.md](../PLAN-WEBSITE2.md) and [WEBSITE-PROMPT.md](../WEBSITE-PROMPT.md).

## Stack
React 18 · Vite 5 · TypeScript 5 · Tailwind 3 · React Router 6 · Framer Motion · React Hook Form + Zod · Lucide · react-helmet-async

## Local development

```bash
cp .env.example .env
# fill VITE_WEB3FORMS_KEY (get a free one at https://web3forms.com)
npm install
npm run dev
```

Open http://localhost:5173.

## Build

```bash
npm run build
npm run preview
```

## Deploy to Vercel

1. Push this repo to GitHub.
2. Import on [vercel.com/new](https://vercel.com/new) — framework preset: **Vite**.
3. Add environment variable `VITE_WEB3FORMS_KEY` in *Settings → Environment Variables* (Production, Preview, Development).
4. Add custom domain in *Domains* and follow the DNS instructions.

The included [vercel.json](./vercel.json) handles the SPA fallback rewrite and security headers.

## Brand
- Primary green `#47E865`
- Secondary blue `#2C3DBF`
- Vendor-first hierarchy across all pages
