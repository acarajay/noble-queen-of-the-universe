import { Link } from "@tanstack/react-router";
import logo from "@/assets/nqou-logo.jpeg";

export function SiteFooter() {
  return (
    <footer className="bg-navy text-ivory">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-4">
              <img
                src={logo}
                alt="NQOU"
                width={56}
                height={56}
                className="size-14 rounded-full ring-1 ring-champagne/30"
                loading="lazy"
              />
              <div>
                <p className="font-serif text-2xl tracking-tight">Noble Queen of the Universe</p>
                <p className="eyebrow text-champagne/90 mt-1 text-[10px]">Respect · Service · Legacy</p>
              </div>
            </div>
            <p className="mt-8 max-w-md text-sm leading-relaxed text-ivory/65">
              An international advocacy-driven pageant empowering women — mothers,
              professionals, and humanitarians — to lead with compassion and stand
              for global respect.
            </p>
          </div>

          <div className="md:col-span-2">
            <h5 className="eyebrow text-champagne text-[10px]">Organization</h5>
            <ul className="mt-6 space-y-3 text-sm text-ivory/75">
              <li><Link to="/about" className="hover:text-champagne">About</Link></li>
              <li><Link to="/advocacy" className="hover:text-champagne">Advocacy</Link></li>
              <li><Link to="/titleholders" className="hover:text-champagne">Titleholders</Link></li>
              <li><Link to="/media" className="hover:text-champagne">Media Center</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h5 className="eyebrow text-champagne text-[10px]">Participate</h5>
            <ul className="mt-6 space-y-3 text-sm text-ivory/75">
              <li><Link to="/competition" className="hover:text-champagne">Competition</Link></li>
              <li><Link to="/delegates" className="hover:text-champagne">Delegates</Link></li>
              <li><Link to="/events" className="hover:text-champagne">Events</Link></li>
              <li><Link to="/sponsors" className="hover:text-champagne">Become a Partner</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h5 className="eyebrow text-champagne text-[10px]">Contact</h5>
            <ul className="mt-6 space-y-3 text-sm text-ivory/75">
              <li>Noble Queen of the Universe LTD Inc.</li>
              <li>inquiries@noblequeenuniverse.org</li>
              <li>In partnership with The Big Three Global Crown Production</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-ivory/10 pt-8 text-[11px] uppercase tracking-[0.2em] text-ivory/40 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Noble Queen of the Universe LTD Inc.</p>
          <p>Founded by Erilene Antonio Noche · Co-chaired by Patricia Javier</p>
        </div>
      </div>
    </footer>
  );
}
