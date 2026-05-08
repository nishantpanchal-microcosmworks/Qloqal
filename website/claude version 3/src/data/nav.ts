export interface NavItem {
  label: string;
  to: string;
}

export const PRIMARY_NAV: NavItem[] = [
  { label: "For sellers", to: "/vendors" },
  { label: "For shoppers", to: "/customers" },
  { label: "How it works", to: "/how-it-works" },
  { label: "Pricing", to: "/pricing" },
  { label: "Stories", to: "/our-customers" },
];

export const FOOTER_NAV: { heading: string; items: NavItem[] }[] = [
  {
    heading: "Product",
    items: [
      { label: "For sellers", to: "/vendors" },
      { label: "For shoppers", to: "/customers" },
      { label: "How it works", to: "/how-it-works" },
      { label: "Pricing", to: "/pricing" },
    ],
  },
  {
    heading: "Company",
    items: [
      { label: "About", to: "/about" },
      { label: "Stories", to: "/our-customers" },
      { label: "FAQ", to: "/faq" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    heading: "Fine print",
    items: [
      { label: "Privacy", to: "/privacy" },
      { label: "Terms", to: "/terms" },
    ],
  },
];
