import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Quote } from "lucide-react";
import { Seo } from "@/components/Seo";
import { CTABand } from "@/components/CTABand";
import { Bleed } from "@/components/layout/Bleed";

export const Route = createFileRoute("/stories")({ component: StoriesPage });

type Story = {
  slug: string;
  kind: "shop" | "shopper";
  name: string;
  role: string;
  image: string;
  pull: string;
  body: string;
};

const stories: Story[] = [
  {
    slug: "marco-bakery",
    kind: "shop",
    name: "Marco",
    role: "Owner · neighborhood bakery",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=1200&q=80&auto=format&fit=crop",
    pull: "I get the order, I tap accept, I bake. That's the whole process.",
    body: "Marco's bakery had been on the same corner for eleven years before he listed on Qloqal. He didn't want a tablet. He didn't want another login. What he had was a WhatsApp thread he checked between batches. Within two weeks, that thread was also where his new orders arrived. Saturdays now sell out by ten.",
  },
  {
    slug: "priya-pharmacy",
    kind: "shop",
    name: "Priya",
    role: "Owner · family pharmacy",
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=1200&q=80&auto=format&fit=crop",
    pull: "Nobody at our shop wanted to learn another app. With WhatsApp, nobody had to.",
    body: "Priya runs the pharmacy with her brother and her cousin. Three people, one shop, one WhatsApp number. Orders show up like messages — which is exactly what they look like to whoever's at the counter. No retraining, no rota for who handles 'the app'. They just answer the thread.",
  },
  {
    slug: "daniel-repair",
    kind: "shop",
    name: "Daniel",
    role: "Owner · mobile-repair shop",
    image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=1200&q=80&auto=format&fit=crop",
    pull: "Setup took less than ten minutes. I added my top items and went back to fixing phones.",
    body: "Daniel's shop fixes screens and sells accessories. He listed cases, chargers, and screen protectors first — the things he sells most. Now half his daily walk-ins come through Qloqal as pickups. The other half still walk in. Both are fine.",
  },
  {
    slug: "lena-customer",
    kind: "shopper",
    name: "Lena",
    role: "Customer",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80&auto=format&fit=crop",
    pull: "Finally an app that surfaces shops I actually walk past.",
    body: "Lena lives three blocks from a bakery she'd never stepped into. She found it on Qloqal. The first order was a single sourdough loaf. The second was breakfast for four. Now she knows the owner's name and her order is half-ready by the time she gets there.",
  },
  {
    slug: "omar-customer",
    kind: "shopper",
    name: "Omar",
    role: "Customer",
    image: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=1200&q=80&auto=format&fit=crop",
    pull: "I love being able to support the small florist on my street with one tap.",
    body: "Omar's neighborhood florist used to take orders by phone, sometimes. Now they take orders the way Omar wants to place them — quietly, from his couch, on the way home. The same flowers, the same arrangement, the same fifteen-minute walk. Just a smoother path between him and them.",
  },
];

function StoriesPage() {
  return (
    <>
      <Seo
        title="Stories — Qloqal"
        description="The shops and shoppers who run their corner of commerce on Qloqal, in their own words."
      />

      {/* Cover */}
      <section className="container-pad mx-auto max-w-5xl pt-20 md:pt-28 pb-12">
        <div className="text-[11px] tracking-[0.2em] uppercase text-brand-green-dark font-semibold">Stories</div>
        <h1 className="mt-5 font-display font-medium text-ink text-[clamp(2.5rem,7vw,6rem)] leading-[0.98] tracking-tight">
          The people on either side of the thread.
        </h1>
        <p className="mt-7 text-xl text-muted-ink max-w-2xl leading-relaxed">
          We pulled some shop owners and some shoppers off Qloqal and asked them how it actually fits into their day. These are their words.
        </p>
      </section>

      {/* Editorial 2-column alternating list */}
      <section className="container-pad mx-auto max-w-6xl py-12 ruled">
        {stories.map((s, i) => {
          const flipped = i % 2 === 1;
          return (
            <article key={s.slug} className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
              <div className={`md:col-span-5 ${flipped ? "md:order-2" : ""}`}>
                <div className="aspect-[4/5] overflow-hidden rounded-lg border border-border bg-surface">
                  <img src={s.image} alt={s.name} loading="lazy" className="h-full w-full object-cover" />
                </div>
              </div>
              <div className={`md:col-span-7 ${flipped ? "md:order-1" : ""}`}>
                <div className="text-[11px] tracking-[0.2em] uppercase font-semibold text-brand-green-dark">
                  {s.kind === "shop" ? "Shop owner" : "Shopper"} · {s.role}
                </div>
                <h2 className="mt-3 font-display font-medium text-ink text-3xl md:text-4xl leading-tight tracking-tight">
                  {s.name}
                </h2>
                <div className="mt-5 flex items-start gap-3 text-ink font-display font-medium text-2xl md:text-3xl leading-snug">
                  <Quote className="h-7 w-7 shrink-0 text-brand-green mt-1" />
                  <p>"{s.pull}"</p>
                </div>
                <p className="mt-6 text-muted-ink text-lg leading-relaxed max-w-xl">{s.body}</p>
              </div>
            </article>
          );
        })}
      </section>

      <Bleed>
        <section className="bg-cream hairline-t hairline-b py-16">
          <div className="container-pad mx-auto max-w-3xl text-center">
            <p className="font-display text-2xl md:text-3xl text-ink leading-snug">
              <em>Your story might be next.</em>
            </p>
            <Link to="/product" hash="signup" className="mt-6 inline-flex items-center gap-2 text-brand-blue-dark font-semibold hover:underline underline-offset-4">
              Start a shop <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </Bleed>

      <CTABand title="One thread away." subtitle="From any small business to an online shop, on the WhatsApp they already use." />
    </>
  );
}
