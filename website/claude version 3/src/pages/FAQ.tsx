import { SEO } from "@/components/SEO";
import { Container } from "@/components/ui/Container";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/sections/PageHero";
import { CTATile } from "@/components/bento/CTATile";
import { FAQ_GROUPS } from "@/data/faqs";

export default function FAQ() {
  return (
    <>
      <SEO
        title="Questions — Qloqal"
        description="Honest answers to the questions shopkeepers actually ask."
        path="/faq"
      />

      <PageHero
        kicker="questions"
        title={
          <>
            Honest answers to{" "}
            <span className="ink-italic text-[var(--color-primary)]">the things shopkeepers actually ask.</span>
          </>
        }
        body="If yours isn’t here, write to us. We answer every message ourselves."
        actions={<Button to="/contact" variant="primary" size="lg">Ask a question</Button>}
      />

      <Container className="py-10 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-10 lg:gap-16">
          <aside className="lg:sticky lg:top-28 self-start">
            <span className="kicker">jump to</span>
            <ul className="mt-3 space-y-2">
              {FAQ_GROUPS.map((g) => (
                <li key={g.heading}>
                  <a
                    href={`#${g.heading.toLowerCase().replace(/\s/g, "-")}`}
                    className="text-[15px] text-[var(--color-on-surface)] hover:text-[var(--color-primary)] transition-colors block py-1"
                  >
                    {g.heading}
                  </a>
                </li>
              ))}
            </ul>
          </aside>

          <div className="space-y-12">
            {FAQ_GROUPS.map((g) => (
              <section key={g.heading} id={g.heading.toLowerCase().replace(/\s/g, "-")} className="scroll-mt-32">
                <h2 className="font-display text-2xl lg:text-3xl mb-2">{g.heading}</h2>
                <Accordion items={g.items} />
              </section>
            ))}
          </div>
        </div>
      </Container>

      <Container className="py-10 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5">
          <CTATile
            span="lg:col-span-12"
            title="Still curious?"
            body="A real human will write back. We promise."
            primary={{ label: "Email us", to: "/contact" }}
            secondary={{ label: "See pricing", to: "/pricing" }}
          />
        </div>
      </Container>
    </>
  );
}
