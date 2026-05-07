import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TopNav } from "@/components/layout/TopNav";
import { Footer } from "@/components/layout/Footer";

function RootLayout() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <TopNav />
      <main id="main" className="pt-20">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export const Route = createRootRoute({
  component: RootLayout,
});
