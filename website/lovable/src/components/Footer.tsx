import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="bg-ink text-white/80 mt-24">
      <div className="container-pad mx-auto max-w-7xl py-14 grid gap-10 md:grid-cols-5">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-brand-green text-ink font-display font-extrabold">Q</span>
            <span className="font-display text-xl font-extrabold text-white">Qloqal</span>
          </div>
          <p className="mt-4 text-sm max-w-xs">Run your shop on WhatsApp. The easiest way for any small business to start selling online.</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Product</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/vendors">For Vendors</Link></li>
            <li><Link to="/customers">For Customers</Link></li>
            <li><Link to="/how-it-works">How it works</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/privacy">Privacy</Link></li>
            <li><Link to="/terms">Terms</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-pad mx-auto max-w-7xl py-5 text-xs text-white/50 flex flex-wrap items-center justify-between gap-3">
          <span>© {new Date().getFullYear()} Qloqal. All rights reserved.</span>
          <span>Powered by WhatsApp Business · Secure payments built in</span>
        </div>
      </div>
    </footer>
  );
}
