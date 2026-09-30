import { IMPACT_STATS } from "../data/content";

export default function Impact() {
  return (
    <section className="relative overflow-hidden bg-[#040a17] py-24 lg:py-32 border-t border-cyan-500/10">
      <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
        <div className="mb-4 inline-flex items-center gap-3">
          <span className="h-[2px] w-6 bg-cyan-400 rounded-full" />
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-400">
            Measurable Outcomes
          </span>
          <span className="h-[2px] w-6 bg-cyan-400 rounded-full" />
        </div>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Designed to change the <span className="text-cyan-400">economics of assessment</span>
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-slate-300">
          Sensighty is engineered around these outcomes. As pilot programs complete, we
          publish verified, sourced results in our{" "}
          <a href="#pilot" className="font-semibold text-cyan-400 underline underline-offset-4 hover:text-cyan-300">
            case studies
          </a>{" "}
          — not projections.
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-5 px-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {IMPACT_STATS.map((s) => (
          <div
            key={s.label}
            className="rounded-2xl border border-cyan-500/15 bg-[#08152b]/80 p-7 text-left transition hover:border-cyan-400/40 hover:bg-[#0b1d3a] backdrop-blur"
          >
            <div className="text-3xl font-extrabold text-cyan-400 drop-shadow-[0_0_15px_rgba(0,217,232,0.3)]">
              {s.stat}
            </div>
            <h3 className="mt-3 text-base font-bold text-white">{s.label}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">{s.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
