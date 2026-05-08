export interface Step {
  number: string;
  title: string;
  body: string;
  duration: string;
}

export const HOW_IT_WORKS_STEPS: Step[] = [
  {
    number: "01",
    title: "Photograph the shelf.",
    body:
      "Walk around with your phone, snap your products. Qloqal lifts names, prices and tags so the catalog half-builds itself.",
    duration: "~30 minutes",
  },
  {
    number: "02",
    title: "Connect WhatsApp.",
    body:
      "Either link the number you already use or get a new one through us. We do the verification dance with Meta on your behalf.",
    duration: "~10 minutes",
  },
  {
    number: "03",
    title: "Hang the open sign.",
    body:
      "We print you a QR poster, generate a short link, and write a little welcome note in your voice. You decide where it goes.",
    duration: "~5 minutes",
  },
  {
    number: "04",
    title: "Take the first order.",
    body:
      "A customer says hello. The catalog opens in their chat. They tap, you confirm, payment lands. It’s really that small.",
    duration: "your move",
  },
];
