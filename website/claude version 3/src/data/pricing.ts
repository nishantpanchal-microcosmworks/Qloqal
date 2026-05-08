export interface PricingTier {
  id: string;
  name: string;
  tagline: string;
  monthly: number;
  yearly: number;
  currency: string;
  highlight: boolean;
  cta: string;
  features: string[];
  notIncluded?: string[];
}

export const PRICING_TIERS: PricingTier[] = [
  {
    id: "counter",
    name: "Counter",
    tagline: "For the corner shop just opening its doors online.",
    monthly: 0,
    yearly: 0,
    currency: "$",
    highlight: false,
    cta: "Open the shutter",
    features: [
      "Up to 60 items in your shelf",
      "Single WhatsApp number",
      "Manual order taking",
      "QR poster for the counter",
      "Email replies within 48 hours",
    ],
    notIncluded: [
      "Card / wallet payments",
      "Auto-reply assistant",
      "Multi-staff inbox",
    ],
  },
  {
    id: "studio",
    name: "Studio",
    tagline: "For shops that have steady regulars and a backroom team.",
    monthly: 29,
    yearly: 290,
    currency: "$",
    highlight: true,
    cta: "Stock the shelves",
    features: [
      "Unlimited items, unlimited photos",
      "One number, up to four staff inboxes",
      "Card, wallet, and bank pay-links",
      "Quiet auto-replies for hours you’re closed",
      "Order ledger with daily summary",
      "Printable receipts",
      "Priority chat support",
    ],
  },
  {
    id: "atelier",
    name: "Atelier",
    tagline: "For multi-location brands and growing studios.",
    monthly: 79,
    yearly: 790,
    currency: "$",
    highlight: false,
    cta: "Set up the workshop",
    features: [
      "Everything in Studio",
      "Up to five branches under one brand",
      "Custom domain and bespoke catalog theme",
      "Roles, permissions, and audit log",
      "Dedicated onboarding human (no bots)",
      "Webhooks and API for accountancy tools",
      "1:1 monthly review",
    ],
  },
];

export interface PricingComparisonRow {
  feature: string;
  counter: string | boolean;
  studio: string | boolean;
  atelier: string | boolean;
}

export const PRICING_COMPARISON: PricingComparisonRow[] = [
  { feature: "Items in catalog", counter: "60", studio: "Unlimited", atelier: "Unlimited" },
  { feature: "Staff seats", counter: "1", studio: "4", atelier: "12" },
  { feature: "WhatsApp numbers", counter: "1", studio: "1", atelier: "5" },
  { feature: "Card / wallet payments", counter: false, studio: true, atelier: true },
  { feature: "Quiet auto-replies", counter: false, studio: true, atelier: true },
  { feature: "Custom domain", counter: false, studio: false, atelier: true },
  { feature: "Webhooks / API", counter: false, studio: false, atelier: true },
  { feature: "Dedicated onboarding human", counter: false, studio: false, atelier: true },
];
