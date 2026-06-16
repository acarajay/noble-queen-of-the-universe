import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import logo from "@/assets/nqou-logo.jpeg";
import heroPortrait from "@/assets/hero-portrait.jpg";
import ceoPortrait from "@/assets/ceo-portrait.jpeg";
import advocacyImg from "@/assets/advocacy-education.jpeg";
import delegate1 from "@/assets/delegate-1.jpeg";
import delegate2 from "@/assets/delegate-2.jpeg";
import delegate3 from "@/assets/delegate-3.jpeg";
import delegate4 from "@/assets/delegate-4.jpeg";

export const Route = createFileRoute("/media")({
  head: () => ({
    meta: [
      { title: "Noble Queen of the Universe — A Global Movement of Respect" },
      {
        name: "description",
        content:
          "More than a pageant — NQOU is a global platform empowering women to lead with compassion, advocate for change, and stand for respect.",
      },
      { property: "og:title", content: "Noble Queen of the Universe" },
      {
        property: "og:description",
        content:
          "A global movement of empowered women, mothers, and advocates. Respect for all. Service before crown.",
      },
    ],
  }),
  component: HomePage,
});

const delegates = [
  { name: "Isabella Rivera", country: "Philippines", platform: "Maternal Health", img: delegate1 },
  { name: "Amara Okafor", country: "Nigeria", platform: "Education Equity", img: delegate2 },
  { name: "Beatriz Silva", country: "Brazil", platform: "Environmental Justice", img: delegate3 },
  { name: "Hanae Suzuki", country: "Japan", platform: "Women in STEM", img: delegate4 },
];

const partners = [
  "The Big Three Global Crown Production",
  "Respect Global Foundation",
  "Crown Heritage Council",
  "Women Lead International",
  "Compassion Worldwide",
];

function HomePage() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-24 md:pt-24 md:pb-32 grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-20 items-center">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <span className="h-px w-12 bg-champagne" />
              <span className="eyebrow text-champagne">Respect · Service · Legacy</span>
            </div>
            <h1 className="display-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] text-balance">
              The crown is the <span className="italic text-champagne">commitment.</span>
            </h1>
            <p className="mt-10 max-w-xl text-lg leading-relaxed text-navy/75 text-pretty">
              Noble Queen of the Universe is a global platform celebrating empowered
              women, mothers, and advocates — leading not for the title, but for the
              lifelong work of service, peace, and tangible difference.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/competition"
                className="rounded-full bg-navy px-7 py-3 text-xs font-medium uppercase tracking-widest text-ivory hover:bg-navy-soft transition-colors"
              >
                Apply to Represent
              </Link>
              <Link
                to="/advocacy"
                className="rounded-full border border-navy/15 px-7 py-3 text-xs font-medium uppercase tracking-widest text-navy hover:border-navy/40 transition-colors"
              >
                Our Advocacy
              </Link>
            </div>

            <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg">
              <Stat number="40+" label="Nations Represented" />
              <Stat number="$2.4M" label="Raised for Causes" />
              <Stat number="50k" label="Lives Touched" />
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-sm bg-bone shadow-2xl shadow-navy/10">
              <img
                src={heroPortrait}
                alt="Reigning Noble Queen titleholder"
                width={1024}
                height={1280}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden md:block bg-champagne text-navy p-6 max-w-[220px]">
              <p className="eyebrow text-[10px]">Reigning Noble Queen</p>
              <p className="mt-2 font-serif text-xl leading-tight">2024 — 2025 Court</p>
            </div>
          </div>
        </div>
      </section>

      {/* CEO MESSAGE */}
      <section className="bg-navy text-ivory py-28 px-6">
        <div className="mx-auto max-w-5xl flex flex-col items-center text-center">
          <span className="eyebrow text-champagne mb-8">A Message from the Founder</span>
          <blockquote className="display-serif text-3xl md:text-5xl leading-[1.1] text-balance max-w-4xl">
            “True beauty does not live in a crown. It lives in a lifelong
            commitment to service, peace, and respect for every soul we encounter.”
          </blockquote>
          <div className="mt-12 flex items-center gap-5">
            <img
              src={ceoPortrait}
              alt="Erilene Antonio Noche"
              width={64}
              height={64}
              className="size-16 rounded-full object-cover ring-2 ring-champagne/40"
              loading="lazy"
            />
            <div className="text-left">
              <p className="font-medium">Erilene Antonio Noche</p>
              <p className="eyebrow text-champagne text-[10px] mt-1">Founder & CEO</p>
            </div>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-end mb-16">
            <div>
              <span className="eyebrow text-champagne">The Vision</span>
              <h2 className="display-serif text-4xl md:text-5xl mt-4">
                A compassionate society, led by women who refuse to be silent.
              </h2>
            </div>
            <p className="text-navy/70 leading-relaxed text-pretty">
              Three pillars shape every chapter of the Noble Queen movement — from
              the women who carry our sash, to the communities we serve, to the
              culture we cultivate around the world.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Pillar
              num="01"
              title="Advocacy & Charity"
              body="We uplift communities through education and humanitarian projects — including scholarships for disadvantaged, high-achieving youth."
            />
            <Pillar
              num="02"
              title="Global Respect"
              body="A core principle of respect for all — taught, modelled, and carried into every room our queens enter."
            />
            <Pillar
              num="03"
              title="Noble Culture"
              body="Celebrating heritage, uniqueness, and inner beauty as a shared global language of dignity."
            />
          </div>
        </div>
      </section>

      {/* ADVOCACY SPOTLIGHT */}
      <section className="bg-bone px-6 py-28">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 items-center">
          <div className="aspect-[4/3] overflow-hidden rounded-sm">
            <img
              src={advocacyImg}
              alt="Community advocacy program"
              width={1200}
              height={800}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <span className="eyebrow text-champagne">Impact in Motion</span>
            <h2 className="display-serif text-4xl md:text-5xl mt-4 text-balance">
              Beyond the stage, into the lives we promised to change.
            </h2>
            <p className="mt-6 text-navy/70 leading-relaxed">
              From funding the education of high-achieving youth in underserved
              regions to spearheading maternal health initiatives, our queens
              measure their reign not in headlines but in lives uplifted.
            </p>
            <Link
              to="/advocacy"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium border-b border-champagne pb-1"
            >
              View advocacy programs
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* DELEGATES */}
      <section className="px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
            <div>
              <span className="eyebrow text-champagne">The Class of 2025</span>
              <h2 className="display-serif text-4xl md:text-5xl mt-4">Featured delegates</h2>
            </div>
            <Link to="/delegates" className="eyebrow text-navy border-b border-navy/30 pb-1">
              View all nations
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {delegates.map((d) => (
              <article key={d.name} className="group">
                <div className="aspect-[4/5] overflow-hidden bg-bone rounded-sm">
                  <img
                    src={d.img}
                    alt={`${d.name}, delegate from ${d.country}`}
                    width={800}
                    height={1000}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <p className="eyebrow text-champagne mt-5 text-[10px]">{d.country}</p>
                <h3 className="font-serif text-xl mt-1">{d.name}</h3>
                <p className="text-xs text-navy/55 mt-1">{d.platform}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="border-t border-navy/5 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-center eyebrow text-navy/45 mb-10">
            In partnership with
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 text-navy/40">
            {partners.map((p) => (
              <span key={p} className="font-serif italic text-sm md:text-base">
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy text-ivory px-6 py-24">
        <div className="mx-auto max-w-5xl flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <div>
            <span className="eyebrow text-champagne">Join the movement</span>
            <h2 className="display-serif text-4xl md:text-5xl mt-4 max-w-2xl text-balance">
              Wear the sash. Carry the work.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/competition" className="rounded-full bg-champagne px-7 py-3 text-xs font-medium uppercase tracking-widest text-navy hover:bg-champagne-soft transition-colors">
              Apply
            </Link>
            <Link to="/sponsors" className="rounded-full border border-ivory/30 px-7 py-3 text-xs font-medium uppercase tracking-widest text-ivory hover:border-champagne hover:text-champagne transition-colors">
              Partner with us
            </Link>
          </div>
        </div>

        <div className="mx-auto max-w-5xl mt-16 flex items-center gap-4 opacity-60">
          <img src={logo} alt="" width={36} height={36} className="size-9 rounded-full" loading="lazy" />
          <p className="text-[11px] uppercase tracking-[0.25em] text-ivory/60">
            Respect · Noble Queen of the Universe · Est. 2019
          </p>
        </div>
      </section>
    </PageShell>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div>
      <p className="font-serif text-3xl md:text-4xl text-navy">{number}</p>
      <p className="eyebrow text-navy/55 mt-2 text-[10px]">{label}</p>
    </div>
  );
}

function Pillar({ num, title, body }: { num: string; title: string; body: string }) {
  return (
    <article className="bg-card border border-navy/5 p-8 rounded-sm flex flex-col gap-5 hover:border-champagne/40 transition-colors">
      <span className="eyebrow text-champagne">{num}</span>
      <h3 className="font-serif text-2xl">{title}</h3>
      <p className="text-sm text-navy/65 leading-relaxed">{body}</p>
    </article>
  );
}
