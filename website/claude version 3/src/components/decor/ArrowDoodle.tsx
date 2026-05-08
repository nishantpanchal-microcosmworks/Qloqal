import { cn } from "@/lib/cn";

export function ArrowDoodle({
  className,
  color = "var(--color-primary)",
  flip,
}: {
  className?: string;
  color?: string;
  flip?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 120 80"
      className={cn("w-24 h-16", flip && "scale-x-[-1]", className)}
      aria-hidden
    >
      <path
        d="M6 10 C 30 6, 60 30, 70 50"
        fill="none"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M58 38 L70 50 L58 60"
        fill="none"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
