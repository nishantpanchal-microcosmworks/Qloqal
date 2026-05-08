export interface WhyReason {
  title: string;
  body: string;
  icon: string;
}

export const WHY_WHATSAPP: WhyReason[] = [
  {
    title: "It’s where the conversation already happens.",
    body:
      "Two billion people open WhatsApp every day. Asking them to download something else is asking too much.",
    icon: "MessageSquare",
  },
  {
    title: "Replies feel like a friend, not a form.",
    body:
      "A chat is informal. A web checkout is paperwork. Conversations sell because they sound like people.",
    icon: "Smile",
  },
  {
    title: "Photos travel further than menus.",
    body:
      "A single photo shared in a chat reaches further than any homepage ever did. WhatsApp is the new shop window.",
    icon: "Camera",
  },
  {
    title: "Nobody has to make an account.",
    body:
      "No sign-ups, no abandoned carts. The phone number is the account. The conversation is the receipt.",
    icon: "UserCheck",
  },
];
