export function PaymentRowMockup() {
  return (
    <div className="rounded-[24px] border border-primary/20 bg-primary/5 p-8 card-shadow">
      <div className="mb-4 flex items-center justify-between">
        <p className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant">
          Today's payouts
        </p>
        <p className="text-xs text-on-surface-variant">Settled to bank</p>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between rounded-xl bg-surface-container-lowest p-4 shadow-sm">
          <div className="flex items-center gap-3">
            <span
              className="material-symbols-outlined text-primary"
              aria-hidden="true"
            >
              check_circle
            </span>
            <div>
              <p className="text-sm font-semibold">Payment received</p>
              <p className="text-xs text-on-surface-variant">Order #2391</p>
            </div>
          </div>
          <span className="font-display text-lg font-bold text-primary">
            $124.50
          </span>
        </div>
        <div className="flex items-center justify-between rounded-xl bg-surface-container-lowest p-4 opacity-70 shadow-sm">
          <div className="flex items-center gap-3">
            <span
              className="material-symbols-outlined text-outline"
              aria-hidden="true"
            >
              pending
            </span>
            <div>
              <p className="text-sm font-semibold">Pending verification</p>
              <p className="text-xs text-on-surface-variant">Order #2390</p>
            </div>
          </div>
          <span className="text-on-surface-variant">$45.00</span>
        </div>
        <div className="flex items-center justify-between rounded-xl bg-surface-container-lowest p-4 shadow-sm">
          <div className="flex items-center gap-3">
            <span
              className="material-symbols-outlined text-primary"
              aria-hidden="true"
            >
              check_circle
            </span>
            <div>
              <p className="text-sm font-semibold">Payment received</p>
              <p className="text-xs text-on-surface-variant">Order #2389</p>
            </div>
          </div>
          <span className="font-display text-lg font-bold text-primary">
            $48.20
          </span>
        </div>
      </div>
    </div>
  );
}
