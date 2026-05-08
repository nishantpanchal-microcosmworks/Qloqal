import { BentoTile } from "@/components/ui/BentoTile";
import type { UseCase } from "@/data/useCases";
import { IMAGES } from "@/data/images";

export function UseCaseTile({ useCase, span }: { useCase: UseCase; span?: string }) {
  const img = IMAGES[useCase.imageId as keyof typeof IMAGES];
  return (
    <BentoTile tone="image" span={span} interactive className="p-0">
      <div className="relative h-44 sm:h-52 overflow-hidden">
        {img ? (
          <img
            src={img.url}
            alt={img.alt}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)]/45 via-[var(--color-ink)]/10 to-transparent" />
      </div>
      <div className="p-6">
        <span className="kicker text-[var(--color-mustard)]">{useCase.kicker}</span>
        <h3 className="font-display text-xl mt-2 leading-snug">{useCase.title}</h3>
        <p className="text-sm text-[var(--color-on-surface-variant)] mt-2 leading-relaxed">{useCase.body}</p>
      </div>
    </BentoTile>
  );
}
