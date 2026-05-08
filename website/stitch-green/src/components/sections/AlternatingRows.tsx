import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/cn";

export type AlternatingRow = {
  title: string;
  body: string;
  visual: ReactNode;
};

type Props = {
  rows: AlternatingRow[];
  bg?: "lowest" | "default";
};

export function AlternatingRows({ rows, bg = "lowest" }: Props) {
  return (
    <Section bg={bg}>
      <Container>
        <div className="space-y-20 md:space-y-32">
          {rows.map((row, idx) => (
            <div
              key={row.title}
              className={cn(
                "flex flex-col items-center gap-12 md:flex-row md:gap-20",
                idx % 2 === 1 && "md:flex-row-reverse",
              )}
            >
              <div className="md:w-1/2">{row.visual}</div>
              <div className="md:w-1/2">
                <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                  {row.title}
                </h2>
                <p className="text-lg leading-relaxed text-on-surface-variant">
                  {row.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
