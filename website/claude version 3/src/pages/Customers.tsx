import { SEO } from "@/components/SEO";
import { Container } from "@/components/ui/Container";
import { BentoTile } from "@/components/ui/BentoTile";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/sections/PageHero";
import { CTATile } from "@/components/bento/CTATile";
import { WhatsAppBubble } from "@/components/mockups/WhatsAppBubble";
import { IMAGES } from "@/data/images";

const STEPS = [
  {
    n: "01",
    title: "Scan, tap, or just say hi.",
    body: "Spot a poster in the window or a link in their post. Open WhatsApp like you always do.",
  },
  {
    n: "02",
    title: "See the shelf, not a checkout.",
    body: "The shop opens a little catalog inside the chat. Scroll, pick, ask questions like a human would.",
  },
  {
    n: "03",
    title: "Pay how you like.",
    body: "Card, wallet, bank link, or ‘I’ll pay at the counter’. The receipt arrives back in the chat.",
  },
];

export default function Customers() {
  return (
    <>
      <SEO
        title="For shoppers — Qloqal"
        description="Order from your favourite local shops without downloading anything. Just open WhatsApp."
        path="/customers"
      />

      <PageHero
        kicker="for shoppers"
        title={
          <>
            Buy from your favourite shops{" "}
            <span className="ink-italic text-[var(--color-primary)]">without downloading a thing.</span>
          </>
        }
        body="No app store, no account creation, no abandoned-cart emails. Your favourite local shop is already in your chat list — just say hello."
        actions={<Button to="/our-customers" variant="primary" size="lg">See shops we love</Button>}
      />

      <Container className="py-10 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5">
          <BentoTile tone="warm" span="lg:col-span-5" className="flex flex-col gap-4">
            <span className="kicker">a typical chat</span>
            <h2 className="font-display text-2xl leading-snug">Looks exactly like the chats you’re already in.</h2>
            <p className="text-sm text-[var(--color-on-surface-variant)] leading-relaxed">
              No fancy interface to learn — Qloqal just sits behind the conversation, helping the shopkeeper keep up.
            </p>
            <WhatsAppBubble />
          </BentoTile>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-5 lg:auto-rows-min">
            {STEPS.map((s) => (
              <BentoTile key={s.n} tone="paper" interactive>
                <span className="font-mono text-xl text-[var(--color-mustard)]">·{s.n}</span>
                <h3 className="font-display text-xl mt-3 leading-snug">{s.title}</h3>
                <p className="text-sm text-[var(--color-on-surface-variant)] leading-relaxed mt-2">{s.body}</p>
              </BentoTile>
            ))}

            <BentoTile tone="image" className="sm:col-span-3 p-0 overflow-hidden min-h-[260px]">
              <div className="relative h-full min-h-[260px]">
                <img src={IMAGES.coffee.url} alt={IMAGES.coffee.alt} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)]/55 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="kicker text-[var(--color-mustard)]">small joys</span>
                  <p className="font-display text-2xl text-[var(--color-surface)] mt-1 max-w-md">
                    Same espresso, same person making it. Just less queueing.
                  </p>
                </div>
              </div>
            </BentoTile>
          </div>

          <CTATile
            span="lg:col-span-12"
            title="Looking for a shop you already love?"
            body="If they’re not on Qloqal yet, send them a friendly nudge — we make it easy for them to set up."
            primary={{ label: "Recommend a shop", to: "/contact" }}
            secondary={{ label: "Browse stories", to: "/our-customers" }}
          />
        </div>
      </Container>
    </>
  );
}
