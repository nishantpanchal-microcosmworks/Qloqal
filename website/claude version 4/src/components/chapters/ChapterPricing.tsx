import Stamp from "@/components/ui/Stamp";
import KickerLabel from "@/components/ui/KickerLabel";
import Button from "@/components/ui/Button";
import { VENDOR_TIERS } from "@/data/pricing";
import { cn } from "@/lib/cn";

export function ChapterPricing() {
  return (
    <section className="flex h-full w-full flex-col">
      <div className="flex items-center justify-between border-b-2 border-ink px-6 py-3 text-[10px] font-bold uppercase tracking-[0.2em] md:px-12">
        <Stamp tone="ink">CHAPTER 08</Stamp>
        <span>FOLIO 08 / 09 · PRICING (TEASER)</span>
      </div>

      <div className="flex-1 overflow-y-auto p-6 md:p-10">
        <div className="mx-auto max-w-[1280px]">
          <KickerLabel tone="green">pricing</KickerLabel>
          <h2 className="mt-2 font-mono text-[28px] leading-tight md:text-[44px]">
            Free to list. <br />
            Pay only when an order ships.
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-0 md:grid-cols-3">
            {VENDOR_TIERS.map((tier, i) => (
              <div
                key={tier.id}
                className={cn(
                  "relative flex flex-col gap-4 border-2 border-ink p-6 -ml-[2px] -mt-[2px]",
                  tier.highlight
                    ? "bg-[var(--color-signal-green)]"
                    : i === 0
                      ? "bg-[var(--color-paper)]"
                      : "bg-[var(--color-paper-2)]",
                )}
              >
                <div className="flex items-center justify-between">
                  <span className="border-2 border-ink bg-[var(--color-ink)] px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-[var(--color-paper)]">
                    {tier.badge}
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-[var(--color-ink-mute)]">
                    plan {String(i + 1).padStart(2, "0")} / 03
                  </span>
                </div>
                <div>
                  <h3 className="text-[16px] font-bold uppercase tracking-wider">
                    {tier.name}
                  </h3>
                  <div className="mt-1 flex items-baseline gap-1">
                    <span className="font-mono text-[44px] font-bold leading-none">
                      {tier.price}
                    </span>
                    <span className="text-[12px] uppercase tracking-widest text-[var(--color-ink-mute)]">
                      {tier.cadence}
                    </span>
                  </div>
                </div>
                <p className="text-[13px] leading-relaxed">{tier.intro}</p>
                <ul className="flex flex-col gap-1 text-[12px]">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 shrink-0 border-2 border-ink bg-[var(--color-ink)]" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  to={tier.cta.to}
                  variant={tier.highlight ? "primary" : "secondary"}
                  size="md"
                  data-cta={`pricing-tier-${tier.id}`}
                >
                  {tier.cta.label}
                </Button>
              </div>
            ))}
          </div>

          <p className="mt-6 text-[11px] uppercase tracking-widest text-[var(--color-ink-mute)]">
            * full plan details on the <a href="/pricing" className="underline">/pricing</a> page.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ChapterPricing;
