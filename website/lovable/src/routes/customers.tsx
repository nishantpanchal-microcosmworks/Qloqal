import { createFileRoute } from "@tanstack/react-router";
import { Seo } from "@/components/Seo";
import { CTABand } from "@/components/CTABand";
import { Search, ShoppingBag, MapPin, CreditCard, Check } from "lucide-react";
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
          {/* Nearby */}
          <div className="rounded-3xl shadow-soft overflow-hidden border border-border bg-white">
            <div className="bg-gradient-to-br from-brand-blue to-brand-blue-dark text-white p-3">
              <div className="text-[10px] uppercase tracking-wide opacity-70">Qloqal</div>
              <div className="font-display font-bold text-sm">Nearby</div>
            </div>
            <div className="p-2.5 bg-surface min-h-[160px] space-y-1.5">
              {[
                { n: "Sunrise Bakery", km: "0.3" },
                { n: "Green Leaf Grocery", km: "0.7" },
                { n: "Ada's Pharmacy", km: "1.1" },
              ].map(s => (
                <div key={s.n} className="bg-white border border-border rounded-lg px-2 py-1.5 text-xs flex items-center justify-between">
                  <span className="font-semibold text-ink truncate">{s.n}</span>
                  <span className="text-[10px] bg-brand-green text-ink rounded-full px-1.5 py-0.5 font-semibold shrink-0 ml-2">{s.km} km</span>
                </div>
              ))}
            </div>
          </div>

          {/* Storefront */}
          <div className="rounded-3xl shadow-soft overflow-hidden border border-border bg-white lg:translate-y-6">
            <div className="bg-gradient-to-br from-brand-blue to-brand-blue-dark text-white p-3">
              <div className="text-[10px] uppercase tracking-wide opacity-70">Sunrise Bakery</div>
              <div className="font-display font-bold text-sm">Fresh today</div>
            </div>
            <div className="p-2.5 bg-surface min-h-[160px] space-y-1.5">
              {[
                { n: "Sourdough loaf", p: "$5.40" },
                { n: "Almond croissant", p: "$3.80" },
                { n: "Oat milk (1L)", p: "$4.20" },
              ].map(item => (
                <div key={item.n} className="bg-white border border-border rounded-lg px-2 py-1.5 text-xs flex items-center justify-between">
                  <span className="font-semibold text-ink truncate">{item.n}</span>
                  <span className="text-[11px] font-semibold text-ink shrink-0 ml-2">{item.p}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Cart */}
          <div className="rounded-3xl shadow-soft overflow-hidden border border-border bg-white">
            <div className="bg-gradient-to-br from-brand-blue to-brand-blue-dark text-white p-3">
              <div className="text-[10px] uppercase tracking-wide opacity-70">Checkout</div>
              <div className="font-display font-bold text-sm">Your cart</div>
            </div>
            <div className="p-2.5 bg-surface min-h-[160px]">
              <div className="space-y-1.5">
                {[
                  { l: "3 items", v: "" },
                  { l: "Subtotal", v: "$18.40" },
                  { l: "Delivery", v: "$1.50" },
                ].map(r => (
                  <div key={r.l} className="bg-white border border-border rounded-lg px-2 py-1.5 text-xs flex items-center justify-between">
                    <span className="text-muted-ink">{r.l}</span>
                    {r.v && <span className="font-semibold text-ink">{r.v}</span>}
                  </div>
                ))}
              </div>
              <button className="w-full mt-2 bg-brand-green text-ink font-semibold rounded-lg py-1.5 text-xs">Place order · $19.90</button>
            </div>
          </div>

          {/* Tracking */}
          <div className="rounded-3xl shadow-soft overflow-hidden border border-border bg-white lg:translate-y-6">
            <div className="bg-gradient-to-br from-brand-blue to-brand-blue-dark text-white p-3">
              <div className="text-[10px] uppercase tracking-wide opacity-70">Order #4821</div>
              <div className="font-display font-bold text-sm">On its way</div>
            </div>
            <div className="p-2.5 bg-surface min-h-[160px]">
              <ul className="space-y-2">
                {[
                  { l: "Accepted", state: "done" as const },
                  { l: "Preparing", state: "done" as const },
                  { l: "On the way", state: "active" as const },
                ].map(s => (
                  <li key={s.l} className="flex items-center gap-2 text-xs">
                    <span className={[
                      "h-5 w-5 rounded-full inline-flex items-center justify-center shrink-0",
                      s.state === "done" ? "bg-brand-green text-ink" : "bg-brand-blue text-white",
                    ].join(" ")}>
                      {s.state === "done" ? <Check className="h-3 w-3" /> : <span className="h-1.5 w-1.5 rounded-full bg-white" />}
                    </span>
                    <span className={["font-semibold", s.state === "active" ? "text-brand-blue" : "text-ink"].join(" ")}>{s.l}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className="container-pad mx-auto max-w-7xl py-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
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
        </div>
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

      <CTABand title="Discover the shops on your street." subtitle="Get the Qloqal app and find real local businesses ready to deliver." primaryLabel="Get the app" primaryTo="/customers" secondaryLabel="List your shop" secondaryTo="/vendors" />
    </>
  );
}
