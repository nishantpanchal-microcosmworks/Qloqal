import { Link, useRouterState } from "@tanstack/react-router";
import { Home, Layers, BadgeDollarSign, Plus } from "lucide-react";

const tabs = [
  { to: "/", label: "Home", icon: Home },
  { to: "/product", label: "Product", icon: Layers },
  { to: "/pricing", label: "Pricing", icon: BadgeDollarSign },
  { to: "/product", label: "Start", icon: Plus, primary: true, hash: "signup" },
] as const;

export function BottomTabs() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  return (
    <nav
      aria-label="Primary"
      className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-background/95 backdrop-blur border-t border-border pb-[env(safe-area-inset-bottom)]"
    >
      <ul className="grid grid-cols-4">
        {tabs.map((t) => {
          const Icon = t.icon;
          const active = path === t.to && !("primary" in t && t.primary);
          const primary = "primary" in t && t.primary;
          return (
            <li key={t.label}>
              <Link
                to={t.to}
                hash={"hash" in t ? t.hash : undefined}
                className={[
                  "flex flex-col items-center justify-center gap-1 py-2.5 text-[11px] font-semibold transition",
                  primary ? "text-brand-green-dark" : active ? "text-ink" : "text-muted-ink",
                ].join(" ")}
              >
                <span className={[
                  "h-9 w-9 inline-flex items-center justify-center rounded-full",
                  primary ? "bg-brand-green text-ink" : active ? "bg-cream" : "",
                ].join(" ")}>
                  <Icon className="h-4 w-4" />
                </span>
                {t.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
