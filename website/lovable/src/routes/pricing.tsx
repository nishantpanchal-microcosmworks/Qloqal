import { createFileRoute } from "@tanstack/react-router";
import { Seo } from "@/components/Seo";
import { Check } from "lucide-react";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTABand } from "@/components/CTABand";

export const Route = createFileRoute("/pricing")({
  component: PricingPage,
});

function PricingPage() {
  return (
    <>
      <Seo
        title="Pricing — Qloqal"
        description="Free to use for customers. Free to list for vendors. Pay only on delivered orders. Transparent pricing for small businesses."
      />
      <section className="container-pad mx-auto max-w-7xl py-14">
        <h1 className="font-display font-extrabold text-[clamp(2.25rem,5vw,4rem)] leading-[1.05]">Simple pricing. No surprises.</h1>
        <p className="mt-4 text-lg text-muted-ink max-w-2xl">No setup fees. No monthly minimums. No tablet rental. Just a transparent per-order commission when you make a sale.</p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl bg-brand-blue-soft border border-brand-blue/20 p-8">
            <div className="text-xs font-bold uppercase tracking-wider text-brand-blue">For customers</div>
            <div className="mt-3 font-display font-extrabold text-4xl">Free to use. Always.</div>
            <p className="mt-3 text-muted-ink">Discover, order, and track from any small shop near you.</p>
            <ul className="mt-6 space-y-2 text-sm">
              {["No subscription","No order minimums","Standard delivery fees set per shop"].map(t => (
                <li key={t} className="flex items-center gap-2"><Check className="h-4 w-4 text-brand-blue" /> {t}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl bg-brand-green text-ink p-8 shadow-soft relative overflow-hidden">
            <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-white/30 blur-2xl" />
            <div className="text-xs font-bold uppercase tracking-wider relative">For vendors</div>
            <div className="mt-3 font-display font-extrabold text-4xl relative">Free to list. Pay only on orders.</div>
            <p className="mt-3 relative">Starting at <strong>5%</strong> commission per delivered order. No monthly fees, no setup fees, no hidden charges.</p>
            <ul className="mt-6 space-y-2 text-sm relative">
              {["No setup fee","No monthly minimum","No tablet to rent","Settlements straight to your bank"].map(t => (
                <li key={t} className="flex items-center gap-2"><Check className="h-4 w-4" /> {t}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="container-pad mx-auto max-w-7xl py-12">
        <h2 className="font-display font-extrabold text-3xl mb-6">Pricing FAQ</h2>
        <FAQAccordion items={[
          { q: "When do I get paid?", a: "Settlements run on a regular schedule directly into the bank account on file. The exact cadence depends on your region's payment partner." },
          { q: "What about refunds?", a: "If an order is cancelled or refunded, the corresponding commission is reversed automatically." },
          { q: "Can I pause my shop anytime?", a: "Yes — set your shop to closed in one tap from WhatsApp. New orders simply won't come through until you reopen." },
          { q: "What does Qloqal take?", a: "A small per-order commission starting at 5%. Exact percentage depends on your category and delivery model. No fixed fees." },
        ]} />
      </section>

      <CTABand title="Start free. Pay only when you sell." />
    </>
  );
}
