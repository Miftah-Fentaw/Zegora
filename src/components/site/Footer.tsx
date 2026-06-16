import { Logo } from "./Logo";
import { Mail, Phone, MapPin, MessageCircle, Award } from "lucide-react";
import { SocialIcons } from "./SocialIcons";

const LINKS = [
  { href: "/#hero", label: "Home" },
  { href: "/#about", label: "About Us" },
  { href: "/#services", label: "Our Services" },
  { href: "/#countries", label: "Countries" },
  { href: "/#employers", label: "For Employers" },
  { href: "/#job-seekers", label: "For Job Seekers" },
  { href: "/#contact", label: "Contact Us" },
] as const;

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="rounded-xl bg-cream p-4 inline-block">
            <Logo className="h-12 w-auto" />
          </div>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-primary-foreground/80">
            ZEGORA Foreign Employment Agency — a trusted pioneer with over 20 years of experience connecting Ethiopian talent with global employment opportunities.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold">
            <Award className="h-3.5 w-3.5" /> 20+ Years · Trusted Industry Pioneer
          </div>
          <div className="mt-6">
            <SocialIcons
              itemClassName="inline-flex h-9 w-9 items-center justify-center rounded-full border border-primary-foreground/20 text-primary-foreground/90 transition-all hover:bg-gold hover:text-primary hover:border-gold hover:scale-110"
            />
          </div>
        </div>

        <div className="md:col-span-3">
          <h4 className="text-base font-semibold text-primary-foreground">Quick Links</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-primary-foreground/80">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-gold">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <h4 className="text-base font-semibold text-primary-foreground">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/85">
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>+251 11 558 0901<br />+251 11 558 0902<br />+251 11 558 0904</span>
            </li>
            <li className="flex items-start gap-3"><Mail className="mt-0.5 h-4 w-4 text-gold" /> info@zegora.com</li>
            <li className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> Stadium, Yeha City Center, 9th Floor, Addis Ababa, Ethiopia</li>
            <li className="flex items-start gap-3"><MessageCircle className="mt-0.5 h-4 w-4 text-gold" /> WhatsApp: +251 901 918 658</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-primary-foreground/70 sm:flex-row">
          <p>© {new Date().getFullYear()} ZEGORA Foreign Employment Agency. All rights reserved.</p>
          <p>Bridging Talent with Global Opportunities.</p>
        </div>
      </div>
    </footer>
  );
}
