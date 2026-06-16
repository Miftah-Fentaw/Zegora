import { Compass, FileText, Plane, ShieldCheck } from "lucide-react";

const STEPS = [
  { icon: Compass, title: "Guidance", text: "Honest advice on roles, countries and what to expect." },
  { icon: FileText, title: "Documentation", text: "Help preparing passport, medical and certification paperwork." },
  { icon: ShieldCheck, title: "Ethical Placement", text: "Placement only with verified, compliant employers." },
  { icon: Plane, title: "Pre-Departure & Arrival", text: "Orientation, travel coordination and post-arrival follow-up." },
];

export function JobSeekers() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <div className="text-center">
          <p className="eyebrow"><span className="eyebrow-line" /> For Job Seekers</p>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Your Path to a Trusted Career Abroad</h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            ZEGORA supports Ethiopian professionals through every step of the overseas employment journey — with transparency and care.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl border border-border bg-background p-6">
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
