export type Category = {
  slug: string;
  label: string;
  emoji: string;
  tagline: string;
};

export const categories: Category[] = [
  { slug: 'grocery', label: 'Grocery & Corner Shops', emoji: '🛒', tagline: 'Daily essentials, delivered fast.' },
  { slug: 'bakery', label: 'Bakeries & Sweet Shops', emoji: '🥖', tagline: 'Fresh bread and treats every morning.' },
  { slug: 'pharmacy', label: 'Pharmacies & Health Stores', emoji: '💊', tagline: 'Medicines and health supplies on demand.' },
  { slug: 'electronics', label: 'Electronics & Mobile Repair', emoji: '📱', tagline: 'Devices, accessories, and quick fixes.' },
  { slug: 'stationery', label: 'Stationery & Book Shops', emoji: '📚', tagline: 'Notebooks, pens, school and office supplies.' },
  { slug: 'dairy', label: 'Dairy & Milk Shops', emoji: '🥛', tagline: 'Milk, cheese, butter — the freshest nearby.' },
  { slug: 'salon', label: 'Salons & Beauty Parlours', emoji: '💇', tagline: 'Book your next appointment without phone tag.' },
  { slug: 'hardware', label: 'Hardware & Home Repair', emoji: '🔧', tagline: 'Tools, spare parts, and quick repairs.' },
  { slug: 'florist', label: 'Florists & Gift Shops', emoji: '🌸', tagline: 'Last-minute gifts and same-day flowers.' },
  { slug: 'home-kitchen', label: 'Home Kitchens & Meal Prep', emoji: '🍱', tagline: 'Home-cooked meals from your neighbourhood.' },
];
