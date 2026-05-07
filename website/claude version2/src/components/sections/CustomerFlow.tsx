import { Search, ShoppingBag, Truck } from 'lucide-react';
import SectionHeader from './SectionHeader';

const steps = [
  {
    icon: Search,
    title: 'Find shops near you',
    desc: 'Open the app — see the actual shops on your street, sorted by distance.',
  },
  {
    icon: ShoppingBag,
    title: 'Pick what you want',
    desc: 'Browse what is in stock right now. Add to cart. Pay your way.',
  },
  {
    icon: Truck,
    title: 'Track and receive',
    desc: 'See live status updates. Receive your order at the door or pick it up.',
  },
];

export default function CustomerFlow() {
  return (
    <div>
      <SectionHeader
        eyebrow="For customers"
        title="Order from the actual shops near you."
        subtitle="No giant chains crowding the results — just the businesses on your street."
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-3">
        {steps.map((s, i) => (
          <div key={i} className="rounded-2xl bg-white p-6 shadow-soft">
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand-blue-soft text-brand-blue">
              <s.icon size={22} />
            </div>
            <h3 className="mt-4 text-lg font-bold text-ink">{s.title}</h3>
            <p className="mt-1 text-sm text-muted">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
