import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ } from '../../data/faqs';

export default function FAQAccordion({ items }: { items: FAQ[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <div className="grid gap-3">
      {items.map((it, i) => {
        const isOpen = openIdx === i;
        return (
          <div key={i} className="overflow-hidden rounded-2xl border border-ink/10 bg-white">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              onClick={() => setOpenIdx(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span className="font-semibold text-ink">{it.q}</span>
              <ChevronDown
                size={18}
                className={`text-brand-blue transition-transform ${isOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {isOpen && (
              <div className="border-t border-ink/10 px-5 py-4 text-sm text-muted">{it.a}</div>
            )}
          </div>
        );
      })}
    </div>
  );
}
