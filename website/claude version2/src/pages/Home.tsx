import Seo from '../components/seo/Seo';
import Section from '../components/ui/Section';
import Hero from '../components/sections/Hero';
import CategoryStrip from '../components/sections/CategoryStrip';
import VendorFlow from '../components/sections/VendorFlow';
import WhyWhatsApp from '../components/sections/WhyWhatsApp';
import CategoryGrid from '../components/sections/CategoryGrid';
import CustomerFlow from '../components/sections/CustomerFlow';
import FeatureGrid from '../components/sections/FeatureGrid';
import ComparisonTable from '../components/sections/ComparisonTable';
import TrustStrip from '../components/sections/TrustStrip';
import TestimonialRow from '../components/sections/TestimonialRow';
import CTABand from '../components/sections/CTABand';
import SectionHeader from '../components/sections/SectionHeader';
import { vendorTestimonials, customerTestimonials } from '../data/testimonials';

export default function Home() {
  return (
    <>
      <Seo
        title="Qloqal — Run your shop on WhatsApp"
        description="Qloqal turns any small business into an online shop. Customers order in the app; you take orders right on WhatsApp. No vendor app, no tablet, no training."
        canonical="/"
      />
      <Hero />

      <Section tone="white" className="!py-10">
        <div className="text-center">
          <p className="mb-5 text-sm font-semibold uppercase tracking-wider text-muted">Built for every kind of small business</p>
          <CategoryStrip />
        </div>
      </Section>

      <Section tone="surface">
        <VendorFlow />
      </Section>

      <Section tone="white">
        <WhyWhatsApp />
      </Section>

      <Section tone="surface">
        <CategoryGrid />
      </Section>

      <Section tone="white">
        <CustomerFlow />
      </Section>

      <Section tone="surface">
        <FeatureGrid />
      </Section>

      <Section tone="white">
        <ComparisonTable />
      </Section>

      <Section tone="surface" className="!py-12">
        <TrustStrip />
      </Section>

      <Section tone="white">
        <SectionHeader eyebrow="What shop owners say" title="Built around how they already work." />
        <div className="mt-12">
          <TestimonialRow items={vendorTestimonials} />
        </div>
      </Section>

      <Section tone="surface">
        <SectionHeader eyebrow="What customers say" title="Local, finally usable." />
        <div className="mt-12">
          <TestimonialRow items={customerTestimonials} size="sm" />
        </div>
      </Section>

      <CTABand />
    </>
  );
}
