import { Link } from "@tanstack/react-router";
import { Globe, Share2, MessagesSquare } from "lucide-react";
import { Logo } from "@/components/primitives/Logo";

const productLinks = [
  { label: "Features", href: "#" },
  { label: "Pricing", href: "/pricing" },
  { label: "Changelog", href: "#" },
];

const solutionsLinks = [
  { label: "Retail", href: "/solutions" },
  { label: "Health", href: "/solutions" },
  { label: "Services", href: "/solutions" },
];

const developersLinks = [
  { label: "API Docs", href: "#" },
  { label: "SDKs", href: "#" },
  { label: "Security", href: "#" },
];

const legalLinks = [
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-surface-container-lowest w-full border-t border-outline-variant/20">
      <div className="mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-app px-gutter py-10">
        <div className="col-span-2">
          <Logo className="mb-4" />
          <p className="text-body-sm text-on-surface-variant mb-10">
            © {new Date().getFullYear()} Qloqal Inc. Hyperlocal commerce perfected.
          </p>
          <div className="flex gap-4 text-on-surface-variant">
            <a href="#" aria-label="Website" className="hover:text-primary transition-colors">
              <Globe size={20} />
            </a>
            <a href="#" aria-label="Share" className="hover:text-primary transition-colors">
              <Share2 size={20} />
            </a>
            <a href="#" aria-label="Community" className="hover:text-primary transition-colors">
              <MessagesSquare size={20} />
            </a>
          </div>
        </div>

        <FooterColumn title="Product" links={productLinks} />
        <FooterColumn title="Solutions" links={solutionsLinks} />
        <FooterColumn title="Developers" links={developersLinks} />
        <FooterColumn title="Legal" links={legalLinks} />
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-label-caps uppercase text-primary mb-2">{title}</p>
      {links.map((link) => {
        const isInternal = link.href.startsWith("/");
        return isInternal ? (
          <Link
            key={link.label}
            to={link.href as "/pricing" | "/solutions"}
            className="text-on-surface-variant hover:text-on-surface transition-colors text-body-sm"
          >
            {link.label}
          </Link>
        ) : (
          <a
            key={link.label}
            href={link.href}
            className="text-on-surface-variant hover:text-on-surface transition-colors text-body-sm"
          >
            {link.label}
          </a>
        );
      })}
    </div>
  );
}
