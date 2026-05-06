import { Check } from 'lucide-react';
import { Container } from '@/components/ui/Container';

const items = [
  'Made in India',
  'Built for kiranas everywhere',
  'Free during pilot',
  'No vendor app needed',
];

export function TrustStrip() {
  return (
    <div className="border-y border-ink-300/60 bg-white">
      <Container className="py-5">
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-ink-700 md:gap-x-10">
          {items.map((t) => (
            <li key={t} className="inline-flex items-center gap-2 font-medium">
              <Check size={16} className="text-accent-500" />
              {t}
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}
