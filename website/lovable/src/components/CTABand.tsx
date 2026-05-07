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
  primaryLabel = "Start selling on Qloqal",
  primaryTo = "/vendors",
  secondaryLabel = "Or download the customer app",
  secondaryTo = "/customers",
}: Props) {
  return (
    <section className="container-pad mx-auto max-w-7xl py-16">
      <div className="rounded-3xl bg-brand-green text-ink p-10 md:p-16 relative overflow-hidden">
        <div aria-hidden className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-brand-blue/15 blur-3xl" />
        <h2 className="font-display font-extrabold text-3xl md:text-5xl max-w-3xl leading-tight relative">{title}</h2>
        {subtitle && <p className="mt-4 text-ink/80 text-lg max-w-2xl relative">{subtitle}</p>}
        <div className="mt-8 flex flex-wrap items-center gap-5 relative">
          <Link to={primaryTo} data-cta="ctaband-primary" className="bg-ink text-white font-semibold rounded-xl px-5 py-3.5 hover:bg-brand-blue-dark transition">
            {primaryLabel}
          </Link>
          <Link to={secondaryTo} data-cta="ctaband-secondary" className="text-ink underline underline-offset-4 font-semibold">
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
