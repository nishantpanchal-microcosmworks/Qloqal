import { useState } from "react";
import { SEO } from "@/components/SEO";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { CTABand } from "@/components/sections/CTABand";
import { cn } from "@/lib/cn";

const CATEGORIES = [
  "All",
  "Grocery",
  "Bakery",
  "Pharmacy",
  "Restaurant",
  "Lifestyle",
] as const;

type Category = (typeof CATEGORIES)[number];

type Story = {
  name: string;
  category: Exclude<Category, "All">;
  city: string;
  blurb: string;
  emoji: string;
};

const STORIES: Story[] = [
  {
    name: "Sweet Bakes",
    category: "Bakery",
    city: "Northside",
    blurb: "Tripled weekend orders by going live on Qloqal in two weeks.",
    emoji: "🥐",
  },
  {
    name: "Fresh Mart",
    category: "Grocery",
    city: "Riverside",
    blurb: "Saves 12 hours a week on order intake — every staff member is freed up.",
    emoji: "🥬",
  },
  {
    name: "Quick Fix Hardware",
    category: "Lifestyle",
    city: "Old Town",
    blurb: "Zero missed orders since switching from group chats to Qloqal.",
    emoji: "🔧",
  },
  {
    name: "Peak Pharmacy",
    category: "Pharmacy",
    city: "Westend",
    blurb: "Repeat-customer rate jumped 40% within the first month.",
    emoji: "💊",
  },
  {
    name: "Olive Café",
    category: "Restaurant",
    city: "Harbor",
    blurb: "Pre-orders cut their lunch-hour queue in half.",
    emoji: "🍝",
  },
  {
    name: "Bloom & Co",
    category: "Lifestyle",
    city: "Midtown",
    blurb: "Built a 1,200-strong customer list without paying for ads.",
    emoji: "💐",
  },
];

export default function OurCustomers() {
  const [filter, setFilter] = useState<Category>("All");

  const visible = STORIES.filter((s) => filter === "All" || s.category === filter);

  return (
    <>
      <SEO
        title="Customers — Qloqal"
        description="Meet the local shops powering their neighborhoods with Qloqal."
        path="/our-customers"
      />

      <Hero
        eyebrow="Our community"
        title="Built by local. Loved by neighbors."
        subtitle="Sample stories from a growing community of shops who chose Qloqal over the giants. Real merchants will replace these placeholders as partners onboard."
      />

      <Section bg="lowest" className="!pt-0">
        <Container>
          <div className="mb-10 flex flex-wrap justify-center gap-3">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={cn(
                  "rounded-full px-5 py-2 text-sm font-semibold transition-colors",
                  filter === cat
                    ? "bg-primary text-on-primary"
                    : "bg-surface-container text-on-surface-variant hover:bg-surface-container-high",
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {visible.map((s) => (
              <div
                key={s.name}
                className="flex flex-col gap-4 rounded-[24px] bg-surface-container-lowest p-6 card-shadow card-shadow-hover"
              >
                <div className="flex h-40 items-center justify-center rounded-2xl bg-surface-container-low text-6xl">
                  {s.emoji}
                </div>
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-primary-container/30 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-on-primary-container">
                    {s.category}
                  </span>
                  <span className="text-xs text-on-surface-variant">
                    · {s.city}
                  </span>
                </div>
                <h3 className="text-xl font-bold">{s.name}</h3>
                <p className="text-sm text-on-surface-variant">{s.blurb}</p>
                <p className="mt-auto text-xs italic text-on-surface-variant">
                  Sample story — illustrative
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <CTABand
        title="Add your shop to the list."
        subtitle="Onboard in 10 minutes and join the merchants growing with Qloqal."
        primary={{ label: "Become a vendor", to: "/vendors" }}
        secondary={{ label: "How it works", to: "/how-it-works" }}
      />
    </>
  );
}
