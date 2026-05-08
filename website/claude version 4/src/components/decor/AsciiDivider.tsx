import { cn } from "@/lib/cn";

type Props = {
  variant?: "line" | "ticks" | "stars";
  className?: string;
};

export function AsciiDivider({ variant = "line", className }: Props) {
  const charset =
    variant === "ticks"
      ? " | "
      : variant === "stars"
        ? " * "
        : " ─ ";
  const repeated = charset.repeat(160);
  return (
    <div
      aria-hidden
      className={cn(
        "select-none overflow-hidden whitespace-nowrap py-1 font-mono text-[10px] leading-none text-[var(--color-ink-mute)]",
        className,
      )}
    >
      {repeated}
    </div>
  );
}

export default AsciiDivider;
