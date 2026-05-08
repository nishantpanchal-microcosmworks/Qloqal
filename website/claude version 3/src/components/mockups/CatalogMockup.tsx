import { cn } from "@/lib/cn";
import { IMAGES } from "@/data/images";

interface Item {
  name: string;
  price: string;
  imageId: keyof typeof IMAGES;
  tag?: string;
}

const ITEMS: Item[] = [
  { name: "Rye sourdough", price: "$6", imageId: "bakery", tag: "fresh" },
  { name: "Honey loaf", price: "$5", imageId: "wrap" },
  { name: "Cardamom bun", price: "$3.50", imageId: "coffee", tag: "limited" },
  { name: "Linen tote", price: "$18", imageId: "texture" },
];

export function CatalogMockup({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "paper-card p-5",
        "shadow-[0_1px_0_rgba(31,26,19,0.05),0_8px_22px_rgba(31,26,19,0.06)]",
        className,
      )}
    >
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="kicker">today’s shelf</div>
          <h3 className="font-display text-lg leading-tight mt-0.5">Loaf & Linen</h3>
        </div>
        <span className="text-xs font-mono uppercase tracking-widest text-[var(--color-mustard)]">04 / 24</span>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {ITEMS.map((item) => (
          <div
            key={item.name}
            className="rounded-xl overflow-hidden border border-[var(--color-outline-variant)] bg-[var(--color-surface-container-low)]"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={IMAGES[item.imageId].url}
                alt={IMAGES[item.imageId].alt}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-2.5">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[13px] font-medium leading-tight">{item.name}</span>
                <span className="text-[13px] font-mono">{item.price}</span>
              </div>
              {item.tag ? (
                <span className="mt-1 inline-block text-[10px] uppercase tracking-wider text-[var(--color-primary)]">
                  · {item.tag}
                </span>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
