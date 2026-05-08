import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SHOWCASE_TILES } from "@/data/whyWhatsApp";
import { cn } from "@/lib/cn";

export function ShowcaseStrip() {
  return (
    <Section bg="lowest" className="!py-12">
      <Container>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-5 md:gap-6">
          {SHOWCASE_TILES.map((tile) => (
            <div
              key={tile.label}
              className={cn(
                "flex flex-col items-center justify-center rounded-[24px] bg-surface-container-low p-6 text-center card-shadow",
                tile.emphasized && "border-2 border-secondary/20",
              )}
            >
              <span
                className={cn(
                  "material-symbols-outlined mb-3",
                  tile.emphasized ? "text-secondary" : "text-primary",
                )}
                style={{ fontSize: 32 }}
                aria-hidden="true"
              >
                {tile.icon}
              </span>
              <p className="text-xs font-semibold uppercase tracking-wider text-on-surface">
                {tile.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
