import Stamp from "@/components/ui/Stamp";
import KickerLabel from "@/components/ui/KickerLabel";
import { WHY_WHATSAPP } from "@/data/whyWhatsApp";
import { cn } from "@/lib/cn";

export function ChapterWhyWhatsApp() {
  return (
    <section className="flex h-full w-full flex-col">
      <div className="flex items-center justify-between border-b-2 border-ink px-6 py-3 text-[10px] font-bold uppercase tracking-[0.2em] md:px-12">
        <Stamp tone="ink">CHAPTER 06</Stamp>
        <span>FOLIO 06 / 09 · WHY WHATSAPP</span>
      </div>

      <div className="flex-1 overflow-y-auto p-6 md:p-10">
        <div className="mx-auto max-w-[1280px]">
          <KickerLabel tone="green">why we built this on chat</KickerLabel>
          <h2 className="mt-2 font-mono text-[28px] leading-tight md:text-[44px]">
            Six reasons. <br /> All of them obvious in hindsight.
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-0 md:grid-cols-3">
            {WHY_WHATSAPP.map((entry, i) => (
              <div
                key={entry.index}
                className={cn(
                  "relative flex flex-col gap-3 border-2 border-ink p-6 -ml-[2px] -mt-[2px]",
                  i === 1 || i === 5
                    ? "bg-[var(--color-signal-green)]"
                    : i === 2 || i === 4
                      ? "bg-[var(--color-paper-2)]"
                      : "bg-[var(--color-paper)]",
                )}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[44px] font-bold leading-none">
                    {entry.index}
                  </span>
                  <span
                    aria-hidden
                    className="hatch-45 h-6 w-12 border-2 border-ink"
                  />
                </div>
                <h3 className="text-[16px] font-bold uppercase tracking-wider">
                  {entry.title}
                </h3>
                <p className="text-[13px] leading-relaxed text-[var(--color-ink-2)]">
                  {entry.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChapterWhyWhatsApp;
