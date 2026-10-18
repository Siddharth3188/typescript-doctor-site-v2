import type { Metadata } from "next";
import { CtaBand, Eyebrow, H2, PageHero, Section } from "@/components/ui";
import ServiceCards from "@/components/ServiceCards";
import Faq from "@/components/Faq";

export const metadata: Metadata = { title: "Services", description: "General consultation, preventive health and follow-up care at Willow Medical Clinic (fictional concept)." };

const guide = [
  { q: "Which service should I choose?", a: "If you are unsure, choose General Consultation or write “Other enquiry”. The clinic can guide you when it replies." },
  { q: "Does the website offer medical advice or diagnosis?", a: "No. The website provides general information only. Medical questions are discussed with the doctor during a consultation." },
  { q: "Are these services real?", a: "They are example services for a fictional clinic concept and can be customised for an actual practice." },
];
export default function Services() {
  return (
    <>
      <PageHero eyebrow="Services" title="Healthcare Services" text="Three core services for everyday and preventive healthcare, each explained in plain language." />
      <Section><ServiceCards /></Section>
      <Section tone="soft"><div className="grid gap-10 lg:grid-cols-[1fr_1.6fr]"><div><Eyebrow>Guidance</Eyebrow><H2>Before You Enquire</H2></div><Faq items={guide} /></div></Section>
      <CtaBand />
    </>
  );
}
