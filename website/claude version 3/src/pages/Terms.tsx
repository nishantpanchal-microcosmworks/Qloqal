import { SEO } from "@/components/SEO";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";

export default function Terms() {
  return (
    <>
      <SEO title="Terms — Qloqal" description="The agreement between you and us, in plain language." path="/terms" />

      <PageHero
        kicker="terms"
        title={
          <>
            The handshake,{" "}
            <span className="ink-italic text-[var(--color-primary)]">written down.</span>
          </>
        }
        body="A short, plain-language agreement between you and us. The lawyer-grade version is available on request, but this is the version we actually live by."
      />

      <Container className="py-6 pb-20 max-w-3xl">
        <article className="space-y-8 text-[var(--color-on-surface)] leading-relaxed">
          <section>
            <h2 className="font-display text-2xl mb-3">What you get</h2>
            <p>
              Access to the Qloqal software according to the plan you’ve
              chosen. We try our hardest to keep it fast, available, and free
              of unpleasant surprises. If we ever fail at that, we’ll tell you
              what happened and what we’re doing about it.
            </p>
          </section>
          <section>
            <h2 className="font-display text-2xl mb-3">What you owe us</h2>
            <p>
              The monthly (or yearly) subscription, paid in advance. If you
              forget, we’ll send a polite reminder. If a payment fails twice in
              a row, we’ll downgrade your account to read-only — your data
              stays put, untouched, until you’re back.
            </p>
          </section>
          <section>
            <h2 className="font-display text-2xl mb-3">Cancelling</h2>
            <p>
              You can cancel any time, from your dashboard, with one click. We
              don’t make you call anyone, write a letter, or speak to a
              ‘retention specialist’. We’ll keep your data accessible for 90
              days after cancellation, in case you change your mind.
            </p>
          </section>
          <section>
            <h2 className="font-display text-2xl mb-3">What we can’t do</h2>
            <p>
              We can’t guarantee that WhatsApp itself will always be running,
              or that every payment processor will always be obliging. When
              the underlying networks have a bad day, we’ll write to you, and
              we’ll credit your account if the outage is on our side.
            </p>
          </section>
          <section>
            <h2 className="font-display text-2xl mb-3">Acceptable use</h2>
            <p>
              Sell things. Be kind to your customers. Don’t use Qloqal to send
              unsolicited bulk messages, run financial scams, or peddle
              regulated goods you’re not licensed to. If you do, we’ll close
              the shop, return your data, and you’ll find out why.
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
