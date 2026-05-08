import SEO from "@/components/SEO";
import PageHeader from "@/components/layout/PageHeader";
import Section from "@/components/ui/Section";
import KickerLabel from "@/components/ui/KickerLabel";
import Highlight from "@/components/ui/Highlight";
import Button from "@/components/ui/Button";
import PhoneFrame from "@/components/mockups/PhoneFrame";
import CatalogMockup from "@/components/mockups/CatalogMockup";
import { CUSTOMER_TESTIMONIALS } from "@/data/testimonials";
import { cn } from "@/lib/cn";

const STEPS = [
  {
    n: "01",
    title: "Browse what's actually near you",
    body: "Open the app. The map and the list show shops within walking or quick-delivery distance. No giant chains.",
  },
  {
    n: "02",
    title: "Pick a shop, fill a cart",
    body: "Real prices, real items, set by the owner. If a shop is closed, you'll see it clearly.",
  },
  {
    n: "03",
    title: "Pay any way you like",
    body: "Card, wallet, bank transfer, cash on pickup. We don't lock you into one payment route.",
  },
  {
    n: "04",
    title: "Track without the theatre",
    body: "Status updates: accepted, ready, out for delivery, delivered. We don't pretend to live-track on a map.",
  },
];

export default function Customers() {
  return (
    <>
      <SEO
        title="For customers — order from the shop on your street"
        description="Discover the small shops on your street and order from them in seconds. Real prices, real shops, no chains pretending to be local."
        canonical="/customers"
      />
      <PageHeader
        fileNo="FILE · CUSTOMERS-04"
        kicker="field manual · for customers"
        title={
          <>
            Order from the
            <br />
            <Highlight tone="yellow">shop on your street.</Highlight>
          </>
        }
        intro="Qloqal surfaces the small shops you actually walk past — the bakery, the florist, the repair shop that fixes phones — and lets you order in seconds. Same prices. Same hours. Same people."
        fill="paper"
        right={
          <div className="flex flex-col gap-2 border-2 border-ink bg-[var(--color-paper-3)] p-4">
            <KickerLabel tone="blue">app · 03 numbers</KickerLabel>
            <ul className="text-[12px]">
              {[
                ["Distance shown", "≤ 2km / walking"],
                ["Tracking", "status-based"],
                ["Price markup", "0%"],
              ].map(([k, v]) => (
                <li
                  key={k}
                  className="flex justify-between border-b border-dotted border-ink py-1.5 last:border-0"
                >
                  <span className="text-[var(--color-ink-mute)]">{k}</span>
                  <span className="font-bold">{v}</span>
                </li>
              ))}
            </ul>
            <div className="mt-3 grid grid-cols-2 gap-2">
              <Button variant="secondary" size="sm" href="https://apps.apple.com" data-cta="customers-app-store">
                App Store
              </Button>
              <Button variant="secondary" size="sm" href="https://play.google.com" data-cta="customers-play-store">
                Play Store
              </Button>
            </div>
          </div>
        }
      />

      {/* steps */}
      <Section className="bg-[var(--color-paper-2)] border-b-2 border-ink">
        <KickerLabel tone="blue">how customers use it</KickerLabel>
        <h2 className="mt-1 font-mono text-[28px] md:text-[44px]">
          Four taps to your front door.
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-0 md:grid-cols-4">
          {STEPS.map((s, i) => (
            <div
              key={s.n}
              className={cn(
                "border-2 border-ink p-5 -ml-[2px] -mt-[2px]",
                i % 2 === 1
                  ? "bg-[var(--color-paper)]"
                  : "bg-[var(--color-paper-3)]",
              )}
            >
              <div className="font-mono text-[44px] font-bold leading-none">
                {s.n}
              </div>
              <h3 className="mt-2 text-[14px] font-bold uppercase tracking-wider">
                {s.title}
              </h3>
              <p className="mt-1 text-[12px] leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* phone showcase */}
      <Section>
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          <div className="flex justify-center">
            <PhoneFrame label="QLOQAL · CUSTOMER APP">
              <CatalogMockup />
            </PhoneFrame>
          </div>
          <div className="flex flex-col gap-4">
            <KickerLabel tone="blue">what's inside the app</KickerLabel>
            <h3 className="font-mono text-[28px] md:text-[40px]">
              A clean storefront for every shop.
            </h3>
            <ul className="flex flex-col gap-2 text-[13px]">
              {[
                "Search by item or shop name",
                "Filter by category, distance, open-now",
                "Reorder favourites in two taps",
                "See exactly what each shop charges",
                "Pay with the method you trust",
              ].map((p) => (
                <li key={p} className="flex items-start gap-2">
                  <span className="mt-1 h-3 w-3 shrink-0 border-2 border-ink bg-[var(--color-signal-blue)]" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* testimonials */}
      <Section className="bg-[var(--color-paper-2)] border-y-2 border-ink">
        <KickerLabel tone="blue">customer voices</KickerLabel>
        <h2 className="mt-1 font-mono text-[28px] md:text-[40px]">
          They use it most weeks.
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-0 md:grid-cols-2">
          {CUSTOMER_TESTIMONIALS.map((t, i) => (
            <blockquote
              key={i}
              className={cn(
                "flex flex-col gap-3 border-2 border-ink p-6 -ml-[2px] -mt-[2px]",
                i === 0
                  ? "bg-[var(--color-paper)]"
                  : "bg-[var(--color-signal-yellow)]",
              )}
            >
              <span className="font-mono text-[44px] leading-none">"</span>
              <p className="text-[15px] leading-relaxed">{t.quote}</p>
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

      {/* CTA band */}
      <section className="border-y-2 border-ink bg-[var(--color-ink)] text-[var(--color-paper)]">
        <div className="mx-auto flex max-w-[1280px] flex-col items-start justify-between gap-4 px-4 py-10 md:flex-row md:items-center md:px-8">
          <h3 className="font-mono text-[24px] leading-tight md:text-[32px]">
            Get the customer app. Order from the people on your street.
          </h3>
          <div className="flex gap-2">
            <Button
              variant="fill-green"
              size="lg"
              href="https://apps.apple.com"
              data-cta="customers-cta-app-store"
            >
              App Store
            </Button>
            <Button
              variant="fill-green"
              size="lg"
              href="https://play.google.com"
              data-cta="customers-cta-play-store"
            >
              Play Store
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
