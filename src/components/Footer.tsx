import Icon from "./Icon";

const FOOTER_LINKS = {
  Platform: ["How it works", "Technology", "Security", "Integrations"],
  Solutions: ["Learners", "Educators & Bootcamps", "Enterprises", "Hiring Teams"],
  Company: ["About", "Pilot Program", "Case Studies", "Contact"],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-cyan-500/20 bg-[#030813] pb-12 pt-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="sm:col-span-2 lg:col-span-2">
            <a href="#top" className="group inline-flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/20 to-cyan-500/10 border border-cyan-400/30 text-cyan-400 shadow-md shadow-cyan-950/50 transition group-hover:border-cyan-400 group-hover:scale-105">
                <Icon name="hexLogo" className="h-5 w-5 text-cyan-400" />
              </span>
              <span className="text-xl font-bold tracking-tight text-white">Sensighty</span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              Assess • Understand • Adapt • Master — the intelligent adaptive assessment and mastery engine for learners, educators, enterprises, and hiring teams.
            </p>
          </div>

          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading} className="lg:col-span-1">
              <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400">{heading}</h4>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-slate-400 transition hover:text-cyan-300">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom copyright & subtle Nexmancer small text */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-cyan-500/15 pt-8 text-xs text-slate-400 sm:flex-row">
          <div className="flex flex-wrap items-center gap-3">
            <p>© {new Date().getFullYear()} Sensighty. All rights reserved.</p>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <p className="text-[11px] text-slate-500 font-medium">A product by <span className="text-slate-400">NEXMANCER</span></p>
          </div>

          <div className="flex items-center gap-6 text-xs text-slate-400">
            <a href="#" className="transition hover:text-cyan-300">Privacy Policy</a>
            <a href="#" className="transition hover:text-cyan-300">Terms of Service</a>
            <a href="#" className="transition hover:text-cyan-300">Trust Center</a>
          </div>
        </div>

        {/* Bottom accent gradient strip */}
        <div className="mt-8 h-1 w-full rounded-full bg-gradient-to-r from-cyan-400 via-teal-500 to-transparent opacity-70" />
      </div>
    </footer>
  );
}
