import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'lucide-react';
import Container from '../ui/Container';
import Logo from '../ui/Logo';
import { ButtonLink } from '../ui/Button';
import { cta } from '../../lib/analytics';
import MobileDrawer from './MobileDrawer';

const navLinks = [
  { to: '/vendors', label: 'For Vendors' },
  { to: '/customers', label: 'For Customers' },
  { to: '/how-it-works', label: 'How it works' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-ink/5 bg-white/90 backdrop-blur">
      <Container>
        <div className="flex items-center justify-between py-3">
          <Logo />

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${
                    isActive ? 'text-brand-blue' : 'text-ink hover:text-brand-blue'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-2">
            <ButtonLink to="/customers" variant="secondary" size="sm" data-cta={cta.navGetApp}>
              Get the app
            </ButtonLink>
            <ButtonLink to="/vendors" variant="primary" size="sm" data-cta={cta.navStartSelling}>
              Start selling
            </ButtonLink>
          </div>

          <button
            type="button"
            className="lg:hidden grid h-10 w-10 place-items-center rounded-lg hover:bg-surface"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
          >
            <Menu size={22} />
          </button>
        </div>
      </Container>
      <MobileDrawer open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
