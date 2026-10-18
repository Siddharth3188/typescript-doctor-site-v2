import Link from "next/link";
import { services } from "@/data/clinic";
import Photo from "./Photo";
import Reveal from "./Reveal";

export default function ServiceCards() {
  return (
    <ul className="grid gap-6 md:grid-cols-3">
      {services.map((s, i) => (
        <li key={s.slug}>
          <Reveal delay={i * 120}>
            <Link href={`/services/${s.slug}`} aria-label={`Learn more about ${s.title}`} className="group relative block aspect-[3/4] overflow-hidden rounded-2xl bg-teal-deep">
              <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"><Photo src={s.image} alt={s.imageAlt} /></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c211e] via-[#0c211e]/60 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <p className="text-xs font-semibold uppercase tracking-[.16em] text-[#f0b898]">0{i + 1}</p>
                <h3 className="mt-1 font-serif text-3xl">{s.title}</h3>
                <p className="mt-2 text-sm text-[#e7dcc7]">{s.summary}</p>
                <span className="mt-4 inline-block border-b border-[#f0b898] pb-0.5 text-sm font-semibold">Explore →</span>
              </div>
            </Link>
          </Reveal>
        </li>
      ))}
    </ul>
  );
}
