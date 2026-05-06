import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type SectionHeaderProps = {
  eyebrow?: ReactNode;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: 'left' | 'center';
  light?: boolean;
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl text-left',
        className,
      )}
    >
      {eyebrow ? (
        <div
          className={cn(
            'mb-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider',
            light ? 'bg-white/15 text-white' : 'bg-brand-50 text-brand-700',
          )}
        >
          {eyebrow}
        </div>
      ) : null}
      <h2
        className={cn(
          'font-display text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-5xl text-balance',
          light ? 'text-white' : 'text-ink-900',
        )}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={cn(
            'mt-4 text-base leading-relaxed md:text-lg',
            light ? 'text-white/85' : 'text-ink-700',
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
