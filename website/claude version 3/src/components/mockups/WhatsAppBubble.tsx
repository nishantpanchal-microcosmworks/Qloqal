import { Check, CheckCheck } from "lucide-react";
import { cn } from "@/lib/cn";

interface Bubble {
  side: "in" | "out";
  text: string;
  time?: string;
  read?: boolean;
}

const SAMPLE: Bubble[] = [
  { side: "in", text: "Hi! Do you still have the rye sourdough?", time: "08:42" },
  { side: "out", text: "Yes — last two on the shelf. Want me to set one aside?", time: "08:42", read: true },
  { side: "in", text: "Yes please. I’ll pick up at 10.", time: "08:43" },
  { side: "out", text: "Booked. Pay now or at the counter?", time: "08:43", read: true },
];

export function WhatsAppBubble({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "rounded-2xl bg-[var(--color-surface-container-lowest)] border border-[var(--color-outline-variant)] overflow-hidden flex flex-col",
        "shadow-[0_1px_0_rgba(31,26,19,0.05),0_8px_22px_rgba(31,26,19,0.06)]",
        className,
      )}
    >
      <div className="flex items-center gap-3 px-4 py-3 bg-[var(--color-secondary)] text-[var(--color-on-secondary)]">
        <div className="h-8 w-8 rounded-full bg-[var(--color-on-secondary)]/20 grid place-items-center font-display italic font-medium">L</div>
        <div className="leading-tight">
          <div className="text-sm font-medium">Loaf & Linen Bakery</div>
          <div className="text-[11px] opacity-80">online · typing…</div>
        </div>
      </div>

      <div className="flex-1 p-4 space-y-2.5 bg-[var(--color-surface-container-low)]">
        {SAMPLE.map((b, i) => (
          <div
            key={i}
            className={cn(
              "max-w-[78%] rounded-2xl px-3 py-2 text-[13.5px] leading-snug shadow-sm",
              b.side === "in"
                ? "bg-[var(--color-surface-container-lowest)] mr-auto rounded-bl-sm"
                : "bg-[#dcf8c6] ml-auto rounded-br-sm",
            )}
          >
            <span>{b.text}</span>
            <span className="ml-2 inline-flex items-center gap-1 text-[10px] text-[var(--color-on-surface-variant)] align-baseline">
              {b.time}
              {b.side === "out" ? (
                b.read ? (
                  <CheckCheck size={12} className="text-[var(--color-secondary)]" />
                ) : (
                  <Check size={12} />
                )
              ) : null}
            </span>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 px-3 py-2 bg-[var(--color-surface-container-lowest)] border-t border-[var(--color-outline-variant)]">
        <div className="flex-1 h-9 rounded-full bg-[var(--color-surface-container)] px-3 grid place-items-start text-[12px] text-[var(--color-on-surface-variant)] content-center flex items-center">
          Type a message…
        </div>
        <div className="h-9 w-9 rounded-full grid place-items-center bg-[var(--color-whatsapp)] text-white text-sm">
          ➤
        </div>
      </div>
    </div>
  );
}
