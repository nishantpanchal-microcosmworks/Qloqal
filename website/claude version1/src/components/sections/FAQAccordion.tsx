import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import type { FaqItem } from '@/data/faqs';
import { cn } from '@/lib/utils';

type FAQAccordionProps = {
  items: FaqItem[];
  className?: string;
};

export function FAQAccordion({ items, className }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className={cn('mx-auto w-full max-w-3xl', className)}>
      <ul className="divide-y divide-ink-300/60 overflow-hidden rounded-card border border-ink-300/60 bg-white">
        {items.map((it, i) => {
          const isOpen = openIndex === i;
          return (
            <li key={it.q}>
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="flex w-full items-start justify-between gap-4 px-5 py-5 text-left transition-colors hover:bg-ink-50 md:px-6"
              >
                <span className="font-display text-base font-bold text-ink-900 md:text-lg">
                  {it.q}
                </span>
                <span
                  className={cn(
                    'mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-colors',
                    isOpen ? 'bg-brand-500 text-white' : 'bg-ink-100 text-ink-700',
                  )}
                  aria-hidden
                >
                  {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                </span>
              </button>
              {isOpen ? (
                <div className="px-5 pb-5 text-base leading-relaxed text-ink-700 md:px-6 md:pb-6">
                  {it.a}
                </div>
              ) : null}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
