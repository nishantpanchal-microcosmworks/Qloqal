import { Mail, MessageCircle } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { ContactForm } from "@/components/forms/ContactForm";

const RESOURCES = [
  {
    icon: "support_agent",
    title: "Help Center",
    body: "Documentation, tutorials, and common questions.",
    href: "/faq",
  },
  {
    icon: "monitor_heart",
    title: "System Status",
    body: "Real-time monitoring of our network services.",
    href: "#",
  },
  {
    icon: "campaign",
    title: "Press Kit",
    body: "Brand assets and recent media announcements.",
    href: "/contact?subject=Press",
  },
  {
    icon: "trending_up",
    title: "Investors",
    body: "Financial reports and corporate governance.",
    href: "/contact?subject=Press",
  },
];

export default function Contact() {
  return (
    <>
      <SEO
        title="Talk to us — Qloqal"
        description="Reach the Qloqal team. We reply within a business day."
        path="/contact"
      />

      <Hero
        eyebrow="Fast support"
        align="left"
        title={
          <>
            Talk to us — <br />
            we reply within a day.
          </>
        }
        subtitle="Have a question about Qloqal? Whether you're a local merchant or a curious shopper, our team is ready to assist you in building your hyperlocal network."
        illustration={
          <div className="relative w-full max-w-md">
            <div className="rounded-[32px] bg-primary p-8 text-on-primary card-shadow">
              <p className="text-sm uppercase tracking-wider opacity-80">
                Average reply time
              </p>
              <p className="mt-2 font-display text-5xl font-extrabold">
                4 hours
              </p>
              <p className="mt-3 text-on-primary/80">
                during business days, across timezones we're available.
              </p>
            </div>
            <div className="-mt-6 ml-12 rounded-[24px] bg-surface-container-lowest p-6 card-shadow">
              <p className="text-sm font-semibold">"Supported. Local. Together."</p>
              <p className="mt-1 text-xs text-on-surface-variant">
                — every Qloqal merchant call
              </p>
            </div>
          </div>
        }
      />

      <Section bg="lowest" className="!pt-0">
        <Container>
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <Card>
                <ContactForm />
              </Card>
            </div>
            <div className="space-y-5">
              <a
                href="mailto:hello@qloqal.com"
                className="flex items-start gap-4 rounded-[24px] bg-surface-container-lowest p-6 card-shadow card-shadow-hover transition-colors hover:bg-surface-container-low"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-bold">Email us</p>
                  <p className="text-sm text-on-surface-variant">
                    Prefer writing? Our inbox is always open.
                  </p>
                  <p className="mt-1 text-sm font-semibold text-secondary">
                    hello@qloqal.com
                  </p>
                </div>
              </a>
              <a
                href="https://wa.me/15550000000"
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-start gap-4 rounded-[24px] bg-surface-container-lowest p-6 card-shadow card-shadow-hover transition-colors hover:bg-surface-container-low"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--color-whatsapp)]/10 text-[var(--color-whatsapp)]">
                  <MessageCircle className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-bold">WhatsApp Business</p>
                  <p className="text-sm text-on-surface-variant">
                    Quick chat for instant merchant support.
                  </p>
                  <p className="mt-1 text-sm font-semibold text-secondary">
                    +1 (555) 000 QLOQ
                  </p>
                </div>
              </a>
            </div>
          </div>
        </Container>
      </Section>

      <Section bg="bright">
        <Container>
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              Find what you need
            </h2>
            <p className="mt-3 text-on-surface-variant">
              Self-service resources for our community partners.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {RESOURCES.map((r) => (
              <a
                key={r.title}
                href={r.href}
                className="flex flex-col gap-3 rounded-[24px] bg-surface-container-lowest p-6 card-shadow card-shadow-hover"
              >
                <span
                  className="material-symbols-outlined text-primary"
                  style={{ fontSize: 28 }}
                  aria-hidden="true"
                >
                  {r.icon}
                </span>
                <h3 className="text-lg font-bold">{r.title}</h3>
                <p className="text-sm text-on-surface-variant">{r.body}</p>
              </a>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
