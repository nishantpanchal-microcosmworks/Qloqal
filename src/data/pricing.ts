export type PricingTier = {
  name: string;
  price: string;
  priceDetail: string;
  description: string;
  features: string[];
  cta: string;
  ctaTo: string;
  highlighted?: boolean;
  comingSoon?: boolean;
};

export const pricingTiers: PricingTier[] = [
  {
    name: 'Pilot',
    price: '₹0',
    priceDetail: 'Free for life — first 50 kiranas',
    description: 'Everything you need to take WhatsApp orders, with zero setup cost.',
    features: [
      'Unlimited orders',
      'WhatsApp order notifications',
      'Daily inventory summary',
      'Low-stock alerts',
      'Same-day payouts',
      'No commission, ever',
      'Founder-direct support',
    ],
    cta: 'Become a Founding Kirana',
    ctaTo: '/vendors',
    highlighted: true,
  },
  {
    name: 'Pro',
    price: 'Coming soon',
    priceDetail: 'Simple monthly fee',
    description: 'For kiranas growing beyond the pilot — featured placement and richer tools.',
    features: [
      'Everything in Pilot',
      'Featured placement in search',
      'Detailed sales analytics',
      'Priority support',
      'Custom shop hours and holidays',
      'Promotional banners',
    ],
    cta: 'Get notified',
    ctaTo: '/contact',
    comingSoon: true,
  },
  {
    name: 'Enterprise',
    price: "Let's talk",
    priceDetail: 'For multi-outlet kiranas and chains',
    description: 'Custom integrations, dedicated support, and tailored billing for larger operators.',
    features: [
      'Everything in Pro',
      'Multi-outlet management',
      'Custom POS integrations',
      'Dedicated account manager',
      'SLA-backed support',
      'Tailored payout schedule',
    ],
    cta: 'Contact sales',
    ctaTo: '/contact',
    comingSoon: true,
  },
];
