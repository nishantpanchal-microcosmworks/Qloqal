import { BentoTile } from "@/components/ui/BentoTile";
import { WhatsAppBubble } from "@/components/mockups/WhatsAppBubble";

export function ChatTile() {
  return (
    <BentoTile tone="warm" span="lg:col-span-5" className="flex flex-col gap-5">
      <div>
        <span className="kicker">in the chat</span>
        <h2 className="font-display text-2xl lg:text-3xl mt-2 leading-snug">
          A real conversation,{" "}
          <span className="ink-italic text-[var(--color-primary)]">not a checkout flow.</span>
        </h2>
      </div>
      <WhatsAppBubble className="flex-1" />
    </BentoTile>
  );
}
