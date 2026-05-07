import { Link } from 'react-router-dom';

export default function Logo({ className = '' }: { className?: string }) {
  return (
    <Link to="/" className={`inline-flex items-center gap-2 ${className}`} aria-label="Qloqal home">
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-green text-brand-blue font-display text-xl font-extrabold">Q</span>
      <span className="font-display text-xl font-extrabold tracking-tight text-ink">Qloqal</span>
    </Link>
  );
}
