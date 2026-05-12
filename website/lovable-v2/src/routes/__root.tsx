import { QueryClient } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
} from "@tanstack/react-router";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BottomTabs } from "@/components/BottomTabs";
import { FloatingPill } from "@/components/FloatingPill";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-background container-pad">
      <div className="max-w-md text-center">
        <div className="mx-auto h-24 w-24 rounded-md bg-brand-green flex items-center justify-center font-display font-extrabold text-4xl text-ink">404</div>
        <h2 className="mt-6 font-display text-2xl font-semibold text-ink">We couldn't find that page</h2>
        <p className="mt-2 text-muted-ink">The link may be broken or the page may have moved.</p>
        <Link to="/" className="mt-6 inline-flex items-center rounded-md bg-ink text-white px-5 py-3 font-semibold">Back home</Link>
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
        <h1 className="font-display text-2xl font-semibold text-ink">This page didn't load</h1>
        <p className="mt-2 text-muted-ink">Try refreshing or head back home.</p>
        <div className="mt-6 flex justify-center gap-3">
          <button onClick={() => { router.invalidate(); reset(); }} className="rounded-md bg-ink text-white px-5 py-3 font-semibold">Try again</button>
          <a href="/" className="rounded-md border border-border px-5 py-3 font-semibold text-ink">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootComponent() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 pb-24 md:pb-0">
        <Outlet />
      </main>
      <Footer />
      <BottomTabs />
      <FloatingPill />
    </div>
  );
}
