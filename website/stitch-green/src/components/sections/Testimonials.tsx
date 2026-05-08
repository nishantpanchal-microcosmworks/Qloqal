import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { TESTIMONIALS } from "@/data/testimonials";
import { cn } from "@/lib/cn";

export function Testimonials() {
  return (
    <Section bg="bright">
      <Container>
        <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
          Loved by local owners.
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="rounded-[24px] bg-surface-container-lowest p-8 card-shadow card-shadow-hover"
            >
              <p
                className={cn(
                  "mb-4 font-display text-4xl font-extrabold md:text-5xl",
                  t.color === "primary" ? "text-primary" : "text-secondary",
                )}
              >
                {t.stat}
              </p>
              <p className="mb-6 text-lg leading-relaxed">"{t.quote}"</p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-surface-container" />
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider">
                    {t.name}
                  </p>
                  <p className="text-xs text-on-surface-variant">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-on-surface-variant">
          Sample testimonials — real merchant stories will replace these as
          partners onboard.
        </p>
      </Container>
    </Section>
  );
}
