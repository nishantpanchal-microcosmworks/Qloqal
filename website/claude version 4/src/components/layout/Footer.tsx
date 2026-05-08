import { Link } from "react-router-dom";
import {
  FOOTER_PRODUCT,
  FOOTER_COMPANY,
  FOOTER_LEGAL,
} from "@/data/nav";
import Logo from "@/components/ui/Logo";
import AsciiDivider from "@/components/decor/AsciiDivider";
import Marquee from "@/components/decor/Marquee";

const MARQUEE_ITEMS = [
  "RUN YOUR SHOP ON WHATSAPP",
  "NO APP",
  "NO TABLET",
  "NO TRAINING",
  "FREE TO LIST",
  "5% PER DELIVERED ORDER",
  "PAY OUT T+1",
  "BUILT FOR THE COUNTER",
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t-2 border-ink bg-[var(--color-paper)]">
      <Marquee items={MARQUEE_ITEMS} fill="green" />

      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-8 px-4 py-12 md:grid-cols-12 md:px-8">
        <div className="md:col-span-4">
          <Logo size="lg" />
          <p className="mt-3 max-w-[28ch] text-[13px] leading-relaxed text-[var(--color-ink-2)]">
            A vendor operating system that hides inside WhatsApp. If you can
            chat, you can run an online shop.
          </p>
          <div className="mt-4 flex flex-wrap gap-1">
            {["catalog", "chat", "payments", "delivery", "reports"].map(
              (chip) => (
                <span
                  key={chip}
                  className="border-2 border-ink bg-[var(--color-paper-2)] px-2 py-1 text-[10px] font-bold uppercase tracking-widest"
                >
                  {chip}
                </span>
              ),
            )}
          </div>
        </div>

        <FooterCol title="Product" links={FOOTER_PRODUCT} />
        <FooterCol title="Company" links={FOOTER_COMPANY} />
        <FooterCol title="Legal" links={FOOTER_LEGAL} />

        <div className="md:col-span-2">
          <FooterTitle>Colophon</FooterTitle>
          <ul className="mt-2 flex flex-col gap-1 text-[12px]">
            <li>Issue 04 / 2026</li>
            <li>Set in JetBrains Mono</li>
            <li>Printed in pixels</li>
            <li>q*loqal © {year}</li>
          </ul>
        </div>
      </div>

      <AsciiDivider variant="ticks" className="px-4 md:px-8" />

      <div className="mx-auto flex max-w-[1280px] flex-col items-start justify-between gap-2 px-4 py-4 text-[11px] uppercase tracking-widest text-[var(--color-ink-mute)] md:flex-row md:items-center md:px-8">
        <span>FILED UNDER · MARKETPLACE / VENDOR-FIRST / WHATSAPP-NATIVE</span>
        <span>
          <Link to="/contact" className="no-underline hover:underline">
            DM US ↗
          </Link>
        </span>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; to: string }[];
}) {
  return (
    <div className="md:col-span-2">
      <FooterTitle>{title}</FooterTitle>
      <ul className="mt-2 flex flex-col gap-1 text-[13px]">
        {links.map((l) => (
          <li key={l.to}>
            <Link to={l.to} className="no-underline hover:underline">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FooterTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-b-2 border-ink pb-1 text-[10px] font-bold uppercase tracking-[0.2em]">
      {children}
    </div>
  );
}

export default Footer;
