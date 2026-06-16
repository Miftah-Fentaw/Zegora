import type { Metadata } from "next";
import { SiteLayout, PageHeader } from "@/components/site/Layout";
import { About } from "@/components/site/sections/About";

export const metadata: Metadata = {
  title: "About ZEGORA — Your Trusted Partner in Global Recruitment",
  description:
    "Learn about ZEGORA Foreign Employment Agency: our mission, values and commitment to ethical overseas recruitment.",
  openGraph: {
    title: "About ZEGORA Foreign Employment Agency",
    description: "Your trusted partner in global recruitment.",
    url: "https://zegora-foreign-employment-agent-et.lovable.app/about",
  },
  alternates: {
    canonical: "https://zegora-foreign-employment-agent-et.lovable.app/about",
  },
};

export default function AboutPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="About Us"
        title="Your Trusted Partner in Global Recruitment"
        subtitle="ZEGORA Foreign Employment Agency is dedicated to connecting skilled professionals with rewarding career opportunities around the world."
      />
      <About />
    </SiteLayout>
  );
}
