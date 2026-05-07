import { ArrowRight, Heart } from 'lucide-react';
import { Seo } from '@/components/seo/Seo';
import { Hero } from '@/components/sections/Hero';
import { Section } from '@/components/ui/Section';
import { SectionHeader } from '@/components/sections/SectionHeader';
import { CTABand } from '@/components/sections/CTABand';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { LinkButton } from '@/components/ui/Button';
import { roadmap } from '@/data/roadmap';
import { cn } from '@/lib/utils';

export function About() {
  return (
    <>
      <Seo
        title="About Qloqal"
        description="We're building the marketplace kiranas actually want to use."
        path="/about"
      />

      <Hero
        title="We're building the marketplace kiranas actually want to use."
        subtitle="Local commerce shouldn't require local shops to learn new software. So we built Qloqal around the tool kiranas already use every single day — WhatsApp."
      />

      <Section bg="white">
        <div className="mx-auto max-w-3xl space-y-6 text-base leading-relaxed text-ink-700 md:text-lg">
          <p>
            For decades, kirana shops have been the heart of how Indian households actually buy
            their groceries, household goods, and daily essentials. Walk into any neighborhood and
            you will find a kirana that knows its customers by name, remembers their preferences,
            and quietly keeps a running ledger that puts modern apps to shame.
          </p>
          <p>
            And yet, every wave of "modern commerce" has tried to replace them — quick-commerce,
            dark stores, hyper-warehoused delivery — instead of empowering them. Qloqal exists
            because we believe the answer is the opposite. Local commerce should be powered by
            local shops, not against them.
          </p>
          <p>
            The unlock is simple: we meet kiranas where they already are. WhatsApp is on every
            kirana owner's phone. Orders arrive there. Stock updates happen there. No new app, no
            training, no friction. On the shopper side, a clean modern app lets you find every
            kirana around you, in seconds.
          </p>
        </div>
      </Section>

      <Section bg="ink">
        <Card variant="brand" className="mx-auto max-w-3xl">
          <Badge variant="brand">For the curious</Badge>
          <h3 className="mt-4 font-display text-2xl font-bold text-ink-900 md:text-3xl">
            What is a kirana?
          </h3>
          <p className="mt-3 text-base leading-relaxed text-ink-700 md:text-lg">
            A kirana is a small, family-run neighborhood shop — the heart of Indian retail. There
            are over 12 million of them across India, and they serve nearly every household in the
            country. Some sell groceries, some general goods, some both. They're independent,
            personal, and woven into the daily life of their neighborhoods.
          </p>
        </Card>
      </Section>

      <Section bg="white">
        <SectionHeader
          eyebrow="Our roadmap"
          title="Where we are. Where we're going."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {roadmap.map((p) => (
            <Card
              key={p.phase}
              variant={p.status === 'now' ? 'brand' : 'default'}
              className={cn('h-full')}
            >
              <div className="flex items-center gap-2">
                <Badge
                  variant={
                    p.status === 'now' ? 'success' : p.status === 'next' ? 'brand' : 'neutral'
                  }
                >
                  {p.status === 'now' ? 'In progress' : p.status === 'next' ? 'Up next' : 'Later'}
                </Badge>
              </div>
              <div className="mt-4 font-display text-sm font-bold uppercase tracking-wider text-ink-500">
                {p.phase}
              </div>
              <h3 className="mt-1 font-display text-xl font-bold text-ink-900">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-700">{p.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section bg="ink">
        <SectionHeader
          eyebrow="Team"
          title="A small team. A clear mission."
          subtitle="More about us as we grow. For now — talk to a real human any time."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3 md:items-stretch">
          <Card variant="default" className="text-center">
            <div className="mx-auto inline-flex h-20 w-20 items-center justify-center rounded-full gradient-brand text-3xl font-extrabold text-white">
              Q
            </div>
            <h3 className="mt-5 font-display text-lg font-bold text-ink-900">Founding team</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-700">
              Builders who believe the next generation of commerce doesn't replace local shops — it
              empowers them.
            </p>
          </Card>
          <Card variant="default" className="text-center md:col-span-2">
            <Heart size={28} className="mx-auto text-accent-500" />
            <h3 className="mt-5 font-display text-lg font-bold text-ink-900">Built with care</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-700">
              We obsess over the small things — fast pages, simple WhatsApp messages, fair pricing.
              If something feels off, write to us. We listen.
            </p>
          </Card>
        </div>
      </Section>

      <CTABand
        title="Want to chat with the team?"
        subtitle="Press, partnerships, or just hello — we read every message."
        actions={
          <LinkButton to="/contact" variant="white" size="lg">
            Get in touch
            <ArrowRight size={18} />
          </LinkButton>
        }
      />
    </>
  );
}
