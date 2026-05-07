import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  variant: "incoming" | "outgoing";
  children: ReactNode;
  className?: string;
};

export function ChatBubble({ variant, children, className }: Props) {
  return (
    <div
      className={cn(
        "p-4 rounded-xl text-body-sm max-w-[80%]",
        variant === "incoming"
          ? "bg-surface-container-high rounded-tl-none"
          : "bg-primary-container/90 text-on-primary-container rounded-tr-none ml-auto",
        className,
      )}
    >
      {children}
    </div>
  );
}
