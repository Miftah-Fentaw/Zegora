import type { Metadata } from "next";
import { SiteLayout, PageHeader } from "@/components/site/Layout";
import { Contact } from "@/components/site/sections/Contact";
import { MapSection } from "@/components/site/sections/MapSection";

export const metadata: Metadata = {
  title: "Contact ZEGORA Foreign Employment Agency",
  description:
    "Get in touch with ZEGORA: phone, email, WhatsApp and our Addis Ababa office location.",
  openGraph: {
    title: "Contact — ZEGORA",
    description: "Talk to our recruitment team.",
    url: "https://zegora-foreign-employment-agent-et.lovable.app/contact",
  },
  alternates: {
    canonical: "https://zegora-foreign-employment-agent-et.lovable.app/contact",
  },
};

export default function ContactPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Contact"
        title="Get In Touch With Zegora"
        subtitle="We're happy to answer your questions about overseas employment, partnerships and our recruitment process."
      />
      <Contact />
      <MapSection />
    </SiteLayout>
  );
}
