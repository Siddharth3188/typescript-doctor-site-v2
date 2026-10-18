import type { Metadata } from "next";
import { Eyebrow, H2, Icon, PageHero, Section } from "@/components/ui";
import EnquiryForm from "@/components/EnquiryForm";
import Faq from "@/components/Faq";
import { clinic, faqs } from "@/data/clinic";

export const metadata: Metadata = { title: "Contact", description: `Contact ${clinic.name} and send an appointment enquiry.` };

export default function Contact() {
  const tel = clinic.phone.replace(/[^\d+]/g, "");
  const wa = clinic.whatsapp.replace(/\D/g, "");
  const rows: [string, string, React.ReactNode][] = [
    ["phone", "Phone", tel ? <a className="text-teal-deep underline" href={`tel:${tel}`}>{clinic.phone}</a> : null],
    ["send", "WhatsApp", wa ? <a className="text-teal-deep underline" href={`https://wa.me/${wa}`} target="_blank" rel="noopener noreferrer">Message the clinic</a> : null],
    ["pin", "Address", clinic.address ? <>{clinic.address}{clinic.directionsUrl && <> · <a className="text-teal-deep underline" href={clinic.directionsUrl} target="_blank" rel="noopener noreferrer">Get directions</a></>}</> : null],
    ["clock", "Opening hours", clinic.hours || null],
  ];
  return (
    <>
      <PageHero eyebrow="Contact" title="Contact the Clinic" text="Send an appointment enquiry or find the clinic’s details." />
      <Section>
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <h2 className="font-serif text-2xl">{clinic.name}</h2><p className="text-muted">{clinic.doctor} · {clinic.city}</p>
            <ul className="mt-6 space-y-4">
              {rows.map(([i, l, v]) => (
                <li key={l} className="flex gap-3"><span className="mt-0.5 text-teal-mid"><Icon name={i} /></span><div><p className="text-sm font-semibold">{l}</p><p className="text-muted">{v ?? "Not yet published. This detail will appear once the clinic adds it."}</p></div></li>
              ))}
            </ul>
          </div>
          <div id="enquiry" className="scroll-mt-24"><Eyebrow>Appointment enquiry</Eyebrow><H2>Request an Appointment</H2><div className="mt-6"><EnquiryForm /></div></div>
        </div>
      </Section>
      <Section tone="soft" id="faq"><div className="grid gap-10 lg:grid-cols-[1fr_1.6fr]"><div><Eyebrow>Patient information</Eyebrow><H2>Frequently Asked Questions</H2></div><Faq items={faqs} /></div></Section>
    </>
  );
}
