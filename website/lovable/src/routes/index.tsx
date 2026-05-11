import { createFileRoute, Link } from "@tanstack/react-router";
import { Seo } from "@/components/Seo";
import { Hero } from "@/components/Hero";
import { WhyWhatsApp } from "@/components/WhyWhatsApp";
import { WhatsAppMockup, OrderCard } from "@/components/WhatsAppMockup";
import { CTABand } from "@/components/CTABand";
import { categories } from "@/data/categories";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { ShieldCheck, MapPin, HandCoins, Quote, Check, ShoppingBag, Warehouse, Bike } from "lucide-react";

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
          <Carousel opts={{ align: "start", loop: true }} className="mt-10">
            <CarouselContent className="-ml-4">
              {categories.map(c => (
                <CarouselItem key={c.slug} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                  <div className="h-full rounded-2xl bg-white border border-border overflow-hidden hover:border-brand-green hover:-translate-y-0.5 transition shadow-card">
                    <div className="aspect-[4/3] overflow-hidden bg-surface">
                      <img
                        src={c.image}
                        alt={c.name}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="font-display font-bold text-ink">{c.name}</h3>
                      <p className="mt-2 text-sm text-muted-ink">{c.blurb}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex -left-4" />
            <CarouselNext className="hidden sm:flex -right-4" />
          </Carousel>
        </div>
      </section>

      {/* Customer flow */}
      <section className="container-pad mx-auto max-w-7xl py-16">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">For customers</span>
          <h2 className="mt-2 font-display font-extrabold text-3xl md:text-5xl">And on the other side, it's beautifully simple too</h2>
          <p className="mt-4 text-lg text-muted-ink">Browse, order, pay and track — every step right inside the Qloqal app.</p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {[
            {
              n: "01", h: "Open the app",
              mock: (
                <div className="rounded-3xl shadow-soft overflow-hidden border border-border bg-white max-w-sm w-full mx-auto">
                  <div className="bg-gradient-to-br from-brand-blue to-brand-blue-dark text-white p-4">
                    <div className="text-[11px] uppercase tracking-wide opacity-70">Qloqal app</div>
                    <div className="font-display font-bold text-lg mt-1">Nearby shops</div>
                    <div className="mt-1 text-[11px] opacity-80 flex items-center gap-1">
                      <MapPin className="h-3 w-3" /> Within 1.5 km of you
                    </div>
                  </div>
                  <div className="p-3 space-y-2 bg-surface min-h-[260px]">
                    {["Sunrise Bakery", "Green Leaf Grocery", "Ada's Pharmacy", "Park St. Florist"].map((s,i) => (
                      <div key={s} className="bg-white border border-border rounded-xl p-2.5 text-sm flex items-center justify-between">
                        <span className="font-semibold text-ink">{s}</span>
                        <span className="text-[10px] bg-brand-green text-ink rounded-full px-2 py-0.5 font-semibold">{(0.3+i*0.4).toFixed(1)} km</span>
                      </div>
                    ))}
                  </div>
                </div>
              ),
            },
            {
              n: "02", h: "Pick a nearby shop",
              mock: (
                <div className="rounded-3xl shadow-soft overflow-hidden border border-border bg-white max-w-sm w-full mx-auto">
                  <div className="bg-gradient-to-br from-brand-blue to-brand-blue-dark text-white p-4">
                    <div className="text-[11px] uppercase tracking-wide opacity-70">Sunrise Bakery · 0.3 km</div>
                    <div className="font-display font-bold text-lg mt-1">Fresh today</div>
                  </div>
                  <div className="p-3 space-y-2 bg-surface min-h-[260px]">
                    {[
                      { n: "Sourdough loaf", p: "$5.40", qty: 2 },
                      { n: "Almond croissant", p: "$3.80", qty: 1 },
                      { n: "Oat milk (1L)", p: "$4.20", qty: 1 },
                    ].map(item => (
                      <div key={item.n} className="bg-white border border-border rounded-xl p-2.5 text-sm flex items-center justify-between">
                        <div>
                          <div className="font-semibold text-ink">{item.n}</div>
                          <div className="text-[11px] text-muted-ink">{item.p}</div>
                        </div>
                        <div className="text-[11px] bg-brand-blue-soft text-brand-blue rounded-full px-2 py-0.5 font-semibold">× {item.qty}</div>
                      </div>
                    ))}
                    <button className="w-full bg-brand-green text-ink font-semibold rounded-xl py-2.5 mt-2 shadow-card">Place order · $18.40</button>
                  </div>
                </div>
              ),
            },
            {
              n: "03", h: "Pay & track",
              mock: (
                <div className="rounded-3xl shadow-soft overflow-hidden border border-border bg-white max-w-sm w-full mx-auto">
                  <div className="bg-gradient-to-br from-brand-blue to-brand-blue-dark text-white p-4">
                    <div className="text-[11px] uppercase tracking-wide opacity-70">Order #4821 · Sunrise Bakery</div>
                    <div className="font-display font-bold text-lg mt-1">On its way</div>
                  </div>
                  <div className="p-4 bg-surface min-h-[260px]">
                    <ul className="space-y-3">
                      {[
                        { label: "Order placed", time: "9:41", state: "done" as const },
                        { label: "Accepted by shop", time: "9:43", state: "done" as const },
                        { label: "Ready for handover", time: "9:58", state: "done" as const },
                        { label: "On the way", time: "now", state: "active" as const },
                      ].map(s => (
                        <li key={s.label} className="flex items-center gap-3 text-sm">
                          <span className={[
                            "h-6 w-6 rounded-full inline-flex items-center justify-center shrink-0",
                            s.state === "done" ? "bg-brand-green text-ink"
                              : s.state === "active" ? "bg-brand-blue text-white"
                              : "bg-border text-muted-ink",
                          ].join(" ")}>
                            {s.state === "done" ? <Check className="h-3.5 w-3.5" /> : <span className="h-2 w-2 rounded-full bg-white" />}
                          </span>
                          <div className="flex-1">
                            <div className={["font-semibold", s.state === "active" ? "text-brand-blue" : "text-ink"].join(" ")}>{s.label}</div>
                          </div>
                          <span className="text-[11px] text-muted-ink">{s.time}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 pt-3 border-t border-border flex items-center justify-between text-sm">
                      <span className="text-muted-ink">Paid via card</span>
                      <span className="font-semibold text-ink">$18.40</span>
                    </div>
                  </div>
                </div>
              ),
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

      {/* How Qloqal is different — features merged with competitor comparison */}
      <section className="container-pad mx-auto max-w-7xl py-16">
        <h2 className="font-display font-extrabold text-3xl md:text-4xl">How Qloqal is different</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            {
              icon: HandCoins, color: "green",
              title: "Zero-app vendor onboarding",
              desc: "Runs on the WhatsApp the owner already uses — no install, no training.",
              vsIcon: ShoppingBag, vsName: "Big-box e-commerce",
              vsDesc: "Required app/portal · High setup effort",
            },
            {
              icon: MapPin, color: "blue",
              title: "Hyperlocal first",
              desc: "Only shops within walking or quick-delivery distance from you.",
              vsIcon: Warehouse, vsName: "Quick-commerce",
              vsDesc: "Owns dark stores · Capital-heavy",
            },
            {
              icon: ShieldCheck, color: "green",
              title: "Fair to small businesses",
              desc: "No setup fees, no monthly minimums, no tablet required.",
              vsIcon: Bike, vsName: "Food delivery",
              vsDesc: "Tablet + training · Medium-high effort",
            },
          ].map(c => (
            <div key={c.title} className="flex flex-col rounded-2xl bg-white border border-border p-6 shadow-card">
              <div className={["h-11 w-11 rounded-xl inline-flex items-center justify-center", c.color === "green" ? "bg-brand-green text-ink" : "bg-brand-blue text-white"].join(" ")}>
                <c.icon className="h-5 w-5" />
              </div>
              <div className="mt-4 font-display font-bold text-ink text-lg">{c.title}</div>
              <p className="mt-1 text-sm text-muted-ink">{c.desc}</p>
              <div className="mt-5 pt-5 border-t border-border">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-ink flex items-center gap-1.5">
                  <c.vsIcon className="h-3.5 w-3.5" />
                  Compared to {c.vsName}
                </div>
                <p className="mt-1 text-sm text-ink">{c.vsDesc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center text-sm text-muted-ink">
          Powered by WhatsApp Business · Secure payments built in · Works on any smartphone
        </div>
      </section>

      <CTABand
        title="Your shop is one message away from going online."
        subtitle="No setup fee. No tablet. No new app to learn. If you can chat on WhatsApp, you can run a Qloqal shop."
      />
    </>
  );
}
