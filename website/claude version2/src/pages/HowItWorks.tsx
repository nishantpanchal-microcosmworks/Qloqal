import Seo from '../components/seo/Seo';
import Section from '../components/ui/Section';
import SectionHeader from '../components/sections/SectionHeader';
import VendorFlow from '../components/sections/VendorFlow';
import CustomerFlow from '../components/sections/CustomerFlow';
import CTABand from '../components/sections/CTABand';
import { ArrowRight } from 'lucide-react';

const pipeline = [
  { node: 'Customer app', desc: 'Where the order starts.' },
  { node: 'Qloqal backend', desc: 'Routes the order, handles payment, schedules timers.' },
  { node: 'Vendor WhatsApp', desc: 'Where the shop owner takes action.' },
];

export default function HowItWorks() {
  return (
    <>
      <Seo
        title="How Qloqal works — WhatsApp ordering for small businesses"
        description="A walkthrough of the Qloqal order flow — vendor side and customer side. See how WhatsApp-native commerce works end to end."
        canonical="/how-it-works"
      />
      <Section tone="white">
        <SectionHeader
          eyebrow="The full picture"
          title="How Qloqal works."
          subtitle="Two sides to every order. Both kept simple — on purpose."
        />
      </Section>

      <Section tone="surface">
        <VendorFlow />
      </Section>

      <Section tone="white">
        <CustomerFlow />
      </Section>

      <Section tone="surface">
        <SectionHeader eyebrow="Behind the scenes" title="What happens between the tap and the ping." />
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {pipeline.map((p, i) => (
            <div key={i} className="relative rounded-2xl bg-white p-6 shadow-soft">
              <p className="text-xs font-bold uppercase tracking-wider text-brand-blue">Step {i + 1}</p>
              <h3 className="mt-1 text-lg font-bold text-ink">{p.node}</h3>
              <p className="mt-1 text-sm text-muted">{p.desc}</p>
              {i < pipeline.length - 1 && (
                <ArrowRight className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-brand-blue sm:block" size={22} />
              )}
            </div>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-2xl rounded-2xl bg-brand-blue-soft p-6 text-center">
          <p className="text-sm font-bold uppercase tracking-wider text-brand-blue">Why WhatsApp?</p>
          <p className="mt-2 text-base text-ink">
            Because small business owners already check it all day. Meeting them where they are removes the #1 reason small shops never go online.
          </p>
        </div>
      </Section>

      <CTABand />
    </>
  );
}
