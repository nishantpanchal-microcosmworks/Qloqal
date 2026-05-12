// Maps each env-driven brand color to BOTH:
//  - the source CSS variable defined in styles.css (`--brand-green`)
//  - the Tailwind theme token consumed by utilities (`--color-brand-green`)
// Setting both removes any uncertainty about how Tailwind v4's @theme inline
// resolves the chain at build time. Whichever reference is in the generated
// CSS, our runtime value wins.
const colorMap: Record<string, string | undefined> = {
  green: import.meta.env.VITE_BRAND_GREEN,
  "green-dark": import.meta.env.VITE_BRAND_GREEN_DARK,
  "green-soft": import.meta.env.VITE_BRAND_GREEN_SOFT,
  blue: import.meta.env.VITE_BRAND_BLUE,
  "blue-dark": import.meta.env.VITE_BRAND_BLUE_DARK,
  "blue-soft": import.meta.env.VITE_BRAND_BLUE_SOFT,
};

export function applyBrandColors() {
  const root = document.documentElement;
  const applied: Record<string, string> = {};
  for (const [name, value] of Object.entries(colorMap)) {
    if (!value) continue;
    root.style.setProperty(`--brand-${name}`, value);
    root.style.setProperty(`--color-brand-${name}`, value);
    applied[name] = value;
  }
  // Temporary diagnostic — remove once verified to work.
  console.log("[brand-colors] applied from env:", applied);
}
