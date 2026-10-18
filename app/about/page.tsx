import type { Metadata } from "next";
import { Btn, CtaBand, H2, PageHero, Photo, Section } from "@/components/ui";
import { clinic } from "@/data/clinic";

export const metadata: Metadata = { title: "About", description: `Learn about ${clinic.doctor} and the patient-centred approach at ${clinic.name}.` };

export default function About() {
  return (
    <>
      <PageHero eyebrow="About the practice" title={`Meet ${clinic.doctor}`} text="A general healthcare practice built around clear conversation and thoughtful, personal consultations." />
      <Section>
        <div className="grid items-start gap-12 md:grid-cols-[1fr_1.4fr]">
          <div className="aspect-[4/5] overflow-hidden rounded-xl border border-line"><Photo src="/images/doctor.jpg" alt={`Illustrated portrait of ${clinic.doctor}`} priority /></div>
          <div className="space-y-5 text-lg text-muted">
            <H2>A doctor who listens first</H2>
            <p>{clinic.doctor} practises general healthcare. Consultations are designed so that patients feel heard, understood and able to ask questions without feeling rushed.</p>
            <p>Professional qualifications and registration details are provided by the clinic and are shown here once the practice has confirmed them.</p>
          </div>
        </div>
      </Section>
      <Section tone="soft">
        <div className="grid gap-6 md:grid-cols-3">
          {[["Practice philosophy", "Good healthcare starts with a good conversation. We aim to explain things in plain language and respect your preferences."], ["General healthcare focus", "Everyday health questions, preventive discussions and follow-up visits, all in one place."], ["Communication approach", "Clear information, considered answers and a courteous, unhurried manner at every stage."]].map(([t, d]) => (
            <div key={t} className="rounded-xl border border-line bg-white p-6"><h3 className="font-serif text-xl">{t}</h3><p className="mt-2 text-muted">{d}</p></div>
          ))}
        </div>
      </Section>
      <Section>
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div><H2>What to expect from an enquiry</H2>
            <ul className="mt-5 space-y-3 text-lg text-muted">
              <li>You share your name, phone number, preferred date and the type of enquiry.</li>
              <li>You review the message before anything is sent.</li>
              <li>The clinic replies to confirm whether and when an appointment is possible.</li></ul>
            <div className="mt-7 flex flex-wrap gap-3"><Btn href="/services" variant="secondary">View Services</Btn><Btn href="/contact#enquiry">Request an Appointment</Btn></div></div>
          <div className="aspect-[4/5] max-h-[28rem] overflow-hidden rounded-xl border border-line"><Photo src="/images/clinic.jpg" alt="Illustration of a bright, calm consultation room" /></div>
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
