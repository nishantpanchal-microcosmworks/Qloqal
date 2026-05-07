import type { ReactNode } from 'react';
import { Smartphone, ArrowRight, MessageCircle, Store } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { SectionHeader } from './SectionHeader';

export function SolutionBlock() {
  return (
    <Section bg="ink">
      <SectionHeader
        eyebrow="The Qloqal way"
        title="We meet kiranas where they already are — WhatsApp."
        subtitle="Shoppers order in the Qloqal app. Kiranas accept on the WhatsApp number they already use every day. We bridge the two — automatically, in seconds."
      />

      <div className="mt-12 flex flex-col items-stretch gap-4 md:flex-row md:items-center md:gap-2 lg:gap-4">
        <FlowStep
          icon={<Smartphone size={24} />}
          color="brand"
          step="1"
          title="Shopper orders"
          description="A customer places an order in the Qloqal app and pays with UPI, card, or netbanking."
        />
        <FlowArrow />
        <FlowStep
          icon={<MessageCircle size={24} />}
          color="accent"
          step="2"
          title="Kirana gets a WhatsApp message"
          description="The kirana receives a single message with Accept and Reject buttons. No app to install."
        />
        <FlowArrow />
        <FlowStep
          icon={<Store size={24} />}
          color="brand"
          step="3"
          title="Order is fulfilled"
          description="The kirana taps Mark Ready when prepared. The shopper picks up or has it delivered."
        />
      </div>
    </Section>
  );
}

function FlowStep({
  icon,
  color,
  step,
  title,
  description,
}: {
  icon: ReactNode;
  color: 'brand' | 'accent';
  step: string;
  title: string;
  description: string;
}) {
  return (
    <div className="relative flex-1 rounded-card border border-ink-300/60 bg-white p-6 shadow-soft md:p-7">
      <div className="flex items-center justify-between">
        <span
          className={
            color === 'brand'
              ? 'inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600'
              : 'inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent-50 text-accent-600'
          }
        >
          {icon}
        </span>
        <span className="font-display text-3xl font-extrabold text-ink-300">{step}</span>
      </div>
      <h3 className="mt-5 font-display text-lg font-bold text-ink-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-700">{description}</p>
    </div>
  );
}

function FlowArrow() {
  return (
    <div className="hidden shrink-0 items-center justify-center md:flex" aria-hidden>
      <ArrowRight size={28} className="text-ink-300" />
    </div>
  );
}
