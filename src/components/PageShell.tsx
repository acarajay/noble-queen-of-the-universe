import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-ivory text-navy flex flex-col">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
}) {
  return (
    <section className="border-b border-navy/5 bg-bone">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="flex items-center gap-4 mb-8">
          <span className="h-px w-12 bg-champagne" />
          <span className="eyebrow text-champagne">{eyebrow}</span>
        </div>
        <h1 className="display-serif text-5xl md:text-7xl text-balance max-w-4xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-navy/70 text-pretty">
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}
