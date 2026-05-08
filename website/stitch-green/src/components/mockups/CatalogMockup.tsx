export function CatalogMockup() {
  const items = [
    { name: "Sourdough loaf", price: "$6.50", emoji: "🍞" },
    { name: "Almond croissant", price: "$3.80", emoji: "🥐" },
    { name: "Cold brew · 16oz", price: "$4.20", emoji: "☕" },
    { name: "Lemon tart", price: "$5.50", emoji: "🍋" },
  ];

  return (
    <div className="rounded-[24px] border border-outline-variant/40 bg-surface-container p-4 card-shadow">
      <div className="rounded-xl bg-surface-container-lowest p-5">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant">
              Catalog
            </p>
            <p className="font-display text-xl font-bold">
              Sweet Bakes — 12 items
            </p>
          </div>
          <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-on-primary">
            Live
          </span>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {items.map((item) => (
            <div
              key={item.name}
              className="flex flex-col gap-2 rounded-xl bg-surface-container-low p-4"
            >
              <div className="flex h-20 items-center justify-center rounded-lg bg-surface-container-lowest text-3xl">
                {item.emoji}
              </div>
              <p className="text-sm font-semibold">{item.name}</p>
              <p className="text-sm text-primary">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
