import { Section } from "@/components/primitives/Section";
import { Container } from "@/components/primitives/Container";
import { GlassCard } from "@/components/primitives/GlassCard";
import { trustedBrands } from "@/data/trusted";

export function TrustedBy() {
  return (
    <Section className="bg-surface-container-low overflow-hidden">
      <Container className="text-center mb-10">
        <h2 className="font-display text-h2 mb-4">Trusted by Local Heroes</h2>
        <p className="text-on-surface-variant">
          Empowering over 5,000+ local businesses worldwide.
        </p>
      </Container>
      <div className="flex gap-6 px-gutter justify-center flex-wrap">
        {trustedBrands.map(({ label, icon: Icon, iconClassName }) => (
          <GlassCard
            key={label}
            className="px-10 py-6 flex items-center gap-4"
          >
            <Icon size={24} className={iconClassName} />
            <span className="font-display text-h3 text-on-surface">{label}</span>
          </GlassCard>
        ))}
      </div>
    </Section>
  );
}
