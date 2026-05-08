import { cn } from "@/lib/cn";

type Props = {
  size?: number;
  tone?: "ink" | "green" | "blue" | "yellow";
  className?: string;
};

const tones = {
  ink: "bg-[var(--color-ink)]",
  green: "bg-[var(--color-signal-green)]",
  blue: "bg-[var(--color-signal-blue)]",
  yellow: "bg-[var(--color-signal-yellow)]",
};

export function BlockMark({ size = 12, tone = "green", className }: Props) {
  return (
    <span
      aria-hidden
      style={{ width: size, height: size }}
      className={cn(
        "inline-block flex-shrink-0 border-2 border-ink",
        tones[tone],
        className,
      )}
    />
  );
}

export default BlockMark;
