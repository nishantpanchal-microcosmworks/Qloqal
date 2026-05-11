/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BRAND_GREEN?: string;
  readonly VITE_BRAND_GREEN_DARK?: string;
  readonly VITE_BRAND_GREEN_SOFT?: string;
  readonly VITE_BRAND_BLUE?: string;
  readonly VITE_BRAND_BLUE_DARK?: string;
  readonly VITE_BRAND_BLUE_SOFT?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
