import SEO from "@/components/SEO";
import PageHeader from "@/components/layout/PageHeader";
import Section from "@/components/ui/Section";
import KickerLabel from "@/components/ui/KickerLabel";
import Highlight from "@/components/ui/Highlight";
import Button from "@/components/ui/Button";
import { VENDOR_TESTIMONIALS } from "@/data/testimonials";
import { cn } from "@/lib/cn";

const STORIES = [
  {
    n: "01",
    headline: "From a phone on the counter to a storefront link.",
    bullets: [
      "Onboarded over a coffee — listed 8 items in 11 minutes",
      "First order arrived within 48 hours of going live",
      "No tablet purchase, no monthly bill, no app downloaded",
    ],
  },
  {
    n: "02",
    headline: "One owner, two staff, no extra device.",
    bullets: [
      "Whoever's near the till takes the order on shared WhatsApp",
      "Payouts settle to the owner's account, T+1, every time",
      "No 'who's logged in?' confusion — there's no login",
    ],
  },
  {
    n: "03",
    headline: "Same shop, same hours, more customers.",
    bullets: [
      "Discoverable in the Qloqal app to people walking past",
      "Customers who already came in now reorder from home",
      "5% per delivered order — no surprise bills, no monthly fees",
    ],
  },
];

export default function OurCustomers() {
  return (
    <>
      <SEO
        title="Stories — small shops on Qloqal"
        description="Field notes from small businesses already running on Qloqal. Real owners, real shops, no portraits. Just what the day looks like now."
        canonical="/our-customers"
      />
      <PageHeader
        fileNo="FILE · STORIES-04"
        kicker="field notes · 2026"
        title={
          <>
            Real shops. <br />
            <Highlight tone="green">Real days.</Highlight>
          </>
        }
        intro="Three short field notes from owners already on Qloqal. We don't run portraits — we run the day."
        fill="paper-2"
      />

      {/* Stories grid */}
      <Section>
        <div className="grid grid-cols-1 gap-0 md:grid-cols-3">
          {STORIES.map((s, i) => (
            <article
              key={s.n}
              className={cn(
                "flex flex-col gap-4 border-2 border-ink p-6 -ml-[2px] -mt-[2px]",
                i === 1
                  ? "bg-[var(--color-signal-green)]"
                  : i === 0
                    ? "bg-[var(--color-paper)]"
                    : "bg-[var(--color-paper-3)]",
              )}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[44px] font-bold leading-none">
                  {s.n}
                </span>
                <KickerLabel tone="mute">CASE</KickerLabel>
              </div>
              <h3 className="font-mono text-[20px] leading-tight">
                {s.headline}
              </h3>
              <ul className="flex flex-col gap-1 text-[12px]">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 shrink-0 border-2 border-ink bg-[var(--color-ink)]" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      {/* Vendor quotes */}
      <Section className="bg-[var(--color-paper-2)] border-y-2 border-ink">
        <KickerLabel tone="green">field voices</KickerLabel>
        <h2 className="mt-1 font-mono text-[28px] md:text-[44px]">
          What they actually said.
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-0 md:grid-cols-2">
          {VENDOR_TESTIMONIALS.map((t, i) => (
            <blockquote
              key={i}
              className={cn(
                "flex flex-col gap-3 border-2 border-ink p-6 -ml-[2px] -mt-[2px]",
                i % 2 === 0
                  ? "bg-[var(--color-paper)]"
                  : "bg-[var(--color-paper-3)]",
              )}
            >
              <span className="font-mono text-[44px] leading-none text-[var(--color-signal-green-dim)]">
                ❝
              </span>
              <p className="text-[14px] leading-relaxed">{t.quote}</p>
              <footer className="mt-auto text-[11px] uppercase tracking-widest">
                <div className="font-bold">{t.author}</div>
                <div className="text-[var(--color-ink-mute)]">
                  {t.role} · {t.location}
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="border-y-2 border-ink bg-[var(--color-signal-green)]">
        <div className="mx-auto flex max-w-[1280px] flex-col items-start justify-between gap-4 px-4 py-10 md:flex-row md:items-center md:px-8">
          <h3 className="font-mono text-[24px] leading-tight md:text-[32px]">
            Add your shop to the next field note.
          </h3>
          <Button to="/vendors" variant="primary" size="lg" data-cta="stories-cta-start">
            Start selling
          </Button>
        </div>
      </section>
    </>
  );
}
