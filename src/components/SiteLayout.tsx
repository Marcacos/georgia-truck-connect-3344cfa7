import type { ReactNode } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#0A0A0A] text-white">
      <Nav />
      <main className="flex-1 pt-20">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHero({
  label,
  title,
  subtitle,
}: {
  label?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-[var(--border)] bg-[#0A0A0A]">
      <div className="absolute inset-0 opacity-[0.04] [background-image:repeating-linear-gradient(45deg,#fff_0_1px,transparent_1px_22px)]" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8 py-20 lg:py-28">
        {label && <span className="section-label mb-6">{label}</span>}
        <h1 className="font-display font-bold uppercase tracking-tight text-4xl sm:text-5xl lg:text-6xl text-white max-w-4xl">
          {title}
        </h1>
        <span className="gold-divider mt-6" />
        {subtitle && <p className="mt-6 max-w-2xl text-lg text-[#A0A0A0]">{subtitle}</p>}
      </div>
    </section>
  );
}
