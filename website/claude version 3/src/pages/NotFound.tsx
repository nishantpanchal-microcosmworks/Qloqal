import { SEO } from "@/components/SEO";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { TornEdge } from "@/components/decor/TornEdge";

export default function NotFound() {
  return (
    <>
      <SEO title="Lost in the post — Qloqal" description="This page didn’t reach its destination." path="/404" />
      <Container className="py-20 lg:py-28">
        <div className="paper-card overflow-hidden">
          <TornEdge color="var(--color-surface)" className="rotate-180" />
          <div className="px-8 lg:px-16 py-16 lg:py-20 text-center">
            <span className="kicker">return to sender</span>
            <h1 className="font-display text-5xl lg:text-7xl mt-4 leading-tight">404</h1>
            <p className="font-display italic text-2xl text-[var(--color-primary)] mt-2">page got lost in the post.</p>
            <p className="mt-6 max-w-md mx-auto text-[var(--color-on-surface-variant)] leading-relaxed">
              The shop bell rang, but nobody was at the door. The page you were
              looking for has either moved, been put away for the season, or
              never quite made it to the front counter.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <Button to="/" variant="primary" size="lg">Back to the front of house</Button>
              <Button to="/contact" variant="secondary" size="lg">Tell us what you were after</Button>
            </div>
          </div>
          <TornEdge color="var(--color-surface)" />
        </div>
      </Container>
    </>
  );
}
