import { Link } from "@tanstack/react-router";
import { ChevronRight, Award } from "lucide-react";
import heroImage from "@/assets/zegora-workforce-team.jpg.asset.json";
import { Logo } from "../Logo";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <img
        src={heroImage.url}
        alt="ZEGORA team of Ethiopian professionals — 20+ years connecting talent with global opportunities"
        className="absolute inset-0 h-full w-full object-cover object-center"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,34,26,0.78)_0%,rgba(8,34,26,0.55)_55%,rgba(8,34,26,0.35)_100%)] lg:bg-[linear-gradient(90deg,rgba(8,34,26,0.8)_0%,rgba(8,34,26,0.45)_55%,rgba(8,34,26,0.15)_100%)]" />

      <div className="relative mx-auto grid min-h-[560px] max-w-7xl items-center gap-12 px-4 py-16 md:min-h-[680px] md:py-24 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/50 bg-gold/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold">
            <Award className="h-3.5 w-3.5" /> 20+ Years of Experience · Trusted Industry Pioneer
          </span>
          <h1 className="mt-5 text-4xl font-semibold leading-[1.05] !text-primary-foreground md:text-5xl lg:text-6xl">
            Connecting Talent.<br />Building Futures.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/90 md:text-lg">
            ZEGORA Foreign Employment Agency — a pioneer in foreign employment services for more than two decades, bridging Ethiopian talent with global opportunities.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/"
              hash="job-seekers"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-medium text-ink transition-transform hover:scale-[1.02]"
            >
              For Job Seekers <ChevronRight className="h-4 w-4" />
            </Link>
            <Link
              to="/"
              hash="employers"
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 bg-background/10 px-6 py-3 text-sm font-medium text-primary-foreground backdrop-blur-sm transition-colors hover:bg-background/20"
            >
              For Employers <ChevronRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary-foreground px-6 py-3 text-sm font-medium text-primary transition-transform hover:scale-[1.02]"
            >
              Get In Touch <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="hidden lg:col-span-5 lg:block">
          <div className="flex items-center justify-end">
            <div className="rounded-[28px] border border-background/35 bg-background/90 p-6 shadow-[0_25px_60px_-35px_rgba(0,0,0,0.55)] backdrop-blur-sm">
              <Logo className="w-full max-w-[320px]" />
              <p className="mt-3 text-center text-xs font-semibold uppercase tracking-wider text-primary">
                Bridging Talent with Global Opportunities
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
