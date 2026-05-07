import { Link } from 'react-router-dom';
import { categories } from '../../data/categories';

export default function CategoryStrip() {
  return (
    <div className="overflow-x-auto">
      <ul className="flex min-w-max gap-3 sm:flex-wrap sm:justify-center">
        {categories.map((c) => (
          <li key={c.slug}>
            <Link
              to="/vendors"
              className="inline-flex items-center gap-2 rounded-full border-2 border-ink/10 bg-white px-4 py-2 text-sm font-semibold text-ink transition-colors hover:border-brand-blue hover:text-brand-blue"
            >
              <span aria-hidden>{c.emoji}</span>
              {c.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
