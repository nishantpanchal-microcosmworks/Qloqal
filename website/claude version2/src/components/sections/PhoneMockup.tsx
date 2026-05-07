import { ReactNode } from 'react';

export default function PhoneMockup({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`mx-auto w-full max-w-[300px] ${className}`}>
      <div className="rounded-[2.5rem] border-[10px] border-ink bg-ink p-1 shadow-card">
        <div className="relative overflow-hidden rounded-[2rem] bg-white">
          <div className="absolute left-1/2 top-1.5 z-10 h-4 w-20 -translate-x-1/2 rounded-full bg-ink" />
          <div className="min-h-[520px] pt-7">{children}</div>
        </div>
      </div>
    </div>
  );
}

export function NearbyShopsScreen() {
  const shops = [
    { name: "Maya's Bakery", category: 'Bakery', distance: '0.3 km', rating: '4.8' },
    { name: 'Corner Pharmacy', category: 'Pharmacy', distance: '0.5 km', rating: '4.7' },
    { name: 'The Daily Mart', category: 'Grocery', distance: '0.7 km', rating: '4.6' },
    { name: 'Studio Cut', category: 'Salon', distance: '0.9 km', rating: '4.9' },
  ];
  return (
    <div className="px-4">
      <div className="mb-3 flex items-center justify-between">
        <div>
          <p className="text-[10px] font-semibold uppercase text-muted">Delivering to</p>
          <p className="text-sm font-bold text-ink">Home · Apt 4B</p>
        </div>
        <div className="grid h-8 w-8 place-items-center rounded-full bg-brand-green-soft">
          <span className="text-sm">🛒</span>
        </div>
      </div>
      <div className="mb-3 rounded-xl bg-surface px-3 py-2 text-xs text-muted">Search nearby shops…</div>
      <p className="mb-2 text-xs font-bold uppercase tracking-wider text-brand-blue">Nearby</p>
      <div className="grid gap-2">
        {shops.map((s) => (
          <div key={s.name} className="flex items-center justify-between rounded-xl border border-ink/10 bg-white px-3 py-2.5">
            <div>
              <p className="text-sm font-semibold text-ink">{s.name}</p>
              <p className="text-[11px] text-muted">{s.category} · {s.distance}</p>
            </div>
            <span className="rounded-full bg-brand-green-soft px-2 py-0.5 text-[11px] font-semibold text-brand-green-dark">
              ★ {s.rating}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function OrderTrackingScreen() {
  const steps = [
    { label: 'Order placed', done: true },
    { label: 'Shop accepted', done: true },
    { label: 'Preparing your order', done: true, current: true },
    { label: 'Ready for delivery', done: false },
    { label: 'Delivered', done: false },
  ];
  return (
    <div className="px-4">
      <div className="mb-3">
        <p className="text-[10px] font-semibold uppercase text-muted">Order #QL-1842</p>
        <p className="text-sm font-bold text-ink">Maya's Bakery</p>
      </div>
      <div className="rounded-2xl bg-brand-green-soft p-3">
        <p className="text-xs font-bold uppercase tracking-wider text-brand-green-dark">In progress</p>
        <p className="mt-1 text-base font-bold text-ink">Preparing your order</p>
        <p className="text-xs text-muted">Estimated · 12–18 min</p>
      </div>
      <div className="mt-4 grid gap-2">
        {steps.map((s, i) => (
          <div key={i} className="flex items-center gap-3">
            <span
              className={`grid h-6 w-6 place-items-center rounded-full text-[10px] font-bold ${
                s.current ? 'bg-brand-blue text-white' : s.done ? 'bg-brand-green text-ink' : 'bg-surface text-muted'
              }`}
            >
              {s.done ? '✓' : i + 1}
            </span>
            <span className={`text-xs ${s.current ? 'font-bold text-ink' : s.done ? 'text-ink' : 'text-muted'}`}>{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
