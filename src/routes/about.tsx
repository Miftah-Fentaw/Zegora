import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/Layout";
import { About } from "@/components/site/sections/About";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About ZEGORA — Your Trusted Partner in Global Recruitment" },
      { name: "description", content: "Learn about ZEGORA Foreign Employment Agency: our mission, values and commitment to ethical overseas recruitment." },
      { property: "og:title", content: "About ZEGORA Foreign Employment Agency" },
      { property: "og:description", content: "Your trusted partner in global recruitment." },
      { property: "og:url", content: "https://zegora-foreign-employment-agent-et.lovable.app/about" },
    ],
    links: [{ rel: "canonical", href: "https://zegora-foreign-employment-agent-et.lovable.app/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
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
