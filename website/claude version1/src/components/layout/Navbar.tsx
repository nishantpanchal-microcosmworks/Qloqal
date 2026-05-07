import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Logo } from '@/components/ui/Logo';
import { LinkButton } from '@/components/ui/Button';

const links = [
  { to: '/customers', label: 'For Shoppers' },
  { to: '/vendors', label: 'For Kiranas' },
  { to: '/how-it-works', label: 'How It Works' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/about', label: 'About' },
  { to: '/faq', label: 'FAQ' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-40 w-full backdrop-blur transition-all',
          scrolled ? 'bg-white/85 border-b border-ink-300/40 shadow-soft' : 'bg-white/70',
        )}
      >
        <div className="container-base flex h-16 items-center justify-between md:h-20">
          <Link to="/" aria-label="Qloqal home" className="flex items-center">
            <Logo />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  cn(
                    'rounded-lg px-3 py-2 text-sm font-medium text-ink-700 transition-colors hover:text-brand-600',
                    isActive && 'text-brand-600',
                  )
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:block">
            <LinkButton to="/contact" variant="primary" size="sm">
              Contact
            </LinkButton>
          </div>

          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-btn text-ink-900 hover:bg-ink-100 lg:hidden"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={cn(
          'fixed inset-0 z-50 lg:hidden',
          open ? 'pointer-events-auto' : 'pointer-events-none',
        )}
        aria-hidden={!open}
      >
        <div
          className={cn(
            'absolute inset-0 bg-ink-900/40 transition-opacity',
            open ? 'opacity-100' : 'opacity-0',
          )}
          onClick={() => setOpen(false)}
        />
        <aside
          className={cn(
            'absolute right-0 top-0 h-full w-[88%] max-w-sm bg-white shadow-2xl transition-transform',
            open ? 'translate-x-0' : 'translate-x-full',
          )}
        >
          <div className="flex h-16 items-center justify-between border-b border-ink-300/60 px-6">
            <Logo />
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-btn text-ink-900 hover:bg-ink-100"
            >
              <X size={24} />
            </button>
          </div>
          <nav className="flex flex-col gap-1 p-4" aria-label="Mobile">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  cn(
                    'rounded-btn px-4 py-3 text-base font-medium text-ink-900 hover:bg-ink-100',
                    isActive && 'bg-brand-50 text-brand-700',
                  )
                }
              >
                {l.label}
              </NavLink>
            ))}
            <div className="mt-4 px-2">
              <LinkButton to="/contact" variant="primary" size="lg" fullWidth>
                Contact
              </LinkButton>
            </div>
          </nav>
        </aside>
      </div>
    </>
  );
}
