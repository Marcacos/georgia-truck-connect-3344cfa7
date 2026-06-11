import { createFileRoute } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { PageHero, SiteLayout } from "../components/SiteLayout";
import { Reveal } from "../components/Reveal";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews — Georgia Truck Care" },
      { name: "description", content: "5.0★ rated truck and trailer repair shop in Atlanta. Read reviews from drivers and fleets we've served." },
      { property: "og:title", content: "Reviews — Georgia Truck Care" },
      { property: "og:description", content: "5.0★ on Google. Real reviews from real drivers." },
      { property: "og:url", content: "/reviews" },
    ],
    links: [{ rel: "canonical", href: "/reviews" }],
  }),
  component: ReviewsPage,
});

const reviews = [
  { name: "Marcus T.", city: "Atlanta, GA", text: "Best truck shop in the metro. Diagnosed my engine issue in an hour and had me rolling the next morning. Honest pricing, real expertise." },
  { name: "Dwayne R.", city: "Marietta, GA", text: "Run a small fleet of 12 trucks. These guys handle all our PMs and any breakdowns. Communication is fast, work is solid, prices are fair." },
  { name: "Sasha L.", city: "Decatur, GA", text: "Got stranded on I-285 with brake issues. They sent mobile help within 40 minutes. Saved my whole load. Forever customer." },
  { name: "Robert K.", city: "Sandy Springs, GA", text: "Trailer wiring nightmare nobody else could fix. Georgia Truck Care had it sorted in under 3 hours. These guys know their stuff." },
  { name: "Jamal P.", city: "Atlanta, GA", text: "Owner-operator here. They treat my one truck the same as a 50-rig fleet. Real respect for what we do out here." },
  { name: "Tina M.", city: "Smyrna, GA", text: "Quoted me half what the dealership wanted for a brake job. Same OEM parts, faster turnaround. Couldn't believe it." },
  { name: "Andre S.", city: "Norcross, GA", text: "PM service done while I waited. Clean shop, real techs, no upsell games. This is how it should be." },
  { name: "Luis V.", city: "Lithonia, GA", text: "Reefer wouldn't hold temp. They diagnosed it the same day and had me back loaded by morning. Saved me thousands." },
];

function ReviewsPage() {
  return (
    <SiteLayout>
      <PageHero label="What People Say" title="Trusted by Drivers Across Georgia." />

      <section className="bg-[#0A0A0A]">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-16">
          <Reveal>
            <div className="inline-flex items-center gap-3 rounded-full bg-[#141414] border border-[var(--gold)]/40 pl-3 pr-5 py-2">
              <Star className="h-5 w-5 fill-[var(--gold)] text-[var(--gold)]" />
              <span className="font-display font-bold text-lg text-white">5.0</span>
              <span className="text-sm text-[#A0A0A0]">on Google</span>
            </div>
          </Reveal>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((r, i) => {
              const initials = r.name.split(" ").map((n) => n[0]).join("");
              return (
                <Reveal key={r.name} delay={(i % 3) * 80}>
                  <article className="bg-[#141414] border border-[var(--border)] p-7 h-full transition-colors hover:border-[var(--gold)]/40">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-[var(--gold)] text-[#0A0A0A] font-bold flex items-center justify-center text-sm">
                        {initials}
                      </div>
                      <div>
                        <div className="font-bold text-white">{r.name}</div>
                        <div className="text-xs text-[#A0A0A0]">{r.city}</div>
                      </div>
                    </div>
                    <div className="mt-5 flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star key={j} className="h-4 w-4 fill-[var(--gold)] text-[var(--gold)]" />
                      ))}
                    </div>
                    <p className="mt-4 text-sm text-[#A0A0A0] leading-relaxed">"{r.text}"</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
