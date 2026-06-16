import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { useState } from "react";
import { PageHero, SiteLayout } from "../components/SiteLayout";
import { Reveal } from "../components/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Georgia Truck Care" },
      { name: "description", content: "Get in touch with Georgia Truck Care in Atlanta. Call, email, or send us a message — we'll get you back on the road." },
      { property: "og:title", content: "Contact — Georgia Truck Care" },
      { property: "og:description", content: "Let's get you back on the road." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

// Formspree endpoint — replace with your actual form ID from https://formspree.io
// 1. Go to https://formspree.io and create a free account
// 2. Create a new form and set the recipient to: georgiacustomgates@gmail.com
// 3. Copy the endpoint URL (looks like: https://formspree.io/f/XXXXXXXX)
// 4. Paste it below, replacing "YOUR_FORM_ID"
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xeewnbqz";

type Status = "idle" | "submitting" | "success" | "error";

function ContactPage() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const next: typeof errors = {};
    if (!name) next.name = "Please enter your name.";
    else if (name.length > 100) next.name = "Name is too long.";
    if (!email) next.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Please enter a valid email.";
    if (!message) next.message = "Please enter a message.";
    else if (message.length > 2000) next.message = "Message is too long.";

    setErrors(next);
    if (Object.keys(next).length) return;

    setStatus("submitting");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <SiteLayout>
      <PageHero
        label="Get In Touch"
        title="Let's Get You Back on the Road."
        subtitle="Send us a message, give us a call, or stop by the shop. We respond fast."
      />

      <section className="bg-[#0A0A0A]">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-20 grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <Reveal>
            <div className="bg-[#141414] border border-[var(--border)] p-7 lg:p-10">
              <span className="section-label mb-4">Send a Message</span>
              <h2 className="font-display font-bold uppercase text-2xl text-white">We'll respond within 24 hours.</h2>

              <form onSubmit={onSubmit} noValidate className="mt-8 space-y-5">
                <Field label="Full Name" name="name" error={errors.name} required>
                  <input
                    id="name" name="name" type="text" autoComplete="name" maxLength={100}
                    className="w-full bg-[#0A0A0A] border border-[var(--border)] focus:border-[var(--gold)] focus:outline-none rounded-md px-4 py-3 text-white placeholder:text-white/30 transition-colors"
                    placeholder="John Smith"
                  />
                </Field>

                <Field label="Email Address" name="email" error={errors.email} required>
                  <input
                    id="email" name="email" type="email" autoComplete="email" maxLength={255}
                    className="w-full bg-[#0A0A0A] border border-[var(--border)] focus:border-[var(--gold)] focus:outline-none rounded-md px-4 py-3 text-white placeholder:text-white/30 transition-colors"
                    placeholder="you@example.com"
                  />
                </Field>

                <Field label="Message" name="message" error={errors.message} required>
                  <textarea
                    id="message" name="message" rows={6} maxLength={2000}
                    className="w-full bg-[#0A0A0A] border border-[var(--border)] focus:border-[var(--gold)] focus:outline-none rounded-md px-4 py-3 text-white placeholder:text-white/30 transition-colors resize-y"
                    placeholder="Tell us what you need — make, model, issue, timing…"
                  />
                </Field>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-[var(--gold)] px-6 py-4 text-sm font-bold uppercase tracking-[0.08em] text-[#0A0A0A] hover:bg-[var(--gold-hover)] transition-colors disabled:opacity-60"
                >
                  {status === "submitting" ? "Sending…" : (<>Send Message <Send className="h-4 w-4" /></>)}
                </button>

                {status === "success" && (
                  <div role="status" className="flex items-start gap-3 rounded-md border border-[var(--gold)]/40 bg-[var(--gold)]/10 p-4 text-sm text-white">
                    <CheckCircle2 className="h-5 w-5 text-[var(--gold)] shrink-0 mt-0.5" />
                    Message sent! We'll get back to you soon.
                  </div>
                )}
                {status === "error" && (
                  <div role="alert" className="flex items-start gap-3 rounded-md border border-red-500/40 bg-red-500/10 p-4 text-sm text-white">
                    <AlertCircle className="h-5 w-5 text-red-400 shrink-0 mt-0.5" />
                    Something went wrong. Please try again, or call us at (617) 767-3926.
                  </div>
                )}
              </form>
            </div>
          </Reveal>

          {/* Info */}
          <Reveal delay={120}>
            <div className="space-y-6">
              <div className="bg-[#141414] border border-[var(--border)] p-7 lg:p-10">
                <span className="section-label mb-4">Contact Info</span>
                <ul className="mt-6 space-y-5">
                  <InfoRow Icon={Phone} label="Phone" value="(617) 767-3926" href="tel:+16177673926" />
                  <InfoRow Icon={Mail} label="Email" value="georgiacustomgates@gmail.com" href="mailto:georgiacustomgates@gmail.com" />
                  <InfoRow Icon={MapPin} label="Address" value="3385 Donald Lee Hollowell Pkwy NW, Atlanta, GA 30331" />
                </ul>
              </div>

              <div className="bg-[#141414] border border-[var(--border)] p-7 lg:p-10">
                <span className="section-label mb-4">Business Hours</span>
                <ul className="mt-6 space-y-3 text-sm">
                  <Hours day="Monday – Friday" time="6:00 AM – 6:00 PM" />
                  <Hours day="Saturday" time="7:00 AM – 3:00 PM" />
                  <Hours day="Sunday" time="Closed" muted />
                </ul>
                <div className="mt-6 flex items-center gap-2 text-xs text-[#A0A0A0]">
                  <Clock className="h-3.5 w-3.5 text-[var(--gold)]" /> Roadside assistance during business hours.
                </div>
              </div>

              <div className="bg-[#141414] border border-[var(--border)] overflow-hidden">
                <iframe
                  title="Georgia Truck Care location"
                  src="https://www.google.com/maps?q=3385+Donald+Lee+Hollowell+Pkwy+NW,+Atlanta,+GA+30331&output=embed"
                  className="w-full h-72 border-0 grayscale-[40%] contrast-110"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({ label, name, error, required, children }: { label: string; name: string; error?: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs uppercase tracking-[0.14em] text-[#A0A0A0] mb-2">
        {label} {required && <span className="text-[var(--gold)]">*</span>}
      </label>
      {children}
      {error && <p className="mt-2 text-xs text-red-400">{error}</p>}
    </div>
  );
}

function InfoRow({ Icon, label, value, href }: { Icon: React.ComponentType<{ className?: string }>; label: string; value: string; href?: string }) {
  const content = (
    <>
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-[var(--gold)]/10 text-[var(--gold)] shrink-0">
        <Icon className="h-4 w-4" />
      </span>
      <div>
        <div className="text-xs uppercase tracking-[0.14em] text-[#A0A0A0]">{label}</div>
        <div className="mt-1 text-white">{value}</div>
      </div>
    </>
  );
  return (
    <li>
      {href ? (
        <a href={href} className="flex items-start gap-4 hover:text-[var(--gold)] transition-colors">{content}</a>
      ) : (
        <div className="flex items-start gap-4">{content}</div>
      )}
    </li>
  );
}

function Hours({ day, time, muted }: { day: string; time: string; muted?: boolean }) {
  return (
    <li className="flex justify-between border-b border-[var(--border)] last:border-0 pb-3 last:pb-0">
      <span className="text-[#A0A0A0]">{day}</span>
      <span className={muted ? "text-white/40" : "text-white font-medium"}>{time}</span>
    </li>
  );
}
