import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events — Noble Queen of the Universe" },
      { name: "description", content: "Coronation night, charity missions, cultural tours, and the global NQOU calendar." },
      { property: "og:title", content: "NQOU Events" },
      { property: "og:description", content: "Where the movement gathers — coronation, charity, cultural exchange, and beyond." },
    ],
  }),
  component: EventsPage,
});

const events = [
  { date: "Nov 22, 2025", title: "International Finals & Coronation", city: "Manila, Philippines", kind: "Flagship" },
  { date: "Nov 20, 2025", title: "Preliminary Competition", city: "Manila, Philippines", kind: "Competition" },
  { date: "Nov 18, 2025", title: "National Costume Showcase", city: "Manila, Philippines", kind: "Cultural" },
  { date: "Oct 12, 2025", title: "Noble Scholars Gala", city: "New York, USA", kind: "Charity" },
  { date: "Sep 28, 2025", title: "Mother & Child Mission", city: "Cebu, Philippines", kind: "Advocacy" },
  { date: "Sep 03, 2025", title: "Heritage Hands Exhibition", city: "Paris, France", kind: "Cultural" },
];

function EventsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Events"
        title={<>Where the movement <span className="italic text-champagne">gathers.</span></>}
        intro="From coronation night to charity missions across four continents, the NQOU calendar marks every place our work touches ground."
      />

      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <ol className="divide-y divide-navy/10 border-y border-navy/10">
            {events.map((e) => (
              <li key={e.title} className="grid grid-cols-[110px_1fr] md:grid-cols-[160px_1fr_140px] items-baseline gap-6 py-8">
                <p className="font-serif text-lg text-champagne">{e.date}</p>
                <div>
                  <h3 className="font-serif text-2xl">{e.title}</h3>
                  <p className="text-xs uppercase tracking-widest text-navy/55 mt-2">{e.city}</p>
                </div>
                <span className="eyebrow text-navy/70 hidden md:block text-right">{e.kind}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-navy text-ivory px-6 py-24">
        <div className="mx-auto max-w-5xl text-center">
          <span className="eyebrow text-champagne">Watch Live</span>
          <h2 className="display-serif text-4xl md:text-5xl mt-6 text-balance">Coronation night returns this November.</h2>
          <button className="mt-10 rounded-full bg-champagne text-navy px-9 py-4 text-xs uppercase tracking-widest hover:bg-champagne-soft">Set reminder</button>
        </div>
      </section>
    </PageShell>
  );
}
