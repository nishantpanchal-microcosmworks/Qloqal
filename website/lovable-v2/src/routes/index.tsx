import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, ArrowDown, Quote } from "lucide-react";
import { Seo } from "@/components/Seo";
import { FlowDemo } from "@/components/FlowDemo";
import { CTABand } from "@/components/CTABand";
import { Bleed } from "@/components/layout/Bleed";
import { ScrollyTell } from "@/components/layout/ScrollyTell";
import { BentoGrid, BentoCell } from "@/components/layout/BentoGrid";
import { categories } from "@/data/categories";

export const Route = createFileRoute("/")({ component: HomePage });

function HomePage() {
  return (
    <>
      <Seo
        title="Qloqal — Commerce that lives where your customers already are"
        description="Qloqal turns any small business into an online shop. Customers order in the app; you take orders right on WhatsApp."
      />

      {/* 1 — Editorial cover */}
      <Bleed>
        <section className="editorial-cover relative overflow-hidden">
          <div aria-hidden className="absolute inset-x-0 bottom-0 h-px bg-border" />
          <div className="container-pad mx-auto max-w-6xl">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="text-[11px] tracking-[0.2em] uppercase text-brand-green-dark font-semibold">
                Issue 01 · Hyperlocal commerce
              </div>
              <h1 className="mt-6 font-display font-medium text-ink text-[clamp(2.75rem,8vw,7rem)] leading-[0.95] tracking-tight">
                Commerce that <em className="font-display">lives</em><br />
                where your customers<br />
                already are.
              </h1>
              <p className="mt-8 text-xl md:text-2xl text-muted-ink max-w-2xl leading-relaxed">
                Qloqal turns any small business into an online shop — no vendor app, no tablet, no training. Orders flow straight into the WhatsApp the owner already opens a hundred times a day.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-5">
                <Link
                  to="/product"
                  hash="signup"
                  data-cta="home-cover-primary"
                  className="inline-flex items-center gap-2 bg-ink text-white font-semibold rounded-md px-6 py-4 hover:bg-brand-green-dark transition"
                >
                  Start a shop <ArrowRight className="h-4 w-4" />
                </Link>
                <a href="#flow" className="inline-flex items-center gap-2 text-ink/85 hover:text-ink font-medium underline underline-offset-4">
                  How it works <ArrowDown className="h-3.5 w-3.5" />
                </a>
              </div>
              <div className="mt-16 grid sm:grid-cols-3 gap-6 max-w-3xl">
                {[
                  { k: "0", v: "apps to install on the shop's side" },
                  { k: "1", v: "phone — the one they already own" },
                  { k: "3", v: "taps from order to ready" },
                ].map(s => (
                  <div key={s.k} className="border-t border-border pt-4">
                    <div className="font-display text-4xl font-medium text-brand-green-dark tabular-nums">{s.k}</div>
                    <div className="mt-1 text-sm text-muted-ink">{s.v}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* drifting chat ribbon */}
          <div aria-hidden className="mt-20 overflow-hidden h-10 relative opacity-90">
            <motion.div
              className="absolute whitespace-nowrap flex gap-3 text-sm font-mono text-brand-green-dark/60"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            >
              {Array.from({ length: 2 }).flatMap((_, k) =>
                ["new order · #4821 ·", "accepted ✓ ·", "marked ready ·", "delivered ·", "$17.48 settling ·", "tap accept ·", "1.2 km away ·"].map((s, i) => (
                  <span key={`${k}-${i}`}>{s}</span>
                ))
              )}
            </motion.div>
          </div>
        </section>
      </Bleed>

      {/* 2 — Sticky scrollytell of one full order */}
      <section id="flow" className="container-pad mx-auto max-w-7xl pt-24 md:pt-36 pb-16 md:pb-28">
        <div className="grid-asym mb-16">
          <div>
            <div className="text-[11px] tracking-[0.2em] uppercase text-brand-blue-dark font-semibold">The product</div>
            <h2 className="mt-4 font-display font-medium text-ink text-4xl md:text-6xl leading-[1.02] tracking-tight">
              One order, two sides.<br />
              <em>Watch it move.</em>
            </h2>
          </div>
          <div className="self-end">
            <p className="text-muted-ink text-lg leading-relaxed">
              On the left, you scroll. On the right, the screen advances. Same order, seen from each side at once — the way Qloqal really works.
            </p>
          </div>
        </div>

        <ScrollyTell
          steps={[
            {
              id: "receive",
              title: "An order arrives on WhatsApp.",
              body: <p>The shop owner doesn't open an app. They don't switch devices. The order shows up in the same WhatsApp thread their daughter sends them memes in. It's just there.</p>,
            },
            {
              id: "accept",
              title: "One tap to accept.",
              body: <p>Qloqal formats the order with everything the shop needs — items, quantities, totals, customer distance. The owner reads it like a message and taps Accept.</p>,
            },
            {
              id: "prepare",
              title: "Then a quiet pause.",
              body: <p>The shop does the only thing the shop is good at: making the thing. The customer sees a status change in their app. No phone calls, no chasing.</p>,
            },
            {
              id: "settle",
              title: "Marked ready. Delivered. Paid.",
              body: <p>Qloqal handles the customer notification, the delivery handoff, and the payment settlement to the shop's bank account on a regular schedule. No invoices, no portal.</p>,
            },
          ]}
          visual={() => <FlowDemo />}
        />
      </section>

      {/* 3 — Bento: what Qloqal is and isn't */}
      <Bleed>
        <section className="bg-cream hairline-t hairline-b">
          <div className="container-pad mx-auto max-w-7xl py-20 md:py-28">
            <div className="grid-asym grid-asym-flip mb-14">
              <div className="self-end order-2 lg:order-1">
                <p className="text-muted-ink text-lg leading-relaxed">
                  Most "commerce platforms" assume the merchant will learn a new app, install a new device, hire a new role. Qloqal assumes the opposite — that the most under-used distribution channel in retail is the chat thread the owner is already in.
                </p>
              </div>
              <div className="order-1 lg:order-2">
                <div className="text-[11px] tracking-[0.2em] uppercase text-brand-green-dark font-semibold">The shape of it</div>
                <h2 className="mt-4 font-display font-medium text-ink text-4xl md:text-6xl leading-[1.02] tracking-tight">
                  What Qloqal <em>is.</em><br />
                  And what it isn't.
                </h2>
              </div>
            </div>

            <BentoGrid>
              <BentoCell tone="teal" span="2x2">
                <div className="text-[11px] tracking-[0.2em] uppercase opacity-80 font-semibold">The thesis</div>
                <p className="mt-4 font-display font-medium text-2xl md:text-3xl leading-tight">
                  The best vendor onboarding is the one that <em>didn't happen</em> — because the vendor was already there.
                </p>
                <div className="mt-auto pt-6 text-sm opacity-80">
                  98% of small shop owners already use WhatsApp every working day. We meet them in it.
                </div>
              </BentoCell>

              <BentoCell tone="white">
                <div className="text-[11px] tracking-[0.15em] uppercase text-brand-green-dark font-semibold">No vendor app</div>
                <p className="mt-3 text-ink font-display text-lg leading-snug">Orders arrive in WhatsApp. Nothing to install.</p>
              </BentoCell>

              <BentoCell tone="white">
                <div className="text-[11px] tracking-[0.15em] uppercase text-brand-green-dark font-semibold">No tablet rental</div>
                <p className="mt-3 text-ink font-display text-lg leading-snug">Runs on the phone the owner already owns.</p>
              </BentoCell>

              <BentoCell tone="white" span="2x1">
                <div className="text-[11px] tracking-[0.15em] uppercase text-brand-blue-dark font-semibold">Hyperlocal by design</div>
                <p className="mt-3 text-ink font-display text-xl leading-snug">
                  Only shops within walking or quick-delivery distance from the customer. Built for streets, not warehouses.
                </p>
              </BentoCell>

              <BentoCell tone="ink">
                <div className="text-[11px] tracking-[0.15em] uppercase text-white/70 font-semibold">Not this</div>
                <p className="mt-3 font-display text-lg leading-snug">Not a dark-store quick-commerce play.</p>
                <p className="mt-1 text-xs text-white/60">We don't own inventory.</p>
              </BentoCell>

              <BentoCell tone="ink">
                <div className="text-[11px] tracking-[0.15em] uppercase text-white/70 font-semibold">Not this either</div>
                <p className="mt-3 font-display text-lg leading-snug">Not a food-delivery aggregator with a tablet.</p>
                <p className="mt-1 text-xs text-white/60">No training overhead.</p>
              </BentoCell>

              <BentoCell tone="blue" span="2x1">
                <div className="text-[11px] tracking-[0.15em] uppercase opacity-80 font-semibold">Pricing</div>
                <p className="mt-3 font-display text-xl leading-snug">
                  Free to list. Free to use. A small per-order commission only when an order is delivered. No setup fees, no monthly minimums.
                </p>
              </BentoCell>
            </BentoGrid>
          </div>
        </section>
      </Bleed>

      {/* 4 — Horizontal-scroll category strip */}
      <section className="py-20 md:py-28">
        <div className="container-pad mx-auto max-w-7xl mb-10">
          <div className="grid-asym">
            <div>
              <div className="text-[11px] tracking-[0.2em] uppercase text-brand-green-dark font-semibold">Built for everyone</div>
              <h2 className="mt-4 font-display font-medium text-ink text-4xl md:text-6xl leading-[1.02] tracking-tight">
                Every kind of <em>small.</em>
              </h2>
            </div>
            <div className="self-end">
              <p className="text-muted-ink text-lg leading-relaxed">
                If the shop has a counter, a phone, and a name on the door, Qloqal fits the way it already runs. Scroll →
              </p>
            </div>
          </div>
        </div>

        <Bleed>
          <div className="h-snap py-2">
            {categories.map((c, i) => (
              <article
                key={c.slug}
                className={`group relative overflow-hidden rounded-lg border border-border bg-white ${i % 3 === 1 ? "w-[260px] aspect-[3/5]" : "w-[320px] aspect-[4/5]"}`}
              >
                <img src={c.image} alt={c.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent" />
                <div className="absolute inset-0 p-5 flex flex-col justify-end text-white">
                  <span className="text-2xl">{c.emoji}</span>
                  <h3 className="mt-2 font-display font-medium text-2xl tracking-tight">{c.name}</h3>
                  <p className="mt-1 text-sm text-white/85 leading-snug">{c.blurb}</p>
                </div>
              </article>
            ))}
          </div>
        </Bleed>
      </section>

      {/* 5 — Big quote + supporting names */}
      <Bleed>
        <section className="bg-white hairline-t">
          <div className="container-pad mx-auto max-w-5xl py-20 md:py-28 text-center">
            <Quote className="h-10 w-10 mx-auto text-brand-green" />
            <blockquote className="mt-6 font-display font-medium text-ink text-3xl md:text-5xl leading-[1.15] tracking-tight">
              "I get the order. I tap accept. I bake.<br />
              <em>That's the whole process.</em>"
            </blockquote>
            <div className="mt-8 text-sm font-semibold text-brand-green-dark uppercase tracking-wider">
              Marco · owner of a neighborhood bakery
            </div>
            <div className="mt-14 grid sm:grid-cols-3 gap-x-10 gap-y-6 text-left max-w-3xl mx-auto">
              {[
                { q: "Nobody at our shop wanted to learn another app.", n: "Priya", r: "Family pharmacy" },
                { q: "Setup took less than ten minutes.", n: "Daniel", r: "Mobile-repair shop" },
                { q: "Finally an app for the bakery on my street.", n: "Lena", r: "Customer" },
              ].map(t => (
                <div key={t.n} className="border-t border-border pt-4">
                  <p className="text-ink italic leading-snug">"{t.q}"</p>
                  <div className="mt-2 text-xs text-muted-ink uppercase tracking-wider"><strong className="text-ink not-italic">{t.n}</strong> · {t.r}</div>
                </div>
              ))}
            </div>
            <div className="mt-12">
              <Link to="/stories" className="inline-flex items-center gap-2 text-brand-blue-dark font-semibold hover:underline underline-offset-4">
                Read more stories <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </Bleed>

      <CTABand
        title="Your shop is one chat thread away from going online."
        subtitle="No setup fee, no tablet, no new app to learn. If you can chat on WhatsApp, you can run a Qloqal shop."
      />
    </>
  );
}
