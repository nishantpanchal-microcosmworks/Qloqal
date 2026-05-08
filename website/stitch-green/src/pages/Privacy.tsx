import { SEO } from "@/components/SEO";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";

export default function Privacy() {
  return (
    <>
      <SEO
        title="Privacy Policy — Qloqal"
        description="How Qloqal collects, uses, and protects your information."
        path="/privacy"
      />

      <Section bg="lowest">
        <Container>
          <div className="mx-auto max-w-3xl">
            <Badge variant="secondary" className="mb-6">
              Draft — pending legal review
            </Badge>
            <h1 className="text-4xl font-extrabold md:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-3 text-on-surface-variant">
              Last updated: 2026-05-08. This is an early draft and will be
              reviewed by counsel before our public launch.
            </p>

            <div className="prose prose-lg mt-10 max-w-none space-y-8 text-on-surface-variant">
              <section>
                <h2 className="text-2xl font-bold text-on-surface">Scope</h2>
                <p>
                  This Privacy Policy explains how Qloqal collects, uses, and
                  protects information about visitors to qloqal.com and people
                  who interact with our forms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-on-surface">
                  Information we collect
                </h2>
                <p>
                  We collect the information you submit through our contact and
                  inquiry forms — name, email, phone number, business details,
                  and the contents of your message. We also collect anonymous
                  analytics through Vercel Analytics (page views, referrers,
                  device types).
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-on-surface">
                  How we use your information
                </h2>
                <p>
                  We use the information you submit to respond to your
                  inquiries and to invite you to early product access where
                  relevant. We do not send marketing emails without your
                  explicit opt-in.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-on-surface">Sharing</h2>
                <p>
                  We do not sell your data. Form submissions are processed by
                  our service provider Web3Forms. Anonymous analytics are
                  processed by Vercel Analytics.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-on-surface">Cookies</h2>
                <p>
                  Qloqal uses minimal cookies — only those necessary for
                  Vercel's privacy-friendly analytics. We do not use third-party
                  advertising cookies.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-on-surface">
                  Your rights
                </h2>
                <p>
                  You may request access to, correction of, or deletion of any
                  personal data we hold about you by writing to{" "}
                  <a className="text-primary underline" href="mailto:hello@qloqal.com">
                    hello@qloqal.com
                  </a>
                  .
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-on-surface">
                  Contact for privacy concerns
                </h2>
                <p>
                  Email{" "}
                  <a className="text-primary underline" href="mailto:hello@qloqal.com">
                    hello@qloqal.com
                  </a>{" "}
                  with the subject line "Privacy."
                </p>
              </section>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
