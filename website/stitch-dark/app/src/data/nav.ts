export type NavItem = {
  label: string;
  href: "/solutions" | "/pricing" | "/enterprise" | "/resources";
};

export const navItems: NavItem[] = [
  { label: "Solutions", href: "/solutions" },
  { label: "Pricing", href: "/pricing" },
  { label: "Enterprise", href: "/enterprise" },
  { label: "Resources", href: "/resources" },
];
