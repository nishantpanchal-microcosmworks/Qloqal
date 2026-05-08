import { BentoTile } from "@/components/ui/BentoTile";
import { Button } from "@/components/ui/Button";
import { ArrowDoodle } from "@/components/decor/ArrowDoodle";

interface CTATileProps {
  title?: string;
  body?: string;
  primary?: { label: string; to: string };
  secondary?: { label: string; to: string };
  span?: string;
}

export function CTATile({
  title = "Open the shutter today.",
  body = "Pour a coffee, point your phone at the shelf, and have an actual online shop by the time it’s gone cold.",
  primary = { label: "Open my shop", to: "/vendors" },
  secondary = { label: "See pricing", to: "/pricing" },
  span = "lg:col-span-5",
}: CTATileProps) {
  return (
    <BentoTile tone="terracotta" span={span} className="flex flex-col justify-between overflow-hidden relative">
      <ArrowDoodle className="absolute top-4 right-4 w-20 h-14 opacity-30" color="var(--color-on-primary)" />
      <span className="kicker text-[var(--color-on-primary)]/80">last note</span>
      <h2 className="font-display text-3xl lg:text-4xl leading-tight mt-3">
        {title}
      </h2>
      <p className="text-[var(--color-on-primary)]/80 leading-relaxed max-w-md mt-3">
        {body}
      </p>
      <div className="flex flex-wrap gap-3 mt-6">
        <Button to={primary.to} variant="ink" size="lg">
          {primary.label}
        </Button>
        <Button to={secondary.to} variant="secondary" size="lg" className="bg-[var(--color-on-primary)] border-transparent text-[var(--color-primary)] hover:bg-[var(--color-on-primary)]/90">
          {secondary.label}
        </Button>
      </div>
    </BentoTile>
  );
}
