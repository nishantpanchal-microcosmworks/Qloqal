import Seo from '../components/seo/Seo';
import Section from '../components/ui/Section';
import SectionHeader from '../components/sections/SectionHeader';
import CTABand from '../components/sections/CTABand';
import { Heart, Zap, Shield } from 'lucide-react';

const beliefs = [
  {
    icon: Heart,
    title: 'Local shops are the heart of every neighbourhood.',
    desc: 'They keep streets alive, employ neighbours, and know your name. Worth keeping online.',
  },
  {
    icon: Zap,
    title: 'Tools should fit the shopkeeper, not the other way around.',
    desc: 'Most marketplace tooling is built for big sellers. We built Qloqal for the smallest one.',
  },
  {
    icon: Shield,
    title: 'Operational simplicity beats feature checklists.',
    desc: 'Three taps in WhatsApp will outperform a fancy app the owner never opens.',
  },
];

export default function About() {
  return (
    <>
      <Seo
        title="About Qloqal — small businesses, made online"
        description="Qloqal puts neighbourhood businesses online without forcing them to change how they work. Built around WhatsApp because that is where shopkeepers already live."
        canonical="/about"
      />
      <Section tone="white">
        <SectionHeader eyebrow="About" title="Local shops, online — without forcing them to change." />
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-muted">
          Qloqal is the easiest way for any small business to start selling online. We built it on WhatsApp because that is the only tool every shopkeeper already uses, every day. The customer gets a clean app; the shop owner gets messages — the way they always have.
        </p>
      </Section>

      <Section tone="surface">
        <SectionHeader eyebrow="What we believe" title="Three principles that shape every decision." />
        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {beliefs.map((b, i) => (
            <div key={i} className="rounded-2xl bg-white p-6 shadow-soft">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand-green-soft text-brand-green-dark">
                <b.icon size={22} />
              </div>
              <h3 className="mt-4 text-lg font-bold text-ink">{b.title}</h3>
              <p className="mt-2 text-sm text-muted">{b.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="white">
        <SectionHeader eyebrow="From the founder" title="Why we are building this." />
        <div className="mx-auto mt-10 max-w-2xl rounded-2xl bg-white p-8 shadow-soft">
          <div className="flex items-center gap-4">
            <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-brand-blue-soft text-brand-blue font-display font-extrabold">
              N
            </div>
            <div>
              <p className="font-bold text-ink">Founder, Qloqal</p>
              <p className="text-xs text-muted">Building one thing at a time</p>
            </div>
          </div>
          <p className="mt-5 text-base text-ink">
            "Every neighbourhood has a few shops that everyone knows but nobody can find online. The tools made for big sellers are not made for them — too many steps, too much setup, too much to learn. We started Qloqal because the answer was always sitting on their phone: WhatsApp. The plan is simple — keep meeting them where they already are, and let the rest of us order from real local shops again."
          </p>
        </div>
      </Section>

      <CTABand />
    </>
  );
}
