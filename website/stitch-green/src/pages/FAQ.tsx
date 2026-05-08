import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Accordion, type AccordionItem } from "@/components/ui/Accordion";
import { CTABand } from "@/components/sections/CTABand";
import { VENDOR_FAQS, CUSTOMER_FAQS } from "@/data/faqs";
import { inputBase } from "@/components/ui/FormField";

function filterItems(items: AccordionItem[], q: string): AccordionItem[] {
  if (!q) return items;
  const needle = q.toLowerCase();
  return items.filter(
    (item) =>
      item.q.toLowerCase().includes(needle) ||
      item.a.toLowerCase().includes(needle),
  );
}

export default function FAQ() {
  const [query, setQuery] = useState("");

  const vendorList = useMemo(() => filterItems(VENDOR_FAQS, query), [query]);
  const customerList = useMemo(
    () => filterItems(CUSTOMER_FAQS, query),
    [query],
  );

  return (
    <>
      <SEO
        title="Frequently Asked Questions — Qloqal"
        description="Answers for vendors and customers, organized in one place."
        path="/faq"
      />

      <Hero
        eyebrow="Knowledge base"
        title="Frequently asked questions"
        subtitle="Everything you wanted to know about running and shopping on Qloqal."
      />

      <Section bg="lowest" className="!pt-0">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="relative mb-12">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-outline" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search questions…"
                className={`${inputBase} pl-12`}
              />
            </div>

            <h2 className="mb-4 text-2xl font-bold">For vendors</h2>
            {vendorList.length === 0 ? (
              <p className="mb-12 rounded-2xl bg-surface-container-low p-6 text-on-surface-variant">
                No vendor questions match "{query}".
              </p>
            ) : (
              <Accordion items={vendorList} className="mb-16" />
            )}

            <h2 className="mb-4 text-2xl font-bold">For customers</h2>
            {customerList.length === 0 ? (
              <p className="rounded-2xl bg-surface-container-low p-6 text-on-surface-variant">
                No customer questions match "{query}".
              </p>
            ) : (
              <Accordion items={customerList} />
            )}
          </div>
        </Container>
      </Section>

      <CTABand
        title="Still have questions?"
        subtitle="Our team replies within one business day."
        primary={{ label: "Contact us", to: "/contact" }}
      />
    </>
  );
}
