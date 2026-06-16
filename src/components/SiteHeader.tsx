import { Link } from "@tanstack/react-router";
import { useState } from "react";
import logo from "@/assets/nqou-logo.jpeg";

const nav = [
  { to: "/about", label: "About" },
  { to: "/advocacy", label: "Advocacy" },
  { to: "/competition", label: "Competition" },
  { to: "/delegates", label: "Delegates" },
  { to: "/titleholders", label: "Titleholders" },
  { to: "/events", label: "Events" },
  { to: "/media", label: "Media" },
  { to: "/sponsors", label: "Sponsors" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-navy/5 bg-ivory/85 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="Noble Queen of the Universe"
            width={44}
            height={44}
            className="size-11 rounded-full ring-1 ring-champagne/40"
          />
          <div className="hidden sm:flex flex-col leading-none">
            <span className="font-serif text-base tracking-tight text-navy">
              Noble Queen
            </span>
            <span className="eyebrow text-champagne/90 mt-1 text-[9px]">
              of the Universe
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-7 text-[12px] font-medium tracking-wide uppercase">
          {nav.slice(0, 6).map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-navy/70 hover:text-navy transition-colors"
              activeProps={{ className: "text-navy" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/contact"
            className="rounded-full bg-navy px-5 py-2.5 text-xs font-medium uppercase tracking-widest text-ivory transition-colors hover:bg-navy-soft"
          >
            Apply / Partner
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden text-navy"
          aria-label="Menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {open ? <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" /> : <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-navy/5 bg-ivory">
          <nav className="mx-auto max-w-7xl px-6 py-6 flex flex-col gap-4">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="text-sm uppercase tracking-widest text-navy/80"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
