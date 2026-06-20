import { SiteLayout } from "@/components/site/Layout";
import { Hero } from "@/components/site/sections/Hero";
import { Features } from "@/components/site/sections/Features";
import { About } from "@/components/site/sections/About";
import { Strengths } from "@/components/site/sections/Strengths";
import { CEO } from "@/components/site/sections/CEO";
import { CompanyStructure } from "@/components/site/sections/CompanyStructure";
import { Certificates } from "@/components/site/sections/Certificates";
import { Team } from "@/components/site/sections/Team";
import { WorkforceCategories } from "@/components/site/sections/WorkforceCategories";
import { Employers } from "@/components/site/sections/Employers";
import { JobSeekers } from "@/components/site/sections/JobSeekers";
import { Services } from "@/components/site/sections/Services";
import { Countries } from "@/components/site/sections/Countries";
import { Testimonials } from "@/components/site/sections/Testimonials";
import { FAQ } from "@/components/site/sections/FAQ";
import { Contact } from "@/components/site/sections/Contact";
import { MapSection } from "@/components/site/sections/MapSection";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Zegora | Zegora Foreign Private Employment Agent | Zegoraagency",
  description:
    "Zegora Foreign Private Employment Agent (zegoraagency.com) — Ethiopia's trusted private employment agency. Search Zegora, Zegora agency, or Zegoraagency for overseas jobs in Saudi Arabia, UAE, Qatar and Europe.",
  path: "/",
  keywords: ["zegora ethiopia", "zegora jobs", "zegoraagency ethiopia", "private employment agent"],
  ogTitle: "Zegora — Foreign Private Employment Agent | Zegoraagency.com",
  ogDescription:
    "Zegora, Zegora agency & Zegoraagency — 20+ years connecting Ethiopian talent with Gulf & European employers.",
});

function Section({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <div id={id} className="scroll-mt-24">
      {children}
    </div>
  );
}

export default function HomePage() {
  return (
    <SiteLayout>
      <Section id="hero">
        <Hero />
      </Section>
      <Section id="features">
        <Features />
      </Section>
      <Section id="about">
        <About />
      </Section>
      <Section id="strengths">
        <Strengths />
      </Section>
      <Section id="ceo">
        <CEO />
      </Section>
      <Section id="company-structure">
        <CompanyStructure />
      </Section>
      <Section id="certificates">
        <Certificates />
      </Section>
      <Section id="team">
        <Team />
      </Section>
      <Section id="workforce">
        <WorkforceCategories />
      </Section>
      <Section id="employers">
        <Employers />
      </Section>
      <Section id="job-seekers">
        <JobSeekers />
      </Section>
      <Section id="services">
        <Services />
      </Section>
      <Section id="countries">
        <Countries />
      </Section>
      <Section id="testimonials">
        <Testimonials />
      </Section>
      <Section id="faq">
        <FAQ />
      </Section>
      <Section id="contact">
        <Contact />
      </Section>
      <Section id="map">
        <MapSection />
      </Section>
    </SiteLayout>
  );
}
