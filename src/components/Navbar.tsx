import { useEffect, useState } from "react";
import { NAV_LINKS } from "../data/content";
import Icon from "./Icon";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#040a17]/90 backdrop-blur-xl border-b border-cyan-500/10 shadow-lg shadow-black/30" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/20 to-cyan-500/10 border border-cyan-400/30 text-cyan-400 shadow-md shadow-cyan-950/50 transition group-hover:border-cyan-400 group-hover:scale-105">
            <Icon name="hexLogo" className="h-5 w-5 text-cyan-400" />
          </span>
          <span className="text-xl font-bold tracking-tight text-white">Sensighty</span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-300 transition hover:text-cyan-400"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="#pilot"
            className="text-sm font-medium text-slate-300 transition hover:text-white"
          >
            Sign in
          </a>
          <a
            href="#pilot"
            className="rounded-full bg-gradient-to-r from-cyan-400 to-teal-400 px-5 py-2.5 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/25 transition hover:brightness-110 hover:shadow-cyan-400/40 active:scale-95"
          >
            Get Early Access
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-white lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? (
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div className="border-t border-cyan-500/20 bg-[#040a17]/98 px-6 py-4 lg:hidden">
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-slate-300 hover:text-cyan-400"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#pilot"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-gradient-to-r from-cyan-400 to-teal-400 px-5 py-2.5 text-center text-sm font-bold text-slate-950"
            >
              Get Early Access
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
