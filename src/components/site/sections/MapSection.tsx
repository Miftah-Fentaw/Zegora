export function MapSection() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <div className="text-center">
          <p className="eyebrow"><span className="eyebrow-line" /> Location</p>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Find Our Addis Ababa Office</h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Stadium, Yeha City Center, 9th Floor, Addis Ababa, Ethiopia.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl border border-border shadow-[0_20px_60px_-30px_rgba(14,75,58,0.45)]">
          <iframe
            title="ZEGORA office location — Yeha City Center, Addis Ababa"
            src="https://www.google.com/maps?q=Yeha+City+Center,+Stadium,+Addis+Ababa,+Ethiopia&output=embed"
            className="block h-[360px] w-full md:h-[440px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="border-t border-border bg-background px-5 py-3 text-center text-sm">
            <a
              href="https://maps.app.goo.gl/chBX1vvSNkBahTBt5?g_st=ic"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary hover:underline"
            >
              Open in Google Maps →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
