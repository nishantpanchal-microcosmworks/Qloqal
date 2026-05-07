import { LucideIcon, Zap, Pin, Heart, Wallet } from 'lucide-react';
import SectionHeader from './SectionHeader';

type Feature = {
  icon: LucideIcon;
  accent: 'green' | 'blue';
  title: string;
  desc: string;
};

const features: Feature[] = [
  {
    icon: Zap,
    accent: 'green',
    title: 'Zero-app vendor onboarding',
    desc: 'Runs on the WhatsApp the shop owner already uses. Nothing to install, nothing to learn.',
  },
  {
    icon: Pin,
    accent: 'blue',
    title: 'Hyperlocal first',
    desc: 'We only show shops within walking or quick-delivery distance. No giant chains crowding the results.',
  },
  {
    icon: Heart,
    accent: 'green',
    title: 'Fair to small businesses',
    desc: 'No setup fees, no monthly minimums, no tablet rentals. You only pay when you actually get orders.',
  },
  {
    icon: Wallet,
    accent: 'blue',
    title: 'Pay your way',
    desc: 'Cards, popular wallets, instant bank transfer. Secure payments built in.',
  },
];

export default function FeatureGrid() {
  return (
    <div>
      <SectionHeader title="Built for the way small shops actually work." />
      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {features.map((f, i) => (
          <div key={i} className="rounded-2xl bg-white p-6 shadow-soft">
            <div
              className={`grid h-11 w-11 place-items-center rounded-xl ${
                f.accent === 'green' ? 'bg-brand-green-soft text-brand-green-dark' : 'bg-brand-blue-soft text-brand-blue'
              }`}
            >
              <f.icon size={22} />
            </div>
            <h3 className="mt-4 text-lg font-bold text-ink">{f.title}</h3>
            <p className="mt-1 text-sm text-muted">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
