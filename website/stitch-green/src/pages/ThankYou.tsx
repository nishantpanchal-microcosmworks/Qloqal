import { useSearchParams } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Orbs } from "@/components/ui/Orbs";

type Type = "vendor" | "customer" | "contact" | "newsletter" | "default";

const MESSAGES: Record<
  Type,
  {
    title: string;
    body: string;
    cta: { label: string; to: string };
    secondary?: { label: string; to: string };
  }
> = {
  vendor: {
    title: "Thanks — your shop is on our radar.",
    body: "We'll get back to you within one business day with your activation link.",
    cta: { label: "While you wait, see how it works", to: "/how-it-works" },
    secondary: { label: "Back home", to: "/" },
  },
  customer: {
    title: "We'll let you know when we're live near you.",
    body: "Meanwhile, peek at the merchants joining the Qloqal network.",
    cta: { label: "See our customers", to: "/our-customers" },
    secondary: { label: "Back home", to: "/" },
  },
  contact: {
    title: "Got it. We reply within a business day.",
    body: "Need an answer right now? Our FAQ probably has it.",
    cta: { label: "Read our FAQ", to: "/faq" },
    secondary: { label: "Back home", to: "/" },
  },
  newsletter: {
    title: "You're in.",
    body: "Check your inbox to confirm your subscription.",
    cta: { label: "Back home", to: "/" },
  },
  default: {
    title: "Thanks!",
    body: "Your submission was received.",
    cta: { label: "Back home", to: "/" },
  },
};

function isType(value: string | null): value is Type {
  return (
    value === "vendor" ||
    value === "customer" ||
    value === "contact" ||
    value === "newsletter"
  );
}

export default function ThankYou() {
  const [params] = useSearchParams();
  const raw = params.get("type");
  const type: Type = isType(raw) ? raw : "default";
  const m = MESSAGES[type];

  return (
    <>
      <SEO
        title="Thanks — Qloqal"
        description="Your submission has been received."
        path="/thank-you"
      />

      <Section bg="lowest" className="!py-24">
        <Orbs variant="dual" />
        <Container>
          <div className="relative mx-auto max-w-2xl text-center">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary text-on-primary card-shadow">
              <CheckCircle2 className="h-10 w-10" />
            </div>
            <h1 className="text-4xl font-extrabold md:text-5xl">{m.title}</h1>
            <p className="mt-4 text-lg text-on-surface-variant">{m.body}</p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button to={m.cta.to} variant="primary" size="lg">
                {m.cta.label}
              </Button>
              {m.secondary && (
                <Button to={m.secondary.to} variant="secondary" size="lg">
                  {m.secondary.label}
                </Button>
              )}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
