import { useState } from "react";
import Icon from "./Icon";

export default function Pilot() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="pilot" className="relative overflow-hidden bg-[#061022] py-24 lg:py-32 border-t border-cyan-500/10">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-96 w-[40rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-600/15 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 lg:grid-cols-5 lg:px-8">
        <div className="lg:col-span-3">
          <div className="mb-4 inline-flex items-center gap-3">
            <span className="h-[2px] w-6 bg-cyan-400 rounded-full" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-400">
              Get Started
            </span>
          </div>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Start a <span className="text-cyan-400">free pilot program</span>
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-300">
            Bring one course, cohort, or hiring pipeline. We'll help you stand up an
            adaptive assessment, connect it to remediation content, and measure the
            results together — with no long-term commitment.
          </p>

          <div className="mt-8 space-y-4">
            {[
              "Free Pilot — one team or cohort, guided setup",
              "Professional — for growing programs, full analytics",
              "Enterprise — SSO, on-prem options, dedicated support",
            ].map((tier) => (
              <div key={tier} className="flex items-center gap-3 text-sm text-slate-200">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-300">
                  <Icon name="check" className="h-3 w-3" />
                </span>
                {tier}
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-slate-400">
            Prefer to talk pricing directly? Tell us your assessment volume and
            deployment requirements and we'll put together a plan.
          </p>
        </div>

        <div className="lg:col-span-2">
          <div className="rounded-3xl border border-cyan-500/20 bg-[#08152b]/95 p-8 shadow-2xl backdrop-blur">
            {submitted ? (
              <div className="flex flex-col items-center justify-center gap-3 py-10 text-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-300">
                  <Icon name="check" className="h-6 w-6" />
                </span>
                <h3 className="text-lg font-bold text-white">Request received</h3>
                <p className="text-sm text-slate-300">
                  Thanks — a member of our team will reach out within one business day.
                </p>
              </div>
            ) : (
              <form
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
              >
                <h3 className="text-lg font-bold text-white">Request early access</h3>
                <div>
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-400">Full name</label>
                  <input
                    required
                    type="text"
                    className="w-full rounded-xl border border-cyan-500/20 bg-[#040a17] px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none"
                    placeholder="Jordan Lee"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-400">Work email</label>
                  <input
                    required
                    type="email"
                    className="w-full rounded-xl border border-cyan-500/20 bg-[#040a17] px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none"
                    placeholder="jordan@company.com"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-400">I'm interested as a...</label>
                  <select className="w-full rounded-xl border border-cyan-500/20 bg-[#040a17] px-4 py-2.5 text-sm text-white focus:border-cyan-400 focus:outline-none">
                    <option>Learner</option>
                    <option>Educator / Bootcamp</option>
                    <option>Enterprise L&amp;D</option>
                    <option>Hiring team</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-teal-400 px-6 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/25 transition hover:brightness-110 active:scale-95"
                >
                  Request access
                  <Icon name="arrow" className="h-4 w-4" />
                </button>
                <p className="text-center text-xs text-slate-400">No credit card required.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
