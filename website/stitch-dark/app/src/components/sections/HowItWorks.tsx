import { QrCode, Package, Rocket } from "lucide-react";
import { Section } from "@/components/primitives/Section";
import { Container } from "@/components/primitives/Container";

const steps = [
  {
    icon: QrCode,
    title: "1. Connect WhatsApp",
    body: "Sync your business number to our platform in seconds using a simple QR code.",
  },
  {
    icon: Package,
    title: "2. Auto-Catalog",
    body: "Our AI reads your shelf or existing list to create a digital store automatically.",
  },
  {
    icon: Rocket,
    title: "3. Go Live",
    body: "Start receiving orders directly in chat. Customers track everything via a mini-app.",
  },
];

export function HowItWorks() {
  return (
    <Section>
      <Container>
        <h2 className="font-display text-h2 text-center mb-16">
          Three Steps to Hyperlocal Success
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {steps.map(({ icon: Icon, title, body }) => (
            <div key={title} className="text-center group">
              <div className="w-20 h-20 bg-surface-container-high rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <Icon size={36} className="text-primary" />
              </div>
              <h3 className="font-display text-h3 mb-4">{title}</h3>
              <p className="text-on-surface-variant">{body}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
