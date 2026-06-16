import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";

export const Route = createFileRoute("/sponsors")({
  head: () => ({
    meta: [
      { title: "Sponsors & Partners — Noble Queen of the Universe" },
      { name: "description", content: "Join the NQOU partner network. Corporate sponsorship, media partnerships, and franchise inquiries." },
      { property: "og:title", content: "Partner with NQOU" },
      { property: "og:description", content: "Align your brand with a global movement of respect, service, and women's leadership." },
    ],
  }),
  component: SponsorsPage,
});

const partners = [
  ["The Big Three Global Crown Production", "Production Partner"],
  ["Respect Global Foundation", "Advocacy Partner"],
  ["Women Lead International", "Strategic Partner"],
  ["Crown Heritage Council", "Cultural Partner"],
  ["Compassion Worldwide", "Charity Partner"],
  ["Noble Media Group", "Media Partner"],
];

const tiers = [
  { name: "Crown Patron", body: "Title sponsorship of the international finals with global IP rights, on-stage recognition, and year-round delegate visibility." },
  { name: "Sceptre Partner", body: "Category exclusivity across one global program (Noble Scholars, Mother & Child, Respect in Schools)." },
  { name: "Sash Partner", body: "Regional sponsorship aligned with one of our continental cycles, with local activation and delegate access." },
];

function SponsorsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Sponsors & Partners"
        title={<>Build the movement, <span className="italic text-champagne">together.</span></>}
        intro="From production partners to corporate patrons, our alliance network powers the work that happens long after the lights come down."
      />

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <span className="eyebrow text-champagne">Current alliances</span>
          <h2 className="display-serif text-4xl md:text-5xl mt-4 mb-12">In partnership with</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-navy/5 border border-navy/5">
            {partners.map(([name, role]) => (
              <div key={name} className="bg-ivory p-8">
                <p className="eyebrow text-champagne text-[10px]">{role}</p>
                <p className="font-serif text-xl mt-3">{name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bone px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <span className="eyebrow text-champagne">Sponsorship tiers</span>
          <h2 className="display-serif text-4xl md:text-5xl mt-4 mb-12">Three ways to stand with us</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {tiers.map((t) => (
              <article key={t.name} className="bg-ivory border border-navy/5 p-8 rounded-sm">
                <h3 className="font-serif text-2xl">{t.name}</h3>
                <p className="mt-4 text-sm text-navy/65 leading-relaxed">{t.body}</p>
              </article>
            ))}
          </div>
          <Link to="/contact" className="mt-12 inline-block rounded-full bg-navy text-ivory px-9 py-4 text-xs uppercase tracking-widest hover:bg-navy-soft">
            Inquire about partnership
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
