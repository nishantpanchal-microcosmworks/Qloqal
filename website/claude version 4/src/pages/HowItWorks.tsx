import SEO from "@/components/SEO";
import PageHeader from "@/components/layout/PageHeader";
import Section from "@/components/ui/Section";
import KickerLabel from "@/components/ui/KickerLabel";
import Stamp from "@/components/ui/Stamp";
import Highlight from "@/components/ui/Highlight";
import AsciiDivider from "@/components/decor/AsciiDivider";
import { VENDOR_STEPS } from "@/data/steps";
import { cn } from "@/lib/cn";

const PSEUDO = `// the entire vendor side, in pseudocode

on whatsapp_message(order):
  show "[ NEW ORDER · $TOTAL ]" card
  on tap(ACCEPT):
    notify_customer("accepted")
    when ready:
      tap(READY)
      dispatch_runner()
      collect_payment()
      payout_at(T+1)
  on tap(REJECT):
    refund_customer()`;

export default function HowItWorks() {
  return (
    <>
      <SEO
        title="How it works — the spec sheet"
        description="A spec sheet for how Qloqal moves an order from a customer's phone, through chat, to a paid out delivery — without a vendor app."
        canonical="/how-it-works"
      />
      <PageHeader
        fileNo="FILE · HOW-IT-WORKS-04"
        kicker="spec sheet"
        title={
          <>
            One order, <br />
            <Highlight tone="green">end to end.</Highlight>
          </>
        }
        intro="A trace of what happens between a customer tapping order and a shop owner counting cash. No marketing fog. Just the plumbing."
        fill="paper-2"
      />

      {/* pseudocode */}
      <Section>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-5">
            <KickerLabel tone="green">spec · v04</KickerLabel>
            <h2 className="mt-1 font-mono text-[28px] md:text-[40px]">
              The interface is two buttons. The system is much more.
            </h2>
            <p className="mt-4 max-w-[42ch] text-[13px] text-[var(--color-ink-2)]">
              Below is the actual contract between Qloqal and a vendor's
              WhatsApp. Notice what's missing: there is no vendor login, no
              dashboard, no portal. The state machine is hosted on our side.
              The vendor just taps.
            </p>
          </div>
          <div className="md:col-span-7">
            <div className="border-2 border-ink bg-[var(--color-ink)] text-[var(--color-paper)] shadow-[6px_6px_0_var(--color-ink)]">
              <div className="flex items-center justify-between border-b-2 border-[var(--color-paper)] px-3 py-2 text-[10px] font-bold uppercase tracking-widest">
                <span>~/qloqal/vendor.ws</span>
                <span>● running</span>
              </div>
              <pre className="overflow-x-auto p-4 text-[12px] leading-relaxed">
                <code>{PSEUDO}</code>
              </pre>
            </div>
          </div>
        </div>
      </Section>

      <AsciiDivider variant="ticks" />

      {/* the 6 steps */}
      <Section className="bg-[var(--color-paper-2)] border-y-2 border-ink">
        <KickerLabel tone="green">trace · 06 steps</KickerLabel>
        <h2 className="mt-1 font-mono text-[28px] md:text-[44px]">
          The six steps, with inputs and outputs.
        </h2>

        <ol className="mt-8 flex flex-col gap-0">
          {VENDOR_STEPS.map((s, i) => (
            <li
              key={s.index}
              className={cn(
                "grid grid-cols-1 gap-2 border-2 border-ink p-6 -mt-[2px] md:grid-cols-[120px_1fr_auto] md:items-center md:gap-6",
                i % 2 === 0
                  ? "bg-[var(--color-paper)]"
                  : "bg-[var(--color-paper-3)]",
              )}
            >
              <div className="flex items-center gap-2">
                <Stamp tone="ink">{s.index}</Stamp>
                <span className="text-[10px] uppercase tracking-widest text-[var(--color-ink-mute)]">
                  STEP
                </span>
              </div>
              <div>
                <h3 className="text-[16px] font-bold uppercase tracking-wider">
                  {s.title}
                </h3>
                <p className="mt-1 text-[13px] text-[var(--color-ink-2)]">
                  {s.body}
                </p>
              </div>
              <div className="text-[10px] uppercase tracking-widest md:text-right">
                <div>
                  <span className="text-[var(--color-ink-mute)]">in:</span>{" "}
                  {s.input}
                </div>
                <div>
                  <span className="text-[var(--color-ink-mute)]">out:</span>{" "}
                  {s.output}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* what we do not do */}
      <Section>
        <KickerLabel tone="blue">guardrails</KickerLabel>
        <h2 className="mt-1 font-mono text-[28px] md:text-[40px]">
          What Qloqal does <span className="line-through">not</span> do.
        </h2>
        <p className="mt-4 max-w-[60ch] text-[13px] text-[var(--color-ink-2)]">
          A short, honest list of features we do not ship. If you read these
          on someone else's marketing page, that's their product, not ours.
        </p>

        <ul className="mt-6 grid grid-cols-1 gap-0 md:grid-cols-2">
          {[
            "Live GPS tracking of a delivery rider on a map",
            "A vendor login, vendor dashboard, or vendor app",
            "Centralised inventory across multiple shops",
            "Guaranteed delivery times we cannot keep",
            "Voice ordering, AI recommendations, AR previews",
            "Subscription tiers or paid placement",
          ].map((s, i) => (
            <li
              key={s}
              className={cn(
                "flex items-start gap-3 border-2 border-ink p-4 -ml-[2px] -mt-[2px]",
                i % 2 === 0 ? "bg-[var(--color-paper)]" : "bg-[var(--color-paper-2)]",
              )}
            >
              <span className="mt-1 h-3 w-3 shrink-0 border-2 border-ink bg-[var(--color-signal-red)]" />
              <span className="text-[13px] line-through decoration-[var(--color-signal-red)] decoration-2">
                {s}
              </span>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
