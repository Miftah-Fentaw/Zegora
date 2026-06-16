import { Facebook } from "lucide-react";

export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/share/1JxpeRKVLR/",
  tiktok: "http://tiktok.com/@zegoraforeignemploymenta",
} as const;

export function TikTokIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.14V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.7a8.16 8.16 0 0 0 4.77 1.52V6.77a4.85 4.85 0 0 1-1.84-.08z" />
    </svg>
  );
}

export function SocialIcons({
  className = "",
  iconClassName = "h-4 w-4",
  itemClassName = "inline-flex h-9 w-9 items-center justify-center rounded-full border border-current/20 text-current transition-all hover:scale-110 hover:bg-gold hover:text-primary hover:border-gold",
}: {
  className?: string;
  iconClassName?: string;
  itemClassName?: string;
}) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <a
        href={SOCIAL_LINKS.facebook}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="ZEGORA on Facebook"
        className={itemClassName}
      >
        <Facebook className={iconClassName} />
      </a>
      <a
        href={SOCIAL_LINKS.tiktok}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="ZEGORA on TikTok"
        className={itemClassName}
      >
        <TikTokIcon className={iconClassName} />
      </a>
    </div>
  );
}
