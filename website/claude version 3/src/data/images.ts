export interface ImageRef {
  id: string;
  url: string;
  alt: string;
  credit: string;
}

const u = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const IMAGES: Record<string, ImageRef> = {
  bakery: {
    id: "bakery",
    url: u("photo-1509440159596-0249088772ff"),
    alt: "Fresh bread cooling on a wooden counter",
    credit: "Unsplash",
  },
  lamp: {
    id: "lamp",
    url: u("photo-1519681393784-d120267933ba"),
    alt: "Warm lamp glowing in a closed shop window at dusk",
    credit: "Unsplash",
  },
  studio: {
    id: "studio",
    url: u("photo-1542435503-956c469947f6"),
    alt: "Maker’s studio with hands at work over a wooden bench",
    credit: "Unsplash",
  },
  ledger: {
    id: "ledger",
    url: u("photo-1517842645767-c639042777db"),
    alt: "Open ledger and a fountain pen on a paper-covered desk",
    credit: "Unsplash",
  },
  florist: {
    id: "florist",
    url: u("photo-1487530811176-3780de880c2d"),
    alt: "Florist arranging stems on a metal worktop",
    credit: "Unsplash",
  },
  paper: {
    id: "paper",
    url: u("photo-1454165804606-c3d57bc86b40"),
    alt: "Stacks of kraft paper, twine and stamps",
    credit: "Unsplash",
  },
  hands: {
    id: "hands",
    url: u("photo-1556909114-f6e7ad7d3136"),
    alt: "Two hands wrapping a parcel in brown paper",
    credit: "Unsplash",
  },
  shopfront: {
    id: "shopfront",
    url: u("photo-1481437156560-3205f6a55735"),
    alt: "Small shop front with hand-painted signage",
    credit: "Unsplash",
  },
  texture: {
    id: "texture",
    url: u("photo-1535930891776-0c2dfb7fda1a"),
    alt: "Close-up of woven linen texture",
    credit: "Unsplash",
  },
  coffee: {
    id: "coffee",
    url: u("photo-1495474472287-4d71bcdd2085"),
    alt: "Espresso being poured at a quiet café counter",
    credit: "Unsplash",
  },
  records: {
    id: "records",
    url: u("photo-1483821064540-13ee2f0b86ae"),
    alt: "Vinyl records in a wooden crate",
    credit: "Unsplash",
  },
  tailor: {
    id: "tailor",
    url: u("photo-1558769132-cb1aea458c5e"),
    alt: "Tailor’s worktable with measuring tape and threads",
    credit: "Unsplash",
  },
  postcard: {
    id: "postcard",
    url: u("photo-1518837695005-2083093ee35b"),
    alt: "Vintage postcards laid out on a wooden table",
    credit: "Unsplash",
  },
  wrap: {
    id: "wrap",
    url: u("photo-1607082348824-0a96f2a4b9da"),
    alt: "Hands wrapping a small parcel with twine",
    credit: "Unsplash",
  },
};

export const HERO_BG = u("photo-1457301547464-91995555cd25", 1800);
