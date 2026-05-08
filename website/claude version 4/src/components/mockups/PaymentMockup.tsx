import { cn } from "@/lib/cn";

type Props = {
  className?: string;
};

export function PaymentMockup({ className }: Props) {
  return (
    <div
      className={cn(
        "flex w-full flex-col bg-[var(--color-paper-3)] text-[var(--color-ink)]",
        className,
      )}
    >
      <div className="flex items-center justify-between border-b-2 border-ink bg-[var(--color-paper-2)] px-3 py-2 text-[10px] font-bold uppercase tracking-widest">
        <span>RECEIPT · #A0421</span>
        <span>PAID</span>
      </div>
      <div className="grid grid-cols-2 gap-y-1 border-b-2 border-dashed border-ink px-3 py-2 text-[12px]">
        <span>Sourdough loaf × 1</span>
        <span className="text-right tabular-nums">$5.00</span>
        <span>Almond croissant × 2</span>
        <span className="text-right tabular-nums">$6.40</span>
        <span>Black coffee × 1</span>
        <span className="text-right tabular-nums">$3.50</span>
      </div>
      <div className="grid grid-cols-2 gap-y-1 px-3 py-2 text-[12px]">
        <span className="text-[var(--color-ink-mute)]">Subtotal</span>
        <span className="text-right tabular-nums">$14.90</span>
        <span className="text-[var(--color-ink-mute)]">Service</span>
        <span className="text-right tabular-nums">$0.75</span>
        <span className="font-bold uppercase">Total</span>
        <span className="text-right text-[14px] font-bold tabular-nums">
          $15.65
        </span>
      </div>
      <div className="flex flex-wrap gap-1 border-t-2 border-ink p-3 text-[10px] font-bold uppercase tracking-widest">
        {["card", "wallet", "bank xfer", "cash on pickup"].map((m) => (
          <span
            key={m}
            className="border-2 border-ink bg-[var(--color-paper-2)] px-2 py-1"
          >
            {m}
          </span>
        ))}
      </div>
      <div className="flex items-center justify-between border-t-2 border-ink bg-[var(--color-signal-green)] px-3 py-2 text-[11px] font-bold uppercase tracking-widest">
        <span>Payout T+1</span>
        <span>auto · settle</span>
      </div>
    </div>
  );
}

export default PaymentMockup;
