import { Btn, CtaBand, H2, PageHero, Photo, Section } from "./ui";

export default function ServicePage({ eyebrow, title, intro, blocks, image, alt }: { eyebrow: string; title: string; intro: string; blocks: { h: string; items: string[] }[]; image: string; alt: string }) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} text={intro} />
      <Section>
        <div className="grid items-start gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-10">
            {blocks.map((b) => (
              <div key={b.h}><H2>{b.h}</H2>
                <ul className="mt-4 space-y-3 text-lg text-muted">{b.items.map((i) => <li key={i} className="flex gap-3"><span aria-hidden className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-teal-mid" />{i}</li>)}</ul></div>
            ))}
            <p className="rounded-lg bg-sky p-4 text-sm">This page offers general information only. It is not medical advice, diagnosis or a guarantee of any health outcome.</p>
            <Btn href="/contact#enquiry">Enquire About an Appointment</Btn>
          </div>
          <div className="aspect-[4/5] overflow-hidden rounded-xl border border-line"><Photo src={image} alt={alt} /></div>
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
