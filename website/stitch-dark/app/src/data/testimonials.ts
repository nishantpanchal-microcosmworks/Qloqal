export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  initials: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Qloqal changed how we do business. We're doing 4x the volume now that people can just order via WhatsApp.",
    name: "Elena Rodriguez",
    role: "Fresh-Mart Grocery",
    initials: "ER",
  },
  {
    quote:
      "The AI inventory feature alone is worth the price. No more 'out of stock' phone calls!",
    name: "Mark Thompson",
    role: "City Center Pharmacy",
    initials: "MT",
  },
  {
    quote:
      "My customers love the tracking experience. It feels like a premium service for a local shop price.",
    name: "Sarah Jenkins",
    role: "Bloom & Grow Florist",
    initials: "SJ",
  },
];
