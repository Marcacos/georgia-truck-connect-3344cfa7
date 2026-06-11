import { createFileRoute } from "@tanstack/react-router";
import { Wrench, Siren, Laptop, Droplet, Truck, Flame } from "lucide-react";
import heroTruck from "@/assets/hero-truck.jpg";
import engineImg from "@/assets/engine-repair.jpg";
import emergencyImg from "@/assets/emergency-help.jpg";
import diagnosticsImg from "@/assets/diagnostics.jpg";
import oilBrakesImg from "@/assets/oil-brakes.jpg";
import fleetImg from "@/assets/fleet.jpg";
import weldingImg from "@/assets/welding.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Georgia Truck Works — Heavy Duty Truck Repair" },
      { name: "description", content: "Engine repairs, emergency help, computer diagnostics, oil & brakes, fleet maintenance, and welding for heavy-duty trucks." },
      { property: "og:title", content: "Georgia Truck Works" },
      { property: "og:description", content: "Full-service heavy-duty truck repair shop." },
      { property: "og:image", content: heroTruck },
    ],
  }),
  component: Index,
});

const services = [
  { icon: Wrench, title: "Engine Repairs", desc: "Diesel engine overhauls, rebuilds, and performance fixes.", img: engineImg },
  { icon: Siren, title: "Emergency Help", desc: "24/7 roadside assistance — we get you rolling again.", img: emergencyImg },
  { icon: Laptop, title: "Computer Diagnostics", desc: "Advanced scanning to pinpoint problems fast.", img: diagnosticsImg },
  { icon: Droplet, title: "Oil Change & Brakes", desc: "Preventive maintenance and full brake service.", img: oilBrakesImg },
  { icon: Truck, title: "Fleet Maintenance", desc: "Keep your whole fleet on the road with scheduled service.", img: fleetImg },
  { icon: Flame, title: "Welding of All Materials", desc: "Steel, aluminum, stainless — chassis and structural welding.", img: weldingImg },
];

function Index() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* Header */}
      <header className="border-b border-neutral-800 bg-neutral-950/80 backdrop-blur sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Truck className="text-orange-500" size={28} />
            <span className="font-bold tracking-wide">GEORGIA TRUCK WORKS</span>
          </div>
          <a href="#services" className="text-sm text-neutral-300 hover:text-orange-500">Services</a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative h-[80vh] min-h-[520px] overflow-hidden">
        <img src={heroTruck} alt="Heavy-duty truck in the shop" width={1600} height={900} className="absolute inset-0 w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
          <span className="text-orange-500 font-semibold tracking-widest text-sm">HEAVY DUTY · DONE RIGHT</span>
          <h1 className="text-5xl md:text-7xl font-black mt-3 max-w-3xl leading-tight">Truck repair built to keep you moving.</h1>
          <p className="mt-5 max-w-xl text-neutral-300 text-lg">From engine rebuilds to roadside emergencies — Georgia's trusted heavy-duty truck shop.</p>
          <div className="mt-8">
            <a href="#services" className="inline-block bg-orange-500 hover:bg-orange-600 text-black font-bold px-7 py-3 rounded-md">Our Services</a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-12">
          <span className="text-orange-500 font-semibold tracking-widest text-sm">WHAT WE DO</span>
          <h2 className="text-4xl md:text-5xl font-black mt-2">Services</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <article key={s.title} className="group bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden hover:border-orange-500 transition">
              <div className="relative h-52 overflow-hidden">
                <img src={s.img} alt={s.title} loading="lazy" width={800} height={600} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                <div className="absolute top-3 left-3 bg-orange-500 text-black p-2 rounded-md">
                  <s.icon size={22} />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-neutral-400 text-sm">{s.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="border-t border-neutral-800 py-8 text-center text-neutral-500 text-sm">
        © {new Date().getFullYear()} Georgia Truck Works
      </footer>
    </div>
  );
}
