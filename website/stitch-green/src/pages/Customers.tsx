import { SEO } from "@/components/SEO";
import { Hero } from "@/components/sections/Hero";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { CTABand } from "@/components/sections/CTABand";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { CustomerNotifyForm } from "@/components/forms/CustomerNotifyForm";
import { CUSTOMER_CATEGORIES } from "@/data/categories";
import { CUSTOMER_FAQS } from "@/data/faqs";

const HIGHLIGHTS = [
  {
    icon: "local_grocery_store",
    title: "See real shops",
    body: "Browse actual storefronts in your neighborhood, not catalog filler from far-away warehouses.",
  },
  {
    icon: "near_me",
    title: "Live tracking",
    body: "Watch your order travel from the merchant's hands to your door, with precise real-time GPS.",
  },
  {
    icon: "credit_card",
    title: "Pay any way",
    body: "Choose from card, wallet, or local payment methods — including digital wallets and cash on delivery.",
  },
];

export default function Customers() {
  return (
    <>
      <SEO
        title="Real shops. Real prices. Real fast. — Qloqal"
        description="Discover your neighborhood like never before. Shop from local vendors with transparent pricing and lightning-fast delivery to your doorstep."
        path="/customers"
      />

      <Hero
        eyebrow="Hyperlocal experience"
        bg="low"
        align="left"
        title={
          <>
            Real shops. Real prices. <br />
            Real fast.
          </>
        }
        subtitle="Discover your neighborhood like never before. Shop from local vendors with transparent pricing and lightning-fast delivery to your doorstep."
        actions={
          <>
            <Button to="#notify" variant="primary" size="lg">
              Notify me at launch
            </Button>
            <Button to="/how-it-works" variant="secondary" size="lg">
              Learn more
            </Button>
          </>
        }
        illustration={
          <div className="relative mx-auto aspect-[3/4] w-72 rounded-[36px] bg-gradient-to-br from-primary to-secondary p-2 card-shadow md:w-80">
            <div className="flex h-full flex-col rounded-[28px] bg-surface-container-lowest p-6">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant">
                  Sweet Bakes
                </p>
                <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary">
                  Open
                </span>
              </div>
              <p className="font-display text-2xl font-bold leading-tight">
                Cinnamon roll
              </p>
              <p className="mb-4 text-sm text-on-surface-variant">
                0.4 mi · 12 min
              </p>
              <div className="flex flex-1 items-center justify-center rounded-2xl bg-surface-container text-5xl">
                🥐
              </div>
              <div className="mt-4 flex items-center justify-between">
                <p className="font-display text-xl font-bold text-primary">
                  $4.20
                </p>
                <span className="rounded-full bg-on-surface px-4 py-2 text-xs font-semibold text-surface">
                  Add to cart
                </span>
              </div>
            </div>
          </div>
        }
      />

      <Section bg="lowest">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {HIGHLIGHTS.map((h) => (
              <Card key={h.title} hover>
                <span
                  className="material-symbols-outlined mb-4 text-primary"
                  style={{ fontSize: 32 }}
                  aria-hidden="true"
                >
                  {h.icon}
                </span>
                <h3 className="mb-2 text-lg font-bold">{h.title}</h3>
                <p className="text-sm leading-relaxed text-on-surface-variant">
                  {h.body}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section bg="default">
        <Container>
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              Explore by category
            </h2>
            <p className="mt-3 text-lg text-on-surface-variant">
              Everything you need from your local community, organized for your
              convenience.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-5">
            {CUSTOMER_CATEGORIES.map((c) => (
              <div
                key={c.label}
                className="flex flex-col items-center justify-center rounded-2xl bg-surface-container-lowest p-6 text-center card-shadow card-shadow-hover transition-transform hover:-translate-y-1"
              >
                <span
                  className="material-symbols-outlined mb-3 text-primary"
                  style={{ fontSize: 32 }}
                  aria-hidden="true"
                >
                  {c.icon}
                </span>
                <p className="text-sm font-semibold">{c.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section bg="lowest">
        <Container>
          <div className="overflow-hidden rounded-[48px] bg-surface-container-low p-10 md:p-16">
            <div className="flex flex-col items-center gap-12 md:flex-row md:gap-16">
              <div className="md:w-1/2">
                <h2 className="text-4xl font-extrabold md:text-5xl">
                  Download Qloqal today.
                </h2>
                <p className="mt-4 text-lg text-on-surface-variant">
                  Get the best of your neighborhood delivered in minutes. Track
                  orders and chat shops directly from your phone.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#"
                    className="inline-flex items-center gap-3 rounded-2xl bg-on-surface px-6 py-3 text-surface transition-opacity hover:opacity-90"
                  >
                    <span
                      className="material-symbols-outlined"
                      aria-hidden="true"
                    >
                      apple
                    </span>
                    <div className="text-left">
                      <p className="text-[10px] uppercase tracking-wider opacity-80">
                        Download on the
                      </p>
                      <p className="text-sm font-semibold">App Store</p>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center gap-3 rounded-2xl bg-on-surface px-6 py-3 text-surface transition-opacity hover:opacity-90"
                  >
                    <span
                      className="material-symbols-outlined"
                      aria-hidden="true"
                    >
                      android
                    </span>
                    <div className="text-left">
                      <p className="text-[10px] uppercase tracking-wider opacity-80">
                        Get it on
                      </p>
                      <p className="text-sm font-semibold">Google Play</p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="mx-auto aspect-square max-w-sm rounded-[36px] bg-gradient-to-br from-secondary/20 via-primary/10 to-primary-container/30 p-10">
                  <div className="flex h-full items-center justify-center text-7xl">
                    📱
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section bg="default" id="notify">
        <Container>
          <div className="mx-auto max-w-2xl rounded-[32px] bg-surface-container-lowest p-8 card-shadow md:p-12">
            <h2 className="text-center text-3xl font-bold md:text-4xl">
              Tell us when to ping you.
            </h2>
            <p className="mt-3 text-center text-on-surface-variant">
              We'll let you know the minute Qloqal lights up in your
              neighborhood.
            </p>
            <div className="mt-8">
              <CustomerNotifyForm />
            </div>
          </div>
        </Container>
      </Section>

      <FAQAccordion
        items={CUSTOMER_FAQS}
        title="Frequently asked questions"
        bg="lowest"
      />

      <CTABand
        title="Run a shop?"
        subtitle="See the vendor side of Qloqal — and turn your customers into superfans."
        primary={{ label: "For vendors", to: "/vendors" }}
        secondary={{ label: "How it works", to: "/how-it-works" }}
      />
    </>
  );
}
