import { createFileRoute, Link } from "@tanstack/react-router";
import { Seo } from "@/components/Seo";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <Seo title="About Qloqal — Putting local shops online without changing how they work" description="Local shops are the heart of every neighbourhood. Qloqal puts them online without forcing them to change how they work." />
      <section className="container-pad mx-auto max-w-4xl py-16">
        <h1 className="font-display font-extrabold text-[clamp(2.25rem,5vw,4rem)] leading-[1.05]">Local shops are the heart of every neighbourhood.</h1>
        <p className="mt-5 text-lg text-muted-ink">We're putting them online without forcing them to change how they work. No new app. No new device. No training. Just a message on the WhatsApp they already use.</p>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {[
            { t: "Operational simplicity", d: "If a tool requires training, small shops won't adopt it. We removed the training." },
            { t: "Fair economics", d: "No monthly fees, no setup costs. We make money only when shops make money." },
            { t: "Truly local", d: "Only shops within walking and quick-delivery distance. Hyperlocal by design." },
          ].map(b => (
            <div key={b.t} className="rounded-2xl bg-white border border-border p-6">
              <div className="font-display font-bold">{b.t}</div>
              <p className="mt-2 text-sm text-muted-ink">{b.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-3xl bg-surface border border-border p-8 flex flex-col md:flex-row gap-6 items-start">
          <div className="h-20 w-20 rounded-2xl bg-brand-green flex items-center justify-center font-display font-extrabold text-3xl text-ink shrink-0">Q</div>
          <div>
            <div className="text-xs uppercase tracking-wider text-brand-blue font-bold">Founder note</div>
            <p className="mt-2 text-ink">"We talked to dozens of shop owners before writing a line of code. Every one of them said the same thing: I don't have time for another app. So we built Qloqal where they already are."</p>
            <p className="mt-3 text-sm text-muted-ink">— The Qloqal team</p>
          </div>
        </div>

        <div className="mt-10">
          <Link to="/contact" className="text-brand-blue font-semibold underline-offset-4 hover:underline">Get in touch →</Link>
        </div>
      </section>
    </>
  );
}
