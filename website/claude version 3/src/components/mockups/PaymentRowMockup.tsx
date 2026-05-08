import { cn } from "@/lib/cn";
import { CreditCard, Wallet, Banknote, Receipt } from "lucide-react";

const METHODS = [
  { icon: CreditCard, label: "Card", sub: "Visa · Mastercard · Amex" },
  { icon: Wallet, label: "Wallets", sub: "Apple Pay · Google Pay" },
  { icon: Banknote, label: "Bank pay-link", sub: "Direct to your account" },
  { icon: Receipt, label: "Cash on collect", sub: "Counter or doorstep" },
];

export function PaymentRowMockup({ className }: { className?: string }) {
  return (
    <div className={cn("paper-card p-5", className)}>
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="kicker">how they pay</div>
          <h3 className="font-display text-lg leading-tight mt-0.5">All polite, all in chat.</h3>
        </div>
      </div>
      <ul className="grid grid-cols-2 gap-2.5">
        {METHODS.map(({ icon: Icon, label, sub }) => (
          <li
            key={label}
            className="rounded-xl border border-[var(--color-outline-variant)] bg-[var(--color-surface-container-low)] p-3 flex items-start gap-3"
          >
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-[var(--color-surface-container-lowest)] text-[var(--color-primary)] border border-[var(--color-outline-variant)]">
              <Icon size={16} />
            </span>
            <div>
              <div className="text-[13px] font-medium leading-tight">{label}</div>
              <div className="text-[11px] text-[var(--color-on-surface-variant)] mt-0.5">{sub}</div>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-4 flex items-center justify-between text-[12px] text-[var(--color-on-surface-variant)]">
        <span className="font-mono">total · order #20847</span>
        <span className="font-mono text-[var(--color-on-surface)] font-medium">$11.50 · settled</span>
      </div>
    </div>
  );
}
