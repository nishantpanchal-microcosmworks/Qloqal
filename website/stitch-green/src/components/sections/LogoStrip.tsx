import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PARTNER_LOGOS } from "@/data/testimonials";

export function LogoStrip() {
  return (
    <Section
      bg="lowest"
      className="!py-12 opacity-50 transition-opacity hover:opacity-100"
    >
      <Container>
        <p className="mb-8 text-center text-xs font-semibold uppercase tracking-wider text-on-surface-variant">
          Companies building with Qloqal
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 grayscale transition-all hover:grayscale-0">
          {PARTNER_LOGOS.map((logo) => (
            <div
              key={logo}
              className="font-display text-base font-black tracking-tight text-on-surface-variant md:text-lg"
            >
              {logo}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
