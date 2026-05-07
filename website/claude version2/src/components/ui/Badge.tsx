import { ReactNode } from 'react';

type Tone = 'green' | 'blue' | 'neutral';

export default function Badge({
  children,
  tone = 'green',
  className = '',
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  const tones: Record<Tone, string> = {
    green: 'bg-brand-green-soft text-brand-green-dark',
    blue: 'bg-brand-blue-soft text-brand-blue',
    neutral: 'bg-surface text-ink',
  };
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${tones[tone]} ${className}`}>
      {children}
    </span>
  );
}
