import { SEO } from "@/components/SEO";
import { Container } from "@/components/ui/Container";
import { BentoTile } from "@/components/ui/BentoTile";
import { PageHero } from "@/components/sections/PageHero";
import { ContactForm } from "@/components/forms/ContactForm";
import { Mail, Clock, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <>
      <SEO
        title="Talk to us — Qloqal"
        description="Send us a note. A real human will write back, usually within a day."
        path="/contact"
      />

      <PageHero
        kicker="get in touch"
        title={
          <>
            Send us a note,{" "}
            <span className="ink-italic text-[var(--color-primary)]">we’ll write back.</span>
          </>
        }
        body="No tickets, no chatbots. Whoever opens your message is on the team that builds Qloqal."
      />

      <Container className="py-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5">
          <BentoTile tone="paper" span="lg:col-span-7">
            <ContactForm />
          </BentoTile>

          <div className="lg:col-span-5 space-y-4 lg:space-y-5">
            <BentoTile tone="warm">
              <span className="kicker">letter box</span>
              <ul className="mt-4 space-y-4">
                <li className="flex items-start gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-[var(--color-surface-container-lowest)] border border-[var(--color-outline-variant)] text-[var(--color-primary)] shrink-0">
                    <Mail size={16} />
                  </span>
                  <div>
                    <div className="font-display text-base">hello@qloqal.com</div>
                    <div className="text-xs text-[var(--color-on-surface-variant)] mt-0.5">For shopkeepers, shoppers, anyone.</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-[var(--color-surface-container-lowest)] border border-[var(--color-outline-variant)] text-[var(--color-primary)] shrink-0">
                    <Clock size={16} />
                  </span>
                  <div>
                    <div className="font-display text-base">Mon–Sat, 09:00–19:00 (CET)</div>
                    <div className="text-xs text-[var(--color-on-surface-variant)] mt-0.5">We usually reply within a day.</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-[var(--color-surface-container-lowest)] border border-[var(--color-outline-variant)] text-[var(--color-primary)] shrink-0">
                    <MapPin size={16} />
                  </span>
                  <div>
                    <div className="font-display text-base">A small office above a printer’s shop</div>
                    <div className="text-xs text-[var(--color-on-surface-variant)] mt-0.5">Lisbon, Portugal · by appointment</div>
                  </div>
                </li>
              </ul>
            </BentoTile>

            <BentoTile tone="moss">
              <span className="kicker text-[var(--color-mustard)]">other ways</span>
              <p className="mt-3 font-display text-xl leading-snug">
                Press inquiries? Partnership ideas? A handwritten letter we can pin to the wall?
              </p>
              <p className="mt-3 text-sm text-[var(--color-on-secondary)]/85">
                We’re happy with all of them. Drop us a line above and we’ll route it to the right pair of hands.
              </p>
            </BentoTile>
          </div>
        </div>
      </Container>
    </>
  );
}
