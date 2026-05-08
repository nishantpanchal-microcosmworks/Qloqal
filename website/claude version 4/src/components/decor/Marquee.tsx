import { cn } from "@/lib/cn";

type Props = {
  items: string[];
  className?: string;
  fill?: "ink" | "green" | "yellow" | "paper";
};

const fills = {
  ink: "bg-[var(--color-ink)] text-[var(--color-paper)]",
  green: "bg-[var(--color-signal-green)] text-[var(--color-ink)]",
  yellow: "bg-[var(--color-signal-yellow)] text-[var(--color-ink)]",
  paper: "bg-[var(--color-paper)] text-[var(--color-ink)]",
};

export function Marquee({ items, className, fill = "ink" }: Props) {
  const doubled = [...items, ...items];
  return (
    <div
      className={cn(
        "border-y-2 border-ink overflow-hidden",
        fills[fill],
        className,
      )}
      aria-hidden
    >
      <div className="marquee-track flex w-max items-center gap-8 whitespace-nowrap py-2 text-[13px] font-bold uppercase tracking-[0.16em]">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-8">
            <span>{item}</span>
            <span aria-hidden>·</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default Marquee;
