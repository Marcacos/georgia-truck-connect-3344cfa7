import {
  Wrench,
  Siren,
  Laptop,
  Droplet,
  Truck,
  Flame,
  type LucideIcon,
} from "lucide-react";
import engineImg from "@/assets/engine-repair.jpg";
import emergencyImg from "@/assets/emergency-help.jpg";
import diagnosticsImg from "@/assets/diagnostics.jpg";
import oilBrakesImg from "@/assets/oil-brakes.jpg";
import fleetImg from "@/assets/fleet.jpg";
import weldingImg from "@/assets/welding.jpg";

export type Service = {
  slug: string;
  name: string;
  short: string;
  description: string;
  icon: LucideIcon;
  image: string;
  includes: string[];
};

export const services: Service[] = [
  {
    slug: "engine-repairs",
    name: "Engine Repairs",
    short: "Full diesel and gas engine repairs, rebuilds, and overhauls.",
    icon: Wrench,
    image: engineImg,
    description:
      "From rough idles to no-start conditions and full rebuilds, our technicians repair heavy-duty engines fast — keeping your downtime minimal.",
    includes: [
      "Cooling and fuel system service",
      "Turbocharger and EGR repair",
      "Head gasket and injector work",
      "Full engine rebuilds when needed",
    ],
  },
  {
    slug: "emergency-help",
    name: "Emergency Help",
    short: "24/7 roadside assistance across metro Atlanta — we come to you.",
    icon: Siren,
    image: emergencyImg,
    description:
      "Stuck on the side of the road? Our mobile units respond around the clock with the tools and parts to get you rolling again.",
    includes: [
      "24/7 roadside response",
      "Tire and wheel service",
      "Jump starts and battery swaps",
      "Air leaks and brake adjustments",
    ],
  },
  {
    slug: "computer-diagnostics",
    name: "Computer Diagnostics",
    short: "Advanced scan tools to pinpoint problems on any truck, fast.",
    icon: Laptop,
    image: diagnosticsImg,
    description:
      "Multi-brand diagnostic software and dealer-level scanners read every module on your truck so we fix the real problem the first time.",
    includes: [
      "ECM, ABS, and aftertreatment scans",
      "Fault code analysis and clearing",
      "Live data and sensor testing",
      "Forced regens and module programming",
    ],
  },
  {
    slug: "oil-change-and-brakes",
    name: "Oil Change & Brakes",
    short: "Preventive maintenance and full air and hydraulic brake service.",
    icon: Droplet,
    image: oilBrakesImg,
    description:
      "Keep your truck safe and on schedule. Full-synthetic oil services, filters, and complete brake service for trucks and diesel pickups.",
    includes: [
      "Full-service oil and filter changes",
      "Air brake chamber replacement",
      "Drum, rotor, and shoe service",
      "Brake line and S-cam repair",
    ],
  },
  {
    slug: "fleet-maintenance",
    name: "Fleet Maintenance",
    short: "Scheduled service that keeps your whole fleet on the road.",
    icon: Truck,
    image: fleetImg,
    description:
      "PM packages tailored to fleets and owner-operators. Oil, filters, lube, and full inspections so small problems are caught early.",
    includes: [
      "A / B / C service packages",
      "Multi-point inspections",
      "DOT compliance support",
      "Fleet scheduling and reporting",
    ],
  },
  {
    slug: "welding-of-all-materials",
    name: "Welding of All Materials",
    short: "Expert welding for steel, aluminum, stainless, and heavy chassis.",
    icon: Flame,
    image: weldingImg,
    description:
      "Structural and cosmetic welding for chassis, frames, brackets, and beds — done by certified welders across all common materials.",
    includes: [
      "Steel, aluminum, and stainless",
      "Frame and chassis repair",
      "Bracket and mount fabrication",
      "Bed and structural welding",
    ],
  },
];
