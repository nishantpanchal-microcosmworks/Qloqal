import Seo from '../components/seo/Seo';
import Section from '../components/ui/Section';
import SectionHeader from '../components/sections/SectionHeader';
import Container from '../components/ui/Container';
import PhoneMockup, { NearbyShopsScreen, OrderTrackingScreen } from '../components/sections/PhoneMockup';
import FAQAccordion from '../components/sections/FAQAccordion';
import { faqs } from '../data/faqs';
import { Pin, Tag, Activity, Wallet } from 'lucide-react';
import Badge from '../components/ui/Badge';
import { cta } from '../lib/analytics';

const features = [
  {
    icon: Pin,
    title: 'Find what is actually near you',
    desc: 'Open the app, see real shops on your street — sorted by distance, not by who paid more.',
  },
  {
    icon: Tag,
    title: 'Real shops, real prices',
    desc: 'No platform markup games. The price you see is the price the shop sets.',
  },
  {
    icon: Activity,
    title: 'Track every order in real time',
    desc: 'Live status updates from accepted to ready to delivered. No guessing.',
  },
  {
    icon: Wallet,
    title: 'Pay any way you like',
    desc: 'Cards, popular wallets, instant bank transfer. Secure checkout, in seconds.',
  },
];

const customerFaqs = faqs.find((g) => g.group === 'Customers')?.items ?? [];

export default function Customers() {
  return (
    <>
      <Seo
        title="Order from local shops near you — Qloqal app"
        description="Discover and order from real neighbourhood shops in seconds. Live tracking, fair prices, secure payments."
        canonical="/customers"
      />

      <section className="bg-gradient-to-br from-brand-blue-soft via-white to-brand-green-soft">
        <Container>
          <div className="grid gap-10 py-16 lg:grid-cols-2 lg:items-center lg:py-20">
            <div>
              <Badge tone="blue">For customers</Badge>
              <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
                Order from your favourite local shops in seconds.
              </h1>
              <p className="mt-5 max-w-xl text-lg text-muted">
                Real shops on your street. Real prices. Live order tracking. Free to use, always.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://www.apple.com/app-store/"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta={cta.appStoreApple}
                  className="inline-flex items-center gap-2 rounded-xl bg-ink px-5 py-3 text-sm font-semibold text-white hover:bg-ink/90"
                >
                  <span>🍎</span> App Store
                </a>
                <a
                  href="https://play.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta={cta.appStoreGoogle}
                  className="inline-flex items-center gap-2 rounded-xl bg-ink px-5 py-3 text-sm font-semibold text-white hover:bg-ink/90"
                >
                  <span>▶</span> Google Play
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <PhoneMockup>
                <NearbyShopsScreen />
              </PhoneMockup>
              <PhoneMockup>
                <OrderTrackingScreen />
              </PhoneMockup>
            </div>
          </div>
        </Container>
      </section>

      <Section tone="white">
        <SectionHeader title="Why people use Qloqal." />
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {features.map((f, i) => (
            <div key={i} className="rounded-2xl bg-white p-6 shadow-soft">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand-green-soft text-brand-green-dark">
                <f.icon size={22} />
              </div>
              <h3 className="mt-4 text-lg font-bold text-ink">{f.title}</h3>
              <p className="mt-1 text-sm text-muted">{f.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="surface">
        <SectionHeader title="Quick answers." />
        <div className="mx-auto mt-10 max-w-3xl">
          <FAQAccordion items={customerFaqs} />
        </div>
      </Section>
    </>
  );
}
