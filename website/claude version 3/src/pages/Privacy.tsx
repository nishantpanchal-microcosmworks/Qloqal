import { SEO } from "@/components/SEO";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";

export default function Privacy() {
  return (
    <>
      <SEO title="Privacy — Qloqal" description="How we handle data, in plain language." path="/privacy" />

      <PageHero
        kicker="privacy"
        title={
          <>
            How we handle data,{" "}
            <span className="ink-italic text-[var(--color-primary)]">in plain language.</span>
          </>
        }
        body="We collect only what we genuinely need to run your shop. We never sell anything to third parties. You can take all your data with you whenever you leave."
      />

      <Container className="py-6 pb-20 max-w-3xl">
        <article className="prose-paper space-y-8 text-[var(--color-on-surface)] leading-relaxed">
          <section>
            <h2 className="font-display text-2xl mb-3">What we collect</h2>
            <p>
              When you sign up as a shopkeeper, we store your name, the email
              address you used, your shop’s WhatsApp number, and the catalog
              items you upload. When a customer messages your shop, we relay
              their phone number, their name (if they share it), and the
              messages between you. That’s it.
            </p>
          </section>
          <section>
            <h2 className="font-display text-2xl mb-3">Why we keep it</h2>
            <p>
              To make your shop work — display the catalog, route messages,
              process payments, and produce honest receipts. We do not run
              advertising, do not sell anything to data brokers, and do not
              build profiles of your customers for any purpose other than
              running your own shop.
            </p>
          </section>
          <section>
            <h2 className="font-display text-2xl mb-3">Where it lives</h2>
            <p>
              On servers we operate in the European Union, encrypted at rest
              and in transit. Backups are kept for 30 days, then permanently
              deleted. Payment data is handled by audited processors and never
              touches our systems directly.
            </p>
          </section>
          <section>
            <h2 className="font-display text-2xl mb-3">Your rights</h2>
            <p>
              At any time you can ask us to export everything we have on you
              (you’ll get a clean ZIP within 24 hours), correct anything that’s
              wrong, or delete it all. Email <a className="underline" href="mailto:hello@qloqal.com">hello@qloqal.com</a> and a real human will see it
              through.
            </p>
          </section>
          <section>
            <h2 className="font-display text-2xl mb-3">Cookies</h2>
            <p>
              The dashboard uses a single session cookie so you don’t have to
              log in on every page. The marketing site you’re reading uses no
              tracking cookies, no analytics-by-default, no third-party
              scripts. If we ever add anything, it will be opt-in and clearly
              labelled.
            </p>
          </section>
          <p className="text-sm text-[var(--color-on-surface-variant)] pt-6 border-t border-[var(--color-outline-variant)]">
            Last updated · April 2026
          </p>
        </article>
      </Container>
    </>
  );
}
