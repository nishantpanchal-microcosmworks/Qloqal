import { BentoTile } from "@/components/ui/BentoTile";
import { Stamp } from "@/components/ui/Stamp";

export function QuoteTile() {
  return (
    <BentoTile tone="moss" span="lg:col-span-6" className="flex flex-col justify-between gap-6">
      <Stamp label="loved · quietly" sub="by 5,200+ shops" tone="ink" rotate="r" className="self-start border-[var(--color-on-secondary)] text-[var(--color-on-secondary)]" />
      <blockquote className="mt-6">
        <p className="font-display text-2xl lg:text-[28px] leading-snug">
          “It feels like the shop hired{" "}
          <span className="ink-italic text-[var(--color-mustard)]">a quiet new assistant</span>{" "}
          who never sleeps and never argues about the music.”
        </p>
        <footer className="mt-5 text-sm text-[var(--color-on-secondary)]/80">
          Marta R. — Loaf & Linen Bakery, Lisbon
        </footer>
      </blockquote>
    </BentoTile>
  );
}
