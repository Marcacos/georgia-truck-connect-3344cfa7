import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/georgia-logo.png.asset.json";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`flex items-center group ${className}`} aria-label="Georgia Truck Care home">
      <img
        src={logoAsset.url}
        alt="Georgia Truck Care"
        className="h-16 md:h-20 lg:h-24 w-auto object-contain block"
        loading="eager"
      />
    </Link>
  );
}
