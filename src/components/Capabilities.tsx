import { CAPABILITIES } from "../data/content";
import Icon from "./Icon";

export default function Capabilities() {
  return (
    <section className="bg-[#061022] py-24 lg:py-32 border-t border-cyan-500/10">
      <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
        <div className="mb-4 inline-flex items-center gap-3">
          <span className="h-[2px] w-6 bg-cyan-400 rounded-full" />
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-400">
            Core Capabilities &amp; Engineering
          </span>
          <span className="h-[2px] w-6 bg-cyan-400 rounded-full" />
        </div>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Everything the <span className="text-cyan-400">mastery loop</span> needs, built in
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-slate-300">
          One connected engine handles measurement, diagnosis, remediation, and
          integrity — backed by enterprise-grade infrastructure.
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-5 px-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {CAPABILITIES.map((c, i) => (
          <div
            key={c.title}
            className="group relative rounded-2xl border border-cyan-500/15 bg-[#08152b]/80 p-6 transition hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-[#0b1d3a] backdrop-blur"
          >
            <div className="flex items-center justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-400/20 text-cyan-400 transition group-hover:bg-cyan-400 group-hover:text-slate-950 group-hover:border-cyan-300 shadow-md">
                <Icon name={c.icon} className="h-5 w-5" />
              </div>
              <span className="text-xs font-extrabold tracking-widest text-cyan-400/80 group-hover:text-cyan-300">
                0{i + 1}
              </span>
            </div>
            <h3 className="mt-4 text-base font-bold text-white group-hover:text-cyan-200 transition">{c.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">{c.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
