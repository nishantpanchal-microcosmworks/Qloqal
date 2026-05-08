import { SEO } from "@/components/SEO";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { CTABand } from "@/components/sections/CTABand";

const FLOW_STEPS = [
  { label: "Discover", icon: "search" },
  { label: "Select", icon: "shopping_cart" },
  { label: "Checkout", icon: "credit_score" },
  { label: "Notify", icon: "chat" },
  { label: "Pack", icon: "inventory" },
  { label: "Handoff", icon: "delivery_dining" },
];

const CUSTOMER_JOURNEY = [
  {
    step: "Step 01",
    title: "Browse local catalog",
    body: "Open the Qloqal app to access a curated digital storefront of every favorite shop nearby.",
  },
  {
    step: "Step 02",
    title: "Secure instant pay",
    body: "One-click checkout with your saved local payment methods and end-to-end encryption.",
  },
  {
    step: "Step 03",
    title: "Track via WhatsApp",
    body: "Live updates and quick chat with the merchant — no extra app, no friction.",
  },
];

const VENDOR_JOURNEY = [
  {
    step: "Step 01",
    title: "Receive WhatsApp alert",
    body: "Orders arrive as rich media messages on the WhatsApp number you already use.",
  },
  {
    step: "Step 02",
    title: "Tap to confirm",
    body: "One-tap confirms order intake and notifies the customer with a single button press.",
  },
  {
    step: "Step 03",
    title: "Payout disbursed",
    body: "Funds are released to your linked bank account once the order is scanned and complete.",
  },
];

const ENGINE = [
  {
    icon: "smartphone",
    title: "Customer App",
    body: "A blazing-fast PWA — no install, no waiting on the app store.",
  },
  {
    icon: "cloud_sync",
    title: "WhatsApp API",
    body: "Verified Business sender with structured templates and quick replies.",
  },
  {
    icon: "phone_android",
    title: "Vendor Device",
    body: "Whatever phone you already own. The bot does the heavy lifting.",
  },
];

export default function HowItWorks() {
  return (
    <>
      <SEO
        title="How Qloqal works"
        description="Customers in the app, merchants on WhatsApp — here's how Qloqal connects them in seconds."
        path="/how-it-works"
      />

      <Hero
        eyebrow="How it works"
        title={
          <>
            From browse to bag, <br />
            in minutes.
          </>
        }
        subtitle="Experience the speed of hyperlocal commerce. We've bridged the gap between digital convenience and physical proximity."
      />

      <Section bg="lowest" className="!pt-0">
        <Container>
          <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-3 md:gap-6">
            {FLOW_STEPS.map((step, i) => (
              <div key={step.label} className="flex items-center gap-3">
                <div className="flex flex-col items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-on-primary card-shadow">
                    <span
                      className="material-symbols-outlined"
                      style={{ fontSize: 22 }}
                      aria-hidden="true"
                    >
                      {step.icon}
                    </span>
                  </div>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-wider">
                    {step.label}
                  </p>
                </div>
                {i < FLOW_STEPS.length - 1 && (
                  <span className="hidden text-outline-variant md:inline-block">
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section bg="bright">
        <Container>
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              Synchronized success
            </h2>
            <p className="mt-3 text-lg text-on-surface-variant">
              See how we harmonize every transaction for both parties.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-2 md:gap-16">
            <div>
              <p className="mb-6 inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-semibold text-secondary">
                <span className="material-symbols-outlined" aria-hidden="true" style={{ fontSize: 18 }}>
                  person
                </span>
                Customer journey
              </p>
              <div className="space-y-5">
                {CUSTOMER_JOURNEY.map((s) => (
                  <Card key={s.title}>
                    <p className="text-xs font-semibold uppercase tracking-wider text-secondary">
                      {s.step}
                    </p>
                    <h3 className="mt-1 text-lg font-bold">{s.title}</h3>
                    <p className="mt-2 text-sm text-on-surface-variant">
                      {s.body}
                    </p>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
                <span className="material-symbols-outlined" aria-hidden="true" style={{ fontSize: 18 }}>
                  storefront
                </span>
                Vendor workflow
              </p>
              <div className="space-y-5">
                {VENDOR_JOURNEY.map((s) => (
                  <Card key={s.title}>
                    <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                      {s.step}
                    </p>
                    <h3 className="mt-1 text-lg font-bold">{s.title}</h3>
                    <p className="mt-2 text-sm text-on-surface-variant">
                      {s.body}
                    </p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section bg="inverse">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-inverse-on-surface md:text-4xl">
              The engine under the hood
            </h2>
            <p className="mt-3 text-lg text-inverse-on-surface/70">
              Highly composable infrastructure, simplified for everyday life.
            </p>
          </div>
          <div className="mt-12 grid items-center gap-6 md:grid-cols-3">
            {ENGINE.map((piece, idx) => (
              <div key={piece.title} className="relative">
                <div className="rounded-[24px] bg-surface-container-lowest p-8 text-center text-on-surface card-shadow">
                  <span
                    className="material-symbols-outlined mb-3 text-primary"
                    style={{ fontSize: 40 }}
                    aria-hidden="true"
                  >
                    {piece.icon}
                  </span>
                  <h3 className="text-lg font-bold">{piece.title}</h3>
                  <p className="mt-2 text-sm text-on-surface-variant">
                    {piece.body}
                  </p>
                </div>
                {idx < ENGINE.length - 1 && (
                  <span className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-2xl text-primary-container md:block">
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section bg="lowest">
        <Container>
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-20">
            <div>
              <h2 className="text-3xl font-bold md:text-4xl">
                Zero learning curve with WhatsApp
              </h2>
              <ul className="mt-8 space-y-5">
                <li className="flex gap-4">
                  <span
                    className="material-symbols-outlined text-primary"
                    aria-hidden="true"
                  >
                    favorite
                  </span>
                  <div>
                    <p className="font-semibold">Familiar interface</p>
                    <p className="text-sm text-on-surface-variant">
                      No new complicated app for vendors to learn. If they text,
                      they can sell.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span
                    className="material-symbols-outlined text-primary"
                    aria-hidden="true"
                  >
                    notifications_active
                  </span>
                  <div>
                    <p className="font-semibold">Instant notifications</p>
                    <p className="text-sm text-on-surface-variant">
                      98% open rate ensures no order is missed and customers get
                      instant responses.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span
                    className="material-symbols-outlined text-primary"
                    aria-hidden="true"
                  >
                    public
                  </span>
                  <div>
                    <p className="font-semibold">Universal accessibility</p>
                    <p className="text-sm text-on-surface-variant">
                      Works on any smartphone, even with limited data or older
                      hardware.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <div className="mx-auto aspect-[3/4] max-w-xs rounded-[32px] bg-gradient-to-br from-primary to-secondary p-2 card-shadow">
                <div className="flex h-full flex-col rounded-[28px] bg-[var(--color-whatsapp)] p-5">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-white/40" />
                    <div>
                      <p className="text-sm font-semibold text-white">
                        Sweet Bakes
                      </p>
                      <p className="text-xs text-white/70">via Qloqal</p>
                    </div>
                  </div>
                  <div className="flex-1 space-y-3">
                    <div className="max-w-[80%] rounded-2xl rounded-tl-none bg-white p-3 shadow-sm">
                      <p className="text-xs">
                        Order #2391 — 1 sourdough, 2 croissants. $14.20
                      </p>
                    </div>
                    <div className="ml-auto max-w-[80%] rounded-2xl rounded-tr-none bg-[#dcf8c6] p-3 shadow-sm">
                      <p className="text-xs">Tap accept to start packing.</p>
                    </div>
                    <div className="ml-auto max-w-[80%] rounded-2xl rounded-tr-none bg-primary p-3 text-on-primary shadow-sm">
                      <p className="text-xs font-semibold">
                        ✅ Accepted · ETA 12 min
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <CTABand
        title="Ready to connect your neighborhood?"
        subtitle="Join 2,500+ local merchants and start selling in under 10 minutes."
        primary={{ label: "Start selling", to: "/vendors" }}
        secondary={{ label: "See pricing", to: "/pricing" }}
      />
    </>
  );
}
