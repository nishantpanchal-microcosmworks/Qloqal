import { Hero } from "@/components/sections/Hero";
import { Button } from "@/components/ui/Button";
import { ShowcaseStrip } from "@/components/sections/ShowcaseStrip";
import { StatsBanner } from "@/components/sections/StatsBanner";
import { UseCaseGrid } from "@/components/sections/UseCaseGrid";
import {
  AlternatingRows,
  type AlternatingRow,
} from "@/components/sections/AlternatingRows";
import { WhyWhatsApp } from "@/components/sections/WhyWhatsApp";
import { PricingTeaser } from "@/components/sections/PricingTeaser";
import { LogoStrip } from "@/components/sections/LogoStrip";
import { Testimonials } from "@/components/sections/Testimonials";
import { CustomerTeaser } from "@/components/sections/CustomerTeaser";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { CTABand } from "@/components/sections/CTABand";
import { WhatsAppBubble } from "@/components/mockups/WhatsAppBubble";
import { CatalogMockup } from "@/components/mockups/CatalogMockup";
import { PaymentRowMockup } from "@/components/mockups/PaymentRowMockup";
import { HOME_FAQS } from "@/data/faqs";
import { SEO } from "@/components/SEO";

export default function Home() {
  const rows: AlternatingRow[] = [
    {
      title: "Chat that converts.",
      body: "Stop juggling between apps. Qloqal integrates directly with WhatsApp, letting you turn conversations into transactions without ever leaving the chat window.",
      visual: <WhatsAppBubble variant="panel" />,
    },
    {
      title: "Your catalog, elevated.",
      body: "Upload products in bulk or one by one. Our lightning-fast catalog helps customers find exactly what they need in seconds, with zero lag and beautiful visuals.",
      visual: <CatalogMockup />,
    },
    {
      title: "Seamless payments.",
      body: "Support for all major local and international payment methods. Secure, fast, and directly tied to your WhatsApp orders for easy reconciliation.",
      visual: <PaymentRowMockup />,
    },
  ];

  return (
    <>
      <SEO
        title="Qloqal — Run your shop on WhatsApp"
        description="Qloqal turns any small business into a high-converting online shop. Manage your catalog, take payments, and reach customers right on WhatsApp."
        path="/"
      />

      <Hero
        title={
          <>
            Run your shop online. Take every order on{" "}
            <span className="text-secondary">WhatsApp</span>. That's it.
          </>
        }
        subtitle="Qloqal turns any small business into a high-converting online shop. Manage your catalog, take payments, and keep your customers happy where they already are."
        actions={
          <>
            <Button to="/vendors" variant="primary" size="lg">
              Start selling
            </Button>
            <Button to="/how-it-works" variant="secondary" size="lg">
              See it in action
            </Button>
          </>
        }
      />

      <ShowcaseStrip />
      <StatsBanner />
      <UseCaseGrid />
      <AlternatingRows rows={rows} />
      <WhyWhatsApp />
      <PricingTeaser />
      <LogoStrip />
      <Testimonials />
      <CustomerTeaser />
      <FAQAccordion items={HOME_FAQS} />

      <CTABand
        title="Ready to take your shop online?"
        subtitle="Join 5,000+ merchants who already started their business with Qloqal — set up in under 10 minutes."
        primary={{ label: "Activate my shop", to: "/vendors" }}
        secondary={{ label: "See pricing", to: "/pricing" }}
      />
    </>
  );
}
