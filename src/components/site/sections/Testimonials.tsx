import { Quote } from "lucide-react";

const ITEMS = [
  {
    name: "Selamawit T.",
    role: "Healthcare Professional, UAE",
    quote: "ZEGORA guided me through every step — from documents to arrival. I felt supported the entire journey.",
  },
  {
    name: "Hotel Group HR",
    role: "Employer Partner, Saudi Arabia",
    quote: "Reliable, well-vetted candidates and clear communication. ZEGORA has been an excellent recruitment partner.",
  },
  {
    name: "Abel M.",
    role: "Skilled Worker, Qatar",
    quote: "Ethical, transparent and professional. I recommend ZEGORA to anyone seeking opportunities abroad.",
  },
];

export function Testimonials() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <div className="text-center">
          <p className="eyebrow"><span className="eyebrow-line" /> Testimonials</p>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">What People Say About ZEGORA</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {ITEMS.map((t) => (
            <figure key={t.name} className="rounded-2xl border border-border bg-cream-soft p-6 shadow-[0_18px_40px_-30px_rgba(14,75,58,0.3)]">
              <Quote className="h-6 w-6 text-gold" />
              <blockquote className="mt-4 text-sm leading-relaxed text-ink">"{t.quote}"</blockquote>
              <figcaption className="mt-5">
                <div className="text-sm font-semibold text-ink">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
