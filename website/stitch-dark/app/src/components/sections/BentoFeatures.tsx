import { Section } from "@/components/primitives/Section";
import { Container } from "@/components/primitives/Container";
import { GradientBorderCard } from "@/components/primitives/GradientBorderCard";
import { homeFeatures } from "@/data/features";
import { cn } from "@/lib/utils";

export function BentoFeatures() {
  return (
    <Section>
      <Container>
        <h2 className="font-display text-h2 text-center mb-16">
          Everything you need to dominate your neighborhood
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {homeFeatures.map(({ icon: Icon, iconClassName, title, description, span }) => (
            <GradientBorderCard
              key={title}
              className={cn("p-10", span === "wide" ? "md:col-span-2" : "md:col-span-1")}
            >
              <Icon size={28} className={cn("mb-4", iconClassName)} />
              <h3 className="font-display text-h3 mb-4">{title}</h3>
              <p className="text-on-surface-variant">{description}</p>
            </GradientBorderCard>
          ))}
        </div>
      </Container>
    </Section>
  );
}
