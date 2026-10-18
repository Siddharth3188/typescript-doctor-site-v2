import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = { title: "Follow-up Care", description: "Follow-up consultations are a chance to review how you are doing and keep communication with your doctor clear." };

export default function Page() {
  return <ServicePage eyebrow="Services" title="Follow-up Care" intro="Follow-up consultations are a chance to review how you are doing and keep communication with your doctor clear." image="/images/doctor.jpg" alt="Illustrated portrait of the doctor" blocks={[{h:"The purpose of follow-up",items:["Reviewing progress since a previous consultation.","Asking questions that came up afterwards.","Agreeing what to do next, in your own time and words."]},{h:"Good to know",items:["This demonstration website does not store patient records.","Please bring any notes or reports you already hold."]},{h:"How to enquire",items:["Choose “Follow-up care” in the enquiry form on the Contact page."]}]} />;
}
