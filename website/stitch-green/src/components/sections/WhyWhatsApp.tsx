import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { WHY_WHATSAPP } from "@/data/whyWhatsApp";
import { cn } from "@/lib/cn";

type Props = {
  inverse?: boolean;
};

export function WhyWhatsApp({ inverse = false }: Props) {
  return (
    <Section bg={inverse ? "inverse" : "bright"}>
      <Container>
        <div className="flex flex-col gap-16 md:flex-row md:gap-20">
          <div className="md:w-1/2">
            <div className="md:sticky md:top-32">
              <div className="mx-auto max-w-[320px]">
                <div className="rounded-[40px] border-8 border-white bg-[var(--color-whatsapp)] p-6 card-shadow">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-white/30" />
                    <div className="h-3 w-24 rounded-full bg-white/40" />
                  </div>
                  <div className="space-y-3">
                    <div className="max-w-[80%] rounded-2xl rounded-tl-none bg-white p-4 shadow-sm">
                      <p className="text-sm text-on-surface">
                        Hi! Can I order the organic honey today?
                      </p>
                    </div>
                    <div className="ml-auto max-w-[80%] rounded-2xl rounded-tr-none bg-[#dcf8c6] p-4 shadow-sm">
                      <p className="text-sm text-on-surface">
                        Sure! Here's the checkout link — pay and we'll have it
                        ready in 15.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2">
            <h2
              className={cn(
                "mb-10 text-3xl font-bold md:text-4xl",
                inverse ? "text-inverse-on-surface" : "text-on-surface",
              )}
            >
              Why WhatsApp?
            </h2>
            <div className="grid gap-8 sm:grid-cols-2">
              {WHY_WHATSAPP.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <span
                    className={cn(
                      "material-symbols-outlined shrink-0",
                      inverse ? "text-primary-container" : "text-primary",
                    )}
                    style={{ fontSize: 28 }}
                    aria-hidden="true"
                  >
                    {item.icon}
                  </span>
                  <div>
                    <h4
                      className={cn(
                        "mb-1 text-lg font-bold",
                        inverse ? "text-inverse-on-surface" : "text-on-surface",
                      )}
                    >
                      {item.title}
                    </h4>
                    <p
                      className={cn(
                        "text-sm leading-relaxed",
                        inverse
                          ? "text-inverse-on-surface/80"
                          : "text-on-surface-variant",
                      )}
                    >
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
