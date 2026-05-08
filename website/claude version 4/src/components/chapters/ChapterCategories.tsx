import Stamp from "@/components/ui/Stamp";
import KickerLabel from "@/components/ui/KickerLabel";
import { CATEGORIES } from "@/data/categories";
import { cn } from "@/lib/cn";

export function ChapterCategories() {
  return (
    <section className="flex h-full w-full flex-col">
      <div className="flex items-center justify-between border-b-2 border-ink px-6 py-3 text-[10px] font-bold uppercase tracking-[0.2em] md:px-12">
        <Stamp tone="ink">CHAPTER 05</Stamp>
        <span>FOLIO 05 / 09 · WHO IT'S FOR</span>
      </div>

      <div className="flex-1 overflow-y-auto p-6 md:p-10">
        <div className="mx-auto max-w-[1280px]">
          <KickerLabel tone="green">use cases</KickerLabel>
          <h2 className="mt-2 font-mono text-[28px] leading-tight md:text-[44px]">
            If it has a counter, <br /> it can run on Qloqal.
          </h2>

          <div className="mt-8 grid grid-cols-2 gap-0 md:grid-cols-5">
            {CATEGORIES.map((cat, i) => (
              <div
                key={cat.id}
                className={cn(
                  "group relative flex flex-col gap-2 border-2 border-ink p-4 -ml-[2px] -mt-[2px]",
                  // alternating fills for zine rhythm
                  i % 5 === 1 || i % 5 === 3
                    ? "bg-[var(--color-paper)]"
                    : "bg-[var(--color-paper-2)]",
                  i % 7 === 2 && "bg-[var(--color-signal-yellow)]",
                  i % 7 === 5 && "bg-[var(--color-signal-green)]",
                )}
              >
                <span
                  aria-hidden
                  className="text-[36px] leading-none text-[var(--color-ink)]"
                >
                  {cat.glyph}
                </span>
                <span className="text-[14px] font-bold uppercase tracking-wider">
                  {cat.label}
                </span>
                <span className="text-[11px] leading-snug text-[var(--color-ink-2)]">
                  {cat.blurb}
                </span>
                <span className="mt-auto text-[10px] uppercase tracking-[0.2em] text-[var(--color-ink-mute)]">
                  · cat. {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            ))}
          </div>

          <p className="mt-6 max-w-[60ch] text-[12px] uppercase tracking-widest text-[var(--color-ink-mute)]">
            * Qloqal is not a food-delivery platform. It is a vendor operating
            system that fits any counter.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ChapterCategories;
