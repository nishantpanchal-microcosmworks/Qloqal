export type PricingTier = {
  name: string;
  price: string;
  cadence: string;
  tagline: string;
  highlighted?: boolean;
  features: string[];
  cta: { label: string; to: string };
};

export const PRICING_TIERS: PricingTier[] = [
  {
    name: "Starter",
    price: "$0",
    cadence: "/mo",
    tagline:
      "Perfect for individuals and shops starting their journey.",
    features: [
      "Up to 50 orders / month",
      "Hyperlocal Map listing",
      "Basic inventory (50 items)",
      "Standard dashboard",
    ],
    cta: { label: "Start for free", to: "/vendors" },
  },
  {
    name: "Growth",
    price: "$49",
    cadence: "/mo",
    tagline:
      "For local shops scaling delivery and neighborhood reach.",
    highlighted: true,
    features: [
      "1.5% + $0.30 per transaction",
      "Featured Map placement",
      "Unlimited inventory",
      "Advanced analytics",
      "CRM and loyalty tools",
    ],
    cta: { label: "Upgrade to Growth", to: "/vendors" },
  },
  {
    name: "Scale",
    price: "$199",
    cadence: "/mo",
    tagline:
      "Custom solutions for regional chains and large local conglomerates.",
    features: [
      "1.0% + $0.30 per transaction",
      "Custom white-label app",
      "Dedicated account manager",
      "API + POS integration",
    ],
    cta: { label: "Talk to sales", to: "/contact" },
  },
];

export type ComparisonRow = {
  feature: string;
  starter: string | boolean;
  growth: string | boolean;
  scale: string | boolean;
};

export const COMPARISON_ROWS: ComparisonRow[] = [
  { feature: "Hyperlocal Map listing", starter: true, growth: true, scale: true },
  { feature: "Mobile app storefront", starter: true, growth: true, scale: true },
  {
    feature: "Inventory limit",
    starter: "50 items",
    growth: "Unlimited",
    scale: "Unlimited",
  },
  {
    feature: "Neighborhood push notifications",
    starter: false,
    growth: true,
    scale: true,
  },
  { feature: "Custom coupon engine", starter: false, growth: true, scale: true },
  { feature: "AI price optimization", starter: false, growth: true, scale: true },
  { feature: "Custom branding", starter: false, growth: false, scale: true },
  {
    feature: "Priority customer support",
    starter: false,
    growth: false,
    scale: true,
  },
  {
    feature: "Advanced sales analytics",
    starter: false,
    growth: true,
    scale: true,
  },
  {
    feature: "Dedicated success manager",
    starter: false,
    growth: false,
    scale: true,
  },
  { feature: "API access", starter: false, growth: false, scale: true },
  { feature: "POS integration", starter: false, growth: false, scale: true },
  { feature: "White-label apps", starter: false, growth: false, scale: true },
  {
    feature: "Delivery fleet access",
    starter: false,
    growth: true,
    scale: true,
  },
  {
    feature: "Multi-location support",
    starter: false,
    growth: false,
    scale: true,
  },
];
