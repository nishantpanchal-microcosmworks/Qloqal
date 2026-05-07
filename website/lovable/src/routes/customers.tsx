import { createFileRoute } from "@tanstack/react-router";
import { Seo } from "@/components/Seo";
import { CTABand } from "@/components/CTABand";
import { Search, ShoppingBag, MapPin, CreditCard } from "lucide-react";
import { FAQAccordion } from "@/components/FAQAccordion";

export const Route = createFileRoute("/customers")({
  component: CustomersPage,
});

function CustomersPage() {
  return (
    <>
      <Seo
        title="Order from local shops — Qloqal customer app"
        description="Discover real shops on your street. Order quickly. Support local. Qloqal is the hyperlocal marketplace for nearby businesses."
      />
      <section className="container-pad mx-auto max-w-7xl py-14 md:py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-blue-soft text-brand-blue text-xs font-semibold px-3 py-1.5">Customer app</span>
          <h1 className="mt-4 font-display font-extrabold text-[clamp(2.25rem,5vw,4rem)] leading-[1.05]">
            Order from your favourite <span className="text-gradient-brand">local shops</span> in seconds.
          </h1>
          <p className="mt-5 text-lg text-muted-ink max-w-xl">Discover real shops near you. Real prices, real availability, real people behind the counter.</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a data-cta="customers-app-store" className="inline-flex items-center gap-3 rounded-xl bg-ink text-white px-5 py-3 cursor-pointer">
              <span className="text-2xl"></span>
              <div className="text-left leading-tight">
                <div className="text-[10px] uppercase opacity-70">Download on the</div>
                <div className="font-semibold">App Store</div>
              </div>
            </a>
            <a data-cta="customers-play-store" className="inline-flex items-center gap-3 rounded-xl bg-ink text-white px-5 py-3 cursor-pointer">
              <span className="text-2xl">▶</span>
              <div className="text-left leading-tight">
                <div className="text-[10px] uppercase opacity-70">Get it on</div>
                <div className="font-semibold">Google Play</div>
              </div>
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { t: "Nearby", body: ["Sunrise Bakery", "Green Leaf Grocery", "Ada's Pharmacy"] },
            { t: "Storefront", body: ["Sourdough — $4.20", "Croissant — $3.10", "Oat milk — $4.00"] },
            { t: "Cart", body: ["3 items", "Subtotal $18.40", "Delivery $1.50"] },
            { t: "Tracking", body: ["Accepted ✓", "Preparing…", "On the way"] },
          ].map((c, i) => (
            <div key={c.t} className={["rounded-3xl p-3 shadow-card border border-border bg-white", i % 2 ? "lg:translate-y-6" : ""].join(" ")}>
              <div className="rounded-2xl bg-gradient-to-br from-brand-green to-brand-green-dark p-4 text-ink h-full min-h-[180px]">
                <div className="text-[11px] uppercase tracking-wide opacity-70">Qloqal</div>
                <div className="font-display font-bold text-lg">{c.t}</div>
                <ul className="mt-3 space-y-1.5 text-sm">
                  {c.body.map(b => <li key={b} className="bg-white/40 rounded-lg px-2 py-1.5">{b}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-pad mx-auto max-w-7xl py-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {[
          { i: MapPin, t: "Find what's actually near you", d: "Only shops within walking and quick-delivery distance." },
          { i: ShoppingBag, t: "Real shops, real prices", d: "The same prices you'd see at the counter — no markup tricks." },
          { i: Search, t: "Track every order in real time", d: "From accepted to ready to delivered." },
          { i: CreditCard, t: "Pay any way you like", d: "Cards, wallets, or bank transfer." },
        ].map(f => (
          <div key={f.t} className="rounded-2xl bg-white border border-border p-6 shadow-card">
            <f.i className="h-6 w-6 text-brand-blue" />
            <div className="mt-3 font-display font-bold">{f.t}</div>
            <p className="text-sm text-muted-ink mt-1">{f.d}</p>
          </div>
        ))}
      </section>

      <section className="container-pad mx-auto max-w-7xl py-12">
        <h2 className="font-display font-extrabold text-3xl">Quick questions</h2>
        <div className="mt-6">
          <FAQAccordion items={[
            { q: "Is the app free?", a: "Yes — Qloqal is free to use for customers, always." },
            { q: "How do I find shops?", a: "Open the app and you'll see shops within delivery distance of your location." },
            { q: "Can I pay with cash?", a: "Some shops accept cash on delivery. The payment options show during checkout." },
            { q: "What if my order is late?", a: "You can see live order status and contact support directly from the order screen." },
            { q: "Do you charge a service fee?", a: "Delivery fees vary per shop. Any service fee is shown clearly before you pay." },
          ]} />
        </div>
      </section>

      <CTABand title="Discover the shops on your street." subtitle="Get the Qloqal app and find real local businesses ready to deliver." primaryLabel="Get the app" primaryTo="/customers" secondaryLabel="Or list your shop" secondaryTo="/vendors" />
    </>
  );
}
