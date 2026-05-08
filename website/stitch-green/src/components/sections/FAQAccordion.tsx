import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Accordion, type AccordionItem } from "@/components/ui/Accordion";

type Props = {
  title?: string;
  subtitle?: string;
  items: AccordionItem[];
  bg?: "lowest" | "default" | "low";
  limit?: number;
};

export function FAQAccordion({
  title = "Frequently asked questions",
  subtitle,
  items,
  bg = "lowest",
  limit,
}: Props) {
  const visible = limit ? items.slice(0, limit) : items;

  return (
    <Section bg={bg}>
      <Container>
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">{title}</h2>
            {subtitle && (
              <p className="mt-3 text-lg text-on-surface-variant">{subtitle}</p>
            )}
          </div>
          <Accordion items={visible} defaultOpen={0} />
        </div>
      </Container>
    </Section>
  );
}
