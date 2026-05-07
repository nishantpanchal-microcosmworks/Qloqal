import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Logo } from '@/components/ui/Logo';

const productLinks = [
  { to: '/customers', label: 'For Shoppers' },
  { to: '/vendors', label: 'For Kiranas' },
  { to: '/how-it-works', label: 'How It Works' },
  { to: '/pricing', label: 'Pricing' },
];

const companyLinks = [
  { to: '/about', label: 'About' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
];

const legalLinks = [
  { to: '/privacy', label: 'Privacy Policy' },
  { to: '/terms', label: 'Terms of Service' },
];

export function Footer() {
  return (
    <footer className="border-t border-ink-300/60 bg-ink-50">
      <Container className="py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-ink-700">
              The marketplace for kirana shops — powered by WhatsApp. Every kirana, online. Without an app.
            </p>
            <a
              href="mailto:devcloudteam2025@gmail.com"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-brand-600 hover:text-brand-700"
            >
              <Mail size={16} />
              devcloudteam2025@gmail.com
            </a>
          </div>

          <FooterCol title="Product" links={productLinks} />
          <FooterCol title="Company" links={companyLinks} />
          <FooterCol title="Legal" links={legalLinks} />
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-ink-300/60 pt-6 text-sm text-ink-500 md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} Qloqal. All rights reserved.</span>
          <span>Made with care · Indian-rooted, globally available.</span>
        </div>
      </Container>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: Array<{ to: string; label: string }>;
}) {
  return (
    <div>
      <h4 className="mb-3 font-display text-sm font-bold uppercase tracking-wider text-ink-900">
        {title}
      </h4>
      <ul className="flex flex-col gap-2.5">
        {links.map((l) => (
          <li key={l.to}>
            <Link
              to={l.to}
              className="text-sm text-ink-700 hover:text-brand-600"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
