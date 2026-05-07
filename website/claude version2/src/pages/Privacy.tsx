import Seo from '../components/seo/Seo';
import Section from '../components/ui/Section';

export default function Privacy() {
  return (
    <>
      <Seo
        title="Privacy Policy — Qloqal"
        description="How Qloqal collects, uses, and protects your information."
        canonical="/privacy"
      />
      <Section tone="white">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-wider text-brand-blue">Legal</p>
          <h1 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">Privacy Policy</h1>
          <p className="mt-2 text-sm text-muted">Last updated: this is a placeholder.</p>

          <div className="mt-10 grid gap-6 text-base text-ink">
            <p className="rounded-xl border-2 border-dashed border-brand-blue/40 bg-brand-blue-soft px-4 py-3 text-sm">
              <strong>[REPLACE WITH LEGAL]</strong> — this document is a placeholder scaffold. Replace with your actual privacy policy reviewed by counsel before launch.
            </p>

            <section>
              <h2 className="font-display text-xl font-bold">1. Information we collect</h2>
              <p className="mt-2 text-muted">
                We collect information you provide directly (name, contact details, shop information), information collected automatically (device, usage), and information from third parties (payment partners, identity verification).
              </p>
            </section>
            <section>
              <h2 className="font-display text-xl font-bold">2. How we use your information</h2>
              <p className="mt-2 text-muted">
                To provide and improve the service, route orders, process payments, communicate with you, and meet legal obligations.
              </p>
            </section>
            <section>
              <h2 className="font-display text-xl font-bold">3. Sharing</h2>
              <p className="mt-2 text-muted">
                With vendors and customers as needed to fulfil orders, with payment partners, and with service providers under contract. We do not sell your data.
              </p>
            </section>
            <section>
              <h2 className="font-display text-xl font-bold">4. Your rights</h2>
              <p className="mt-2 text-muted">
                Access, correction, deletion, portability, and objection. Contact us at the email on the contact page to exercise these rights.
              </p>
            </section>
            <section>
              <h2 className="font-display text-xl font-bold">5. Contact</h2>
              <p className="mt-2 text-muted">
                Questions about this policy can be sent to the contact address listed on our Contact page.
              </p>
            </section>
          </div>
        </div>
      </Section>
    </>
  );
}
