import { Check } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Hero } from "@/components/sections/Hero";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { WhyWhatsApp } from "@/components/sections/WhyWhatsApp";
import { PricingTeaser } from "@/components/sections/PricingTeaser";
import { CTABand } from "@/components/sections/CTABand";
import { VendorInquiryForm } from "@/components/forms/VendorInquiryForm";
import {
  AlternatingRows,
  type AlternatingRow,
} from "@/components/sections/AlternatingRows";
import { DashboardMockup } from "@/components/mockups/DashboardMockup";
import { CatalogMockup } from "@/components/mockups/CatalogMockup";
import { PaymentRowMockup } from "@/components/mockups/PaymentRowMockup";

const FEATURES = [
  {
    icon: "qr_code_2",
    title: "Custom Shop QR",
    body: "Print one QR code. Customers scan, browse, and chat — anywhere in your shop.",
  },
  {
    icon: "smart_toy",
    title: "Smart WhatsApp Bot",
    body: "Auto-replies, structured order forms, and one-tap accept buttons that work for any team size.",
  },
  {
    icon: "inventory_2",
    title: "Inventory Sync",
    body: "Stock counts update across your storefront and chat in real time. Never sell what you don't have.",
  },
  {
    icon: "analytics",
    title: "Sales Analytics",
    body: "Daily summaries, top products, and busy-hour heatmaps — straight to your phone.",
  },
  {
    icon: "bolt",
    title: "Instant Payouts",
    body: "Money settles to your bank within one business day, every day.",
  },
  {
    icon: "local_shipping",
    title: "Delivery Drops",
    body: "Tap into the Qloqal courier network or use your own runners. Both work.",
  },
];

const STEPS = [
  {
    n: "01",
    title: "Activate your shop",
    body: "Add your shop name, opening hours, and a few products. We generate your microsite + QR.",
  },
  {
    n: "02",
    title: "Connect WhatsApp",
    body: "Link your WhatsApp Business number. The Qloqal bot starts handling order intake and structured replies.",
  },
  {
    n: "03",
    title: "Start taking orders",
    body: "Customers find you on the map and in chat. You accept, pack, and get paid — all from your phone.",
  },
];

export default function Vendors() {
  const rows: AlternatingRow[] = [
    {
      title: 'No more manual "is this available?" chats.',
      body: "Our cheery bot replies to every customer with real-time inventory, prices, and add-to-cart buttons — even while you're behind the counter.",
      visual: <DashboardMockup />,
    },
    {
      title: "Own your customer relationships.",
      body: "Every order builds a customer profile you actually own — not a marketplace's. Re-engage them with one tap when new stock arrives.",
      visual: <CatalogMockup />,
    },
    {
      title: "Keep 100% of your margins.",
      body: "Transparent pricing, no commission on the Starter plan, and a flat per-transaction fee at scale. The math always works in your favor.",
      visual: <PaymentRowMockup />,
    },
  ];

  return (
    <>
      <SEO
        title="Triple your orders. Don't change a thing. — Qloqal for Vendors"
        description="Join thousands of local merchants growing with Qloqal's hyperlocal commerce engine. Free to start, zero app to install for your customers."
        path="/vendors"
      />

      <Hero
        eyebrow="Fast support · 24/7"
        title={
          <>
            Triple your orders. <br />
            Don't change a thing.
          </>
        }
        subtitle="Join 500+ local merchants growing their business with Qloqal's hyperlocal commerce engine. Setup takes 10 minutes."
        actions={
          <>
            <Button to="#vendor-form" variant="primary" size="lg">
              Get your shop ready
            </Button>
            <Button to="/how-it-works" variant="secondary" size="lg">
              See how it works
            </Button>
          </>
        }
      />

      <Section bg="lowest">
        <Container>
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            Everything you need to scale.
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f) => (
              <Card key={f.title} hover>
                <span
                  className="material-symbols-outlined mb-4 text-primary"
                  style={{ fontSize: 32 }}
                  aria-hidden="true"
                >
                  {f.icon}
                </span>
                <h3 className="mb-2 text-lg font-bold">{f.title}</h3>
                <p className="text-sm leading-relaxed text-on-surface-variant">
                  {f.body}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <AlternatingRows rows={rows} />

      <WhyWhatsApp inverse />

      <Section bg="lowest">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-10 text-center text-3xl font-bold md:text-4xl">
              Getting started is simple.
            </h2>
            <div className="flex flex-col gap-6">
              {STEPS.map((step) => (
                <div
                  key={step.n}
                  className="flex items-start gap-6 rounded-[24px] bg-surface-container-lowest p-6 card-shadow"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-on-primary font-bold">
                    <Check className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                      Step {step.n}
                    </p>
                    <h3 className="mt-1 text-xl font-bold">{step.title}</h3>
                    <p className="mt-2 text-on-surface-variant">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <PricingTeaser />

      <Section bg="bright" id="vendor-form">
        <Container>
          <div className="mx-auto max-w-3xl rounded-[32px] bg-surface-container-lowest p-8 card-shadow md:p-14">
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold md:text-4xl">
                Become a Founding Vendor
              </h2>
              <p className="mt-3 text-lg text-on-surface-variant">
                Tell us about your shop. We'll get back within one business day
                with your activation link.
              </p>
            </div>
            <VendorInquiryForm />
          </div>
        </Container>
      </Section>

      <CTABand
        title="Stop turning customers away."
        subtitle="Activate your Qloqal shop and start taking orders on WhatsApp today."
        primary={{ label: "Get started now", to: "#vendor-form" }}
        secondary={{ label: "Talk to sales", to: "/contact" }}
      />
    </>
  );
}
