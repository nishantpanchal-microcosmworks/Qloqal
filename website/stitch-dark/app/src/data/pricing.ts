export type PricingTier = {
  id: "starter" | "growth" | "enterprise";
  eyebrow: string;
  name: string;
  description: string;
  price: string;
  priceSuffix?: string;
  features: string[];
  ctaLabel: string;
  highlighted?: boolean;
};

export const pricingTiers: PricingTier[] = [
  {
    id: "starter",
    eyebrow: "Individuals",
    name: "Starter",
    description: "Essential tools for local coordination.",
    price: "$0",
    priceSuffix: "/month",
    features: [
      "Up to 3 active projects",
      "Basic analytics dashboard",
      "Community support",
    ],
    ctaLabel: "Get Started",
  },
  {
    id: "growth",
    eyebrow: "Teams",
    name: "Growth",
    description: "Advanced scaling for growing hubs.",
    price: "$49",
    priceSuffix: "/month",
    features: [
      "Unlimited active projects",
      "Real-time collaboration",
      "Advanced ML reporting",
      "Priority email support",
    ],
    ctaLabel: "Get Started",
    highlighted: true,
  },
  {
    id: "enterprise",
    eyebrow: "Global",
    name: "Enterprise",
    description: "Custom infrastructure for large scale.",
    price: "Custom",
    features: [
      "Custom API integrations",
      "SLA & Dedicated manager",
      "Multi-tenant architecture",
    ],
    ctaLabel: "Contact Sales",
  },
];

export type ComparisonRow = {
  feature: string;
  starter: string;
  growth: string;
  enterprise: string;
};

export const comparisonRows: ComparisonRow[] = [
  { feature: "Project Management", starter: "3 active", growth: "Unlimited", enterprise: "Unlimited" },
  { feature: "API Access", starter: "Read-only", growth: "Full access", enterprise: "High-rate limit" },
  { feature: "SSO & Security", starter: "—", growth: "—", enterprise: "SAML / OIDC" },
  { feature: "Analytics", starter: "Daily reports", growth: "Real-time", enterprise: "Custom BI export" },
  { feature: "User Roles", starter: "Admin only", growth: "Basic RBAC", enterprise: "Granular RBAC" },
];

export type PricingFAQ = { q: string; a: string };

export const pricingFaqs: PricingFAQ[] = [
  {
    q: "Can I change plans later?",
    a: "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.",
  },
  {
    q: "What forms of payment do you accept?",
    a: "We accept all major credit cards, PayPal, and wire transfers for Enterprise customers.",
  },
  {
    q: "Is there a free trial for the Growth plan?",
    a: "We offer a 14-day full-feature trial for the Growth plan. No credit card required to start.",
  },
];
