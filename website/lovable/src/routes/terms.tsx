import { createFileRoute } from "@tanstack/react-router";
import { Seo } from "@/components/Seo";

export const Route = createFileRoute("/terms")({
  component: () => (
    <>
      <Seo title="Terms of Service — Qloqal" description="The terms that govern your use of Qloqal." />
      <section className="container-pad mx-auto max-w-3xl py-16">
        <h1 className="font-display font-extrabold text-4xl">Terms of Service</h1>
        <p className="mt-2 text-sm text-muted-ink">[REPLACE WITH LEGAL]</p>
        <p className="mt-6 text-muted-ink">This is placeholder copy. By using Qloqal, you agree to the terms outlined here, including how orders are processed, how payments are settled, and how disputes are handled.</p>
        <h2 className="mt-8 font-display font-bold text-2xl">Vendor terms</h2>
        <p className="text-muted-ink">[REPLACE WITH LEGAL] Commission, settlement schedule, refund handling, suspension policy.</p>
        <h2 className="mt-6 font-display font-bold text-2xl">Customer terms</h2>
        <p className="text-muted-ink">[REPLACE WITH LEGAL] Order cancellations, refunds, acceptable use.</p>
      </section>
    </>
  ),
});
