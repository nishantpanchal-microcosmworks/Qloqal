import { BentoTile } from "@/components/ui/BentoTile";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { HOME_FAQS } from "@/data/faqs";

export function FAQTile() {
  return (
    <BentoTile tone="paper" span="lg:col-span-7" className="flex flex-col gap-3">
      <div className="flex items-end justify-between gap-4 flex-wrap">
        <div>
          <span className="kicker">small questions, real answers</span>
          <h2 className="font-display text-2xl lg:text-3xl mt-2 leading-snug">Hello, you might be wondering…</h2>
        </div>
        <Button to="/faq" variant="ghost" size="sm">
          All questions →
        </Button>
      </div>
      <Accordion items={HOME_FAQS} />
    </BentoTile>
  );
}
