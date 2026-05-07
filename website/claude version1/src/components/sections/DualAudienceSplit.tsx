import { ShoppingBag, Store, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Section } from '@/components/ui/Section';
import { SectionHeader } from './SectionHeader';

export function DualAudienceSplit() {
  return (
    <Section bg="white">
      <SectionHeader
        eyebrow="Two sides, one platform"
        title="Whether you shop or sell — Qloqal works for you."
        subtitle="Built deliberately for both shoppers and kiranas. Pick your side."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:gap-8">
        <Link
          to="/customers"
          className="group relative overflow-hidden rounded-card bg-brand-50 p-8 transition-all hover:-translate-y-0.5 hover:shadow-glow md:p-10"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-brand-500/10 blur-2xl"
          />
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl gradient-brand text-white">
            <ShoppingBag size={28} />
          </div>
          <h3 className="mt-6 font-display text-2xl font-bold text-ink-900 md:text-3xl">
            For Shoppers
          </h3>
          <p className="mt-3 text-base leading-relaxed text-ink-700">
            Find every kirana around you. Order in seconds. Pay with UPI. Track in real time.
          </p>
          <span className="mt-6 inline-flex items-center gap-2 font-semibold text-brand-600 group-hover:text-brand-700">
            Explore as a shopper
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </span>
        </Link>

        <Link
          to="/vendors"
          className="group relative overflow-hidden rounded-card bg-accent-50 p-8 transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(16,185,129,0.25)] md:p-10"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-accent-500/10 blur-2xl"
          />
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl gradient-accent text-white">
            <Store size={28} />
          </div>
          <h3 className="mt-6 font-display text-2xl font-bold text-ink-900 md:text-3xl">
            For Kiranas
          </h3>
          <p className="mt-3 text-base leading-relaxed text-ink-700">
            Customers find your kirana. Orders come to your phone. You stay in control.
          </p>
          <span className="mt-6 inline-flex items-center gap-2 font-semibold text-accent-700 group-hover:text-accent-800">
            Sell as a kirana
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </span>
        </Link>
      </div>
    </Section>
  );
}
