import { SEO } from "@/components/SEO";
import { Container } from "@/components/ui/Container";
import { BentoTile } from "@/components/ui/BentoTile";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/sections/PageHero";
import { CTATile } from "@/components/bento/CTATile";
import { TESTIMONIALS } from "@/data/testimonials";
import { IMAGES } from "@/data/images";

const STORIES = [
  {
    shop: "Loaf & Linen",
    location: "Lisbon",
    image: "bakery",
    headline: "From a one-shelf bakery to morning-pre-orders that all but bake themselves.",
    body:
      "Marta started Qloqal on a Sunday afternoon, hoping to stop missing midnight texts. Six months in, half her dough is spoken for before the oven warms up.",
    span: "lg:col-span-7",
  },
  {
    shop: "La Esquina Records",
    location: "Mexico City",
    image: "records",
    headline: "Stock that turns over fast, with photos that sell it.",
    body: "Rafael snaps a crate, sends it to his regulars, and watches the rare ones disappear before the door even opens.",
    span: "lg:col-span-5",
  },
  {
    shop: "North Light Florist",
    location: "Copenhagen",
    image: "florist",
    headline: "Bouquets that change weekly, deliveries that don’t.",
    body: "Jonas keeps the same Tuesday and Friday delivery rhythm — only now nobody’s message is left waiting.",
    span: "lg:col-span-5",
  },
  {
    shop: "Halcyon Studio",
    location: "London",
    image: "studio",
    headline: "Three branches, one inbox, no chaos.",
    body: "Priya’s counter staff finally stopped texting her at 11pm. The shared inbox does what a group chat never could.",
    span: "lg:col-span-7",
  },
] as const;

export default function OurCustomers() {
  return (
    <>
      <SEO
        title="Stories — Qloqal"
        description="Small shops, around the world, quietly using Qloqal."
        path="/our-customers"
      />

      <PageHero
        kicker="stories"
        title={
          <>
            Small shops,{" "}
            <span className="ink-italic text-[var(--color-primary)]">quietly using Qloqal.</span>
          </>
        }
        body="No case studies in business school formats — just real shopkeepers, in their own words, doing what they were already doing, only with a little less paperwork."
        actions={<Button to="/vendors" variant="primary" size="lg">Open your own shop</Button>}
      />

      <Container className="py-10 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5">
          {STORIES.map((s) => {
            const img = IMAGES[s.image as keyof typeof IMAGES];
            return (
              <BentoTile key={s.shop} tone="image" span={s.span} className="p-0 overflow-hidden min-h-[360px]" interactive>
                <div className="relative h-full">
                  <img src={img.url} alt={img.alt} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)]/75 via-[var(--color-ink)]/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-7">
                    <span className="font-mono text-xs text-[var(--color-mustard)] uppercase tracking-widest">{s.shop} · {s.location}</span>
                    <h3 className="font-display text-2xl lg:text-3xl text-[var(--color-surface)] mt-2 leading-tight">{s.headline}</h3>
                    <p className="text-[var(--color-surface)]/85 text-sm leading-relaxed mt-3 max-w-md">{s.body}</p>
                  </div>
                </div>
              </BentoTile>
            );
          })}
        </div>
      </Container>

      <Container className="py-6">
        <span className="kicker">word of mouth</span>
        <h2 className="font-display text-3xl lg:text-4xl mt-3 leading-tight">Notes left on the counter.</h2>
        <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {TESTIMONIALS.map((t, i) => (
            <li
              key={t.author}
              className={`paper-card p-6 ${i % 2 ? "stamp-rotate-r" : "stamp-rotate-l"}`}
              style={{ transformOrigin: "center center" }}
            >
              <p className="font-display text-lg leading-snug">“{t.quote}”</p>
              <footer className="mt-5 text-xs font-mono uppercase tracking-widest text-[var(--color-on-surface-variant)]">
                {t.author} · {t.role} · {t.location}
              </footer>
            </li>
          ))}
        </ul>
      </Container>

      <Container className="py-10 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5">
          <CTATile span="lg:col-span-12" />
        </div>
      </Container>
    </>
  );
}
