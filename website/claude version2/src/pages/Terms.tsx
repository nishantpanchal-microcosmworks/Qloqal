import Seo from '../components/seo/Seo';
import Section from '../components/ui/Section';

export default function Terms() {
  return (
    <>
      <Seo
        title="Terms of Service — Qloqal"
        description="The terms that govern your use of Qloqal."
        canonical="/terms"
      />
      <Section tone="white">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-wider text-brand-blue">Legal</p>
          <h1 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">Terms of Service</h1>
          <p className="mt-2 text-sm text-muted">Last updated: this is a placeholder.</p>

          <div className="mt-10 grid gap-6 text-base text-ink">
            <p className="rounded-xl border-2 border-dashed border-brand-blue/40 bg-brand-blue-soft px-4 py-3 text-sm">
              <strong>[REPLACE WITH LEGAL]</strong> — this document is a placeholder scaffold. Replace with your actual terms reviewed by counsel before launch.
            </p>

            <section>
              <h2 className="font-display text-xl font-bold">1. Using Qloqal</h2>
              <p className="mt-2 text-muted">
                By using Qloqal you agree to follow these terms. If you do not agree, do not use the service.
              </p>
            </section>
            <section>
              <h2 className="font-display text-xl font-bold">2. Vendor obligations</h2>
              <p className="mt-2 text-muted">
                Vendors agree to fulfil accepted orders, keep listings accurate, and follow applicable laws and tax regulations.
              </p>
            </section>
            <section>
              <h2 className="font-display text-xl font-bold">3. Customer obligations</h2>
              <p className="mt-2 text-muted">
                Customers agree to pay for orders placed, provide accurate delivery details, and use the service in good faith.
              </p>
            </section>
            <section>
              <h2 className="font-display text-xl font-bold">4. Payments and refunds</h2>
              <p className="mt-2 text-muted">
                Payments are processed securely. Refunds follow our published refund policy and apply when an order cannot be fulfilled.
              </p>
            </section>
            <section>
              <h2 className="font-display text-xl font-bold">5. Liability</h2>
              <p className="mt-2 text-muted">
                Qloqal connects customers and vendors. We do not manufacture, sell, or own the goods listed; the vendor is responsible for the goods they sell.
              </p>
            </section>
          </div>
        </div>
      </Section>
    </>
  );
}
