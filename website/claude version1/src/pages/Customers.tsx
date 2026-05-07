import { ArrowRight, Bell, Check, X } from 'lucide-react';
import { Seo } from '@/components/seo/Seo';
import { Hero } from '@/components/sections/Hero';
import { Section } from '@/components/ui/Section';
import { SectionHeader } from '@/components/sections/SectionHeader';
import { FeatureGrid } from '@/components/sections/FeatureGrid';
import { CTABand } from '@/components/sections/CTABand';
import { LinkButton } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { PhoneMockup } from '@/components/sections/PhoneMockup';
import { NotifyMeForm } from '@/components/forms/NotifyMeForm';
import { customerFeatures } from '@/data/features';

export function Customers() {
  return (
    <>
      <Seo
        title="Order from your kirana — Qloqal"
        description="Real local prices, UPI payments, live tracking. Find every kirana in your neighborhood, in one app."
        path="/customers"
      />

      <Hero
        variant="brand"
        eyebrow={<><Bell size={12} /> For shoppers</>}
        title="Order from your kirana, in seconds."
        subtitle="All your neighborhood kiranas, in one app. Pay with UPI. Track in real time."
        actions={
          <LinkButton to="#notify" variant="white" size="lg">
            Notify me when Qloqal launches near me
            <ArrowRight size={18} />
          </LinkButton>
        }
        visual={
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <PhoneMockup variant="list" />
            <div className="hidden sm:block">
              <PhoneMockup variant="cart" />
            </div>
          </div>
        }
      />

      <Section bg="white">
        <SectionHeader
          eyebrow="What you get"
          title="Everything a shopper actually needs."
          subtitle="No bloated app, no platform fees, no hidden markup."
        />
        <div className="mt-12">
          <FeatureGrid features={customerFeatures} tone="brand" />
        </div>
      </Section>

      <Section bg="ink">
        <SectionHeader
          eyebrow="See it in action"
          title="A clean app — built for the way you actually shop."
        />
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:items-start">
          <PhoneMockup variant="list" />
          <PhoneMockup variant="cart" />
          <div className="sm:col-span-2 sm:mx-auto sm:max-w-[280px] lg:col-span-1 lg:mx-0 lg:max-w-none">
            <PhoneMockup variant="tracking" />
          </div>
        </div>
      </Section>

      <Section bg="white">
        <SectionHeader
          eyebrow="Compare"
          title="Why shoppers prefer Qloqal."
          subtitle="A simple side-by-side. We are honest about where we are different — and where we are not."
        />
        <div className="mt-10 overflow-x-auto">
          <table className="w-full min-w-[640px] border-separate border-spacing-0 rounded-card border border-ink-300/60 bg-white text-left text-sm md:text-base">
            <thead>
              <tr className="bg-ink-50 text-ink-900">
                <th className="px-4 py-4 font-display text-base font-bold md:px-6">Feature</th>
                <th className="px-4 py-4 font-display text-base font-bold text-brand-600 md:px-6">Qloqal</th>
                <th className="px-4 py-4 font-display text-base font-bold md:px-6">Big delivery apps</th>
                <th className="px-4 py-4 font-display text-base font-bold md:px-6">Walking to kirana</th>
              </tr>
            </thead>
            <tbody>
              {[
                { f: 'Real local kiranas', q: 'yes', a: 'no', w: 'yes' },
                { f: 'Real local prices', q: 'yes', a: 'no', w: 'yes' },
                { f: 'Live order tracking', q: 'yes', a: 'yes', w: 'no' },
                { f: 'No minimum order', q: 'yes', a: 'no', w: 'yes' },
                { f: 'Personal kirana relationship', q: 'yes', a: 'no', w: 'yes' },
                { f: 'Order from home', q: 'yes', a: 'yes', w: 'no' },
              ].map((row) => (
                <tr key={row.f} className="border-t border-ink-300/60">
                  <td className="border-t border-ink-300/60 px-4 py-3 font-medium text-ink-900 md:px-6">{row.f}</td>
                  <td className="border-t border-ink-300/60 px-4 py-3 md:px-6"><Mark on={row.q} /></td>
                  <td className="border-t border-ink-300/60 px-4 py-3 md:px-6"><Mark on={row.a} /></td>
                  <td className="border-t border-ink-300/60 px-4 py-3 md:px-6"><Mark on={row.w} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section bg="white" id="notify">
        <div className="mx-auto grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
          <div>
            <SectionHeader
              align="left"
              eyebrow="Stay close"
              title="Get notified the moment Qloqal lands in your area."
              subtitle="No spam. No newsletters. Just one message — when we are live near you."
            />
            <ul className="mt-8 space-y-3 text-base text-ink-700">
              {[
                'Be the first to order from kiranas in your neighborhood',
                'Founding shoppers get early-access perks',
                'We will email you exactly once when Qloqal goes live',
              ].map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <Check size={20} className="mt-0.5 shrink-0 text-accent-500" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <Card variant="brand" className="lg:p-10">
            <NotifyMeForm />
          </Card>
        </div>
      </Section>

      <CTABand
        variant="brand"
        title="Run a kirana? See the vendor side."
        subtitle="Founding kiranas get free-for-life pricing and direct support."
        actions={
          <LinkButton to="/vendors" variant="white" size="lg">
            See the kirana side
            <ArrowRight size={18} />
          </LinkButton>
        }
      />
    </>
  );
}

function Mark({ on }: { on: string }) {
  if (on === 'yes') {
    return (
      <span className="inline-flex items-center gap-2 font-semibold text-accent-600">
        <Check size={18} /> Yes
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-2 text-ink-500">
      <X size={18} /> No
    </span>
  );
}
