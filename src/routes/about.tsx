import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Shield, Clock, Users, Wrench } from "lucide-react";
import { PageHero, SiteLayout } from "../components/SiteLayout";
import { Reveal } from "../components/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Georgia Truck Care" },
      { name: "description", content: "Atlanta-based truck and diesel pickup repair shop serving fleets and independents. Learn about our mission, values, and team." },
      { property: "og:title", content: "About — Georgia Truck Care" },
      { property: "og:description", content: "Atlanta's trusted truck and diesel pickup shop. Expert service. Zero shortcuts." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  { Icon: Shield, title: "Integrity First", text: "Honest diagnostics, transparent pricing, no upsells you don't need." },
  { Icon: Clock, title: "Respect Your Time", text: "Downtime costs money. We give realistic ETAs and hit them." },
  { Icon: Users, title: "Built for Drivers", text: "From owner-operators to large fleets, every customer gets full attention." },
  { Icon: Wrench, title: "Skilled Craftsmanship", text: "Our techs are trained, certified, and obsessed with doing it right." },
];

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        label="About Us"
        title="The Shop Behind the Wrench."
        subtitle="Atlanta-based. Driver-trusted. Built on the belief that heavy-duty work deserves heavy-duty care."
      />

      {/* About Us - Referência */}
      <section className="bg-[#0A0A0A]">
        <div className="mx-auto max-w-3xl px-5 lg:px-8 py-24 text-center">
          <Reveal>
            <span className="section-label mb-6 inline-block">About Us</span>
            <h2 className="font-display font-bold uppercase text-3xl sm:text-4xl lg:text-5xl leading-tight">
              EXCELLENCE IN <span className="text-[var(--gold)]">TRUCK & DIESEL</span> REPAIR
            </h2>
            <p className="mt-8 text-[#A0A0A0] text-lg leading-relaxed">
              Georgia Truck Care is Atlanta's premier destination for heavy-duty truck and diesel pickup service. Our expert craftsmanship ensures long-lasting and reliable results for fleets and independents across Georgia.
            </p>
            <ul className="mt-10 space-y-5 text-left max-w-xl mx-auto">
              {[
                "Expert certified technicians trained on all major diesel platforms.",
                "Our superior repair techniques guarantee durability and long-term performance in every job.",
                "Our team provides exceptional customer support, guiding you from diagnosis to delivery.",
              ].map((t) => (
                <li key={t} className="flex items-start gap-4 text-white">
                  <span className="mt-2 inline-flex h-3 w-3 shrink-0 rounded-full bg-[var(--gold)]" />
                  <span className="text-[#A0A0A0]">{t}</span>
                </li>
              ))}
            </ul>
            <Link to="/services" className="mt-10 inline-flex items-center gap-2 rounded-md bg-[var(--gold)] px-8 py-4 text-sm font-bold uppercase tracking-[0.08em] text-[#0A0A0A] transition-colors hover:bg-[var(--gold-hover)]">
              Read More <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-[#141414] border-y border-[var(--border)]">
        <div className="mx-auto max-w-5xl px-5 lg:px-8 py-24">
          <Reveal>
            <div className="border-l-4 border-[var(--gold)] pl-8">
              <span className="section-label mb-6">Our Mission</span>
              <blockquote className="font-display italic text-2xl lg:text-4xl leading-snug text-white">
                "To be the most trusted truck and diesel pickup shop in Georgia — where every driver, fleet, and owner-operator knows the work will be done right, on time, every time."
              </blockquote>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#0A0A0A]">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-24">
          <Reveal>
            <span className="section-label mb-6">What We Stand For</span>
            <h2 className="font-display font-bold uppercase text-3xl lg:text-4xl max-w-3xl">
              Four Values, <span className="text-[var(--gold)]">Zero Compromises.</span>
            </h2>
          </Reveal>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--border)] border border-[var(--border)]">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 70}>
                <div className="bg-[#141414] p-8 h-full hover:bg-[#1E1E1E] transition-colors">
                  <v.Icon className="h-8 w-8 text-[var(--gold)]" strokeWidth={1.5} />
                  <h3 className="mt-6 font-display font-bold uppercase text-lg text-white">{v.title}</h3>
                  <p className="mt-3 text-sm text-[#A0A0A0] leading-relaxed">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
