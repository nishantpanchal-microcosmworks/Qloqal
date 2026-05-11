import { useState } from "react";
import { Search, ArrowUpRight, ChevronRight, Sparkles } from "lucide-react";
import { Container } from "@/components/primitives/Container";
import { GlassCard } from "@/components/primitives/GlassCard";
import { resourceCards, resourceCategories } from "@/data/resources";
import { cn } from "@/lib/utils";

export function ResourcesGrid() {
  const [activeCategory, setActiveCategory] = useState(resourceCategories[0]);

  return (
    <Container className="mb-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
        <div className="relative flex-1 max-w-xl">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-outline"
          />
          <input
            type="text"
            placeholder="Search guides, updates, and articles..."
            className="w-full bg-surface-container-low border border-outline/20 rounded-xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-primary focus:border-transparent text-on-surface placeholder:text-on-surface-variant/50 transition-all text-body-md"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {resourceCategories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setActiveCategory(c)}
              className={cn(
                "px-4 py-2 rounded-full text-button transition-colors",
                activeCategory === c
                  ? "bg-primary !text-black"
                  : "bg-surface-container-high text-on-surface-variant hover:bg-surface-variant",
              )}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Large featured card */}
        <GlassCard
          as="article"
          className="md:col-span-8 group glow-hover transition-all cursor-pointer overflow-hidden"
        >
          <div className="aspect-[16/9] bg-gradient-to-br from-primary/10 via-secondary/5 to-surface-container-high flex items-center justify-center">
            <Sparkles size={64} className="text-primary/40" />
          </div>
          <div className="p-10">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-primary text-label-caps uppercase">{resourceCards[0].category}</span>
              <span className="text-on-surface-variant text-body-sm">{resourceCards[0].meta}</span>
            </div>
            <h2 className="font-display text-h2 mb-4 text-on-surface">
              {resourceCards[0].title}
            </h2>
            <p className="text-on-surface-variant text-body-md mb-6">
              {resourceCards[0].description}
            </p>
            <div className="flex items-center gap-2 text-primary text-button">
              Read Guide <ChevronRight size={16} />
            </div>
          </div>
        </GlassCard>

        {/* Product update card */}
        <GlassCard
          as="article"
          className="md:col-span-4 p-10 glow-hover transition-all flex flex-col justify-between"
        >
          <div>
            <span className="text-secondary text-label-caps uppercase mb-4 block">
              {resourceCards[1].category}
            </span>
            <h3 className="font-display text-h3 mb-4 text-on-surface">
              {resourceCards[1].title}
            </h3>
            <p className="text-on-surface-variant text-body-md">
              {resourceCards[1].description}
            </p>
          </div>
          <div className="mt-10 pt-10 border-t border-white/10 flex items-center justify-between">
            <span className="text-on-surface-variant text-body-sm">{resourceCards[1].meta}</span>
            <ArrowUpRight size={20} className="text-primary" />
          </div>
        </GlassCard>

        {/* Image card */}
        <GlassCard
          as="article"
          className="md:col-span-4 glow-hover transition-all cursor-pointer overflow-hidden"
        >
          <div className="aspect-square bg-gradient-to-br from-surface-container-high to-primary/10 flex items-center justify-center">
            <Sparkles size={48} className="text-primary/40" />
          </div>
          <div className="p-6">
            <span className="text-primary text-label-caps uppercase mb-2 block">
              {resourceCards[2].category}
            </span>
            <h3 className="font-display text-h3 mb-4 text-on-surface">
              {resourceCards[2].title}
            </h3>
            <p className="text-on-surface-variant text-body-sm">
              {resourceCards[2].description}
            </p>
          </div>
        </GlassCard>

        {/* Expert insight */}
        <GlassCard
          as="article"
          className="md:col-span-4 p-10 glow-hover transition-all flex flex-col justify-between"
        >
          <div>
            <span className="text-secondary text-label-caps uppercase mb-4 block">
              {resourceCards[3].category}
            </span>
            <h3 className="font-display text-h3 mb-4 text-on-surface">
              {resourceCards[3].title}
            </h3>
            <p className="text-on-surface-variant text-body-md">
              {resourceCards[3].description}
            </p>
          </div>
          <div className="mt-10 flex -space-x-2">
            <div className="w-8 h-8 rounded-full border-2 border-surface-container bg-surface-bright flex items-center justify-center text-[10px] font-bold">
              JD
            </div>
            <div className="w-8 h-8 rounded-full border-2 border-surface-container bg-primary text-on-primary flex items-center justify-center text-[10px] font-bold">
              AK
            </div>
          </div>
        </GlassCard>

        {/* Template library */}
        <GlassCard
          as="article"
          className="md:col-span-4 glow-hover transition-all overflow-hidden"
        >
          <div className="p-10 bg-gradient-to-br from-primary/10 to-transparent h-full flex flex-col">
            <Sparkles size={40} className="text-primary mb-4" />
            <h3 className="font-display text-h3 mb-4 text-on-surface">
              {resourceCards[4].title}
            </h3>
            <p className="text-on-surface-variant text-body-md mb-10">
              {resourceCards[4].description}
            </p>
            <button
              type="button"
              className="mt-auto w-full border border-primary/50 text-primary py-2 rounded-md text-button hover:bg-primary/10 transition-colors"
            >
              Browse Templates
            </button>
          </div>
        </GlassCard>
      </div>
    </Container>
  );
}
