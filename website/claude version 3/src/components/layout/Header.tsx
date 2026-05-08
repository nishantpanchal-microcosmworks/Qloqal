import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { PRIMARY_NAV } from "@/data/nav";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-outline-variant)] bg-[var(--color-surface)]/85 backdrop-blur supports-[backdrop-filter]:bg-[var(--color-surface)]/75">
      <div className="container-page flex items-center justify-between h-16 lg:h-20">
        <Logo />

        <nav className="hidden lg:flex items-center gap-1">
          {PRIMARY_NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  "px-3 py-2 text-[15px] rounded-full text-[var(--color-on-surface-variant)] hover:text-[var(--color-on-surface)] transition-colors",
                  isActive && "text-[var(--color-on-surface)] scribble-underline",
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Button to="/contact" variant="ghost" size="sm">
            Talk to us
          </Button>
          <Button to="/vendors" variant="primary" size="sm">
            Open my shop
          </Button>
        </div>

        <button
          type="button"
          className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-full border border-[var(--color-outline-variant)]"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open ? (
        <div className="lg:hidden border-t border-[var(--color-outline-variant)] bg-[var(--color-surface)]">
          <div className="container-page py-4 flex flex-col gap-1">
            {PRIMARY_NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "px-3 py-3 rounded-xl text-[15px] text-[var(--color-on-surface-variant)]",
                    isActive && "bg-[var(--color-surface-container)] text-[var(--color-on-surface)]",
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
            <div className="flex gap-2 pt-2">
              <Button to="/contact" variant="secondary" size="sm" className="flex-1">
                Talk to us
              </Button>
              <Button to="/vendors" variant="primary" size="sm" className="flex-1">
                Open my shop
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
