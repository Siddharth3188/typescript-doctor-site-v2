import Link from "next/link";
import { Btn, CtaBand, Eyebrow, H2, Icon, Photo, Section } from "@/components/ui";
import ServiceCards from "@/components/ServiceCards";
import Faq from "@/components/Faq";
import Reveal from "@/components/Reveal";
import { clinic, faqs } from "@/data/clinic";

export default function Home() {
  return (
    <>
      {/* Hero: full-bleed photograph, left-weighted overlay for legibility */}
      <section className="relative isolate overflow-hidden bg-teal-deep text-white">
        <div className="absolute inset-0 -z-10"><Photo src="/images/hero.jpg" alt={`${clinic.doctor} welcoming a patient in a bright consulting room`} priority className="object-[70%_30%]" /></div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0c211e] via-[#0c211e]/85 to-[#0c211e]/20 max-md:from-[#0c211e]/90 max-md:to-[#0c211e]/60" />
        <div className="mx-auto flex min-h-[78vh] max-w-6xl flex-col justify-center px-5 pb-32 pt-20">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[.2em] text-[#f0b898]">Thoughtful, patient-centred care</p>
          <h1 className="max-w-3xl font-serif text-5xl leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">Your health deserves <em className="text-[#f0b898]">thoughtful</em> care.</h1>
          <p className="mt-6 max-w-xl text-lg text-[#e7dcc7]">Clear medical guidance, personalised consultations, and a welcoming approach to everyday healthcare.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/contact#enquiry" className="inline-flex min-h-12 items-center rounded-lg bg-[#e07a4f] px-6 text-sm font-semibold text-[#1a0f0a] transition hover:-translate-y-0.5 hover:bg-[#f0905f]">Book an Appointment</Link>
            <Link href="/about" className="inline-flex min-h-12 items-center rounded-lg border border-white/60 px-6 text-sm font-semibold transition hover:bg-white/10">Meet Your Doctor</Link>
          </div>
          <p className="mt-6 text-sm text-[#d9cfba]">Healthcare information and appointment enquiries, made simple.</p>
        </div>
      </section>

      {/* Overlapping info strip */}
      <div className="relative z-10 mx-auto -mt-16 max-w-6xl px-5">
        <ul className="grid gap-px overflow-hidden rounded-2xl bg-line shadow-card sm:grid-cols-3">
          {[["chat", "General healthcare consultations", "/services/general-consultation"], ["leaf", "Preventive healthcare", "/services/preventive-health"], ["calendar", "Appointment enquiries", "/contact#enquiry"]].map(([i, l, h]) => (
            <li key={l} className="bg-white"><Link href={h} className="flex items-center gap-4 p-6 transition hover:bg-mint"><span className="flex h-11 w-11 items-center justify-center rounded-full bg-mint text-teal-mid"><Icon name={i} /></span><span className="font-medium">{l}</span></Link></li>
          ))}
        </ul>
      </div>

      {/* Intro: overlapping image composition */}
      <Section>
        <div className="grid items-center gap-14 md:grid-cols-2">
          <Reveal className="relative pb-12 pr-10">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl"><Photo src="/images/consultation.jpg" alt="A doctor listening to a patient during a consultation" /></div>
            <div className="absolute bottom-0 right-0 aspect-square w-2/5 overflow-hidden rounded-2xl border-8 border-white"><Photo src="/images/clinic.jpg" alt="A calm, light-filled consulting room" /></div>
          </Reveal>
          <Reveal delay={150}><Eyebrow>About the clinic</Eyebrow><H2>A more personal approach to healthcare</H2>
            <p className="mt-5 text-lg text-muted">{clinic.name} is a fictional general and preventive practice used to show what a complete clinic website can look like. Patients can learn about their doctor, explore services, and send an appointment enquiry in a few steps.</p>
            <p className="mt-3 text-lg text-muted">The focus is on clear communication, unhurried consultations and information that is easy to find.</p>
            <Link href="/about" className="mt-6 inline-block border-b-2 border-teal-mid pb-0.5 font-semibold text-teal-deep">About the practice →</Link></Reveal>
        </div>
      </Section>

      <Section tone="soft"><Reveal><div className="mb-10 max-w-xl"><Eyebrow>What we offer</Eyebrow><H2>Healthcare services</H2></div></Reveal><ServiceCards /></Section>

      {/* Doctor: dark, asymmetrical */}
      <section className="bg-teal-deep text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-[1fr_1.1fr]">
          <Reveal><div className="relative"><div className="aspect-[4/5] overflow-hidden rounded-2xl"><Photo src="/images/doctor.jpg" alt={`Portrait of ${clinic.doctor}`} /></div><div className="absolute -bottom-4 -right-3 rounded-xl bg-teal-mid px-5 py-3 text-sm font-semibold text-white shadow-card">{clinic.doctor}<span className="block text-xs font-normal text-[#f6e3d6]">General healthcare practice</span></div></div></Reveal>
          <Reveal delay={150}><p className="mb-3 text-xs font-semibold uppercase tracking-[.16em] text-[#f0b898]">Your doctor</p><h2 className="font-serif text-4xl leading-[1.05] sm:text-5xl">Meet {clinic.doctor}</h2>
            <p className="mt-5 text-lg text-[#e7dcc7]">{clinic.doctor} offers general healthcare consultations with an emphasis on listening first. Appointments give you space to ask questions and leave with a clear understanding of what was discussed.</p>
            <p className="mt-3 text-lg text-[#e7dcc7]">Her approach is calm, practical and respectful of the way each patient prefers to be involved in their own care.</p>
            <div className="mt-8 flex flex-wrap gap-3"><Btn href="/contact#enquiry" variant="light">Book an Appointment</Btn><Link href="/about" className="inline-flex min-h-11 items-center rounded-lg border border-white/50 px-5 text-sm font-semibold hover:bg-white/10">Read the full profile</Link></div></Reveal>
        </div>
      </section>

      <Section>
        <Reveal><div className="mb-10 max-w-xl"><Eyebrow>How it works</Eyebrow><H2>Getting started is simple</H2></div></Reveal>
        <ol className="grid gap-8 md:grid-cols-3">
          {[["Explore the services", "Browse the services to see which best matches what you would like to discuss."], ["Send an appointment enquiry", "Fill in a short form. It prepares a message for the clinic."], ["Contact the clinic to confirm", "An online enquiry does not automatically confirm an appointment. The clinic will confirm arrangements with you."]].map(([t, d], n) => (
            <Reveal key={t} delay={n * 120}><li className="border-t-2 border-teal-deep pt-5"><span className="font-serif text-5xl text-teal-mid">0{n + 1}</span><h3 className="mt-2 font-serif text-2xl">{t}</h3><p className="mt-2 text-muted">{d}</p></li></Reveal>
          ))}
        </ol>
      </Section>

      <Section tone="soft">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr]">
          <div><Eyebrow>Patient information</Eyebrow><H2>Common questions</H2><Link href="/contact#faq" className="mt-5 inline-block border-b-2 border-teal-mid pb-0.5 font-semibold text-teal-deep">See all FAQs →</Link></div>
          <Faq items={faqs.slice(0, 4)} />
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
