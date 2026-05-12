import { createFileRoute } from "@tanstack/react-router";
import { Seo } from "@/components/Seo";
import { FAQAccordion } from "@/components/FAQAccordion";

export const Route = createFileRoute("/faq")({ component: FAQPage });

const sections = [
  {
    title: "For Shops",
    items: [
      { q: "Do I need to install an app?", a: "No. Orders arrive on WhatsApp, which you already use." },
      { q: "What kind of phone do I need?", a: "Any smartphone that runs WhatsApp. Low-end Android phones work fine." },
      { q: "Can multiple people in my shop access orders?", a: "Yes. Whoever has the shop's WhatsApp open will see incoming orders, the same way your shop already operates." },
      { q: "How do I add my products?", a: "Send us your top items during onboarding and we'll list them. You can update prices and availability over WhatsApp." },
    ],
  },
  {
    title: "For Shoppers",
    items: [
      { q: "How do I order?", a: "Open the Qloqal app, pick a nearby shop, add to cart, and pay." },
      { q: "What's the delivery time?", a: "It depends on the shop and the type of order. Estimated times appear at checkout." },
      { q: "Can I order from multiple shops at once?", a: "Each order goes to one shop, so they can prepare it cleanly. Place separate orders if you need items from different shops." },
    ],
  },
  {
    title: "Payments",
    items: [
      { q: "What payment methods are accepted?", a: "Cards, wallets, and bank transfer where supported. Some shops accept cash on delivery." },
      { q: "When do shops get paid?", a: "Shops are settled on a regular schedule via a secure payment partner." },
      { q: "What about refunds?", a: "Refunds are processed back to your original payment method." },
    ],
  },
  {
    title: "Privacy",
    items: [
      { q: "What data does Qloqal store?", a: "Only what's needed to fulfil your order — see our Privacy Policy for full details." },
      { q: "Is my WhatsApp number shared with customers?", a: "No. Qloqal sits between the customer and the shop. Customers don't see the shop's WhatsApp number." },
    ],
  },
];

function FAQPage() {
  return (
    <>
      <Seo title="FAQ — Qloqal" description="Common questions about Qloqal's WhatsApp commerce platform for small businesses." />

      <section className="container-pad mx-auto max-w-4xl pt-20 md:pt-28 pb-10">
        <div className="text-[11px] tracking-[0.2em] uppercase text-brand-green-dark font-semibold">FAQ</div>
        <h1 className="mt-5 font-display font-medium text-ink text-[clamp(2.5rem,6vw,5rem)] leading-[0.98] tracking-tight">
          Frequently <em>asked.</em>
        </h1>
      </section>

      <section className="container-pad mx-auto max-w-4xl py-10 space-y-14 ruled">
        {sections.map(s => (
          <div key={s.title}>
            <h2 className="font-display font-medium text-2xl md:text-3xl text-ink tracking-tight mb-5">{s.title}</h2>
            <FAQAccordion items={s.items} />
          </div>
        ))}
      </section>
    </>
  );
}
