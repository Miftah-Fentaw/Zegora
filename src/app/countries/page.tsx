import type { Metadata } from "next";
import { SiteLayout, PageHeader } from "@/components/site/Layout";
import { Countries } from "@/components/site/sections/Countries";

export const metadata: Metadata = {
  title: "Destination Countries — ZEGORA",
  description:
    "Countries where ZEGORA places talent: Saudi Arabia, UAE, Qatar, Kuwait, Bahrain, Oman, Jordan, Germany, Poland and Romania.",
  openGraph: {
    title: "Destination Countries — ZEGORA",
    description: "Trusted employer partnerships across the Gulf and Europe.",
    url: "https://zegora-foreign-employment-agent-et.lovable.app/countries",
  },
  alternates: {
    canonical: "https://zegora-foreign-employment-agent-et.lovable.app/countries",
  },
};

export default function CountriesPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Countries"
        title="Where We Place Talent"
        subtitle="Long-standing employer partnerships across the Gulf and Europe."
      />
      <Countries />
    </SiteLayout>
  );
}
