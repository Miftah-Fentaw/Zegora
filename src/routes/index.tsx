import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { Hero } from "@/components/site/sections/Hero";
import { Features } from "@/components/site/sections/Features";
import { About } from "@/components/site/sections/About";
import { Strengths } from "@/components/site/sections/Strengths";
import { CEO } from "@/components/site/sections/CEO";
import { Certificates } from "@/components/site/sections/Certificates";
import { Team } from "@/components/site/sections/Team";
import { WorkforceCategories } from "@/components/site/sections/WorkforceCategories";
import { Employers } from "@/components/site/sections/Employers";
import { JobSeekers } from "@/components/site/sections/JobSeekers";
import { Services } from "@/components/site/sections/Services";
import { Countries } from "@/components/site/sections/Countries";
import { Testimonials } from "@/components/site/sections/Testimonials";
import { Contact } from "@/components/site/sections/Contact";
import { MapSection } from "@/components/site/sections/MapSection";
import heroAsset from "@/assets/zegora-workforce-team.jpg.asset.json";
import officeAsset from "@/assets/zegora-office-4k.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ZEGORA Foreign Employment Agency — 20+ Years Bridging Talent with Global Opportunities" },
      { name: "description", content: "ZEGORA is a trusted pioneer with 20+ years of experience connecting Ethiopian talent with reputable international employers across the Gulf and beyond." },
      { property: "og:title", content: "ZEGORA Foreign Employment Agency — 20+ Years of Experience" },
      { property: "og:description", content: "Bridging Talent with Global Opportunities. A trusted pioneer in foreign employment services." },
      { property: "og:url", content: "https://zegora-foreign-employment-agent-et.lovable.app/" },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/RvsnomANpMRbsLA7r9PDP8EJjEm2/social-images/social-1780744894113-photo_2026-06-06_14-20-41.webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/RvsnomANpMRbsLA7r9PDP8EJjEm2/social-images/social-1780744894113-photo_2026-06-06_14-20-41.webp" },
    ],
    links: [
      { rel: "canonical", href: "https://zegora-foreign-employment-agent-et.lovable.app/" },
      { rel: "preload", as: "image", href: heroAsset.url, fetchpriority: "high" },
      { rel: "preload", as: "image", href: officeAsset.url },
    ],
  }),
  component: Index,
});

function Section({ id, children }: { id: string; children: React.ReactNode }) {
  return <div id={id} className="scroll-mt-24">{children}</div>;
}

function Index() {
  return (
    <SiteLayout>
      <Section id="hero"><Hero /></Section>
      <Section id="features"><Features /></Section>
      <Section id="about"><About /></Section>
      <Section id="strengths"><Strengths /></Section>
      <Section id="ceo"><CEO /></Section>
      <Section id="certificates"><Certificates /></Section>
      <Section id="team"><Team /></Section>
      <Section id="workforce"><WorkforceCategories /></Section>
      <Section id="employers"><Employers /></Section>
      <Section id="job-seekers"><JobSeekers /></Section>
      <Section id="services"><Services /></Section>
      <Section id="countries"><Countries /></Section>
      <Section id="testimonials"><Testimonials /></Section>
      <Section id="contact"><Contact /></Section>
      <Section id="map"><MapSection /></Section>
    </SiteLayout>
  );
}
