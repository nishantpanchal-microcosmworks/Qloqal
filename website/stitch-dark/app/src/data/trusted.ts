import type { LucideIcon } from "lucide-react";
import { Store, Stethoscope, Scissors, Utensils } from "lucide-react";

export type TrustedBrand = {
  label: string;
  icon: LucideIcon;
  iconClassName: string;
};

export const trustedBrands: TrustedBrand[] = [
  { label: "Grocery Stores", icon: Store, iconClassName: "text-primary" },
  { label: "Pharmacies", icon: Stethoscope, iconClassName: "text-secondary" },
  { label: "Salons", icon: Scissors, iconClassName: "text-tertiary-container" },
  { label: "Bakeries", icon: Utensils, iconClassName: "text-primary" },
];
