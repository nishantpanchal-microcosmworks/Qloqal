import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X } from 'lucide-react';
import { ButtonLink } from '../ui/Button';
import { cta } from '../../lib/analytics';

const HIDE_ON = ['/thank-you', '/privacy', '/terms', '/vendors'];

export default function StickyMobileCTA() {
  const [dismissed, setDismissed] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setDismissed(false);
  }, [pathname]);

  if (dismissed || HIDE_ON.some((p) => pathname.startsWith(p)) || pathname === '/404') return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-30 lg:hidden">
      <div className="flex items-center gap-2 border-t border-ink/10 bg-white p-3 shadow-card">
        <ButtonLink to="/vendors" variant="primary" size="md" data-cta={cta.stickyStartSelling} className="flex-1">
          Start selling on Qloqal
        </ButtonLink>
        <Link
          to="/customers"
          data-cta={cta.stickyGetApp}
          className="text-xs font-semibold text-brand-blue underline-offset-2 hover:underline"
        >
          Get app
        </Link>
        <button
          type="button"
          aria-label="Dismiss"
          onClick={() => setDismissed(true)}
          className="grid h-9 w-9 place-items-center rounded-full text-muted hover:bg-surface"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}
