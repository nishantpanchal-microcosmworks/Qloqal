import { useSearchParams } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Seo } from '@/components/seo/Seo';
import { Section } from '@/components/ui/Section';
import { LinkButton } from '@/components/ui/Button';

type Variant = 'customer' | 'vendor' | 'contact';

const copy: Record<Variant, { title: string; subtitle: string; ctaTo: string; ctaLabel: string; secondaryTo: string; secondaryLabel: string }> = {
  customer: {
    title: 'You’re on the list!',
    subtitle: 'We will email you the moment Qloqal launches near you. In the meantime — check out the kirana side, or share Qloqal with a friend.',
    ctaTo: '/vendors',
    ctaLabel: 'See the kirana side',
    secondaryTo: '/',
    secondaryLabel: 'Back home',
  },
  vendor: {
    title: 'Welcome aboard, Founding Kirana!',
    subtitle: 'We’ll reach out on WhatsApp within 48 hours to walk you through the next steps. Free for life — locked in.',
    ctaTo: '/how-it-works',
    ctaLabel: 'See how it works',
    secondaryTo: '/',
    secondaryLabel: 'Back home',
  },
  contact: {
    title: 'Message received.',
    subtitle: 'Thanks for writing in. We aim to reply within 24 hours — usually much sooner.',
    ctaTo: '/',
    ctaLabel: 'Back home',
    secondaryTo: '/faq',
    secondaryLabel: 'Read the FAQ',
  },
};

export function ThankYou() {
  const [params] = useSearchParams();
  const type = (params.get('type') ?? 'contact') as Variant;
  const c = copy[type] ?? copy.contact;

  return (
    <>
      <Seo
        title="Thank you — Qloqal"
        description="Your message has been received."
        path="/thank-you"
      />

      <Section bg="soft" className="min-h-[60vh]">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto inline-flex h-20 w-20 items-center justify-center rounded-full bg-accent-50 text-accent-600">
            <CheckCircle2 size={40} />
          </div>
          <h1 className="mt-6 font-display text-4xl font-extrabold leading-tight text-ink-900 md:text-5xl">
            {c.title}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-ink-700 md:text-lg">{c.subtitle}</p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <LinkButton to={c.ctaTo} size="lg">
              {c.ctaLabel}
              <ArrowRight size={18} />
            </LinkButton>
            <LinkButton to={c.secondaryTo} variant="secondary" size="lg">
              {c.secondaryLabel}
            </LinkButton>
          </div>
        </div>
      </Section>
    </>
  );
}
