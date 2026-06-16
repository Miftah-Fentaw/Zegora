const COUNTRIES = [
  { name: "Saudi Arabia", flag: "🇸🇦", note: "Largest demand for skilled and domestic workers." },
  { name: "United Arab Emirates", flag: "🇦🇪", note: "Hospitality, construction, healthcare and retail roles." },
  { name: "Qatar", flag: "🇶🇦", note: "Infrastructure, hospitality and service sectors." },
  { name: "Kuwait", flag: "🇰🇼", note: "Domestic, healthcare and oil & gas placements." },
  { name: "Bahrain", flag: "🇧🇭", note: "Hospitality, retail and skilled trades." },
  { name: "Oman", flag: "🇴🇲", note: "Construction, services and skilled labour." },
  { name: "Jordan", flag: "🇯🇴", note: "Manufacturing and service-industry opportunities." },
  { name: "Germany", flag: "🇩🇪", note: "Healthcare, engineering and skilled trades pathways." },
  { name: "Poland", flag: "🇵🇱", note: "Manufacturing, logistics and skilled labour." },
  { name: "Romania", flag: "🇷🇴", note: "Construction, hospitality and industrial roles." },
];

export function Countries() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <div className="text-center">
          <p className="eyebrow"><span className="eyebrow-line" /> Destination Countries</p>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Where We Place Talent</h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Trusted employer partnerships across the Gulf and Europe.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {COUNTRIES.map((c) => (
            <div
              key={c.name}
              className="rounded-2xl border border-border bg-background p-5 text-center transition-shadow hover:shadow-[0_18px_40px_-25px_rgba(14,75,58,0.35)]"
            >
              <div className="text-4xl">{c.flag}</div>
              <h3 className="mt-3 text-sm font-semibold text-ink">{c.name}</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{c.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
