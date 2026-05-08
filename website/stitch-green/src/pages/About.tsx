import { SEO } from "@/components/SEO";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { CTABand } from "@/components/sections/CTABand";

const PILLARS = [
  {
    icon: "diversity_3",
    title: "Local first, always.",
    body: "We back the shops that hold neighborhoods together — the bakers, grocers, and corner stores who already know your name.",
  },
  {
    icon: "bolt",
    title: "Tools, not friction.",
    body: "Every feature must work on the phone a shop owner already owns. If it requires training, it doesn't ship.",
  },
  {
    icon: "favorite",
    title: "Customer relationships are sacred.",
    body: "Merchants own their customer data. Always. We're a layer that disappears the moment we stop earning our keep.",
  },
];

const ROADMAP = [
  {
    phase: "Phase 1",
    title: "Pilot",
    body: "Onboard our first 50 founding merchants and prove the WhatsApp ordering loop end-to-end.",
  },
  {
    phase: "Phase 2",
    title: "Services",
    body: "Add bookings and services alongside products. Multilingual bot replies.",
  },
  {
    phase: "Phase 3",
    title: "Subscriptions",
    body: "Recurring orders, subscriptions, and household-level loyalty for repeat customers.",
  },
  {
    phase: "Phase 4",
    title: "Expansion",
    body: "New markets, AI-powered demand forecasting, and merchant-to-merchant supply.",
  },
];

export default function About() {
  return (
    <>
      <SEO
        title="About Qloqal"
        description="Qloqal is the commerce stack for the world's local shops — built on the messaging app they already love."
        path="/about"
      />

      <Hero
        eyebrow="About"
        title={
          <>
            We're building the commerce stack <br />
            for local shops.
          </>
        }
        subtitle="Local commerce is bigger than any marketplace. Qloqal is the operating layer that lets it grow without compromising what makes it special."
      />

      <Section bg="lowest" className="!pt-0">
        <Container>
          <div className="mx-auto max-w-3xl space-y-6 text-lg leading-relaxed text-on-surface-variant">
            <p>
              Local shops have always been the backbone of every neighborhood —
              they know your name, your usual, and your kid's birthday. What
              they didn't have was a way to be found online without giving up
              their margins, their relationships, and their evenings to learn
              yet another tool.
            </p>
            <p>
              We started Qloqal because the playbook was upside-down. Big
              platforms won by demanding shops change. We win by meeting shops
              exactly where they already are: WhatsApp, with a phone they
              already own.
            </p>
            <p>
              The result is a commerce stack that takes ten minutes to set up
              and pays for itself with the very first order. Our job is to
              compound that advantage every quarter.
            </p>
          </div>
        </Container>
      </Section>

      <Section bg="default">
        <Container>
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            What we believe
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {PILLARS.map((p) => (
              <Card key={p.title} hover>
                <span
                  className="material-symbols-outlined mb-4 text-primary"
                  style={{ fontSize: 32 }}
                  aria-hidden="true"
                >
                  {p.icon}
                </span>
                <h3 className="mb-2 text-lg font-bold">{p.title}</h3>
                <p className="text-sm leading-relaxed text-on-surface-variant">
                  {p.body}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section bg="lowest">
        <Container>
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-10 text-center text-3xl font-bold md:text-4xl">
              Roadmap
            </h2>
            <div className="space-y-5">
              {ROADMAP.map((r) => (
                <div
                  key={r.phase}
                  className="flex items-start gap-6 rounded-[24px] bg-surface-container-lowest p-6 card-shadow"
                >
                  <span className="rounded-full bg-primary px-4 py-2 text-xs font-semibold uppercase tracking-wider text-on-primary">
                    {r.phase}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold">{r.title}</h3>
                    <p className="mt-1 text-on-surface-variant">{r.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section bg="bright">
        <Container>
          <div className="mx-auto max-w-2xl rounded-[32px] bg-surface-container-lowest p-10 text-center card-shadow">
            <div className="mx-auto mb-6 h-24 w-24 rounded-full bg-gradient-to-br from-primary to-secondary" />
            <h3 className="text-xl font-bold">Founder note</h3>
            <p className="mt-3 text-on-surface-variant">
              "We're early and we know it. If you're a merchant or a curious
              builder, we'd love to hear from you — every conversation shapes
              what ships next."
            </p>
            <p className="mt-4 text-sm font-semibold uppercase tracking-wider">
              The Qloqal team
            </p>
            <div className="mt-8">
              <Button to="/contact" variant="primary" size="md">
                Say hello
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <CTABand
        title="Let's grow your shop together."
        primary={{ label: "Start selling", to: "/vendors" }}
        secondary={{ label: "Talk to us", to: "/contact" }}
      />
    </>
  );
}
