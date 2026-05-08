export const SITE_URL = "https://qloqal.com";
export const SITE_NAME = "Qloqal";
export const DEFAULT_OG = "/og-image.svg";

export type PageMeta = {
  title: string;
  description: string;
  path: string;
};

export function buildCanonical(path: string) {
  return `${SITE_URL}${path === "/" ? "" : path}`;
}
