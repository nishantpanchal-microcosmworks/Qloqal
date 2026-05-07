export type FaqItem = {
  q: string;
  a: string;
};

export const shopperFaqs: FaqItem[] = [
  {
    q: 'When are you launching?',
    a: 'Soon. We are inviting our first 50 founding kiranas now and will go live in our pilot neighborhoods after that. Join the shopper notify list and we will email you when Qloqal is live near you.',
  },
  {
    q: 'Which areas are you starting with?',
    a: 'We are launching neighborhood by neighborhood. The exact list opens up as we onboard founding kiranas — sign up on the For Shoppers page and we will tell you the moment your area is ready.',
  },
  {
    q: 'Is it really free for shoppers?',
    a: 'Yes. There is no charge for using Qloqal as a shopper. You only pay your kirana for the items you order, just like you would in person.',
  },
  {
    q: 'How do I pay?',
    a: 'Through Razorpay — UPI, debit and credit cards, and netbanking are all supported. Cash on delivery is available at select kiranas.',
  },
  {
    q: 'What if my order is not accepted?',
    a: 'You get an automatic full refund within minutes. Orders that are not accepted by your kirana within 15 minutes are auto-cancelled, and your money is returned to your original payment method.',
  },
  {
    q: 'Can I cancel an order?',
    a: 'Yes — until the kirana taps Accept. Once they have accepted and started preparing, please call the kirana directly so they can confirm.',
  },
];

export const vendorFaqs: FaqItem[] = [
  {
    q: 'Do I need a smartphone or computer?',
    a: 'Just a phone with WhatsApp. That is it. Most kirana owners already have one — and that is all you need to take orders on Qloqal.',
  },
  {
    q: 'Do I need to install anything?',
    a: 'No. Orders arrive on your existing WhatsApp number as a normal chat message with Accept and Reject buttons. You never download a separate app.',
  },
  {
    q: 'How do I get paid?',
    a: 'Customers pay through Qloqal at the time of ordering. We settle the money to your bank account directly — same-day during the pilot, weekly after that.',
  },
  {
    q: 'Do you charge commission?',
    a: 'Not for our first 50 kiranas. They join free for life. After that, we will share simple, fair pricing — never hidden, never per-order surprises.',
  },
  {
    q: 'Can I pause my kirana on busy days?',
    a: 'Yes. A single message and your kirana stops appearing in search until you turn it back on. You stay in control.',
  },
  {
    q: 'What if I do not speak English well?',
    a: 'English only at first, but Hindi support is on our roadmap as the next big release. Other Indian languages will follow.',
  },
];
