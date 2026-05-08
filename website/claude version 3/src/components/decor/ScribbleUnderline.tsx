import { cn } from "@/lib/cn";

export function ScribbleUnderline({
  className,
  color = "var(--color-primary)",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      viewBox="0 0 240 14"
      preserveAspectRatio="none"
      className={cn("w-full h-3", className)}
      aria-hidden
    >
      <path
        d="M2 9 C 30 2, 60 12, 100 6 S 170 1, 200 8 S 230 12, 238 6"
        fill="none"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
