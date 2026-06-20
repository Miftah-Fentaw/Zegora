import { SiteLayout, PageHeader } from "@/components/site/Layout";
import { Services } from "@/components/site/sections/Services";
import { JsonLd } from "@/components/site/JsonLd";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/structured-data";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Overseas Recruitment Services — ZEGORA Ethiopia",
  description:
    "ZEGORA agency services: overseas recruitment, employer partnerships, workforce solutions, visa documentation and international placement for Ethiopian workers and Gulf employers.",
  path: "/services",
  keywords: [
    "overseas recruitment Ethiopia",
    "manpower supply services",
    "Zegora recruitment services",
    "employment agency services Addis Ababa",
  ],
  ogTitle: "ZEGORA Recruitment Services — Ethiopian Employment Agency",
  ogDescription: "Full-service foreign employment solutions from Ethiopia's trusted Zegora agency.",
});

export default function ServicesPage() {
  return (
    <SiteLayout>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
          serviceJsonLd(),
        ]}
      />
      <PageHeader
        eyebrow="Our Services"
        title="Comprehensive Recruitment Solutions"
        subtitle="End-to-end support for employers and job seekers — from sourcing Ethiopian talent to overseas deployment."
      />
      <Services />
    </SiteLayout>
  );
}
