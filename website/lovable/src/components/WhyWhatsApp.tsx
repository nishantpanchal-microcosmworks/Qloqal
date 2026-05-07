import { Bell, Smartphone, Users, GraduationCap, Wifi, MessageCircle } from "lucide-react";

const reasons = [
  { icon: MessageCircle, title: "They already check it all day", text: "Shop owners don't need a reason to open WhatsApp — they're already there.", accent: "green" },
  { icon: Smartphone, title: "No new device, no tablet", text: "Works on the same phone they already use. Nothing extra to buy.", accent: "blue" },
  { icon: Wifi, title: "Runs on any low-end Android", text: "If WhatsApp works, Qloqal works. No hardware requirements.", accent: "green" },
  { icon: Users, title: "Family-run shops can share access", text: "Whoever's at the counter sees the order. Same as how the shop already runs.", accent: "blue" },
  { icon: GraduationCap, title: "Zero learning curve", text: "Tap Accept. Tap Mark Ready. They already know the buttons.", accent: "green" },
  { icon: Bell, title: "Notifications they actually see", text: "Their phone is already pinging. Orders join the queue they already watch.", accent: "blue" },
];

export function WhyWhatsApp() {
  return (
    <section className="container-pad mx-auto max-w-7xl py-20">
      <div className="max-w-2xl">
        <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">The moat</span>
        <h2 className="mt-2 font-display font-extrabold text-ink text-3xl md:text-5xl leading-tight">Why we built this on WhatsApp</h2>
        <p className="mt-4 text-muted-ink text-lg">The #1 reason small shops never go online: <em>"I don't have time to learn a new app."</em> So we removed the new app.</p>
      </div>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {reasons.map(r => (
          <div key={r.title} className={[
            "rounded-2xl bg-white border-l-4 p-5 shadow-card",
            r.accent === "green" ? "border-brand-green" : "border-brand-blue",
          ].join(" ")}>
            <r.icon className={["h-6 w-6", r.accent === "green" ? "text-brand-green-dark" : "text-brand-blue"].join(" ")} />
            <h3 className="mt-3 font-display font-bold text-ink">{r.title}</h3>
            <p className="mt-1.5 text-sm text-muted-ink">{r.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
