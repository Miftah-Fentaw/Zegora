"use client";

import { useState } from "react";
import { X, Expand } from "lucide-react";
import governmentLicense from "@/assets/zegora-government-license.png.asset.json";
import certificateAuthorization from "@/assets/zegora-certificate-authorization.png.asset.json";
import excellenceAward from "@/assets/zegora-excellence-award.png.asset.json";

type CertificateItem = {
  title: string;
  subtitle: string;
  image: string;
  alt: string;
};

const ITEMS: CertificateItem[] = [
  {
    title: "Government License",
    subtitle: "Official foreign employment agency operating license.",
    image: governmentLicense.url,
    alt: "Government license for ZEGORA Foreign Employment Agency",
  },
  {
    title: "Certificate of Authorization",
    subtitle: "Ministry-issued authorization certificate for agency operations.",
    image: certificateAuthorization.url,
    alt: "Certificate of authorization for ZEGORA Foreign Employment Agency",
  },
  {
    title: "Excellence Award",
    subtitle: "Recognition for ethical recruitment and employment services.",
    image: excellenceAward.url,
    alt: "Excellence award presented to ZEGORA Foreign Employment Agency",
  },
];

export function Certificates() {
  const [active, setActive] = useState<CertificateItem | null>(null);

  return (
    <>
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
          <div className="text-center">
            <p className="eyebrow">
              <span className="eyebrow-line" /> Certificates &amp; Licenses
            </p>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
              Trusted, Licensed, and Recognized
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              Official certifications and licensing that reinforce ZEGORA&apos;s commitment to
              professionalism, legal compliance, and ethical foreign employment services.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {ITEMS.map((item) => (
              <button
                key={item.title}
                type="button"
                onClick={() => setActive(item)}
                className="group overflow-hidden rounded-2xl border border-border bg-background text-left shadow-[0_18px_40px_-30px_rgba(14,75,58,0.3)] transition-transform hover:-translate-y-1"
                aria-label={`Open full-size ${item.title}`}
              >
                <div className="relative aspect-[4/3] overflow-hidden border-b border-border bg-muted">
                  <img
                    src={item.image}
                    alt={item.alt}
                    loading="lazy"
                    className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                  <div className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-background/90 text-primary shadow-sm">
                    <Expand className="h-4 w-4" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.subtitle}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {active ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-primary/80 px-4 py-8 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          onClick={() => setActive(null)}
        >
          <div
            className="relative w-full max-w-5xl overflow-hidden rounded-2xl bg-background shadow-[0_30px_80px_-30px_rgba(0,0,0,0.5)]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActive(null)}
              className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-background/95 text-ink shadow-sm transition-colors hover:bg-gold-soft"
              aria-label="Close certificate preview"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="border-b border-border px-6 py-5 pr-16">
              <h3 className="text-xl font-semibold">{active.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{active.subtitle}</p>
            </div>
            <div className="max-h-[80vh] overflow-auto bg-muted p-3 md:p-5">
              <img
                src={active.image}
                alt={active.alt}
                className="mx-auto h-auto w-full rounded-xl object-contain"
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
