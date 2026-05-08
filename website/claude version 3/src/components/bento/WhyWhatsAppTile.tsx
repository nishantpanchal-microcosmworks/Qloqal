import { BentoTile } from "@/components/ui/BentoTile";
import { WHY_WHATSAPP } from "@/data/whyWhatsApp";
import { MessageSquare, Smile, Camera, UserCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  MessageSquare,
  Smile,
  Camera,
  UserCheck,
};

export function WhyWhatsAppTile() {
  return (
    <BentoTile tone="paper" span="lg:col-span-7" className="flex flex-col gap-5">
      <div>
        <span className="kicker">why a chat</span>
        <h2 className="font-display text-2xl lg:text-3xl mt-2 leading-snug">
          Because the form{" "}
          <span className="ink-italic text-[var(--color-primary)]">isn’t the shop.</span>
        </h2>
      </div>
      <ul className="grid sm:grid-cols-2 gap-4">
        {WHY_WHATSAPP.map((reason) => {
          const Icon = iconMap[reason.icon] ?? MessageSquare;
          return (
            <li key={reason.title} className="flex gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[var(--color-outline-variant)] text-[var(--color-primary)] bg-[var(--color-surface-container-lowest)]">
                <Icon size={18} />
              </span>
              <div>
                <h3 className="font-display text-base leading-snug">{reason.title}</h3>
                <p className="text-sm text-[var(--color-on-surface-variant)] leading-relaxed mt-1">{reason.body}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </BentoTile>
  );
}
