export type ManifestoLine = {
  index: string;
  text: string;
  emphasis?: string;
};

export const MANIFESTO: ManifestoLine[] = [
  {
    index: "#01",
    text: "Local shops are not lifestyle accessories.",
    emphasis: "They are infrastructure.",
  },
  {
    index: "#02",
    text: "The reason a small shop never went online isn't laziness — it's that every existing tool was built for someone else's problem.",
  },
  {
    index: "#03",
    text: "We will not ask the shop owner to install another app. Ever.",
  },
  {
    index: "#04",
    text: "WhatsApp is already the operating system of small business. We just plug into it.",
  },
  {
    index: "#05",
    text: "We charge nothing until you sell something. There is no setup fee, no monthly minimum, no 'premium tier'.",
  },
  {
    index: "#06",
    text: "We will not sell paid placement. The shop closest to the customer wins.",
  },
  {
    index: "#07",
    text: "We will not pretend to track a delivery rider on a map when we don't actually know.",
  },
  {
    index: "#08",
    text: "If you can chat on WhatsApp, you can run an online shop.",
    emphasis: "That's the whole product.",
  },
];
