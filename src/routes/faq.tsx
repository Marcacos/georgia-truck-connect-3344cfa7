import { createFileRoute } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { PageHero, SiteLayout } from "../components/SiteLayout";
import { Reveal } from "../components/Reveal";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Georgia Truck Care" },
      { name: "description", content: "Common questions about our truck and diesel pickup repair services in Atlanta, GA." },
      { property: "og:title", content: "FAQ — Georgia Truck Care" },
      { property: "og:description", content: "Hours, services, roadside, booking — answered." },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }),
    }],
  }),
  component: FaqPage,
});

const faqs = [
  { q: "Do you work with semi-trucks and diesel pickups?", a: "Yes. We service all classes of semi-trucks (Class 7 & 8), box trucks, day cabs, sleepers, and diesel pickups — Ford Super Duty (Power Stroke), Ram HD (Cummins), and Chevy/GMC HD (Duramax)." },
  { q: "Do you serve fleet companies?", a: "Absolutely. We have dedicated fleet maintenance programs with priority scheduling, fleet pricing, and consolidated billing. Whether you run 3 trucks or 300, we'll build a plan that fits." },
  { q: "What are your hours?", a: "Monday through Friday 6am–6pm and Saturday 7am–3pm. We're closed Sunday. Roadside assistance is available during business hours across metro Atlanta." },
  { q: "Do you offer roadside assistance?", a: "Yes. Our mobile service unit handles breakdowns across the Atlanta metro — flat tires, jump starts, air leaks, brake adjustments, and basic emergency repairs to get you rolling again." },
  { q: "How do I book a service?", a: "Call us at (617) 767-3926, email georgiatruckcare87@gmail.com, or use the contact form on our website. We'll confirm your appointment and give you an honest ETA." },
];

function FaqPage() {
  return (
    <SiteLayout>
      <PageHero label="Frequently Asked" title="Questions, Answered." subtitle="Everything you need to know about working with Georgia Truck Care." />

      <section className="bg-[#0A0A0A]">
        <div className="mx-auto max-w-3xl px-5 lg:px-8 py-20">
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 60}>
                <FaqItem q={f.q} a={f.a} defaultOpen={i === 0} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function FaqItem({ q, a, defaultOpen = false }: { q: string; a: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border border-[var(--border)] bg-[#141414] transition-colors hover:border-[var(--gold)]/30">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-4 p-6 text-left"
        aria-expanded={open}
      >
        <span className="font-display font-bold text-white text-lg">{q}</span>
        <ChevronDown
          className={`h-5 w-5 text-[var(--gold)] shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-6 text-[#A0A0A0] leading-relaxed">{a}</p>
        </div>
      </div>
    </div>
  );
}
