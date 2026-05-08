import type { ReactNode } from "react";
import { Orbs } from "@/components/ui/Orbs";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  actions?: ReactNode;
  align?: "center" | "left";
  illustration?: ReactNode;
  bg?: "default" | "low" | "lowest";
};

const bgClass = {
  default: "bg-surface",
  low: "bg-surface-container-low",
  lowest: "bg-surface-container-lowest",
} as const;

export function Hero({
  eyebrow,
  title,
  subtitle,
  actions,
  align = "center",
  illustration,
  bg = "lowest",
}: Props) {
  const isCenter = align === "center" && !illustration;

  return (
    <section className={`relative overflow-hidden ${bgClass[bg]} pt-16 pb-20 md:pt-24 md:pb-28`}>
      <Orbs variant={illustration ? "dual" : "hero"} />
      <Container className="relative">
        {isCenter ? (
          <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
            {eyebrow && <Badge className="mb-6">{eyebrow}</Badge>}
            <h1 className="font-display text-4xl font-extrabold leading-tight tracking-tight md:text-6xl lg:text-[64px]">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-6 max-w-2xl text-lg text-on-surface-variant md:text-xl">
                {subtitle}
              </p>
            )}
            {actions && (
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                {actions}
              </div>
            )}
          </div>
        ) : (
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              {eyebrow && <Badge className="mb-6">{eyebrow}</Badge>}
              <h1 className="font-display text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-[56px]">
                {title}
              </h1>
              {subtitle && (
                <p className="mt-6 max-w-xl text-lg text-on-surface-variant md:text-xl">
                  {subtitle}
                </p>
              )}
              {actions && (
                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  {actions}
                </div>
              )}
            </div>
            {illustration && (
              <div className="flex items-center justify-center">
                {illustration}
              </div>
            )}
          </div>
        )}
      </Container>
    </section>
  );
}
