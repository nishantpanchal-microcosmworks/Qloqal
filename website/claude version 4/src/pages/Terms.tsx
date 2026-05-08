import SEO from "@/components/SEO";
import PageHeader from "@/components/layout/PageHeader";
import Section from "@/components/ui/Section";
import { cn } from "@/lib/cn";

const SECTIONS: { title: string; body: string[] }[] = [
  {
    title: "01. Who's who",
    body: [
      "\"Qloqal\", \"we\", \"us\" — the company providing the service.",
      "\"Vendor\" — a small business listed on Qloqal.",
      "\"Customer\" — a person ordering from a vendor.",
      "By using the service, you agree to these terms.",
    ],
  },
  {
    title: "02. Listing & content",
    body: [
      "You're responsible for the accuracy of your listings — items, prices, hours.",
      "Don't list items that are illegal in your jurisdiction.",
      "Don't impersonate another business.",
    ],
  },
  {
    title: "03. Orders & payment",
    body: [
      "An accepted order is a sale. Refunds run via the original payment method.",
      "Vendors receive payouts on T+1 to the bank account on file.",
      "Qloqal takes 5% on delivered orders under the Per-order plan.",
    ],
  },
  {
    title: "04. Acceptable use",
    body: [
      "Don't abuse, harass, or threaten other users.",
      "Don't try to extract data from the platform via scrapers.",
      "Don't try to impersonate Qloqal employees.",
    ],
  },
  {
    title: "05. Closing the account",
    body: [
      "Vendors may close their shop at any time from their phone.",
      "Customers may delete the account from the app.",
      "We may suspend accounts that violate these terms.",
    ],
  },
  {
    title: "06. Limitation",
    body: [
      "Service is provided as-is. No warranty beyond what is required by law.",
      "Liability is limited to fees paid in the prior 12 months.",
      "[REPLACE WITH LEGAL · this is placeholder copy].",
    ],
  },
];

export default function Terms() {
  return (
    <>
      <SEO
        title="Terms · q*loqal"
        description="Plain-English summary of the Qloqal terms of service for vendors and customers."
        canonical="/terms"
      />
      <PageHeader
        fileNo="FILE · TERMS-04"
        kicker="legal · plain english"
        title={<>Terms</>}
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
