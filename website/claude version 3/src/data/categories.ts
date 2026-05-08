export interface Category {
  id: string;
  label: string;
  blurb: string;
  icon: string;
}

export const CATEGORIES: Category[] = [
  { id: "bakery", label: "Bakeries & cafés", blurb: "Daily menus, pre-orders, regulars who want their usual.", icon: "Cookie" },
  { id: "florist", label: "Florists", blurb: "Bouquets that change weekly, deliveries that don’t.", icon: "Flower2" },
  { id: "tailor", label: "Tailors & repairs", blurb: "Measurements, fittings, pickup reminders.", icon: "Scissors" },
  { id: "books", label: "Bookshops", blurb: "Reservations, holds, ‘something like the last one’.", icon: "BookOpen" },
  { id: "records", label: "Records & vintage", blurb: "Stock that turns over fast, photos that sell it.", icon: "Disc3" },
  { id: "grocer", label: "Grocers", blurb: "Weekly baskets, special orders, neighbourhood deliveries.", icon: "ShoppingBasket" },
  { id: "studio", label: "Studios & makers", blurb: "Bespoke runs, waiting lists, kind notes back.", icon: "Hammer" },
  { id: "service", label: "Services", blurb: "Salons, repairs, tutors — anyone whose calendar matters.", icon: "CalendarClock" },
];
