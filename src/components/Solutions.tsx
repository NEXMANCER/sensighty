import { useState } from "react";
import { SOLUTIONS } from "../data/content";
import Icon from "./Icon";

export default function Solutions() {
  const [active, setActive] = useState(0);
  const current = SOLUTIONS[active];

  return (
    <section id="solutions" className="bg-[#061022] py-24 lg:py-32 border-t border-cyan-500/10">
      <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
        <div className="mb-4 inline-flex items-center gap-3">
          <span className="h-[2px] w-6 bg-cyan-400 rounded-full" />
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-400">
            Tailored Solutions
          </span>
          <span className="h-[2px] w-6 bg-cyan-400 rounded-full" />
        </div>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          One engine, built for <span className="text-cyan-400">four audiences</span>
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-slate-300">
          The mastery loop is the same underneath. What each audience sees — and needs —
          is different.
        </p>
      </div>

      <div className="mx-auto mt-14 max-w-6xl px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-3">
          {SOLUTIONS.map((s, i) => (
            <button
              key={s.key}
              onClick={() => setActive(i)}
              className={`rounded-full px-6 py-2.5 text-sm font-bold transition ${
                active === i
                  ? "bg-gradient-to-r from-cyan-400 to-teal-400 text-slate-950 shadow-lg shadow-cyan-500/25"
                  : "border border-cyan-500/20 bg-[#08152b] text-slate-300 hover:border-cyan-400/40 hover:text-white"
              }`}
            >
              {s.audience}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-10 rounded-3xl border border-cyan-500/15 bg-[#08152b]/90 p-8 lg:grid-cols-5 lg:p-12 backdrop-blur">
          <div className="lg:col-span-3">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
              {current.audience}
            </span>
            <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">{current.headline}</h3>
            <p className="mt-4 text-base leading-relaxed text-slate-300">{current.description}</p>

            <ul className="mt-6 space-y-3">
              {current.points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-slate-200">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-300">
                    <Icon name="check" className="h-3 w-3" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>

            <a
              href="#pilot"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-teal-400 px-7 py-3 text-sm font-bold text-slate-950 transition hover:brightness-110 shadow-lg shadow-cyan-500/20"
            >
              Talk to us about {current.audience.replace("For ", "").toLowerCase()}
              <Icon name="arrow" className="h-4 w-4" />
            </a>
          </div>

          <div className="flex items-center justify-center lg:col-span-2">
            <div className="relative w-full max-w-sm rounded-2xl border border-cyan-500/25 bg-[#071428]/90 p-8 shadow-xl">
              <div className="flex items-center gap-2 text-cyan-300">
                <Icon name="radar" className="h-6 w-6 text-cyan-400" />
                <span className="text-sm font-bold">Skill Snapshot</span>
              </div>
              <div className="mt-6 space-y-4">
                {["Concept fluency", "Applied problem solving", "Edge-case reasoning"].map((label, idx) => (
                  <div key={label}>
                    <div className="mb-1.5 flex justify-between text-xs text-slate-300 font-medium">
                      <span>{label}</span>
                      <span className="text-cyan-400 font-bold">{[92, 64, 38][idx]}%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-slate-900 border border-cyan-500/10">
                      <div
                        className="h-2 rounded-full bg-gradient-to-r from-cyan-400 to-teal-400 shadow-[0_0_8px_rgba(0,217,232,0.5)]"
                        style={{ width: `${[92, 64, 38][idx]}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
