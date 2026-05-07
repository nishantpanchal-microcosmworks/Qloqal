import type { HTMLAttributes, PropsWithChildren } from 'react';
import { cn } from '@/lib/utils';

type Variant = 'default' | 'brand' | 'accent' | 'outline';

type CardProps = PropsWithChildren<
  HTMLAttributes<HTMLDivElement> & {
    variant?: Variant;
    interactive?: boolean;
  }
>;

const variantMap: Record<Variant, string> = {
  default: 'bg-white border border-ink-300/60 shadow-soft',
  brand: 'bg-brand-50 border border-brand-100',
  accent: 'bg-accent-50 border border-accent-100',
  outline: 'bg-white border-2 border-ink-300/60',
};

export function Card({
  variant = 'default',
  interactive,
  className,
  children,
  ...rest
}: CardProps) {
  return (
    <div
      className={cn(
        'rounded-card p-6 md:p-8',
        variantMap[variant],
        interactive && 'transition-all hover:shadow-glow hover:-translate-y-0.5',
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
