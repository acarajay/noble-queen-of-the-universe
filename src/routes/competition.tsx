import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";

export const Route = createFileRoute("/competition")({
  head: () => ({
    meta: [
      { title: "The Competition — Noble Queen of the Universe" },
      { name: "description", content: "Eligibility, divisions, judging, and the road to the Noble Queen crown." },
      { property: "og:title", content: "NQOU Competition" },
      { property: "og:description", content: "Apply to represent your nation in the Noble Queen of the Universe global finals." },
    ],
  }),
  component: CompetitionPage,
});

const divisions = [
  { title: "Miss Noble Queen", age: "18 – 28", body: "For young women in the early arc of their advocacy and career." },
  { title: "Mrs. Noble Queen", age: "29 – 55", body: "For married women and mothers leading change in their families and communities." },
  { title: "Noble Queen Ambassador", age: "Open", body: "For professionals and humanitarians whose work has earned global recognition." },
  { title: "Noble Queen Advocacy Award", age: "Open", body: "For exemplary impact-led projects — judged independently of competition." },
];

const criteria = [
  ["Advocacy Platform", "40%"],
  ["Leadership & Public Voice", "25%"],
  ["Cultural Representation", "20%"],
  ["Poise & Presentation", "15%"],
];

const dates = [
  ["Applications Open", "March 1"],
  ["Country Auditions", "May – July"],
  ["National Coronations", "August"],
  ["Pre-Pageant Activities", "October"],
  ["International Finals", "November"],
];

function CompetitionPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="The Competition"
        title={<>The road to the <span className="italic text-champagne">noble crown.</span></>}
        intro="Four divisions. One standard. We are searching for women whose voice is larger than the stage and whose heart is wider than the universe."
      />

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <span className="eyebrow text-champagne">Divisions</span>
          <h2 className="display-serif text-4xl md:text-5xl mt-4 mb-12">Four ways to wear the sash</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {divisions.map((d) => (
              <article key={d.title} className="border border-navy/10 p-8 rounded-sm hover:border-champagne transition-colors">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-serif text-2xl">{d.title}</h3>
                  <span className="eyebrow text-champagne text-[10px]">{d.age}</span>
                </div>
                <p className="mt-4 text-sm text-navy/65 leading-relaxed">{d.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bone px-6 py-24">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-16">
          <div>
            <span className="eyebrow text-champagne">Judging</span>
            <h2 className="display-serif text-4xl md:text-5xl mt-4 mb-10">How we measure a queen</h2>
            <ul className="space-y-6">
              {criteria.map(([label, weight]) => (
                <li key={label} className="flex items-end justify-between border-b border-navy/10 pb-4">
                  <span className="font-serif text-xl">{label}</span>
                  <span className="font-serif text-2xl text-champagne">{weight}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span className="eyebrow text-champagne">Calendar</span>
            <h2 className="display-serif text-4xl md:text-5xl mt-4 mb-10">Important dates</h2>
            <ul className="space-y-6">
              {dates.map(([label, when]) => (
                <li key={label} className="flex items-end justify-between border-b border-navy/10 pb-4">
                  <span className="font-serif text-xl">{label}</span>
                  <span className="eyebrow text-navy/70">{when}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-navy text-ivory px-6 py-24">
        <div className="mx-auto max-w-5xl text-center">
          <span className="eyebrow text-champagne">Apply</span>
          <h2 className="display-serif text-4xl md:text-6xl mt-6 text-balance">
            You don't apply to a pageant. You apply to a lifetime of service.
          </h2>
          <Link to="/contact" className="mt-10 inline-block rounded-full bg-champagne text-navy px-9 py-4 text-xs uppercase tracking-widest hover:bg-champagne-soft">
            Begin your application
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
