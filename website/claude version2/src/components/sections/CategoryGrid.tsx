import { categories } from '../../data/categories';
import SectionHeader from './SectionHeader';

export default function CategoryGrid() {
  return (
    <div>
      <SectionHeader
        eyebrow="One platform, many shops"
        title="Built for every kind of small business."
        subtitle="If your business takes orders, Qloqal works for it. Mix and match — many shops have several lines under one roof."
      />
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((c) => (
          <div key={c.slug} className="group rounded-2xl border-2 border-ink/10 bg-white p-5 transition-colors hover:border-brand-green">
            <div className="flex items-start gap-4">
              <span className="text-3xl" aria-hidden>{c.emoji}</span>
              <div>
                <h3 className="font-bold text-ink">{c.label}</h3>
                <p className="mt-1 text-sm text-muted">{c.tagline}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
