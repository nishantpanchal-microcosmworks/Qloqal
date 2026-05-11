export type Category = {
  slug: string;
  name: string;
  emoji: string;
  blurb: string;
  image: string;
};

const img = (id: string) =>
  `https://images.unsplash.com/${id}?w=900&q=80&auto=format&fit=crop`;

export const categories: Category[] = [
  { slug: "grocery", name: "Grocery", emoji: "🛒", blurb: "Daily essentials, delivered from the corner shop.", image: img("photo-1542838132-92c53300491e") },
  { slug: "bakery", name: "Bakery", emoji: "🥖", blurb: "Your morning bread, every morning.", image: img("photo-1509440159596-0249088772ff") },
  { slug: "pharmacy", name: "Pharmacy", emoji: "💊", blurb: "Medicines and health, when you need them.", image: img("photo-1587854692152-cbe660dbde88") },
  { slug: "electronics", name: "Electronics", emoji: "📱", blurb: "Gadgets, accessories and quick repairs.", image: img("photo-1511707171634-5f897ff02aa9") },
  { slug: "stationery", name: "Stationery", emoji: "📚", blurb: "Books, supplies and last-minute prints.", image: img("photo-1456513080510-7bf3a84b82f8") },
  { slug: "dairy", name: "Dairy", emoji: "🥛", blurb: "Fresh milk and dairy from local producers.", image: img("photo-1563636619-e9143da7973b") },
  { slug: "salon", name: "Salon", emoji: "💇", blurb: "Book a haircut without phone tag.", image: img("photo-1560066984-138dadb4c035") },
  { slug: "hardware", name: "Hardware", emoji: "🔧", blurb: "Tools, parts and home-repair help.", image: img("photo-1572981779307-38b8cabb2407") },
  { slug: "florist", name: "Florist", emoji: "🌸", blurb: "Flowers and gifts for any occasion.", image: img("photo-1487070183336-b863922373d4") },
  { slug: "home-kitchen", name: "Home Kitchen", emoji: "🍱", blurb: "Home-cooked meals, made with care.", image: img("photo-1547592180-85f173990554") },
];
