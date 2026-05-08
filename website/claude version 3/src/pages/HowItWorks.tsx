import { SEO } from "@/components/SEO";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { BentoTile } from "@/components/ui/BentoTile";
import { PageHero } from "@/components/sections/PageHero";
import { ArrowDoodle } from "@/components/decor/ArrowDoodle";
import { CTATile } from "@/components/bento/CTATile";
import { HOW_IT_WORKS_STEPS } from "@/data/steps";
import { IMAGES } from "@/data/images";

const STEP_IMAGES = ["paper", "hands", "postcard", "coffee"] as const;

export default function HowItWorks() {
  return (
    <>
      <SEO
        title="How it works — Qloqal"
        description="From an empty WhatsApp number to a working online shop, in under an afternoon."
        path="/how-it-works"
      />

      <PageHero
        kicker="how it works"
        title={
          <>
            Four small steps,{" "}
            <span className="ink-italic text-[var(--color-primary)]">one quiet afternoon.</span>
          </>
        }
        body="No theme picking, no plugin shopping, no developer involved. We help you go from an empty WhatsApp number to a real, paying shop — at the speed of a real conversation."
        actions={<Button to="/vendors" variant="primary" size="lg">Start setting up</Button>}
      />

      <Container className="py-10 lg:py-12">
        <ol className="space-y-8 lg:space-y-12">
          {HOW_IT_WORKS_STEPS.map((step, i) => {
            const reverse = i % 2 === 1;
            const img = IMAGES[STEP_IMAGES[i % STEP_IMAGES.length]];
            return (
              <li key={step.number} className="relative">
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-stretch ${
                    reverse ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <BentoTile tone={reverse ? "warm" : "paper"} span="lg:col-span-7" className="flex flex-col gap-4 justify-between">
                    <div>
                      <span className="font-mono text-2xl text-[var(--color-mustard)]">·{step.number}</span>
                      <h2 className="font-display text-3xl lg:text-4xl mt-3 leading-tight">{step.title}</h2>
                      <p className="mt-3 text-[var(--color-on-surface-variant)] leading-relaxed text-[17px] max-w-xl">
                        {step.body}
                      </p>
                    </div>
                    <span className="kicker self-start">duration · {step.duration}</span>
                  </BentoTile>

                  <BentoTile tone="image" span="lg:col-span-5" className="p-0 overflow-hidden min-h-[260px]">
                    <div className="relative h-full">
                      {img ? (
                        <img src={img.url} alt={img.alt} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                      ) : null}
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)]/40 to-transparent" />
                    </div>
                  </BentoTile>
                </div>

                {i < HOW_IT_WORKS_STEPS.length - 1 ? (
                  <div className="hidden lg:flex justify-center my-2">
                    <ArrowDoodle flip={reverse} className="w-16 h-12 opacity-60" color="var(--color-mustard)" />
                  </div>
                ) : null}
              </li>
            );
          })}
        </ol>

        <div className="mt-10 lg:mt-14">
          <CTATile
            span="lg:col-span-12"
            title="The afternoon awaits."
            body="Bring a phone with a halfway-decent camera. We’ll bring everything else."
          />
        </div>
      </Container>
    </>
  );
}
