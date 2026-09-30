import { TECHNOLOGY_PILLARS } from "../data/content";

export default function Technology() {
  return (
    <section id="technology" className="bg-[#040a17] py-24 lg:py-32 border-t border-cyan-500/10">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <div>
          <div className="mb-4 inline-flex items-center gap-3">
            <span className="h-[2px] w-6 bg-cyan-400 rounded-full" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-400">
              AI + Psychometrics
            </span>
          </div>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Rigorous measurement, <span className="text-cyan-400">not guesswork</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-300">
            Sensighty pairs a well-established psychometric model with modern AI, so
            "adaptive" means statistically grounded — not just a difficulty toggle.
          </p>

          <div className="mt-9 space-y-6">
            {TECHNOLOGY_PILLARS.map((t) => (
              <div key={t.title} className="border-l-2 border-cyan-400 pl-5">
                <h3 className="text-base font-bold text-white">{t.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-300">{t.description}</p>
              </div>
            ))}
          </div>

          <a
            href="#security"
            className="mt-9 inline-flex items-center gap-2 text-sm font-bold text-cyan-400 hover:text-cyan-300"
          >
            See how we secure this data →
          </a>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-cyan-400/20 to-blue-600/15 blur-2xl" />
          <div className="relative rounded-3xl border border-cyan-500/25 bg-[#08152b]/95 p-7 shadow-2xl backdrop-blur">
            <div className="flex items-center justify-between border-b border-cyan-500/15 pb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Ability estimate — live
              </span>
              <span className="rounded-full bg-cyan-500/20 border border-cyan-400/30 px-3 py-1 text-xs font-bold text-cyan-300">
                Converging
              </span>
            </div>
            <svg viewBox="0 0 400 180" className="mt-6 w-full">
              <polyline
                points="0,140 40,120 80,95 120,100 160,70 200,80 240,50 280,55 320,32 360,38 400,20"
                fill="none"
                stroke="url(#grad)"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#00d2df" />
                  <stop offset="100%" stopColor="#0077b6" />
                </linearGradient>
              </defs>
              {[0, 40, 80, 120, 160, 200, 240, 280, 320, 360, 400].map((x, i) => (
                <circle
                  key={x}
                  cx={x}
                  cy={[140, 120, 95, 100, 70, 80, 50, 55, 32, 38, 20][i]}
                  r="4.5"
                  fill="#040a17"
                  stroke="#00d2df"
                  strokeWidth="2.5"
                />
              ))}
            </svg>
            <div className="mt-4 grid grid-cols-3 gap-4 border-t border-cyan-500/15 pt-5 text-center">
              <div>
                <div className="text-xl font-extrabold text-white">7</div>
                <div className="text-xs text-slate-400">items to converge</div>
              </div>
              <div>
                <div className="text-xl font-extrabold text-cyan-400">±0.12</div>
                <div className="text-xs text-slate-400">standard error</div>
              </div>
              <div>
                <div className="text-xl font-extrabold text-white">3PL</div>
                <div className="text-xs text-slate-400">IRT model</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
