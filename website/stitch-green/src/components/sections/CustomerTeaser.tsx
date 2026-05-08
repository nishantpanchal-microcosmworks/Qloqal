import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export function CustomerTeaser() {
  return (
    <Section bg="lowest">
      <Container>
        <div className="overflow-hidden rounded-[48px] bg-secondary/5 p-10 md:p-20">
          <div className="flex flex-col items-center gap-12 md:flex-row md:items-center md:gap-20">
            <div className="md:w-1/2">
              <h2 className="text-4xl font-extrabold md:text-5xl">
                Delight your customers.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-on-surface-variant">
                Give your customers a frictionless shopping experience. No
                passwords to remember, no apps to install. Just a simple link, a
                beautiful catalog, and a checkout that works right in their
                favorite chat app.
              </p>
              <div className="mt-10">
                <Button to="/customers" variant="primary" size="lg">
                  Explore customer experience
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative mx-auto aspect-[3/4] max-w-xs rounded-[32px] bg-gradient-to-br from-secondary to-primary p-1.5 card-shadow">
                <div className="flex h-full w-full flex-col rounded-[28px] bg-surface-container-lowest p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-xs font-semibold text-on-surface-variant">
                      Today's order
                    </span>
                    <span className="text-xs text-secondary">●  Live</span>
                  </div>
                  <div className="flex flex-1 flex-col gap-3">
                    <div className="rounded-2xl bg-surface-container-low p-4">
                      <p className="text-sm font-semibold">Sourdough loaf</p>
                      <p className="text-xs text-on-surface-variant">
                        Sweet Bakes · 0.4 mi away
                      </p>
                    </div>
                    <div className="rounded-2xl bg-surface-container-low p-4">
                      <p className="text-sm font-semibold">Cold brew · 16oz</p>
                      <p className="text-xs text-on-surface-variant">
                        Sweet Bakes · 0.4 mi away
                      </p>
                    </div>
                    <div className="mt-auto rounded-2xl bg-primary p-4 text-on-primary">
                      <p className="text-xs uppercase tracking-wider opacity-80">
                        Delivery in
                      </p>
                      <p className="text-2xl font-extrabold">12 min</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
