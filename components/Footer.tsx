import Link from "next/link";
import { clinic, services } from "@/data/clinic";
import { Logo } from "./ui";

export default function Footer() {
  return (
    <footer className="bg-[#0c211e] text-[#d9cfba]">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        <div><Logo light /><p className="mt-4 max-w-xs text-sm">{clinic.tagline} — {clinic.city}.</p></div>
        <nav aria-label="Footer services"><h2 className="mb-3 text-sm font-semibold text-white">Services</h2>
          <ul className="space-y-2 text-sm">{services.map((s) => <li key={s.slug}><Link className="hover:text-white" href={`/services/${s.slug}`}>{s.title}</Link></li>)}</ul></nav>
        <nav aria-label="Footer pages"><h2 className="mb-3 text-sm font-semibold text-white">Clinic</h2>
          <ul className="space-y-2 text-sm">{[["/", "Home"], ["/about", "About"], ["/services", "Services"], ["/contact", "Contact"]].map(([h, l]) => <li key={h}><Link className="hover:text-white" href={h}>{l}</Link></li>)}</ul></nav>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-xs">
        © {new Date().getFullYear()} {clinic.name}. This website is a fictional concept for demonstration; it does not represent a real medical practice. It does not provide medical advice.
      </div>
    </footer>
  );
}
