import { useState } from 'react';
import Seo from '../components/seo/Seo';
import Section from '../components/ui/Section';
import SectionHeader from '../components/sections/SectionHeader';
import FAQAccordion from '../components/sections/FAQAccordion';
import { faqs } from '../data/faqs';

const groupNames = ['Vendors', 'Customers', 'Payments', 'Privacy'] as const;
type Group = typeof groupNames[number];

export default function FAQ() {
  const [active, setActive] = useState<Group>('Vendors');
  const items = faqs.find((g) => g.group === active)?.items ?? [];

  return (
    <>
      <Seo
        title="FAQ — Qloqal"
        description="Common questions about Qloqal — for vendors, customers, payments, and privacy."
        canonical="/faq"
      />
      <Section tone="white">
        <SectionHeader eyebrow="FAQ" title="Frequently asked questions." />
        <div className="mt-10 flex flex-wrap justify-center gap-2" role="tablist" aria-label="FAQ categories">
          {groupNames.map((g) => (
            <button
              key={g}
              type="button"
              role="tab"
              aria-selected={active === g}
              onClick={() => setActive(g)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                active === g
                  ? 'bg-brand-blue text-white'
                  : 'bg-surface text-ink hover:bg-brand-blue-soft hover:text-brand-blue'
              }`}
            >
              {g}
            </button>
          ))}
        </div>
        <div className="mx-auto mt-8 max-w-3xl">
          <FAQAccordion items={items} />
        </div>
      </Section>
    </>
  );
}
