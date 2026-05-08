import { SEO } from "@/components/SEO";
import { Container } from "@/components/ui/Container";
import { BentoTile } from "@/components/ui/BentoTile";
import { Button } from "@/components/ui/Button";
import { Stamp } from "@/components/ui/Stamp";
import { PageHero } from "@/components/sections/PageHero";
import { CTATile } from "@/components/bento/CTATile";
import { IMAGES } from "@/data/images";

const VALUES = [
  {
    label: "small on purpose",
    body: "We don’t plan to be a hundred-person company. The shops we serve aren’t hundred-person companies either.",
  },
  {
    label: "make less, mean more",
    body: "Every feature is chosen because a real shopkeeper asked for it. Most weeks we ship by removing things, not adding them.",
  },
  {
    label: "no sneaky maths",
    body: "No per-order cuts, no card-on-file ambushes, no ‘premium’ paywalls for things that should be free. Honest pricing, every time.",
  },
  {
    label: "warmth as feature",
    body: "Software can be efficient and still feel like it was made by people. We try to never forget the second part.",
  },
];

export default function About() {
  return (
    <>
      <SEO
        title="About — Qloqal"
        description="We’re a small team building software for small shops. That’s most of the story."
        path="/about"
      />

      <PageHero
        kicker="about"
        title={
          <>
            We’re a small team{" "}
            <span className="ink-italic text-[var(--color-primary)]">building software for small shops.</span>
          </>
        }
        body="That’s most of the story. We grew up working in our families’ businesses — bakeries, repair counters, a record shop — and got tired of watching beautiful neighbourhoods lose to big-box convenience. Qloqal is our quiet attempt to even the scoreboard."
        actions={<Button to="/contact" variant="primary" size="lg">Say hello</Button>}
      />

      <Container className="py-10 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5">
          <BentoTile tone="paper" span="lg:col-span-7" className="flex flex-col gap-5">
            <Stamp label="dear shopkeepers," tone="primary" rotate="l" className="self-start" />
            <div className="font-display text-lg lg:text-xl leading-relaxed text-[var(--color-on-surface)]/90 space-y-4 ink-italic">
              <p>
                When the high street started to thin out, we kept thinking the
                same thing — most of these shops don’t need a sleeker logo or
                another platform to manage. They need someone to take the
                noisier half of the day off their hands.
              </p>
              <p>
                We tried to make Qloqal feel like a quiet, polite shop assistant.
                It answers when you’re asleep, files your orders neatly, doesn’t
                steal your tips, and doesn’t pretend to be human when it isn’t.
              </p>
              <p>That’s it. That’s the whole pitch.</p>
              <p className="not-italic font-body text-sm text-[var(--color-on-surface-variant)] mt-6">— The Qloqal team</p>
            </div>
          </BentoTile>

          <BentoTile tone="image" span="lg:col-span-5" className="p-0 overflow-hidden min-h-[420px]">
            <div className="relative h-full min-h-[420px]">
              <img src={IMAGES.paper.url} alt={IMAGES.paper.alt} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)]/40 to-transparent" />
            </div>
          </BentoTile>

          {VALUES.map((v, i) => (
            <BentoTile key={v.label} tone={i % 2 ? "warm" : "paper"} span="lg:col-span-3" interactive>
              <span className="kicker">·{String(i + 1).padStart(2, "0")}</span>
              <h3 className="font-display text-xl mt-2 leading-snug">{v.label}</h3>
              <p className="text-sm text-[var(--color-on-surface-variant)] leading-relaxed mt-3">{v.body}</p>
            </BentoTile>
          ))}

          <CTATile
            span="lg:col-span-12"
            title="Want to know more?"
            body="We answer every email ourselves. There’s no contact form between you and a real person."
            primary={{ label: "Talk to us", to: "/contact" }}
            secondary={{ label: "Read the FAQ", to: "/faq" }}
          />
        </div>
      </Container>
    </>
  );
}
