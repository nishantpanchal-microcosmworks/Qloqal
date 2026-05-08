import Stamp from "@/components/ui/Stamp";
import KickerLabel from "@/components/ui/KickerLabel";
import Button from "@/components/ui/Button";
import Highlight from "@/components/ui/Highlight";

export function ChapterColophon() {
  const year = new Date().getFullYear();
  return (
    <section className="flex h-full w-full flex-col">
      <div className="flex items-center justify-between border-b-2 border-ink px-6 py-3 text-[10px] font-bold uppercase tracking-[0.2em] md:px-12">
        <Stamp tone="ink">CHAPTER 09</Stamp>
        <span>FOLIO 09 / 09 · COLOPHON</span>
      </div>

      <div className="grid flex-1 grid-cols-1 lg:grid-cols-12">
        {/* CTA */}
        <div className="col-span-1 flex flex-col justify-center gap-6 bg-[var(--color-signal-green)] p-6 md:p-12 lg:col-span-8 lg:border-r-2 lg:border-ink">
          <KickerLabel>last frame</KickerLabel>
          <h2 className="font-mono text-[36px] leading-[1] md:text-[72px] lg:text-[88px]">
            Your shop is one <br />
            <Highlight tone="ink">message away</Highlight> <br />
            from going online.
          </h2>
          <div className="flex flex-wrap gap-3">
            <Button to="/vendors" variant="primary" size="lg" data-cta="colophon-start-selling">
              Start selling on Qloqal
            </Button>
            <Button to="/customers" variant="secondary" size="lg" data-cta="colophon-customer-app">
              Or get the customer app
            </Button>
          </div>
          <p className="text-[12px] uppercase tracking-widest text-[var(--color-ink)]/70">
            * free to list. no setup fee. no monthly minimum.
          </p>
        </div>

        {/* colophon */}
        <div className="col-span-1 flex flex-col gap-0 lg:col-span-4">
          <div className="border-b-2 border-ink p-6">
            <KickerLabel tone="mute">colophon</KickerLabel>
            <ul className="mt-3 flex flex-col gap-2 text-[12px]">
              <li className="flex justify-between">
                <span className="text-[var(--color-ink-mute)]">Issue</span>
                <span className="font-bold">04 · MONO-ZINE</span>
              </li>
              <li className="flex justify-between">
                <span className="text-[var(--color-ink-mute)]">Year</span>
                <span className="font-bold">{year}</span>
              </li>
              <li className="flex justify-between">
                <span className="text-[var(--color-ink-mute)]">Set in</span>
                <span className="font-bold">JetBrains Mono</span>
              </li>
              <li className="flex justify-between">
                <span className="text-[var(--color-ink-mute)]">Printed in</span>
                <span className="font-bold">pixels · paper #f4f1ea</span>
              </li>
              <li className="flex justify-between">
                <span className="text-[var(--color-ink-mute)]">Brand</span>
                <span className="font-bold">q*loqal · WhatsApp-native</span>
              </li>
              <li className="flex justify-between">
                <span className="text-[var(--color-ink-mute)]">Source</span>
                <span className="font-bold">100% generated SVG/CSS</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-1 flex-col justify-end gap-3 bg-[var(--color-ink)] p-6 text-[var(--color-paper)]">
            <p className="font-mono text-[18px] leading-snug">
              q*loqal is a vendor operating system that hides inside WhatsApp.
            </p>
            <div className="grid grid-cols-2 gap-2 text-[10px] uppercase tracking-widest">
              <a href="/contact" className="underline">DM us ↗</a>
              <a href="/about" className="underline">Manifesto ↗</a>
              <a href="/faq" className="underline">FAQ ↗</a>
              <a href="/our-customers" className="underline">Stories ↗</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChapterColophon;
