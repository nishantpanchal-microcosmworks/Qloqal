import { SEO } from "@/components/SEO";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Orbs } from "@/components/ui/Orbs";

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page not found — Qloqal"
        description="The page you're looking for doesn't exist."
        path="/404"
      />
      <Section bg="lowest" className="!py-24">
        <Orbs variant="dual" />
        <Container>
          <div className="relative mx-auto max-w-2xl text-center">
            <p className="font-display text-7xl font-extrabold glow-gradient-text md:text-9xl">
              404
            </p>
            <h1 className="mt-6 text-3xl font-extrabold md:text-4xl">
              Page not found.
            </h1>
            <p className="mt-3 text-lg text-on-surface-variant">
              The link you followed may be broken, or the page may have been
              removed.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button to="/" variant="primary" size="lg">
                Back home
              </Button>
              <Button to="/contact" variant="secondary" size="lg">
                Contact support
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
