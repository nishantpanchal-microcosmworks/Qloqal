import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

type WhatsAppMockupProps = {
  title?: string;
  body: string;
  buttons?: string[];
  className?: string;
};

export function WhatsAppMockup({ title, body, buttons = [], className }: WhatsAppMockupProps) {
  return (
    <div
      className={cn(
        'mx-auto w-full max-w-md overflow-hidden rounded-card border border-ink-300/60 bg-[#ECE5DD] shadow-soft',
        className,
      )}
      role="img"
      aria-label="WhatsApp message preview"
    >
      <div className="flex items-center gap-3 bg-[#075E54] px-4 py-3 text-white">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-sm font-extrabold text-[#075E54]">
          Q
        </div>
        <div className="flex-1">
          <div className="text-sm font-semibold">Qloqal Orders</div>
          <div className="text-[11px] text-white/80">online · business account</div>
        </div>
      </div>

      <div className="space-y-2 p-4">
        <div className="ml-auto max-w-[88%] rounded-2xl rounded-br-md bg-white px-3 py-2.5 shadow-sm">
          {title ? (
            <div className="font-semibold text-sm text-ink-900">{title}</div>
          ) : null}
          <p className="whitespace-pre-line text-sm leading-relaxed text-ink-900">{body}</p>
          <div className="mt-1 flex justify-end gap-1 text-[10px] text-ink-500">
            <span>just now</span>
            <Check size={12} className="text-[#34B7F1]" />
            <Check size={12} className="-ml-2.5 text-[#34B7F1]" />
          </div>
        </div>

        {buttons.length > 0 ? (
          <div className="ml-auto grid max-w-[88%] gap-1.5">
            {buttons.map((b) => (
              <button
                key={b}
                type="button"
                className="rounded-2xl bg-white px-3 py-2 text-sm font-semibold text-[#00A884] shadow-sm hover:bg-ink-50"
              >
                {b}
              </button>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
