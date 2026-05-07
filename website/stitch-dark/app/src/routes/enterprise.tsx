import { createFileRoute } from "@tanstack/react-router";
import { Helmet } from "react-helmet-async";
import { EnterpriseHero } from "@/components/sections/EnterpriseHero";
import { EnterpriseTrust } from "@/components/sections/EnterpriseTrust";
import { EnterpriseBento } from "@/components/sections/EnterpriseBento";
import { EnterpriseStats } from "@/components/sections/EnterpriseStats";
import { EnterpriseDemoForm } from "@/components/sections/EnterpriseDemoForm";

function Enterprise() {
  return (
    <>
      <Helmet>
        <title>Enterprise | Qloqal</title>
        <meta
          name="description"
          content="Enterprise-grade WhatsApp commerce infrastructure. Multi-vendor orchestration, custom APIs, SOC2/GDPR compliance, 99.99% uptime SLA."
        />
      </Helmet>
      <EnterpriseHero />
      <EnterpriseTrust />
      <EnterpriseBento />
      <EnterpriseStats />
      <EnterpriseDemoForm />
    </>
  );
}

export const Route = createFileRoute("/enterprise")({
  component: Enterprise,
});
