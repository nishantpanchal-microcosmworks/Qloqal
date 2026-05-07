import { ArrowRight } from "lucide-react";
import { Container } from "@/components/primitives/Container";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { GlowHalo } from "@/components/primitives/GlowHalo";
import { Button } from "@/components/ui/button";
import { featuredResource } from "@/data/resources";

export function ResourcesFeatured() {
  return (
    <section className="py-16">
      <Container>
        <div className="relative w-full rounded-xl overflow-hidden min-h-[420px] flex items-end p-10 md:p-16 bg-gradient-to-br from-surface-container-high via-surface-container to-surface-container-low border border-white/10">
          <GlowHalo size="xl" color="primary" className="-top-20 -right-20" />
          <GlowHalo size="lg" color="secondary" className="-bottom-20 -left-20" />
          <div className="relative z-10 max-w-3xl">
            <Eyebrow className="mb-4">{featuredResource.category}</Eyebrow>
            <h1 className="font-display text-h1 text-on-surface mb-4">
              {featuredResource.title}
            </h1>
            <p className="text-body-lg text-on-surface-variant mb-10">
              {featuredResource.description}
            </p>
            <Button size="lg" data-cta="resources-featured">
              {featuredResource.ctaLabel}
              <ArrowRight size={18} />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
