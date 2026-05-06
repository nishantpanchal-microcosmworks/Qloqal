import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { Container } from '@/components/ui/Container';

type HeroProps = {
  eyebrow?: ReactNode;
  title: ReactNode;
  subtitle?: ReactNode;
  actions?: ReactNode;
  visual?: ReactNode;
  variant?: 'brand' | 'accent' | 'plain';
  className?: string;
};

export function Hero({
  eyebrow,
  title,
  subtitle,
  actions,
  visual,
  variant = 'plain',
  className,
}: HeroProps) {
  const isPlain = variant === 'plain';
  const isAccent = variant === 'accent';
  const isBrand = variant === 'brand';

  return (
    <section
      className={cn(
        'relative overflow-hidden',
        isPlain && 'gradient-soft',
        isBrand && 'gradient-brand text-white',
        isAccent && 'gradient-accent text-white',
        className,
      )}
    >
      {!isPlain ? (
        <>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.4), transparent 40%), radial-gradient(circle at 80% 30%, rgba(255,255,255,0.3), transparent 40%)',
            }}
          />
        </>
      ) : null}

      <Container className="relative py-16 md:py-24 lg:py-28">
        <div
          className={cn(
            'grid gap-10 lg:gap-16',
            visual ? 'lg:grid-cols-2 lg:items-center' : '',
          )}
        >
          <div className="max-w-2xl">
            {eyebrow ? (
              <div
                className={cn(
                  'mb-5 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold',
                  isPlain ? 'bg-brand-50 text-brand-700' : 'bg-white/15 text-white',
                )}
              >
                {eyebrow}
              </div>
            ) : null}

            <h1
              className={cn(
                'font-display text-4xl font-extrabold leading-[1.05] text-balance md:text-6xl lg:text-7xl',
                isPlain && 'text-ink-900',
              )}
            >
              {title}
            </h1>

            {subtitle ? (
              <p
                className={cn(
                  'mt-5 text-lg leading-relaxed md:mt-6 md:text-xl',
                  isPlain ? 'text-ink-700' : 'text-white/90',
                )}
              >
                {subtitle}
              </p>
            ) : null}

            {actions ? (
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                {actions}
              </div>
            ) : null}
          </div>

          {visual ? <div className="lg:pl-8">{visual}</div> : null}
        </div>
      </Container>
    </section>
  );
}
