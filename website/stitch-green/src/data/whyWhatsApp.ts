export const WHY_WHATSAPP = [
  {
    icon: "groups",
    title: "High Trust",
    body: "Customers feel safer chatting with real people instead of cold checkout flows.",
  },
  {
    icon: "speed",
    title: "Instant Reach",
    body: "Notifications that actually get read — read rates above 95% on WhatsApp.",
  },
  {
    icon: "install_mobile",
    title: "Zero Friction",
    body: "No new apps for customers to download. They already have WhatsApp open.",
  },
  {
    icon: "autorenew",
    title: "Auto-pilot",
    body: "Automated order routing, structured replies, and payment receipts in chat.",
  },
  {
    icon: "public",
    title: "Works Everywhere",
    body: "Optimized for low-bandwidth networks. Works on any phone, any plan.",
  },
  {
    icon: "trending_up",
    title: "Repeat Sales",
    body: "Re-engage past customers in the same chat thread that closed the first sale.",
  },
] as const;

export const SHOWCASE_TILES = [
  { icon: "browser_updated", label: "Live orders", emphasized: false },
  { icon: "chat", label: "WhatsApp accept", emphasized: true },
  { icon: "smartphone", label: "Customer app", emphasized: false },
  { icon: "payments", label: "Payments", emphasized: false },
  { icon: "insights", label: "Insights", emphasized: false },
] as const;

export const STATS = [
  { value: "6+", label: "Categories" },
  { value: "10 min", label: "Setup time" },
  { value: "3 taps", label: "Per order" },
  { value: "0 apps", label: "For customers" },
] as const;
