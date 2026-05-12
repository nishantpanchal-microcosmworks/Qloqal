import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Seo } from "@/components/Seo";
import { Bleed } from "@/components/layout/Bleed";

export const Route = createFileRoute("/about")({ component: AboutPage });

function AboutPage() {
  return (
    <>
      <Seo
        title="About Qloqal — Putting local shops online without changing how they work"
        description="Local shops are the heart of every neighbourhood. Qloqal puts them online without forcing them to change how they work."
      />

      <section className="container-pad mx-auto max-w-4xl pt-20 md:pt-28 pb-12">
        <div className="text-[11px] tracking-[0.2em] uppercase text-brand-green-dark font-semibold">About</div>
        <h1 className="mt-5 font-display font-medium text-ink text-[clamp(2.5rem,7vw,6rem)] leading-[0.98] tracking-tight">
          Local shops are the <em>heart</em> of every neighbourhood.
        </h1>
        <p className="mt-7 text-xl text-muted-ink max-w-2xl leading-relaxed">
          We're putting them online without forcing them to change how they work. No new app. No new device. No training. Just a message on the WhatsApp they already use.
        </p>
      </section>

      <section className="container-pad mx-auto max-w-4xl py-12 ruled">
        {[
          { t: "Operational simplicity", d: "If a tool requires training, small shops won't adopt it. We removed the training. Then we removed the tool." },
          { t: "Fair economics", d: "No monthly fees, no setup costs, no tablet rental. We make money only when shops make money." },
          { t: "Truly local", d: "Only shops within walking and quick-delivery distance. Hyperlocal by design, not by marketing." },
        ].map((b, i) => (
          <article key={b.t} className="grid md:grid-cols-[4rem_1fr] gap-6">
            <div className="num-marker text-4xl tabular-nums opacity-60">{String(i + 1).padStart(2, "0")}</div>
            <div>
              <h2 className="font-display font-medium text-2xl md:text-3xl text-ink tracking-tight">{b.t}</h2>
              <p className="mt-3 text-muted-ink text-lg leading-relaxed max-w-xl">{b.d}</p>
            </div>
          </article>
        ))}
      </section>

      <Bleed>
        <section className="bg-cream hairline-t hairline-b py-20">
          <div className="container-pad mx-auto max-w-3xl">
            <div className="text-[11px] tracking-[0.2em] uppercase text-brand-green-dark font-semibold">Founder note</div>
            <p className="mt-4 font-display font-medium text-2xl md:text-3xl text-ink leading-snug">
              "We talked to dozens of shop owners before writing a line of code. Every one of them said the same thing: <em>I don't have time for another app.</em> So we built Qloqal where they already are."
            </p>
            <p className="mt-5 text-sm text-muted-ink uppercase tracking-wider">— The Qloqal team</p>
          </div>
        </section>
      </Bleed>

      <section className="container-pad mx-auto max-w-4xl py-16">
        <Link to="/contact" className="inline-flex items-center gap-2 text-brand-blue-dark font-semibold hover:underline underline-offset-4">
          Get in touch <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </>
  );
}
