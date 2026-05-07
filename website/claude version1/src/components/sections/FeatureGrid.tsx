import type { Feature } from '@/data/features';
import { Card } from '@/components/ui/Card';
import { cn } from '@/lib/utils';

type FeatureGridProps = {
  features: Feature[];
  tone?: 'brand' | 'accent';
};

export function FeatureGrid({ features, tone = 'brand' }: FeatureGridProps) {
  const iconCls =
    tone === 'brand'
      ? 'inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600'
      : 'inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent-50 text-accent-600';

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {features.map((f) => (
        <Card key={f.title} variant="default" interactive className={cn('h-full')}>
          <span className={iconCls}>
            <f.icon size={22} />
          </span>
          <h3 className="mt-5 font-display text-lg font-bold text-ink-900">{f.title}</h3>
          <p className="mt-2 text-base leading-relaxed text-ink-700">{f.description}</p>
        </Card>
      ))}
    </div>
  );
}
