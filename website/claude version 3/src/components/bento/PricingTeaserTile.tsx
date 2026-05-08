import { BentoTile } from "@/components/ui/BentoTile";
import { Button } from "@/components/ui/Button";
import { PRICING_TIERS } from "@/data/pricing";
import { Check } from "lucide-react";

export function PricingTeaserTile() {
  const tiers = PRICING_TIERS.slice(0, 2);
  return (
    <BentoTile tone="paper" span="lg:col-span-7" className="flex flex-col gap-5">
      <div className="flex items-end justify-between gap-4 flex-wrap">
        <div>
          <span className="kicker">honest prices</span>
          <h2 className="font-display text-2xl lg:text-3xl mt-2 leading-snug">
            Two plans most shops live in.
          </h2>
        </div>
        <Button to="/pricing" variant="ghost" size="sm">
          See full price list →
        </Button>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {tiers.map((tier) => (
          <div
            key={tier.id}
            className="rounded-2xl border border-[var(--color-outline-variant)] bg-[var(--color-surface-container-low)] p-5 flex flex-col gap-3"
          >
            <div className="flex items-baseline justify-between">
              <h3 className="font-display text-xl">{tier.name}</h3>
              <div className="font-mono text-sm">
                <span className="text-[var(--color-on-surface)] font-semibold">
                  {tier.currency}
                  {tier.monthly}
                </span>
                <span className="text-[var(--color-on-surface-variant)]">/mo</span>
              </div>
            </div>
            <p className="text-sm text-[var(--color-on-surface-variant)] leading-relaxed">{tier.tagline}</p>
            <ul className="space-y-1.5 text-sm text-[var(--color-on-surface)]">
              {tier.features.slice(0, 3).map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <Check size={14} className="mt-1 shrink-0 text-[var(--color-secondary)]" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </BentoTile>
  );
}
