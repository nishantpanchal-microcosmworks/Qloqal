import { useEffect, useRef, useState } from "react";
import SEO from "@/components/SEO";
import ChapterRail from "@/components/layout/ChapterRail";
import ChapterCover from "@/components/chapters/ChapterCover";
import ChapterThesis from "@/components/chapters/ChapterThesis";
import ChapterFlow from "@/components/chapters/ChapterFlow";
import ChapterSplit from "@/components/chapters/ChapterSplit";
import ChapterCategories from "@/components/chapters/ChapterCategories";
import ChapterWhyWhatsApp from "@/components/chapters/ChapterWhyWhatsApp";
import ChapterProof from "@/components/chapters/ChapterProof";
import ChapterPricing from "@/components/chapters/ChapterPricing";
import ChapterColophon from "@/components/chapters/ChapterColophon";
import { CHAPTERS } from "@/data/chapters";

const CHAPTER_COUNT = 9;

export default function Home() {
  const shellRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // Horizontal scroll mapping (desktop only)
  useEffect(() => {
    if (!isDesktop) return;
    const shell = shellRef.current;
    const track = trackRef.current;
    if (!shell || !track) return;

    const onScroll = () => {
      const rect = shell.getBoundingClientRect();
      const total = shell.offsetHeight - window.innerHeight;
      const progress = Math.min(
        Math.max(-rect.top / total, 0),
        1,
      );
      const trackWidth = track.scrollWidth;
      const translate = progress * (trackWidth - window.innerWidth);
      track.style.transform = `translate3d(${-translate}px, 0, 0)`;

      const chapter = Math.round(progress * (CHAPTER_COUNT - 1));
      setActive(chapter);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [isDesktop]);

  // mobile: track active chapter via IntersectionObserver
  useEffect(() => {
    if (isDesktop) return;
    const els = Array.from(
      document.querySelectorAll<HTMLElement>("[data-chapter-index]"),
    );
    if (els.length === 0) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = Number(e.target.getAttribute("data-chapter-index"));
            setActive(idx);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0.01 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [isDesktop]);

  const jumpTo = (index: number) => {
    if (isDesktop && shellRef.current) {
      const shell = shellRef.current;
      const total = shell.offsetHeight - window.innerHeight;
      const progress = index / (CHAPTER_COUNT - 1);
      const top = shell.offsetTop + progress * total;
      window.scrollTo({ top, behavior: "smooth" });
    } else {
      const target = document.querySelector(
        `[data-chapter-index="${index}"]`,
      ) as HTMLElement | null;
      target?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // shell height = (chapters) * 100vh on desktop, so vertical scroll maps to horizontal track
  const shellHeight = isDesktop ? `${CHAPTER_COUNT * 100}vh` : "auto";

  return (
    <>
      <SEO
        title="q*loqal — Run your shop on WhatsApp. No app. No tablet."
        description="Qloqal is a vendor operating system that hides inside WhatsApp. Customers order in the app, you take orders in chat. No vendor app. No tablet. No training."
        canonical="/"
      />
      <ChapterRail activeIndex={active} onJump={jumpTo} />

      <div
        ref={shellRef}
        className="h-scroll-shell"
        style={{ height: shellHeight }}
      >
        <div className="h-scroll-sticky">
          <div ref={trackRef} className="h-scroll-track">
            {CHAPTERS.map((c, i) => (
              <div
                key={c.id}
                className="h-scroll-chapter"
                data-chapter-index={i}
                data-chapter-id={c.id}
              >
                {i === 0 && <ChapterCover />}
                {i === 1 && <ChapterThesis />}
                {i === 2 && <ChapterFlow />}
                {i === 3 && <ChapterSplit />}
                {i === 4 && <ChapterCategories />}
                {i === 5 && <ChapterWhyWhatsApp />}
                {i === 6 && <ChapterProof />}
                {i === 7 && <ChapterPricing />}
                {i === 8 && <ChapterColophon />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
