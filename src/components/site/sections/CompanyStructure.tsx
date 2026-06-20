import man1 from "@/assets/team/man1.jpeg";
import man2 from "@/assets/team/man2.jpeg";
import man3 from "@/assets/team/man3.jpeg";
import man4 from "@/assets/team/man4.jpeg";
import man5 from "@/assets/team/man5.jpeg";
import woman1 from "@/assets/team/woman1.jpeg";
import woman2 from "@/assets/team/woman2.jpeg";
import woman3 from "@/assets/team/woman3.jpeg";

const STRUCTURE = [
  {
    name: "Yohans Getnet Abebe",
    role: "Chief Executive Officer",
    image: man1,
    alt: "Yohans Getnet Abebe — CEO of Zegora Foreign Private Employment Agent",
  },
  {
    name: "Dawit Bekele",
    role: "General Manager",
    image: man2,
    alt: "Dawit Bekele — General Manager at Zegora",
  },
  {
    name: "Tigist Alemu",
    role: "HR Manager",
    image: woman1,
    alt: "Tigist Alemu — HR Manager at Zegora",
  },
  {
    name: "Samuel Girma",
    role: "Recruitment Manager",
    image: man3,
    alt: "Samuel Girma — Recruitment Manager at Zegora",
  },
  {
    name: "Meron Tadesse",
    role: "Operations Manager",
    image: man4,
    alt: "Meron Tadesse — Operations Manager at Zegora",
  },
  {
    name: "Hana Mekonnen",
    role: "Finance Manager",
    image: woman2,
    alt: "Hana Mekonnen — Finance Manager at Zegora",
  },
  {
    name: "Abel Negash",
    role: "Legal & Compliance Officer",
    image: man5,
    alt: "Abel Negash — Legal & Compliance Officer at Zegora",
  },
  {
    name: "Sara Kidane",
    role: "Customer Relations Manager",
    image: woman3,
    alt: "Sara Kidane — Customer Relations Manager at Zegora",
  },
] as const;

export function CompanyStructure() {
  return (
    <section id="company-structure" className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <div className="text-center">
          <p className="eyebrow">
            <span className="eyebrow-line" /> Company Structure
          </p>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
            Our Leadership & Management Team
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            The dedicated Ethiopian professionals leading Zegora Foreign Private Employment Agent
            across HR, operations, recruitment, finance and client services.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STRUCTURE.map(({ name, role, image, alt }) => (
            <article
              key={name}
              className="overflow-hidden rounded-2xl border border-border bg-cream-soft transition-shadow hover:shadow-[0_18px_40px_-25px_rgba(14,75,58,0.35)]"
            >
              <div className="aspect-square overflow-hidden bg-primary/5">
                <img
                  src={image.src}
                  alt={alt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div className="p-5 text-center">
                <h3 className="text-base font-semibold text-ink">{name}</h3>
                <p className="mt-1 text-sm text-primary">{role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
