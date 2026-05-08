import SEO from "@/components/SEO";
import PageHeader from "@/components/layout/PageHeader";
import Section from "@/components/ui/Section";
import KickerLabel from "@/components/ui/KickerLabel";
import Stamp from "@/components/ui/Stamp";
import Highlight from "@/components/ui/Highlight";
import Button from "@/components/ui/Button";
import { MANIFESTO } from "@/data/manifesto";
import { cn } from "@/lib/cn";

export default function About() {
  return (
    <>
      <SEO
        title="About — the manifesto"
        description="A short manifesto from the team behind Qloqal. Eight numbered claims. No founder portraits. No corporate fluff."
        canonical="/about"
      />
      <PageHeader
        fileNo="FILE · ABOUT-04"
        kicker="manifesto · 08 claims"
        title={
          <>
            We do not <br />
            <Highlight tone="green">ask shop owners</Highlight> <br />
            to install another app.
          </>
        }
        intro="Qloqal exists for a single bet: small businesses already live on WhatsApp, and the right product is the one that meets them there."
        fill="paper"
      />

      {/* Manifesto */}
      <Section className="bg-[var(--color-paper-2)] border-b-2 border-ink">
        <div className="mb-6 flex items-end justify-between">
          <KickerLabel tone="green">eight claims</KickerLabel>
          <span className="hidden text-[10px] uppercase tracking-widest text-[var(--color-ink-mute)] md:inline">
            FILED 2026
          </span>
        </div>

        <ol className="flex flex-col gap-0">
          {MANIFESTO.map((m, i) => (
            <li
              key={m.index}
              className={cn(
                "grid grid-cols-1 gap-4 border-2 border-ink p-6 -mt-[2px] md:grid-cols-[140px_1fr] md:items-start",
                i % 2 === 0
                  ? "bg-[var(--color-paper)]"
                  : "bg-[var(--color-paper-3)]",
                i === 7 && "bg-[var(--color-signal-green)]",
              )}
            >
              <div className="flex items-center gap-2">
                <Stamp tone={i === 7 ? "ink" : "green"}>{m.index}</Stamp>
              </div>
              <div>
                <p className="font-mono text-[18px] leading-snug md:text-[24px]">
                  {m.text}
                </p>
                {m.emphasis && (
                  <p className="mt-2 text-[14px] font-bold uppercase tracking-wider">
                    <Highlight tone="yellow">{m.emphasis}</Highlight>
                  </p>
                )}
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* values stamps */}
      <Section>
        <KickerLabel tone="green">we believe</KickerLabel>
        <h2 className="mt-1 font-mono text-[28px] md:text-[40px]">
          Three things we keep saying out loud.
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-0 md:grid-cols-3">
          {[
            {
              title: "Operational simplicity",
              body: "If the owner has to learn anything beyond two buttons, we did it wrong.",
            },
            {
              title: "Honest plumbing",
              body: "We don't pretend to know things we don't — including where a delivery rider is right now.",
            },
            {
              title: "No paid placement",
              body: "The shop closest to the customer wins. We do not sell ranking, ever.",
            },
          ].map((v, i) => (
            <article
              key={v.title}
              className={cn(
                "flex flex-col gap-3 border-2 border-ink p-6 -ml-[2px] -mt-[2px]",
                i === 1
                  ? "bg-[var(--color-signal-yellow)]"
                  : "bg-[var(--color-paper)]",
              )}
            >
              <span className="font-mono text-[36px] font-bold leading-none">
                #{String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-[16px] font-bold uppercase tracking-wider">
                {v.title}
              </h3>
              <p className="text-[13px] leading-relaxed">{v.body}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="border-y-2 border-ink bg-[var(--color-ink)] text-[var(--color-paper)]">
        <div className="mx-auto flex max-w-[1280px] flex-col items-start justify-between gap-4 px-4 py-10 md:flex-row md:items-center md:px-8">
          <h3 className="font-mono text-[24px] leading-tight md:text-[32px]">
            Want to talk to us about any of this?
          </h3>
          <Button to="/contact" variant="fill-green" size="lg" data-cta="about-cta-contact">
            DM us
          </Button>
        </div>
      </section>
    </>
  );
}
