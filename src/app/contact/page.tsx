import { SiteLayout, PageHeader } from "@/components/site/Layout";
import { Contact } from "@/components/site/sections/Contact";
import { MapSection } from "@/components/site/sections/MapSection";
import { JsonLd } from "@/components/site/JsonLd";
import { breadcrumbJsonLd } from "@/lib/structured-data";
import { createPageMetadata, SITE } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Contact Zegora — Private Employment Agent, Addis Ababa",
  description: `Contact ${SITE.name}: +251 11 558 0901, ${SITE.email}, WhatsApp +251 901 918 658. Visit us at Yeha City Center, Stadium, Addis Ababa.`,
  path: "/contact",
  keywords: [
    "Zegora contact",
    "Zegora agency phone number",
    "employment agent Addis Ababa address",
    "Zegora office location",
  ],
  ogTitle: "Contact Zegora — Addis Ababa, Ethiopia",
  ogDescription:
    "Reach Zegora Foreign Private Employment Agent by phone, email, WhatsApp or visit our Addis Ababa office.",
});

export default function ContactPage() {
  return (
    <SiteLayout>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <PageHeader
        eyebrow="Contact"
        title="Contact Zegora Foreign Private Employment Agent"
        subtitle="We're happy to answer your questions about overseas employment, partnerships and our recruitment process."
      />
      <Contact />
      <MapSection />
    </SiteLayout>
  );
}
