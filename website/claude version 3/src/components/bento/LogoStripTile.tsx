import { BentoTile } from "@/components/ui/BentoTile";

const SHOPS = [
  "Loaf & Linen",
  "La Esquina Records",
  "Halcyon Studio",
  "Trail Coffee Co.",
  "Maison Bleue",
  "Old Pier Books",
  "North Light Florist",
  "Ember & Oak",
];

export function LogoStripTile() {
  return (
    <BentoTile tone="warm" span="lg:col-span-5" className="flex flex-col gap-5">
      <div>
        <span className="kicker">small shops, around the world</span>
        <h2 className="font-display text-2xl lg:text-3xl mt-2 leading-snug">
          Quietly trusted.
        </h2>
      </div>
      <ul className="grid grid-cols-2 gap-2">
        {SHOPS.map((name) => (
          <li
            key={name}
            className="rounded-xl border border-dashed border-[var(--color-outline-variant)] bg-[var(--color-surface-container-lowest)] px-3 py-3 font-display text-[15px] italic text-[var(--color-on-surface-variant)] text-center"
          >
            {name}
          </li>
        ))}
      </ul>
    </BentoTile>
  );
}
