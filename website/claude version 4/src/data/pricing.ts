export type PricingTier = {
  id: string;
  badge: string;
  name: string;
  price: string;
  cadence: string;
  intro: string;
  features: string[];
  cta: { label: string; to: string };
  highlight?: boolean;
};

export const VENDOR_TIERS: PricingTier[] = [
  {
    id: "list",
    badge: "FREE",
    name: "List & test",
    price: "$0",
    cadence: "/ forever",
    intro:
      "Get your shop online before the end of lunch. Pay nothing until orders start coming in.",
    features: [
      "Storefront page · public link",
      "WhatsApp order routing",
      "Up to 50 listed items",
      "Customer-pickup only",
      "Cash, card or wallet collected by you",
    ],
    cta: { label: "Start free", to: "/vendors" },
  },
  {
    id: "perorder",
    badge: "GROW",
    name: "Per-order",
    price: "5%",
    cadence: "/ delivered order",
    intro:
      "When orders flow, we take a slice. No monthly bill. No setup fee. Cancel by closing the shop.",
    features: [
      "Everything in List & test",
      "Unlimited items",
      "Built-in payment collection",
      "Auto-payout to your bank, T+1",
      "Delivery handed off to Qloqal partners",
    ],
    cta: { label: "Sign up free", to: "/vendors" },
    highlight: true,
  },
  {
    id: "studio",
    badge: "STUDIO",
    name: "Multi-counter",
    price: "Talk",
    cadence: "/ to us",
    intro:
      "Three or more counters under one owner? We'll wire up routing, payouts and reporting per counter.",
    features: [
      "Everything in Per-order",
      "Multi-counter routing",
      "Per-counter payouts & reports",
      "Priority support channel",
      "Custom commission",
    ],
    cta: { label: "Talk to us", to: "/contact" },
  },
];
