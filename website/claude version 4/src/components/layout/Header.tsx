import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { PRIMARY_NAV } from "@/data/nav";
import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/cn";

export function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b-2 border-ink bg-[var(--color-paper)]">
      <div className="flex items-center justify-between gap-4 px-4 py-3 md:px-8">
        <div className="flex items-center gap-3">
          <Logo size="md" />
          <span className="hidden text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-ink-mute)] md:inline">
            ISSUE 04 · MONO-ZINE
          </span>
        </div>

        <nav className="hidden items-center gap-6 lg:flex">
          {PRIMARY_NAV.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                cn(
                  "text-[12px] font-bold uppercase tracking-[0.16em] no-underline",
                  isActive
                    ? "bg-[var(--color-signal-yellow)] px-2 py-1 border-2 border-ink"
                    : "hover:underline",
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            to="/vendors"
            variant="fill-green"
            size="sm"
            className="hidden md:inline-flex"
            data-cta="header-start-selling"
          >
            Start selling
          </Button>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            className="border-2 border-ink p-2 lg:hidden"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {/* mobile drawer */}
      {open && (
        <div className="fixed inset-0 top-[57px] z-30 flex flex-col gap-1 overflow-y-auto border-t-2 border-ink bg-[var(--color-paper)] p-4 lg:hidden">
          {PRIMARY_NAV.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                cn(
                  "block border-2 border-ink px-3 py-3 text-[14px] font-bold uppercase tracking-[0.12em] no-underline",
                  isActive
                    ? "bg-[var(--color-ink)] text-[var(--color-paper)]"
                    : "bg-[var(--color-paper)]",
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
          <div className="mt-3 flex flex-col gap-2">
            <Button
              to="/vendors"
              variant="fill-green"
              size="lg"
              className="w-full"
              data-cta="drawer-start-selling"
            >
              Start selling
            </Button>
            <Button
              to="/customers"
              variant="secondary"
              size="lg"
              className="w-full"
              data-cta="drawer-get-app"
            >
              Get the customer app
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
