import { cn } from '@/lib/utils';

type LogoProps = {
  variant?: 'default' | 'white';
  className?: string;
};

export function Logo({ variant = 'default', className }: LogoProps) {
  const isWhite = variant === 'white';
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 font-display font-extrabold tracking-tight text-xl md:text-2xl',
        isWhite ? 'text-white' : 'text-ink-900',
        className,
      )}
    >
      <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-lg gradient-brand text-white text-sm font-extrabold md:h-8 md:w-8 md:text-base">
        Q
        <span className="absolute -right-1 -bottom-1 h-2.5 w-2.5 rounded-full bg-accent-500 ring-2 ring-white" />
      </span>
      Qloqal
    </span>
  );
}
