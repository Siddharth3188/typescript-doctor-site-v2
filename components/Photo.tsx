"use client";
import { useState } from "react";

// Real photographs live at /images/<slot>.jpg (run `npm run images`). If a file is missing,
// the matching illustration is shown so there is never a broken-image icon.
const fallbacks: Record<string, string> = { "doctor.jpg": "doctor-portrait.svg", "hero.jpg": "doctor-portrait.svg", "consultation.jpg": "consultation.svg", "care.jpg": "consultation.svg", "clinic.jpg": "clinic-room.svg" };

export default function Photo({ src, alt, className = "", priority = false }: { src: string; alt: string; className?: string; priority?: boolean }) {
  const [cur, setCur] = useState(src);
  const name = src.split("/").pop() ?? "";
  const fb = fallbacks[name] ? `/images/${fallbacks[name]}` : undefined;
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={cur} alt={alt} width={1200} height={900} loading={priority ? "eager" : "lazy"} fetchPriority={priority ? "high" : "auto"} onError={() => fb && cur !== fb && setCur(fb)} className={`h-full w-full object-cover ${className}`} />;
}
