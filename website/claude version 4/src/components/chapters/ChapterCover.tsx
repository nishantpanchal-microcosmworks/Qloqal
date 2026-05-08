import Button from "@/components/ui/Button";
import Highlight from "@/components/ui/Highlight";
import Stamp from "@/components/ui/Stamp";
import KickerLabel from "@/components/ui/KickerLabel";
import AsciiDivider from "@/components/decor/AsciiDivider";

export function ChapterCover() {
  return (
    <section className="relative flex h-full w-full flex-col">
      <div className="flex items-center justify-between border-b-2 border-ink px-6 py-3 text-[10px] font-bold uppercase tracking-[0.2em] md:px-12">
        <span>q*loqal · ISSUE 04 · MONO-ZINE</span>
        <span>WHATSAPP-NATIVE COMMERCE</span>
        <span className="hidden md:inline">FOLIO 01 / 09</span>
      </div>

      <div className="grid flex-1 grid-cols-1 gap-0 lg:grid-cols-12">
        {/* hero copy */}
        <div className="col-span-1 flex flex-col justify-center gap-6 border-b-2 border-ink p-6 md:p-12 lg:col-span-8 lg:border-b-0 lg:border-r-2">
          <div className="flex flex-wrap items-center gap-2">
            <Stamp tone="green">CHAPTER 01</Stamp>
            <Stamp tone="ink">COVER</Stamp>
            <KickerLabel tone="mute">scroll right →</KickerLabel>
          </div>

          <h1 className="font-mono text-[44px] leading-[0.95] md:text-[88px] lg:text-[104px]">
            <span className="block">RUN YOUR</span>
            <span className="block">SHOP ON</span>
            <span className="block">
              <Highlight tone="yellow">WHATSAPP.</Highlight>
            </span>
          </h1>

          <p className="max-w-[60ch] text-[14px] leading-relaxed text-[var(--color-ink-2)] md:text-[16px]">
            Customers tap order in the Qloqal app. You take it on the
            WhatsApp you already use. No app to install. No tablet. No
            training. <Highlight tone="green">If you can chat, you can sell.</Highlight>
          </p>

          <div className="flex flex-wrap gap-3">
            <Button to="/vendors" variant="fill-green" size="lg" data-cta="cover-start-selling">
              Start selling on Qloqal
            </Button>
            <Button to="/customers" variant="secondary" size="lg" data-cta="cover-get-app">
              Get the customer app
            </Button>
          </div>
        </div>

        {/* sidebar */}
        <div className="col-span-1 flex flex-col gap-0 lg:col-span-4">
          <div className="border-b-2 border-ink p-6">
            <KickerLabel tone="mute">manifest</KickerLabel>
            <ul className="mt-3 flex flex-col gap-2 text-[13px]">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-3 w-3 shrink-0 border-2 border-ink bg-[var(--color-signal-green)]" />
                <span>0 vendor app to install</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-3 w-3 shrink-0 border-2 border-ink bg-[var(--color-signal-green)]" />
                <span>0 monthly fees</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-3 w-3 shrink-0 border-2 border-ink bg-[var(--color-signal-green)]" />
                <span>2 buttons total: ✓ accept · ✓ ready</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-3 w-3 shrink-0 border-2 border-ink bg-[var(--color-signal-green)]" />
                <span>1 day from list to first order</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-1 flex-col justify-end gap-3 bg-[var(--color-ink)] p-6 text-[var(--color-paper)]">
            <KickerLabel tone="mute" className="text-[var(--color-paper)]/70">
              edition
            </KickerLabel>
            <p className="font-mono text-[24px] font-bold leading-tight">
              No marketplace mythology. <br />
              <span className="text-[var(--color-signal-green)]">Just chat. Just shops.</span>
            </p>
            <div className="border-2 border-[var(--color-paper)] px-3 py-2 text-[10px] font-bold uppercase tracking-widest">
              ▶ scroll-jacked horizontally · keep scrolling
            </div>
          </div>
        </div>
      </div>

      <AsciiDivider variant="line" />
    </section>
  );
}

export default ChapterCover;
