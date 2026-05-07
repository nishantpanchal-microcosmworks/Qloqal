import { createFileRoute, Link } from "@tanstack/react-router";
import { Seo } from "@/components/Seo";
import { Hero } from "@/components/Hero";
import { CategoryStrip } from "@/components/CategoryStrip";
import { WhyWhatsApp } from "@/components/WhyWhatsApp";
import { WhatsAppMockup, OrderCard } from "@/components/WhatsAppMockup";
import { CTABand } from "@/components/CTABand";
import { categories } from "@/data/categories";
import { ShieldCheck, MapPin, HandCoins, CreditCard, Quote } from "lucide-react";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Seo
        title="Qloqal — Run your shop on WhatsApp. Sell more, with zero setup."
        description="Qloqal turns any small business into an online shop. Customers order in the app; you take orders right on WhatsApp. No vendor app, no tablet, no training."
      />
      <Hero />
      <CategoryStrip />

      {/* Vendor flow */}
      <section className="container-pad mx-auto max-w-7xl py-16">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">For shop owners</span>
          <h2 className="mt-2 font-display font-extrabold text-3xl md:text-5xl">Three taps. That's it.</h2>
          <p className="mt-4 text-lg text-muted-ink">From the moment an order arrives to the moment it leaves your counter — everything happens inside WhatsApp.</p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {[
            {
              n: "01", h: "Order arrives in your WhatsApp",
              mock: <WhatsAppMockup title="Sunrise Bakery" bubbles={[{from:"qloqal", content:<OrderCard/>, time:"9:42"}]} />,
            },
            {
              n: "02", h: "Tap Accept",
              mock: <WhatsAppMockup title="Sunrise Bakery" bubbles={[{from:"qloqal", content:"New order from Aisha M. — 3 items, $18.40", time:"9:42"}]} showButtons="accept-reject" />,
            },
            {
              n: "03", h: "Tap Mark Ready when it's prepared",
              mock: <WhatsAppMockup title="Sunrise Bakery" bubbles={[
                {from:"shop", content:"Accepted ✓", time:"9:43", read:true},
                {from:"qloqal", content:"Great. We'll let Aisha know. Tap below when it's ready for pickup or handover.", time:"9:43"},
              ]} showButtons="mark-ready" />,
            },
          ].map(s => (
            <div key={s.n} className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="font-display font-extrabold text-3xl text-brand-green-dark">{s.n}</span>
                <h3 className="font-display font-bold text-lg">{s.h}</h3>
              </div>
              {s.mock}
            </div>
          ))}
        </div>
      </section>

      <WhyWhatsApp />

      {/* Categories detailed */}
      <section className="bg-surface">
        <div className="container-pad mx-auto max-w-7xl py-20">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">Built for everyone</span>
            <h2 className="mt-2 font-display font-extrabold text-3xl md:text-5xl">Built for every kind of small business</h2>
            <p className="mt-4 text-lg text-muted-ink">Whatever you sell, however you run — Qloqal fits the way your shop already works.</p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map(c => (
              <div key={c.slug} className="rounded-2xl bg-white border border-border p-5 hover:border-brand-green hover:-translate-y-0.5 transition shadow-card">
                <div className="text-3xl">{c.emoji}</div>
                <h3 className="mt-3 font-display font-bold text-ink">{c.name}</h3>
                <p className="mt-1 text-sm text-muted-ink">{c.blurb}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer flow (subordinate) */}
      <section className="container-pad mx-auto max-w-7xl py-20">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">For customers</span>
          <h3 className="mt-2 font-display font-extrabold text-2xl md:text-3xl">And on the other side, it's beautifully simple too</h3>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            { n: 1, t: "Open the app", d: "Browse shops within walking and quick-delivery distance." },
            { n: 2, t: "Pick a nearby shop", d: "Real shops on your street. Real prices. Real availability." },
            { n: 3, t: "Pay & track", d: "Pay your way. Watch your order move from accepted to ready to delivered." },
          ].map(s => (
            <div key={s.n} className="rounded-2xl border border-border p-6 bg-white">
              <div className="h-8 w-8 rounded-full bg-brand-blue text-white inline-flex items-center justify-center font-bold text-sm">{s.n}</div>
              <div className="mt-3 font-display font-bold">{s.t}</div>
              <p className="text-sm text-muted-ink mt-1">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Qloqal — features */}
      <section className="container-pad mx-auto max-w-7xl py-16">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: HandCoins, color: "green", t: "Zero-app vendor onboarding", d: "Runs on the WhatsApp the owner already uses." },
            { icon: MapPin, color: "blue", t: "Hyperlocal first", d: "Only shops within walking or quick-delivery distance." },
            { icon: ShieldCheck, color: "green", t: "Fair to small businesses", d: "No setup fees, no monthly minimums, no tablet required." },
            { icon: CreditCard, color: "blue", t: "Pay your way", d: "Cards, wallets, instant bank transfer — your choice." },
          ].map(f => (
            <div key={f.t} className="rounded-2xl bg-white border border-border p-6 shadow-card">
              <div className={["h-11 w-11 rounded-xl inline-flex items-center justify-center", f.color === "green" ? "bg-brand-green text-ink" : "bg-brand-blue text-white"].join(" ")}>
                <f.icon className="h-5 w-5" />
              </div>
              <div className="mt-4 font-display font-bold text-ink">{f.t}</div>
              <p className="mt-1 text-sm text-muted-ink">{f.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center text-sm text-muted-ink">
          Powered by WhatsApp Business · Secure payments built in · Works on any smartphone
        </div>
      </section>

      {/* Vendor testimonials */}
      <section className="container-pad mx-auto max-w-7xl py-16">
        <h2 className="font-display font-extrabold text-3xl md:text-4xl max-w-2xl">From the people running the shops</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {[
            { q: "I get the order, I tap accept, I bake. That's the whole process.", n: "Marco", r: "Owner, neighborhood bakery" },
            { q: "Nobody at our shop wanted to learn another app. With WhatsApp, nobody had to.", n: "Priya", r: "Owner, family pharmacy" },
            { q: "Setup took less than ten minutes. I added my top items and went back to fixing phones.", n: "Daniel", r: "Owner, mobile-repair shop" },
          ].map(t => (
            <div key={t.n} className="rounded-2xl bg-brand-blue text-white p-6">
              <Quote className="h-6 w-6 text-brand-green" />
              <p className="mt-3 font-display text-lg leading-snug">"{t.q}"</p>
              <div className="mt-4 text-sm text-white/70"><strong className="text-white">{t.n}</strong> — {t.r}</div>
            </div>
          ))}
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {[
            { q: "Finally an app that surfaces shops I actually walk past.", n: "Lena", r: "Customer" },
            { q: "I love being able to support the small bakery on my street with one tap.", n: "Omar", r: "Customer" },
          ].map(t => (
            <div key={t.n} className="rounded-2xl border border-border p-5 bg-white">
              <p className="text-ink">"{t.q}"</p>
              <div className="mt-2 text-sm text-muted-ink"><strong className="text-ink">{t.n}</strong> — {t.r}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison table — only place competitor names appear */}
      <section className="container-pad mx-auto max-w-7xl py-12">
        <h2 className="font-display font-extrabold text-2xl md:text-3xl">How Qloqal is different</h2>
        <div className="mt-6 overflow-x-auto rounded-2xl border border-border bg-white">
          <table className="w-full text-sm min-w-[640px]">
            <thead className="bg-surface text-ink">
              <tr>
                <th className="text-left p-4 font-semibold">Platform</th>
                <th className="text-left p-4 font-semibold">Vendor side</th>
                <th className="text-left p-4 font-semibold">Setup effort</th>
                <th className="text-left p-4 font-semibold">Qloqal's twist</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr><td className="p-4 font-semibold">Big-box e-commerce</td><td className="p-4">Required app/portal</td><td className="p-4">High</td><td className="p-4">We use WhatsApp — zero install</td></tr>
              <tr><td className="p-4 font-semibold">Quick-commerce</td><td className="p-4">Owns dark stores</td><td className="p-4">Capital-heavy</td><td className="p-4">We use existing neighborhood shops</td></tr>
              <tr><td className="p-4 font-semibold">Food delivery</td><td className="p-4">Tablet + training</td><td className="p-4">Medium-high</td><td className="p-4">We use the phone the owner already owns</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <CTABand
        title="Your shop is one message away from going online."
        subtitle="No setup fee. No tablet. No new app to learn. If you can chat on WhatsApp, you can run a Qloqal shop."
      />
    </>
  );
}
