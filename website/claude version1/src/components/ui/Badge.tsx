import type { PropsWithChildren } from 'react';
import { cn } from '@/lib/utils';

type Variant = 'brand' | 'accent' | 'neutral' | 'success';

type BadgeProps = PropsWithChildren<{
  variant?: Variant;
  className?: string;
}>;

const variantMap: Record<Variant, string> = {
  brand: 'bg-brand-50 text-brand-700 border border-brand-100',
  accent: 'bg-accent-50 text-accent-700 border border-accent-100',
  neutral: 'bg-ink-100 text-ink-700 border border-ink-300/60',
  success: 'bg-accent-500 text-white',
};

export function Badge({ variant = 'neutral', className, children }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold',
        variantMap[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
