import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Tone = "paper" | "warm" | "moss" | "terracotta" | "ink" | "image";

const tones: Record<Tone, string> = {
  paper: "bg-[var(--color-surface-container-lowest)] text-[var(--color-on-surface)]",
  warm: "bg-[var(--color-surface-container)] text-[var(--color-on-surface)]",
  moss: "bg-[var(--color-secondary)] text-[var(--color-on-secondary)]",
  terracotta: "bg-[var(--color-primary)] text-[var(--color-on-primary)]",
  ink: "bg-[var(--color-ink)] text-[var(--color-surface)]",
  image: "bg-[var(--color-surface-container-low)] text-[var(--color-on-surface)] overflow-hidden",
};

interface BentoTileProps {
  children: ReactNode;
  tone?: Tone;
  className?: string;
  span?: string;
  as?: "div" | "article" | "section";
  interactive?: boolean;
}

export function BentoTile({
  children,
  tone = "paper",
  className,
  span,
  as: Tag = "article",
  interactive,
}: BentoTileProps) {
  return (
    <Tag
      className={cn(
        "relative rounded-3xl border border-[var(--color-outline-variant)] p-7 lg:p-8",
        "shadow-[0_1px_0_rgba(31,26,19,0.05),0_8px_22px_rgba(31,26,19,0.06)]",
        "transition-transform duration-300",
        interactive && "hover:-translate-y-0.5 hover:shadow-[0_2px_0_rgba(31,26,19,0.06),0_18px_38px_rgba(31,26,19,0.10)]",
        tones[tone],
        span,
        className,
      )}
    >
      {children}
    </Tag>
  );
}
