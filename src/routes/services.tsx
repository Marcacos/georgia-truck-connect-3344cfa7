import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero, SiteLayout } from "../components/SiteLayout";
import { Reveal } from "../components/Reveal";
import { services } from "../lib/services";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Georgia Truck Care" },
      { name: "description", content: "Full-service truck and trailer repair: engine diagnostics, brakes, electrical, trailer maintenance, preventive maintenance, and roadside assistance." },
      { property: "og:title", content: "Services — Georgia Truck Care" },
      { property: "og:description", content: "Engine, brakes, electrical, trailers, PM, and roadside assistance." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <SiteLayout>
      <PageHero
        label="What We Do"
        title="Full-Service Truck & Trailer Care."
        subtitle="Diagnostics, repairs, maintenance, and roadside support — handled in-house by certified technicians."
      />
      <section className="bg-[#0A0A0A]">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-20">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--border)] border border-[var(--border)]">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 60}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="group block bg-[#141414] hover:bg-[#1E1E1E] p-8 h-full transition-colors"
                >
                  <s.icon className="h-9 w-9 text-[var(--gold)]" strokeWidth={1.5} />
                  <h2 className="mt-6 font-display font-bold text-xl text-white">{s.name}</h2>
                  <p className="mt-3 text-sm text-[#A0A0A0] leading-relaxed">{s.short}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.1em] text-[var(--gold)] group-hover:gap-3 transition-all">
                    Learn More <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
