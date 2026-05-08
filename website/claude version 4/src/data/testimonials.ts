export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  location: string;
};

export const VENDOR_TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "I never installed anything. The first order arrived in WhatsApp like a normal message and I just tapped Accept. That was the day my bakery went online.",
    author: "M. Rivera",
    role: "Owner · Pão & Co. bakery",
    location: "Lisbon",
  },
  {
    quote:
      "I have one staff member and we both use my phone. Qloqal sits where the orders already came in, so nothing changed for us.",
    author: "A. Okafor",
    role: "Owner · The Stem florist",
    location: "Lagos",
  },
  {
    quote:
      "We pay zero monthly. The 5% per delivered order is fair, predictable, and I never see a surprise bill.",
    author: "L. Yamamoto",
    role: "Owner · Kit & Caboodle hardware",
    location: "Manila",
  },
  {
    quote:
      "Customers find me on the app and message me on WhatsApp. It's the same shop I've always run, just with a digital front door.",
    author: "S. Calderón",
    role: "Owner · Verde repair shop",
    location: "São Paulo",
  },
];

export const CUSTOMER_TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Finally an app that shows me the actual shop on my street, not a giant chain pretending to be local.",
    author: "R. Tan",
    role: "Customer",
    location: "London",
  },
  {
    quote:
      "I order from three places weekly: bakery, florist, repair shop. None of them had a website before. Now they're all in my pocket.",
    author: "J. Bauer",
    role: "Customer",
    location: "Berlin",
  },
];
