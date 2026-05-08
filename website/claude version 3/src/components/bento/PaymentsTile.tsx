import { BentoTile } from "@/components/ui/BentoTile";
import { PaymentRowMockup } from "@/components/mockups/PaymentRowMockup";

export function PaymentsTile() {
  return (
    <BentoTile tone="warm" span="lg:col-span-5" className="flex flex-col gap-5">
      <div>
        <span className="kicker">money in, quietly</span>
        <h2 className="font-display text-2xl lg:text-3xl mt-2 leading-snug">
          Pay-links that arrive,{" "}
          <span className="ink-italic text-[var(--color-primary)]">money that lands.</span>
        </h2>
      </div>
      <PaymentRowMockup />
    </BentoTile>
  );
}
