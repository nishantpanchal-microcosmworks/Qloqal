import { BentoTile } from "@/components/ui/BentoTile";
import { CatalogMockup } from "@/components/mockups/CatalogMockup";

export function CatalogTile() {
  return (
    <BentoTile tone="paper" span="lg:col-span-7" className="flex flex-col gap-5">
      <div className="flex items-end justify-between gap-4">
        <div>
          <span className="kicker">your shelf, photographed</span>
          <h2 className="font-display text-2xl lg:text-3xl mt-2 leading-snug">
            A catalog that looks like the shop you actually keep.
          </h2>
        </div>
        <p className="hidden lg:block max-w-xs text-sm text-[var(--color-on-surface-variant)] leading-relaxed">
          Drag in photos. Auto-priced, auto-tagged. Customers tap, you pack — no
          spreadsheet purgatory in between.
        </p>
      </div>
      <CatalogMockup className="mt-2" />
    </BentoTile>
  );
}
