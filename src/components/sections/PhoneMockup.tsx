import { Search, MapPin, ShoppingCart, Check } from 'lucide-react';

type Variant = 'list' | 'cart' | 'tracking';

export function PhoneMockup({ variant = 'list' }: { variant?: Variant }) {
  return (
    <div
      className="relative mx-auto w-full max-w-[280px] rounded-[40px] border-[10px] border-ink-900 bg-ink-900 shadow-2xl"
      role="img"
      aria-label="Qloqal mobile app preview"
    >
      <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-ink-900" />
      <div className="aspect-[9/19] overflow-hidden rounded-[28px] bg-white">
        {variant === 'list' && <ListScreen />}
        {variant === 'cart' && <CartScreen />}
        {variant === 'tracking' && <TrackingScreen />}
      </div>
    </div>
  );
}

function Header({ title }: { title: string }) {
  return (
    <div className="bg-white px-4 pt-8 pb-3 text-center">
      <div className="font-display text-base font-bold text-ink-900">{title}</div>
    </div>
  );
}

function ListScreen() {
  return (
    <div className="h-full bg-ink-50">
      <Header title="Nearby kiranas" />
      <div className="px-4">
        <div className="flex items-center gap-2 rounded-xl border border-ink-300/70 bg-white px-3 py-2 text-xs text-ink-500">
          <Search size={14} />
          Search apple, milk, atta...
        </div>
      </div>
      <div className="space-y-2.5 px-4 pt-3">
        {['Sharma Kirana', 'Gupta General Store', 'Mathur Provisions'].map((name, i) => (
          <div key={name} className="rounded-xl bg-white p-3 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="font-semibold text-ink-900 text-sm">{name}</div>
              <span className="rounded-full bg-accent-50 px-2 py-0.5 text-[10px] font-bold text-accent-700">
                Open
              </span>
            </div>
            <div className="mt-1 flex items-center gap-1 text-[11px] text-ink-500">
              <MapPin size={11} />
              {0.4 + i * 0.3}km · 320+ items
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CartScreen() {
  return (
    <div className="h-full bg-ink-50">
      <Header title="Your cart" />
      <div className="space-y-2 px-4 pt-3">
        {[
          { name: 'Apple', q: '1 kg', p: '₹80' },
          { name: 'Onion', q: '500 g', p: '₹20' },
          { name: 'Bread', q: '1 loaf', p: '₹35' },
        ].map((it) => (
          <div key={it.name} className="flex items-center justify-between rounded-xl bg-white p-3 shadow-sm">
            <div>
              <div className="font-semibold text-ink-900 text-sm">{it.name}</div>
              <div className="text-[11px] text-ink-500">{it.q}</div>
            </div>
            <div className="text-sm font-bold text-ink-900">{it.p}</div>
          </div>
        ))}
      </div>
      <div className="mx-4 mt-3 rounded-xl bg-white p-3 shadow-sm">
        <div className="flex items-center justify-between text-sm">
          <span className="text-ink-700">Total</span>
          <span className="font-display text-lg font-extrabold text-ink-900">₹135</span>
        </div>
      </div>
      <div className="px-4 pt-3">
        <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-500 py-3 text-sm font-bold text-white">
          <ShoppingCart size={14} /> Place order
        </button>
      </div>
    </div>
  );
}

function TrackingScreen() {
  const steps = [
    { label: 'Paid', done: true },
    { label: 'Kirana notified', done: true },
    { label: 'Accepted', done: true },
    { label: 'Ready for pickup', done: false },
  ];
  return (
    <div className="h-full bg-ink-50">
      <Header title="Order #QL-1234" />
      <div className="mx-4 rounded-xl bg-white p-4 shadow-sm">
        <div className="text-xs font-semibold text-accent-700">Sharma Kirana</div>
        <div className="font-display text-base font-bold text-ink-900">3 items · ₹135</div>
        <div className="mt-3 space-y-2">
          {steps.map((s) => (
            <div key={s.label} className="flex items-center gap-2 text-xs">
              <span
                className={
                  s.done
                    ? 'inline-flex h-5 w-5 items-center justify-center rounded-full bg-accent-500 text-white'
                    : 'inline-flex h-5 w-5 items-center justify-center rounded-full border border-ink-300 text-ink-300'
                }
              >
                <Check size={12} />
              </span>
              <span className={s.done ? 'font-semibold text-ink-900' : 'text-ink-500'}>
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
