import { useSearchParams } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import Seo from '../components/seo/Seo';
import Section from '../components/ui/Section';
import { ButtonLink } from '../components/ui/Button';

export default function ThankYou() {
  const [params] = useSearchParams();
  const from = params.get('from');
  const isVendor = from === 'vendor';

  const title = isVendor ? 'Your shop is on its way online.' : 'Got it. Talk soon.';
  const desc = isVendor
    ? 'Thanks for sharing your shop details. We will message you on WhatsApp within one business day to confirm and get you live.'
    : 'Thanks for the message. We reply to everything within one business day.';

  return (
    <>
      <Seo
        title="Thank you — Qloqal"
        description="Thanks for getting in touch. We will get back to you within one business day."
        canonical="/thank-you"
        noindex
      />
      <Section tone="green-soft">
        <div className="mx-auto max-w-xl text-center">
          <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-brand-green text-ink shadow-card">
            <CheckCircle2 size={32} strokeWidth={2.5} />
          </div>
          <h1 className="mt-6 font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            {title}
          </h1>
          <p className="mt-4 text-lg text-muted">{desc}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ButtonLink to="/" variant="primary" size="md" data-cta="thankyou-home">
              Back home
            </ButtonLink>
            <ButtonLink to="/how-it-works" variant="secondary" size="md" data-cta="thankyou-how-it-works">
              See how Qloqal works
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
