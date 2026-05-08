import Stamp from "@/components/ui/Stamp";
import Highlight from "@/components/ui/Highlight";
import KickerLabel from "@/components/ui/KickerLabel";

const COMPARISONS = [
  {
    label: "Big-box e-commerce",
    cost: "high",
    setup: "vendor app + portal",
    qloqal: "no install, runs in chat",
  },
  {
    label: "Quick-commerce",
    cost: "capital-heavy",
    setup: "owns dark stores",
    qloqal: "uses neighbourhood shops",
  },
  {
    label: "Food delivery",
    cost: "medium-high",
    setup: "tablet + training",
    qloqal: "uses the phone they own",
  },
];

export function ChapterThesis() {
  return (
    <section className="flex h-full w-full flex-col">
      <div className="flex items-center justify-between border-b-2 border-ink px-6 py-3 text-[10px] font-bold uppercase tracking-[0.2em] md:px-12">
        <Stamp tone="ink">CHAPTER 02</Stamp>
        <span>FOLIO 02 / 09</span>
      </div>

      <div className="grid flex-1 grid-cols-1 gap-0 lg:grid-cols-12">
        <div className="col-span-1 flex flex-col justify-center gap-5 border-b-2 border-ink p-6 md:p-12 lg:col-span-7 lg:border-b-0 lg:border-r-2">
          <KickerLabel tone="green">the bet we made</KickerLabel>
          <h2 className="font-mono text-[36px] leading-[1] md:text-[64px] lg:text-[80px]">
            Small business owners <br />
            <Highlight tone="yellow">already live on WhatsApp.</Highlight>
          </h2>
          <p className="max-w-[60ch] text-[14px] leading-relaxed text-[var(--color-ink-2)] md:text-[16px]">
            That is the entire product thesis. We don't ship a vendor app
            because shops never wanted one. We meet them where their phone is
            already pinging. Order arrives in chat. They tap accept. They
            keep working.
          </p>
          <p className="max-w-[60ch] text-[14px] leading-relaxed text-[var(--color-ink-mute)]">
            The #1 reason a small shop never went online wasn't laziness.
            It was a tablet they'd never bought, an app they'd never opened,
            and a tutorial they didn't have time for.
          </p>
        </div>

        <div className="col-span-1 flex flex-col bg-[var(--color-paper-2)] lg:col-span-5">
          <div className="border-b-2 border-ink px-6 py-3 text-[10px] font-bold uppercase tracking-[0.2em]">
            FIG. 02 · LANDSCAPE COMPARISON
          </div>
          <table className="w-full border-collapse text-left text-[12px]">
            <thead>
              <tr className="border-b-2 border-ink bg-[var(--color-paper)] uppercase tracking-widest">
                <th className="border-r-2 border-ink p-3">Class</th>
                <th className="border-r-2 border-ink p-3">Setup</th>
                <th className="p-3">Qloqal</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISONS.map((row) => (
                <tr key={row.label} className="border-b-2 border-ink">
                  <td className="border-r-2 border-ink p-3 font-bold">
                    {row.label}
                    <br />
                    <span className="text-[10px] font-normal uppercase text-[var(--color-ink-mute)]">
                      cost: {row.cost}
                    </span>
                  </td>
                  <td className="border-r-2 border-ink p-3">{row.setup}</td>
                  <td className="bg-[var(--color-signal-green)] p-3 font-bold">
                    {row.qloqal}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-auto border-t-2 border-ink p-4 text-[11px] uppercase tracking-widest text-[var(--color-ink-mute)]">
            * we mention competitors here, in this table, only.
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChapterThesis;
