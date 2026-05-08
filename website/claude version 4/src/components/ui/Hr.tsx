import { cn } from "@/lib/cn";

type Props = {
  variant?: "solid" | "dotted" | "dashed" | "ascii" | "double";
  className?: string;
  label?: string;
};

export function Hr({ variant = "solid", className, label }: Props) {
  if (variant === "ascii") {
    return (
      <div
        aria-hidden
        className={cn(
          "select-none overflow-hidden whitespace-nowrap font-mono text-[12px] leading-none text-[var(--color-ink)]",
          className,
        )}
      >
        {"+ ".concat("─ ".repeat(100))}
      </div>
    );
  }
  if (label) {
    return (
      <div className={cn("flex items-center gap-3", className)}>
        <span
          className={cn(
            "h-0 flex-1 border-t-2 border-[var(--color-ink)]",
            variant === "dotted" && "border-dotted",
            variant === "dashed" && "border-dashed",
            variant === "double" && "border-double border-t-4",
          )}
        />
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-ink-mute)]">
          {label}
        </span>
        <span
          className={cn(
            "h-0 flex-1 border-t-2 border-[var(--color-ink)]",
            variant === "dotted" && "border-dotted",
            variant === "dashed" && "border-dashed",
            variant === "double" && "border-double border-t-4",
          )}
        />
      </div>
    );
  }
  return (
    <hr
      className={cn(
        variant === "dotted" && "border-dotted",
        variant === "dashed" && "border-dashed",
        variant === "double" && "border-t-0 border-b-4 border-double",
        className,
      )}
    />
  );
}

export default Hr;
