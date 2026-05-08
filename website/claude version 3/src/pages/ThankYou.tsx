import { SEO } from "@/components/SEO";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { BentoTile } from "@/components/ui/BentoTile";
import { Stamp } from "@/components/ui/Stamp";

export default function ThankYou() {
  return (
    <>
      <SEO title="Thank you — Qloqal" description="Your message landed. We’ll write back soon." path="/thank-you" />
      <Container className="py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5">
          <BentoTile tone="paper" span="lg:col-span-12 lg:col-start-1" className="text-center flex flex-col items-center gap-6 py-16">
            <Stamp label="received · with thanks" sub="we’ll reply soon" rotate="r" tone="primary" />
            <h1 className="font-display text-4xl lg:text-5xl leading-tight max-w-2xl">
              Thank you. Your note is on the desk.
            </h1>
            <p className="max-w-xl text-[var(--color-on-surface-variant)] leading-relaxed">
              Whoever opens it next will write back personally — usually within a day, sooner if there’s a coffee handy.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button to="/" variant="primary" size="lg">Back home</Button>
              <Button to="/our-customers" variant="secondary" size="lg">Read shop stories</Button>
            </div>
          </BentoTile>
        </div>
      </Container>
    </>
  );
}
