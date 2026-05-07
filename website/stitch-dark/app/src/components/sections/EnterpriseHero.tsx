import { Container } from "@/components/primitives/Container";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { GlassCard } from "@/components/primitives/GlassCard";
import { GlowHalo } from "@/components/primitives/GlowHalo";
import { Logo } from "@/components/primitives/Logo";
import { Button } from "@/components/ui/button";

export function EnterpriseHero() {
  return (
    <section className="relative overflow-hidden py-16 md:py-32 border-b border-white/5">
      <GlowHalo size="xl" color="primary" className="top-1/4 -right-1/4" />
      <GlowHalo size="xl" color="secondary" className="bottom-1/4 -left-1/4" />
      <Container className="relative z-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <Eyebrow className="mb-4">Enterprise Solutions</Eyebrow>
            <h1 className="font-display text-h1 text-on-surface mb-4">
              Hyperlocal scale. Global <span className="text-primary">Reliability.</span>
            </h1>
            <p className="text-body-lg text-on-surface-variant mb-10 max-w-lg">
              Empower your multi-vendor ecosystem with Qloqal's enterprise infrastructure.
              Custom APIs, dedicated support, and military-grade security built for the
              next generation of commerce.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="xl" data-cta="enterprise-hero-demo">
                Request Demo
              </Button>
              <Button variant="outline" size="xl" data-cta="enterprise-hero-arch">
                View Architecture
              </Button>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000" />
            <GlassCard className="relative p-4 aspect-square flex items-center justify-center bg-white">
              <Logo className="scale-[3]" />
            </GlassCard>
          </div>
        </div>
      </Container>
    </section>
  );
}
