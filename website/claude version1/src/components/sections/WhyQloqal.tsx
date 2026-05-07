import { Zap, Heart, Banknote } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { SectionHeader } from './SectionHeader';

const reasons = [
  {
    icon: Zap,
    title: 'Zero install for vendors',
    description:
      'Kiranas use the WhatsApp number they already own. No new app, no training, no friction.',
  },
  {
    icon: Heart,
    title: 'Real local prices',
    description:
      'Shoppers pay what their kirana would normally charge. No hidden markup, no platform tax.',
  },
  {
    icon: Banknote,
    title: 'Money goes to your kirana',
    description:
      'Direct payouts to the kirana — not to a faraway warehouse. Local commerce that stays local.',
  },
];

export function WhyQloqal() {
  return (
    <Section bg="white">
      <SectionHeader
        eyebrow="Why Qloqal"
        title="Built for the way local commerce actually works."
      />
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {reasons.map((r) => (
          <Card key={r.title} variant="default" interactive>
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
              <r.icon size={22} />
            </span>
            <h3 className="mt-5 font-display text-xl font-bold text-ink-900">{r.title}</h3>
            <p className="mt-2 text-base leading-relaxed text-ink-700">{r.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
