import { Globe2, Handshake, Users, Briefcase, FileText, Plane } from "lucide-react";

const SERVICES = [
  { icon: Globe2, title: "Overseas Recruitment", text: "Sourcing and placing qualified Ethiopian professionals with vetted international employers." },
  { icon: Handshake, title: "Employer Partnerships", text: "Long-term partnerships with reputable companies across the Gulf and Europe." },
  { icon: Users, title: "Workforce Solutions", text: "Scalable staffing solutions tailored to your sector and project timelines." },
  { icon: Briefcase, title: "Recruitment Consulting", text: "Expert advisory on hiring strategy, workforce planning, and compliance." },
  { icon: FileText, title: "Documentation Guidance", text: "End-to-end support for visas, permits, and pre-departure paperwork." },
  { icon: Plane, title: "International Placement Support", text: "Travel coordination, orientation, and post-arrival follow-up." },
];

export function Services() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <div className="text-center">
          <p className="eyebrow !text-gold"><span className="eyebrow-line" /> Our Services</p>
          <h2 className="mt-4 text-3xl font-semibold text-primary-foreground md:text-4xl">
            Comprehensive Recruitment Solutions
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, text }) => (
            <div key={title} className="group rounded-2xl bg-cream p-6 text-ink transition-transform hover:-translate-y-1">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gold-soft">
                <Icon className="h-6 w-6 text-primary" strokeWidth={1.75} />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
