import { SiteLayout, PageHeader } from "@/components/site/Layout";
import { Countries } from "@/components/site/sections/Countries";
import { JsonLd } from "@/components/site/JsonLd";
import { breadcrumbJsonLd } from "@/lib/structured-data";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Gulf & Europe Jobs — Countries ZEGORA Places Ethiopian Workers",
  description:
    "ZEGORA agency places Ethiopian workers in Saudi Arabia, UAE, Qatar, Kuwait, Bahrain, Oman, Jordan, Germany, Poland and Romania. Trusted overseas employment destinations.",
  path: "/countries",
  keywords: [
    "Gulf jobs for Ethiopians",
    "Saudi Arabia jobs Ethiopia Zegora",
    "UAE employment agency Ethiopia",
    "European jobs Ethiopia",
    "overseas work destinations",
  ],
  ogTitle: "Destination Countries — ZEGORA Ethiopian Employment Agency",
  ogDescription:
    "Where Zegora agency places Ethiopian talent — Gulf and European employer partnerships.",
});

export default function CountriesPage() {
  return (
    <SiteLayout>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Countries", path: "/countries" },
        ])}
      />
      <PageHeader
        eyebrow="Countries"
        title="Where ZEGORA Places Ethiopian Talent"
        subtitle="Long-standing employer partnerships across the Gulf and Europe."
      />
      <Countries />
    </SiteLayout>
  );
}
