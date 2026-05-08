export type Step = {
  index: string;
  title: string;
  input: string;
  output: string;
  body: string;
};

export const VENDOR_STEPS: Step[] = [
  {
    index: "01",
    title: "List your shop",
    input: "shop name, hours, items",
    output: "a public storefront link",
    body:
      "Open Qloqal once. Type or paste your top items. We build a clean, link-shareable page in the time it takes to make coffee.",
  },
  {
    index: "02",
    title: "Get an order",
    input: "customer taps 'place order'",
    output: "a WhatsApp message hits your phone",
    body:
      "The order looks like a normal WhatsApp message — itemised, totalled, with two big buttons.",
  },
  {
    index: "03",
    title: "Accept",
    input: "tap ✓ accept",
    output: "customer is told you're on it",
    body:
      "One tap. The customer sees the status change, you start prepping. No second app to open.",
  },
  {
    index: "04",
    title: "Mark ready",
    input: "tap ✓ ready",
    output: "delivery / pickup is dispatched",
    body:
      "When the order is bagged, tap ready. If you handed delivery to Qloqal, the runner is already on the way.",
  },
  {
    index: "05",
    title: "Get paid",
    input: "delivered order",
    output: "money in your bank account · T+1",
    body:
      "Settled to the bank account you specified, the next day. No invoices to chase, no gateway portal to learn.",
  },
  {
    index: "06",
    title: "Repeat",
    input: "next order",
    output: "tap ✓ accept",
    body:
      "There is no step six. The interface is two buttons. The hard part is the food, the haircut, the fix — Qloqal does the rest.",
  },
];
