import type { ReactNode } from "react";
import KickerLabel from "@/components/ui/KickerLabel";
import Stamp from "@/components/ui/Stamp";
import Container from "@/components/ui/Container";
import AsciiDivider from "@/components/decor/AsciiDivider";
import { cn } from "@/lib/cn";

type Props = {
  kicker: string;
  title: ReactNode;
  intro?: ReactNode;
  fileNo: string;
  fill?: "paper" | "paper-2" | "ink" | "green" | "yellow";
  right?: ReactNode;
};

const fills = {
  paper: "bg-[var(--color-paper)] text-[var(--color-ink)]",
  "paper-2": "bg-[var(--color-paper-2)] text-[var(--color-ink)]",
  ink: "bg-[var(--color-ink)] text-[var(--color-paper)]",
  green: "bg-[var(--color-signal-green)] text-[var(--color-ink)]",
  yellow: "bg-[var(--color-signal-yellow)] text-[var(--color-ink)]",
};

export function PageHeader({
  kicker,
  title,
  intro,
  fileNo,
  fill = "paper",
  right,
}: Props) {
  return (
    <header className={cn("border-b-2 border-ink", fills[fill])}>
      <Container>
        <div className="grid grid-cols-1 gap-6 py-12 md:grid-cols-12 md:py-16">
          <div className="md:col-span-8">
            <div className="flex flex-wrap items-center gap-2">
              <Stamp tone={fill === "green" ? "ink" : "green"}>{fileNo}</Stamp>
              <KickerLabel
                tone={fill === "ink" ? "mute" : "ink"}
                className={cn(fill === "ink" && "text-[var(--color-paper)]/70")}
              >
                {kicker}
              </KickerLabel>
            </div>
            <h1 className="mt-4 font-mono text-[36px] leading-[1] md:text-[64px] lg:text-[80px]">
              {title}
            </h1>
            {intro && (
              <p
                className={cn(
                  "mt-4 max-w-[60ch] text-[14px] leading-relaxed md:text-[16px]",
                  fill === "ink"
                    ? "text-[var(--color-paper)]/80"
                    : "text-[var(--color-ink-2)]",
                )}
              >
                {intro}
              </p>
            )}
          </div>
          {right && <div className="md:col-span-4">{right}</div>}
        </div>
      </Container>
      <AsciiDivider variant="line" />
    </header>
  );
}

export default PageHeader;
