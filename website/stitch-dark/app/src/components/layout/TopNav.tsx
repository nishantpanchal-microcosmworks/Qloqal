import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/primitives/Logo";
import { navItems } from "@/data/nav";
import { cn } from "@/lib/utils";

export function TopNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-surface/80 backdrop-blur-xl border-b border-outline-variant/30 shadow-xl shadow-primary/5">
      <div className="mx-auto flex h-20 max-w-app items-center justify-between px-gutter">
        <Link to="/" className="flex items-center" aria-label="Qloqal home">
          <Logo />
        </Link>

        <nav className="hidden md:flex items-center gap-6" aria-label="Primary">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="text-on-surface-variant text-body-md transition-colors duration-200 hover:text-primary"
              activeProps={{
                className: "text-primary font-bold border-b-2 border-primary pb-1",
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            type="button"
            className="hidden sm:inline-flex text-on-surface text-button px-4 py-2 hover:text-primary transition-colors"
          >
            Log In
          </button>
          <a
            href="#"
            data-cta="topnav-get-started"
            className="hidden sm:inline-flex items-center bg-primary-container !text-black text-button font-bold px-6 py-2 rounded-md transition-all hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] active:scale-95"
          >
            Get Started
          </a>
          <button
            type="button"
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-outline-variant/40 text-on-surface"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "md:hidden border-t border-outline-variant/30 bg-surface-container-low/95 backdrop-blur-xl overflow-hidden transition-[max-height,opacity] duration-300",
          open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="px-gutter py-4 flex flex-col gap-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-4 py-4 text-body-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface"
              activeProps={{ className: "bg-primary/10 text-primary" }}
            >
              {item.label}
            </Link>
          ))}
          <div className="flex gap-4 pt-2">
            <button
              type="button"
              className="flex-1 text-on-surface text-button py-4 rounded-md border border-outline-variant/40"
            >
              Log In
            </button>
            <a
              href="#"
              className="flex-1 text-center bg-primary-container !text-black text-button font-bold py-4 rounded-md"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
