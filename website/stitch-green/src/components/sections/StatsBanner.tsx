import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { STATS } from "@/data/whyWhatsApp";

export function StatsBanner() {
  return (
    <Section bg="bright">
      <Container>
        <div className="grid grid-cols-2 gap-12 text-center lg:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-5xl font-extrabold leading-none text-primary md:text-6xl">
                {stat.value}
              </p>
              <p className="mt-3 text-base text-on-surface-variant">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
