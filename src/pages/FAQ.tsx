import { ArrowRight } from 'lucide-react';
import { Seo } from '@/components/seo/Seo';
import { Hero } from '@/components/sections/Hero';
import { Section } from '@/components/ui/Section';
import { CTABand } from '@/components/sections/CTABand';
import { FAQAccordion } from '@/components/sections/FAQAccordion';
import { LinkButton } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { shopperFaqs, vendorFaqs } from '@/data/faqs';

export function FAQ() {
  return (
    <>
      <Seo
        title="Frequently Asked Questions — Qloqal"
        description="Answers for shoppers and kirana owners."
        path="/faq"
      />

      <Hero
        title="Frequently asked questions."
        subtitle="Honest answers — for shoppers and for kirana owners. If you have a question we haven't covered, write to us."
      />

      <Section bg="white">
        <div className="mb-6 flex items-center gap-3">
          <Badge variant="brand">For Shoppers</Badge>
        </div>
        <FAQAccordion items={shopperFaqs} />
      </Section>

      <Section bg="ink">
        <div className="mb-6 flex items-center gap-3">
          <Badge variant="accent">For Kiranas</Badge>
        </div>
        <FAQAccordion items={vendorFaqs} />
      </Section>

      <CTABand
        title="Still have questions?"
        subtitle="We're a small team and we read every message."
        actions={
          <LinkButton to="/contact" variant="white" size="lg">
            Talk to us
            <ArrowRight size={18} />
          </LinkButton>
        }
      />
    </>
  );
}
