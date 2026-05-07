import { createFileRoute, Link } from "@tanstack/react-router";
import { z } from "zod";
import { Seo } from "@/components/Seo";
import { CheckCircle2 } from "lucide-react";

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
      <section className="container-pad mx-auto max-w-2xl py-24 text-center">
        <div className="mx-auto h-20 w-20 rounded-3xl bg-brand-green flex items-center justify-center">
          <CheckCircle2 className="h-10 w-10 text-ink" />
        </div>
        <h1 className="mt-6 font-display font-extrabold text-4xl md:text-5xl">
          {isVendor ? "Welcome to Qloqal." : "Thanks — we got it."}
        </h1>
        <p className="mt-4 text-lg text-muted-ink">
          {isVendor
            ? "We'll reach out on WhatsApp shortly to help you list your top items and go live. Keep an eye on your messages."
            : "A real human will reply within one business day. In the meantime, feel free to explore the rest of Qloqal."}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/" className="bg-brand-green text-ink font-semibold rounded-xl px-5 py-3.5">Back home</Link>
          <Link to="/how-it-works" className="border-2 border-brand-blue text-brand-blue font-semibold rounded-xl px-5 py-3">See how Qloqal works</Link>
        </div>
      </section>
    </>
  );
}
