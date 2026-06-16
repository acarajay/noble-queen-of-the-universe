import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import advocacyImg from "@/assets/advocacy-education.jpeg";

export const Route = createFileRoute("/advocacy")({
  head: () => ({
    meta: [
      { title: "Advocacy & Impact — Noble Queen of the Universe" },
      { name: "description", content: "Education scholarships, maternal health, and community programs powered by Noble Queen of the Universe." },
      { property: "og:title", content: "NQOU Advocacy & Impact" },
      { property: "og:description", content: "True beauty is service. Inside the global advocacy programs of NQOU." },
    ],
  }),
  component: AdvocacyPage,
});

const programs = [
  { name: "Noble Scholars", scope: "Education", body: "Direct scholarships and mentorship for high-achieving youth from disadvantaged communities — funded by every NQOU season." },
  { name: "Mother & Child", scope: "Maternal Health", body: "Mobile clinics, prenatal kits, and birth-attendant training in partnership with regional health ministries." },
  { name: "Respect in Schools", scope: "Anti-Bullying", body: "A curriculum-ready program teaching the NQOU principle of respect to students across our delegate countries." },
  { name: "Heritage Hands", scope: "Cultural Preservation", body: "Funding artisan cooperatives that preserve indigenous craft and pass it to a new generation of women." },
  { name: "Coastal Care", scope: "Environment", body: "Mangrove restoration and ocean-plastic cleanup led by delegates in coastal nations." },
  { name: "Open Door", scope: "Community", body: "Emergency relief and women's shelters opened in partnership with local NGOs in crisis regions." },
];

function AdvocacyPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Advocacy & Impact"
        title={<>Respect <span className="italic text-champagne">in action.</span></>}
        intro="We measure success not by the night of coronation, but by the decade of impact that follows. Six global programs, dozens of nations, one principle."
      />

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-[1fr_1.2fr] gap-16 items-center">
          <div className="aspect-[4/3] rounded-sm overflow-hidden">
            <img src={advocacyImg} alt="Community advocacy" width={1200} height={800} className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div>
            <span className="eyebrow text-champagne">The principle</span>
            <h2 className="display-serif text-4xl md:text-5xl mt-4 text-balance">
              True beauty lies in a lifelong commitment to service, peace, and tangible difference.
            </h2>
            <p className="mt-6 text-navy/70 leading-relaxed">
              Every delegate enters NQOU with a personal advocacy platform. We help her resource it, scale it, and connect it to the global network of partners and alumni who came before her.
            </p>
            <Link to="/contact" className="mt-8 inline-block rounded-full bg-navy text-ivory px-7 py-3 text-xs uppercase tracking-widest hover:bg-navy-soft">
              Volunteer · Donate · Partner
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-bone px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <span className="eyebrow text-champagne">Global programs</span>
          <h2 className="display-serif text-4xl md:text-5xl mt-4 mb-14">Six pillars of work</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-navy/5 border border-navy/5">
            {programs.map((p) => (
              <article key={p.name} className="bg-ivory p-8">
                <span className="eyebrow text-champagne">{p.scope}</span>
                <h3 className="font-serif text-2xl mt-4">{p.name}</h3>
                <p className="mt-4 text-sm text-navy/65 leading-relaxed">{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy text-ivory px-6 py-24">
        <div className="mx-auto max-w-7xl grid md:grid-cols-4 gap-10">
          {[
            ["$2.4M", "Raised for charitable causes"],
            ["120+", "Youth scholarships funded"],
            ["35", "Active community projects"],
            ["50k", "Lives directly touched"],
          ].map(([n, l]) => (
            <div key={l}>
              <p className="font-serif text-5xl text-champagne">{n}</p>
              <p className="eyebrow text-ivory/60 mt-3 text-[10px]">{l}</p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
