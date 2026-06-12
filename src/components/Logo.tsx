import { Link } from "@tanstack/react-router";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`flex items-center group ${className}`} aria-label="Georgia Truck Care home">
      <img
        src="/logosf.jpeg"
        alt="Georgia Truck Care"
        className="h-9 w-9 object-contain block"
        loading="eager"
      />
    </Link>
  );
}
