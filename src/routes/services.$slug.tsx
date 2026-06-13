import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { PageHero, SiteLayout } from "../components/SiteLayout";
import { Reveal } from "../components/Reveal";
import { services } from "../lib/services";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = services.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    const s = loaderData?.service;
    const title = s ? `${s.name} — Georgia Truck Care` : "Service — Georgia Truck Care";
    const desc = s?.short ?? "Professional truck and diesel pickup service in Atlanta, GA.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:url", content: s ? `/services/${s.slug}` : "/services" },
      ],
      links: s ? [{ rel: "canonical", href: `/services/${s.slug}` }] : [],
    };
  },
  component: ServiceDetail,
  notFoundComponent: () => (
    <SiteLayout>
      <div className="mx-auto max-w-3xl px-5 py-32 text-center">
        <h1 className="font-display text-4xl font-bold">Service not found</h1>
        <Link to="/services" className="mt-6 inline-flex text-[var(--gold)]">Back to services</Link>
      </div>
    </SiteLayout>
  ),
});

function ServiceDetail() {
  const { service } = Route.useLoaderData();
  const Icon = service.icon;

  return (
    <SiteLayout>
      <PageHero label="Our Services" title={service.name} subtitle={service.short} />
      <section className="bg-[#0A0A0A]">
        <div className="mx-auto max-w-5xl px-5 lg:px-8 py-20 grid lg:grid-cols-[1fr_320px] gap-12">
          <Reveal>
            <div className="relative aspect-[16/9] overflow-hidden mb-8">
              <img src={service.image} alt={service.name} width={1280} height={720} className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute top-4 left-4 inline-flex h-12 w-12 items-center justify-center rounded-sm bg-[var(--gold)] text-[#0A0A0A]">
                <Icon className="h-6 w-6" strokeWidth={2} />
              </div>
            </div>
            <h2 className="mt-2 font-display font-bold uppercase text-2xl lg:text-3xl">About this service</h2>
            <p className="mt-5 text-[#A0A0A0] text-lg leading-relaxed">{service.description}</p>

            <h3 className="mt-12 font-display font-bold uppercase text-xl">What's Included</h3>
            <ul className="mt-6 space-y-3">
              {service.includes.map((item: string) => (
                <li key={item} className="flex items-start gap-3 text-white">
                  <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-sm bg-[var(--gold)]/15 text-[var(--gold)] shrink-0">
                    <Check className="h-4 w-4" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <Link to="/contact" className="mt-12 inline-flex items-center gap-2 rounded-md bg-[var(--gold)] px-7 py-4 text-sm font-bold uppercase tracking-[0.08em] text-[#0A0A0A] hover:bg-[var(--gold-hover)] transition-colors">
              Book This Service <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>

          <Reveal delay={120}>
            <aside className="bg-[#141414] border border-[var(--border)] p-7 sticky top-28">
              <span className="section-label mb-4">Other Services</span>
              <ul className="mt-4 space-y-3">
                {services.filter((s) => s.slug !== service.slug).map((s) => (
                  <li key={s.slug}>
                    <Link to="/services/$slug" params={{ slug: s.slug }} className="flex items-center justify-between text-sm text-white/80 hover:text-[var(--gold)] transition-colors">
                      <span>{s.name}</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </li>
                ))}
              </ul>
            </aside>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
