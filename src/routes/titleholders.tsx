import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import heroPortrait from "@/assets/hero-portrait.jpg";

export const Route = createFileRoute("/titleholders")({
  head: () => ({
    meta: [
      { title: "Titleholders — Noble Queen of the Universe" },
      { name: "description", content: "The reigning queen and the hall of fame of NQOU titleholders." },
      { property: "og:title", content: "NQOU Titleholders" },
      { property: "og:description", content: "Honoring the queens who carried the sash and the mission forward." },
    ],
  }),
  component: TitleholdersPage,
});

const past = [
  { year: "2024", name: "Alexandra Romanov", country: "Reigning", legacy: "Built Mother & Child mobile clinics across Southeast Asia." },
  { year: "2023", name: "Liana Cruz", country: "Mexico", legacy: "Launched Noble Scholars across Latin America." },
  { year: "2022", name: "Adaeze Nwosu", country: "Nigeria", legacy: "Championed girls' education in 12 sub-Saharan nations." },
  { year: "2021", name: "Yui Nakamura", country: "Japan", legacy: "Founded Respect in Schools across the Asia Pacific." },
  { year: "2020", name: "Sofia Demir", country: "Türkiye", legacy: "Coastal Care program ocean-cleanup founder." },
  { year: "2019", name: "Maria Antonia Cruz", country: "Philippines", legacy: "Inaugural Noble Queen of the Universe." },
];

function TitleholdersPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Hall of Fame"
        title={<>The queens who <span className="italic text-champagne">carried the work.</span></>}
        intro="A reign is one year. A legacy is a lifetime. These are the women whose service continues to shape NQOU."
      />

      {/* Current */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
          <div className="aspect-[4/5] rounded-sm overflow-hidden">
            <img src={heroPortrait} alt="Current reigning queen" width={1024} height={1280} className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div>
            <span className="eyebrow text-champagne">Reigning · 2024 — 2025</span>
            <h2 className="display-serif text-5xl md:text-6xl mt-4">Alexandra Romanov</h2>
            <p className="eyebrow text-navy/60 mt-3">Advocate for Maternal Health</p>
            <p className="mt-8 text-navy/70 leading-relaxed">
              In her first year as Noble Queen, Alexandra established Mother & Child mobile clinics in five Southeast Asian nations, partnered with the Big Three to launch a global maternal-health summit, and committed her reign to one promise — that no mother should face childbirth alone.
            </p>
          </div>
        </div>
      </section>

      {/* Past */}
      <section className="bg-bone px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <span className="eyebrow text-champagne">Past Titleholders</span>
          <h2 className="display-serif text-4xl md:text-5xl mt-4 mb-14">A lineage of service</h2>
          <ol className="divide-y divide-navy/10 border-y border-navy/10">
            {past.map((p) => (
              <li key={p.year} className="grid grid-cols-[80px_1fr] md:grid-cols-[120px_1fr_1.5fr] gap-6 py-8 items-baseline">
                <p className="font-serif text-2xl text-champagne">{p.year}</p>
                <div>
                  <p className="font-serif text-xl">{p.name}</p>
                  <p className="eyebrow text-navy/55 text-[10px] mt-1">{p.country}</p>
                </div>
                <p className="text-sm text-navy/70 leading-relaxed col-span-2 md:col-span-1">{p.legacy}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </PageShell>
  );
}
