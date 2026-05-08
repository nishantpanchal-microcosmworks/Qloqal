import { Link } from "react-router-dom";
import { Logo } from "@/components/ui/Logo";
import { FOOTER_COLUMNS } from "@/data/nav";
import { NewsletterForm } from "@/components/forms/NewsletterForm";

export function Footer() {
  return (
    <footer className="bg-inverse-surface text-inverse-on-surface">
      <div className="container-page py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Logo static className="mb-4" />
            <p className="max-w-sm text-sm leading-relaxed text-inverse-on-surface/80">
              Empowering local merchants through a sophisticated hyperlocal
              network. High-performance SaaS for neighborhood vendors.
            </p>
            <div className="mt-6 max-w-sm">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-inverse-on-surface/70">
                Get product updates
              </p>
              <NewsletterForm />
            </div>
          </div>

          {FOOTER_COLUMNS.map((col) => (
            <div key={col.heading}>
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-inverse-on-surface/70">
                {col.heading}
              </h4>
              <ul className="flex flex-col gap-3 text-sm">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-inverse-on-surface/90 transition-colors hover:text-primary-container"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-inverse-on-surface/10 pt-8 text-xs text-inverse-on-surface/60 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Qloqal. All rights reserved.</p>
          <p>Built for shops that already chat.</p>
        </div>
      </div>
    </footer>
  );
}
