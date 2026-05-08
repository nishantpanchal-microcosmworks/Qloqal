export interface UseCase {
  id: string;
  kicker: string;
  title: string;
  body: string;
  imageId: string;
}

export const HOME_USE_CASES: UseCase[] = [
  {
    id: "morning-rush",
    kicker: "*01 — morning rush",
    title: "Pre-orders before the queue forms.",
    body: "Regulars text the night before. You bake the right number of croissants the next morning.",
    imageId: "bakery",
  },
  {
    id: "after-hours",
    kicker: "*02 — after hours",
    title: "Quietly answer when you’re asleep.",
    body: "Your shop says ‘closed, back at 9, here’s the menu’ — politely, in your own voice.",
    imageId: "lamp",
  },
  {
    id: "weekly-drop",
    kicker: "*03 — weekly drop",
    title: "New stock, broadcast in seconds.",
    body: "Snap the shelf, write a line, send to all opted-in customers. No newsletter required.",
    imageId: "studio",
  },
  {
    id: "repeat-orders",
    kicker: "*04 — old friends",
    title: "‘Same as last time, please.’",
    body: "One tap from a regular re-orders the exact basket they had last Thursday.",
    imageId: "ledger",
  },
];
