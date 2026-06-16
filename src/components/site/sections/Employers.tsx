import { Building2, Globe2, ShieldCheck, Users } from "lucide-react";

const POINTS = [
  { icon: Users, title: "Pre-vetted Candidates", text: "Skills, documents and references verified before shortlisting." },
  { icon: ShieldCheck, title: "Full Legal Compliance", text: "Permits, visas and contracts handled to international standards." },
  { icon: Globe2, title: "Global Reach", text: "Active partnerships across the Gulf and Europe." },
  { icon: Building2, title: "Sector Expertise", text: "Hospitality, healthcare, construction, manufacturing and more." },
];

export function Employers() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <div className="text-center">
          <p className="eyebrow"><span className="eyebrow-line" /> For Employers</p>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Hire Reliable, Skilled Ethiopian Talent</h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            ZEGORA is your dedicated recruitment partner for sourcing, vetting and deploying qualified workers across multiple sectors.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
      </div>
    </section>
  );
}
