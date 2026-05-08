import SEO from "@/components/SEO";
import PageHeader from "@/components/layout/PageHeader";
import Section from "@/components/ui/Section";
import KickerLabel from "@/components/ui/KickerLabel";
import Highlight from "@/components/ui/Highlight";
import ContactForm from "@/components/forms/ContactForm";

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact — talk to a real human"
        description="Send us a message. Real humans on the other side. We answer most queries within a working day."
        canonical="/contact"
      />
      <PageHeader
        fileNo="FILE · CONTACT-04"
        kicker="reach us · plain"
        title={
          <>
            Send us <br />
            <Highlight tone="green">a message.</Highlight>
          </>
        }
        intro="No support tunnel, no chatbot. A human will read your message and write back within a working day."
        fill="paper"
      />

      <Section>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <aside className="flex flex-col gap-4 md:col-span-4">
            <div className="border-2 border-ink bg-[var(--color-paper-3)] p-5">
              <KickerLabel tone="green">where to find us</KickerLabel>
              <ul className="mt-3 flex flex-col gap-3 text-[13px]">
                <li>
                  <span className="block text-[10px] font-bold uppercase tracking-widest text-[var(--color-ink-mute)]">
                    Email
                  </span>
                  <a className="font-bold underline" href="mailto:hi@qloqal.app">
                    hi@qloqal.app
                  </a>
                </li>
                <li>
                  <span className="block text-[10px] font-bold uppercase tracking-widest text-[var(--color-ink-mute)]">
                    WhatsApp
                  </span>
                  <a
                    className="font-bold underline"
                    href="https://wa.me/00000000000"
                  >
                    +__ ____ ______
                  </a>
                </li>
                <li>
                  <span className="block text-[10px] font-bold uppercase tracking-widest text-[var(--color-ink-mute)]">
                    Press
                  </span>
                  <a
                    className="font-bold underline"
                    href="mailto:press@qloqal.app"
                  >
                    press@qloqal.app
                  </a>
                </li>
              </ul>
            </div>
            <div className="border-2 border-ink bg-[var(--color-signal-yellow)] p-5">
              <KickerLabel tone="ink">good to know</KickerLabel>
              <p className="mt-2 text-[13px] leading-relaxed">
                If you're a shop owner, you can skip the form and go straight
                to{" "}
                <a className="underline" href="/vendors">
                  /vendors
                </a>
                . You'll be live faster than this email gets read.
              </p>
            </div>
            <div
              aria-hidden
              className="border-2 border-ink bg-[var(--color-paper)] p-5 text-[10px] uppercase tracking-widest text-[var(--color-ink-mute)]"
            >
              ── ── ── ── ── ── ── ── ──
              <div className="mt-2">filed under · contact-04</div>
              <div className="mt-1">read me first</div>
            </div>
          </aside>

          <div className="md:col-span-8">
            <ContactForm />
          </div>
        </div>
      </Section>
    </>
  );
}
