import { Section } from "@/components/primitives/Section";
import { Container } from "@/components/primitives/Container";
import { StatBlock } from "@/components/primitives/StatBlock";
import { enterpriseStats } from "@/data/stats";

export function EnterpriseStats() {
  return (
    <Section className="border-y border-white/5 bg-surface-container-lowest">
      <Container className="grid grid-cols-2 md:grid-cols-4 gap-10">
        {enterpriseStats.map((stat) => (
          <StatBlock key={stat.label} value={stat.value} label={stat.label} />
        ))}
      </Container>
    </Section>
  );
}
