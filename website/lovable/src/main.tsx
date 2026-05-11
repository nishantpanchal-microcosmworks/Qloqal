import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import { QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { getRouter } from "./router";
import { applyBrandColors } from "./lib/brand-colors";
import "./styles.css";

applyBrandColors();

const router = getRouter();
const queryClient = router.options.context!.queryClient;

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </HelmetProvider>
  </StrictMode>,
);
