import WhatsAppMockup from './WhatsAppMockup';

const steps = [
  {
    n: 1,
    title: 'Order arrives in your WhatsApp',
    desc: 'A new order shows up as a message. You see the items, address, and total.',
  },
  {
    n: 2,
    title: 'Tap Accept',
    desc: 'One tap. The customer is told you are on it. The 15-minute prep timer starts.',
  },
  {
    n: 3,
    title: 'Tap Mark Ready',
    desc: 'When the order is prepared, tap once more. Customer is notified for pickup or delivery.',
  },
];

export default function VendorFlow() {
  return (
    <div>
      <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-brand-green-dark">For vendors</p>
          <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Three taps. That's the whole job.
          </h2>
          <p className="mt-4 text-lg text-muted">
            No new app to learn. No tablet. No training. The orders land in the same WhatsApp you use to chat with your family — and the buttons do the work.
          </p>

          <ol className="mt-8 grid gap-4">
            {steps.map((s) => (
              <li key={s.n} className="flex gap-4 rounded-2xl border-2 border-brand-green/30 bg-white p-4 shadow-soft">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand-green text-ink font-display font-extrabold">
                  {s.n}
                </span>
                <div>
                  <h3 className="text-base font-bold text-ink">{s.title}</h3>
                  <p className="mt-1 text-sm text-muted">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div>
          <WhatsAppMockup
            shopName="Qloqal Orders"
            lines={[
              { kind: 'system', text: 'Today' },
              {
                kind: 'order',
                orderNo: 'QL-2104',
                address: 'Apt 12, Oak Avenue',
                items: [
                  { name: 'Whole milk', qty: '2L', price: '$3.20' },
                  { name: 'Brown bread', qty: '1', price: '$2.40' },
                  { name: 'Eggs (dozen)', qty: '1', price: '$4.50' },
                ],
                total: '$10.10',
                time: '10:16',
              },
              { kind: 'buttons', labels: ['Accept', 'Reject'], time: '10:16' },
              { kind: 'outgoing', text: '✓ Accepted', time: '10:17', status: 'read' },
              { kind: 'incoming', text: 'Mark this order as ready when you have packed it.', time: '10:17' },
              { kind: 'buttons', labels: ['Mark Ready'], time: '10:25' },
              { kind: 'outgoing', text: 'Order ready for pickup', time: '10:25', status: 'read' },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
