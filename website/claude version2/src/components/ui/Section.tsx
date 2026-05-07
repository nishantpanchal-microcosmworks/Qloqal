import { ReactNode } from 'react';
import Container from './Container';

type Tone = 'white' | 'surface' | 'green-soft' | 'blue-soft' | 'green';

export default function Section({
  id,
  children,
  tone = 'white',
  className = '',
}: {
  id?: string;
  children: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  const bg: Record<Tone, string> = {
    white: 'bg-white',
    surface: 'bg-surface',
    'green-soft': 'bg-brand-green-soft',
    'blue-soft': 'bg-brand-blue-soft',
    green: 'bg-brand-green text-ink',
  };
  return (
    <section id={id} className={`${bg[tone]} py-16 sm:py-20 lg:py-24 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}
