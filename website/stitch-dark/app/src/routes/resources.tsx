import { createFileRoute } from "@tanstack/react-router";
import { Helmet } from "react-helmet-async";
import { ResourcesFeatured } from "@/components/sections/ResourcesFeatured";
import { ResourcesGrid } from "@/components/sections/ResourcesGrid";
import { ResourcesNewsletter } from "@/components/sections/ResourcesNewsletter";

function Resources() {
  return (
    <>
      <Helmet>
        <title>Resources | Qloqal</title>
        <meta
          name="description"
          content="How-to guides, product updates, and expert insights on conversational commerce and WhatsApp automation."
        />
      </Helmet>
      <ResourcesFeatured />
      <ResourcesGrid />
      <ResourcesNewsletter />
    </>
  );
}

export const Route = createFileRoute("/resources")({
  component: Resources,
});
