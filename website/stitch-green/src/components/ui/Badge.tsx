import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "neutral" | "success";

const variantClass: Record<Variant, string> = {
  primary: "bg-primary-container/30 text-on-primary-container",
  secondary: "bg-secondary/10 text-secondary",
  neutral: "bg-surface-container text-on-surface-variant",
  success: "bg-primary/10 text-primary",
};

type Props = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

export function Badge({ children, variant = "primary", className }: Props) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider",
        variantClass[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
