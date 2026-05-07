import { ArrowRight, Check, Sparkles } from 'lucide-react';
import { Seo } from '@/components/seo/Seo';
import { Hero } from '@/components/sections/Hero';
import { Section } from '@/components/ui/Section';
import { SectionHeader } from '@/components/sections/SectionHeader';
import { CTABand } from '@/components/sections/CTABand';
import { LinkButton } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { FAQAccordion } from '@/components/sections/FAQAccordion';
import { cn } from '@/lib/utils';
import { pricingTiers } from '@/data/pricing';
import type { FaqItem } from '@/data/faqs';

const pricingFaqs: FaqItem[] = [
  {
    q: 'Is Qloqal really free?',
    a: 'For the first 50 kiranas — yes, free for life. No setup, no subscription, no commission. You will only ever pay your own payment processor (e.g. UPI/Razorpay) standard transaction fees.',
  },
  {
    q: 'What happens after the pilot ends?',
    a: 'Founding kiranas keep Pilot pricing forever. New kiranas joining later will move to a simple, fair Pro plan — published transparently before launch.',
  },
  {
    q: 'Do you take a per-order commission?',
    a: 'No commission for our first 50 kiranas, locked in for life. We will share Pro and Enterprise pricing publicly when those tiers go live — no surprises.',
  },
  {
    q: 'Are there hidden fees?',
    a: 'No. The only deductions on a payout are the standard Razorpay payment-gateway fees (which Razorpay charges on every UPI/card transaction in India). Qloqal itself takes nothing.',
  },
];

export function Pricing() {
  return (
    <>
      <Seo
        title="Pricing — Qloqal"
        description="Free during our pilot. Simple plans when we scale."
        path="/pricing"
      />

      <Hero
        eyebrow={<><Sparkles size={12} /> Pricing</>}
        title="Pricing that grows with your kirana."
        subtitle="Free during our pilot. Simple plans when we scale. Always honest, always transparent."
      />

      <Section bg="white">
        <div className="grid gap-6 lg:grid-cols-3 lg:items-stretch lg:gap-7">
          {pricingTiers.map((t) => (
            <div
              key={t.name}
              className={cn(
                'relative flex h-full flex-col rounded-card border bg-white p-7 md:p-8',
                t.highlighted
                  ? 'border-brand-500 shadow-glow ring-1 ring-brand-500/30'
                  : 'border-ink-300/60 shadow-soft',
              )}
            >
              {t.highlighted ? (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge variant="success">Most popular</Badge>
                </div>
              ) : null}

              <div className="flex items-center justify-between">
                <h3 className="font-display text-2xl font-bold text-ink-900">{t.name}</h3>
                {t.comingSoon ? (
                  <Badge variant="neutral">Coming soon</Badge>
                ) : null}
              </div>

              <div className="mt-4">
                <div className="font-display text-4xl font-extrabold text-ink-900 md:text-5xl">
                  {t.price}
                </div>
                <div className="mt-1 text-sm text-ink-500">{t.priceDetail}</div>
              </div>

              <p className="mt-4 text-base leading-relaxed text-ink-700">{t.description}</p>

              <ul className="mt-6 flex-1 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check
                      size={18}
                      className={t.highlighted ? 'mt-0.5 shrink-0 text-brand-500' : 'mt-0.5 shrink-0 text-accent-500'}
                    />
                    <span className="text-sm text-ink-900">{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <LinkButton
                  to={t.ctaTo}
                  variant={t.highlighted ? 'primary' : 'secondary'}
                  size="md"
                  fullWidth
                >
                  {t.cta}
                  <ArrowRight size={16} />
                </LinkButton>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section bg="ink">
        <SectionHeader
          eyebrow="Compare plans"
          title="What's in each plan."
          subtitle="The Pilot plan is the right pick for everyone today."
        />
        <div className="mt-10 overflow-x-auto">
          <table className="w-full min-w-[640px] border-separate border-spacing-0 rounded-card border border-ink-300/60 bg-white text-left text-sm md:text-base">
            <thead>
              <tr className="bg-ink-50 text-ink-900">
                <th className="px-4 py-4 font-display text-base font-bold md:px-6">Feature</th>
                <th className="px-4 py-4 font-display text-base font-bold md:px-6">Pilot</th>
                <th className="px-4 py-4 font-display text-base font-bold md:px-6">Pro</th>
                <th className="px-4 py-4 font-display text-base font-bold md:px-6">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {[
                { f: 'Unlimited orders', p: 'yes', pr: 'yes', e: 'yes' },
                { f: 'WhatsApp order notifications', p: 'yes', pr: 'yes', e: 'yes' },
                { f: 'Daily inventory summary', p: 'yes', pr: 'yes', e: 'yes' },
                { f: 'Low-stock alerts', p: 'yes', pr: 'yes', e: 'yes' },
                { f: 'Featured placement', p: 'no', pr: 'yes', e: 'yes' },
                { f: 'Sales analytics', p: 'no', pr: 'yes', e: 'yes' },
                { f: 'Multi-outlet management', p: 'no', pr: 'no', e: 'yes' },
                { f: 'Dedicated account manager', p: 'no', pr: 'no', e: 'yes' },
              ].map((row) => (
                <tr key={row.f}>
                  <td className="border-t border-ink-300/60 px-4 py-3 font-medium text-ink-900 md:px-6">{row.f}</td>
                  <td className="border-t border-ink-300/60 px-4 py-3 md:px-6">{row.p === 'yes' ? <Check size={18} className="text-accent-500" /> : <span className="text-ink-300">—</span>}</td>
                  <td className="border-t border-ink-300/60 px-4 py-3 md:px-6">{row.pr === 'yes' ? <Check size={18} className="text-accent-500" /> : <span className="text-ink-300">—</span>}</td>
                  <td className="border-t border-ink-300/60 px-4 py-3 md:px-6">{row.e === 'yes' ? <Check size={18} className="text-accent-500" /> : <span className="text-ink-300">—</span>}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section bg="white">
        <SectionHeader
          eyebrow="Pricing FAQ"
          title="What you might be wondering."
        />
        <div className="mt-10">
          <FAQAccordion items={pricingFaqs} />
        </div>
      </Section>

      <CTABand
        title="Ready to be a Founding Kirana?"
        subtitle="Free for life. No commission. Direct line to the team."
        actions={
          <LinkButton to="/vendors" variant="white" size="lg">
            Become a Founding Kirana
            <ArrowRight size={18} />
          </LinkButton>
        }
      />
    </>
  );
}
