import { createFileRoute } from "@tanstack/react-router";
import { Helmet } from "react-helmet-async";
import { SolutionsHero } from "@/components/sections/SolutionsHero";
import { SolutionsBento } from "@/components/sections/SolutionsBento";
import { Container } from "@/components/primitives/Container";
import { GlassCard } from "@/components/primitives/GlassCard";
import { Button } from "@/components/ui/button";

function SolutionsCTA() {
  return (
    <section className="py-16 px-gutter">
      <Container className="max-w-4xl px-0">
        <GlassCard className="rounded-xl p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary" />
          <h2 className="font-display text-h2 mb-4">Ready to localize your digital reach?</h2>
          <p className="text-body-lg text-on-surface-variant mb-10 max-w-xl mx-auto">
            Join 500+ local businesses in Qloqal's beta program and transform your WhatsApp
            into a high-performance storefront.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" data-cta="solutions-cta-trial">
              Start Your Free Trial
            </Button>
            <Button variant="outline" size="lg" data-cta="solutions-cta-contact">
              Contact Sales
            </Button>
          </div>
        </GlassCard>
      </Container>
    </section>
  );
}

function Solutions() {
  return (
    <>
      <Helmet>
        <title>Solutions | Qloqal</title>
        <meta
          name="description"
          content="Industry-specific WhatsApp commerce workflows for grocery, pharmacy, salon, and lifestyle retail businesses."
        />
      </Helmet>
      <SolutionsHero />
      <SolutionsBento />
      <SolutionsCTA />
    </>
  );
}

export const Route = createFileRoute("/solutions")({
  component: Solutions,
});
