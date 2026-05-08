import Stamp from "@/components/ui/Stamp";
import KickerLabel from "@/components/ui/KickerLabel";
import { VENDOR_TESTIMONIALS } from "@/data/testimonials";
import { cn } from "@/lib/cn";

const STATS = [
  { n: "0", unit: "vendor apps to install", caption: "ever, in any plan" },
  { n: "T+1", unit: "payout cadence", caption: "money in your bank, next day" },
  { n: "5%", unit: "per delivered order", caption: "the only line on our invoice" },
];

export function ChapterProof() {
  return (
    <section className="flex h-full w-full flex-col">
      <div className="flex items-center justify-between border-b-2 border-ink px-6 py-3 text-[10px] font-bold uppercase tracking-[0.2em] md:px-12">
        <Stamp tone="ink">CHAPTER 07</Stamp>
        <span>FOLIO 07 / 09 · STATS + VOICES</span>
      </div>

      <div className="flex-1 overflow-y-auto p-6 md:p-10">
        <div className="mx-auto max-w-[1280px]">
          <KickerLabel tone="green">proof</KickerLabel>
          <h2 className="mt-2 font-mono text-[28px] leading-tight md:text-[44px]">
            Numbers we'll keep our word on. <br />
            Voices that already use it.
          </h2>

          {/* stats */}
          <div className="mt-8 grid grid-cols-1 gap-0 md:grid-cols-3">
            {STATS.map((s, i) => (
              <div
                key={i}
                className={cn(
                  "border-2 border-ink p-6 -ml-[2px] -mt-[2px]",
                  i === 1
                    ? "bg-[var(--color-ink)] text-[var(--color-paper)]"
                    : "bg-[var(--color-paper)]",
                )}
              >
                <div className="font-mono text-[64px] font-bold leading-none md:text-[88px]">
                  {s.n}
                </div>
                <div className="mt-2 text-[12px] font-bold uppercase tracking-widest">
                  {s.unit}
                </div>
                <div
                  className={cn(
                    "mt-1 text-[12px]",
                    i === 1
                      ? "text-[var(--color-paper)]/70"
                      : "text-[var(--color-ink-mute)]",
                  )}
                >
                  {s.caption}
                </div>
              </div>
            ))}
          </div>

          {/* testimonials in ledger style */}
          <div className="mt-12 border-2 border-ink">
            <div className="flex items-center justify-between border-b-2 border-ink bg-[var(--color-paper-2)] px-4 py-2 text-[10px] font-bold uppercase tracking-widest">
              <span>FIELD NOTES · VENDOR VOICES</span>
              <span>RECORDED 2026</span>
            </div>
            <ul className="divide-y-2 divide-[var(--color-ink)]">
              {VENDOR_TESTIMONIALS.slice(0, 3).map((t, i) => (
                <li
                  key={i}
                  className="grid grid-cols-1 gap-2 p-4 md:grid-cols-[140px_1fr_180px] md:gap-6"
                >
                  <div className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-ink-mute)]">
                    NOTE / {String(i + 1).padStart(2, "0")}
                  </div>
                  <blockquote className="text-[13px] italic leading-relaxed">
                    "{t.quote}"
                  </blockquote>
                  <div className="text-right text-[11px] uppercase tracking-widest">
                    <div className="font-bold">{t.author}</div>
                    <div className="text-[var(--color-ink-mute)]">
                      {t.role} · {t.location}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChapterProof;
