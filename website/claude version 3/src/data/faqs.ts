export interface FAQ {
  q: string;
  a: string;
}

export interface FAQGroup {
  heading: string;
  items: FAQ[];
}

export const HOME_FAQS: FAQ[] = [
  {
    q: "Do my customers need to install something?",
    a: "No. They keep using WhatsApp the way they always have. Qloqal lives quietly behind the chat — they see your shop, you see their order.",
  },
  {
    q: "What if I already use a separate website?",
    a: "Lovely. Keep it. Qloqal sits next to it and handles the conversational side — most shops find roughly two thirds of their orders end up arriving in chat anyway.",
  },
  {
    q: "Is there a long contract?",
    a: "No contract, no setup fee. Pay monthly, pause whenever it’s slow season, return when it isn’t. We’d rather earn it.",
  },
  {
    q: "Will you replace the way I already work?",
    a: "Only the noisy parts. Manual price-listing, repeat questions, payment chasing. The conversation, the warmth, the regulars — that stays yours.",
  },
];

export const FAQ_GROUPS: FAQGroup[] = [
  {
    heading: "Getting started",
    items: [
      {
        q: "How long does setup actually take?",
        a: "Most shopkeepers are taking real orders inside an afternoon. The longest part is photographing your shelf — and even that, we have a one-tap helper for.",
      },
      {
        q: "Can I import from an existing spreadsheet?",
        a: "Yes. Drop in a CSV or paste a Google Sheet link and we’ll match the columns ourselves. You get to fix any mismatches before anything goes live.",
      },
      {
        q: "Do I need a separate WhatsApp Business number?",
        a: "If you already have one, perfect — keep it. If not, you can get one through Qloqal in about ten minutes. Either way, the number stays yours.",
      },
    ],
  },
  {
    heading: "Day-to-day",
    items: [
      {
        q: "What happens when I’m closed?",
        a: "Qloqal answers quietly in your voice. It tells folks when you reopen, takes their order if they want, and leaves a stack of receipts on your counter for the morning.",
      },
      {
        q: "Can multiple staff handle chats?",
        a: "Up to four on Studio, twelve on Atelier. Each person sees who’s replying so nobody steps on anyone else’s toes.",
      },
      {
        q: "Will customers know they’re talking to a bot?",
        a: "We don’t pretend. Auto-replies are clearly tagged, and the moment a customer types something specific, the chat is yours again.",
      },
    ],
  },
  {
    heading: "Money",
    items: [
      {
        q: "How do payments actually arrive?",
        a: "Straight to your bank. Qloqal takes no cut on the transaction itself — your subscription is the only thing you pay us.",
      },
      {
        q: "Which payment methods do you support?",
        a: "Cards, mobile wallets, bank transfer pay-links, and good old cash on collection. We’ll switch on whichever ones make sense in your country.",
      },
      {
        q: "Can I refund through Qloqal?",
        a: "Yes — one tap on the order, the customer gets a polite note, the money returns through whichever rails it came in on.",
      },
    ],
  },
  {
    heading: "The boring stuff",
    items: [
      {
        q: "Who owns the customer data?",
        a: "You do. If you ever leave, you take a clean export with you — phone numbers, order history, the lot. No hostage situations.",
      },
      {
        q: "Is this compliant with privacy laws?",
        a: "We follow GDPR-style consent flows everywhere we operate, and your shop’s privacy notice is generated from a template you can edit.",
      },
      {
        q: "What about uptime?",
        a: "99.9% over the last twelve months. If WhatsApp is up, Qloqal is up. Status page lives at status.qloqal.com.",
      },
    ],
  },
];
