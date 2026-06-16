import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Building2, Globe2, ShieldCheck, Users } from "lucide-react";
import { SiteLayout, PageHeader } from "@/components/site/Layout";

export const metadata: Metadata = {
  title: "For Employers — ZEGORA Foreign Employment Agency",
  description:
    "Partner with ZEGORA to recruit reliable, skilled Ethiopian talent for your workforce — vetted, compliant and ready to deploy.",
  openGraph: {
    title: "For Employers — ZEGORA",
    description: "Reliable Ethiopian talent for your international workforce.",
    url: "https://zegora-foreign-employment-agent-et.lovable.app/employers",
  },
  alternates: {
    canonical: "https://zegora-foreign-employment-agent-et.lovable.app/employers",
  },
};

const POINTS = [
  {
    icon: Users,
    title: "Pre-vetted Candidates",
    text: "Skills, documents and references verified before shortlisting.",
  },
  {
    icon: ShieldCheck,
    title: "Full Legal Compliance",
    text: "Permits, visas and contracts handled to international standards.",
  },
  { icon: Globe2, title: "Global Reach", text: "Active partnerships across the Gulf and Europe." },
  {
    icon: Building2,
    title: "Sector Expertise",
    text: "Hospitality, healthcare, construction, manufacturing and more.",
  },
];

export default function EmployersPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="For Employers"
        title="Hire Reliable, Skilled Ethiopian Talent"
        subtitle="ZEGORA is your dedicated recruitment partner for sourcing, vetting and deploying qualified workers across multiple sectors."
      />
      <section className="bg-background">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-16 sm:grid-cols-2 md:py-20 lg:grid-cols-4">
          {POINTS.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl border border-border bg-cream-soft p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-soft">
                <Icon className="h-5 w-5 text-primary" strokeWidth={1.75} />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-cream">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center md:py-20">
          <h2 className="text-3xl font-semibold md:text-4xl">
            Ready to discuss your hiring needs?
          </h2>
          <p className="mt-3 text-muted-foreground">
            Get in touch with our recruitment team for a tailored proposal.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground"
          >
            Contact ZEGORA <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
