import SectionHeader from './SectionHeader';

type Row = { platform: string; vendorSide: string; setup: string; twist: string };

const rows: Row[] = [
  { platform: 'Big-box e-commerce', vendorSide: 'Required app/portal', setup: 'High', twist: 'Qloqal uses WhatsApp — zero install' },
  { platform: 'Quick-commerce', vendorSide: 'Owns dark stores', setup: 'Capital-heavy', twist: 'Qloqal uses existing neighbourhood shops' },
  { platform: 'Food delivery', vendorSide: 'Tablet + training', setup: 'Medium-high', twist: 'Qloqal uses the phone the owner already owns' },
];

export default function ComparisonTable() {
  return (
    <div>
      <SectionHeader
        eyebrow="How we are different"
        title="Same idea, with one thing flipped."
        subtitle="Every other marketplace asks the small business to change. We meet them where they already are."
      />
      <div className="mt-10 overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-soft">
        <div className="grid grid-cols-1 sm:grid-cols-4 bg-brand-blue-soft text-xs font-bold uppercase tracking-wider text-brand-blue">
          <div className="hidden sm:block px-4 py-3">Platform</div>
          <div className="hidden sm:block px-4 py-3">Vendor side</div>
          <div className="hidden sm:block px-4 py-3">Setup effort</div>
          <div className="hidden sm:block px-4 py-3">Qloqal's twist</div>
        </div>
        <div className="divide-y divide-ink/10">
          {rows.map((r, i) => (
            <div key={i} className="grid grid-cols-1 gap-2 px-4 py-4 text-sm sm:grid-cols-4 sm:gap-0">
              <div className="font-bold text-ink">{r.platform}</div>
              <div className="text-muted"><span className="sm:hidden font-semibold text-ink">Vendor side: </span>{r.vendorSide}</div>
              <div className="text-muted"><span className="sm:hidden font-semibold text-ink">Setup: </span>{r.setup}</div>
              <div className="font-semibold text-brand-green-dark">{r.twist}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
