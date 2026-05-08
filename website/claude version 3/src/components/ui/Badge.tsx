import { cn } from "@/lib/cn";

type Tone = "neutral" | "primary" | "moss" | "mustard";

const tones: Record<Tone, string> = {
  neutral: "bg-[var(--color-surface-container)] text-[var(--color-on-surface-variant)] border-[var(--color-outline-variant)]",
  primary: "bg-[var(--color-primary-container)] text-[var(--color-on-primary-container)] border-[var(--color-primary-container)]",
  moss: "bg-[var(--color-secondary-container)] text-[var(--color-on-secondary-container)] border-[var(--color-secondary-container)]",
  mustard: "bg-[var(--color-mustard)]/15 text-[var(--color-mustard)] border-[var(--color-mustard)]/30",
};

export function Badge({
  children,
  tone = "neutral",
  className,
}: {
  children: React.ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
