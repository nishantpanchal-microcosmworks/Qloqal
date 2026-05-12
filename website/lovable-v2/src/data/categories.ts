export type Category = {
  slug: string;
  name: string;
  emoji: string;
  blurb: string;
  image: string;
};

const img = (id: string) =>
  `https://images.unsplash.com/${id}?w=900&q=80&auto=format&fit=crop`;

// Fresh image set for lovable-v2 — different photos from the original lovable build.
export const categories: Category[] = [
  { slug: "grocery", name: "Grocery", emoji: "🛒", blurb: "Daily essentials, delivered from the corner shop.", image: img("photo-1604719312566-8912e9227c6a") },
  { slug: "bakery", name: "Bakery", emoji: "🥖", blurb: "Your morning bread, every morning.", image: img("photo-1555507036-ab1f4038808a") },
  { slug: "pharmacy", name: "Pharmacy", emoji: "💊", blurb: "Medicines and health, when you need them.", image: img("photo-1631549916768-4119b2e5f926") },
  { slug: "electronics", name: "Electronics", emoji: "📱", blurb: "Gadgets, accessories and quick repairs.", image: img("photo-1550009158-9ebf69173e03") },
  { slug: "stationery", name: "Stationery", emoji: "📚", blurb: "Books, supplies and last-minute prints.", image: img("photo-1583485088034-697b5bc54ccd") },
  { slug: "dairy", name: "Dairy", emoji: "🥛", blurb: "Fresh milk and dairy from local producers.", image: img("photo-1628088062854-d1870b4553da") },
  { slug: "salon", name: "Salon", emoji: "💇", blurb: "Book a haircut without phone tag.", image: img("photo-1622286342621-4bd786c2447c") },
  { slug: "hardware", name: "Hardware", emoji: "🔧", blurb: "Tools, parts and home-repair help.", image: img("photo-1503602642458-232111445657") },
  { slug: "florist", name: "Florist", emoji: "🌸", blurb: "Flowers and gifts for any occasion.", image: img("photo-1561181286-d3fee7d55364") },
  { slug: "home-kitchen", name: "Home Kitchen", emoji: "🍱", blurb: "Home-cooked meals, made with care.", image: img("photo-1556909114-f6e7ad7d3136") },
];
