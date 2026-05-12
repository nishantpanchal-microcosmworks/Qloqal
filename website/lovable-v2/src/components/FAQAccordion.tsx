import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export type FaqItem = { q: string; a: string };

export function FAQAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-border rounded-2xl border border-border bg-white">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button onClick={() => setOpen(isOpen ? null : i)} className="w-full flex items-center justify-between gap-4 p-5 text-left">
              <span className="font-display font-bold text-ink">{it.q}</span>
              {isOpen ? <Minus className="h-5 w-5 text-brand-blue shrink-0" /> : <Plus className="h-5 w-5 text-brand-blue shrink-0" />}
            </button>
            {isOpen && <div className="px-5 pb-5 -mt-2 text-muted-ink">{it.a}</div>}
          </div>
        );
      })}
    </div>
  );
}
