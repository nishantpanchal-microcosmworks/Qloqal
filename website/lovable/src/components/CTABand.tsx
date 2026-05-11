import { Link } from "@tanstack/react-router";

type Props = {
  title: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryTo?: string;
  secondaryLabel?: string;
  secondaryTo?: string;
};

export function CTABand({
  title,
  subtitle,
  primaryLabel = "I run a shop",
  primaryTo = "/vendors",
  secondaryLabel = "I'm a shopper",
  secondaryTo = "/customers",
}: Props) {
  return (
    <section className="bg-gradient-to-br from-brand-blue to-brand-blue-dark text-white relative overflow-hidden">
      <div aria-hidden className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-brand-green/15 blur-3xl" />
      <div aria-hidden className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
      <div className="container-pad mx-auto max-w-7xl py-16 md:py-24 text-center relative">
        <h2 className="font-display font-extrabold text-3xl md:text-5xl max-w-3xl mx-auto leading-tight">{title}</h2>
        {subtitle && <p className="mt-4 text-white/80 text-lg max-w-2xl mx-auto">{subtitle}</p>}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link to={secondaryTo} data-cta="ctaband-secondary" className="bg-white text-brand-blue font-semibold rounded-xl px-7 py-3.5 hover:bg-brand-blue-soft transition shadow-soft">
            {secondaryLabel}
          </Link>
          <Link to={primaryTo} data-cta="ctaband-primary" className="bg-brand-green text-ink font-semibold rounded-xl px-7 py-3.5 hover:bg-brand-green-dark transition shadow-soft">
            {primaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
