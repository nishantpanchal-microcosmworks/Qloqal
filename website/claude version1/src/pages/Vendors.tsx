import { useMemo, useState } from 'react';
import { ArrowRight, Store, TrendingUp, Calculator } from 'lucide-react';
import { Seo } from '@/components/seo/Seo';
import { Hero } from '@/components/sections/Hero';
import { Section } from '@/components/ui/Section';
import { SectionHeader } from '@/components/sections/SectionHeader';
import { FeatureGrid } from '@/components/sections/FeatureGrid';
import { CTABand } from '@/components/sections/CTABand';
import { LinkButton } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { WhatsAppMockup } from '@/components/sections/WhatsAppMockup';
import { VendorInquiryForm } from '@/components/forms/VendorInquiryForm';
import { vendorFeatures } from '@/data/features';
import { formatINR } from '@/lib/utils';

export function Vendors() {
  return (
    <>
      <Seo
        title="Get more orders. Keep using WhatsApp. — Qloqal for Kiranas"
        description="Zero app to install. Free during pilot. No commission for the first 50 kiranas."
        path="/vendors"
      />

      <Hero
        variant="accent"
        eyebrow={<><Store size={12} /> For kiranas</>}
        title="Get more orders. Keep using WhatsApp."
        subtitle="Customers find your kirana. Orders come to your phone. You stay in control."
        actions={
          <LinkButton to="#inquiry" variant="white" size="lg">
            Become a Founding Kirana
            <ArrowRight size={18} />
          </LinkButton>
        }
        visual={
          <div className="space-y-4">
            <WhatsAppMockup
              title="🔔 New Order #QL-1234"
              body={'1 kg Apple — ₹80\n500 g Onion — ₹20\n\nTotal: ₹100 (paid)\n\nReply with the buttons below.'}
              buttons={['Accept', 'Reject']}
            />
          </div>
        }
      />

      <Section bg="white">
        <SectionHeader
          eyebrow="Why kiranas join"
          title="Designed around how you already work."
          subtitle="No new app. No training. No complicated onboarding."
        />
        <div className="mt-12">
          <FeatureGrid features={vendorFeatures} tone="accent" />
        </div>
      </Section>

      <Section bg="ink">
        <SectionHeader
          eyebrow="How it works"
          title="Four steps. No spreadsheets."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { n: '1', t: 'A customer orders', d: 'A nearby shopper finds your kirana on Qloqal and pays for their order in the app.' },
            { n: '2', t: 'You get a WhatsApp message', d: 'A simple message lands on your existing WhatsApp with order details and two buttons.' },
            { n: '3', t: 'Tap Accept', d: 'One tap — the order is yours. Stock automatically updates. The shopper sees confirmation.' },
            { n: '4', t: 'Mark Ready', d: 'When the order is prepared, tap Mark Ready. The shopper picks up or has it delivered.' },
          ].map((s) => (
            <Card key={s.n} variant="default" className="relative">
              <span className="absolute right-6 top-6 font-display text-3xl font-extrabold text-accent-500/30">
                {s.n}
              </span>
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent-50 font-display text-base font-extrabold text-accent-700">
                {s.n}
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-ink-900">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-700">{s.d}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section bg="white">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <SectionHeader
              align="left"
              eyebrow="Real WhatsApp messages"
              title="Exactly what your phone will receive."
              subtitle="Built around the templates Meta has approved for kirana commerce. Predictable, simple, mobile-first."
            />
            <ul className="mt-8 space-y-3 text-base text-ink-700">
              {[
                'Order notifications with one-tap Accept and Reject',
                'Daily evening summary of your day so far',
                'Low-stock alerts so you never run out unexpectedly',
              ].map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2 w-2 shrink-0 rounded-full bg-accent-500" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <WhatsAppMockup
              title="📦 Daily Stock Summary"
              body={'In stock:\n• Apple — 8 kg\n• Onion — 4 kg\n• Banana — 12 pcs\n\n⚠️ Low stock:\n• Tomato — 1 kg'}
            />
          </div>
        </div>
      </Section>

      <EarningsCalculator />

      <Section bg="white">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
          <div>
            <Badge variant="accent">Founding Kirana program</Badge>
            <h2 className="mt-4 font-display text-3xl font-bold text-ink-900 md:text-4xl">
              Free for life — for our first 50 kiranas.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-700 md:text-lg">
              No setup fee. No monthly subscription. No per-order commission — locked in for the
              lifetime of your kirana on Qloqal. We grow only when our founding kiranas grow.
            </p>
            <ul className="mt-8 space-y-3 text-base text-ink-700">
              {[
                'Direct line to the founding team for any question',
                'Featured placement in your neighborhood at launch',
                'Same-day payouts during the pilot',
                'Founder-level swag and a thank-you when we grow',
              ].map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2 w-2 shrink-0 rounded-full bg-accent-500" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <Card variant="accent" className="lg:p-10" id="inquiry">
            <h3 className="font-display text-xl font-bold text-ink-900">Become a Founding Kirana</h3>
            <p className="mt-1.5 text-sm text-ink-700">
              Tell us about your shop. We will reach out on WhatsApp within 48 hours.
            </p>
            <div className="mt-6">
              <VendorInquiryForm />
            </div>
          </Card>
        </div>
      </Section>

      <CTABand
        variant="accent"
        title="Have questions before signing up?"
        subtitle="We're a small team and we read every message. Talk to us first if you'd like."
        actions={
          <LinkButton to="/contact" variant="white" size="lg">
            Talk to a human
            <ArrowRight size={18} />
          </LinkButton>
        }
      />
    </>
  );
}

function EarningsCalculator() {
  const [orders, setOrders] = useState(20);
  const [aov, setAov] = useState(180);

  const monthly = useMemo(() => orders * aov * 30, [orders, aov]);

  return (
    <Section bg="ink">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <SectionHeader
            align="left"
            eyebrow={<><Calculator size={12} /> Earnings calculator</>}
            title="See what extra orders could mean for your kirana."
            subtitle="A simple estimate. No commitment. Move the sliders to match your shop."
          />
        </div>
        <Card variant="default" className="lg:p-10">
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="orders" className="text-sm font-semibold text-ink-900">
                  Extra Qloqal orders per day
                </label>
                <span className="font-display text-lg font-extrabold text-brand-600">{orders}</span>
              </div>
              <input
                id="orders"
                type="range"
                min={1}
                max={100}
                value={orders}
                onChange={(e) => setOrders(Number(e.target.value))}
                className="mt-3 w-full accent-brand-500"
              />
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="aov" className="text-sm font-semibold text-ink-900">
                  Average order value
                </label>
                <span className="font-display text-lg font-extrabold text-brand-600">{formatINR(aov)}</span>
              </div>
              <input
                id="aov"
                type="range"
                min={50}
                max={1000}
                step={10}
                value={aov}
                onChange={(e) => setAov(Number(e.target.value))}
                className="mt-3 w-full accent-brand-500"
              />
            </div>

            <div className="rounded-card bg-accent-50 p-5">
              <div className="flex items-center gap-2 text-sm font-semibold text-accent-700">
                <TrendingUp size={16} /> Estimated extra revenue / month
              </div>
              <div className="mt-2 font-display text-3xl font-extrabold text-ink-900 md:text-4xl">
                {formatINR(monthly)}
              </div>
              <p className="mt-2 text-xs text-ink-500">
                Estimate only. Actual results depend on your area, hours, and catalog.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </Section>
  );
}
