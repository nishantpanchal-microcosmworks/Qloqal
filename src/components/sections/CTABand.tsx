import type { ReactNode } from 'react';
import { Section } from '@/components/ui/Section';

type CTABandProps = {
  title: ReactNode;
  subtitle?: ReactNode;
  actions: ReactNode;
  variant?: 'brand' | 'accent';
};

export function CTABand({ title, subtitle, actions, variant = 'brand' }: CTABandProps) {
  return (
    <Section bg={variant} className="py-16 md:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-3xl font-bold leading-tight text-balance text-white md:text-4xl lg:text-5xl">
          {title}
        </h2>
        {subtitle ? (
          <p className="mt-4 text-base leading-relaxed text-white/85 md:text-lg">{subtitle}</p>
        ) : null}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
          {actions}
        </div>
      </div>
    </Section>
  );
}
