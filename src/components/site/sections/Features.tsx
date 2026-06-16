import { ShieldCheck, Globe2, UserCheck, Handshake } from "lucide-react";

const ITEMS = [
  { icon: ShieldCheck, title: "Trusted Agency", text: "Professional recruitment services built on transparency and trust." },
  { icon: Globe2, title: "Global Network", text: "Connecting talent with opportunities across multiple countries." },
  { icon: UserCheck, title: "Ethical Recruitment", text: "Following legal and ethical recruitment standards." },
  { icon: Handshake, title: "End-to-End Support", text: "Supporting clients throughout the recruitment process." },
];

export function Features() {
  return (
    <section className="border-b border-border/60 bg-background">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-14 md:py-16 lg:grid-cols-4">
        {ITEMS.map(({ icon: Icon, title, text }) => (
          <div key={title} className="flex flex-col items-center text-center md:items-start md:text-left">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gold-soft">
              <Icon className="h-7 w-7 text-primary" strokeWidth={1.75} />
            </div>
            <h3 className="mt-4 text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
