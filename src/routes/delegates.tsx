import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import delegate1 from "@/assets/delegate-1.jpeg";
import delegate2 from "@/assets/delegate-2.jpeg";
import delegate3 from "@/assets/delegate-3.jpeg";
import delegate4 from "@/assets/delegate-4.jpeg";

export const Route = createFileRoute("/delegates")({
  head: () => ({
    meta: [
      { title: "Delegates — Noble Queen of the Universe" },
      { name: "description", content: "Meet the 2025 delegates representing nations across the globe." },
      { property: "og:title", content: "NQOU Delegates" },
      { property: "og:description", content: "Forty nations. One movement. Meet the women of NQOU 2025." },
    ],
  }),
  component: DelegatesPage,
});

const delegates = [
  { name: "Isabella Rivera", country: "Philippines", platform: "Maternal Health", img: delegate1 },
  { name: "Amara Okafor", country: "Nigeria", platform: "Education Equity", img: delegate2 },
  { name: "Beatriz Silva", country: "Brazil", platform: "Environmental Justice", img: delegate3 },
  { name: "Hanae Suzuki", country: "Japan", platform: "Women in STEM", img: delegate4 },
  { name: "Camille Roux", country: "France", platform: "Anti-Trafficking", img: delegate1 },
  { name: "Zoleka Mandela", country: "South Africa", platform: "Heritage Preservation", img: delegate2 },
  { name: "Elena Santos", country: "Colombia", platform: "Climate Action", img: delegate3 },
  { name: "Aiyana Park", country: "South Korea", platform: "Mental Health", img: delegate4 },
];

function DelegatesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Class of 2025"
        title={<>Forty nations. <span className="italic text-champagne">One movement.</span></>}
        intro="Each delegate carries a country and a cause. Together, they form the most globally engaged court NQOU has ever fielded."
      />

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap gap-3 mb-12">
            {["All Regions", "Asia Pacific", "Africa", "Americas", "Europe", "MENA"].map((r, i) => (
              <button key={r} className={`px-5 py-2 rounded-full text-[11px] uppercase tracking-widest border ${i === 0 ? "bg-navy text-ivory border-navy" : "border-navy/15 text-navy/70 hover:border-navy/40"}`}>
                {r}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
            {delegates.map((d) => (
              <article key={d.name + d.country} className="group cursor-pointer">
                <div className="aspect-[4/5] overflow-hidden bg-bone rounded-sm">
                  <img src={d.img} alt={d.name} width={800} height={1000} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                </div>
                <p className="eyebrow text-champagne mt-5 text-[10px]">{d.country}</p>
                <h3 className="font-serif text-xl mt-1">{d.name}</h3>
                <p className="text-xs text-navy/55 mt-1">{d.platform}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
