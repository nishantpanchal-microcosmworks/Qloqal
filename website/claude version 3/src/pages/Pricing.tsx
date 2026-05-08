import { useState } from "react";
import { SEO } from "@/components/SEO";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { BentoTile } from "@/components/ui/BentoTile";
import { PageHero } from "@/components/sections/PageHero";
import { CTATile } from "@/components/bento/CTATile";
import { PRICING_TIERS, PRICING_COMPARISON } from "@/data/pricing";
import { Check, X } from "lucide-react";
import { cn } from "@/lib/cn";

export default function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <>
      <SEO
        title="Pricing — Qloqal"
        description="Three honest plans, no per-order fees, no setup costs. Pay monthly, pause anytime."
        path="/pricing"
      />

      <PageHero
        kicker="pricing"
        title={
          <>
            Three plans,{" "}
            <span className="ink-italic text-[var(--color-primary)]">no funny business.</span>
          </>
        }
        body="No per-order cuts, no card-on-file ambushes. Pay monthly, pause whenever the season turns quiet, return when it doesn’t."
        actions={
          <div className="inline-flex items-center gap-1 rounded-full border border-[var(--color-outline-variant)] bg-[var(--color-surface-container-lowest)] p-1">
            <button
              type="button"
              onClick={() => setYearly(false)}
              className={cn(
                "px-4 py-1.5 rounded-full text-sm font-medium transition-colors",
                !yearly ? "bg-[var(--color-ink)] text-[var(--color-surface)]" : "text-[var(--color-on-surface-variant)]",
              )}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setYearly(true)}
              className={cn(
                "px-4 py-1.5 rounded-full text-sm font-medium transition-colors",
                yearly ? "bg-[var(--color-ink)] text-[var(--color-surface)]" : "text-[var(--color-on-surface-variant)]",
              )}
            >
              Yearly · save 16%
            </button>
          </div>
        }
      />

      <Container className="py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-5">
          {PRICING_TIERS.map((tier) => (
            <BentoTile
              key={tier.id}
              tone={tier.highlight ? "terracotta" : "paper"}
              className={cn("flex flex-col gap-5 relative", tier.highlight && "lg:-translate-y-2")}
            >
              {tier.highlight ? (
                <span className="absolute top-5 right-5 inline-flex items-center rounded-full bg-[var(--color-on-primary)] text-[var(--color-primary)] px-3 py-1 text-[11px] font-mono uppercase tracking-widest">
                  most chosen
                </span>
              ) : null}
              <div>
                <span className="kicker">{tier.id}</span>
                <h2 className={cn("font-display text-3xl mt-2 leading-tight", tier.highlight && "text-[var(--color-on-primary)]")}>
                  {tier.name}
                </h2>
                <p className={cn("mt-2 text-sm leading-relaxed", tier.highlight ? "text-[var(--color-on-primary)]/85" : "text-[var(--color-on-surface-variant)]")}>
                  {tier.tagline}
                </p>
              </div>
              <div className="font-display flex items-baseline gap-2">
                <span className={cn("text-5xl font-medium", tier.highlight ? "text-[var(--color-on-primary)]" : "text-[var(--color-on-surface)]")}>
                  {tier.currency}
                  {yearly ? Math.round(tier.yearly / 12) : tier.monthly}
                </span>
                <span className={cn("text-sm font-mono", tier.highlight ? "text-[var(--color-on-primary)]/80" : "text-[var(--color-on-surface-variant)]")}>
                  /month
                </span>
              </div>
              <ul className="space-y-2.5">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <Check size={15} className={cn("mt-1 shrink-0", tier.highlight ? "text-[var(--color-on-primary)]" : "text-[var(--color-secondary)]")} />
                    <span className={tier.highlight ? "text-[var(--color-on-primary)]" : "text-[var(--color-on-surface)]"}>{f}</span>
                  </li>
                ))}
                {tier.notIncluded?.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm opacity-60">
                    <X size={15} className="mt-1 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Button
                to="/vendors"
                variant={tier.highlight ? "ink" : "primary"}
                size="lg"
                className="self-start"
              >
                {tier.cta}
              </Button>
            </BentoTile>
          ))}
        </div>
      </Container>

      <Container className="py-12">
        <span className="kicker">side by side</span>
        <h2 className="font-display text-3xl lg:text-4xl mt-3 leading-tight">Everything, lined up.</h2>
        <div className="mt-8 paper-card overflow-hidden">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-[var(--color-outline-variant)] bg-[var(--color-surface-container-low)]">
                <th className="p-4 text-sm font-medium text-[var(--color-on-surface-variant)]">Feature</th>
                {PRICING_TIERS.map((t) => (
                  <th key={t.id} className="p-4 text-sm font-medium text-[var(--color-on-surface)]">{t.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {PRICING_COMPARISON.map((row) => (
                <tr key={row.feature} className="border-b border-[var(--color-outline-variant)] last:border-b-0">
                  <td className="p-4 text-sm">{row.feature}</td>
                  {(["counter", "studio", "atelier"] as const).map((k) => {
                    const v = row[k];
                    return (
                      <td key={k} className="p-4 text-sm text-[var(--color-on-surface)]">
                        {typeof v === "boolean" ? (
                          v ? <Check size={16} className="text-[var(--color-secondary)]" /> : <X size={16} className="text-[var(--color-on-surface-variant)]/50" />
                        ) : (
                          <span className="font-mono">{v}</span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>

      <Container className="py-10 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5">
          <CTATile
            span="lg:col-span-12"
            title="Still on the fence?"
            body="Take Counter for a spin. It’s free, you can keep it forever, and you can grow into Studio whenever you’re ready."
            primary={{ label: "Open my shop", to: "/vendors" }}
            secondary={{ label: "Talk to a human", to: "/contact" }}
          />
        </div>
      </Container>
    </>
  );
}
