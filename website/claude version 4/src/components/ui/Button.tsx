import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "danger" | "fill-green";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-bold uppercase tracking-[0.08em] " +
  "border-2 border-ink transition-all duration-100 select-none " +
  "active:translate-x-[2px] active:translate-y-[2px] active:shadow-none " +
  "disabled:opacity-50 disabled:cursor-not-allowed";

const variants: Record<Variant, string> = {
  primary:
    "bg-[var(--color-ink)] text-[var(--color-paper)] " +
    "hover:bg-[var(--color-paper)] hover:text-[var(--color-ink)] " +
    "shadow-[4px_4px_0_var(--color-ink)] hover:shadow-[2px_2px_0_var(--color-ink)]",
  secondary:
    "bg-[var(--color-paper)] text-[var(--color-ink)] " +
    "hover:bg-[var(--color-ink)] hover:text-[var(--color-paper)] " +
    "shadow-[4px_4px_0_var(--color-ink)] hover:shadow-[2px_2px_0_var(--color-ink)]",
  "fill-green":
    "bg-[var(--color-signal-green)] text-[var(--color-ink)] " +
    "hover:bg-[var(--color-ink)] hover:text-[var(--color-signal-green)] " +
    "shadow-[4px_4px_0_var(--color-ink)] hover:shadow-[2px_2px_0_var(--color-ink)]",
  ghost:
    "bg-transparent text-[var(--color-ink)] border-transparent underline " +
    "hover:bg-[var(--color-ink)] hover:text-[var(--color-paper)] hover:no-underline",
  danger:
    "bg-[var(--color-signal-red)] text-[var(--color-paper)] " +
    "hover:bg-[var(--color-ink)]",
};

const sizes: Record<Size, string> = {
  sm: "text-[11px] px-3 py-2",
  md: "text-[13px] px-4 py-3",
  lg: "text-[14px] px-6 py-4",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  to?: string;
  href?: string;
  children: ReactNode;
  className?: string;
  trailing?: ReactNode;
  "data-cta"?: string;
};

export function Button(
  props: CommonProps & ButtonHTMLAttributes<HTMLButtonElement>,
) {
  const {
    variant = "primary",
    size = "md",
    to,
    href,
    className,
    children,
    trailing,
    "data-cta": dataCta,
    ...rest
  } = props;

  const cls = cn(base, variants[variant], sizes[size], className);

  if (to) {
    return (
      <Link to={to} className={cls} data-cta={dataCta}>
        <span>{children}</span>
        {trailing ?? <span aria-hidden>→</span>}
      </Link>
    );
  }
  if (href) {
    return (
      <a
        href={href}
        className={cls}
        target="_blank"
        rel="noreferrer"
        data-cta={dataCta}
      >
        <span>{children}</span>
        {trailing ?? <span aria-hidden>↗</span>}
      </a>
    );
  }
  return (
    <button {...rest} data-cta={dataCta} className={cls}>
      <span>{children}</span>
      {trailing ?? <span aria-hidden>→</span>}
    </button>
  );
}

export default Button;
