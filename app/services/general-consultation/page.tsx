import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = { title: "General Consultation", description: "A general consultation is a conversation with your doctor about your health, in clear and accessible language." };

export default function Page() {
  return <ServicePage eyebrow="Services" title="General Consultation" intro="A general consultation is a conversation with your doctor about your health, in clear and accessible language." image="/images/consultation.jpg" alt="Illustration of a doctor speaking with a patient" blocks={[{h:"What it generally involves",items:["A relaxed discussion about what you would like to talk about.","Time to ask questions and understand the next steps.","Clear explanations from your doctor in everyday language."]},{h:"What you may want to prepare",items:["A short list of questions or topics.","Medicines you currently take, and any earlier reports you already have.","Anything you would like to be able to remember afterwards."]},{h:"How to enquire",items:["Use the enquiry form on the Contact page, then wait for the clinic to confirm arrangements."]}]} />;
}
