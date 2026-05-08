import Stamp from "@/components/ui/Stamp";
import KickerLabel from "@/components/ui/KickerLabel";
import PhoneFrame from "@/components/mockups/PhoneFrame";
import CatalogMockup from "@/components/mockups/CatalogMockup";
import ChatMockup, { type Bubble } from "@/components/mockups/ChatMockup";

const VENDOR_BUBBLES: Bubble[] = [
  { kind: "system", text: "ORDER · 09:14" },
  {
    kind: "card",
    title: "NEW ORDER",
    lines: [
      "Sourdough loaf · 1 × $5.00",
      "Almond croissant · 2 × $3.20",
      "Black coffee · 1 × $3.50",
    ],
    total: "$15.65",
  },
  { kind: "actions", accept: "ACCEPT", reject: "REJECT" },
  { kind: "out", text: "ACCEPTED · prepping", meta: "09:14" },
];

export function ChapterSplit() {
  return (
    <section className="flex h-full w-full flex-col">
      <div className="flex items-center justify-between border-b-2 border-ink px-6 py-3 text-[10px] font-bold uppercase tracking-[0.2em] md:px-12">
        <Stamp tone="ink">CHAPTER 04</Stamp>
        <span>FOLIO 04 / 09 · TWO PHONES, ONE PRODUCT</span>
      </div>

      <div className="grid flex-1 grid-cols-1 gap-0 lg:grid-cols-2">
        {/* customer side */}
        <div className="flex flex-col gap-4 border-b-2 border-ink p-6 md:p-10 lg:border-b-0 lg:border-r-2">
          <div className="flex items-center justify-between">
            <KickerLabel tone="blue">CUSTOMER · QLOQAL APP</KickerLabel>
            <span className="text-[11px] uppercase tracking-widest text-[var(--color-ink-mute)]">
              polished · native
            </span>
          </div>
          <h3 className="font-mono text-[26px] leading-tight md:text-[36px]">
            Customers get a real app.
          </h3>
          <p className="max-w-[40ch] text-[13px] text-[var(--color-ink-2)]">
            Browse nearby. Tap order. Pay. Track. The interface they expect
            from a modern marketplace, pointed at the shop on their street.
          </p>
          <div className="mt-2 flex justify-center">
            <PhoneFrame label="iOS · ANDROID">
              <CatalogMockup />
            </PhoneFrame>
          </div>
        </div>

        {/* vendor side */}
        <div className="flex flex-col gap-4 bg-[var(--color-paper-2)] p-6 md:p-10">
          <div className="flex items-center justify-between">
            <KickerLabel tone="green">VENDOR · WHATSAPP</KickerLabel>
            <span className="text-[11px] uppercase tracking-widest text-[var(--color-ink-mute)]">
              the phone they own
            </span>
          </div>
          <h3 className="font-mono text-[26px] leading-tight md:text-[36px]">
            Shop owners use chat.
          </h3>
          <p className="max-w-[40ch] text-[13px] text-[var(--color-ink-2)]">
            Same WhatsApp they had this morning. The order arrives like a
            normal message, with two big buttons. No menus. No app store.
          </p>
          <div className="mt-2 flex justify-center">
            <PhoneFrame label="ANY ANDROID · 5 YR OLD OK">
              <ChatMockup bubbles={VENDOR_BUBBLES} />
            </PhoneFrame>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChapterSplit;
