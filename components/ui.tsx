import Link from "next/link";
import type { ReactNode } from "react";

const paths: Record<string, string> = {
  chat: "M4 5h16v11H9l-5 4V5z", leaf: "M5 19c0-9 5-14 14-14 0 9-5 14-14 14zm0 0l8-8", repeat: "M4 12a8 8 0 0113-6l3 3M20 12a8 8 0 01-13 6l-3-3M20 4v5h-5M4 20v-5h5",
  calendar: "M4 6h16v14H4zM4 10h16M8 3v4M16 3v4", phone: "M5 4h4l2 5-2 1a11 11 0 005 5l1-2 5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z",
  pin: "M12 21s7-6 7-11a7 7 0 10-14 0c0 5 7 11 7 11zm0-8a3 3 0 100-6 3 3 0 000 6z", clock: "M12 21a9 9 0 100-18 9 9 0 000 18zM12 7v5l3 2",
  search: "M11 18a7 7 0 100-14 7 7 0 000 14zM21 21l-5-5", send: "M4 12l16-8-6 16-3-7-7-1z", check: "M5 12l5 5 9-10",
};
export function Icon({ name, className = "h-6 w-6" }: { name: string; className?: string }) {
  return <svg aria-hidden viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d={paths[name] ?? paths.check} /></svg>;
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <svg aria-hidden viewBox="0 0 32 32" className="h-8 w-8"><circle cx="16" cy="16" r="16" fill={light ? "#E8F3EF" : "#176B67"} /><path d="M16 25c0-8 1-12 7-16-1 8-3 12-7 16zM16 25c0-6-1-9-6-12 0 6 2 9 6 12z" fill={light ? "#176B67" : "#fff"} /></svg>
      <span className={`font-serif text-xl tracking-tight ${light ? "text-white" : "text-teal-deep"}`}>Willow <span className="font-sans text-[11px] font-semibold uppercase tracking-[.18em]">Medical Clinic</span></span>
    </span>
  );
}

export function Btn({ href, children, variant = "primary" }: { href: string; children: ReactNode; variant?: "primary" | "secondary" | "light" }) {
  const v = { primary: "bg-teal-deep text-white hover:bg-[#1d4a42]", secondary: "border border-teal-deep text-teal-deep hover:bg-mint", light: "bg-white text-teal-deep hover:bg-mint" }[variant];
  return <Link href={href} className={`inline-flex min-h-11 items-center justify-center rounded-lg px-5 py-2.5 text-sm font-semibold transition-colors ${v}`}>{children}</Link>;
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="mb-3 text-xs font-semibold uppercase tracking-[.16em] text-teal-mid">{children}</p>;
}
export function H2({ children }: { children: ReactNode }) {
  return <h2 className="font-serif text-4xl leading-[1.05] tracking-tight text-ink sm:text-5xl">{children}</h2>;
}
export function Section({ children, tone = "white", id }: { children: ReactNode; tone?: "white" | "soft"; id?: string }) {
  return <section id={id} className={tone === "soft" ? "bg-soft" : "bg-white"}><div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">{children}</div></section>;
}

export { default as Photo } from "./Photo";

export function PageHero({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <header className="bg-mint">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:py-20">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="max-w-3xl font-serif text-4xl leading-tight sm:text-5xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-lg text-muted">{text}</p>
      </div>
    </header>
  );
}

export function CtaBand({ title = "Have a Question About an Appointment?", text = "Get in touch to enquire about consultations and clinic information.", label = "Contact the Clinic" }: { title?: string; text?: string; label?: string }) {
  return (
    <section className="bg-teal-deep">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 py-14 md:flex-row md:items-center">
        <div><h2 className="font-serif text-3xl text-white">{title}</h2><p className="mt-2 max-w-xl text-[#e7dcc7]">{text}</p></div>
        <Btn href="/contact#enquiry" variant="light">{label}</Btn>
      </div>
    </section>
  );
}
