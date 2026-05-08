import Stamp from "@/components/ui/Stamp";
import KickerLabel from "@/components/ui/KickerLabel";
import ChatMockup, { type Bubble } from "@/components/mockups/ChatMockup";

type Frame = { n: string; title: string; note: string; bubbles: Bubble[] };

const FRAMES: Frame[] = [
  {
    n: "01",
    title: "Order in",
    note: "incoming · 09:14",
    bubbles: [
      { kind: "system", text: "9:14 AM · Tue" },
      {
        kind: "card",
        title: "NEW ORDER · CUSTOMER ↦ SHOP",
        lines: [
          "Sourdough loaf · 1 × $5.00",
          "Almond croissant · 2 × $3.20",
          "Black coffee · 1 × $3.50",
        ],
        total: "$15.65",
      },
      { kind: "actions", accept: "ACCEPT", reject: "REJECT" },
    ],
  },
  {
    n: "02",
    title: "You tap accept",
    note: "outgoing · 09:14",
    bubbles: [
      { kind: "system", text: "9:14 AM · Tue" },
      {
        kind: "card",
        title: "NEW ORDER · CUSTOMER ↦ SHOP",
        lines: [
          "Sourdough loaf · 1 × $5.00",
          "Almond croissant · 2 × $3.20",
          "Black coffee · 1 × $3.50",
        ],
        total: "$15.65",
      },
      { kind: "out", text: "ACCEPTED · prepping now", meta: "09:14" },
      { kind: "in", text: "Customer notified ✓", meta: "09:14" },
    ],
  },
  {
    n: "03",
    title: "Mark ready",
    note: "outgoing · 09:22",
    bubbles: [
      { kind: "out", text: "ACCEPTED · prepping now", meta: "09:14" },
      { kind: "out", text: "READY ✓ for pickup", meta: "09:22" },
      { kind: "in", text: "Runner dispatched · ETA 12 min", meta: "09:22" },
      { kind: "system", text: "$15.65 · settles T+1" },
    ],
  },
];

export function ChapterFlow() {
  return (
    <section className="flex h-full w-full flex-col">
      <div className="flex items-center justify-between border-b-2 border-ink px-6 py-3 text-[10px] font-bold uppercase tracking-[0.2em] md:px-12">
        <Stamp tone="ink">CHAPTER 03</Stamp>
        <span>FOLIO 03 / 09 · ORDER → ACCEPT → READY</span>
      </div>

      <div className="flex-1 overflow-y-auto p-6 md:p-10">
        <div className="mx-auto max-w-[1280px]">
          <KickerLabel tone="green">the flow · vendor side</KickerLabel>
          <h2 className="mt-2 font-mono text-[28px] leading-tight md:text-[44px]">
            Two buttons. One number. <br />
            That's the whole shift.
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
            {FRAMES.map((f) => (
              <div key={f.n} className="flex flex-col gap-2">
                <div className="flex items-center justify-between border-2 border-ink bg-[var(--color-paper-2)] px-3 py-2">
                  <span className="text-[12px] font-bold uppercase tracking-widest">
                    [ {f.n} ] {f.title}
                  </span>
                  <span className="text-[10px] uppercase text-[var(--color-ink-mute)]">
                    {f.note}
                  </span>
                </div>
                <ChatMockup
                  bubbles={f.bubbles}
                  className="border-2 border-ink shadow-[5px_5px_0_var(--color-ink)]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChapterFlow;
