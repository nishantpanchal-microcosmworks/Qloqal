import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

type Props = {
  title: string;
  subtitle?: string;
  primary: { label: string; to: string };
  secondary?: { label: string; to: string };
};

export function CTABand({ title, subtitle, primary, secondary }: Props) {
  return (
    <section className="relative overflow-hidden">
      <div className="container-page py-16 md:py-20">
        <div className="glow-gradient relative overflow-hidden rounded-[40px] px-8 py-14 text-center text-on-primary md:px-16 md:py-20">
          <div className="absolute -left-12 -top-12 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-16 -right-12 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="relative">
            <h2 className="font-display text-3xl font-extrabold leading-tight md:text-5xl">
              {title}
            </h2>
            {subtitle && (
              <p className="mx-auto mt-4 max-w-2xl text-base text-on-primary/85 md:text-lg">
                {subtitle}
              </p>
            )}
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                to={primary.to}
                variant="dark"
                size="lg"
                className="bg-on-surface text-surface hover:bg-on-surface/90"
              >
                {primary.label}
                <ArrowRight className="h-4 w-4" />
              </Button>
              {secondary && (
                <Button
                  to={secondary.to}
                  variant="ghost"
                  size="lg"
                  className="text-on-primary hover:bg-white/10 hover:text-on-primary"
                >
                  {secondary.label}
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
