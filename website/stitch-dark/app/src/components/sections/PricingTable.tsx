import { Check } from "lucide-react";
import { Section } from "@/components/primitives/Section";
import { Container } from "@/components/primitives/Container";
import { GradientBorderCard } from "@/components/primitives/GradientBorderCard";
import { Button } from "@/components/ui/button";
import { pricingTiers } from "@/data/pricing";
import { cn } from "@/lib/utils";

type Props = {
  variant?: "default" | "lifted";
  showHeading?: boolean;
};

export function PricingTable({ variant = "default", showHeading = true }: Props) {
  return (
    <Section>
      <Container>
        {showHeading && (
          <div className="text-center mb-16">
            <h2 className="font-display text-h2 mb-4">Simple, Transparent Pricing</h2>
          </div>
        )}
        <div className="grid md:grid-cols-3 gap-6 pt-4">
          {pricingTiers.map((tier) => (
            <GradientBorderCard
              key={tier.id}
              className={cn(
                "p-10 flex flex-col h-full",
                tier.highlighted &&
                  "bg-surface-container-high border-primary/50 shadow-2xl shadow-primary/10 relative",
                variant === "lifted" && tier.highlighted && "md:-translate-y-4",
              )}
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-on-primary px-6 py-1 rounded-full text-label-caps font-bold whitespace-nowrap">
                  MOST POPULAR
                </div>
              )}
              <div className="mb-6 pt-2">
                <span className="text-label-caps uppercase text-primary mb-2 block">
                  {tier.eyebrow}
                </span>
                <h3
                  className={cn(
                    "font-display text-h2 mb-1",
                    tier.highlighted ? "text-primary" : "text-on-surface",
                  )}
                >
                  {tier.name}
                </h3>
                <p className="text-body-sm text-on-surface-variant">
                  {tier.description}
                </p>
              </div>
              <div className="mb-10">
                <span className="font-display text-h1 text-on-surface">{tier.price}</span>
                {tier.priceSuffix && (
                  <span className="text-body-md text-on-surface-variant">
                    {tier.priceSuffix}
                  </span>
                )}
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check size={18} className="text-primary mt-0.5 shrink-0" />
                    <span className="text-body-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant={tier.highlighted ? "primary" : "outline"}
                size="lg"
                className="w-full"
                data-cta={`pricing-${tier.id}`}
              >
                {tier.ctaLabel}
              </Button>
            </GradientBorderCard>
          ))}
        </div>
      </Container>
    </Section>
  );
}
