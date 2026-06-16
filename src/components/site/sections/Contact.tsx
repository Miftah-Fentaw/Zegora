import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { SocialIcons } from "../SocialIcons";

const TILES = [
  {
    icon: Phone,
    label: "Office Phones",
    lines: ["+251 11 558 0901", "+251 11 558 0902", "+251 11 558 0904"],
    href: "tel:+251115580901",
  },
  {
    icon: Mail,
    label: "Email",
    lines: ["info@zegora.com"],
    href: "mailto:info@zegora.com",
  },
  {
    icon: MapPin,
    label: "Address",
    lines: ["Stadium, Yeha City Center", "9th Floor, Addis Ababa, Ethiopia"],
    href: "https://maps.app.goo.gl/chBX1vvSNkBahTBt5?g_st=ic",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    lines: ["+251 901 918 658"],
    href: "https://wa.me/251901918658",
  },
];

export function Contact() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <div className="text-center">
          <p className="eyebrow"><span className="eyebrow-line" /> Contact</p>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Get In Touch With Zegora</h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            We're happy to answer your questions about overseas employment, partnerships, and our recruitment process.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TILES.map(({ icon: Icon, label, lines, href }) => {
            const inner = (
              <>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-soft">
                  <Icon className="h-5 w-5 text-primary" strokeWidth={1.75} />
                </div>
                <div className="mt-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</div>
                <div className="mt-1 space-y-0.5">
                  {lines.map((l) => (
                    <div key={l} className="text-sm font-medium text-ink">{l}</div>
                  ))}
                </div>
              </>
            );
            const cls = "rounded-2xl border border-border bg-cream-soft p-6 transition-shadow hover:shadow-[0_18px_40px_-25px_rgba(14,75,58,0.3)]";
            return href ? (
              <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} className={cls}>{inner}</a>
            ) : (
              <div key={label} className={cls}>{inner}</div>
            );
          })}
        </div>

        <div className="mt-10 flex flex-col items-center gap-3 rounded-2xl border border-border bg-cream-soft p-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Follow ZEGORA</p>
          <SocialIcons
            itemClassName="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-primary transition-all hover:bg-primary hover:text-primary-foreground hover:border-primary hover:scale-110"
            iconClassName="h-5 w-5"
          />
        </div>
      </div>
    </section>
  );
}
