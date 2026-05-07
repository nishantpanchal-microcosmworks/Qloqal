import { createFileRoute } from "@tanstack/react-router";
import { Helmet } from "react-helmet-async";
import { Container } from "@/components/primitives/Container";
import { PricingTable } from "@/components/sections/PricingTable";
import { PricingComparison } from "@/components/sections/PricingComparison";
import { PricingFAQ } from "@/components/sections/PricingFAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

function PricingHero() {
  return (
    <section className="pt-12 pb-4">
      <Container className="text-center">
        <h1 className="font-display text-h1 mb-4 bg-gradient-to-r from-on-surface to-on-surface-variant bg-clip-text text-transparent">
          Scale your local impact
        </h1>
        <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          Choose the perfect plan for your operations. From nimble startups to global
          enterprises, Qloqal powers your hyper-connected future.
        </p>
      </Container>
    </section>
  );
}

function Pricing() {
  return (
    <>
      <Helmet>
        <title>Pricing | Qloqal</title>
        <meta
          name="description"
          content="Simple, transparent pricing for local businesses, growing teams, and global enterprises."
        />
      </Helmet>
      <PricingHero />
      <PricingTable variant="lifted" showHeading={false} />
      <PricingComparison />
      <PricingFAQ />
      <FinalCTA
        title="Ready to optimize your local network?"
        subtitle="Join thousands of teams using Qloqal to bridge the gap between global strategy and local execution."
        primaryLabel="Get Started Now"
        secondaryLabel="Book a Demo"
      />
    </>
  );
}

export const Route = createFileRoute("/pricing")({
  component: Pricing,
});
