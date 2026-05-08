import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { PRICING_TIERS } from "@/data/pricing";
import { cn } from "@/lib/cn";

export function PricingTeaser() {
  return (
    <Section bg="lowest">
      <Container>
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Simple, transparent pricing.
          </h2>
          <p className="mt-3 text-lg text-on-surface-variant">
            No hidden fees. Scale as you grow.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {PRICING_TIERS.map((tier) => {
            const isHighlighted = tier.highlighted;
            return (
              <div
                key={tier.name}
                className={cn(
                  "relative flex flex-col rounded-[24px] p-10 card-shadow card-shadow-hover",
                  isHighlighted
                    ? "bg-surface-container-lowest border-2 border-secondary md:scale-[1.03]"
                    : "bg-surface-container-low",
                )}
              >
                {isHighlighted && (
                  <div className="absolute right-0 top-0 rounded-bl-xl bg-secondary px-5 py-1 text-xs font-bold uppercase tracking-wider text-on-secondary">
                    Popular
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
                  <span className="text-on-surface-variant">{tier.cadence}</span>
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
  );
}
