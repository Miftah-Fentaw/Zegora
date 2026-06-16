"use client";

import { ChevronRight, Users, Globe2, Briefcase, Award } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import office from "@/assets/zegora-office-4k.png.asset.json";

function OfficeImage() {
  return (
    <div className="relative overflow-hidden rounded-2xl shadow-[0_20px_60px_-30px_rgba(14,75,58,0.45)] aspect-[4/3]">
      <img
        src={office.url}
        alt="ZEGORA office reception with company branding"
        loading="eager"
        decoding="async"
        fetchPriority="high"
        className="h-full w-full object-cover"
      />
      <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-gold px-3 py-1 text-xs font-semibold uppercase tracking-wider text-ink shadow-md">
        <Award className="h-3.5 w-3.5" /> 20+ Years
      </div>
    </div>
  );
}

const STATS = [
  { icon: Award, value: 20, suffix: "+", label: "Years Experience", display: "20+" },
  { icon: Users, value: 10000, suffix: "+", label: "Successful Placements", display: "10K+" },
  { icon: Globe2, value: 25, suffix: "+", label: "Countries Served", display: "25+" },
  { icon: Briefcase, value: 50, suffix: "+", label: "Industry Partners", display: "50+" },
];

function useCountUp(target: number, start: boolean, duration = 1400) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / duration);
      setV(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, start, duration]);
  return v;
}

function Stat({
  icon: Icon,
  value,
  suffix,
  label,
  display,
  start,
}: (typeof STATS)[number] & { start: boolean }) {
  const n = useCountUp(value, start);
  const shown = value >= 1000 ? `${Math.round(n / 1000)}K${suffix}` : `${n}${suffix}`;
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gold-soft">
        <Icon className="h-6 w-6 text-primary" strokeWidth={1.75} />
      </div>
      <div>
        <div className="text-2xl font-semibold text-ink md:text-3xl">{start ? shown : display}</div>
        <div className="text-xs text-muted-foreground md:text-sm">{label}</div>
      </div>
    </div>
  );
}

export function About() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section className="bg-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:py-20 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <OfficeImage />
        </div>

        <div className="lg:col-span-4">
          <p className="eyebrow">
            <span className="eyebrow-line" /> About Us
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">
            A Pioneer in Foreign Employment Services
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            ZEGORA Foreign Employment Agency is a pioneering recruitment company with more than two
            decades of experience in overseas employment services. Since its establishment, we have
            connected qualified job seekers with reputable international employers through
            professional, ethical and reliable recruitment solutions.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            With <strong className="text-primary">20+ years of industry experience</strong>, ZEGORA
            has built a strong reputation for excellence, integrity and customer satisfaction —
            specializing in international workforce placement for employers and candidates alike.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-border bg-cream-soft p-4">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-primary">
                Mission
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-ink">
                Provide trusted and efficient overseas employment opportunities while delivering
                exceptional service to employers and job seekers.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-cream-soft p-4">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-primary">
                Vision
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-ink">
                Be a leading and respected foreign employment agency recognized for excellence,
                integrity and successful international placements.
              </p>
            </div>
          </div>

          <a
            href="/#contact"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02]"
          >
            Learn More About Us <ChevronRight className="h-4 w-4" />
          </a>
        </div>

        <div ref={ref} className="lg:col-span-3">
          <div className="grid grid-cols-2 gap-5 lg:grid-cols-1">
            {STATS.map((s) => (
              <Stat key={s.label} {...s} start={visible} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
