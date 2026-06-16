import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Noble Queen of the Universe" },
      { name: "description", content: "Get in touch with NQOU for applications, partnerships, media inquiries, or volunteering." },
      { property: "og:title", content: "Contact NQOU" },
      { property: "og:description", content: "Reach the Noble Queen of the Universe team." },
    ],
  }),
  component: ContactPage,
});

const inquiry = [
  { label: "Apply / Delegate Inquiry", to: "delegates@noblequeenuniverse.org" },
  { label: "Media & Press", to: "press@noblequeenuniverse.org" },
  { label: "Sponsorship & Partnerships", to: "partners@noblequeenuniverse.org" },
  { label: "National Director / Franchise", to: "franchise@noblequeenuniverse.org" },
  { label: "Volunteer & Advocacy", to: "advocacy@noblequeenuniverse.org" },
];

function ContactPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Contact"
        title={<>Begin the <span className="italic text-champagne">conversation.</span></>}
        intro="Whether you're applying to represent, partnering with us, or covering the movement — we'd be honored to hear from you."
      />

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-[1fr_1.2fr] gap-16">
          <div>
            <span className="eyebrow text-champagne">Inquiry channels</span>
            <ul className="mt-8 space-y-5">
              {inquiry.map((i) => (
                <li key={i.label} className="border-b border-navy/10 pb-4">
                  <p className="eyebrow text-navy/55 text-[10px]">{i.label}</p>
                  <a href={`mailto:${i.to}`} className="font-serif text-lg text-navy hover:text-champagne mt-2 inline-block">{i.to}</a>
                </li>
              ))}
            </ul>

            <div className="mt-12 p-8 bg-navy text-ivory rounded-sm">
              <p className="eyebrow text-champagne text-[10px]">Headquarters</p>
              <p className="font-serif text-2xl mt-3">Noble Queen of the Universe LTD Inc.</p>
              <p className="mt-2 text-ivory/70 text-sm leading-relaxed">Manila, Philippines · International offices in New York and Lagos.</p>
            </div>
          </div>

          <form className="bg-card border border-navy/10 p-10 rounded-sm space-y-6">
            <span className="eyebrow text-champagne">Send a message</span>
            <div className="grid sm:grid-cols-2 gap-6">
              <Field label="Full name" />
              <Field label="Country" />
            </div>
            <Field label="Email" type="email" />
            <div>
              <label className="eyebrow text-navy/60 text-[10px] block mb-3">Inquiry type</label>
              <select className="w-full border border-navy/15 bg-ivory px-4 py-3 text-sm rounded-sm focus:outline-none focus:border-champagne">
                {inquiry.map((i) => <option key={i.label}>{i.label}</option>)}
              </select>
            </div>
            <div>
              <label className="eyebrow text-navy/60 text-[10px] block mb-3">Message</label>
              <textarea rows={5} className="w-full border border-navy/15 bg-ivory px-4 py-3 text-sm rounded-sm focus:outline-none focus:border-champagne" />
            </div>
            <button
              type="button"
              onClick={(e) => { e.preventDefault(); alert("Thank you. The NQOU team will be in touch shortly."); }}
              className="rounded-full bg-navy text-ivory px-9 py-3.5 text-xs uppercase tracking-widest hover:bg-navy-soft"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    </PageShell>
  );
}

function Field({ label, type = "text" }: { label: string; type?: string }) {
  return (
    <div>
      <label className="eyebrow text-navy/60 text-[10px] block mb-3">{label}</label>
      <input type={type} className="w-full border border-navy/15 bg-ivory px-4 py-3 text-sm rounded-sm focus:outline-none focus:border-champagne" />
    </div>
  );
}
