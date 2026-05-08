import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";

export type AccordionItem = {
  q: string;
  a: string;
};

type Props = {
  items: AccordionItem[];
  defaultOpen?: number;
  className?: string;
};

export function Accordion({ items, defaultOpen, className }: Props) {
  const [open, setOpen] = useState<number | null>(defaultOpen ?? null);

  return (
    <div className={cn("flex flex-col gap-3", className)}>
      {items.map((item, idx) => {
        const isOpen = open === idx;
        return (
          <div
            key={idx}
            className="overflow-hidden rounded-2xl border border-outline-variant bg-surface-container-lowest card-shadow"
          >
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-base font-semibold text-on-surface transition-colors hover:bg-surface-container-low"
              onClick={() => setOpen(isOpen ? null : idx)}
              aria-expanded={isOpen}
            >
              <span>{item.q}</span>
              <ChevronDown
                className={cn(
                  "h-5 w-5 shrink-0 text-on-surface-variant transition-transform",
                  isOpen && "rotate-180",
                )}
              />
            </button>
            {isOpen && (
              <div className="px-6 pb-5 text-base leading-relaxed text-on-surface-variant">
                {item.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
