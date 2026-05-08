import { Link } from "react-router-dom";
import { FOOTER_NAV } from "@/data/nav";
import { Logo } from "@/components/ui/Logo";
import { ScribbleUnderline } from "@/components/decor/ScribbleUnderline";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-[var(--color-outline-variant)] bg-[var(--color-surface-container-low)]">
      <div className="container-page py-14 grid gap-12 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div>
          <Logo />
          <p className="mt-4 max-w-sm text-sm text-[var(--color-on-surface-variant)] leading-relaxed">
            A quieter way to sell online. We help small shops keep selling in the
            chat their customers already love, without losing the warmth that
            made them shop there in the first place.
          </p>
          <div className="mt-6 inline-flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-[var(--color-on-surface-variant)]">
            <span>est. 2024</span>
            <span aria-hidden>·</span>
            <span>independent</span>
            <span aria-hidden>·</span>
            <span>employee-owned</span>
          </div>
        </div>

        {FOOTER_NAV.map((col) => (
          <div key={col.heading}>
            <h4 className="kicker mb-4">{col.heading}</h4>
            <ul className="flex flex-col gap-2">
              {col.items.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-[15px] text-[var(--color-on-surface)] hover:text-[var(--color-primary)] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-[var(--color-outline-variant)]">
        <div className="container-page py-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 text-xs text-[var(--color-on-surface-variant)]">
          <p>
            © {new Date().getFullYear()} Qloqal. Made with paper, ink and a lot
            of patience.
          </p>
          <div className="flex items-center gap-2">
            <span className="font-display italic">a small project,</span>
            <span className="inline-block w-16">
              <ScribbleUnderline color="var(--color-mustard)" />
            </span>
            <span className="font-display italic">made carefully.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
