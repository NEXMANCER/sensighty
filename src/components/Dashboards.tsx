export default function Dashboards() {
  return (
    <section className="bg-[#061022] py-24 lg:py-32 border-t border-cyan-500/10">
      <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
        <div className="mb-4 inline-flex items-center gap-3">
          <span className="h-[2px] w-6 bg-cyan-400 rounded-full" />
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-400">
            See It In Action
          </span>
          <span className="h-[2px] w-6 bg-cyan-400 rounded-full" />
        </div>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          The mastery loop, <span className="text-cyan-400">made visible</span>
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-slate-300">
          Every assessment, gap, and remediation step surfaces in real time — for the
          learner taking it and the instructor or manager overseeing it.
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 px-6 lg:grid-cols-2 lg:px-8">
        <figure className="overflow-hidden rounded-3xl border border-cyan-500/20 bg-[#08152b]/90 shadow-2xl backdrop-blur transition hover:border-cyan-400/40">
          <img
            src="/images/dashboard-mockup.png"
            alt="Mockup of Sensighty's skill-mastery analytics dashboard with heatmap and progress charts"
            className="w-full object-cover"
          />
          <figcaption className="border-t border-cyan-500/15 p-6">
            <p className="text-base font-bold text-white">Skill-gap heatmap &amp; mastery analytics</p>
            <p className="mt-1 text-sm text-slate-300">
              Instructors and managers see cohort-wide gaps at a glance, ranked by impact.
            </p>
          </figcaption>
        </figure>

        <figure className="overflow-hidden rounded-3xl border border-cyan-500/20 bg-[#08152b]/90 shadow-2xl backdrop-blur transition hover:border-cyan-400/40">
          <img
            src="/images/question-mockup.png"
            alt="Mockup of an adaptive assessment question on desktop and mobile"
            className="w-full object-cover"
          />
          <figcaption className="border-t border-cyan-500/15 p-6">
            <p className="text-base font-bold text-white">Adaptive question experience</p>
            <p className="mt-1 text-sm text-slate-300">
              Difficulty adjusts in real time, on any device, with a live mastery indicator.
            </p>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
