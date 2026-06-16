import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/Layout";
import { Countries } from "@/components/site/sections/Countries";

export const Route = createFileRoute("/countries")({
  head: () => ({
    meta: [
      { title: "Destination Countries — ZEGORA" },
      { name: "description", content: "Countries where ZEGORA places talent: Saudi Arabia, UAE, Qatar, Kuwait, Bahrain, Oman, Jordan, Germany, Poland and Romania." },
      { property: "og:title", content: "Destination Countries — ZEGORA" },
      { property: "og:description", content: "Trusted employer partnerships across the Gulf and Europe." },
      { property: "og:url", content: "https://zegora-foreign-employment-agent-et.lovable.app/countries" },
    ],
    links: [{ rel: "canonical", href: "https://zegora-foreign-employment-agent-et.lovable.app/countries" }],
  }),
  component: CountriesPage,
});

function CountriesPage() {
  return (
    <SiteLayout>
      <PageHeader eyebrow="Countries" title="Where We Place Talent" subtitle="Long-standing employer partnerships across the Gulf and Europe." />
      <Countries />
    </SiteLayout>
  );
}
