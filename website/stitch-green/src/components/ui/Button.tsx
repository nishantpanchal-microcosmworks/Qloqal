import { forwardRef } from "react";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "dark";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-wide transition-transform duration-200 disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-2 focus-visible:outline-secondary focus-visible:outline-offset-2";

const variantClass: Record<Variant, string> = {
  primary: "glow-gradient text-on-primary shadow-lg hover:scale-105",
  secondary:
    "border-[1.5px] border-secondary text-secondary hover:bg-secondary/5",
  ghost:
    "text-on-surface-variant hover:text-primary hover:bg-surface-container",
  dark: "bg-on-surface text-surface hover:bg-on-surface/90",
};

const sizeClass: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-2.5 text-sm",
  lg: "px-8 py-4 text-base",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

type ButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { to?: never };

type LinkProps = CommonProps & {
  to: string;
  external?: boolean;
};

type Props = ButtonProps | LinkProps;

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, Props>(
  function Button(props, ref) {
    const { variant = "primary", size = "lg", className, children } = props;
    const classes = cn(base, variantClass[variant], sizeClass[size], className);

    if ("to" in props && props.to) {
      const { to, external } = props;
      if (external) {
        return (
          <a
            ref={ref as React.Ref<HTMLAnchorElement>}
            href={to}
            target="_blank"
            rel="noreferrer noopener"
            className={classes}
          >
            {children}
          </a>
        );
      }
      return (
        <Link
          ref={ref as React.Ref<HTMLAnchorElement>}
          to={to}
          className={classes}
        >
          {children}
        </Link>
      );
    }

    const { ...rest } = props as ButtonHTMLAttributes<HTMLButtonElement>;
    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={classes}
        {...rest}
      >
        {children}
      </button>
    );
  },
);
