import { useEffect, useState } from "react";
import SEO from "@/components/SEO";
import PageHeader from "@/components/layout/PageHeader";
import Section from "@/components/ui/Section";
import KickerLabel from "@/components/ui/KickerLabel";
import Highlight from "@/components/ui/Highlight";
import Stamp from "@/components/ui/Stamp";
import Button from "@/components/ui/Button";

export default function ThankYou() {
  const [kind, setKind] = useState<"vendor" | "contact" | "generic">("generic");

  useEffect(() => {
    const k = sessionStorage.getItem("qloqal:lastSubmit");
    if (k === "vendor" || k === "contact") setKind(k);
    sessionStorage.removeItem("qloqal:lastSubmit");
  }, []);

  const copy =
    kind === "vendor"
      ? {
          kicker: "submission · received",
          title: (
            <>
              We've got your <br />
              <Highlight tone="green">shop details.</Highlight>
            </>
          ),
          body:
            "We'll come back within a working day with your storefront link, the WhatsApp number to keep an eye on, and the next 3 things to set up.",
          steps: [
            "We review your details",
            "You get a storefront link by WhatsApp",
            "You list your top items (~10 minutes)",
            "First order arrives — tap accept",
          ],
        }
      : kind === "contact"
        ? {
            kicker: "message · received",
            title: (
              <>
                Got it. <br />
                <Highlight tone="green">A human will reply.</Highlight>
              </>
            ),
            body:
              "Most messages get a reply within a working day. We don't have a chatbot answering for us — just a small team.",
            steps: [
              "Your message is in the inbox",
              "A human reads it",
              "You get a reply, by email",
            ],
          }
        : {
            kicker: "thank you",
            title: (
              <>
                Thanks for <br />
                <Highlight tone="green">stopping by.</Highlight>
              </>
            ),
            body: "Anything else we can help with?",
            steps: [],
          };

  return (
    <>
      <SEO
        title="Thank you · q*loqal"
        description="Your submission was received."
        canonical="/thank-you"
      />
      <PageHeader
        fileNo="FILE · THANK-YOU-04"
        kicker={copy.kicker}
        title={copy.title}
        intro={copy.body}
        fill="green"
      />

      {copy.steps.length > 0 && (
        <Section>
          <KickerLabel tone="green">what happens next</KickerLabel>
          <ol className="mt-6 grid grid-cols-1 gap-0 md:grid-cols-4">
            {copy.steps.map((s, i) => (
              <li
                key={s}
                className="flex flex-col gap-2 border-2 border-ink bg-[var(--color-paper)] p-5 -ml-[2px] -mt-[2px]"
              >
                <Stamp tone="ink">{String(i + 1).padStart(2, "0")}</Stamp>
                <p className="text-[14px] leading-relaxed">{s}</p>
              </li>
            ))}
          </ol>
        </Section>
      )}

      <Section className="bg-[var(--color-paper-2)] border-t-2 border-ink">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <h3 className="font-mono text-[20px] leading-tight md:text-[28px]">
            Until then — wander around.
          </h3>
          <div className="flex gap-2">
            <Button to="/" variant="secondary" size="md" data-cta="thank-you-home">
              Back home
            </Button>
            <Button to="/our-customers" variant="fill-green" size="md" data-cta="thank-you-stories">
              Read field notes
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
