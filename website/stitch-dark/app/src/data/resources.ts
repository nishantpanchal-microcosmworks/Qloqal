export type ResourceCard = {
  category: string;
  categoryColor: "primary" | "secondary";
  title: string;
  description: string;
  meta?: string;
};

export const featuredResource = {
  category: "Latest News",
  title: "Mastering WhatsApp API: A Blueprint for Scale",
  description:
    "Discover how leading enterprise teams are automating customer lifecycles without losing the human touch. From template approval to complex logic trees.",
  ctaLabel: "Read Featured Article",
};

export const resourceCards: ResourceCard[] = [
  {
    category: "How-to Guide",
    categoryColor: "primary",
    title: "Integrating Qloqal with Your Existing Tech Stack",
    description:
      "A step-by-step technical guide on connecting CRM, ERP, and custom internal tools to our WhatsApp automation engine using webhooks and REST API.",
    meta: "12 min read",
  },
  {
    category: "Product Update",
    categoryColor: "secondary",
    title: "v2.4: Advanced Flow Builder is Here",
    description:
      "Drag-and-drop complexity made simple. Our new node-based editor allows for multi-conditional branching.",
    meta: "Oct 24, 2024",
  },
  {
    category: "Business Growth",
    categoryColor: "primary",
    title: "5 ROI Metrics for WhatsApp",
    description:
      "How to quantify the success of your conversational commerce strategy beyond open rates.",
  },
  {
    category: "Expert Insight",
    categoryColor: "secondary",
    title: "The Future of AI Agents in B2B",
    description:
      "Why LLM-powered support agents are replacing traditional IVR systems in mid-market companies.",
  },
  {
    category: "Templates",
    categoryColor: "primary",
    title: "Automation Template Library",
    description:
      "Copy and paste our highest-converting automation flows directly into your Qloqal workspace.",
  },
];

export const resourceCategories = [
  "All Resources",
  "How-to Guides",
  "Business Growth",
  "Product Updates",
];
