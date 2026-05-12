import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="teal-panel mt-16 md:mt-24">
      <div className="container-pad mx-auto max-w-7xl py-16 grid gap-10 md:grid-cols-12">
        <div className="md:col-span-4">
          <div className="flex items-center gap-2.5">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-brand-green text-ink font-display font-extrabold text-lg">Q</span>
            <span className="font-display text-2xl font-semibold text-white">Qloqal</span>
          </div>
          <p className="mt-5 text-sm text-white/75 max-w-xs leading-relaxed">
            Commerce that lives where your customers already are.<br />
            <em>One chat thread away from going online.</em>
          </p>
        </div>

        <div className="md:col-span-2">
          <h4 className="text-white/95 font-semibold mb-3 text-sm">Product</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link to="/product" className="hover:text-white">Overview</Link></li>
            <li><Link to="/product" hash="vendor" className="hover:text-white">For shops</Link></li>
            <li><Link to="/product" hash="customer" className="hover:text-white">For shoppers</Link></li>
            <li><Link to="/pricing" className="hover:text-white">Pricing</Link></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h4 className="text-white/95 font-semibold mb-3 text-sm">Library</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link to="/library" className="hover:text-white">All pieces</Link></li>
            <li><Link to="/stories" className="hover:text-white">Stories</Link></li>
            <li><Link to="/about" className="hover:text-white">About</Link></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h4 className="text-white/95 font-semibold mb-3 text-sm">Support</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link to="/faq" className="hover:text-white">FAQ</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            <li><Link to="/product" hash="signup" className="hover:text-white">Start a shop</Link></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h4 className="text-white/95 font-semibold mb-3 text-sm">Legal</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link to="/privacy" className="hover:text-white">Privacy</Link></li>
            <li><Link to="/terms" className="hover:text-white">Terms</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="container-pad mx-auto max-w-7xl py-5 text-xs text-white/60 flex flex-wrap items-center justify-between gap-3">
          <span>© {new Date().getFullYear()} Qloqal. All rights reserved.</span>
          <span>Powered by WhatsApp Business · Secure payments built in</span>
        </div>
      </div>
    </footer>
  );
}
