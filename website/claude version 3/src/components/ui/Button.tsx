import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "ink";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-medium rounded-full transition-[transform,box-shadow,background-color,color] active:translate-y-[1px] focus-visible:outline-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-[var(--color-primary)] text-[var(--color-on-primary)] hover:bg-[var(--color-on-primary-container)] shadow-[0_2px_0_rgba(31,26,19,0.15)]",
  secondary:
    "bg-[var(--color-surface-container-lowest)] text-[var(--color-on-surface)] border border-[var(--color-outline-variant)] hover:border-[var(--color-outline)] hover:bg-[var(--color-surface-container)]",
  ghost:
    "text-[var(--color-on-surface)] hover:bg-[var(--color-surface-container)]",
  ink:
    "bg-[var(--color-ink)] text-[var(--color-surface)] hover:bg-[var(--color-on-surface-variant)]",
};

const sizes: Record<Size, string> = {
  sm: "text-sm px-4 py-2",
  md: "text-[15px] px-5 py-2.5",
  lg: "text-base px-6 py-3",
};

interface ButtonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  ariaLabel?: string;
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  to,
  href,
  onClick,
  type = "button",
  disabled,
  ariaLabel,
}: ButtonProps) {
  const cls = cn(base, variants[variant], sizes[size], disabled && "opacity-60 pointer-events-none", className);

  if (to) {
    return (
      <Link to={to} className={cls} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={cls} aria-label={ariaLabel}>
        {children}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={cls} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
