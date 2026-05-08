export type FAQ = { q: string; a: string };
export type FAQGroup = { id: string; label: string; entries: FAQ[] };

export const FAQ_GROUPS: FAQGroup[] = [
  {
    id: "vendors",
    label: "If you sell",
    entries: [
      {
        q: "I don't have a website. Can I still sell?",
        a: "Yes. Qloqal builds a clean, link-shareable storefront from the items you list. You don't need a domain, a designer, or a developer.",
      },
      {
        q: "Do I need a new phone or tablet?",
        a: "No. Whatever phone runs WhatsApp will run Qloqal — including older Androids on slow connections.",
      },
      {
        q: "How do orders reach me?",
        a: "As a normal-looking WhatsApp message with an itemised order card and two buttons: Accept and Reject. Tap accept and start prepping.",
      },
      {
        q: "What if I want my partner to take orders too?",
        a: "Use WhatsApp the way you already use it. Anyone with access to that number can accept an order.",
      },
      {
        q: "When do I get paid?",
        a: "Payouts settle to your bank account on T+1 after a delivered order. No invoices, no waiting two weeks.",
      },
    ],
  },
  {
    id: "customers",
    label: "If you order",
    entries: [
      {
        q: "Are these real local shops?",
        a: "Every storefront on Qloqal is a real, independent business near you. No dark stores. No private labels pretending to be neighbours.",
      },
      {
        q: "How do I know if a shop is open?",
        a: "Open / closed status is set by the shop owner from their phone. If a shop is shut, you won't be able to place an order.",
      },
      {
        q: "Can I track my order?",
        a: "You'll see status updates: accepted → ready → out for delivery → delivered. We don't pretend to live-track a rider on a map; the status is what we know to be true.",
      },
    ],
  },
  {
    id: "money",
    label: "Money & data",
    entries: [
      {
        q: "What does Qloqal take from a sale?",
        a: "Per-order plan: 5% on a delivered order. No monthly fee. No listing fee. No setup fee. No paid placement.",
      },
      {
        q: "What about refunds?",
        a: "Refunds run through the same payment route you used to pay. Most issues are resolved in 24–48 hours.",
      },
      {
        q: "What data do you keep about me?",
        a: "The minimum needed to deliver an order: contact handle, delivery address, order history. We don't sell or rent it.",
      },
    ],
  },
];
