import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/Layout";
import { Contact } from "@/components/site/sections/Contact";
import { MapSection } from "@/components/site/sections/MapSection";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact ZEGORA Foreign Employment Agency" },
      { name: "description", content: "Get in touch with ZEGORA: phone, email, WhatsApp and our Addis Ababa office location." },
      { property: "og:title", content: "Contact — ZEGORA" },
      { property: "og:description", content: "Talk to our recruitment team." },
      { property: "og:url", content: "https://zegora-foreign-employment-agent-et.lovable.app/contact" },
    ],
    links: [{ rel: "canonical", href: "https://zegora-foreign-employment-agent-et.lovable.app/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <PageHeader eyebrow="Contact" title="Get In Touch With Zegora" subtitle="We're happy to answer your questions about overseas employment, partnerships and our recruitment process." />
      <Contact />
      <MapSection />
    </SiteLayout>
  );
}

