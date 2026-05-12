import { createFileRoute, Link } from "@tanstack/react-router";
import { z } from "zod";
import { Seo } from "@/components/Seo";
import { CheckCircle2, ArrowRight } from "lucide-react";

const search = z.object({ from: z.enum(["vendors", "contact"]).optional() });

export const Route = createFileRoute("/thank-you")({
  validateSearch: (s) => search.parse(s),
  component: ThankYou,
});

function ThankYou() {
  const { from } = Route.useSearch();
  const isVendor = from === "vendors";
  return (
    <>
      <Seo title="Thank you — Qloqal" description="Thanks for reaching out to Qloqal. We'll be in touch shortly." />
      <section className="container-pad mx-auto max-w-3xl py-28 text-center">
        <div className="mx-auto h-20 w-20 rounded-md bg-brand-green flex items-center justify-center">
          <CheckCircle2 className="h-10 w-10 text-ink" />
        </div>
        <div className="mt-8 text-[11px] tracking-[0.2em] uppercase text-brand-green-dark font-semibold">
          {isVendor ? "You're in" : "Received"}
        </div>
        <h1 className="mt-4 font-display font-medium text-ink text-4xl md:text-6xl tracking-tight leading-[1.05]">
          {isVendor ? <>Welcome to <em>Qloqal.</em></> : <>Thanks — <em>we got it.</em></>}
        </h1>
        <p className="mt-6 text-lg text-muted-ink max-w-xl mx-auto leading-relaxed">
          {isVendor
            ? "We'll reach out on WhatsApp shortly to help you list your top items and go live. Keep an eye on your messages."
            : "A real human will reply within one business day. In the meantime, feel free to explore the rest of Qloqal."}
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link to="/" className="inline-flex items-center gap-2 bg-ink text-white font-semibold rounded-md px-5 py-3.5">Back home</Link>
          <Link to="/product" className="inline-flex items-center gap-2 border border-border text-ink font-semibold rounded-md px-5 py-3 hover:border-ink">
            See how Qloqal works <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
