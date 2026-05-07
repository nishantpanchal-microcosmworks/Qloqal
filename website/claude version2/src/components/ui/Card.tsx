import { ReactNode } from 'react';

type Accent = 'green' | 'blue' | 'none';

export default function Card({
  children,
  accent = 'none',
  className = '',
}: {
  children: ReactNode;
  accent?: Accent;
  className?: string;
}) {
  const border: Record<Accent, string> = {
    green: 'border-brand-green',
    blue: 'border-brand-blue',
    none: 'border-ink/10',
  };
  return (
    <div className={`rounded-2xl border-2 bg-white p-6 shadow-soft ${border[accent]} ${className}`}>
      {children}
    </div>
  );
}
