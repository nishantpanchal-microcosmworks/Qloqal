export type Category = {
  slug: string;
  name: string;
  emoji: string;
  blurb: string;
};

export const categories: Category[] = [
  { slug: "grocery", name: "Grocery", emoji: "🛒", blurb: "Daily essentials, delivered from the corner shop." },
  { slug: "bakery", name: "Bakery", emoji: "🥖", blurb: "Your morning bread, every morning." },
  { slug: "pharmacy", name: "Pharmacy", emoji: "💊", blurb: "Medicines and health, when you need them." },
  { slug: "electronics", name: "Electronics", emoji: "📱", blurb: "Gadgets, accessories and quick repairs." },
  { slug: "stationery", name: "Stationery", emoji: "📚", blurb: "Books, supplies and last-minute prints." },
  { slug: "dairy", name: "Dairy", emoji: "🥛", blurb: "Fresh milk and dairy from local producers." },
  { slug: "salon", name: "Salon", emoji: "💇", blurb: "Book a haircut without phone tag." },
  { slug: "hardware", name: "Hardware", emoji: "🔧", blurb: "Tools, parts and home-repair help." },
  { slug: "florist", name: "Florist", emoji: "🌸", blurb: "Flowers and gifts for any occasion." },
  { slug: "home-kitchen", name: "Home Kitchen", emoji: "🍱", blurb: "Home-cooked meals, made with care." },
];
