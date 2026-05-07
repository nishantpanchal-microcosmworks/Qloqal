export type RoadmapPhase = {
  phase: string;
  title: string;
  description: string;
  status: 'now' | 'next' | 'later';
};

export const roadmap: RoadmapPhase[] = [
  {
    phase: 'Phase 1',
    title: 'Pilot',
    description: 'Goods marketplace, WhatsApp vendor bot, Razorpay payments, founding kiranas onboarded directly.',
    status: 'now',
  },
  {
    phase: 'Phase 2',
    title: 'Services + Hindi',
    description: 'Appointments for barbers, salons, and repairs. Hindi support across the customer app and the WhatsApp bot.',
    status: 'next',
  },
  {
    phase: 'Phase 3',
    title: 'Subscriptions',
    description: 'Pro and Enterprise plans go live. Featured placement, analytics, multi-outlet management for growing kiranas.',
    status: 'later',
  },
  {
    phase: 'Phase 4',
    title: 'Expansion + AI',
    description: 'Smart recommendations, more languages, broader expansion, and a richer toolkit for every kirana.',
    status: 'later',
  },
];
