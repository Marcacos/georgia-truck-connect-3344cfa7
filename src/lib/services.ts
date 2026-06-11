import {
  Wrench,
  Truck,
  Disc3,
  Zap,
  CalendarCheck,
  LifeBuoy,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  name: string;
  short: string;
  description: string;
  icon: LucideIcon;
  includes: string[];
};

export const services: Service[] = [
  {
    slug: "engine-diagnostics-repair",
    name: "Engine Diagnostics & Repair",
    short: "Precision diagnostics and full repairs for diesel and gas engines.",
    icon: Wrench,
    description:
      "From rough idles to no-start conditions, our technicians use modern diagnostic tools to identify and fix engine issues fast — keeping your downtime minimal.",
    includes: [
      "Computerized diagnostic scans",
      "Cooling and fuel system service",
      "Turbocharger and EGR repair",
      "Full engine rebuilds when needed",
    ],
  },
  {
    slug: "trailer-maintenance",
    name: "Trailer Maintenance",
    short: "Keep your trailers DOT-compliant, road-ready, and earning miles.",
    icon: Truck,
    description:
      "Reefer, dry van, flatbed, dump — we service them all. Annual inspections, suspension work, lighting, and structural repairs handled in-house.",
    includes: [
      "DOT annual inspections",
      "Suspension and axle service",
      "Lights, wiring, and ABS repair",
      "Floor, door, and frame repair",
    ],
  },
  {
    slug: "brake-systems",
    name: "Brake Systems",
    short: "Full air and hydraulic brake service for trucks and trailers.",
    icon: Disc3,
    description:
      "Brakes are everything. We service air brakes, ABS systems, slack adjusters, drums, rotors, and shoes — built for heavy-duty work.",
    includes: [
      "Air brake chamber replacement",
      "Drum and rotor service",
      "ABS diagnostics",
      "Brake line and S-cam repair",
    ],
  },
  {
    slug: "welding-of-all-materials",
    name: "Welding of all materials",
    short: "Expert welding and structural repairs for steel, aluminum, and heavy chassis.",
    icon: Zap,
    description:
      "Expert welding and structural repairs for steel, aluminum, and heavy chassis.",
    includes: [
      "Welding structures",
      "Welding of eletrical parts",
    ],
  },
  {
    slug: "preventive-maintenance",
    name: "Preventive Maintenance",
    short: "Scheduled service that prevents costly breakdowns later.",
    icon: CalendarCheck,
    description:
      "PM packages tailored to fleet and owner-operator needs. Oil, filters, lube, and full inspection so problems are caught early.",
    includes: [
      "Full A / B / C service packages",
      "Fluid and filter changes",
      "Multi-point inspections",
      "Fleet maintenance scheduling",
    ],
  },
  {
    slug: "roadside-assistance",
    name: "Roadside Assistance",
    short: "Stuck on the side of the road? We come to you in metro Atlanta.",
    icon: LifeBuoy,
    description:
      "Mobile repair for breakdowns across the Atlanta area. Tire changes, jump starts, air system fixes, and emergency repairs to get you rolling.",
    includes: [
      "Mobile diagnostics",
      "Tire and wheel service",
      "Jump starts and battery swaps",
      "Air leak and brake adjustments",
    ],
  },
];
