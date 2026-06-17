import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Twitter, Linkedin, Phone, Mail, MapPin } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative border-t-2 border-[var(--gold)] bg-[#0A0A0A]">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="space-y-5">
            <Logo />
            <p className="text-sm text-[#A0A0A0] max-w-xs">
              Expert Service. Zero Shortcuts. Truck &amp; diesel pickup maintenance and repair you can trust.
            </p>
            <div className="flex items-center gap-3">
              {[
                { Icon: Instagram, href: "https://instagram.com/georgiatruckcare87", label: "Instagram" },
                { Icon: Facebook, href: "#", label: "Facebook" },
                { Icon: Twitter, href: "#", label: "Twitter" },
                { Icon: Linkedin, href: "#", label: "LinkedIn" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[var(--border)] text-white/70 transition-colors hover:border-[var(--gold)] hover:text-[var(--gold)]"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.18em] text-[var(--gold)] mb-5">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {[
                ["/", "Home"],
                ["/about", "About"],
                ["/services", "Services"],
                ["/reviews", "Reviews"],
                ["/faq", "FAQ"],
                ["/contact", "Contact"],
              ].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="text-white/70 hover:text-[var(--gold)] transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.18em] text-[var(--gold)] mb-5">Contact Info</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex gap-3">
                <Phone className="h-4 w-4 text-[var(--gold)] mt-0.5 shrink-0" />
                <a href="tel:+16177673926" className="hover:text-white">(617) 767-3926</a>
              </li>
              <li className="flex gap-3">
                <Mail className="h-4 w-4 text-[var(--gold)] mt-0.5 shrink-0" />
                <a href="mailto:georgiatruckcare87@gmail.com" className="hover:text-white break-all">georgiatruckcare87@gmail.com</a>
              </li>
              <li className="flex gap-3">
                <MapPin className="h-4 w-4 text-[var(--gold)] mt-0.5 shrink-0" />
                <span>3385 Donald Lee Hollowell Pkwy NW, Atlanta, GA 30331</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.18em] text-[var(--gold)] mb-5">Hours</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex justify-between"><span>Mon – Fri</span><span className="text-white">7:30am – 5pm</span></li>
              <li className="flex justify-between"><span>Saturday</span><span className="text-white">7:30am – 12pm</span></li>
              <li className="flex justify-between"><span>Sunday</span><span className="text-white/50">Closed</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-[var(--border)] pt-6 text-center text-xs text-white/50">
          © 2025 Georgia Truck Care. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
