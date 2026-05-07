import { Check, CheckCheck } from "lucide-react";
import type { ReactNode } from "react";

type Bubble = {
  from: "shop" | "qloqal";
  content: ReactNode;
  time: string;
  read?: boolean;
};

type Props = {
  title?: string;
  bubbles: Bubble[];
  showButtons?: "accept-reject" | "mark-ready" | null;
};

export function WhatsAppMockup({ title = "Qloqal Orders", bubbles, showButtons = null }: Props) {
  return (
    <div className="rounded-3xl shadow-soft overflow-hidden border border-border bg-white max-w-sm w-full mx-auto">
      <div className="bg-brand-blue text-white px-4 py-3 flex items-center gap-3">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-green text-ink font-extrabold">Q</span>
        <div className="leading-tight">
          <div className="font-semibold text-sm">{title}</div>
          <div className="text-[11px] text-white/70">online · via WhatsApp</div>
        </div>
      </div>
      <div className="bg-chat-bg px-3 py-4 space-y-2 min-h-[280px]">
        {bubbles.map((b, i) => (
          <div key={i} className={b.from === "qloqal" ? "flex justify-start" : "flex justify-end"}>
            <div className={[
              "max-w-[85%] rounded-2xl px-3 py-2 text-sm shadow-card",
              b.from === "qloqal" ? "bg-chat-incoming text-ink rounded-tl-sm" : "bg-chat-outgoing text-ink rounded-tr-sm",
            ].join(" ")}>
              <div>{b.content}</div>
              <div className="mt-1 flex items-center justify-end gap-1 text-[10px] text-muted-ink">
                <span>{b.time}</span>
                {b.from === "shop" && (b.read
                  ? <CheckCheck className="h-3 w-3 text-brand-blue" />
                  : <Check className="h-3 w-3" />)}
              </div>
            </div>
          </div>
        ))}
        {showButtons === "accept-reject" && (
          <div className="flex justify-start">
            <div className="flex gap-2 mt-1">
              <button className="bg-brand-green text-ink font-semibold text-sm rounded-xl px-4 py-2 shadow-card">Accept</button>
              <button className="bg-white text-ink/70 border border-border font-medium text-sm rounded-xl px-4 py-2">Reject</button>
            </div>
          </div>
        )}
        {showButtons === "mark-ready" && (
          <div className="flex justify-start">
            <button className="bg-brand-blue text-white font-semibold text-sm rounded-xl px-4 py-2 shadow-card mt-1">Mark Ready</button>
          </div>
        )}
      </div>
    </div>
  );
}

export function OrderCard() {
  return (
    <div className="rounded-xl bg-brand-green-soft border border-brand-green/30 p-3">
      <div className="text-xs font-semibold text-brand-blue-dark">NEW ORDER · #4821</div>
      <div className="mt-1 font-semibold">Aisha M. · 1.2 km away</div>
      <ul className="mt-2 text-xs space-y-0.5 text-ink/80">
        <li>2 × Sourdough loaf</li>
        <li>1 × Almond croissant</li>
        <li>1 × Oat milk (1L)</li>
      </ul>
      <div className="mt-2 pt-2 border-t border-brand-green/30 flex justify-between text-sm font-semibold">
        <span>Total</span><span>$18.40</span>
      </div>
    </div>
  );
}
