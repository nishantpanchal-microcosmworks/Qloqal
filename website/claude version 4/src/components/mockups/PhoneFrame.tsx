import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Props = {
  label?: string;
  children: ReactNode;
  className?: string;
  tone?: "paper" | "ink";
};

export function PhoneFrame({
  label,
  children,
  className,
  tone = "paper",
}: Props) {
  return (
    <div className={cn("flex w-full max-w-[320px] flex-col gap-2", className)}>
      {label && (
        <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-ink-mute)]">
          {label}
        </div>
      )}
      <div
        className={cn(
          "border-2 border-ink shadow-[6px_6px_0_var(--color-ink)]",
          tone === "ink"
            ? "bg-[var(--color-ink)] text-[var(--color-paper)]"
            : "bg-[var(--color-paper-3)] text-[var(--color-ink)]",
        )}
      >
        {/* status bar */}
        <div
          className={cn(
            "flex items-center justify-between border-b-2 border-ink px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest",
            tone === "ink"
              ? "bg-[var(--color-ink-2)]"
              : "bg-[var(--color-paper-2)]",
          )}
        >
          <span>09:41</span>
          <span aria-hidden className="flex gap-1">
            <span className="block h-2 w-2 border-2 border-current" />
            <span className="block h-2 w-2 border-2 border-current" />
            <span className="block h-2 w-3 border-2 border-current" />
          </span>
        </div>
        {/* notch */}
        <div className="flex justify-center">
          <div
            className={cn(
              "h-2 w-20 border-x-2 border-b-2 border-ink",
              tone === "ink" ? "bg-[var(--color-ink-2)]" : "bg-[var(--color-paper-2)]",
            )}
          />
        </div>
        {/* screen */}
        <div className="min-h-[420px]">{children}</div>
      </div>
    </div>
  );
}

export default PhoneFrame;
