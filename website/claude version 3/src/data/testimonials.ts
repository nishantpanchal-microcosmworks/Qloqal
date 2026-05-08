export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  location: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "It feels like the shop hired a quiet new assistant who never sleeps and never argues about the music.",
    author: "Marta R.",
    role: "Owner, Loaf & Linen Bakery",
    location: "Lisbon",
  },
  {
    quote:
      "We used to lose orders the moment a regular’s message slipped down the chat. Now nothing goes missing.",
    author: "Jonas K.",
    role: "Florist",
    location: "Copenhagen",
  },
  {
    quote:
      "Setup took an hour. Two days later we’d already covered our first month’s subscription in extra orders.",
    author: "Aiyana T.",
    role: "Co-founder, Trail Coffee Co.",
    location: "Portland",
  },
  {
    quote:
      "I didn’t want a polished e-commerce site — I wanted my shop, on the phone. Qloqal gave me exactly that.",
    author: "Helene D.",
    role: "Tailor & repair",
    location: "Lyon",
  },
  {
    quote:
      "The auto-replies sound like me, not like a help-desk script. That alone is worth the price.",
    author: "Rafael C.",
    role: "Owner, La Esquina Records",
    location: "Mexico City",
  },
  {
    quote:
      "Three branches, one inbox, no chaos. My counter staff finally stopped texting me at 11pm.",
    author: "Priya S.",
    role: "Founder, Halcyon Studio",
    location: "London",
  },
];
