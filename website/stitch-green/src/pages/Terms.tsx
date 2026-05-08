import { SEO } from "@/components/SEO";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";

export default function Terms() {
  return (
    <>
      <SEO
        title="Terms of Service — Qloqal"
        description="The terms governing your use of Qloqal."
        path="/terms"
      />

      <Section bg="lowest">
        <Container>
          <div className="mx-auto max-w-3xl">
            <Badge variant="secondary" className="mb-6">
              Draft — pending legal review
            </Badge>
            <h1 className="text-4xl font-extrabold md:text-5xl">
              Terms of Service
            </h1>
            <p className="mt-3 text-on-surface-variant">
              Last updated: 2026-05-08. This is an early draft and will be
              reviewed by counsel before our public launch.
            </p>

            <div className="prose prose-lg mt-10 max-w-none space-y-8 text-on-surface-variant">
              <section>
                <h2 className="text-2xl font-bold text-on-surface">
                  Acceptance of terms
                </h2>
                <p>
                  By accessing qloqal.com you agree to be bound by these Terms
                  of Service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-on-surface">
                  Use of the website
                </h2>
                <p>
                  This website is informational. Submitting an inquiry does not
                  constitute a binding agreement to provide services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-on-surface">
                  Intellectual property
                </h2>
                <p>
                  All content, branding, and design elements on this site are
                  property of Qloqal unless otherwise noted.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-on-surface">
                  Disclaimers
                </h2>
                <p>
                  We make no guarantees about future product availability,
                  pricing, or launch dates. Roadmap items are illustrative.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-on-surface">
                  Limitation of liability
                </h2>
                <p>
                  Qloqal is not liable for any indirect or consequential losses
                  arising from your use of this website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-on-surface">
                  Governing law
                </h2>
                <p>
                  These terms are governed by the laws of the jurisdiction in
                  which Qloqal is incorporated, to be confirmed before public
                  launch.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-on-surface">Contact</h2>
                <p>
                  Questions about these terms?{" "}
                  <a className="text-primary underline" href="mailto:hello@qloqal.com">
                    hello@qloqal.com
                  </a>
                </p>
              </section>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
