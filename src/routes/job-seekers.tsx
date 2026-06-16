import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight, Compass, FileText, Plane, ShieldCheck } from "lucide-react";
import { SiteLayout, PageHeader } from "@/components/site/Layout";

export const Route = createFileRoute("/job-seekers")({
  head: () => ({
    meta: [
      { title: "For Job Seekers — ZEGORA Foreign Employment Agency" },
      { name: "description", content: "Take the next step in your career abroad with ZEGORA — ethical guidance, transparent processes and trusted international employers." },
      { property: "og:title", content: "For Job Seekers — ZEGORA" },
      { property: "og:description", content: "Your path to a trusted career abroad." },
      { property: "og:url", content: "https://zegora-foreign-employment-agent-et.lovable.app/job-seekers" },
    ],
    links: [{ rel: "canonical", href: "https://zegora-foreign-employment-agent-et.lovable.app/job-seekers" }],
  }),
  component: JobSeekersPage,
});

const STEPS = [
  { icon: Compass, title: "Guidance", text: "Honest advice on roles, countries and what to expect." },
  { icon: FileText, title: "Documentation", text: "Help preparing passport, medical and certification paperwork." },
  { icon: ShieldCheck, title: "Ethical Placement", text: "Placement only with verified, compliant employers." },
  { icon: Plane, title: "Pre-Departure & Arrival", text: "Orientation, travel coordination and post-arrival follow-up." },
];

function JobSeekersPage() {
  return (
    <SiteLayout>
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
          <h2 className="text-3xl font-semibold md:text-4xl">Have questions about working abroad?</h2>
          <p className="mt-3 text-muted-foreground">Reach out to our team — we'll guide you through every step.</p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground">
            Contact ZEGORA <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
