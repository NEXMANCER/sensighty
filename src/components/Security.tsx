import { SECURITY_POINTS } from "../data/content";
import Icon from "./Icon";

export default function Security() {
  return (
    <section id="security" className="bg-[#040a17] py-24 lg:py-32 border-t border-cyan-500/10">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <div className="mb-4 inline-flex items-center gap-3">
            <span className="h-[2px] w-6 bg-cyan-400 rounded-full" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-400">
              Cybersecurity &amp; Information Security
            </span>
          </div>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Built for <span className="text-cyan-400">enterprise &amp; education</span> IT
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-300">
            Assessment data is sensitive. Sensighty's architecture is designed from the
            ground up for tenant isolation, granular access control, and auditability —
            so security and compliance teams can say yes.
          </p>

          <div className="mt-8 flex flex-wrap gap-2.5">
            {["SSO-ready", "RBAC", "Audit logs", "On-prem option", "Data residency controls"].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-1.5 text-xs font-semibold text-cyan-300"
              >
                {tag}
              </span>
            ))}
          </div>

          <a
            href="#pilot"
            className="mt-9 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-[#08152b] px-7 py-3 text-sm font-bold text-white transition hover:border-cyan-400 hover:bg-cyan-500/10 shadow-lg shadow-black/40"
          >
            Request our security overview
            <Icon name="arrow" className="h-4 w-4 text-cyan-400" />
          </a>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {SECURITY_POINTS.map((s) => (
            <div key={s.title} className="rounded-2xl border border-cyan-500/15 bg-[#08152b]/80 p-5 transition hover:border-cyan-400/40 hover:bg-[#0b1d3a] backdrop-blur">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-500/15 border border-cyan-400/30 text-cyan-400">
                <Icon name="lock" className="h-4 w-4" />
              </div>
              <h3 className="mt-3 text-sm font-bold text-white">{s.title}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-300">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
