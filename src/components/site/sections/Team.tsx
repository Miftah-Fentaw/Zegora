import teamImage from "@/assets/zegora-workforce-team.jpg.asset.json";

export function Team() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <div className="text-center">
          <p className="eyebrow"><span className="eyebrow-line" /> Our Workforce</p>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Empowering Ethiopian Talent for Global Opportunities</h2>
          <p className="mx-auto mt-3 max-w-3xl text-muted-foreground">
            We prepare skilled Ethiopian professionals for successful international careers through ethical recruitment, professional guidance, and trusted global partnerships.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-cream-soft shadow-[0_20px_60px_-30px_rgba(14,75,58,0.4)]">
          <img
            src={teamImage.url}
            alt="Ethiopian women trained and ready for international placement through ZEGORA"
            loading="eager"
            className="block h-auto w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
