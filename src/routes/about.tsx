import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import ceoPortrait from "@/assets/ceo-portrait.jpeg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Noble Queen of the Universe" },
      { name: "description", content: "The story, leadership, and mission of Noble Queen of the Universe LTD Inc., founded by Erilene Antonio Noche." },
      { property: "og:title", content: "About NQOU" },
      { property: "og:description", content: "Founded in 2019. A global movement for women who lead through service and respect." },
    ],
  }),
  component: AboutPage,
});

const milestones = [
  { year: "2019", title: "Founded", body: "Noble Queen of the Universe LTD Inc. is founded by Erilene Antonio Noche on a single principle: respect for all." },
  { year: "2021", title: "Global Charter", body: "The Respect Charter formalizes our advocacy commitments across maternal health, education, and community development." },
  { year: "2023", title: "Big Three Alliance", body: "Strategic partnership formed with The Big Three Global Crown Production, expanding production and reach." },
  { year: "2024", title: "Patricia Javier Joins", body: "Actress and advocate Patricia Javier joins as Co-Chairperson, deepening our public voice." },
  { year: "2025", title: "40+ Nations", body: "The movement crosses 40 represented nations, with chapters and advocacy programs in every region." },
];

function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="The Organization"
        title={<>More than a pageant. <span className="italic text-champagne">A movement.</span></>}
        intro="Noble Queen of the Universe LTD Inc. is an international advocacy organization elevating women — including mothers and professionals — to act as global leaders and humanitarians."
      />

      {/* Vision / Mission */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-12">
          <div className="p-10 bg-card border border-navy/5 rounded-sm">
            <span className="eyebrow text-champagne">Vision</span>
            <p className="display-serif text-3xl md:text-4xl mt-6 text-balance leading-tight">
              A compassionate society where women promote their noble culture globally — celebrating uniqueness, talent, and inner beauty.
            </p>
          </div>
          <div className="p-10 bg-navy text-ivory rounded-sm">
            <span className="eyebrow text-champagne">Mission</span>
            <p className="display-serif text-3xl md:text-4xl mt-6 text-balance leading-tight">
              To uplift communities through advocacy and charity, and to teach a core principle of respect for all — service above the crown.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-bone px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <span className="eyebrow text-champagne">Leadership</span>
          <h2 className="display-serif text-4xl md:text-5xl mt-4 mb-14">The women at the helm</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <article className="flex gap-6">
              <img src={ceoPortrait} alt="Erilene Antonio Noche" width={160} height={160} className="size-40 rounded-sm object-cover" loading="lazy" />
              <div>
                <h3 className="font-serif text-2xl">Erilene Antonio Noche</h3>
                <p className="eyebrow text-champagne text-[10px] mt-1">Founder & CEO</p>
                <p className="mt-4 text-sm text-navy/70 leading-relaxed">
                  Founder of Noble Queen of the Universe LTD Inc., Erilene built the platform around a single conviction — that the modern queen is defined by what she gives, not what she wears.
                </p>
              </div>
            </article>
            <article className="flex gap-6">
              <div className="size-40 rounded-sm bg-navy/10 flex items-center justify-center font-serif text-3xl text-navy/40">PJ</div>
              <div>
                <h3 className="font-serif text-2xl">Patricia Javier</h3>
                <p className="eyebrow text-champagne text-[10px] mt-1">Co-Chairperson</p>
                <p className="mt-4 text-sm text-navy/70 leading-relaxed">
                  Actress, advocate, and stateswoman of the arts, Patricia brings a global voice and lifelong commitment to women's empowerment to the heart of NQOU.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <span className="eyebrow text-champagne">Milestones</span>
          <h2 className="display-serif text-4xl md:text-5xl mt-4 mb-16">Six years of building the noble standard</h2>
          <ol className="space-y-10">
            {milestones.map((m) => (
              <li key={m.year} className="grid grid-cols-[80px_1fr] md:grid-cols-[120px_1fr] gap-6 border-l border-navy/10 pl-6 md:pl-10 relative">
                <span className="absolute -left-[5px] top-2 size-2.5 rounded-full bg-champagne" />
                <p className="font-serif text-2xl text-champagne">{m.year}</p>
                <div>
                  <h3 className="font-serif text-xl">{m.title}</h3>
                  <p className="mt-2 text-sm text-navy/65 leading-relaxed">{m.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </PageShell>
  );
}
