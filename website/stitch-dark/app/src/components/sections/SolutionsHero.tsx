import { ArrowRight } from "lucide-react";
import { Container } from "@/components/primitives/Container";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { GlassCard } from "@/components/primitives/GlassCard";
import { GlowHalo } from "@/components/primitives/GlowHalo";
import { Logo } from "@/components/primitives/Logo";
import { Button } from "@/components/ui/button";

export function SolutionsHero() {
  return (
    <section className="relative py-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="z-10">
          <Eyebrow className="mb-4">Hyperlocal Commerce</Eyebrow>
          <h1 className="font-display text-h1 mb-6 leading-tight">
            Tailored Solutions for{" "}
            <span className="text-gradient-primary">Every Main Street</span> Business.
          </h1>
          <p className="text-body-lg text-on-surface-variant mb-10 max-w-lg">
            Bridge the gap between your physical storefront and the world's most popular
            messaging app. Industry-specific workflows designed to scale your local impact.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="xl" data-cta="solutions-hero">
              View All Solutions
              <ArrowRight size={18} />
            </Button>
          </div>
        </div>
        <div className="relative">
          <GlowHalo size="lg" color="blend" className="-inset-4" />
          <GlassCard className="relative p-10 flex items-center justify-center aspect-[4/3] bg-white">
            <Logo className="scale-[3]" />
          </GlassCard>
        </div>
      </Container>
    </section>
  );
}
