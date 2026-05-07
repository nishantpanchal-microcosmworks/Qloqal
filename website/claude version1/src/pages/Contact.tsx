import { Mail, MessageCircle } from 'lucide-react';
import { Seo } from '@/components/seo/Seo';
import { Hero } from '@/components/sections/Hero';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { ContactForm } from '@/components/forms/ContactForm';

export function Contact() {
  return (
    <>
      <Seo
        title="Contact Qloqal"
        description="Get in touch — partnerships, press, support, or just say hello."
        path="/contact"
      />

      <Hero
        title="Get in touch."
        subtitle="Questions, partnerships, press, support — write to us. We read every message."
      />

      <Section bg="white">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div className="space-y-6">
            <Card variant="default">
              <Mail size={22} className="text-brand-500" />
              <h3 className="mt-4 font-display text-lg font-bold text-ink-900">Email</h3>
              <p className="mt-2 text-base text-ink-700">
                The fastest way to reach us. We aim to reply within 24 hours.
              </p>
              <a
                href="mailto:devcloudteam2025@gmail.com"
                className="mt-3 inline-block break-all font-semibold text-brand-600 hover:text-brand-700"
              >
                devcloudteam2025@gmail.com
              </a>
            </Card>

            <Card variant="accent">
              <MessageCircle size={22} className="text-accent-700" />
              <h3 className="mt-4 font-display text-lg font-bold text-ink-900">WhatsApp</h3>
              <p className="mt-2 text-base text-ink-700">
                If you run a kirana and prefer WhatsApp, mention it in the form and we will reply
                on WhatsApp directly.
              </p>
            </Card>
          </div>

          <Card variant="default" className="lg:p-10">
            <h3 className="font-display text-xl font-bold text-ink-900">Send us a message</h3>
            <p className="mt-1.5 text-sm text-ink-700">
              Pick a subject so we can route your message to the right person.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </Card>
        </div>
      </Section>
    </>
  );
}
