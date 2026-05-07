import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { Section } from "@/components/primitives/Section";
import { GlassCard } from "@/components/primitives/GlassCard";
import { pricingFaqs } from "@/data/pricing";

export function PricingFAQ() {
  return (
    <Section className="max-w-3xl mx-auto px-gutter">
      <h2 className="font-display text-h2 text-center mb-10">Common Questions</h2>
      <Accordion.Root type="single" collapsible className="space-y-4">
        {pricingFaqs.map((faq, i) => (
          <Accordion.Item key={i} value={String(i)} asChild>
            <GlassCard className="px-6 py-4">
              <Accordion.Header>
                <Accordion.Trigger className="flex justify-between items-center w-full text-left group">
                  <span className="font-display text-h3 pr-4">{faq.q}</span>
                  <ChevronDown
                    size={20}
                    className="text-primary shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180"
                  />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="overflow-hidden data-[state=open]:animate-[fadeIn_200ms_ease-out]">
                <div className="pt-4 text-body-md text-on-surface-variant">
                  {faq.a}
                </div>
              </Accordion.Content>
            </GlassCard>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </Section>
  );
}
