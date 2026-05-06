import { forwardRef } from 'react';
import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'secondary' | 'accent' | 'ghost' | 'white';
type Size = 'sm' | 'md' | 'lg';

const base =
  'inline-flex items-center justify-center gap-2 rounded-btn font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-500 disabled:opacity-60 disabled:cursor-not-allowed select-none';

const variantMap: Record<Variant, string> = {
  primary:
    'bg-brand-500 text-white hover:bg-brand-600 active:bg-brand-700 shadow-glow',
  secondary:
    'bg-white text-brand-600 border border-brand-200 hover:border-brand-500 hover:text-brand-700',
  accent:
    'bg-accent-500 text-white hover:bg-accent-600 active:bg-accent-700 shadow-[0_8px_32px_rgba(16,185,129,0.25)]',
  ghost:
    'bg-transparent text-ink-700 hover:text-ink-900 hover:bg-ink-100',
  white:
    'bg-white text-brand-600 hover:bg-ink-50 shadow-soft',
};

const sizeMap: Record<Size, string> = {
  sm: 'h-10 px-4 text-sm',
  md: 'h-11 px-6 text-base',
  lg: 'h-12 px-7 text-base md:h-14 md:px-8 md:text-lg',
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  children: ReactNode;
  className?: string;
};

type ButtonProps = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'className'>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = 'primary', size = 'md', fullWidth, className, children, ...rest },
  ref,
) {
  return (
    <button
      ref={ref}
      className={cn(
        base,
        variantMap[variant],
        sizeMap[size],
        fullWidth && 'w-full',
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
});

type LinkButtonProps = CommonProps & {
  to: string;
  external?: boolean;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children' | 'className' | 'href'>;

export function LinkButton({
  variant = 'primary',
  size = 'md',
  fullWidth,
  className,
  children,
  to,
  external,
  ...rest
}: LinkButtonProps) {
  const cls = cn(base, variantMap[variant], sizeMap[size], fullWidth && 'w-full', className);

  if (external) {
    return (
      <a href={to} className={cls} target="_blank" rel="noreferrer" {...rest}>
        {children}
      </a>
    );
  }

  return (
    <Link to={to} className={cls}>
      {children}
    </Link>
  );
}
