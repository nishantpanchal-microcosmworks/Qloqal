import { Star } from "lucide-react";
import { Section } from "@/components/primitives/Section";
import { Container } from "@/components/primitives/Container";
import { GlassCard } from "@/components/primitives/GlassCard";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <Section className="bg-surface-container-low">
      <Container>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <GlassCard key={t.name} className="p-10">
              <div className="flex gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={18} className="text-primary fill-primary" />
                ))}
              </div>
              <p className="text-body-lg text-on-surface mb-10 italic">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-surface-bright flex items-center justify-center text-body-sm font-bold text-on-surface">
                  {t.initials}
                </div>
                <div>
                  <p className="text-body-md font-bold text-on-surface">{t.name}</p>
                  <p className="text-body-sm text-on-surface-variant">{t.role}</p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </Container>
    </Section>
  );
}
