import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Star, Truck, MapPin } from "lucide-react";
import { SiteLayout } from "../components/SiteLayout";
import { Reveal } from "../components/Reveal";
import { services } from "../lib/services";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Georgia Truck Care — Truck & Diesel Pickup Repair in Atlanta, GA" },
      { name: "description", content: "Expert truck & diesel pickup repair for fleets and independents across Georgia. Engine, brakes, electrical, diagnostics, PM, and roadside assistance." },
      { property: "og:title", content: "Georgia Truck Care — Atlanta's Trusted Truck & Diesel Pickup Shop" },
      { property: "og:description", content: "Expert truck & diesel pickup repair. Fast turnaround. Zero shortcuts." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden hero-grid-bg">
        <div className="absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-[var(--gold)]/10 blur-[120px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0A0A0A]" />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8 py-24 w-full">
          <Reveal>
            <span className="section-label mb-6">Atlanta · Georgia</span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="font-display font-bold uppercase tracking-tight text-5xl sm:text-6xl lg:text-8xl leading-[0.95] max-w-5xl">
              We Fix It. <br />
              <span className="text-[var(--gold)]">We Get You</span> <br />
              Back on the Road.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-8 max-w-xl text-lg text-[#A0A0A0]">
              Expert truck &amp; diesel pickup repair for fleets and independents across Georgia. Modern shop. Real technicians. Zero shortcuts.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-[var(--gold)] px-7 py-4 text-sm font-bold uppercase tracking-[0.08em] text-[#0A0A0A] transition-colors hover:bg-[var(--gold-hover)]">
                Book a Service <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/services" className="inline-flex items-center gap-2 rounded-md border border-white/30 px-7 py-4 text-sm font-bold uppercase tracking-[0.08em] text-white transition-colors hover:bg-white/5 hover:border-white">
                See Our Services
              </Link>
            </div>
          </Reveal>
          <Reveal delay={320}>
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-px bg-[var(--border)] border border-[var(--border)] max-w-3xl">
              {[
                { Icon: Truck, value: "500+", label: "Trucks Serviced" },
                { Icon: Star, value: "5.0", label: "Google Rating" },
                { Icon: MapPin, value: "Atlanta, GA", label: "Based & Operated" },
              ].map(({ Icon, value, label }) => (
                <div key={label} className="bg-[#0A0A0A] p-5 flex items-center gap-4">
                  <Icon className="h-6 w-6 text-[var(--gold)] shrink-0" />
                  <div>
                    <div className="font-display font-bold text-lg text-white">{value}</div>
                    <div className="text-xs uppercase tracking-wider text-[#A0A0A0]">{label}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-[#141414] border-y border-[var(--border)]">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-24 lg:py-32 grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <span className="section-label mb-6">Who We Are</span>
            <h2 className="font-display font-bold uppercase text-3xl sm:text-4xl lg:text-5xl leading-tight">
              Built for Heavy-Duty. <br />
              <span className="text-[var(--gold)]">Run Like a Pro Shop.</span>
            </h2>
            <p className="mt-6 text-[#A0A0A0] text-lg max-w-lg">
              Georgia Truck Care is Atlanta's go-to shop for serious truck and diesel pickup work. Whether you run one rig or a hundred, we treat every job like our reputation depends on it — because it does.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Expert certified technicians",
                "Fast turnaround, honest timelines",
                "Fleet and independent service",
                "Zero shortcuts, always",
              ].map((t) => (
                <li key={t} className="flex items-center gap-3 text-white">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-sm bg-[var(--gold)]/15 text-[var(--gold)]">
                    <Check className="h-4 w-4" />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
            <Link to="/about" className="mt-10 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.1em] text-[var(--gold)] hover:gap-3 transition-all">
              Learn More <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
          <Reveal delay={120}>
            <div className="relative aspect-square bg-[#0A0A0A] border border-[var(--border)] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80"
                alt="Truck and diesel pickup in repair shop"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-[#0A0A0A]">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-24 lg:py-32">
          <Reveal>
            <span className="section-label mb-6">What We Do</span>
            <h2 className="font-display font-bold uppercase text-3xl sm:text-4xl lg:text-5xl max-w-3xl">
              Expert Craftsmanship, <span className="text-[var(--gold)]">Reliable Solutions.</span>
            </h2>
          </Reveal>
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--border)] border border-[var(--border)]">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 60}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="group block bg-[#141414] hover:bg-[#1E1E1E] h-full transition-colors relative"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img src={s.image} alt={s.name} loading="lazy" width={800} height={600} className="absolute inset-0 h-full w-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition duration-500" />
                    <div className="absolute top-3 left-3 inline-flex h-10 w-10 items-center justify-center rounded-sm bg-[var(--gold)] text-[#0A0A0A]">
                      <s.icon className="h-5 w-5" strokeWidth={2} />
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="font-display font-bold text-xl text-white">{s.name}</h3>
                    <p className="mt-3 text-sm text-[#A0A0A0] leading-relaxed">{s.short}</p>
                    <span className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.1em] text-[var(--gold)] group-hover:gap-3 transition-all">
                      Learn More <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-[#141414] border-y border-[var(--border)]">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--border)] border border-[var(--border)]">
            {[
              { value: "15+", label: "Years Combined Experience" },
              { value: "500+", label: "Trucks Serviced" },
              { value: "5.0★", label: "Google Rating" },
              { value: "3", label: "States Served" },
            ].map((m) => (
              <div key={m.label} className="bg-[#141414] p-8 lg:p-10 text-center">
                <div className="font-display font-bold text-4xl lg:text-5xl text-[var(--gold)]">{m.value}</div>
                <div className="mt-3 text-xs uppercase tracking-[0.14em] text-[#A0A0A0]">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-[#0A0A0A]">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-24 lg:py-32">
          <Reveal>
            <span className="section-label mb-6">Client Reviews</span>
            <h2 className="font-display font-bold uppercase text-3xl sm:text-4xl lg:text-5xl max-w-3xl">
              Trusted by Drivers <span className="text-[var(--gold)]">Across Georgia.</span>
            </h2>
          </Reveal>
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 80}>
                <TestimonialCard {...t} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="bg-[#141414] border-t border-[var(--border)]">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-20">
          <div className="border-l-4 border-[var(--gold)] pl-8 lg:pl-12 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div>
              <span className="section-label mb-4">Ready When You Are</span>
              <h2 className="font-display font-bold uppercase text-3xl lg:text-4xl text-white max-w-2xl">
                Arrived on a tow truck. <br />
                <span className="text-[var(--gold)]">Leaves running with confidence.</span>
              </h2>
            </div>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-[var(--gold)] px-8 py-4 text-sm font-bold uppercase tracking-[0.08em] text-[#0A0A0A] hover:bg-[var(--gold-hover)] transition-colors self-start lg:self-auto">
              Contact Us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

const testimonials = [
  {
    name: "Marcus T.",
    city: "Atlanta, GA",
    text: "Best truck shop in the metro. Diagnosed my engine issue in an hour and had me rolling the next morning. Honest pricing, real expertise.",
  },
  {
    name: "Dwayne R.",
    city: "Marietta, GA",
    text: "Run a small fleet of 12 trucks. These guys handle all our PMs and any breakdowns. Communication is fast, work is solid, prices are fair.",
  },
  {
    name: "Sasha L.",
    city: "Decatur, GA",
    text: "Got stranded on I-285 with brake issues. They sent mobile help within 40 minutes. Saved my whole load. Forever customer.",
  },
];

function TestimonialCard({ name, city, text }: { name: string; city: string; text: string }) {
  const initials = name.split(" ").map((n) => n[0]).join("");
  return (
    <div className="bg-[#141414] border border-[var(--border)] p-7 h-full transition-colors hover:border-[var(--gold)]/40">
      <div className="flex items-center gap-4">
        <div className="h-12 w-12 rounded-full bg-[var(--gold)] text-[#0A0A0A] font-bold flex items-center justify-center text-sm">
          {initials}
        </div>
        <div>
          <div className="font-bold text-white">{name}</div>
          <div className="text-xs text-[#A0A0A0]">{city}</div>
        </div>
      </div>
      <div className="mt-5 flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-[var(--gold)] text-[var(--gold)]" />
        ))}
      </div>
      <p className="mt-4 text-sm text-[#A0A0A0] leading-relaxed">"{text}"</p>
    </div>
  );
}
