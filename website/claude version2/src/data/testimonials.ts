export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export const vendorTestimonials: Testimonial[] = [
  {
    quote: 'I was nervous about going online — I thought I needed a tablet and a whole new system. With Qloqal I just open WhatsApp like always. Orders come in, I tap accept. That is it.',
    name: 'Marco R.',
    role: 'Owner, neighbourhood bakery',
  },
  {
    quote: 'My customers used to call to check stock. Now they see what I have in the app and order without ringing the shop. I get more orders and fewer interruptions.',
    name: 'Priya S.',
    role: 'Owner, family grocery',
  },
  {
    quote: 'The setup was the easiest part. I sent a list of my services and prices on WhatsApp, and the next day customers were booking me from the app.',
    name: 'Aisha K.',
    role: 'Salon owner',
  },
];

export const customerTestimonials: Testimonial[] = [
  {
    quote: 'I love that I can finally order from the actual shop down the street, not some giant chain.',
    name: 'Daniel L.',
    role: 'Customer',
  },
  {
    quote: 'Faster than walking, and I am supporting the small shops in my own neighbourhood. Win-win.',
    name: 'Sara M.',
    role: 'Customer',
  },
];
