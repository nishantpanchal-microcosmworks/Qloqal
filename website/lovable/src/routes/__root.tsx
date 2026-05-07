import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { HelmetProvider } from "react-helmet-async";

import appCss from "../styles.css?url";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-background container-pad">
      <div className="max-w-md text-center">
        <div className="mx-auto h-24 w-24 rounded-3xl bg-brand-green flex items-center justify-center font-display font-extrabold text-4xl text-ink">404</div>
        <h2 className="mt-6 font-display text-2xl font-extrabold text-ink">We couldn't find that page</h2>
        <p className="mt-2 text-muted-ink">The link may be broken or the page may have moved.</p>
        <Link to="/" className="mt-6 inline-flex items-center rounded-xl bg-brand-green px-5 py-3 font-semibold text-ink">Back home</Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-[70vh] items-center justify-center container-pad">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl font-extrabold text-ink">This page didn't load</h1>
        <p className="mt-2 text-muted-ink">Try refreshing or head back home.</p>
        <div className="mt-6 flex justify-center gap-3">
          <button onClick={() => { router.invalidate(); reset(); }} className="rounded-xl bg-brand-green px-5 py-3 font-semibold text-ink">Try again</button>
          <a href="/" className="rounded-xl border-2 border-brand-blue px-5 py-3 font-semibold text-brand-blue">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#47E865" },
      { title: "Qloqal — Run your shop on WhatsApp" },
      { name: "description", content: "Qloqal turns any small business into an online shop. Customers order in the app; you take orders right on WhatsApp. No vendor app, no tablet, no training." },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1 pb-24 md:pb-0">
            <Outlet />
          </main>
          <Footer />
          <StickyMobileCTA />
        </div>
      </QueryClientProvider>
    </HelmetProvider>
  );
}
