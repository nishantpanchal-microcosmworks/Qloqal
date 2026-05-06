import { Sparkles, ArrowRight } from 'lucide-react';
import { Seo } from '@/components/seo/Seo';
import { Hero } from '@/components/sections/Hero';
import { TrustStrip } from '@/components/sections/TrustStrip';
import { ProblemCards } from '@/components/sections/ProblemCards';
import { SolutionBlock } from '@/components/sections/SolutionBlock';
import { DualAudienceSplit } from '@/components/sections/DualAudienceSplit';
import { WhyQloqal } from '@/components/sections/WhyQloqal';
import { CTABand } from '@/components/sections/CTABand';
import { Section } from '@/components/ui/Section';
import { SectionHeader } from '@/components/sections/SectionHeader';
import { FAQAccordion } from '@/components/sections/FAQAccordion';
import { LinkButton } from '@/components/ui/Button';
import { PhoneMockup } from '@/components/sections/PhoneMockup';
import { WhatsAppMockup } from '@/components/sections/WhatsAppMockup';
import { shopperFaqs } from '@/data/faqs';

export function Home() {
  return (
    <>
      <Seo
        title="Qloqal — The marketplace for kirana shops, powered by WhatsApp"
        description="Every kirana, online. Without an app. Connect with your neighborhood kiranas — they take orders on WhatsApp."
        path="/"
      />

      <Hero
        eyebrow={
          <>
            <Sparkles size={12} /> Now inviting founding kiranas
          </>
        }
        title={<>Every kirana, online. <span className="text-brand-500">Without an app.</span></>}
        subtitle="Qloqal connects shoppers with their neighborhood kirana shops. Vendors take orders on WhatsApp — nothing to install, nothing new to learn."
        actions={
          <>
            <LinkButton to="/customers" size="lg">
              Explore as a shopper
              <ArrowRight size={18} />
            </LinkButton>
            <LinkButton to="/vendors" variant="secondary" size="lg">
              Sell as a kirana
            </LinkButton>
          </>
        }
        visual={
          <div className="relative">
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-12 -z-10 rounded-full bg-brand-500/10 blur-3xl"
            />
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:items-center">
              <PhoneMockup variant="list" />
              <div className="hidden sm:block">
                <WhatsAppMockup
                  title="🔔 New Order #QL-1234"
                  body={'1 kg Apple — ₹80\n500 g Onion — ₹20\n\nTotal: ₹100 (paid)'}
                  buttons={['Accept', 'Reject']}
                />
              </div>
            </div>
          </div>
        }
      />

      <TrustStrip />
      <ProblemCards />
      <SolutionBlock />
      <DualAudienceSplit />
      <WhyQloqal />

      <Section bg="ink">
        <SectionHeader
          eyebrow="Common questions"
          title="Quick answers for shoppers."
          subtitle="More questions on the dedicated FAQ page."
        />
        <div className="mt-10">
          <FAQAccordion items={shopperFaqs.slice(0, 4)} />
        </div>
        <div className="mt-8 text-center">
          <LinkButton to="/faq" variant="secondary" size="md">
            View all FAQs
            <ArrowRight size={16} />
          </LinkButton>
        </div>
      </Section>

      <CTABand
        title="Ready to bring your kirana online — without changing how you work?"
        subtitle="Join Qloqal as a shopper or a founding kirana. We will reach out within 48 hours."
        actions={
          <>
            <LinkButton to="/customers" variant="white" size="lg">
              I'm a shopper
            </LinkButton>
            <LinkButton to="/vendors" variant="accent" size="lg">
              I run a kirana
            </LinkButton>
          </>
        }
      />
    </>
  );
}
