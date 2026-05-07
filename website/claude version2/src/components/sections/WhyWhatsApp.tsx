import { MessageCircle, Smartphone, GraduationCap, Users, Battery, BellRing } from 'lucide-react';
import SectionHeader from './SectionHeader';

const reasons = [
  {
    icon: MessageCircle,
    accent: 'green' as const,
    title: 'Already in their hand',
    desc: 'Shop owners check WhatsApp dozens of times a day. Orders land where they are already looking.',
  },
  {
    icon: Smartphone,
    accent: 'blue' as const,
    title: 'No new device',
    desc: 'No tablet, no separate till, no battery to keep charged. The phone they own is the operating system.',
  },
  {
    icon: GraduationCap,
    accent: 'green' as const,
    title: 'Zero learning curve',
    desc: 'They already know the buttons. Reply, tap, send a photo. There is nothing new to teach.',
  },
  {
    icon: Users,
    accent: 'blue' as const,
    title: 'The whole shop can help',
    desc: 'Family-run businesses share access naturally. The phone gets passed around the way it always has.',
  },
  {
    icon: Battery,
    accent: 'green' as const,
    title: 'Works on any phone',
    desc: 'Low-end Android, old iPhone, slow connection — WhatsApp is built for this. So is Qloqal.',
  },
  {
    icon: BellRing,
    accent: 'blue' as const,
    title: 'Notifications they actually see',
    desc: 'No app fatigue. No silenced apps. WhatsApp pings, and they look — like always.',
  },
];

export default function WhyWhatsApp() {
  return (
    <div>
      <SectionHeader
        eyebrow="The moat"
        title="Why we built this on WhatsApp."
        subtitle="The boring truth: small business owners already live there. Meeting them where they are removes the #1 reason small shops never go online."
      />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {reasons.map((r, i) => (
          <div
            key={i}
            className={`rounded-2xl border-2 bg-white p-6 shadow-soft ${
              r.accent === 'green' ? 'border-brand-green/40' : 'border-brand-blue/30'
            }`}
          >
            <div
              className={`grid h-11 w-11 place-items-center rounded-xl ${
                r.accent === 'green' ? 'bg-brand-green-soft text-brand-green-dark' : 'bg-brand-blue-soft text-brand-blue'
              }`}
            >
              <r.icon size={22} />
            </div>
            <h3 className="mt-4 text-base font-bold text-ink">{r.title}</h3>
            <p className="mt-1 text-sm text-muted">{r.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
