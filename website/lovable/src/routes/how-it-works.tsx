import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Seo } from "@/components/Seo";
import { WhatsAppMockup, OrderCard } from "@/components/WhatsAppMockup";
import { CTABand } from "@/components/CTABand";
import { Search, MapPin, CreditCard, Check, Star } from "lucide-react";

export const Route = createFileRoute("/how-it-works")({
  component: HowPage,
});

function AppMockup({ eyebrow, title, children }: { eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-3xl shadow-soft overflow-hidden border border-border bg-white max-w-sm w-full mx-auto">
      <div className="bg-gradient-to-br from-brand-blue to-brand-blue-dark text-white p-4">
        <div className="text-[11px] uppercase tracking-wide opacity-70">{eyebrow}</div>
        <div className="font-display font-bold text-lg mt-1">{title}</div>
      </div>
      <div className="p-3 bg-surface min-h-[240px]">{children}</div>
    </div>
  );
}

function HowPage() {
  return (
    <>
      <Seo
        title="How Qloqal works — Chat-based commerce for small shops"
        description="See how WhatsApp commerce works on Qloqal: orders flow from the customer app to the shop owner's WhatsApp, end-to-end."
      />
      <section className="container-pad mx-auto max-w-7xl py-14">
        <h1 className="font-display font-extrabold text-[clamp(2.25rem,5vw,4rem)] leading-[1.05] max-w-3xl">How Qloqal works, end to end.</h1>
        <p className="mt-4 text-lg text-muted-ink max-w-2xl">Two sides. One simple flow. The customer uses an app. The shop uses WhatsApp. Qloqal sits in the middle and handles the rest.</p>
      </section>

      <section className="container-pad mx-auto max-w-7xl pb-16">
        <h2 className="font-display font-extrabold text-3xl">The vendor journey</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            { t: "1. Notification", m: <WhatsAppMockup title="Your Shop" bubbles={[{from:"qloqal",content:"🔔 New order received — tap to view",time:"9:41"}]}/> },
            { t: "2. Order details", m: <WhatsAppMockup title="Your Shop" bubbles={[{from:"qloqal",content:<OrderCard/>,time:"9:42"}]} showButtons="accept-reject"/> },
            { t: "3. Mark Ready", m: <WhatsAppMockup title="Your Shop" bubbles={[{from:"shop",content:"Accepted ✓",time:"9:43",read:true},{from:"qloqal",content:"Tap below when ready.",time:"9:43"}]} showButtons="mark-ready"/> },
            { t: "4. Settled", m: <WhatsAppMockup title="Your Shop" bubbles={[{from:"shop",content:"Marked ready ✓",time:"9:55",read:true},{from:"qloqal",content:"Delivered. $17.48 settling to your account.",time:"10:08"}]}/> },
          ].map(s => (
            <div key={s.t}>
              <div className="font-display font-bold mb-3">{s.t}</div>
              {s.m}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface">
        <div className="container-pad mx-auto max-w-7xl py-16">
          <h2 className="font-display font-extrabold text-3xl">The customer journey</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                t: "1. Search nearby",
                m: (
                  <AppMockup eyebrow="Qloqal app" title="Find shops near you">
                    <div className="bg-white border border-border rounded-xl p-2.5 flex items-center gap-2">
                      <Search className="h-4 w-4 text-muted-ink" />
                      <span className="text-sm text-muted-ink">Search bakery, grocery…</span>
                    </div>
                    <div className="mt-3 text-[11px] font-semibold uppercase tracking-wider text-muted-ink flex items-center gap-1">
                      <MapPin className="h-3 w-3" /> Within 1.5 km of you
                    </div>
                    <div className="mt-2 space-y-2">
                      {["Sunrise Bakery", "Green Leaf Grocery", "Ada's Pharmacy"].map((s, i) => (
                        <div key={s} className="bg-white border border-border rounded-xl p-2.5 text-sm flex items-center justify-between">
                          <span className="font-semibold text-ink">{s}</span>
                          <span className="text-[10px] bg-brand-green text-ink rounded-full px-2 py-0.5 font-semibold">{(0.3 + i * 0.4).toFixed(1)} km</span>
                        </div>
                      ))}
                    </div>
                  </AppMockup>
                ),
              },
              {
                t: "2. Pick a shop",
                m: (
                  <AppMockup eyebrow="0.3 km away · Open now" title="Sunrise Bakery">
                    <div className="rounded-xl bg-brand-green-soft p-3">
                      <div className="text-[11px] uppercase tracking-wider font-semibold text-brand-green-dark">Fresh today</div>
                      <ul className="mt-2 text-sm space-y-1 text-ink">
                        <li>· Sourdough loaves</li>
                        <li>· Almond croissants</li>
                        <li>· Whole-wheat bread</li>
                        <li>· Cinnamon rolls</li>
                      </ul>
                    </div>
                    <button className="w-full mt-3 bg-brand-blue text-white font-semibold rounded-xl py-2.5 text-sm">View menu</button>
                  </AppMockup>
                ),
              },
              {
                t: "3. Add to cart",
                m: (
                  <AppMockup eyebrow="Sunrise Bakery" title="Your cart">
                    {[
                      { n: "Sourdough loaf", p: "$5.40", qty: 2 },
                      { n: "Almond croissant", p: "$3.80", qty: 1 },
                      { n: "Oat milk (1L)", p: "$4.20", qty: 1 },
                    ].map(i => (
                      <div key={i.n} className="bg-white border border-border rounded-xl p-2.5 text-sm flex items-center justify-between mb-2">
                        <div>
                          <div className="font-semibold text-ink">{i.n}</div>
                          <div className="text-[11px] text-muted-ink">{i.p}</div>
                        </div>
                        <div className="text-[11px] bg-brand-blue-soft text-brand-blue rounded-full px-2 py-0.5 font-semibold">× {i.qty}</div>
                      </div>
                    ))}
                    <div className="flex items-center justify-between pt-2 border-t border-border text-sm">
                      <span className="text-muted-ink">Total</span>
                      <span className="font-bold text-ink">$18.40</span>
                    </div>
                  </AppMockup>
                ),
              },
              {
                t: "4. Pay in-app",
                m: (
                  <AppMockup eyebrow="Checkout · Order #4821" title="Pay $18.40">
                    <div className="space-y-2">
                      {[
                        { l: "Card ending 4827", sub: "Visa", active: true },
                        { l: "Apple Pay", sub: "Touch ID", active: false },
                        { l: "Bank transfer", sub: "Instant", active: false },
                      ].map(p => (
                        <div key={p.l} className={["rounded-xl p-2.5 text-sm flex items-center justify-between border", p.active ? "border-brand-blue bg-brand-blue-soft" : "border-border bg-white"].join(" ")}>
                          <div>
                            <div className="font-semibold text-ink">{p.l}</div>
                            <div className="text-[11px] text-muted-ink">{p.sub}</div>
                          </div>
                          <span className={["h-4 w-4 rounded-full border-2 inline-flex items-center justify-center", p.active ? "border-brand-blue bg-brand-blue" : "border-border"].join(" ")}>
                            {p.active && <span className="h-1.5 w-1.5 rounded-full bg-white" />}
                          </span>
                        </div>
                      ))}
                    </div>
                    <button className="w-full mt-3 bg-brand-green text-ink font-semibold rounded-xl py-2.5 text-sm">Pay $18.40</button>
                  </AppMockup>
                ),
              },
              {
                t: "5. Track status",
                m: (
                  <AppMockup eyebrow="Order #4821 · Sunrise Bakery" title="On its way">
                    <ul className="space-y-3">
                      {[
                        { l: "Placed", time: "9:41", state: "done" as const },
                        { l: "Accepted", time: "9:43", state: "done" as const },
                        { l: "Ready", time: "9:58", state: "done" as const },
                        { l: "On the way", time: "now", state: "active" as const },
                      ].map(s => (
                        <li key={s.l} className="flex items-center gap-3 text-sm">
                          <span className={[
                            "h-6 w-6 rounded-full inline-flex items-center justify-center shrink-0",
                            s.state === "done" ? "bg-brand-green text-ink" : "bg-brand-blue text-white",
                          ].join(" ")}>
                            {s.state === "done" ? <Check className="h-3.5 w-3.5" /> : <span className="h-2 w-2 rounded-full bg-white" />}
                          </span>
                          <div className="flex-1">
                            <div className={["font-semibold", s.state === "active" ? "text-brand-blue" : "text-ink"].join(" ")}>{s.l}</div>
                          </div>
                          <span className="text-[11px] text-muted-ink">{s.time}</span>
                        </li>
                      ))}
                    </ul>
                  </AppMockup>
                ),
              },
              {
                t: "6. Receive order",
                m: (
                  <AppMockup eyebrow="Order #4821 · Delivered" title="Enjoy your order">
                    <div className="rounded-xl bg-brand-green-soft p-4 text-center">
                      <div className="mx-auto h-10 w-10 rounded-full bg-brand-green text-ink inline-flex items-center justify-center">
                        <Check className="h-5 w-5" />
                      </div>
                      <div className="mt-3 font-display font-bold text-ink">Delivered · 10:08</div>
                      <p className="mt-1 text-sm text-muted-ink">Thanks for shopping with Sunrise Bakery.</p>
                    </div>
                    <div className="mt-3 bg-white border border-border rounded-xl p-3">
                      <div className="text-xs font-semibold text-muted-ink">Rate this shop</div>
                      <div className="mt-1 flex items-center gap-1">
                        {[1,2,3,4,5].map(n => (
                          <Star key={n} className={["h-5 w-5", n <= 5 ? "fill-brand-green text-brand-green" : "text-border"].join(" ")} />
                        ))}
                      </div>
                    </div>
                    <button className="w-full mt-3 bg-brand-blue text-white font-semibold rounded-xl py-2 text-sm flex items-center justify-center gap-2">
                      <CreditCard className="h-4 w-4" /> View receipt
                    </button>
                  </AppMockup>
                ),
              },
            ].map(s => (
              <div key={s.t}>
                <div className="font-display font-bold mb-3">{s.t}</div>
                {s.m}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-pad mx-auto max-w-7xl py-16">
        <div className="rounded-3xl bg-white border border-border p-8 md:p-12 shadow-card">
          <h2 className="font-display font-extrabold text-2xl md:text-3xl">Behind the scenes</h2>
          <p className="mt-3 text-muted-ink max-w-3xl">Qloqal sits between the customer app, the shop's WhatsApp, and a secure payment provider. We translate the order into a chat message, listen for the shop's responses, and keep the customer updated automatically.</p>
          <div className="mt-8 grid gap-4 md:grid-cols-3 text-sm">
            <div className="rounded-2xl bg-brand-green-soft p-5"><strong>Customer app →</strong> sends order + payment</div>
            <div className="rounded-2xl bg-brand-blue-soft p-5"><strong>Qloqal →</strong> formats it as a WhatsApp order card</div>
            <div className="rounded-2xl bg-surface p-5"><strong>Shop WhatsApp →</strong> Accept · Mark Ready · Done</div>
          </div>
          <p className="mt-6 text-sm text-muted-ink">Why WhatsApp? Because it's the one app every small shop owner already opens — no extra steps, no extra device.</p>
        </div>
      </section>

      <CTABand title="See it from the inside." subtitle="The fastest way to understand Qloqal is to list your shop and watch your first order land in WhatsApp." />
    </>
  );
}
