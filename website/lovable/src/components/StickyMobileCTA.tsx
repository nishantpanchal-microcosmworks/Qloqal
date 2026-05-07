import { Link, useRouterState } from "@tanstack/react-router";
import { X } from "lucide-react";
import { useState } from "react";

export function StickyMobileCTA() {
  const [dismissed, setDismissed] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });
  if (dismissed) return null;
  if (path === "/vendors" || path === "/thank-you") return null;
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-30 bg-background/95 backdrop-blur border-t border-border container-pad py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]">
      <div className="flex items-center gap-3">
        <Link to="/vendors" data-cta="sticky-start-selling" className="flex-1 bg-brand-green text-ink font-semibold rounded-xl px-4 py-3 text-center text-sm">
          Start selling on Qloqal
        </Link>
        <button onClick={() => setDismissed(true)} aria-label="Dismiss" className="h-11 w-11 inline-flex items-center justify-center rounded-xl border border-border">
          <X className="h-4 w-4" />
        </button>
      </div>
      <Link to="/customers" data-cta="sticky-get-app" className="block text-center text-xs mt-2 text-brand-blue underline-offset-4 hover:underline">
        Get the customer app
      </Link>
    </div>
  );
}
