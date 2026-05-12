import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, X, ArrowRight, Minus } from "lucide-react";
import { Seo } from "@/components/Seo";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Bleed } from "@/components/layout/Bleed";
import { CTABand } from "@/components/CTABand";

export const Route = createFileRoute("/pricing")({ component: PricingPage });

const cols = [
  { key: "qloqal", name: "Qloqal", tag: "WhatsApp commerce", highlight: true },
  { key: "own", name: "Build your own", tag: "Custom app + dev team" },
  { key: "qcom", name: "Quick-commerce", tag: "Aggregator app + dark stores" },
  { key: "food", name: "Food delivery", tag: "Aggregator + tablet" },
] as const;

type Cell = boolean | "partial" | string;
const rows: { label: string; values: Record<string, Cell> }[] = [
  { label: "Setup fee", values: { qloqal: "$0", own: "$10K+", qcom: "Negotiated", food: "$0" } },
  { label: "Monthly fee", values: { qloqal: "$0", own: "Hosting + dev", qcom: false, food: false } },
  { label: "Tablet / device required", values: { qloqal: false, own: false, qcom: false, food: true } },
  { label: "New app to install on shop's phone", values: { qloqal: false, own: true, qcom: true, food: true } },
  { label: "Owner's existing WhatsApp = the inbox", values: { qloqal: true, own: false, qcom: false, food: false } },
  { label: "Hyperlocal (walking distance) by default", values: { qloqal: true, own: "partial", qcom: false, food: false } },
  { label: "Commission per delivered order", values: { qloqal: "From 5%", own: "0%", qcom: "15–25%", food: "20–35%" } },
  { label: "Settlement to bank account", values: { qloqal: true, own: true, qcom: true, food: true } },
  { label: "Training required for staff", values: { qloqal: false, own: true, qcom: true, food: true } },
  { label: "Time to first live order", values: { qloqal: "~10 minutes", own: "Months", qcom: "Weeks", food: "Days" } },
];

function CellView({ v }: { v: Cell }) {
  if (v === true) return <Check className="h-4 w-4 text-brand-green-dark" aria-label="yes" />;
  if (v === false) return <X className="h-4 w-4 text-muted-ink/60" aria-label="no" />;
  if (v === "partial") return <Minus className="h-4 w-4 text-muted-ink" aria-label="partial" />;
  return <span className="text-sm text-ink font-medium tabular-nums">{v}</span>;
}

function PricingPage() {
  return (
    <>
      <Seo
        title="Pricing — Qloqal"
        description="Free to use for customers. Free to list for vendors. Pay only on delivered orders. Compared to building your own, quick-commerce, and food-delivery aggregators."
      />

      {/* Compact cover */}
      <section className="container-pad mx-auto max-w-5xl pt-20 md:pt-28 pb-10">
        <div className="text-[11px] tracking-[0.2em] uppercase text-brand-green-dark font-semibold">Pricing</div>
        <h1 className="mt-5 font-display font-medium text-ink text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.98] tracking-tight">
          The whole table on one screen.
        </h1>
        <p className="mt-7 text-lg text-muted-ink max-w-2xl leading-relaxed">
          No marketing copy above the fold. Just what it costs, what's included, and how Qloqal stacks against the alternatives the average small shop is considering.
        </p>
      </section>

      {/* The table is the page */}
      <Bleed>
        <section className="bg-cream hairline-t hairline-b">
          <div className="container-pad mx-auto max-w-7xl py-10 md:py-16">
            <div className="overflow-x-auto -mx-1 px-1">
              <table className="w-full min-w-[820px] border-collapse text-left">
                <thead>
                  <tr>
                    <th className="sticky left-0 bg-cream align-bottom pb-5 text-[11px] tracking-[0.2em] uppercase text-muted-ink font-semibold w-1/3">Compared</th>
                    {cols.map(c => (
                      <th key={c.key} className={`pb-5 align-bottom ${c.highlight ? "" : ""}`}>
                        <div className={`rounded-md p-4 ${c.highlight ? "bg-ink text-white" : "bg-white border border-border"}`}>
                          <div className={`text-[10px] tracking-[0.15em] uppercase font-semibold ${c.highlight ? "text-brand-green" : "text-brand-blue-dark"}`}>
                            {c.tag}
                          </div>
                          <div className="mt-1 font-display font-medium text-xl tracking-tight">
                            {c.name}
                          </div>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r, ri) => (
                    <tr key={r.label} className={`${ri > 0 ? "border-t border-border" : ""}`}>
                      <td className="py-4 pr-6 align-top text-ink font-display font-medium text-sm md:text-base sticky left-0 bg-cream">
                        {r.label}
                      </td>
                      {cols.map(c => (
                        <td key={c.key} className={`py-4 pr-4 align-top ${c.highlight ? "bg-white/60" : ""}`}>
                          <CellView v={r.values[c.key]} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td className="pt-8" />
                    {cols.map(c => (
                      <td key={c.key} className="pt-8 pr-4 align-top">
                        {c.highlight ? (
                          <Link to="/product" hash="signup" className="inline-flex items-center gap-2 bg-brand-green text-ink font-semibold rounded-md px-4 py-2.5 text-sm hover:bg-brand-green-dark hover:text-white transition">
                            Start a shop <ArrowRight className="h-3.5 w-3.5" />
                          </Link>
                        ) : (
                          <span className="text-xs text-muted-ink">—</span>
                        )}
                      </td>
                    ))}
                  </tr>
                </tfoot>
              </table>
            </div>

            <p className="mt-8 text-sm text-muted-ink">
              "From 5%" reflects our base commission band. Exact percentage varies by category and delivery model. We never charge a fixed monthly fee.
            </p>
          </div>
        </section>
      </Bleed>

      {/* Pricing FAQ */}
      <section className="container-pad mx-auto max-w-4xl py-20">
        <h2 className="font-display font-medium text-3xl md:text-4xl text-ink tracking-tight">Pricing questions.</h2>
        <div className="mt-8">
          <FAQAccordion items={[
            { q: "When do I get paid?", a: "Settlements run on a regular schedule directly into the bank account on file. Exact cadence depends on your region's payment partner." },
            { q: "What about refunds?", a: "If an order is cancelled or refunded, the corresponding commission is reversed automatically." },
            { q: "Can I pause my shop anytime?", a: "Yes — set your shop to closed in one tap from WhatsApp. New orders simply won't come through until you reopen." },
            { q: "What does Qloqal take?", a: "A small per-order commission, starting at 5%. Exact percentage depends on your category and delivery model. No fixed fees." },
          ]} />
        </div>
      </section>

      <CTABand title="Start free. Pay only when you sell." />
    </>
  );
}
