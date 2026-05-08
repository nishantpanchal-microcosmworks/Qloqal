export type Chapter = {
  id: string;
  index: string;
  label: string;
  caption: string;
};

export const CHAPTERS: Chapter[] = [
  { id: "cover", index: "01", label: "Cover", caption: "scroll right →" },
  { id: "thesis", index: "02", label: "Thesis", caption: "the bet we made" },
  { id: "flow", index: "03", label: "Flow", caption: "order → accept → ready" },
  { id: "split", index: "04", label: "Split", caption: "two phones, one product" },
  { id: "categories", index: "05", label: "Who it's for", caption: "ten kinds of shops" },
  { id: "why", index: "06", label: "Why WhatsApp", caption: "six reasons" },
  { id: "proof", index: "07", label: "Proof", caption: "stats + voices" },
  { id: "pricing", index: "08", label: "Pricing", caption: "free, then per-order" },
  { id: "colophon", index: "09", label: "Colophon", caption: "issue 04 · 2026" },
];
