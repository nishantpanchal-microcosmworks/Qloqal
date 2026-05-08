export const NAV_LINKS = [
  { label: "For Vendors", to: "/vendors" },
  { label: "For Customers", to: "/customers" },
  { label: "How it Works", to: "/how-it-works" },
  { label: "Pricing", to: "/pricing" },
  { label: "Customers", to: "/our-customers" },
] as const;

export const FOOTER_COLUMNS = [
  {
    heading: "Product",
    links: [
      { label: "Features", to: "/vendors" },
      { label: "Vendor Dashboard", to: "/vendors" },
      { label: "Integrations", to: "/how-it-works" },
      { label: "Pricing", to: "/pricing" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us", to: "/about" },
      { label: "Customers", to: "/our-customers" },
      {
        label: "Careers",
        to: "/contact?subject=Press",
      },
      { label: "Blog", to: "/contact?subject=General" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", to: "/privacy" },
      { label: "Terms of Service", to: "/terms" },
      { label: "Cookie Policy", to: "/privacy" },
    ],
  },
] as const;
