import { SEO } from "@/components/SEO";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { BentoTile } from "@/components/ui/BentoTile";
import { PageHero } from "@/components/sections/PageHero";
import { CTATile } from "@/components/bento/CTATile";
import { Stamp } from "@/components/ui/Stamp";
import { CATEGORIES } from "@/data/categories";
import { HOW_IT_WORKS_STEPS } from "@/data/steps";
import { IMAGES } from "@/data/images";

export default function Vendors() {
  return (
    <>
      <SEO
        title="For sellers — Qloqal"
        description="Open a small online shop without changing the way you already work. Catalog, payments, and polite auto-replies inside WhatsApp."
        path="/vendors"
      />

      <PageHero
        kicker="for sellers"
        title={
          <>
            A shop that{" "}
            <span className="ink-italic text-[var(--color-primary)]">
              doesn’t need a website,
            </span>{" "}
            because the chat already is one.
          </>
        }
        body="If you’ve ever sold something through a WhatsApp message, you already know how to use Qloqal. We just clean up the messy bits — listings, payments, and the questions you keep answering for the hundredth time."
        actions={
          <>
            <Button to="/pricing" variant="primary" size="lg">
              See pricing
            </Button>
            <Button to="/how-it-works" variant="secondary" size="lg">
              How it works
            </Button>
          </>
        }
      />

      <Container className="py-10 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5">
          <BentoTile tone="paper" span="lg:col-span-7" className="overflow-hidden p-0 min-h-[360px]">
            <div className="relative h-full">
              <img
                src={IMAGES.shopfront.url}
                alt={IMAGES.shopfront.alt}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)]/55 via-[var(--color-ink)]/15 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <span className="kicker text-[var(--color-mustard)]">your shop, online</span>
                <h2 className="font-display text-3xl text-[var(--color-surface)] mt-2 leading-tight">
                  Same shop, same regulars, just with the queue moved indoors.
                </h2>
              </div>
            </div>
          </BentoTile>

          <BentoTile tone="warm" span="lg:col-span-5" className="flex flex-col justify-between gap-5">
            <Stamp label="setup · today" sub="under an hour" rotate="r" tone="primary" className="self-start" />
            <ol className="space-y-4">
              {HOW_IT_WORKS_STEPS.map((step) => (
                <li key={step.number} className="flex gap-4">
                  <span className="font-mono text-xs text-[var(--color-mustard)] mt-1.5">·{step.number}</span>
                  <div>
                    <h3 className="font-display text-lg leading-snug">{step.title}</h3>
                    <p className="text-sm text-[var(--color-on-surface-variant)] leading-relaxed mt-0.5">
                      {step.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </BentoTile>

          {CATEGORIES.slice(0, 4).map((cat) => (
            <BentoTile key={cat.id} tone="paper" span="lg:col-span-3" interactive>
              <span className="kicker">·{cat.id}</span>
              <h3 className="font-display text-xl mt-2">{cat.label}</h3>
              <p className="text-sm text-[var(--color-on-surface-variant)] leading-relaxed mt-2">{cat.blurb}</p>
            </BentoTile>
          ))}

          {CATEGORIES.slice(4, 8).map((cat) => (
            <BentoTile key={cat.id} tone="warm" span="lg:col-span-3" interactive>
              <span className="kicker">·{cat.id}</span>
              <h3 className="font-display text-xl mt-2">{cat.label}</h3>
              <p className="text-sm text-[var(--color-on-surface-variant)] leading-relaxed mt-2">{cat.blurb}</p>
            </BentoTile>
          ))}

          <CTATile
            span="lg:col-span-12"
            title="Pour a coffee. Open the shutter."
            body="It really does take less time than you’d expect. Bring your phone — we’ll bring everything else."
          />
        </div>
      </Container>
    </>
  );
}
