import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import { ButtonLink } from '../ui/Button';
import { cta } from '../../lib/analytics';
import Logo from '../ui/Logo';

type Props = {
  open: boolean;
  onClose: () => void;
};

const links = [
  { to: '/vendors', label: 'For Vendors' },
  { to: '/customers', label: 'For Customers' },
  { to: '/how-it-works', label: 'How it works' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/faq', label: 'FAQ' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function MobileDrawer({ open, onClose }: Props) {
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-white animate-fade-in" role="dialog" aria-modal="true" aria-label="Site navigation">
      <div className="flex items-center justify-between border-b border-ink/10 px-5 py-4">
        <Logo />
        <button
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          className="grid h-10 w-10 place-items-center rounded-full hover:bg-surface"
        >
          <X size={22} />
        </button>
      </div>
      <nav className="flex flex-col gap-1 px-5 py-6 flex-1 overflow-y-auto">
        {links.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            onClick={onClose}
            className="rounded-xl px-3 py-3 text-lg font-semibold text-ink hover:bg-surface"
          >
            {l.label}
          </Link>
        ))}
      </nav>
      <div className="grid gap-3 border-t border-ink/10 px-5 py-5">
        <ButtonLink to="/vendors" variant="primary" size="lg" data-cta={cta.drawerStartSelling} onClick={onClose} fullWidth>
          Start selling on Qloqal
        </ButtonLink>
        <ButtonLink to="/customers" variant="secondary" size="md" data-cta={cta.drawerGetApp} onClick={onClose} fullWidth>
          Get the customer app
        </ButtonLink>
      </div>
    </div>
  );
}
