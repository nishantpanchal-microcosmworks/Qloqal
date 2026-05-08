import { SEO } from "@/components/SEO";
import { Container } from "@/components/ui/Container";
import { HeroTile } from "@/components/bento/HeroTile";
import { StatsTile } from "@/components/bento/StatsTile";
import { ChatTile } from "@/components/bento/ChatTile";
import { CatalogTile } from "@/components/bento/CatalogTile";
import { QuoteTile } from "@/components/bento/QuoteTile";
import { UseCaseTile } from "@/components/bento/UseCaseTile";
import { WhyWhatsAppTile } from "@/components/bento/WhyWhatsAppTile";
import { PaymentsTile } from "@/components/bento/PaymentsTile";
import { PricingTeaserTile } from "@/components/bento/PricingTeaserTile";
import { LogoStripTile } from "@/components/bento/LogoStripTile";
import { FAQTile } from "@/components/bento/FAQTile";
import { CTATile } from "@/components/bento/CTATile";
import { HOME_USE_CASES } from "@/data/useCases";

export default function Home() {
  return (
    <>
      <SEO
        title="Qloqal — Run your shop on WhatsApp, beautifully."
        description="A quieter way to sell online. Catalog, payments, polite auto-replies, all inside the chat your customers already use."
        path="/"
      />

      <Container className="pt-10 lg:pt-16 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5">
          <HeroTile />
          <StatsTile />

          <ChatTile />
          <CatalogTile />

          <QuoteTile />
          <UseCaseTile useCase={HOME_USE_CASES[0]!} span="lg:col-span-3" />
          <UseCaseTile useCase={HOME_USE_CASES[1]!} span="lg:col-span-3" />

          <UseCaseTile useCase={HOME_USE_CASES[2]!} span="lg:col-span-6" />
          <UseCaseTile useCase={HOME_USE_CASES[3]!} span="lg:col-span-6" />

          <WhyWhatsAppTile />
          <PaymentsTile />

          <PricingTeaserTile />
          <LogoStripTile />

          <FAQTile />
          <CTATile />
        </div>
      </Container>
    </>
  );
}
