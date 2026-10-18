// CENTRAL CONFIGURATION — edit this file to customise the site for a real clinic.
// Leave contact fields empty ("") and the related contact actions are hidden automatically.
export const clinic = {
  name: "Willow Medical Clinic",
  doctor: "Dr. Ananya Rao",
  tagline: "General and preventive healthcare",
  city: "Chennai, Tamil Nadu, India",
  phone: "",            // e.g. "+91 00000 00000" (shown and used for tel: links)
  whatsapp: "",         // digits with country code, e.g. "910000000000"
  email: "",
  address: "",          // full street address
  hours: "",            // e.g. "Mon–Sat, 9:00 am – 6:00 pm"
  directionsUrl: "",    // Google Maps link
  isFictionalDemo: true,
};

export const services = [
  { slug: "general-consultation", title: "General Consultation", icon: "chat",
    image: "/images/consultation.jpg", summary: "An unhurried conversation about your health concerns, questions and day-to-day wellbeing.",
    imageAlt: "Doctor and patient in conversation" },
  { slug: "preventive-health", title: "Preventive Health", icon: "leaf",
    image: "/images/clinic.jpg", summary: "Discussions about healthy routines and staying well, tailored to you rather than a one-size-fits-all list.",
    imageAlt: "Calm clinic space" },
  { slug: "follow-up-care", title: "Follow-up Care", icon: "repeat",
    image: "/images/care.jpg", summary: "Return visits to review how you are doing and keep communication with your doctor clear and continuous.",
    imageAlt: "Doctor reviewing notes" },
] as const;

export const faqs = [
  { q: "How do I request an appointment?", a: "Use the enquiry form on the Contact page. It prepares a message to the clinic. Sending an enquiry does not confirm an appointment; the clinic will confirm arrangements with you directly." },
  { q: "What should I bring to a consultation?", a: "Many patients find it helpful to bring a list of questions, any current medicines, and earlier reports they already have. The clinic can tell you if anything else is needed." },
  { q: "How can I contact the clinic?", a: "Phone and WhatsApp details appear on the Contact page once the clinic has published them. You can also use the enquiry form." },
  { q: "How do I find the clinic?", a: "The Contact page lists the clinic address and a directions link when these have been configured by the clinic." },
  { q: "Can I share my medical history through this website?", a: "Please don’t. This website is for general enquiries only. Discuss medical details directly with the clinic during your consultation." },
];
