import { Mail, Phone, MapPin } from "lucide-react";
import { SocialIcons } from "./SocialIcons";

export function TopBar() {
  return (
    <div className="bg-primary text-primary-foreground text-xs">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-2 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-1">
          <a href="mailto:info@zegora.com" className="inline-flex items-center gap-2 opacity-90 hover:opacity-100">
            <Mail className="h-3.5 w-3.5" /> info@zegora.com
          </a>
          <a href="tel:+251115580901" className="inline-flex items-center gap-2 opacity-90 hover:opacity-100">
            <Phone className="h-3.5 w-3.5" /> +251 11 558 0901 / +251 11 558 0902 / +251 11 558 0904
          </a>
          <span className="inline-flex items-center gap-2 opacity-90">
            <MapPin className="h-3.5 w-3.5" /> Stadium, Yeha City Center, 9th Floor, Addis Ababa
          </span>
        </div>
        <SocialIcons
          iconClassName="h-3.5 w-3.5"
          itemClassName="inline-flex h-7 w-7 items-center justify-center rounded-full text-primary-foreground/90 transition-all hover:text-gold hover:scale-110"
        />
      </div>
    </div>
  );
}
