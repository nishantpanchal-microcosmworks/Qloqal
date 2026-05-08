import SEO from "@/components/SEO";
import PageHeader from "@/components/layout/PageHeader";
import Section from "@/components/ui/Section";
import KickerLabel from "@/components/ui/KickerLabel";
import Highlight from "@/components/ui/Highlight";
import Button from "@/components/ui/Button";
import { VENDOR_TIERS } from "@/data/pricing";
import { cn } from "@/lib/cn";

const COMPARISON_ROWS = [
  { feature: "Public storefront link", list: "✓", per: "✓", studio: "✓" },
  { feature: "WhatsApp order routing", list: "✓", per: "✓", studio: "✓" },
  { feature: "Items listed", list: "50", per: "unlimited", studio: "unlimited" },
  { feature: "Built-in payments", list: "—", per: "✓", studio: "✓" },
  { feature: "Auto-payout T+1", list: "—", per: "✓", studio: "✓" },
  { feature: "Qloqal-handled delivery", list: "—", per: "✓", studio: "✓" },
  { feature: "Multi-counter routing", list: "—", per: "—", studio: "✓" },
  { feature: "Per-counter reports", list: "—", per: "—", studio: "✓" },
  { feature: "Priority support", list: "email", per: "email", studio: "channel" },
];

export default function Pricing() {
  return (
    <>
      <SEO
        title="Pricing — free to list, pay only on orders"
        description="Qloqal pricing in plain English. Free to list. 5% per delivered order. No setup fee. No monthly minimum. Talk to us for multi-counter setups."
        canonical="/pricing"
      />
      <PageHeader
        fileNo="FILE · PRICING-04"
        kicker="receipt · plain pricing"
        title={
          <>
            Free to list. <br />
            <Highlight tone="green">5% per delivered order.</Highlight>
          </>
        }
        intro="No setup fee. No monthly minimum. No paid placement. The number on this receipt is the only number on your invoice."
        fill="paper"
      />

      {/* tiers as receipts */}
      <Section className="bg-[var(--color-paper-2)] border-b-2 border-ink">
        <div className="grid grid-cols-1 gap-0 md:grid-cols-3">
          {VENDOR_TIERS.map((tier, i) => (
            <article
              key={tier.id}
              className={cn(
                "flex flex-col gap-4 border-2 border-ink p-6 -ml-[2px] -mt-[2px]",
                tier.highlight
                  ? "bg-[var(--color-signal-green)]"
                  : i === 0
                    ? "bg-[var(--color-paper)]"
                    : "bg-[var(--color-paper-3)]",
              )}
            >
              <div className="flex items-center justify-between border-b-2 border-ink pb-2 text-[10px] font-bold uppercase tracking-widest">
                <span>RECEIPT · {tier.badge}</span>
                <span>PLAN {String(i + 1).padStart(2, "0")} / 03</span>
              </div>
              <h3 className="font-mono text-[20px] font-bold uppercase tracking-wider">
                {tier.name}
              </h3>
              <div className="flex items-baseline gap-2">
                <span className="font-mono text-[56px] font-bold leading-none">
                  {tier.price}
                </span>
                <span className="text-[12px] uppercase tracking-widest text-[var(--color-ink-mute)]">
                  {tier.cadence}
                </span>
              </div>
              <p className="text-[13px] leading-relaxed">{tier.intro}</p>
              <ul className="flex flex-col">
                {tier.features.map((f, k) => (
                  <li
                    key={f}
                    className={cn(
                      "flex justify-between border-b border-dotted border-ink py-2 text-[12px]",
                      k === tier.features.length - 1 && "border-b-0",
                    )}
                  >
                    <span>{f}</span>
                    <span className="font-bold">·</span>
                  </li>
                ))}
              </ul>
              <Button
                to={tier.cta.to}
                variant={tier.highlight ? "primary" : "secondary"}
                size="lg"
                data-cta={`pricing-page-tier-${tier.id}`}
              >
                {tier.cta.label}
              </Button>
            </article>
          ))}
        </div>
      </Section>

      {/* comparison */}
      <Section>
        <KickerLabel tone="green">side-by-side</KickerLabel>
        <h2 className="mt-1 font-mono text-[28px] md:text-[40px]">
          Compare the three plans.
        </h2>
        <div className="mt-6 overflow-x-auto border-2 border-ink">
          <table className="w-full border-collapse text-left text-[13px]">
            <thead>
              <tr className="bg-[var(--color-ink)] text-[var(--color-paper)] uppercase tracking-widest">
                <th className="border-r-2 border-[var(--color-paper)] p-3 text-[11px]">
                  Feature
                </th>
                <th className="border-r-2 border-[var(--color-paper)] p-3 text-[11px]">
                  List & test
                </th>
                <th className="border-r-2 border-[var(--color-paper)] bg-[var(--color-signal-green)] p-3 text-[11px] text-[var(--color-ink)]">
                  Per-order
                </th>
                <th className="p-3 text-[11px]">Multi-counter</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_ROWS.map((row, i) => (
                <tr
                  key={row.feature}
                  className={cn(
                    "border-t-2 border-ink",
                    i % 2 === 1 && "bg-[var(--color-paper-2)]",
                  )}
                >
                  <td className="border-r-2 border-ink p-3 font-bold">
                    {row.feature}
                  </td>
                  <td className="border-r-2 border-ink p-3 tabular-nums">
                    {row.list}
                  </td>
                  <td className="border-r-2 border-ink bg-[var(--color-signal-green)]/30 p-3 font-bold tabular-nums">
                    {row.per}
                  </td>
                  <td className="p-3 tabular-nums">{row.studio}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* small FAQ */}
      <Section className="bg-[var(--color-paper-2)] border-t-2 border-ink">
        <KickerLabel tone="green">price questions</KickerLabel>
        <div className="mt-6 grid grid-cols-1 gap-0 md:grid-cols-2">
          {[
            {
              q: "When do I actually pay?",
              a: "Only after a delivered order. The 5% is netted off the payout — no separate invoice.",
            },
            {
              q: "What about refunds?",
              a: "Refunded orders aren't billed. If we already collected the 5%, it's reversed in the next payout.",
            },
            {
              q: "Can I pause my shop?",
              a: "Yes. Set hours to closed from your phone. No order will route to you while you're closed.",
            },
            {
              q: "Is there a free trial?",
              a: "The List & test plan is free forever. There's nothing to trial — just start, take a real order, then decide if Per-order is right.",
            },
          ].map((row, i) => (
            <div
              key={row.q}
              className={cn(
                "flex flex-col gap-2 border-2 border-ink p-5 -ml-[2px] -mt-[2px]",
                i % 2 === 0
                  ? "bg-[var(--color-paper)]"
                  : "bg-[var(--color-paper-3)]",
              )}
            >
              <h3 className="text-[14px] font-bold uppercase tracking-wider">
                Q. {row.q}
              </h3>
              <p className="text-[13px] leading-relaxed">A. {row.a}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
