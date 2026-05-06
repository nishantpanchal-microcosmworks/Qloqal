import type { LucideIcon } from 'lucide-react';
import {
  MapPin,
  Tag,
  CreditCard,
  Activity,
  Wallet,
  Truck,
  MessageCircle,
  Package,
  Bell,
  Banknote,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

export type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const customerFeatures: Feature[] = [
  {
    icon: MapPin,
    title: 'Nearby kiranas',
    description: 'Discover every kirana around you with one tap. Real shops, real distance, real availability.',
  },
  {
    icon: Tag,
    title: 'Real local prices',
    description: 'No marked-up "platform pricing." You pay what your kirana would charge you in person.',
  },
  {
    icon: CreditCard,
    title: 'UPI, cards, netbanking',
    description: 'All Indian payment methods supported through Razorpay — fast, secure, familiar.',
  },
  {
    icon: Activity,
    title: 'Live order tracking',
    description: 'Watch your order move from accepted to ready in real time. No guessing.',
  },
  {
    icon: Wallet,
    title: 'No minimum order',
    description: 'Need just a packet of biscuits? Order it. Your kirana will not say no.',
  },
  {
    icon: Truck,
    title: 'Cash on delivery',
    description: 'Available at select kiranas — pay in cash when your order arrives.',
  },
];

export const vendorFeatures: Feature[] = [
  {
    icon: MessageCircle,
    title: 'Zero app to install',
    description: 'Orders arrive on your existing WhatsApp number. Tap Accept. That is the whole flow.',
  },
  {
    icon: Package,
    title: 'Stock from WhatsApp',
    description: 'Update your inventory by replying to a message. No spreadsheets, no dashboards, no training.',
  },
  {
    icon: Bell,
    title: 'Daily summaries',
    description: 'A simple end-of-day WhatsApp summary tells you what you sold and what to restock.',
  },
  {
    icon: Banknote,
    title: 'Same-day payouts',
    description: 'Money lands in your bank account the same day — no waiting weeks for settlements.',
  },
  {
    icon: ShieldCheck,
    title: 'Free during pilot',
    description: 'No setup fee. No subscription. No commission for the first 50 kiranas — locked in for life.',
  },
  {
    icon: Sparkles,
    title: 'You stay in control',
    description: 'Pause your kirana on busy days, set your hours, reject orders you cannot fulfil. Your shop, your rules.',
  },
];
