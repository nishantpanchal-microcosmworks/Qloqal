import { Check } from 'lucide-react';
import Seo from '../components/seo/Seo';
import Section from '../components/ui/Section';
import SectionHeader from '../components/sections/SectionHeader';
import VendorFlow from '../components/sections/VendorFlow';
import WhyWhatsApp from '../components/sections/WhyWhatsApp';
import VendorInquiryForm from '../components/forms/VendorInquiryForm';
import { categories } from '../data/categories';
import Container from '../components/ui/Container';
import { ButtonAnchor } from '../components/ui/Button';
import Badge from '../components/ui/Badge';

const checklist = [
  'A smartphone with WhatsApp installed',
  'A bank account for payouts',
  'About 10 minutes to list your top items and prices',
];

const payoutPoints = [
  'Customer pays securely at checkout (cards, popular wallets, bank transfer).',
  'Money is held until the order is delivered.',
  'After delivery, your share settles automatically to your bank account.',
  'Transparent commission. No setup fees, no monthly minimums.',
];

export default function Vendors() {
  return (
    <>
      <Seo
        title="Sell on Qloqal — turn your shop into an online business via WhatsApp"
        description="Free to list. No tablet, no new app. If you can chat on WhatsApp, you can run your Qloqal shop. Sign up in 10 minutes."
        canonical="/vendors"
      />

      <section className="bg-gradient-to-br from-brand-green-soft via-white to-brand-blue-soft">
        <Container>
          <div className="grid gap-10 py-16 lg:grid-cols-2 lg:items-center lg:py-20">
            <div>
              <Badge tone="green">For small business owners</Badge>
              <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
                Sell more, on the WhatsApp you already use.
              </h1>
              <p className="mt-5 max-w-xl text-lg text-muted">
                No new app. No tablet. No monthly minimum. If you can chat on WhatsApp, you can run your Qloqal shop.
              </p>
              <ul className="mt-6 grid gap-2">
                {checklist.map((c, i) => (
                  <li key={i} className="flex items-start gap-2 text-base text-ink">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-green text-ink">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    {c}
                  </li>
                ))}
              </ul>
              <a href="#vendor-form" className="mt-8 inline-block">
                <span className="inline-flex items-center gap-2 rounded-xl bg-brand-green px-6 py-3.5 text-lg font-semibold text-ink hover:bg-brand-green-dark">
                  Get my shop online →
                </span>
              </a>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-card">
              <div className="text-center">
                <p className="text-xs font-bold uppercase tracking-wider text-brand-green-dark">Your daily reality</p>
                <p className="mt-2 text-2xl font-extrabold text-ink">Open WhatsApp. Tap accept. Done.</p>
              </div>
              <div className="mt-6">
                <VendorFlowMini />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Section tone="white">
        <VendorFlow />
      </Section>

      <Section tone="surface">
        <WhyWhatsApp />
      </Section>

      <Section tone="white">
        <SectionHeader eyebrow="What you'll need" title="Three things. That's all." />
        <ul className="mx-auto mt-10 grid max-w-3xl gap-3">
          {checklist.map((c, i) => (
            <li key={i} className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-soft">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand-green-soft text-brand-green-dark">
                <Check size={16} strokeWidth={3} />
              </span>
              <span className="text-base text-ink">{c}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="surface">
        <SectionHeader title="Built for every business type." subtitle="Pick the closest match — we accept any small business." />
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {categories.map((c) => (
            <span key={c.slug} className="inline-flex items-center gap-2 rounded-full border-2 border-ink/10 bg-white px-4 py-2 text-sm font-semibold text-ink">
              <span aria-hidden>{c.emoji}</span>
              {c.label}
            </span>
          ))}
        </div>
      </Section>

      <Section tone="white">
        <SectionHeader eyebrow="Payments" title="How you get paid." />
        <ul className="mx-auto mt-10 grid max-w-3xl gap-3">
          {payoutPoints.map((p, i) => (
            <li key={i} className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-soft">
              <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-blue-soft text-brand-blue text-xs font-bold">
                {i + 1}
              </span>
              <span className="text-base text-ink">{p}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="vendor-form" tone="green-soft">
        <SectionHeader title="Tell us about your shop." subtitle="We'll message you on WhatsApp the same day to confirm the rest." />
        <div className="mx-auto mt-10 max-w-3xl rounded-2xl bg-white p-6 shadow-card sm:p-8">
          <VendorInquiryForm />
        </div>
        <p className="mt-6 text-center text-sm text-muted">
          Prefer email?{' '}
          <ButtonAnchor href="mailto:devcloudteam2025@gmail.com" variant="tertiary" size="sm" data-cta="vendor-email-fallback">
            Write to us instead
          </ButtonAnchor>
        </p>
      </Section>
    </>
  );
}

function VendorFlowMini() {
  const items = ['New order: $10.50', 'You: ✓ Accept', 'You: ✓ Mark Ready', 'Customer: Picked up'];
  return (
    <ol className="grid gap-2">
      {items.map((t, i) => (
        <li key={i} className="rounded-xl bg-brand-green-soft px-3 py-2 text-sm font-medium text-ink">
          {t}
        </li>
      ))}
    </ol>
  );
}
