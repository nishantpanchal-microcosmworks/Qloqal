import { CHAPTERS } from "@/data/chapters";
import { cn } from "@/lib/cn";

type Props = {
  activeIndex: number;
  onJump: (index: number) => void;
};

export function ChapterRail({ activeIndex, onJump }: Props) {
  return (
    <div
      className="border-b-2 border-ink bg-[var(--color-paper)]"
      role="tablist"
      aria-label="Chapter navigation"
    >
      <div className="mx-auto flex max-w-[1280px] items-center gap-1 overflow-x-auto px-4 py-2 md:px-8">
        <span className="mr-2 shrink-0 text-[10px] font-bold uppercase tracking-[0.24em] text-[var(--color-ink-mute)]">
          INDEX ▌
        </span>
        {CHAPTERS.map((c, i) => {
          const active = i === activeIndex;
          return (
            <button
              key={c.id}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => onJump(i)}
              className={cn(
                "shrink-0 border-2 border-ink px-2 py-1 text-[10px] font-bold uppercase tracking-[0.16em] no-underline",
                active
                  ? "bg-[var(--color-ink)] text-[var(--color-paper)]"
                  : "bg-[var(--color-paper)] text-[var(--color-ink)] hover:bg-[var(--color-signal-yellow)]",
              )}
              data-cta={`chapter-jump-${c.id}`}
            >
              [ {c.index} ] {c.label}
            </button>
          );
        })}
      </div>
      <div className="mx-auto h-1 max-w-[1280px] border-t-2 border-ink">
        <div
          className="h-full bg-[var(--color-signal-green)] transition-[width] duration-300"
          style={{
            width: `${((activeIndex + 1) / CHAPTERS.length) * 100}%`,
          }}
        />
      </div>
    </div>
  );
}

export default ChapterRail;
