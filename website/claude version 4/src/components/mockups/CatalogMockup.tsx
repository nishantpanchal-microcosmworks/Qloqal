import { cn } from "@/lib/cn";

type Item = { name: string; price: string; meta: string };

type Props = {
  title?: string;
  items?: Item[];
  className?: string;
};

const DEFAULT_ITEMS: Item[] = [
  { name: "Sourdough loaf", price: "5.00", meta: "in stock" },
  { name: "Black coffee · 12oz", price: "3.50", meta: "in stock" },
  { name: "Almond croissant", price: "3.20", meta: "low" },
  { name: "House granola", price: "8.00", meta: "in stock" },
  { name: "Cold-brew bottle", price: "6.50", meta: "in stock" },
];

export function CatalogMockup({
  title = "STOREFRONT · KIOSK 01",
  items = DEFAULT_ITEMS,
  className,
}: Props) {
  return (
    <div
      className={cn(
        "flex w-full flex-col bg-[var(--color-paper-3)] text-[var(--color-ink)]",
        className,
      )}
    >
      <div className="flex items-center justify-between border-b-2 border-ink bg-[var(--color-paper-2)] px-3 py-2 text-[10px] font-bold uppercase tracking-widest">
        <span>{title}</span>
        <span>OPEN</span>
      </div>
      <ul className="flex flex-col">
        {items.map((it, i) => (
          <li
            key={i}
            className={cn(
              "grid grid-cols-[1fr_auto] items-center gap-2 border-b border-dotted border-ink px-3 py-2 text-[12px]",
              i % 2 === 1 && "bg-[var(--color-paper-2)]",
            )}
          >
            <div className="flex items-center gap-2">
              <span className="block h-3 w-3 border-2 border-ink bg-[var(--color-signal-green)]" />
              <span className="font-bold">{it.name}</span>
              <span className="text-[10px] uppercase text-[var(--color-ink-mute)]">
                · {it.meta}
              </span>
            </div>
            <span className="font-bold tabular-nums">${it.price}</span>
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-between border-t-2 border-ink bg-[var(--color-ink)] px-3 py-2 text-[11px] font-bold uppercase tracking-widest text-[var(--color-paper)]">
        <span>5 items live</span>
        <span>last edit: 09:12</span>
      </div>
    </div>
  );
}

export default CatalogMockup;
