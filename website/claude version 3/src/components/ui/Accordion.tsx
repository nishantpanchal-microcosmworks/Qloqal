import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/cn";

export interface AccordionItem {
  q: string;
  a: string;
}

export function Accordion({ items, className }: { items: AccordionItem[]; className?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <ul className={cn("divide-y divide-[var(--color-outline-variant)]", className)}>
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <li key={i}>
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : i)}
              aria-expanded={open}
              className="w-full flex items-start justify-between gap-6 py-5 text-left"
            >
              <span className="font-display text-lg lg:text-xl text-[var(--color-on-surface)]">{item.q}</span>
              <span
                className={cn(
                  "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--color-outline-variant)] mt-1 transition-colors",
                  open && "bg-[var(--color-primary)] text-[var(--color-on-primary)] border-[var(--color-primary)]",
                )}
                aria-hidden
              >
                {open ? <Minus size={16} /> : <Plus size={16} />}
              </span>
            </button>
            <div
              className={cn(
                "grid transition-[grid-template-rows] duration-300 ease-out",
                open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <p className="pb-6 pr-12 text-[var(--color-on-surface-variant)] leading-relaxed">{item.a}</p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
