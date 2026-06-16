import type { ReactNode } from "react";
import { TopBar } from "./TopBar";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { WhatsAppButton } from "./WhatsAppButton";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <TopBar />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export function PageHeader({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <section className="hero-bg border-b border-border/60">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <p className="eyebrow"><span className="eyebrow-line" /> {eyebrow}</p>
        <h1 className="mt-4 text-4xl font-semibold md:text-5xl">{title}</h1>
        {subtitle ? (
          <p className="mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">{subtitle}</p>
        ) : null}
      </div>
    </section>
  );
}
