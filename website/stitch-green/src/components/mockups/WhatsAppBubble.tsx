type Props = {
  variant?: "card" | "panel";
};

export function WhatsAppBubble({ variant = "card" }: Props) {
  if (variant === "panel") {
    return (
      <div className="mx-auto max-w-[300px]">
        <div className="rounded-[32px] bg-secondary p-4 card-shadow">
          <div className="rounded-[24px] bg-[var(--color-whatsapp)] p-4">
            <div className="mb-3 flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-white/30" />
              <div className="h-3 w-20 rounded-full bg-white/40" />
            </div>
            <div className="space-y-3">
              <div className="max-w-[80%] rounded-2xl rounded-tl-none bg-white p-3 shadow-sm">
                <p className="text-xs">
                  Hi! Can I order the chocolate croissants?
                </p>
              </div>
              <div className="ml-auto max-w-[80%] rounded-2xl rounded-tr-none bg-[#dcf8c6] p-3 shadow-sm">
                <p className="text-xs">Sure! Tap pay below to confirm.</p>
              </div>
            </div>
          </div>
          <div className="mt-3 rounded-xl bg-white/10 p-3 text-xs text-white">
            "Order confirmed! We're preparing your delivery."
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-[320px]">
      <div className="rounded-[32px] border-8 border-white bg-[var(--color-whatsapp)] p-5 card-shadow">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-white/30" />
          <div>
            <div className="h-3 w-20 rounded-full bg-white/40" />
            <div className="mt-1 h-2 w-12 rounded-full bg-white/30" />
          </div>
        </div>
        <div className="space-y-3">
          <div className="max-w-[80%] rounded-2xl rounded-tl-none bg-white p-3 shadow-sm">
            <p className="text-sm text-on-surface">Order #2391 — confirmed.</p>
          </div>
          <div className="ml-auto max-w-[80%] rounded-2xl rounded-tr-none bg-[#dcf8c6] p-3 shadow-sm">
            <p className="text-sm text-on-surface">
              Pickup ready in 12 min. Tap below when packed.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-2 pt-1">
            <div className="rounded-xl bg-white py-2 text-center text-xs font-semibold text-primary">
              Mark ready
            </div>
            <div className="rounded-xl bg-white/30 py-2 text-center text-xs font-semibold text-white">
              View order
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
