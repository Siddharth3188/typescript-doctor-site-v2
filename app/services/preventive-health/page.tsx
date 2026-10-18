import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = { title: "Preventive Health", description: "Preventive healthcare is about staying well through informed conversations and healthy habits, tailored to the individual." };

export default function Page() {
  return <ServicePage eyebrow="Services" title="Preventive Health" intro="Preventive healthcare is about staying well through informed conversations and healthy habits, tailored to the individual." image="/images/clinic.jpg" alt="Illustration of a bright, calm consultation room" blocks={[{h:"The general idea",items:["Talking with a doctor about routines, lifestyle and wellbeing.","Understanding which questions are worth asking for your situation.","Recognising that no two patients need exactly the same approach."]},{h:"What to know",items:["The doctor decides what is appropriate for each person; no fixed schedule applies to everyone.","Nothing on this page replaces a personal consultation."]},{h:"How to enquire",items:["Choose “Preventive health” in the enquiry form on the Contact page."]}]} />;
}
