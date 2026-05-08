import { useState } from "react";
import SEO from "@/components/SEO";
import PageHeader from "@/components/layout/PageHeader";
import Section from "@/components/ui/Section";
import KickerLabel from "@/components/ui/KickerLabel";
import Highlight from "@/components/ui/Highlight";
import Button from "@/components/ui/Button";
import { FAQ_GROUPS } from "@/data/faqs";
import { cn } from "@/lib/cn";

export default function FAQ() {
  const [open, setOpen] = useState<string | null>(
    FAQ_GROUPS[0].entries[0].q,
  );
  return (
    <>
      <SEO
        title="FAQ — answers without the runaround"
        description="Plain answers to the most common questions about Qloqal — for shop owners, customers, and anyone wondering how the money moves."
        canonical="/faq"
      />
      <PageHeader
        fileNo="FILE · FAQ-04"
        kicker="answers · plain"
        title={
          <>
            <Highlight tone="yellow">Real questions.</Highlight> <br />
            Real answers.
          </>
        }
        intro="If a question isn't here, it's not on purpose. Send it to us and we'll add it."
        fill="paper-2"
      />

      <Section>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          {/* sidebar */}
          <aside className="md:col-span-3">
            <KickerLabel tone="green">categories</KickerLabel>
            <ul className="mt-3 flex flex-col gap-1 text-[12px]">
              {FAQ_GROUPS.map((g) => (
                <li key={g.id}>
                  <a
                    href={`#${g.id}`}
                    className="block border-2 border-ink bg-[var(--color-paper-3)] px-3 py-2 font-bold uppercase tracking-widest no-underline hover:bg-[var(--color-signal-yellow)]"
                  >
                    [ {g.id.slice(0, 1).toUpperCase()} ] {g.label}
                  </a>
                </li>
              ))}
            </ul>
          </aside>

          {/* groups */}
          <div className="flex flex-col gap-12 md:col-span-9">
            {FAQ_GROUPS.map((group) => (
              <div key={group.id} id={group.id}>
                <KickerLabel tone="green">{group.label}</KickerLabel>
                <h2 className="mt-1 font-mono text-[24px] md:text-[32px]">
                  {group.label} · {group.entries.length} answers
                </h2>
                <ul className="mt-4 flex flex-col">
                  {group.entries.map((entry) => {
                    const isOpen = open === entry.q;
                    return (
                      <li
                        key={entry.q}
                        className={cn(
                          "border-2 border-ink -mt-[2px]",
                          isOpen
                            ? "bg-[var(--color-paper-3)]"
                            : "bg-[var(--color-paper)]",
                        )}
                      >
                        <button
                          type="button"
                          aria-expanded={isOpen}
                          onClick={() => setOpen(isOpen ? null : entry.q)}
                          className="flex w-full items-center justify-between gap-4 px-4 py-3 text-left"
                        >
                          <span className="text-[14px] font-bold">
                            Q. {entry.q}
                          </span>
                          <span
                            aria-hidden
                            className="font-mono text-[14px] font-bold"
                          >
                            {isOpen ? "—" : "+"}
                          </span>
                        </button>
                        {isOpen && (
                          <div className="border-t-2 border-dashed border-ink px-4 py-3 text-[13px] leading-relaxed">
                            A. {entry.a}
                          </div>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <section className="border-y-2 border-ink bg-[var(--color-signal-green)]">
        <div className="mx-auto flex max-w-[1280px] flex-col items-start justify-between gap-4 px-4 py-10 md:flex-row md:items-center md:px-8">
          <h3 className="font-mono text-[24px] leading-tight md:text-[32px]">
            Couldn't find your question?
          </h3>
          <Button to="/contact" variant="primary" size="lg" data-cta="faq-cta-contact">
            DM us
          </Button>
        </div>
      </section>
    </>
  );
}
