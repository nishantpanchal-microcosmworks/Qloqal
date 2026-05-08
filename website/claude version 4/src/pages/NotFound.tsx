import SEO from "@/components/SEO";
import Section from "@/components/ui/Section";
import KickerLabel from "@/components/ui/KickerLabel";
import Stamp from "@/components/ui/Stamp";
import Highlight from "@/components/ui/Highlight";
import Button from "@/components/ui/Button";

const ASCII_ART = `
   _____
  |     |
  | 4 0 |
  | 0   |
  |_____|
`;

export default function NotFound() {
  return (
    <>
      <SEO
        title="Not found · q*loqal"
        description="The page you were after isn't in our index."
        canonical="/404"
      />
      <Section className="bg-[var(--color-paper)]">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="flex flex-wrap items-center gap-2">
              <Stamp tone="ink">ERROR · 404</Stamp>
              <KickerLabel tone="mute">route not in index</KickerLabel>
            </div>
            <h1 className="mt-4 font-mono text-[44px] leading-[1] md:text-[88px]">
              <Highlight tone="yellow">Page not found.</Highlight>
              <br />
              Probably never was.
            </h1>
            <p className="mt-4 max-w-[60ch] text-[13px] text-[var(--color-ink-2)] md:text-[15px]">
              We couldn't match this URL to anything in the build. If you got
              here from a link on Qloqal itself, please tell us — that's a bug,
              not a feature.
            </p>
            <div className="mt-6 flex gap-2">
              <Button to="/" variant="primary" size="lg" data-cta="404-home">
                Back home
              </Button>
              <Button to="/contact" variant="secondary" size="lg" data-cta="404-contact">
                Tell us
              </Button>
            </div>
          </div>
          <div className="md:col-span-5">
            <pre
              className="border-2 border-ink bg-[var(--color-ink)] p-6 font-mono text-[14px] leading-tight text-[var(--color-signal-green)] shadow-[6px_6px_0_var(--color-ink)]"
              aria-hidden
            >
              {ASCII_ART}
              {"\n"}---{"\n"}
              {"  >> route_not_found"}
              {"\n"}
              {"  >> see /sitemap"}
              {"\n"}
              {"  >> back: /"}
            </pre>
          </div>
        </div>
      </Section>
    </>
  );
}
