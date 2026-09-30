import { LOOP_STEPS } from "../data/content";
import Icon from "./Icon";

export default function WhatIsLoop() {
  return (
    <section id="platform" className="relative bg-[#061022] py-24 lg:py-32 border-t border-cyan-500/10">
      <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
        <div className="mb-4 inline-flex items-center gap-3">
          <span className="h-[2px] w-6 bg-cyan-400 rounded-full" />
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-400">
            Platform Engine &amp; Architecture
          </span>
          <span className="h-[2px] w-6 bg-cyan-400 rounded-full" />
        </div>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          An adaptive assessment &amp; <span className="text-cyan-400">mastery engine</span>
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-slate-300">
          Most platforms measure course completion or a single test score. Sensighty
          continuously builds a live model of what each learner actually knows — then
          adapts the learning experience around it, in a closed loop that runs until
          mastery is confirmed.
        </p>
      </div>

      <div className="mx-auto mt-16 max-w-6xl px-6 lg:px-8">
        <div className="relative grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* connector line for large screens */}
          <div className="pointer-events-none absolute left-0 right-0 top-11 hidden h-px bg-gradient-to-r from-transparent via-cyan-500/25 to-transparent lg:block" />

          {LOOP_STEPS.map((step, i) => (
            <div key={step.key} className="relative flex flex-col items-start group">
              <div className="relative z-10 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-teal-500 text-sm font-extrabold text-slate-950 shadow-lg shadow-cyan-950/50 group-hover:scale-105 transition">
                0{i + 1}
              </div>
              <div className="mt-5 w-full rounded-2xl border border-cyan-500/15 bg-[#08152b]/80 p-6 backdrop-blur transition hover:border-cyan-400/40 hover:bg-[#0b1d3a]/90 hover:-translate-y-1">
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{step.description}</p>
              </div>
              {i < LOOP_STEPS.length - 1 && (
                <div className="absolute -right-3 top-5 z-10 hidden text-cyan-400/40 lg:block">
                  <Icon name="arrow" className="h-4 w-4" />
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="mx-auto mt-12 max-w-2xl text-center text-sm text-slate-400">
          The loop repeats automatically — Sensighty only marks a skill "mastered" once
          reassessment confirms durable understanding, not a one-time correct answer.
        </p>
      </div>
    </section>
  );
}
