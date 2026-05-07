import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { SectionHeader } from './SectionHeader';

const problems = [
  {
    title: 'Big platforms ignore your kirana',
    description:
      'Quick-commerce apps stock dark warehouses, not your neighborhood shop. Real local kiranas stay invisible.',
  },
  {
    title: 'Kirana owners don’t have time for new apps',
    description:
      'Most kiranas already run on WhatsApp. Asking them to learn a new dashboard is asking them to lose customers.',
  },
  {
    title: 'Neighborhood prices stay offline',
    description:
      'Your kirana sells things cheaper than you’d believe. But you can’t see those prices unless you walk in.',
  },
];

export function ProblemCards() {
  return (
    <Section bg="white">
      <SectionHeader
        eyebrow="The problem"
        title="Local commerce is broken on both sides."
        subtitle="Shoppers can’t see their kiranas online. Kiranas can’t serve customers off-platform. Everyone loses."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-3 md:gap-7">
        {problems.map((p) => (
          <Card key={p.title} variant="default">
            <h3 className="font-display text-xl font-bold text-ink-900">{p.title}</h3>
            <p className="mt-3 text-base leading-relaxed text-ink-700">{p.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
