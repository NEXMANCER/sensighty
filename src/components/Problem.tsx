import { PROBLEMS } from "../data/content";
import Icon from "./Icon";

export default function Problem() {
  return (
    <section className="bg-[#040a17] py-24 lg:py-32 border-t border-cyan-500/10">
      <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
        <div className="mb-4 inline-flex items-center gap-3">
          <span className="h-[2px] w-6 bg-cyan-400 rounded-full" />
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-400">
            The Industry Challenge
          </span>
          <span className="h-[2px] w-6 bg-cyan-400 rounded-full" />
        </div>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Traditional assessments weren't built to diagnose learning
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-slate-300">
          A score tells you how a learner did. It rarely tells you why — or what to do
          about it. Sensighty is built to close that gap.
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-6 px-6 md:grid-cols-2 lg:px-8">
        {PROBLEMS.map((p) => (
          <div
            key={p.title}
            className="rounded-2xl border border-cyan-500/15 bg-[#071428]/80 p-7 transition hover:border-cyan-400/40 hover:bg-[#0b1d3a]/90 backdrop-blur"
          >
            <h3 className="text-lg font-bold text-white">{p.title}</h3>
            <div className="mt-5 space-y-4">
              <div className="flex gap-3 rounded-xl border border-rose-500/20 bg-rose-950/20 p-4">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rose-500/20 text-rose-300">
                  <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth={2.5}>
                    <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
                  </svg>
                </span>
                <p className="text-sm leading-relaxed text-slate-300">{p.before}</p>
              </div>
              <div className="flex gap-3 rounded-xl border border-cyan-500/20 bg-cyan-950/25 p-4">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-300">
                  <Icon name="check" className="h-3 w-3" />
                </span>
                <p className="text-sm leading-relaxed text-slate-200">{p.after}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
