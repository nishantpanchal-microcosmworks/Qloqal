import { createFileRoute } from "@tanstack/react-router";
import { Seo } from "@/components/Seo";

export const Route = createFileRoute("/privacy")({
  component: () => (
    <>
      <Seo title="Privacy Policy — Qloqal" description="How Qloqal collects, uses, and protects your data." />
      <section className="container-pad mx-auto max-w-3xl py-16 prose prose-slate">
        <h1 className="font-display font-extrabold text-4xl">Privacy Policy</h1>
        <p className="mt-2 text-sm text-muted-ink">[REPLACE WITH LEGAL]</p>
        <p className="mt-6 text-muted-ink">This is placeholder copy. Qloqal collects only the information needed to fulfil orders, process payments, and communicate with shop owners and customers via WhatsApp. We do not sell personal data.</p>
        <h2 className="mt-8 font-display font-bold text-2xl">What we collect</h2>
        <p className="text-muted-ink">[REPLACE WITH LEGAL] Account details, order history, payment metadata, and contact information.</p>
        <h2 className="mt-6 font-display font-bold text-2xl">How we use it</h2>
        <p className="text-muted-ink">[REPLACE WITH LEGAL] To operate the marketplace, route orders, process payments, and improve the product.</p>
        <h2 className="mt-6 font-display font-bold text-2xl">Your rights</h2>
        <p className="text-muted-ink">[REPLACE WITH LEGAL] You can request access, correction, or deletion of your data at any time.</p>
      </section>
    </>
  ),
});
