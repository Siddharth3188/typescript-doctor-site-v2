// Downloads real stock photographs (Pexels, free licence) into public/images/.
// Usage: PEXELS_API_KEY=your_free_key npm run images   (key: https://www.pexels.com/api/)
// Edit `slots` to change the photo searches for another industry. Writes public/images/CREDITS.md.
import { writeFile, mkdir } from "node:fs/promises";

const slots = {
  hero: "doctor smiling clinic bright",
  doctor: "female doctor portrait white coat",
  consultation: "doctor talking with patient consultation",
  clinic: "bright modern clinic room interior",
  care: "doctor patient follow up conversation",
};
const key = process.env.PEXELS_API_KEY;
if (!key) { console.error("Set PEXELS_API_KEY first (free at pexels.com/api)."); process.exit(1); }
await mkdir("public/images", { recursive: true });
const credits = ["# Photo credits (Pexels)\n"];
for (const [slot, q] of Object.entries(slots)) {
  const r = await fetch(`https://api.pexels.com/v1/search?query=${encodeURIComponent(q)}&per_page=1&orientation=${slot === "doctor" ? "portrait" : "landscape"}`, { headers: { Authorization: key } });
  const p = (await r.json()).photos?.[0];
  if (!p) { console.warn(`No result for ${slot}; keeping fallback.`); continue; }
  const img = await fetch(p.src.large2x);
  await writeFile(`public/images/${slot}.jpg`, Buffer.from(await img.arrayBuffer()));
  credits.push(`- ${slot}.jpg — ${p.photographer} (${p.url})`);
  console.log(`✓ ${slot}.jpg  ${p.photographer}`);
}
await writeFile("public/images/CREDITS.md", credits.join("\n") + "\n");
console.log("Review each photo (face visible, no watermark) before client use.");
