import { Link } from "@tanstack/react-router";
import { categories } from "@/data/categories";

export function CategoryStrip() {
  return (
    <section className="container-pad mx-auto max-w-7xl py-10">
      <div className="flex gap-3 overflow-x-auto pb-2 -mx-1 px-1 snap-x snap-mandatory">
        {categories.map(c => (
          <Link key={c.slug} to="/vendors" hash={c.slug} data-cta={`category-${c.slug}`}
            className="snap-start shrink-0 inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2.5 text-sm font-semibold text-ink hover:border-brand-green hover:bg-brand-green-soft transition">
            <span className="text-base">{c.emoji}</span> {c.name}
          </Link>
        ))}
      </div>
    </section>
  );
}
