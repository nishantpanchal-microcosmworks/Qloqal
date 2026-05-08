import { Button } from "@/components/ui/Button";
import { BentoTile } from "@/components/ui/BentoTile";
import { ScribbleUnderline } from "@/components/decor/ScribbleUnderline";
import { StampCircle } from "@/components/decor/StampCircle";

export function HeroTile() {
  return (
    <BentoTile tone="paper" span="lg:col-span-8 lg:min-h-[480px]" className="flex flex-col justify-between gap-8 overflow-hidden">
      <div className="absolute -top-6 -right-6 hidden lg:block">
        <StampCircle text="EST · 2024 · MADE CAREFULLY · " />
      </div>

      <div>
        <span className="kicker">a quieter way to sell online</span>
        <h1 className="display-serif mt-5 text-4xl sm:text-5xl lg:text-6xl xl:text-[68px] leading-[1.04] tracking-tight">
          Run your shop in the chat your{" "}
          <span className="ink-italic text-[var(--color-primary)] relative inline-block">
            customers already use.
            <ScribbleUnderline className="absolute left-0 -bottom-2 w-full h-3" />
          </span>
        </h1>
        <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-[var(--color-on-surface-variant)]">
          Qloqal turns a humble WhatsApp number into a small, well-run shop —
          catalog, payments, polite auto-replies, the lot — without giving up
          the warmth that makes regulars regular.
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <Button to="/vendors" variant="primary" size="lg">
          Open my shop
        </Button>
        <Button to="/how-it-works" variant="secondary" size="lg">
          See it on a phone
        </Button>
        <span className="text-xs text-[var(--color-on-surface-variant)] font-mono">
          · no card, no contract
        </span>
      </div>
    </BentoTile>
  );
}
