"use client";
import { useState } from "react";
import { clinic } from "@/data/clinic";
import { Icon } from "./ui";

const types = ["General consultation", "Preventive health", "Follow-up care", "Other enquiry"];
type V = { name: string; phone: string; date: string; type: string; message: string };
const empty: V = { name: "", phone: "", date: "", type: "", message: "" };

function validate(v: V) {
  const e: Partial<Record<keyof V, string>> = {};
  if (v.name.trim().length < 2) e.name = "Please enter your full name.";
  if (!/^\+?[0-9\s-]{8,15}$/.test(v.phone.trim())) e.phone = "Enter a valid phone number (8–15 digits).";
  if (!v.date) e.date = "Please choose a preferred date.";
  else if (new Date(v.date) < new Date(new Date().toDateString())) e.date = "Please choose today or a future date.";
  if (!v.type) e.type = "Please select an enquiry type.";
  return e;
}

export default function EnquiryForm() {
  const [v, setV] = useState<V>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof V, string>>>({});
  const [review, setReview] = useState(false);
  const wa = clinic.whatsapp.replace(/\D/g, "");
  const set = (k: keyof V) => (ev: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setV({ ...v, [k]: ev.target.value });
  const text = `Hello ${clinic.name}, I would like to enquire about an appointment.\nName: ${v.name}\nPhone: ${v.phone}\nPreferred date: ${v.date}\nEnquiry: ${v.type}${v.message ? `\nMessage: ${v.message}` : ""}`;

  const submit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate(v);
    setErrors(e);
    setReview(Object.keys(e).length === 0);
  };
  const field = "mt-1.5 w-full rounded-lg border border-line bg-white px-3.5 py-2.5 text-base focus:border-teal-mid";
  const err = (k: keyof V) => errors[k] && <p id={`${k}-err`} className="mt-1 text-sm text-[#b42318]">{errors[k]}</p>;
  const a11y = (k: keyof V) => ({ "aria-invalid": !!errors[k], "aria-describedby": errors[k] ? `${k}-err` : undefined });

  if (review)
    return (
      <div className="rounded-xl border border-line bg-white p-6 shadow-card" role="region" aria-label="Review your enquiry">
        <h3 className="font-serif text-2xl">Review your enquiry</h3>
        <p className="mt-2 text-sm text-muted">Nothing has been sent yet. This is only a prepared message, and it does not confirm an appointment.</p>
        <pre className="mt-4 whitespace-pre-wrap rounded-lg bg-soft p-4 font-sans text-sm">{text}</pre>
        <div className="mt-5 flex flex-wrap gap-3">
          {wa ? (
            <a className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-teal-deep px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#1d4a42]" target="_blank" rel="noopener noreferrer" href={`https://wa.me/${wa}?text=${encodeURIComponent(text)}`}><Icon name="send" className="h-4 w-4" />Open WhatsApp to send</a>
          ) : (
            <p className="rounded-lg bg-sky p-3 text-sm">Online enquiries are not yet connected. The clinic has not configured a WhatsApp number (set <code>whatsapp</code> in <code>data/clinic.ts</code>), so this demo cannot send your message.</p>
          )}
          <button type="button" onClick={() => setReview(false)} className="min-h-11 rounded-lg border border-teal-deep px-5 text-sm font-semibold text-teal-deep hover:bg-mint">Edit details</button>
        </div>
      </div>
    );

  return (
    <form onSubmit={submit} noValidate className="rounded-xl border border-line bg-white p-6 shadow-card">
      <div className="grid gap-5 sm:grid-cols-2">
        <div><label htmlFor="name" className="text-sm font-medium">Full name</label><input id="name" autoComplete="name" className={field} value={v.name} onChange={set("name")} {...a11y("name")} />{err("name")}</div>
        <div><label htmlFor="phone" className="text-sm font-medium">Phone number</label><input id="phone" type="tel" autoComplete="tel" className={field} value={v.phone} onChange={set("phone")} {...a11y("phone")} />{err("phone")}</div>
        <div><label htmlFor="date" className="text-sm font-medium">Preferred date</label><input id="date" type="date" className={field} value={v.date} onChange={set("date")} {...a11y("date")} />{err("date")}</div>
        <div><label htmlFor="type" className="text-sm font-medium">Enquiry type</label>
          <select id="type" className={field} value={v.type} onChange={set("type")} {...a11y("type")}><option value="">Select…</option>{types.map((t) => <option key={t}>{t}</option>)}</select>{err("type")}</div>
      </div>
      <div className="mt-5"><label htmlFor="message" className="text-sm font-medium">Message <span className="font-normal text-muted">(optional)</span></label><textarea id="message" rows={4} maxLength={400} className={field} value={v.message} onChange={set("message")} /></div>
      <p className="mt-3 text-xs text-muted">Privacy: please do not include medical history or sensitive health information in this form.</p>
      <button type="submit" className="mt-5 min-h-11 rounded-lg bg-teal-deep px-6 text-sm font-semibold text-white hover:bg-[#1d4a42]">Review enquiry</button>
    </form>
  );
}
