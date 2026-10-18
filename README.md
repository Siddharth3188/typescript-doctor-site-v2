# Willow Medical Clinic — Doctor & Clinic Website (Business Pack)

**Fictional concept.** Willow Medical Clinic and Dr. Ananya Rao are invented for demonstration. No real address, phone, hours, credentials, reviews or outcomes are claimed.

Stack: Next.js 15 (App Router), TypeScript, Tailwind CSS 3. No backend, database or CMS.

## Run
```
npm install
npm run dev        # http://localhost:3000
npm run lint && npm run typecheck
npm run build && npm start
```

## Deploy to Vercel
Push to a Git repo, import it at vercel.com/new (framework auto-detected), click Deploy. No environment variables are needed.

## Customise for a real client
- **Clinic name, doctor, phone, WhatsApp, address, hours, directions link, services, FAQs:** `data/clinic.ts`. Empty contact fields hide the matching live action and show a notice.
- **Doctor portrait & photos:** replace `public/images/doctor-portrait.svg`, `consultation.svg`, `clinic-room.svg` (or add `.webp` files and update the `src` values in `app/` and `components/`). The current files are **illustrations used as stand-ins**, not photographs. Add licensed or client-supplied photos before showing this to a client.
- **Service detail copy:** `app/services/*/page.tsx`. **Wordmark:** `components/ui.tsx` (`Logo`). **Colours:** `tailwind.config.ts`.

## Needs a real backend / external service
- Form delivery: the form only prepares a WhatsApp message (needs `whatsapp` set). Direct email submission, a booking calendar or storage would need a backend or third-party service.
- Maps embed, analytics and real reviews are not included.

## Photography (important)
Photos are **not bundled**. Until you add them, each image slot shows its illustrated fallback (never a broken icon).
1. Get a free key at https://www.pexels.com/api/ and run `PEXELS_API_KEY=xxxx npm run images`.
2. This saves `hero.jpg`, `doctor.jpg`, `consultation.jpg`, `clinic.jpg`, `care.jpg` into `public/images/` plus `CREDITS.md`.
3. Check every photo by eye. Edit the search phrases in `scripts/fetch-images.mjs` for another industry, or drop in your own files with the same names.

## Adapting to another industry
Colour tokens: `tailwind.config.ts`. Business content: `data/clinic.ts` (name, services, FAQs, images). Section copy: `app/*`. Shared pieces (`components/ui.tsx`, `Photo`, `Reveal`, `Faq`, `EnquiryForm`) are industry-neutral.
