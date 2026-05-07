import { ArrowLeft } from 'lucide-react';
import { Seo } from '@/components/seo/Seo';
import { Section } from '@/components/ui/Section';
import { LinkButton } from '@/components/ui/Button';

export function NotFound() {
  return (
    <>
      <Seo
        title="Page not found — Qloqal"
        description="The page you're looking for doesn't exist."
        path="/404"
      />

      <Section bg="soft" className="min-h-[70vh]">
        <div className="mx-auto max-w-xl text-center">
          <div className="font-display text-7xl font-extrabold text-brand-500 md:text-9xl">404</div>
          <h1 className="mt-4 font-display text-3xl font-extrabold text-ink-900 md:text-4xl">
            We couldn't find that page.
          </h1>
          <p className="mt-4 text-base text-ink-700 md:text-lg">
            The link may be broken or the page may have moved. Head back home and try again.
          </p>
          <div className="mt-8">
            <LinkButton to="/" size="lg">
              <ArrowLeft size={18} />
              Back to home
            </LinkButton>
          </div>
        </div>
      </Section>
    </>
  );
}
