import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { NAV_LINKS } from "@/data/nav";
import { cn } from "@/lib/cn";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <nav
      className="fixed top-0 left-0 z-50 w-full border-b border-outline-variant/30 bg-surface/80 glass-nav"
      aria-label="Primary"
    >
      <div className="container-page flex h-20 items-center justify-between">
        <Logo />

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                cn(
                  "text-base font-medium transition-colors duration-200",
                  isActive
                    ? "text-secondary border-b-2 border-secondary font-bold pb-0.5"
                    : "text-on-surface-variant hover:text-primary",
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden md:block">
          <Button to="/vendors" size="md">
            Start selling
          </Button>
        </div>

        <button
          type="button"
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full text-on-surface hover:bg-surface-container"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-surface/95 glass-nav md:hidden">
          <div className="container-page flex h-20 items-center justify-between">
            <Logo />
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-on-surface hover:bg-surface-container"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="container-page flex flex-1 flex-col items-center justify-center gap-6 pb-24 text-center">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  cn(
                    "text-2xl font-semibold transition-colors",
                    isActive
                      ? "text-primary"
                      : "text-on-surface hover:text-primary",
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Button to="/vendors" size="lg" className="mt-4">
              Start selling
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
