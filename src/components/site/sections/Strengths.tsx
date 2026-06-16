import { Award, ShieldCheck, Scale, Globe2, Headphones, Users, Smile, Handshake } from "lucide-react";

const ITEMS = [
  { icon: Award, title: "20+ Years Experience", text: "Two decades of trusted overseas recruitment." },
  { icon: ShieldCheck, title: "Trusted Industry Pioneer", text: "A leading name in foreign employment services." },
  { icon: Scale, title: "Ethical Recruitment", text: "Transparent, lawful and people-first practices." },
  { icon: Globe2, title: "Global Employer Network", text: "Strong partnerships across the Gulf and beyond." },
  { icon: Headphones, title: "Professional Support", text: "End-to-end guidance for workers and employers." },
  { icon: Users, title: "International Workforce Placement", text: "Skilled, semi-skilled and professional talent." },
  { icon: Smile, title: "Customer Satisfaction", text: "Reliable service that earns long-term loyalty." },
  { icon: Handshake, title: "Trusted Global Partnerships", text: "Long-standing relationships with reputable employers." },
];

export function Strengths() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <div className="text-center">
          <p className="eyebrow"><span className="eyebrow-line" /> Our Strengths</p>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Excellence Through Experience</h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            What makes ZEGORA one of Ethiopia's most experienced foreign employment agencies.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map(({ icon: Icon, title, text }) => (
            <div key={title} className="group rounded-2xl border border-border bg-cream-soft p-6 transition-all hover:-translate-y-1 hover:shadow-[0_18px_40px_-25px_rgba(14,75,58,0.35)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-soft transition-colors group-hover:bg-gold">
                <Icon className="h-5 w-5 text-primary" strokeWidth={1.75} />
              </div>
              <h3 className="mt-4 text-base font-semibold text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
