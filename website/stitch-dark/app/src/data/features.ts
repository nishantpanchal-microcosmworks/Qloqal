import type { LucideIcon } from "lucide-react";
import {
  Map,
  Sparkles,
  CreditCard,
  Users,
  BarChart3,
  Truck,
} from "lucide-react";

export type BentoFeature = {
  icon: LucideIcon;
  iconClassName: string;
  title: string;
  description: string;
  span: "wide" | "narrow";
};

export const homeFeatures: BentoFeature[] = [
  {
    icon: Map,
    iconClassName: "text-primary",
    title: "Hyperlocal Marketplace",
    description: "Optimised SEO for your specific neighborhood and zip codes.",
    span: "wide",
  },
  {
    icon: Sparkles,
    iconClassName: "text-secondary",
    title: "AI Catalog",
    description: "Photo-to-product SKU generation.",
    span: "narrow",
  },
  {
    icon: CreditCard,
    iconClassName: "text-primary",
    title: "Easy Payments",
    description: "Cards, wallet, and Cash on Delivery.",
    span: "narrow",
  },
  {
    icon: Users,
    iconClassName: "text-secondary",
    title: "CRM Tools",
    description: "Broadcast to loyal segments.",
    span: "narrow",
  },
  {
    icon: BarChart3,
    iconClassName: "text-primary",
    title: "Advanced Analytics",
    description: "Track your most popular hours and best-selling items per street.",
    span: "wide",
  },
  {
    icon: Truck,
    iconClassName: "text-secondary",
    title: "Last-Mile",
    description: "Driver tracking and routes.",
    span: "narrow",
  },
];
