import { Container } from "@/components/primitives/Container";
import { Button } from "@/components/ui/button";

type Props = {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
};

export function FinalCTA({
  title = "Start Running Your Business From WhatsApp",
  subtitle = "Join thousands of local retailers transforming their neighborhood commerce today.",
  primaryLabel = "Get Started Free",
  secondaryLabel = "Schedule Demo",
}: Props) {
  return (
    <section className="py-16 px-gutter">
      <Container className="px-0">
        <div className="bg-primary text-on-primary rounded-[2.5rem] p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.2),_transparent)]" />
          <div className="relative z-10">
            <h2 className="font-display text-h1 mb-6 text-on-primary">{title}</h2>
            <p className="text-body-lg mb-10 max-w-2xl mx-auto opacity-90">{subtitle}</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button variant="inverse" size="xl" data-cta="final-cta-primary">
                {primaryLabel}
              </Button>
              <Button variant="inverse-outline" size="xl" data-cta="final-cta-secondary">
                {secondaryLabel}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
