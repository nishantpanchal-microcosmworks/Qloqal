import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function FloatingPill() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.2 }}
          className="hidden md:flex fixed bottom-6 left-1/2 -translate-x-1/2 z-40 items-center gap-3 rounded-full bg-ink text-white pl-5 pr-2 py-2 shadow-soft"
        >
          <Link to="/" className="flex items-center gap-2">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-green text-ink font-display font-extrabold text-sm">Q</span>
            <span className="font-display font-semibold text-sm">Qloqal</span>
          </Link>
          <span className="h-4 w-px bg-white/20" />
          <Link
            to="/product"
            hash="signup"
            className="inline-flex items-center gap-1.5 rounded-full bg-brand-green text-ink font-semibold text-xs px-3.5 py-2"
          >
            Start a shop <ArrowRight className="h-3 w-3" />
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
