import { Check, CheckCheck } from 'lucide-react';

export type ChatLine =
  | { kind: 'incoming'; text: string; time: string }
  | { kind: 'outgoing'; text: string; time: string; status?: 'sent' | 'read' }
  | { kind: 'order'; orderNo: string; address: string; items: { name: string; qty: string; price: string }[]; total: string; time: string }
  | { kind: 'buttons'; labels: string[]; time: string }
  | { kind: 'system'; text: string };

type Props = {
  shopName: string;
  status?: string;
  lines: ChatLine[];
  className?: string;
};

export default function WhatsAppMockup({ shopName, status = 'online', lines, className = '' }: Props) {
  return (
    <div className={`mx-auto w-full max-w-sm overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-card ${className}`}>
      <div className="flex items-center gap-3 bg-brand-green-soft px-4 py-3">
        <div className="grid h-10 w-10 place-items-center rounded-full bg-brand-green text-ink font-display font-bold">
          {shopName.charAt(0)}
        </div>
        <div className="flex-1 min-w-0">
          <div className="truncate font-semibold text-ink">{shopName}</div>
          <div className="text-xs text-brand-green-dark">{status}</div>
        </div>
      </div>

      <div className="bg-[#F4F1EB] px-3 py-4 grid gap-2">
        {lines.map((l, i) => {
          if (l.kind === 'system') {
            return (
              <div key={i} className="mx-auto rounded-full bg-white/70 px-3 py-1 text-[11px] font-medium text-muted">
                {l.text}
              </div>
            );
          }
          if (l.kind === 'incoming') {
            return (
              <div key={i} className="self-start max-w-[85%] rounded-2xl rounded-tl-sm bg-white px-3 py-2 text-sm text-ink shadow-soft">
                <p>{l.text}</p>
                <span className="mt-1 block text-right text-[10px] text-muted">{l.time}</span>
              </div>
            );
          }
          if (l.kind === 'outgoing') {
            return (
              <div key={i} className="self-end max-w-[85%] rounded-2xl rounded-tr-sm bg-brand-green-soft px-3 py-2 text-sm text-ink shadow-soft">
                <p>{l.text}</p>
                <span className="mt-1 flex items-center justify-end gap-1 text-[10px] text-brand-green-dark">
                  {l.time}
                  {l.status === 'read' ? <CheckCheck size={12} /> : <Check size={12} />}
                </span>
              </div>
            );
          }
          if (l.kind === 'order') {
            return (
              <div key={i} className="self-start max-w-[90%] overflow-hidden rounded-2xl rounded-tl-sm border border-ink/10 bg-white shadow-soft">
                <div className="bg-brand-blue-soft px-3 py-2 text-xs font-bold uppercase tracking-wider text-brand-blue">
                  New order · {l.orderNo}
                </div>
                <div className="px-3 py-2 text-sm text-ink">
                  <p className="text-xs text-muted">Deliver to: {l.address}</p>
                  <ul className="mt-2 grid gap-1">
                    {l.items.map((it, idx) => (
                      <li key={idx} className="flex justify-between gap-3">
                        <span>
                          {it.qty} <span className="text-muted">·</span> {it.name}
                        </span>
                        <span className="font-semibold">{it.price}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-2 flex items-center justify-between border-t border-ink/10 pt-2 text-sm">
                    <span className="font-semibold">Total</span>
                    <span className="font-bold text-brand-blue">{l.total} · paid</span>
                  </div>
                </div>
                <div className="px-3 pb-2 text-right text-[10px] text-muted">{l.time}</div>
              </div>
            );
          }
          if (l.kind === 'buttons') {
            return (
              <div key={i} className="self-start grid w-full max-w-[90%] gap-1.5">
                {l.labels.map((label, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`rounded-xl px-3 py-2 text-sm font-semibold transition-colors ${
                      idx === 0
                        ? 'bg-brand-green text-ink hover:bg-brand-green-dark'
                        : 'border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white'
                    }`}
                  >
                    {label}
                  </button>
                ))}
                <span className="text-right text-[10px] text-muted">{l.time}</span>
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}
