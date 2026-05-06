import { AlertTriangle } from 'lucide-react';
import { Seo } from '@/components/seo/Seo';
import { Hero } from '@/components/sections/Hero';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';

export function Terms() {
  return (
    <>
      <Seo
        title="Terms of Service — Qloqal"
        description="The terms governing your use of Qloqal's website and services."
        path="/terms"
      />

      <Hero
        title="Terms of Service"
        subtitle="The terms governing your use of Qloqal's website and services."
      />

      <Section bg="white">
        <Card variant="default" className="mx-auto max-w-3xl border-amber-300 bg-amber-50">
          <div className="flex items-start gap-3">
            <AlertTriangle size={22} className="mt-0.5 shrink-0 text-amber-600" />
            <div>
              <div className="font-display text-base font-bold text-amber-900">Draft — pending legal review</div>
              <p className="mt-1 text-sm text-amber-900/85">
                This is an early draft of our Terms of Service and will be reviewed by counsel
                before our public launch.
              </p>
            </div>
          </div>
        </Card>

        <article className="mx-auto mt-10 max-w-3xl space-y-8 text-base leading-relaxed text-ink-700 md:text-lg">
          <Block title="1. Acceptance of terms">
            By accessing or using qloqal.com, you agree to be bound by these Terms of Service. If
            you do not agree, please do not use the website.
          </Block>

          <Block title="2. Use of the website">
            This website is informational. We may update, change, or remove content at any time.
            You agree to use the site lawfully and not to attempt to interfere with its
            operation, security, or other users.
          </Block>

          <Block title="3. Intellectual property">
            All content, design, copy, code, and brand elements on this site are the property of
            Qloqal or its licensors. You may not copy, reproduce, or republish without our
            written permission.
          </Block>

          <Block title="4. Disclaimers">
            <p>
              Qloqal is in early development. We make no guarantees about future product
              availability, pricing, launch dates, or feature scope. Plans on this site are
              forward-looking and may change.
            </p>
          </Block>

          <Block title="5. Limitation of liability">
            To the maximum extent permitted by law, Qloqal will not be liable for any indirect,
            incidental, or consequential damages arising from your use of the website. Our total
            liability for any claim shall not exceed the amount you paid us, which for this
            informational website is zero.
          </Block>

          <Block title="6. Governing law">
            These terms are governed by the laws of India. Disputes will be subject to the
            jurisdiction of the courts of India.
          </Block>

          <Block title="7. Changes to terms">
            We may update these terms from time to time. The updated version will be posted on
            this page with a new "Last updated" date.
          </Block>

          <Block title="8. Contact">
            Questions about these Terms? Write to us at{' '}
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
