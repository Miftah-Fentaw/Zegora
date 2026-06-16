import type { Metadata } from "next";
import { SiteLayout, PageHeader } from "@/components/site/Layout";
import { Services } from "@/components/site/sections/Services";

export const metadata: Metadata = {
  title: "Our Services — ZEGORA Foreign Employment Agency",
  description:
    "Overseas recruitment, employer partnerships, workforce solutions, documentation guidance and international placement support.",
  openGraph: {
    title: "Our Services — ZEGORA",
    description: "Comprehensive recruitment solutions.",
    url: "https://zegora-foreign-employment-agent-et.lovable.app/services",
  },
  alternates: {
    canonical: "https://zegora-foreign-employment-agent-et.lovable.app/services",
  },
};

export default function ServicesPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Our Services"
        title="Comprehensive Recruitment Solutions"
        subtitle="End-to-end support for employers and job seekers — from sourcing to deployment."
      />
      <Services />
    </SiteLayout>
  );
}
