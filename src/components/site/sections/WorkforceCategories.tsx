import { Home, HardHat, Code2, Stethoscope, UtensilsCrossed, Hammer, Car, Wrench } from "lucide-react";

const CATEGORIES = [
  { icon: Home, title: "Domestic Workers", text: "Professional household staff for international families.", tint: "from-[oklch(0.92_0.06_85)] to-[oklch(0.88_0.08_70)]" },
  { icon: HardHat, title: "Engineers", text: "Civil, Mechanical, Electrical and Industrial Engineers.", tint: "from-[oklch(0.90_0.05_156)] to-[oklch(0.82_0.07_156)]" },
  { icon: Code2, title: "Software Engineers", text: "Qualified software developers and IT professionals.", tint: "from-[oklch(0.90_0.04_220)] to-[oklch(0.82_0.06_220)]" },
  { icon: Stethoscope, title: "Doctors & Healthcare", text: "Medical doctors, nurses and healthcare specialists.", tint: "from-[oklch(0.92_0.05_20)] to-[oklch(0.86_0.07_20)]" },
  { icon: UtensilsCrossed, title: "Hospitality Staff", text: "Hotel, restaurant and customer service professionals.", tint: "from-[oklch(0.92_0.06_60)] to-[oklch(0.86_0.08_50)]" },
  { icon: Hammer, title: "Construction Workers", text: "Skilled and semi-skilled construction professionals.", tint: "from-[oklch(0.92_0.04_55)] to-[oklch(0.85_0.06_45)]" },
  { icon: Car, title: "Drivers", text: "Professional licensed drivers for personal and commercial roles.", tint: "from-[oklch(0.91_0.04_260)] to-[oklch(0.84_0.06_260)]" },
  { icon: Wrench, title: "Technicians", text: "Electrical, mechanical and technical specialists.", tint: "from-[oklch(0.91_0.05_180)] to-[oklch(0.84_0.07_180)]" },
];

export function WorkforceCategories() {
  return (
    <section className="bg-cream-soft">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <div className="text-center">
          <p className="eyebrow"><span className="eyebrow-line" /> Workforce</p>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Our Workforce Categories</h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            We place Ethiopian talent across a wide range of professional and skilled categories worldwide.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map(({ icon: Icon, title, text, tint }) => (
            <div key={title} className="group overflow-hidden rounded-2xl border border-border bg-background shadow-[0_10px_30px_-20px_rgba(14,75,58,0.3)] transition-all hover:-translate-y-1 hover:shadow-[0_20px_50px_-25px_rgba(14,75,58,0.45)]">
              <div className={`relative flex aspect-[4/3] items-center justify-center bg-gradient-to-br ${tint}`}>
                <Icon className="h-16 w-16 text-primary transition-transform group-hover:scale-110" strokeWidth={1.5} />
              </div>
              <div className="p-5">
                <h3 className="text-base font-semibold text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
