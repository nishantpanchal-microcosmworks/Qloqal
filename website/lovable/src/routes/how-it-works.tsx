import { createFileRoute } from "@tanstack/react-router";
import { Seo } from "@/components/Seo";
import { WhatsAppMockup, OrderCard } from "@/components/WhatsAppMockup";
import { CTABand } from "@/components/CTABand";

export const Route = createFileRoute("/how-it-works")({
  component: HowPage,
});

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
          <div className="mt-8 grid gap-4 md:grid-cols-3 lg:grid-cols-6">
            {["Search nearby","Pick a shop","Add to cart","Pay in-app","Track status","Receive order"].map((s, i) => (
              <div key={s} className="rounded-2xl bg-white border border-border p-5">
                <div className="h-8 w-8 rounded-full bg-brand-blue text-white inline-flex items-center justify-center font-bold text-sm">{i+1}</div>
                <div className="mt-3 font-display font-bold text-sm">{s}</div>
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
