import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Clock } from "lucide-react";
import { Seo } from "@/components/Seo";
import { CTABand } from "@/components/CTABand";

export const Route = createFileRoute("/library")({ component: LibraryPage });

type Piece = {
  slug: string;
  kicker: string;
  title: string;
  blurb: string;
  read: string;
  excerpt: string;
};

const pieces: Piece[] = [
  {
    slug: "whatsapp-is-the-pos",
    kicker: "Field note · 01",
    title: "Why your WhatsApp is already your point of sale.",
    blurb: "Most small-shop POS systems are abandoned within ninety days. The shop owner's WhatsApp thread isn't. Here's why that gap matters more than feature lists.",
    read: "3 min read",
    excerpt: "The first hour of any new shop POS is the steepest. The next nine days are the actual battle. By day ninety, only one of every five installs is still in active use. Meanwhile, the owner's WhatsApp has been opened ~2,400 times in the same period.",
  },
  {
    slug: "hyperlocal-actually-means",
    kicker: "Field note · 02",
    title: "What 'hyperlocal' actually means when nobody owns a warehouse.",
    blurb: "Quick-commerce calls a 6-km radius hyperlocal. We disagree. Here's the difference between fast and near.",
    read: "4 min read",
    excerpt: "Hyperlocal is not a delivery time. It's a relationship between a customer and a shop they could walk to. A 6-km dark store doesn't qualify any more than an Amazon warehouse does.",
  },
  {
    slug: "the-three-tap-rule",
    kicker: "Field note · 03",
    title: "The three-tap rule of vendor onboarding.",
    blurb: "If a shop owner needs more than three taps to learn your product, you've already lost them. A short note on why we keep counting.",
    read: "2 min read",
    excerpt: "Tap one: read the message. Tap two: respond. Tap three: confirm. If your product needs a fourth, you're building for engineers, not for the woman running the corner bakery.",
  },
  {
    slug: "how-payouts-work",
    kicker: "How it works · 01",
    title: "How payouts work on Qloqal.",
    blurb: "The plumbing between a delivered order and the shop's bank account, explained without jargon.",
    read: "5 min read",
    excerpt: "Three actors, two ledgers, one settlement window. The order is paid by the customer in-app. The funds sit with the payment processor. Qloqal nets out commission. The remainder lands in the shop's bank account on the regular settlement cycle.",
  },
  {
    slug: "no-app-no-tablet",
    kicker: "Why we built this · 01",
    title: "On choosing to not ship a vendor app.",
    blurb: "Not shipping things is harder than shipping them. A note on why we made the choice anyway.",
    read: "3 min read",
    excerpt: "Every product team's instinct is to ship surface area. Buttons, screens, settings. We had to teach ourselves the opposite reflex — to delete the screen before we built it, because the shop owner had already deleted it from their life.",
  },
  {
    slug: "training-as-a-tax",
    kicker: "Field note · 04",
    title: "Training is a tax. We refused to charge it.",
    blurb: "The hidden cost of every 'small business' product is the hour the owner spends learning it. Here's the math we did instead.",
    read: "3 min read",
    excerpt: "Every minute the shop owner spends in training is a minute they aren't selling. We measured the average onboarding time of competing products. It was 3.5 hours. We decided that was 3.5 hours too many.",
  },
];

function LibraryPage() {
  return (
    <>
      <Seo
        title="Library — Qloqal"
        description="Short pieces on hyperlocal commerce, WhatsApp-first product design, and the small-shop economy."
      />

      {/* Cover */}
      <section className="container-pad mx-auto max-w-5xl pt-20 md:pt-28 pb-12">
        <div className="text-[11px] tracking-[0.2em] uppercase text-brand-green-dark font-semibold">Library</div>
        <h1 className="mt-5 font-display font-medium text-ink text-[clamp(2.5rem,7vw,6rem)] leading-[0.98] tracking-tight">
          Short pieces, slowly written.
        </h1>
        <p className="mt-7 text-xl text-muted-ink max-w-2xl leading-relaxed">
          Field notes, design rationales, and the occasional argument about what hyperlocal actually means. Read one, read all, ignore the rest.
        </p>
      </section>

      {/* List */}
      <section className="container-pad mx-auto max-w-4xl py-12">
        <ol className="ruled">
          {pieces.map((p, i) => (
            <li key={p.slug} className="grid md:grid-cols-[3rem_1fr] gap-6">
              <div className="num-marker text-4xl tabular-nums opacity-60">{String(i + 1).padStart(2, "0")}</div>
              <article>
                <div className="flex items-center gap-3 text-[11px] tracking-[0.2em] uppercase font-semibold">
                  <span className="text-brand-green-dark">{p.kicker}</span>
                  <span className="inline-flex items-center gap-1 text-muted-ink"><Clock className="h-3 w-3" /> {p.read}</span>
                </div>
                <h2 className="mt-3 font-display font-medium text-ink text-2xl md:text-4xl leading-tight tracking-tight">
                  {p.title}
                </h2>
                <p className="mt-3 text-muted-ink text-lg leading-relaxed max-w-2xl">{p.blurb}</p>
                <p className="mt-5 text-ink italic leading-relaxed border-l-2 border-brand-green pl-4 max-w-2xl">
                  {p.excerpt}
                </p>
                <a className="mt-5 inline-flex items-center gap-2 text-brand-blue-dark font-semibold hover:underline underline-offset-4 cursor-default opacity-90">
                  Read in full <ArrowRight className="h-4 w-4" />
                </a>
              </article>
            </li>
          ))}
        </ol>
      </section>

      <CTABand title="Less product. More thread." subtitle="If you've read this far, you might as well start the shop." />
    </>
  );
}
