import { Link } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/reviews", label: "Reviews" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-200 ${
        scrolled ? "bg-[#0A0A0A]/90 backdrop-blur-md border-b border-[var(--border)]" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
        <Logo />

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-[var(--gold)]" }}
              inactiveProps={{ className: "text-white/70 hover:text-white" }}
              className="px-4 py-2 text-sm font-medium tracking-wide transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-[var(--gold)] px-5 py-2.5 text-sm font-bold uppercase tracking-[0.08em] text-[#0A0A0A] transition-colors hover:bg-[var(--gold-hover)]"
          >
            Book a Service
          </Link>
        </div>

        <button
          aria-label="Open menu"
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-[var(--border)] text-white"
          onClick={() => setOpen(true)}
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-[#0A0A0A] transition-opacity duration-200 lg:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-[var(--border)]">
          <Logo />
          <button
            aria-label="Close menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[var(--border)] text-white"
            onClick={() => setOpen(false)}
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="flex flex-col px-5 py-8 gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-[var(--gold)]" }}
              inactiveProps={{ className: "text-white" }}
              className="py-4 text-2xl font-display font-bold tracking-wide border-b border-[var(--border)]"
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-md bg-[var(--gold)] px-5 py-4 text-sm font-bold uppercase tracking-[0.08em] text-[#0A0A0A]"
          >
            Book a Service
          </Link>
          <a
            href="tel:+16177673926"
            className="mt-3 inline-flex items-center justify-center gap-2 rounded-md border border-[var(--border)] px-5 py-4 text-sm font-medium text-white"
          >
            <Phone className="h-4 w-4 text-[var(--gold)]" /> (617) 767-3926
          </a>
        </nav>
      </div>
    </header>
  );
}
