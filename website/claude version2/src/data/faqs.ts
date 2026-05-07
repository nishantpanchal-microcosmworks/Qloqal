export type FAQ = {
  q: string;
  a: string;
};

export type FAQGroup = {
  group: 'Vendors' | 'Customers' | 'Payments' | 'Privacy';
  items: FAQ[];
};

export const faqs: FAQGroup[] = [
  {
    group: 'Vendors',
    items: [
      {
        q: 'Do I need a separate app to manage my shop?',
        a: 'No. The whole point of Qloqal is that you run your shop from WhatsApp. When a customer places an order, you get a message with the order details. Tap Accept and you are done. There is no vendor app or vendor portal.',
      },
      {
        q: 'How long does it take to set up my shop?',
        a: 'About 10 minutes. Send us a list of your top items with prices and we get your shop live the same day. You do not need to take photos for every item — we can start with names and prices, and add photos later.',
      },
      {
        q: 'How do I update prices or stock?',
        a: 'Send a quick message to your Qloqal contact, or update them via the simple admin panel we set up for you. We are working on letting you update inventory directly via WhatsApp.',
      },
      {
        q: 'What if I cannot fulfil an order?',
        a: 'Just tap Reject on the WhatsApp message. The customer is notified and refunded automatically. No paperwork, no support tickets.',
      },
      {
        q: 'Can I pause my shop when I am closed or on holiday?',
        a: 'Yes. Send us a message and we mark your shop as paused — it stops appearing in the app until you reopen.',
      },
    ],
  },
  {
    group: 'Customers',
    items: [
      {
        q: 'What does Qloqal cost to use?',
        a: 'The customer app is free, always. You only pay for what you order from the shop, plus delivery if your shop charges it.',
      },
      {
        q: 'How do I know which shops are nearby?',
        a: 'Open the app and grant location access. We show you the shops within walking or quick-delivery distance — sorted by how close they are.',
      },
      {
        q: 'Who delivers my order?',
        a: 'Each shop sets up delivery the way that works for them. Some deliver themselves; some prefer customer pickup; some use a delivery partner. The shop tells you the option when you check out.',
      },
    ],
  },
  {
    group: 'Payments',
    items: [
      {
        q: 'How do I pay?',
        a: 'You can pay with cards, popular mobile wallets, or instant bank transfer. All payments are handled securely by our payment partner.',
      },
      {
        q: 'When does the shop get paid?',
        a: 'Money is collected when you order and settles to the shop after the order is delivered, minus a small per-order commission.',
      },
      {
        q: 'What about refunds?',
        a: 'If a shop cannot fulfil your order, we issue a refund automatically. It usually appears in your account within 5–7 business days.',
      },
    ],
  },
  {
    group: 'Privacy',
    items: [
      {
        q: 'Does Qloqal share my phone number with the shop?',
        a: 'Only what is needed to fulfil your order. The shop sees your name, address, and items — your phone number is shared only if delivery requires it.',
      },
      {
        q: 'How do I delete my account?',
        a: 'Send us a request from the email address linked to your account and we permanently delete your data within 7 days.',
      },
    ],
  },
];
