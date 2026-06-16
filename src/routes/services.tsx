import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/Layout";
import { Services } from "@/components/site/sections/Services";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services — ZEGORA Foreign Employment Agency" },
      { name: "description", content: "Overseas recruitment, employer partnerships, workforce solutions, documentation guidance and international placement support." },
      { property: "og:title", content: "Our Services — ZEGORA" },
      { property: "og:description", content: "Comprehensive recruitment solutions." },
      { property: "og:url", content: "https://zegora-foreign-employment-agent-et.lovable.app/services" },
    ],
    links: [{ rel: "canonical", href: "https://zegora-foreign-employment-agent-et.lovable.app/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <SiteLayout>
      <PageHeader eyebrow="Our Services" title="Comprehensive Recruitment Solutions" subtitle="End-to-end support for employers and job seekers — from sourcing to deployment." />
      <Services />
    </SiteLayout>
  );
}
