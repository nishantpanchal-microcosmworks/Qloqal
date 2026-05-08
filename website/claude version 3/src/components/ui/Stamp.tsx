import { cn } from "@/lib/cn";

interface StampProps {
  label: string;
  sub?: string;
  className?: string;
  rotate?: "l" | "r";
  tone?: "primary" | "moss" | "ink";
}

export function Stamp({ label, sub, className, rotate = "l", tone = "primary" }: StampProps) {
  const colors = {
    primary: "border-[var(--color-primary)] text-[var(--color-primary)]",
    moss: "border-[var(--color-secondary)] text-[var(--color-secondary)]",
    ink: "border-[var(--color-ink)] text-[var(--color-ink)]",
  } as const;

  return (
    <div
      className={cn(
        "inline-flex flex-col items-center justify-center rounded-full border-2 border-dashed text-center select-none",
        "h-24 w-24 font-mono text-[10px] tracking-[0.18em] uppercase",
        colors[tone],
        rotate === "l" ? "stamp-rotate-l" : "stamp-rotate-r",
        className,
      )}
    >
      <span className="font-semibold leading-tight px-2">{label}</span>
      {sub ? <span className="text-[9px] opacity-70 mt-1">{sub}</span> : null}
    </div>
  );
}
