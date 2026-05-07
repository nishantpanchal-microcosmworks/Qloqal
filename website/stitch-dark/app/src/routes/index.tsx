import { createFileRoute } from "@tanstack/react-router";
import { Helmet } from "react-helmet-async";
import { Hero } from "@/components/sections/Hero";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhatsAppAutomation } from "@/components/sections/WhatsAppAutomation";
import { BentoFeatures } from "@/components/sections/BentoFeatures";
import { DashboardPreview } from "@/components/sections/DashboardPreview";
import { AISection } from "@/components/sections/AISection";
import { PricingTable } from "@/components/sections/PricingTable";
import { Testimonials } from "@/components/sections/Testimonials";
import { FinalCTA } from "@/components/sections/FinalCTA";

function Home() {
  return (
    <>
      <Helmet>
        <title>Qloqal | WhatsApp-First Hyperlocal Commerce</title>
        <meta
          name="description"
          content="Run your local business from WhatsApp. Accept orders, manage inventory, and grow your community with the hyperlocal commerce platform."
        />
      </Helmet>
      <Hero />
      <TrustedBy />
      <HowItWorks />
      <WhatsAppAutomation />
      <BentoFeatures />
      <DashboardPreview />
      <AISection />
      <PricingTable />
      <Testimonials />
      <FinalCTA />
    </>
  );
}

export const Route = createFileRoute("/")({
  component: Home,
});
