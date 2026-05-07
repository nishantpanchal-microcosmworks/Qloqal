import Seo from '../components/seo/Seo';
import Section from '../components/ui/Section';
import SectionHeader from '../components/sections/SectionHeader';
import { Check } from 'lucide-react';
import { ButtonLink } from '../components/ui/Button';
import { faqs } from '../data/faqs';
import FAQAccordion from '../components/sections/FAQAccordion';

const customerPerks = ['Free to download', 'Free to use, always', 'No hidden fees', 'No subscription'];
const vendorPerks = [
  'Free to list your shop',
  'No setup fee',
  'No monthly minimum',
  'Pay only when you get a delivered order',
  'Transparent commission, starting at 5%',
];

const paymentFaqs = faqs.find((g) => g.group === 'Payments')?.items ?? [];

export default function Pricing() {
  return (
    <>
      <Seo
        title="Pricing — Qloqal"
        description="Simple, transparent pricing. Free for customers, free to list for shops. Pay only on delivered orders."
        canonical="/pricing"
      />

      <Section tone="white">
        <SectionHeader
          eyebrow="Pricing"
          title="Simple. Transparent. Fair."
          subtitle="No setup fees. No tablet rentals. No surprise charges."
        />
      </Section>

      <Section tone="surface" className="!pt-0">
        <div className="mx-auto grid max-w-4xl gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border-2 border-brand-blue/30 bg-white p-8 shadow-soft">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-blue">For customers</p>
            <h3 className="mt-2 font-display text-3xl font-extrabold text-ink">Free. Always.</h3>
            <p className="mt-2 text-sm text-muted">You only pay for what you order from the shop.</p>
            <ul className="mt-6 grid gap-2">
              {customerPerks.map((p, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-ink">
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-brand-green text-ink"><Check size={12} strokeWidth={3} /></span>
                  {p}
                </li>
              ))}
            </ul>
            <ButtonLink to="/customers" variant="secondary" size="md" data-cta="pricing-get-app" className="mt-8">
              Get the app
            </ButtonLink>
          </div>

          <div className="rounded-2xl border-2 border-brand-green bg-white p-8 shadow-card">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-green-dark">For vendors</p>
            <h3 className="mt-2 font-display text-3xl font-extrabold text-ink">Free to list. Pay on orders.</h3>
            <p className="mt-2 text-sm text-muted">Starting at 5% per delivered order. That is it.</p>
            <ul className="mt-6 grid gap-2">
              {vendorPerks.map((p, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-ink">
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-brand-green text-ink"><Check size={12} strokeWidth={3} /></span>
                  {p}
                </li>
              ))}
            </ul>
            <ButtonLink to="/vendors" variant="primary" size="md" data-cta="pricing-start-selling" className="mt-8">
              Start selling on Qloqal
            </ButtonLink>
          </div>
        </div>
      </Section>

      <Section tone="white">
        <SectionHeader eyebrow="Common questions" title="Pricing & payouts." />
        <div className="mx-auto mt-10 max-w-3xl">
          <FAQAccordion items={paymentFaqs} />
        </div>
      </Section>
    </>
  );
}
