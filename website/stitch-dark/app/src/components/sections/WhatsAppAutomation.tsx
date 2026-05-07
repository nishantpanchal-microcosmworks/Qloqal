import { MessageCircle, RefreshCw, BellRing } from "lucide-react";
import { Section } from "@/components/primitives/Section";
import { Container } from "@/components/primitives/Container";
import { PhoneMockup } from "@/components/primitives/PhoneMockup";
import { ChatBubble } from "@/components/primitives/ChatBubble";

const features = [
  {
    icon: MessageCircle,
    title: "Accept orders via chat",
    body: "AI parses customer messages into structured orders instantly.",
  },
  {
    icon: RefreshCw,
    title: "Update inventory using chat",
    body: 'Just text "Add 50 Milk" to update your global stock levels.',
  },
  {
    icon: BellRing,
    title: "Automated status updates",
    body: "Customers get real-time tracking updates via WhatsApp alerts.",
  },
];

export function WhatsAppAutomation() {
  return (
    <Section className="bg-surface-container-lowest">
      <Container className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="mx-auto">
          <PhoneMockup>
            <div className="h-12 border-b border-white/5 flex items-center px-4 gap-4 -mx-4 -mt-4 mb-4 px-4">
              <div className="w-8 h-8 rounded-full bg-primary/20" />
              <div className="text-body-sm font-bold">Local Gourmet Store</div>
            </div>
            <div className="space-y-6 flex-1">
              <ChatBubble variant="incoming">
                Hello! Can I order 2 dozen eggs and some milk for home delivery?
              </ChatBubble>
              <ChatBubble variant="outgoing">
                Absolutely! I've added those to your cart. Click here to confirm the
                delivery window: [Link]
              </ChatBubble>
              <ChatBubble variant="incoming">Awesome, confirmed!</ChatBubble>
            </div>
          </PhoneMockup>
        </div>

        <div>
          <h2 className="font-display text-h2 mb-10">
            Conversational Commerce, <span className="text-primary">Automated</span>
          </h2>
          <ul className="space-y-6">
            {features.map(({ icon: Icon, title, body }) => (
              <li key={title} className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-display text-h3 text-on-surface mb-1">{title}</h4>
                  <p className="text-on-surface-variant">{body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
