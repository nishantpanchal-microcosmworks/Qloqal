import { Shield, MessageCircle, Smartphone } from 'lucide-react';

const items = [
  { icon: MessageCircle, label: 'Powered by WhatsApp Business' },
  { icon: Shield, label: 'Secure payments built in' },
  { icon: Smartphone, label: 'Works on any smartphone' },
];

export default function TrustStrip() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
      {items.map((it, i) => (
        <div key={i} className="flex items-center gap-2 text-sm font-semibold text-muted">
          <it.icon size={18} className="text-brand-green-dark" />
          {it.label}
        </div>
      ))}
    </div>
  );
}
