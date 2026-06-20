import { SiteLayout, PageHeader } from "@/components/site/Layout";
import { About } from "@/components/site/sections/About";
import { JsonLd } from "@/components/site/JsonLd";
import { breadcrumbJsonLd } from "@/lib/structured-data";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "About ZEGORA — Licensed Ethiopian Employment Agency",
  description:
    "Learn about ZEGORA Foreign Employment Agency — a pioneer Ethiopian recruitment company in Addis Ababa with 20+ years of ethical overseas placement for Gulf and European employers.",
  path: "/about",
  keywords: [
    "about Zegora agency",
    "Zegora company Ethiopia",
    "licensed recruitment agency Addis Ababa",
  ],
  ogTitle: "About ZEGORA — Ethiopian Foreign Employment Agency",
  ogDescription:
    "20+ years of trusted overseas recruitment. Meet the Zegora agency team behind Ethiopia's leading employment placements.",
});

export default function AboutPage() {
  return (
    <SiteLayout>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <PageHeader
        eyebrow="About Us"
        title="ZEGORA — Your Trusted Ethiopian Employment Agency"
        subtitle="ZEGORA Foreign Employment Agency is dedicated to connecting skilled Ethiopian professionals with rewarding career opportunities around the world."
      />
      <About />
    </SiteLayout>
  );
}
