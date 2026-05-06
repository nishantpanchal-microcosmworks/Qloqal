import { AlertTriangle } from 'lucide-react';
import { Seo } from '@/components/seo/Seo';
import { Hero } from '@/components/sections/Hero';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';

export function Privacy() {
  return (
    <>
      <Seo
        title="Privacy Policy — Qloqal"
        description="How we collect, use, and protect your information."
        path="/privacy"
      />

      <Hero
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your information."
      />

      <Section bg="white">
        <Card variant="default" className="mx-auto max-w-3xl border-amber-300 bg-amber-50">
          <div className="flex items-start gap-3">
            <AlertTriangle size={22} className="mt-0.5 shrink-0 text-amber-600" />
            <div>
              <div className="font-display text-base font-bold text-amber-900">Draft — pending legal review</div>
              <p className="mt-1 text-sm text-amber-900/85">
                This is an early draft of our Privacy Policy and will be reviewed by counsel
                before our public launch.
              </p>
            </div>
          </div>
        </Card>

        <article className="prose-policy mx-auto mt-10 max-w-3xl space-y-8 text-base leading-relaxed text-ink-700 md:text-lg">
          <Block title="1. Introduction">
            Qloqal ("we", "us", "our") respects your privacy. This Privacy Policy explains what
            information we collect on this website, why we collect it, and how we use, share, and
            protect it. If you have questions, write to us at{' '}
            <a className="font-semibold text-brand-600" href="mailto:devcloudteam2025@gmail.com">
              devcloudteam2025@gmail.com
            </a>
            .
          </Block>

          <Block title="2. Information we collect">
            <ul className="ml-5 list-disc space-y-1.5">
              <li>Form data you provide voluntarily — name, phone number, email address, city, and any business details you share via our forms.</li>
              <li>Anonymous usage data — pages visited, device type, approximate location, and Core Web Vitals via Vercel Analytics.</li>
              <li>Cookies — strictly necessary cookies for site functionality. No advertising or third-party tracking cookies.</li>
            </ul>
          </Block>

          <Block title="3. How we use your information">
            We use the information you give us to respond to your inquiries, follow up on
            partnership and waitlist requests, and improve the website. We do not send marketing
            communications without your explicit consent and we do not sell your information.
          </Block>

          <Block title="4. Sharing">
            We share form data only with service providers required to operate the site —
            currently Web3Forms (form delivery to our inbox) and Vercel (hosting and analytics).
            Both are bound by their own privacy commitments.
          </Block>

          <Block title="5. Cookies">
            We use minimal first-party cookies and Vercel Analytics for aggregated, privacy-friendly
            usage data. No advertising cookies, no Meta Pixel, no Google Analytics.
          </Block>

          <Block title="6. Your rights">
            You have the right to access, correct, or delete the personal information you have
            shared with us. To exercise these rights, write to us. This includes rights under the
            EU GDPR and India's DPDP Act where applicable.
          </Block>

          <Block title="7. Children's privacy">
            Qloqal is not intended for use by children under 13. We do not knowingly collect
            personal information from children.
          </Block>

          <Block title="8. Contact">
            For privacy concerns or to exercise your rights, write to{' '}
            <a className="font-semibold text-brand-600" href="mailto:devcloudteam2025@gmail.com">
              devcloudteam2025@gmail.com
            </a>
            .
          </Block>

          <p className="text-sm text-ink-500">Last updated: 2026.</p>
        </article>
      </Section>
    </>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="font-display text-xl font-bold text-ink-900 md:text-2xl">{title}</h2>
      <div className="mt-3">{children}</div>
    </section>
  );
}
