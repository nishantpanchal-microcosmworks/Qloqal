export type NavLink = { label: string; to: string };

export const PRIMARY_NAV: NavLink[] = [
  { label: "How it works", to: "/how-it-works" },
  { label: "Vendors", to: "/vendors" },
  { label: "Customers", to: "/customers" },
  { label: "Pricing", to: "/pricing" },
  { label: "About", to: "/about" },
];

export const FOOTER_PRODUCT: NavLink[] = [
  { label: "Vendors", to: "/vendors" },
  { label: "Customers", to: "/customers" },
  { label: "How it works", to: "/how-it-works" },
  { label: "Pricing", to: "/pricing" },
];

export const FOOTER_COMPANY: NavLink[] = [
  { label: "About", to: "/about" },
  { label: "Stories", to: "/our-customers" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
];

export const FOOTER_LEGAL: NavLink[] = [
  { label: "Privacy", to: "/privacy" },
  { label: "Terms", to: "/terms" },
];
