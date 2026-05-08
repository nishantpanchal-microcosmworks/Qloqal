import SEO from "@/components/SEO";
import PageHeader from "@/components/layout/PageHeader";
import Section from "@/components/ui/Section";
import { cn } from "@/lib/cn";

const SECTIONS: { title: string; body: string[] }[] = [
  {
    title: "01. What we collect",
    body: [
      "Account: contact handle, name, role (vendor or customer), language preference.",
      "Vendor: shop name, category, hours, payout bank details, items listed.",
      "Customer: delivery address(es), order history, in-app preferences.",
      "Operational: device type, app version, crash diagnostics — never the contents of your camera, contacts, or other apps.",
    ],
  },
  {
    title: "02. What we don't collect",
    body: [
      "We do not read or store your private WhatsApp chats.",
      "We do not share or sell your contact info to advertisers.",
      "We do not track your location when you are not using the app.",
    ],
  },
  {
    title: "03. How we use it",
    body: [
      "To route an order between a customer and a vendor.",
      "To collect payment, run refunds, and pay out vendors.",
      "To improve the product (aggregated, anonymised metrics only).",
    ],
  },
  {
    title: "04. Who sees it",
    body: [
      "You and Qloqal employees who need to operate the service.",
      "Our payments and delivery partners — only the parts they need to do their job.",
      "Authorities, only when legally required.",
    ],
  },
  {
    title: "05. Your rights",
    body: [
      "Export a copy of your data, in machine-readable form.",
      "Correct or delete your data — for closed accounts, within 30 days.",
      "Object to specific processing; we'll explain what we can and can't change.",
    ],
  },
  {
    title: "06. Contact",
    body: [
      "Email: privacy@qloqal.app",
      "Last updated: 2026-01",
      "[REPLACE WITH LEGAL · this is placeholder copy].",
    ],
  },
];

export default function Privacy() {
  return (
    <>
      <SEO
        title="Privacy · q*loqal"
        description="A plain-English privacy summary for Qloqal. What we collect, what we don't, who sees it, what your rights are."
        canonical="/privacy"
      />
      <PageHeader
        fileNo="FILE · PRIVACY-04"
        kicker="legal · plain english"
        title={<>Privacy</>}
        intro="A short, plain-English summary. The full legal version follows the same structure, in lawyer-flavoured prose."
        fill="paper-2"
      />

      <Section>
        <article className="mx-auto max-w-[680px]">
          {SECTIONS.map((s, i) => (
            <section
              key={s.title}
              className={cn(
                "mb-0 border-2 border-ink p-5 -mt-[2px]",
                i % 2 === 0 ? "bg-[var(--color-paper)]" : "bg-[var(--color-paper-3)]",
              )}
            >
              <h2 className="text-[16px] font-bold uppercase tracking-wider">
                {s.title}
              </h2>
              <ul className="mt-2 flex flex-col gap-2">
                {s.body.map((p) => (
                  <li
                    key={p}
                    className="border-l-2 border-ink pl-3 text-[13px] leading-relaxed"
                  >
                    {p}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </article>
      </Section>
    </>
  );
}
