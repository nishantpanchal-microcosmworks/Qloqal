import type { AccordionItem } from "@/components/ui/Accordion";

export const HOME_FAQS: AccordionItem[] = [
  {
    q: "Can I switch plans later?",
    a: "Absolutely. You can upgrade or downgrade your plan at any time. If you upgrade, the new features and transaction rates apply immediately.",
  },
  {
    q: "What qualifies as a transaction?",
    a: "Any sale completed through the Qloqal platform — including in-app purchases, web orders, and QR-code payments processed at your storefront.",
  },
  {
    q: "Are there any hidden setup fees?",
    a: "Zero. We believe in transparency. The monthly fee (if applicable) and transaction percentage are the only costs you'll ever see.",
  },
  {
    q: "How does the Hyperlocal Map work?",
    a: "Qloqal uses geo-fencing to alert nearby users about your business, helping drive foot traffic and local discovery through our consumer-facing application.",
  },
  {
    q: "Is my data secure?",
    a: "We use bank-grade encryption for all transactions and customer data. We are PCI-DSS compliant to ensure your business and your customers are always protected.",
  },
];

export const VENDOR_FAQS: AccordionItem[] = [
  {
    q: "Do I need to install any new app to manage my shop?",
    a: "No. Your existing WhatsApp account is the dashboard. You'll receive structured order messages with one-tap accept and ready buttons.",
  },
  {
    q: "How do payouts work?",
    a: "Payouts are settled to your linked bank account within one business day of order completion. You can view every transaction in your vendor portal.",
  },
  {
    q: "Do you charge commission on every order?",
    a: "Only on the Growth and Scale plans, and only on completed transactions. The Starter plan is commission-free for the first 50 orders each month.",
  },
  {
    q: "Can I pause my shop on busy days?",
    a: "Yes. Send 'pause' to the Qloqal bot and your storefront goes into snooze mode. Send 'resume' when you're ready for orders again.",
  },
  {
    q: "What if I don't speak English well?",
    a: "Our bot supports multiple languages and a simple emoji-based reply set. You can run your shop in your preferred language.",
  },
  {
    q: "How long does setup take?",
    a: "Most merchants are live in under ten minutes — add your shop name, upload a few products, and connect WhatsApp.",
  },
];

export const CUSTOMER_FAQS: AccordionItem[] = [
  {
    q: "How fast is the delivery?",
    a: "Our delivery times typically range from 15 to 45 minutes, depending on your distance from the store and the complexity of your order.",
  },
  {
    q: "Are the prices the same as in-store?",
    a: "Yes. The prices on Qloqal mirror what you'd pay in person at the merchant's storefront.",
  },
  {
    q: "Can I schedule a delivery for later?",
    a: "Yes. Pick any time slot during the merchant's open hours during checkout.",
  },
  {
    q: "Is there a minimum order amount?",
    a: "Each merchant sets their own minimum, usually equal to or lower than their in-store minimum.",
  },
  {
    q: "What if my item is out of stock?",
    a: "We'll notify you in real time and offer a substitute or a refund — your choice.",
  },
];

export const PRICING_FAQS: AccordionItem[] = [
  {
    q: "Can I switch plans later?",
    a: "Yes. Upgrade or downgrade any time from your dashboard — changes apply immediately on the next billing cycle.",
  },
  {
    q: "What qualifies as a transaction?",
    a: "Any completed sale routed through Qloqal — whether the customer ordered via WhatsApp, your microsite, or the marketplace.",
  },
  {
    q: "Are there any hidden setup fees?",
    a: "None. The plan price plus the per-transaction percentage is everything. No annual fees, no platform fees, no integration fees.",
  },
  {
    q: "How does the Hyperlocal Map placement work?",
    a: "Featured shops appear at the top of search results within their delivery radius and get an extra promo slot in nearby customer feeds.",
  },
  {
    q: "Is my data secure?",
    a: "Yes. PCI-DSS compliant payments, encrypted backups, and audit logs on every action.",
  },
  {
    q: "Do I need a credit card to start the free plan?",
    a: "No. Starter is free forever — no card required.",
  },
];
