import Seo from '../components/seo/Seo';
import Section from '../components/ui/Section';
import { ButtonLink } from '../components/ui/Button';
import { Compass } from 'lucide-react';

export default function NotFound() {
  return (
    <>
      <Seo
        title="Page not found — Qloqal"
        description="The page you were looking for does not exist."
        noindex
      />
      <Section tone="green-soft">
        <div className="mx-auto max-w-xl text-center">
          <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-brand-green text-ink shadow-card">
            <Compass size={32} />
          </div>
          <p className="mt-6 text-xs font-bold uppercase tracking-wider text-brand-green-dark">404</p>
          <h1 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            We couldn't find that page.
          </h1>
          <p className="mt-4 text-lg text-muted">It may have moved, or never existed. Let's get you back on track.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ButtonLink to="/" variant="primary" size="md" data-cta="404-home">Back home</ButtonLink>
            <ButtonLink to="/vendors" variant="secondary" size="md" data-cta="404-vendors">For vendors</ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
