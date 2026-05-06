import type { HTMLAttributes, PropsWithChildren } from 'react';
import { cn } from '@/lib/utils';
import { Container } from './Container';

type Bg = 'white' | 'soft' | 'ink' | 'brand' | 'accent';

type SectionProps = PropsWithChildren<
  HTMLAttributes<HTMLElement> & {
    bg?: Bg;
    /** Render without the inner container wrapper */
    bare?: boolean;
  }
>;

const bgMap: Record<Bg, string> = {
  white: 'bg-white text-ink-900',
  soft: 'gradient-soft text-ink-900',
  ink: 'bg-ink-50 text-ink-900',
  brand: 'gradient-brand text-white',
  accent: 'gradient-accent text-white',
};

export function Section({
  className,
  bg = 'white',
  bare,
  children,
  ...rest
}: SectionProps) {
  return (
    <section className={cn('section-pad', bgMap[bg], className)} {...rest}>
      {bare ? children : <Container>{children}</Container>}
    </section>
  );
}
