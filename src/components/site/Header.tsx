import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import { Logo } from "./Logo";
import { SocialIcons } from "./SocialIcons";

const NAV = [
  { href: "/#hero", label: "Home" },
  { href: "/#about", label: "About Us" },
  { href: "/#employers", label: "For Employers" },
  { href: "/#job-seekers", label: "For Job Seekers" },
  { href: "/#services", label: "Our Services" },
  { href: "/#countries", label: "Countries" },
  { href: "/#contact", label: "Contact Us" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-40 bg-cream transition-shadow ${
        scrolled ? "shadow-[0_2px_16px_rgba(14,75,58,0.08)]" : ""
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-3 lg:py-4">
        <Link to="/" className="flex items-center" aria-label="ZEGORA home">
          <Logo className="h-10 w-auto sm:h-12" />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink/80 transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <SocialIcons
            itemClassName="inline-flex h-8 w-8 items-center justify-center rounded-full text-ink/70 transition-all hover:text-primary hover:scale-110"
            iconClassName="h-4 w-4"
          />
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02]"
          >
            Get In Touch <ChevronRight className="h-4 w-4" />
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-ink lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden ${open ? "block" : "hidden"} border-t border-border bg-cream`}
      >
        <nav className="mx-auto flex max-w-7xl flex-col px-4 py-3">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-border/60 py-3 text-sm font-medium text-ink/80"
            >
              {item.label}
            </a>
          ))}
          <a
            href="/#contact"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex items-center justify-center gap-2 self-start rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground"
          >
            Get In Touch <ChevronRight className="h-4 w-4" />
          </a>
        </nav>
      </div>
    </header>
  );
}
