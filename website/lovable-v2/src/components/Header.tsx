import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { to: "/product", label: "Product" },
  { to: "/pricing", label: "Pricing" },
  { to: "/stories", label: "Stories" },
  { to: "/library", label: "Library" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => { setOpen(false); }, [path]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={false}
        animate={{ opacity: scrolled ? 0 : 1, y: scrolled ? -8 : 0 }}
        transition={{ duration: 0.2 }}
        className={`absolute top-0 inset-x-0 z-30 ${scrolled ? "pointer-events-none" : ""}`}
      >
        <div className="container-pad mx-auto max-w-7xl flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2.5" data-cta="header-logo">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-brand-green text-ink font-display font-extrabold text-lg">Q</span>
            <span className="font-display text-2xl font-semibold text-ink">Qloqal</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            {links.map(l => (
              <Link
                key={l.to}
                to={l.to}
                className="text-sm font-medium text-ink/75 hover:text-ink transition"
                activeProps={{ className: "text-ink" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-5">
            <a href="#" className="text-sm font-medium text-muted-ink hover:text-ink">Sign in</a>
            <Link
              to="/product"
              hash="signup"
              data-cta="header-start-shop"
              className="inline-flex items-center gap-2 text-sm font-semibold bg-ink text-white rounded-md px-4 py-2.5 hover:bg-brand-green-dark transition"
            >
              Start a shop <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <button onClick={() => setOpen(true)} aria-label="Open menu" className="md:hidden h-11 w-11 inline-flex items-center justify-center rounded-md border border-border bg-white">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ y: "-100%" }} animate={{ y: 0 }} exit={{ y: "-100%" }} transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-50 bg-background flex flex-col">
            <div className="flex items-center justify-between h-16 container-pad border-b border-border">
              <span className="font-display text-xl font-semibold">Qloqal</span>
              <button onClick={() => setOpen(false)} aria-label="Close menu" className="h-11 w-11 inline-flex items-center justify-center rounded-md border border-border">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="flex-1 overflow-auto container-pad py-6 flex flex-col gap-1">
              {links.map(l => (
                <Link key={l.to} to={l.to} className="py-4 text-2xl font-display font-semibold text-ink border-b border-border">{l.label}</Link>
              ))}
              <div className="mt-8 flex flex-col gap-3">
                <Link to="/product" hash="signup" data-cta="drawer-start-shop" className="bg-ink text-white font-semibold rounded-md px-4 py-3.5 text-center">Start a shop</Link>
                <a href="#" className="text-center text-sm text-muted-ink py-2">Sign in</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
