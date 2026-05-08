export type Category = {
  id: string;
  label: string;
  glyph: string;
  blurb: string;
};

export const CATEGORIES: Category[] = [
  {
    id: "grocery",
    label: "Corner store",
    glyph: "▣",
    blurb: "Daily staples, restocked by hand",
  },
  {
    id: "bakery",
    label: "Bakery",
    glyph: "◐",
    blurb: "Loaves, croissants, pastries before noon",
  },
  {
    id: "pharmacy",
    label: "Pharmacy",
    glyph: "✚",
    blurb: "Refills, first-aid, quiet questions",
  },
  {
    id: "electronics",
    label: "Repair shop",
    glyph: "▶",
    blurb: "Cracked screens, flat batteries, dead chargers",
  },
  {
    id: "stationery",
    label: "Bookshop",
    glyph: "▤",
    blurb: "Paper, ink, the slow internet",
  },
  {
    id: "dairy",
    label: "Milk + eggs",
    glyph: "○",
    blurb: "Doorstep delivery on a schedule",
  },
  {
    id: "salon",
    label: "Salon",
    glyph: "✄",
    blurb: "Cuts, colour, walk-ins or booked",
  },
  {
    id: "hardware",
    label: "Hardware",
    glyph: "⌗",
    blurb: "Bolts, paint, drill bits, last-minute fixes",
  },
  {
    id: "florist",
    label: "Florist",
    glyph: "❀",
    blurb: "Bunches, arrangements, same-day",
  },
  {
    id: "kitchen",
    label: "Home kitchen",
    glyph: "▥",
    blurb: "Weekly menus, meal-prep, no chain",
  },
];
