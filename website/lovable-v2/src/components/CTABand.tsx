import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

type Props = {
  title: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryTo?: string;
  primaryHash?: string;
};

export function CTABand({
  title,
  subtitle,
  primaryLabel = "Start a shop",
  primaryTo = "/product",
  primaryHash = "signup",
}: Props) {
  return (
    <section className="teal-panel relative overflow-hidden">
      <div aria-hidden className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-brand-green/15 blur-3xl" />
      <div aria-hidden className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-brand-blue/10 blur-3xl" />
      <div className="container-pad mx-auto max-w-5xl py-20 md:py-28 text-center relative">
        <h2 className="font-display font-semibold text-white text-[clamp(2.25rem,5vw,4rem)] leading-[1.05] tracking-tight">
          {title}
        </h2>
        {subtitle && <p className="mt-5 text-white/75 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">{subtitle}</p>}
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Link
            to={primaryTo}
            hash={primaryHash}
            data-cta="ctaband-primary"
            className="inline-flex items-center gap-2 bg-brand-green text-ink font-semibold rounded-md px-6 py-3.5 hover:bg-white transition shadow-soft"
          >
            {primaryLabel} <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/pricing" className="inline-flex items-center text-white/85 hover:text-white font-medium px-3 py-3 underline underline-offset-4">
            See pricing
          </Link>
        </div>
      </div>
    </section>
  );
}
