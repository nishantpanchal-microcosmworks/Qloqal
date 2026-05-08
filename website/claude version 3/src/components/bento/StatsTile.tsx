import { BentoTile } from "@/components/ui/BentoTile";

const STATS = [
  { value: "5,200+", label: "small shops, in 38 countries" },
  { value: "63%", label: "of orders arrive in the chat" },
  { value: "11 min", label: "average time to first sale" },
];

export function StatsTile() {
  return (
    <BentoTile tone="ink" span="lg:col-span-4 lg:min-h-[480px]" className="flex flex-col justify-between">
      <span className="kicker text-[var(--color-mustard)]">by the numbers</span>
      <div className="space-y-5 mt-4">
        {STATS.map((s) => (
          <div key={s.value} className="border-b border-[var(--color-surface)]/10 pb-4 last:border-b-0 last:pb-0">
            <div className="font-display text-3xl lg:text-4xl text-[var(--color-surface)]">{s.value}</div>
            <div className="text-xs text-[var(--color-surface)]/70 mt-1">{s.label}</div>
          </div>
        ))}
      </div>
    </BentoTile>
  );
}
