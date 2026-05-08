import { cn } from "@/lib/cn";

export type Bubble =
  | { kind: "in"; text: string; meta?: string }
  | { kind: "out"; text: string; meta?: string }
  | { kind: "card"; title: string; lines: string[]; total: string }
  | { kind: "actions"; accept: string; reject: string }
  | { kind: "system"; text: string };

type Props = {
  title?: string;
  subtitle?: string;
  bubbles: Bubble[];
  className?: string;
};

export function ChatMockup({
  title = "QLOQAL · ORDERS",
  subtitle = "online",
  bubbles,
  className,
}: Props) {
  return (
    <div
      className={cn(
        "flex w-full flex-col bg-[var(--color-paper-2)] text-[var(--color-ink)]",
        className,
      )}
    >
      {/* chat header */}
      <div className="flex items-center gap-3 border-b-2 border-ink bg-[var(--color-paper-3)] px-3 py-2">
        <div className="flex h-8 w-8 items-center justify-center border-2 border-ink bg-[var(--color-signal-green)] text-[12px] font-bold">
          q*
        </div>
        <div className="flex flex-col leading-none">
          <span className="text-[12px] font-bold uppercase tracking-wider">
            {title}
          </span>
          <span className="text-[10px] text-[var(--color-ink-mute)]">
            {subtitle}
          </span>
        </div>
        <div className="ml-auto flex gap-1 text-[10px] font-bold uppercase tracking-wider text-[var(--color-ink-mute)]">
          <span>● rec</span>
        </div>
      </div>

      {/* messages */}
      <div className="flex flex-col gap-2 p-3">
        {bubbles.map((b, i) => {
          if (b.kind === "system") {
            return (
              <div
                key={i}
                className="mx-auto border-2 border-ink bg-[var(--color-paper-3)] px-2 py-1 text-[10px] font-bold uppercase tracking-widest"
              >
                {b.text}
              </div>
            );
          }
          if (b.kind === "actions") {
            return (
              <div key={i} className="mr-auto flex max-w-[85%] gap-2">
                <button
                  type="button"
                  className="flex-1 border-2 border-ink bg-[var(--color-signal-green)] px-3 py-2 text-[12px] font-bold uppercase tracking-wider"
                >
                  ✓ {b.accept}
                </button>
                <button
                  type="button"
                  className="flex-1 border-2 border-ink bg-[var(--color-paper-3)] px-3 py-2 text-[12px] font-bold uppercase tracking-wider"
                >
                  ✗ {b.reject}
                </button>
              </div>
            );
          }
          if (b.kind === "card") {
            return (
              <div
                key={i}
                className="mr-auto max-w-[85%] border-2 border-ink bg-[var(--color-paper-3)] p-3 shadow-[3px_3px_0_var(--color-ink)]"
              >
                <div className="mb-2 flex items-center justify-between border-b-2 border-ink pb-1 text-[10px] font-bold uppercase tracking-widest">
                  <span>{b.title}</span>
                  <span>#A0421</span>
                </div>
                <ul className="mb-2 flex flex-col gap-0.5 text-[12px]">
                  {b.lines.map((l, k) => (
                    <li key={k} className="flex justify-between">
                      <span>{l.split("·")[0]}</span>
                      <span className="font-bold">{l.split("·")[1]}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex justify-between border-t-2 border-dashed border-ink pt-1 text-[12px] font-bold uppercase tracking-wider">
                  <span>Total</span>
                  <span>{b.total}</span>
                </div>
              </div>
            );
          }
          // in / out bubble
          const align = b.kind === "out" ? "ml-auto" : "mr-auto";
          const fill =
            b.kind === "out"
              ? "bg-[var(--color-signal-green)] text-[var(--color-ink)]"
              : "bg-[var(--color-paper-3)] text-[var(--color-ink)]";
          return (
            <div
              key={i}
              className={cn(
                "max-w-[80%] border-2 border-ink px-3 py-2 text-[12px]",
                align,
                fill,
              )}
            >
              <div>{b.text}</div>
              {b.meta && (
                <div className="mt-1 text-right text-[9px] opacity-70">
                  {b.meta} ✓✓
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* composer */}
      <div className="mt-auto flex items-center gap-2 border-t-2 border-ink bg-[var(--color-paper-3)] px-3 py-2">
        <div className="flex-1 border-2 border-ink bg-[var(--color-paper-2)] px-2 py-1.5 text-[12px] text-[var(--color-ink-mute)]">
          Type a message
        </div>
        <button
          type="button"
          className="border-2 border-ink bg-[var(--color-signal-green)] px-3 py-1.5 text-[11px] font-bold"
        >
          SEND
        </button>
      </div>
    </div>
  );
}

export default ChatMockup;
