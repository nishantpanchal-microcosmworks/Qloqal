import { Link } from 'react-router-dom';
import { Twitter, Instagram, Linkedin } from 'lucide-react';
import Container from '../ui/Container';
import Logo from '../ui/Logo';
import { ButtonLink } from '../ui/Button';
import { cta } from '../../lib/analytics';

const linkGroups = [
  {
    title: 'Product',
    links: [
      { to: '/vendors', label: 'For Vendors' },
      { to: '/customers', label: 'For Customers' },
      { to: '/how-it-works', label: 'How it works' },
      { to: '/pricing', label: 'Pricing' },
    ],
  },
  {
    title: 'Company',
    links: [
      { to: '/about', label: 'About' },
      { to: '/faq', label: 'FAQ' },
      { to: '/contact', label: 'Contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { to: '/privacy', label: 'Privacy' },
      { to: '/terms', label: 'Terms' },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-ink/10 bg-surface pt-16 pb-10">
      <Container>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 max-w-sm text-sm text-muted">
              The easiest way for any small business to start selling online — run from the WhatsApp you already use.
            </p>
            <div className="mt-5 flex gap-3">
              <ButtonLink to="/vendors" variant="primary" size="sm" data-cta={cta.footerStartSelling}>
                Start selling
              </ButtonLink>
              <ButtonLink to="/customers" variant="secondary" size="sm" data-cta={cta.footerGetApp}>
                Get the app
              </ButtonLink>
            </div>
          </div>
          {linkGroups.map((g) => (
            <div key={g.title}>
              <h4 className="text-sm font-bold uppercase tracking-wider text-ink">{g.title}</h4>
              <ul className="mt-4 grid gap-2">
                {g.links.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="text-sm text-muted hover:text-brand-blue">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-ink/10 pt-6 sm:flex-row sm:items-center">
          <p className="text-sm text-muted">© {year} Qloqal. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-muted hover:text-brand-blue">
              <Twitter size={18} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-muted hover:text-brand-blue">
              <Instagram size={18} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted hover:text-brand-blue">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
