import { Award, Quote } from "lucide-react";

export function CEO() {
  return (
    <section className="bg-cream-soft">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <div className="text-center">
          <p className="eyebrow"><span className="eyebrow-line" /> Leadership</p>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Message From Our CEO</h2>
        </div>

        <div className="mt-12 grid items-center gap-10 rounded-3xl border border-border bg-background p-8 shadow-[0_20px_60px_-30px_rgba(14,75,58,0.35)] md:p-12 lg:grid-cols-12">
          <div className="lg:col-span-4 flex flex-col items-center text-center">
            <div className="relative">
              <div className="flex h-40 w-40 items-center justify-center rounded-full bg-gradient-to-br from-primary to-[oklch(0.28_0.06_156)] text-primary-foreground shadow-[0_15px_40px_-15px_rgba(14,75,58,0.6)]">
                <span className="font-display text-5xl font-semibold">YA</span>
              </div>
              <div className="absolute -bottom-2 -right-2 flex h-12 w-12 items-center justify-center rounded-full bg-gold text-ink shadow-md">
                <Award className="h-6 w-6" strokeWidth={2} />
              </div>
            </div>
            <h3 className="mt-6 text-xl font-semibold text-ink">Yohans Getnet Abebe</h3>
            <p className="mt-1 text-sm text-muted-foreground">Chief Executive Officer</p>
            <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-gold-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              <Award className="h-3.5 w-3.5" /> Trusted Pioneer
            </span>
          </div>

          <div className="lg:col-span-8">
            <Quote className="h-10 w-10 text-gold" strokeWidth={1.5} />
            <blockquote className="mt-4 text-lg leading-relaxed text-ink md:text-xl">
              "At ZEGORA Foreign Employment Agency, we are proud of our <strong className="text-primary">20+ years of experience</strong> connecting talented Ethiopian professionals with trusted international employers. Our commitment to ethical recruitment, transparency, and client success has made us a trusted partner for thousands of workers and businesses worldwide."
            </blockquote>
            <p className="mt-6 text-sm font-medium text-muted-foreground">— Yohans Getnet Abebe, CEO</p>
          </div>
        </div>
      </div>
    </section>
  );
}
