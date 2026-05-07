import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { to: "/how-it-works", label: "How it works" },
  { to: "/vendors", label: "For Vendors" },
  { to: "/customers", label: "For Customers" },
  { to: "/pricing", label: "Pricing" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => { setOpen(false); }, [path]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 bg-background/85 backdrop-blur border-b border-border">
      <div className="container-pad mx-auto max-w-7xl flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2" data-cta="header-logo">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-brand-green text-ink font-display font-extrabold">Q</span>
          <span className="font-display text-xl font-extrabold text-ink">Qloqal</span>
        </Link>
        <nav className="hidden md:flex items-center gap-7">
          {links.map(l => (
            <Link key={l.to} to={l.to} className="text-sm font-medium text-ink/80 hover:text-brand-blue transition" activeProps={{ className: "text-brand-blue" }}>
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <Link to="/customers" data-cta="header-get-app" className="text-sm font-semibold border-2 border-brand-blue text-brand-blue rounded-xl px-3.5 py-2 hover:bg-brand-blue-soft transition">Get the app</Link>
          <Link to="/vendors" data-cta="header-start-selling" className="text-sm font-semibold bg-brand-green text-ink rounded-xl px-4 py-2.5 hover:bg-brand-green-dark transition shadow-soft">Start selling</Link>
        </div>
        <button onClick={() => setOpen(true)} aria-label="Open menu" className="md:hidden h-11 w-11 inline-flex items-center justify-center rounded-xl border border-border">
          <Menu className="h-5 w-5" />
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ y: "-100%" }} animate={{ y: 0 }} exit={{ y: "-100%" }} transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-50 bg-background flex flex-col">
            <div className="flex items-center justify-between h-16 container-pad border-b border-border">
              <span className="font-display text-xl font-extrabold">Qloqal</span>
              <button onClick={() => setOpen(false)} aria-label="Close menu" className="h-11 w-11 inline-flex items-center justify-center rounded-xl border border-border">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="flex-1 overflow-auto container-pad py-6 flex flex-col gap-1">
              {links.map(l => (
                <Link key={l.to} to={l.to} className="py-3 text-lg font-semibold text-ink border-b border-border">{l.label}</Link>
              ))}
              <div className="mt-6 flex flex-col gap-3">
                <Link to="/vendors" data-cta="drawer-start-selling" className="bg-brand-green text-ink font-semibold rounded-xl px-4 py-3.5 text-center">Start selling on Qloqal</Link>
                <Link to="/customers" data-cta="drawer-get-app" className="border-2 border-brand-blue text-brand-blue font-semibold rounded-xl px-4 py-3 text-center">Get the customer app</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
