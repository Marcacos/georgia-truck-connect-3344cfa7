import { Link } from "@tanstack/react-router";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`flex items-center gap-2.5 group ${className}`} aria-label="Georgia Truck Care home">
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-[var(--gold)] text-[#0A0A0A] font-black text-base shadow-[0_0_0_1px_rgba(245,200,66,0.4)]">
        GT
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display font-bold text-[15px] tracking-wide text-white">GEORGIA TRUCK CARE</span>
        <span className="text-[10px] uppercase tracking-[0.22em] text-[var(--gold)]">Expert Service</span>
      </span>
    </Link>
  );
}
