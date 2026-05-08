import { Check, X } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CTABand } from "@/components/sections/CTABand";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { COMPARISON_ROWS, PRICING_TIERS } from "@/data/pricing";
import { PRICING_FAQS } from "@/data/faqs";
import { cn } from "@/lib/cn";

function Cell({ value }: { value: string | boolean }) {
  if (value === true) {
    return <Check className="mx-auto h-5 w-5 text-primary" aria-label="Included" />;
  }
  if (value === false) {
    return <X className="mx-auto h-5 w-5 text-outline-variant" aria-label="Not included" />;
  }
  return <span className="text-sm">{value}</span>;
}

export default function Pricing() {
  return (
    <>
      <SEO
        title="Pricing — Qloqal"
        description="Pay when you sell. No monthly surprises. Three plans for shops at every stage of growth."
        path="/pricing"
      />

      <Hero
        eyebrow="Simple economics"
        title={
          <>
            Pay when you sell. <br />
            Not before.
          </>
        }
        subtitle="Qloqal empowers local businesses with high-end commerce tools. No hidden fees, no monthly surprises. Only pay for the success we help you achieve."
      />

      <Section bg="lowest" className="!pt-0">
        <Container>
          <div className="grid gap-8 md:grid-cols-3">
            {PRICING_TIERS.map((tier) => {
              const isHighlighted = tier.highlighted;
              return (
                <div
                  key={tier.name}
                  className={cn(
                    "relative flex flex-col rounded-[24px] p-10 card-shadow card-shadow-hover",
                    isHighlighted
                      ? "bg-surface-container-lowest border-2 border-secondary md:scale-[1.04]"
                      : "bg-surface-container-low",
                  )}
                >
                  {isHighlighted && (
                    <div className="absolute right-0 top-0 rounded-bl-xl bg-secondary px-5 py-1 text-xs font-bold uppercase tracking-wider text-on-secondary">
                      Most popular
                    </div>
                  )}
                  <h3 className="mb-2 text-xl font-bold">{tier.name}</h3>
                  <div className="mb-2 flex items-baseline gap-1">
                    <span
                      className={cn(
                        "font-display text-5xl font-extrabold",
                        isHighlighted ? "text-secondary" : "text-primary",
                      )}
                    >
                      {tier.price}
                    </span>
                    <span className="text-on-surface-variant">
                      {tier.cadence}
                    </span>
                  </div>
                  <p className="mb-8 text-sm text-on-surface-variant">
                    {tier.tagline}
                  </p>
                  <ul className="mb-10 flex flex-1 flex-col gap-3">
                    {tier.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm"
                      >
                        <Check
                          className={cn(
                            "h-5 w-5 shrink-0",
                            isHighlighted ? "text-secondary" : "text-primary",
                          )}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    to={tier.cta.to}
                    variant={isHighlighted ? "primary" : "secondary"}
                    size="md"
                    className="w-full"
                  >
                    {tier.cta.label}
                  </Button>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section bg="bright">
        <Container>
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Compare features</h2>
            <p className="mt-3 text-on-surface-variant">
              Every tool you need to thrive in your neighborhood.
            </p>
          </div>
          <div className="overflow-x-auto rounded-[24px] bg-surface-container-lowest card-shadow">
            <table className="min-w-full text-left text-sm">
              <thead>
                <tr className="border-b border-outline-variant">
                  <th className="px-6 py-4 font-semibold">Feature</th>
                  <th className="px-6 py-4 text-center font-semibold">
                    Starter
                  </th>
                  <th className="px-6 py-4 text-center font-semibold text-secondary">
                    Growth
                  </th>
                  <th className="px-6 py-4 text-center font-semibold">Scale</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row) => (
                  <tr
                    key={row.feature}
                    className="border-b border-outline-variant/50 last:border-0"
                  >
                    <td className="px-6 py-4 font-medium">{row.feature}</td>
                    <td className="px-6 py-4 text-center">
                      <Cell value={row.starter} />
                    </td>
                    <td className="bg-secondary/[0.04] px-6 py-4 text-center">
                      <Cell value={row.growth} />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Cell value={row.scale} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </Section>

      <FAQAccordion
        items={PRICING_FAQS}
        title="Pricing questions"
        bg="lowest"
      />

      <CTABand
        title="Ready to own your neighborhood?"
        subtitle="Join thousands of local merchants growing their business on Qloqal."
        primary={{ label: "Get started free", to: "/vendors" }}
        secondary={{ label: "Talk to sales", to: "/contact" }}
      />
    </>
  );
}
