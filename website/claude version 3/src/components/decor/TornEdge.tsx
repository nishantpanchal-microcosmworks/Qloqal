import { cn } from "@/lib/cn";

export function TornEdge({ className, color = "var(--color-surface)" }: { className?: string; color?: string }) {
  return (
    <svg
      viewBox="0 0 600 24"
      preserveAspectRatio="none"
      className={cn("block w-full h-6", className)}
      aria-hidden
    >
      <path
        d="M0 0 L 0 14 L 20 8 L 40 16 L 60 6 L 80 18 L 100 10 L 130 20 L 160 8 L 190 16 L 220 6 L 250 18 L 280 9 L 310 20 L 340 7 L 370 17 L 400 9 L 430 19 L 460 7 L 490 18 L 520 8 L 550 20 L 580 10 L 600 18 L 600 0 Z"
        fill={color}
      />
    </svg>
  );
}
