export function DashboardMockup() {
  const orders = [
    { id: "#2391", customer: "Maya R.", total: "$24.50", status: "New" },
    { id: "#2390", customer: "Jordan T.", total: "$12.00", status: "Packing" },
    { id: "#2389", customer: "Lin H.", total: "$48.20", status: "Ready" },
    { id: "#2388", customer: "Pat K.", total: "$8.75", status: "Picked up" },
  ];

  return (
    <div className="rounded-[24px] border border-outline-variant/40 bg-surface-container-lowest p-4 card-shadow">
      <div className="rounded-2xl bg-surface-container-low p-5">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant">
              Live orders
            </p>
            <p className="font-display text-2xl font-bold">24 today</p>
          </div>
          <div className="flex gap-2">
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              ● 4 new
            </span>
            <span className="rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold text-secondary">
              2 packing
            </span>
          </div>
        </div>
        <div className="space-y-2">
          {orders.map((order) => (
            <div
              key={order.id}
              className="flex items-center justify-between rounded-xl bg-surface-container-lowest px-4 py-3 shadow-sm"
            >
              <div>
                <p className="text-sm font-semibold">{order.id}</p>
                <p className="text-xs text-on-surface-variant">
                  {order.customer}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold">{order.total}</span>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  {order.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
