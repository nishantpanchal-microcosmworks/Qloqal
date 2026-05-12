import { useState, type ReactNode } from "react";
import { Check, CheckCheck, MapPin, Star, CreditCard } from "lucide-react";

type Side = "shop" | "customer";
type Step = { id: string; label: string; visual: ReactNode };

const shopSteps: Step[] = [
  { id: "received", label: "Order received", visual: <WaScreen bubbles={[{ from: "qloqal", content: <OrderCard />, time: "9:42" }]} /> },
  { id: "accept", label: "Tap Accept", visual: <WaScreen bubbles={[{ from: "qloqal", content: "New order — 3 items, $18.40", time: "9:42" }]} action="accept-reject" /> },
  { id: "ready", label: "Mark Ready", visual: <WaScreen bubbles={[{ from: "shop", content: "Accepted ✓", time: "9:43", read: true }, { from: "qloqal", content: "Customer notified. Tap below when ready.", time: "9:43" }]} action="mark-ready" /> },
  { id: "settled", label: "Get paid", visual: <WaScreen bubbles={[{ from: "shop", content: "Marked ready ✓", time: "9:55", read: true }, { from: "qloqal", content: "Order delivered. $17.48 settling to your account.", time: "10:08" }]} /> },
];

const customerSteps: Step[] = [
  { id: "browse", label: "Browse nearby", visual: <AppScreen eyebrow="Qloqal app" title="Within 1.5 km of you"><NearbyList /></AppScreen> },
  { id: "shop", label: "Pick a shop", visual: <AppScreen eyebrow="Sunrise Bakery · 0.3 km" title="Fresh today"><ShopMenu /></AppScreen> },
  { id: "pay", label: "Pay in app", visual: <AppScreen eyebrow="Checkout" title="Pay $18.40"><PaymentList /></AppScreen> },
  { id: "track", label: "Track + receive", visual: <AppScreen eyebrow="Order #4821" title="On its way"><TrackingList /></AppScreen> },
];

type Props = { initialSide?: Side; className?: string };

export function FlowDemo({ initialSide = "shop", className = "" }: Props) {
  const [side, setSide] = useState<Side>(initialSide);
  const [stepIdx, setStepIdx] = useState(0);
  const steps = side === "shop" ? shopSteps : customerSteps;
  const step = steps[Math.min(stepIdx, steps.length - 1)];

  return (
    <div className={`rounded-xl border border-border bg-white overflow-hidden ${className}`}>
      <div className="flex items-center justify-between border-b border-border p-3 gap-3">
        <div className="inline-flex rounded-md border border-border overflow-hidden text-xs">
          {(["shop", "customer"] as const).map((s) => (
            <button
              key={s}
              onClick={() => { setSide(s); setStepIdx(0); }}
              className={`px-3 py-1.5 font-semibold transition ${side === s ? "bg-ink text-white" : "bg-white text-muted-ink hover:text-ink"}`}
            >
              {s === "shop" ? "Shop side" : "Customer side"}
            </button>
          ))}
        </div>
        <div className="text-[11px] uppercase tracking-wider text-muted-ink font-semibold">
          Step {stepIdx + 1} of {steps.length}
        </div>
      </div>

      <div className="grid md:grid-cols-[1fr_minmax(280px,360px)] gap-0">
        <ol className="p-5 md:p-6 space-y-2 border-b md:border-b-0 md:border-r border-border bg-cream">
          {steps.map((s, i) => {
            const active = i === stepIdx;
            return (
              <li key={s.id}>
                <button
                  onClick={() => setStepIdx(i)}
                  className={`w-full text-left flex items-center gap-3 px-3 py-2.5 rounded-md transition ${active ? "bg-white border border-border shadow-sm" : "hover:bg-white/60"}`}
                >
                  <span className={`num-marker text-lg w-7 tabular-nums ${active ? "" : "opacity-50"}`}>{String(i + 1).padStart(2, "0")}</span>
                  <span className={`font-display font-semibold ${active ? "text-ink" : "text-muted-ink"}`}>{s.label}</span>
                </button>
              </li>
            );
          })}
        </ol>
        <div className="p-5 md:p-6 flex items-center justify-center bg-white">
          {step.visual}
        </div>
      </div>
    </div>
  );
}

// — small reusable bits —

type Bubble = { from: "shop" | "qloqal"; content: ReactNode; time: string; read?: boolean };

function WaScreen({ bubbles, action }: { bubbles: Bubble[]; action?: "accept-reject" | "mark-ready" }) {
  return (
    <div className="rounded-lg shadow-soft overflow-hidden border border-border bg-white w-full max-w-[300px]">
      <div className="bg-brand-green-dark text-white px-3 py-2.5 flex items-center gap-2">
        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand-green text-ink font-extrabold text-sm">Q</span>
        <div className="leading-tight">
          <div className="font-semibold text-sm">Your Shop</div>
          <div className="text-[10px] text-white/70">via WhatsApp</div>
        </div>
      </div>
      <div className="bg-chat-bg px-2 py-3 space-y-2 min-h-[220px]">
        {bubbles.map((b, i) => (
          <div key={i} className={b.from === "qloqal" ? "flex justify-start" : "flex justify-end"}>
            <div className={[
              "max-w-[85%] rounded-md px-3 py-2 text-xs shadow-card",
              b.from === "qloqal" ? "bg-chat-incoming text-ink" : "bg-chat-outgoing text-ink",
            ].join(" ")}>
              <div>{b.content}</div>
              <div className="mt-1 flex items-center justify-end gap-1 text-[9px] text-muted-ink">
                <span>{b.time}</span>
                {b.from === "shop" && (b.read ? <CheckCheck className="h-2.5 w-2.5 text-brand-blue" /> : <Check className="h-2.5 w-2.5" />)}
              </div>
            </div>
          </div>
        ))}
        {action === "accept-reject" && (
          <div className="flex gap-2 mt-1">
            <button className="bg-brand-green text-ink font-semibold text-xs rounded-md px-3 py-1.5">Accept</button>
            <button className="bg-white text-ink/70 border border-border font-medium text-xs rounded-md px-3 py-1.5">Reject</button>
          </div>
        )}
        {action === "mark-ready" && (
          <button className="bg-brand-blue text-white font-semibold text-xs rounded-md px-3 py-1.5 mt-1">Mark Ready</button>
        )}
      </div>
    </div>
  );
}

function AppScreen({ eyebrow, title, children }: { eyebrow: string; title: string; children: ReactNode }) {
  return (
    <div className="rounded-lg shadow-soft overflow-hidden border border-border bg-white w-full max-w-[300px]">
      <div className="bg-brand-blue-dark text-white p-3">
        <div className="text-[10px] uppercase tracking-wide opacity-70">{eyebrow}</div>
        <div className="font-display font-semibold text-sm mt-0.5">{title}</div>
      </div>
      <div className="p-2.5 bg-surface min-h-[220px] text-xs">{children}</div>
    </div>
  );
}

function OrderCard() {
  return (
    <div className="rounded-md bg-brand-green-soft border border-brand-green/30 p-2.5">
      <div className="text-[10px] font-semibold text-brand-green-dark">NEW ORDER · #4821</div>
      <div className="mt-0.5 font-semibold text-xs">Aisha M. · 1.2 km</div>
      <ul className="mt-1 text-[10px] space-y-0.5 text-ink/80">
        <li>2 × Sourdough loaf</li>
        <li>1 × Almond croissant</li>
        <li>1 × Oat milk (1L)</li>
      </ul>
      <div className="mt-1.5 pt-1.5 border-t border-brand-green/30 flex justify-between text-xs font-semibold">
        <span>Total</span><span>$18.40</span>
      </div>
    </div>
  );
}

function NearbyList() {
  return (
    <div className="space-y-1.5">
      <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-ink flex items-center gap-1">
        <MapPin className="h-3 w-3" /> Within 1.5 km
      </div>
      {["Sunrise Bakery", "Green Leaf Grocery", "Ada's Pharmacy", "Park St. Florist"].map((s, i) => (
        <div key={s} className="bg-white border border-border rounded-md px-2 py-1.5 flex items-center justify-between">
          <span className="font-semibold text-ink">{s}</span>
          <span className="text-[10px] bg-brand-green text-ink rounded-full px-1.5 py-0.5 font-semibold">{(0.3 + i * 0.4).toFixed(1)} km</span>
        </div>
      ))}
    </div>
  );
}

function ShopMenu() {
  return (
    <div className="space-y-1.5">
      {[
        { n: "Sourdough loaf", p: "$5.40", qty: 2 },
        { n: "Almond croissant", p: "$3.80", qty: 1 },
        { n: "Oat milk (1L)", p: "$4.20", qty: 1 },
      ].map(i => (
        <div key={i.n} className="bg-white border border-border rounded-md px-2 py-1.5 flex items-center justify-between">
          <div>
            <div className="font-semibold text-ink">{i.n}</div>
            <div className="text-[10px] text-muted-ink">{i.p}</div>
          </div>
          <div className="text-[10px] bg-brand-blue-soft text-brand-blue rounded-full px-1.5 py-0.5 font-semibold">× {i.qty}</div>
        </div>
      ))}
      <button className="w-full bg-brand-green text-ink font-semibold rounded-md py-1.5 mt-1 text-xs">Place order · $18.40</button>
    </div>
  );
}

function PaymentList() {
  return (
    <div className="space-y-1.5">
      {[
        { l: "Card ending 4827", sub: "Visa", active: true },
        { l: "Apple Pay", sub: "Touch ID", active: false },
        { l: "Bank transfer", sub: "Instant", active: false },
      ].map(p => (
        <div key={p.l} className={["rounded-md p-2 flex items-center justify-between border", p.active ? "border-brand-blue bg-brand-blue-soft" : "border-border bg-white"].join(" ")}>
          <div>
            <div className="font-semibold text-ink">{p.l}</div>
            <div className="text-[10px] text-muted-ink">{p.sub}</div>
          </div>
          <span className={["h-3.5 w-3.5 rounded-full border-2 inline-flex items-center justify-center", p.active ? "border-brand-blue bg-brand-blue" : "border-border"].join(" ")}>
            {p.active && <span className="h-1 w-1 rounded-full bg-white" />}
          </span>
        </div>
      ))}
      <button className="w-full bg-brand-green text-ink font-semibold rounded-md py-1.5 mt-1 text-xs flex items-center justify-center gap-1.5">
        <CreditCard className="h-3 w-3" /> Pay $18.40
      </button>
    </div>
  );
}

function TrackingList() {
  return (
    <div>
      <ul className="space-y-2.5">
        {[
          { l: "Placed", time: "9:41", state: "done" as const },
          { l: "Accepted", time: "9:43", state: "done" as const },
          { l: "Ready", time: "9:58", state: "done" as const },
          { l: "On the way", time: "now", state: "active" as const },
        ].map(s => (
          <li key={s.l} className="flex items-center gap-2.5">
            <span className={[
              "h-5 w-5 rounded-full inline-flex items-center justify-center shrink-0",
              s.state === "done" ? "bg-brand-green text-ink" : "bg-brand-blue text-white",
            ].join(" ")}>
              {s.state === "done" ? <Check className="h-3 w-3" /> : <span className="h-1.5 w-1.5 rounded-full bg-white" />}
            </span>
            <div className="flex-1">
              <div className={["font-semibold", s.state === "active" ? "text-brand-blue" : "text-ink"].join(" ")}>{s.l}</div>
            </div>
            <span className="text-[10px] text-muted-ink">{s.time}</span>
          </li>
        ))}
      </ul>
      <div className="mt-3 pt-2 border-t border-border flex items-center justify-between">
        <span className="inline-flex items-center gap-1 text-muted-ink"><Star className="h-3 w-3 fill-brand-green text-brand-green" /> 4.9</span>
        <span className="font-semibold text-ink">$18.40 paid</span>
      </div>
    </div>
  );
}
