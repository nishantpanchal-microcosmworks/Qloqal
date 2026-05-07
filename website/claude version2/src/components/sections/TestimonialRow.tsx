import { Quote } from 'lucide-react';
import { Testimonial } from '../../data/testimonials';

type Props = {
  items: Testimonial[];
  size?: 'lg' | 'sm';
};

export default function TestimonialRow({ items, size = 'lg' }: Props) {
  const padding = size === 'lg' ? 'p-6' : 'p-5';
  return (
    <div className={`grid gap-5 ${items.length === 2 ? 'sm:grid-cols-2' : 'sm:grid-cols-2 lg:grid-cols-3'}`}>
      {items.map((t, i) => (
        <figure key={i} className={`relative rounded-2xl bg-white ${padding} shadow-soft`}>
          <Quote className="absolute right-4 top-4 text-brand-green opacity-30" size={28} />
          <blockquote className={`text-ink ${size === 'lg' ? 'text-base' : 'text-sm'}`}>"{t.quote}"</blockquote>
          <figcaption className="mt-4 text-sm">
            <span className="font-bold text-ink">{t.name}</span>
            <span className="block text-xs text-muted">{t.role}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
