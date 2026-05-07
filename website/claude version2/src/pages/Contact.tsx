import { Mail, MessageCircle } from 'lucide-react';
import Seo from '../components/seo/Seo';
import Section from '../components/ui/Section';
import SectionHeader from '../components/sections/SectionHeader';
import ContactForm from '../components/forms/ContactForm';

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact Qloqal"
        description="Get in touch with the Qloqal team. We'll get back to you within one business day."
        canonical="/contact"
      />

      <Section tone="white">
        <SectionHeader eyebrow="Contact" title="Talk to us." subtitle="Whether you are a shop owner, a customer, or curious — we will get back within one business day." />
      </Section>

      <Section tone="surface" className="!pt-0">
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[2fr_1fr]">
          <div className="rounded-2xl bg-white p-6 shadow-card sm:p-8">
            <ContactForm />
          </div>

          <aside className="grid content-start gap-4">
            <div className="rounded-2xl bg-white p-6 shadow-soft">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand-green-soft text-brand-green-dark">
                <Mail size={18} />
              </div>
              <h3 className="mt-4 text-base font-bold text-ink">Email</h3>
              <p className="mt-1 text-sm text-muted">
                <a href="mailto:devcloudteam2025@gmail.com" className="text-brand-blue hover:underline">
                  devcloudteam2025@gmail.com
                </a>
              </p>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-soft">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand-blue-soft text-brand-blue">
                <MessageCircle size={18} />
              </div>
              <h3 className="mt-4 text-base font-bold text-ink">WhatsApp Business</h3>
              <p className="mt-1 text-sm text-muted">Reply via the number you receive when we follow up on your inquiry.</p>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
