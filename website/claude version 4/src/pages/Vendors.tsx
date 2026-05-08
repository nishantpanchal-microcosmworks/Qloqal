import SEO from "@/components/SEO";
import PageHeader from "@/components/layout/PageHeader";
import Section from "@/components/ui/Section";
import KickerLabel from "@/components/ui/KickerLabel";
import Stamp from "@/components/ui/Stamp";
import Highlight from "@/components/ui/Highlight";
import Button from "@/components/ui/Button";
import VendorForm from "@/components/forms/VendorForm";
import { VENDOR_STEPS } from "@/data/steps";
import { WHY_WHATSAPP } from "@/data/whyWhatsApp";
import ChatMockup, { type Bubble } from "@/components/mockups/ChatMockup";
import PaymentMockup from "@/components/mockups/PaymentMockup";
import AsciiDivider from "@/components/decor/AsciiDivider";
import { cn } from "@/lib/cn";

const HERO_BUBBLES: Bubble[] = [
  { kind: "system", text: "ORDER · 09:14" },
  {
    kind: "card",
    title: "NEW ORDER",
    lines: [
      "Sourdough loaf · 1 × $5.00",
      "Almond croissant · 2 × $3.20",
    ],
    total: "$11.40",
  },
  { kind: "actions", accept: "ACCEPT", reject: "REJECT" },
];

export default function Vendors() {
  return (
    <>
      <SEO
        title="For shop owners — sell on the WhatsApp you already use"
        description="A field manual for selling on Qloqal. No app to install. No tablet. No monthly fee. Free to list, 5% per delivered order, payouts T+1."
        canonical="/vendors"
      />
      <PageHeader
        fileNo="FILE · VENDORS-04"
        kicker="field manual · for shop owners"
        title={
          <>
            Sell more, on the
            <br />
            <Highlight tone="green">WhatsApp you already use.</Highlight>
          </>
        }
        intro="No new app. No tablet. No monthly minimum. We don't ask you to change anything about how you run your shop. We sit on the phone you already check forty times a day."
        fill="paper"
        right={
          <div className="flex flex-col gap-2 border-2 border-ink bg-[var(--color-paper-3)] p-4">
            <KickerLabel tone="green">scoreboard · 06 facts</KickerLabel>
            <ul className="text-[12px]">
              {[
                ["Vendor app required", "no"],
                ["Tablet required", "no"],
                ["Setup fee", "$0"],
                ["Monthly fee", "$0"],
                ["Per-order fee", "5% (delivered only)"],
                ["Payout cadence", "T+1 to your bank"],
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
          </div>
        }
      />

      {/* HOW IT WORKS · numbered procedure */}
      <Section className="bg-[var(--color-paper-2)] border-b-2 border-ink">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <KickerLabel tone="green">procedure</KickerLabel>
            <h2 className="mt-1 font-mono text-[28px] md:text-[44px]">
              The whole flow on your side.
            </h2>
          </div>
          <span className="hidden text-[10px] uppercase tracking-widest text-[var(--color-ink-mute)] md:inline">
            STEPS · 06
          </span>
        </div>

        <div className="grid grid-cols-1 gap-0 md:grid-cols-2">
          {VENDOR_STEPS.map((s, i) => (
            <article
              key={s.index}
              className={cn(
                "flex flex-col gap-2 border-2 border-ink p-5 -ml-[2px] -mt-[2px]",
                i % 4 === 0 && "bg-[var(--color-paper)]",
                i % 4 === 1 && "bg-[var(--color-signal-green)]",
                i % 4 === 2 && "bg-[var(--color-paper-3)]",
                i % 4 === 3 && "bg-[var(--color-paper)]",
              )}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[36px] font-bold leading-none">
                  {s.index}
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[var(--color-ink-mute)]">
                  STEP
                </span>
              </div>
              <h3 className="text-[18px] font-bold uppercase tracking-wider">
                {s.title}
              </h3>
              <div className="grid grid-cols-1 gap-1 border-2 border-ink bg-[var(--color-paper-3)] p-2 text-[11px] uppercase tracking-widest">
                <div>
                  <span className="text-[var(--color-ink-mute)]">in:</span>{" "}
                  {s.input}
                </div>
                <div>
                  <span className="text-[var(--color-ink-mute)]">out:</span>{" "}
                  {s.output}
                </div>
              </div>
              <p className="text-[13px] leading-relaxed">{s.body}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* live mockup row */}
      <Section>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="flex flex-col gap-4">
            <KickerLabel tone="green">order · in chat</KickerLabel>
            <h3 className="font-mono text-[24px] md:text-[36px]">
              An order looks like a normal message.
            </h3>
            <p className="max-w-[42ch] text-[13px] text-[var(--color-ink-2)]">
              Two big buttons. Itemised. Totalled. The same chat thread you'd
              use to talk to your sister.
            </p>
            <div className="border-2 border-ink shadow-[5px_5px_0_var(--color-ink)]">
              <ChatMockup bubbles={HERO_BUBBLES} />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <KickerLabel tone="green">payout · t+1</KickerLabel>
            <h3 className="font-mono text-[24px] md:text-[36px]">
              Money settles to your bank, next day.
            </h3>
            <p className="max-w-[42ch] text-[13px] text-[var(--color-ink-2)]">
              No invoices to chase. No gateway portal to learn. Card, wallet,
              bank transfer, cash on pickup — all collected, all settled.
            </p>
            <div className="border-2 border-ink shadow-[5px_5px_0_var(--color-ink)]">
              <PaymentMockup />
            </div>
          </div>
        </div>
      </Section>

      <AsciiDivider variant="ticks" />

      {/* why whatsapp · 6 cards */}
      <Section className="bg-[var(--color-paper-2)] border-y-2 border-ink">
        <KickerLabel tone="green">why we built this on chat</KickerLabel>
        <h2 className="mt-1 font-mono text-[28px] md:text-[44px]">
          Six reasons. <br /> Obvious in hindsight.
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-0 md:grid-cols-3">
          {WHY_WHATSAPP.map((entry, i) => (
            <div
              key={entry.index}
              className={cn(
                "flex flex-col gap-2 border-2 border-ink p-5 -ml-[2px] -mt-[2px]",
                i === 1 || i === 4
                  ? "bg-[var(--color-signal-green)]"
                  : "bg-[var(--color-paper)]",
              )}
            >
              <span className="font-mono text-[36px] font-bold leading-none">
                {entry.index}
              </span>
              <h3 className="text-[14px] font-bold uppercase tracking-wider">
                {entry.title}
              </h3>
              <p className="text-[12px] leading-relaxed">{entry.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* signup form */}
      <Section>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-5">
            <Stamp tone="green">SIGNUP</Stamp>
            <h2 className="mt-3 font-mono text-[28px] leading-tight md:text-[44px]">
              Get listed. <br />
              Take your first order.
            </h2>
            <p className="mt-4 max-w-[40ch] text-[13px] text-[var(--color-ink-2)]">
              Tell us a few things. We come back within a working day with the
              link to your storefront and the WhatsApp number to keep an eye
              on.
            </p>
            <ul className="mt-6 flex flex-col gap-2 text-[13px]">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-3 w-3 shrink-0 border-2 border-ink bg-[var(--color-signal-green)]" />
                A smartphone with WhatsApp
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-3 w-3 shrink-0 border-2 border-ink bg-[var(--color-signal-green)]" />
                A bank account for payouts
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-3 w-3 shrink-0 border-2 border-ink bg-[var(--color-signal-green)]" />
                ~10 minutes to list your top items
              </li>
            </ul>
          </div>
          <div className="md:col-span-7">
            <VendorForm />
          </div>
        </div>
      </Section>

      {/* CTA band */}
      <section className="border-y-2 border-ink bg-[var(--color-signal-green)]">
        <div className="mx-auto flex max-w-[1280px] flex-col items-start justify-between gap-4 px-4 py-10 md:flex-row md:items-center md:px-8">
          <h3 className="font-mono text-[24px] leading-tight md:text-[32px]">
            Your shop is one message away from going online.
          </h3>
          <Button to="/contact" variant="primary" size="lg" data-cta="vendors-cta-talk">
            Or talk to a human first
          </Button>
        </div>
      </section>
    </>
  );
}
