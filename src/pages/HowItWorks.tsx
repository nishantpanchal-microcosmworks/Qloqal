import { ArrowRight, ShieldCheck, RotateCcw, Lock } from 'lucide-react';
import { Seo } from '@/components/seo/Seo';
import { Hero } from '@/components/sections/Hero';
import { Section } from '@/components/ui/Section';
import { SectionHeader } from '@/components/sections/SectionHeader';
import { CTABand } from '@/components/sections/CTABand';
import { Card } from '@/components/ui/Card';
import { LinkButton } from '@/components/ui/Button';
import { WhatsAppMockup } from '@/components/sections/WhatsAppMockup';

const shopperSteps = [
  'Open Qloqal — see kiranas around you',
  'Search or browse — pick what you need',
  'Add items to cart — see the real total',
  'Checkout — pay with UPI, card, or netbanking',
  'Order is created — payment is verified',
  'Kirana accepts — your shopper gets confirmation',
  'Kirana marks ready — you know when to head over',
  'Pickup or delivery — order complete',
];

const kiranaSteps = [
  'A WhatsApp message with the order arrives',
  'You tap Accept (or Reject if you can’t fulfil)',
  'Stock auto-updates from your existing inventory',
  'When the order is prepared, tap Mark Ready',
  'Customer is notified — you collect the payout',
];

export function HowItWorks() {
  return (
    <>
      <Seo
        title="How Qloqal works"
        description="Shoppers in the app, kiranas on WhatsApp. Here's the full flow."
        path="/how-it-works"
      />

      <Hero
        title="How Qloqal works — for both sides."
        subtitle="Shoppers in the app. Kiranas on WhatsApp. We bridge them — automatically."
      />

      <Section bg="white">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          <Card variant="brand">
            <div className="mb-2 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-brand-700">
              The shopper journey
            </div>
            <h3 className="font-display text-2xl font-bold text-ink-900 md:text-3xl">
              From "I need apples" to "ready for pickup"
            </h3>
            <ol className="mt-6 space-y-4">
              {shopperSteps.map((s, i) => (
                <li key={s} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full gradient-brand text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <span className="text-base text-ink-900">{s}</span>
                </li>
              ))}
            </ol>
          </Card>

          <Card variant="accent">
            <div className="mb-2 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-accent-700">
              The kirana journey
            </div>
            <h3 className="font-display text-2xl font-bold text-ink-900 md:text-3xl">
              From "ping" to "paid out"
            </h3>
            <ol className="mt-6 space-y-4">
              {kiranaSteps.map((s, i) => (
                <li key={s} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full gradient-accent text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <span className="text-base text-ink-900">{s}</span>
                </li>
              ))}
            </ol>
          </Card>
        </div>
      </Section>

      <Section bg="ink">
        <SectionHeader
          eyebrow="Order lifecycle"
          title="One predictable state machine."
          subtitle="Every order follows the same clean path. No mystery states, no orphaned orders."
        />
        <div className="mt-12 overflow-x-auto">
          <div className="mx-auto flex w-max items-center gap-3 rounded-card bg-white p-6 shadow-soft md:gap-4">
            {['Pending payment', 'Paid', 'Vendor notified', 'Accepted', 'Ready', 'Completed'].map(
              (s, i, arr) => (
                <div key={s} className="flex items-center gap-3 md:gap-4">
                  <span className="rounded-full bg-brand-50 px-3 py-1.5 text-xs font-semibold text-brand-700 md:text-sm">
                    {s}
                  </span>
                  {i < arr.length - 1 ? (
                    <span className="text-ink-300" aria-hidden>
                      →
                    </span>
                  ) : null}
                </div>
              ),
            )}
          </div>
          <p className="mt-3 text-center text-xs text-ink-500">
            Branches: rejected (refund) · auto-cancelled after 15 min (refund)
          </p>
        </div>
      </Section>

      <Section bg="white">
        <SectionHeader
          eyebrow="Sample WhatsApp templates"
          title="Exactly what kiranas receive."
          subtitle="Three approved templates power the whole vendor side."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <WhatsAppMockup
            title="🔔 New Order #QL-1234"
            body={'1 kg Apple — ₹80\n500 g Onion — ₹20\n\nTotal: ₹100 (paid)'}
            buttons={['Accept', 'Reject']}
          />
          <WhatsAppMockup
            title="📦 Daily Stock Summary"
            body={'In stock:\n• Apple — 8 kg\n• Onion — 4 kg\n• Banana — 12 pcs\n\n⚠️ Low: Tomato — 1 kg'}
          />
          <WhatsAppMockup
            title="⚠️ Low Stock Alert"
            body={'Tomato is running low: only 1 kg left.\n\nContact the Qloqal admin to refill.'}
          />
        </div>
      </Section>

      <Section bg="ink">
        <SectionHeader
          eyebrow="Trust & safety"
          title="Money, refunds, privacy — handled."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              icon: ShieldCheck,
              title: 'Money held safely by Razorpay',
              description: 'We never touch customer money directly. Razorpay holds funds in escrow and disburses to kiranas.',
            },
            {
              icon: RotateCcw,
              title: 'Auto-refund within 15 minutes',
              description: 'If a kirana does not accept in 15 minutes, the order is auto-cancelled and the customer is refunded.',
            },
            {
              icon: Lock,
              title: 'Your phone number stays private',
              description: 'Shoppers and kiranas communicate through Qloqal. Real numbers are masked unless you choose otherwise.',
            },
          ].map((c) => (
            <Card key={c.title} variant="default" interactive>
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <c.icon size={22} />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-ink-900">{c.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-ink-700">{c.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <CTABand
        title="See it from your side."
        subtitle="Pick your perspective and dive in."
        actions={
          <>
            <LinkButton to="/customers" variant="white" size="lg">
              Shopper view
              <ArrowRight size={18} />
            </LinkButton>
            <LinkButton to="/vendors" variant="accent" size="lg">
              Kirana view
              <ArrowRight size={18} />
            </LinkButton>
          </>
        }
      />
    </>
  );
}
