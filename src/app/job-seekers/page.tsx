import Link from "next/link";
import { ChevronRight, Compass, FileText, Plane, ShieldCheck } from "lucide-react";
import { SiteLayout, PageHeader } from "@/components/site/Layout";
import { JsonLd } from "@/components/site/JsonLd";
import { breadcrumbJsonLd } from "@/lib/structured-data";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Work Abroad — Overseas Jobs for Ethiopians | ZEGORA Agency",
  description:
    "Find trusted overseas jobs through ZEGORA Ethiopian employment agency. Ethical guidance, transparent processes and verified Gulf & European employers for Ethiopian job seekers.",
  path: "/job-seekers",
  keywords: [
    "work abroad Ethiopia",
    "overseas jobs for Ethiopians",
    "apply Gulf jobs Ethiopia",
    "Zegora job application",
    "foreign employment for Ethiopians",
  ],
  ogTitle: "For Job Seekers — ZEGORA Ethiopian Employment Agency",
  ogDescription:
    "Your path to trusted overseas careers abroad with Zegora agency — ethical, licensed recruitment from Addis Ababa.",
});

const STEPS = [
  {
    icon: Compass,
    title: "Guidance",
    text: "Honest advice on roles, countries and what to expect.",
  },
  {
    icon: FileText,
    title: "Documentation",
    text: "Help preparing passport, medical and certification paperwork.",
  },
  {
    icon: ShieldCheck,
    title: "Ethical Placement",
    text: "Placement only with verified, compliant employers.",
  },
  {
    icon: Plane,
    title: "Pre-Departure & Arrival",
    text: "Orientation, travel coordination and post-arrival follow-up.",
  },
];

export default function JobSeekersPage() {
  return (
    <SiteLayout>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "For Job Seekers", path: "/job-seekers" },
        ])}
      />
      <PageHeader
        eyebrow="For Job Seekers"
        title="Your Path to a Trusted Career Abroad"
        subtitle="ZEGORA supports Ethiopian professionals through every step of the overseas employment journey — with transparency and care."
      />
      <section className="bg-background">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-16 sm:grid-cols-2 md:py-20 lg:grid-cols-4">
          {STEPS.map(({ icon: Icon, title, text }) => (
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
            Have questions about working abroad?
          </h2>
          <p className="mt-3 text-muted-foreground">
            Reach out to our team — we&apos;ll guide you through every step.
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
