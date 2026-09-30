import Icon from "./Icon";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-[#040a17] pb-24 pt-36 lg:pb-32 lg:pt-44">
      {/* Background glow and constellation network */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-pulse-glow absolute -left-40 top-0 h-[38rem] w-[38rem] rounded-full bg-cyan-600/15 blur-3xl" />
        <div className="animate-pulse-glow absolute -right-32 top-32 h-[34rem] w-[34rem] rounded-full bg-cyan-400/15 blur-3xl [animation-delay:3.5s]" />
        
        {/* Poster grid overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(0,194,203,0.08)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_20%,#000_60%,transparent_100%)]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
        <div>
          {/* Category subtitle with horizontal cyan dash */}
          <div className="mb-4 flex items-center gap-3">
            <span className="h-[2px] w-8 bg-cyan-400 rounded-full" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-400">
              Adaptive Mastery Engine
            </span>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.1]">
            Turn assessments into{" "}
            <span className="text-cyan-400 block sm:inline drop-shadow-[0_0_25px_rgba(0,217,232,0.35)]">
              measurable mastery.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-slate-300">
            Sensighty uses adaptive assessments and AI-guided remediation to find exactly what a learner doesn't know, teach that specific gap, and verify durable understanding before moving on.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#pilot"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-teal-400 px-8 py-3.5 text-sm font-bold text-slate-950 shadow-xl shadow-cyan-500/25 transition hover:scale-[1.02] hover:brightness-110 active:scale-[0.98]"
            >
              Start a Free Pilot
              <Icon name="arrow" className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
            <a
              href="#platform"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-cyan-400/40 hover:bg-cyan-500/10 hover:scale-[1.02] active:scale-[0.98]"
            >
              See how it works
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-cyan-500/15 pt-6 text-sm text-slate-400">
            <span className="flex items-center gap-2 transition hover:text-slate-200">
              <Icon name="check" className="h-4 w-4 text-cyan-400" /> Adaptive IRT engine
            </span>
            <span className="flex items-center gap-2 transition hover:text-slate-200">
              <Icon name="check" className="h-4 w-4 text-cyan-400" /> AI-guided remediation
            </span>
            <span className="flex items-center gap-2 transition hover:text-slate-200">
              <Icon name="check" className="h-4 w-4 text-cyan-400" /> Enterprise-ready security
            </span>
          </div>
        </div>

        {/* Hero Visual: Poster Geometric Hexagon & Constellation Network */}
        <div className="relative flex items-center justify-center">
          <div className="animate-pulse-glow absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-cyan-500/20 to-blue-600/20 blur-3xl" />
          
          <div className="animate-float relative w-full max-w-lg">
            {/* SVG Constellation Network Lines like the poster */}
            <svg
              className="absolute -top-12 -left-12 -right-12 -bottom-12 w-[calc(100%+6rem)] h-[calc(100%+6rem)] pointer-events-none text-cyan-400/30"
              viewBox="0 0 500 500"
              fill="none"
            >
              {/* Outer hexagonal network lines */}
              <polygon points="250,30 440,140 440,360 250,470 60,360 60,140" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="250" y1="30" x2="250" y2="100" stroke="currentColor" strokeWidth="1.2" />
              <line x1="440" y1="140" x2="380" y2="175" stroke="currentColor" strokeWidth="1.2" />
              <line x1="440" y1="360" x2="380" y2="325" stroke="currentColor" strokeWidth="1.2" />
              <line x1="60" y1="140" x2="120" y2="175" stroke="currentColor" strokeWidth="1.2" />
              <line x1="60" y1="360" x2="120" y2="325" stroke="currentColor" strokeWidth="1.2" />

              {/* Connected node circles */}
              <circle cx="250" cy="30" r="4" fill="#00d2df" />
              <circle cx="440" cy="140" r="4" fill="#00d2df" />
              <circle cx="440" cy="360" r="4" fill="#00d2df" />
              <circle cx="250" cy="470" r="4" fill="#00d2df" />
              <circle cx="60" cy="140" r="4" fill="#00d2df" />
              <circle cx="60" cy="360" r="4" fill="#00d2df" />
            </svg>

            {/* Poster Hexagon Frame with Glowing Chevron Emblem */}
            <div className="relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-gradient-to-b from-[#08152b]/90 to-[#040b17]/95 p-8 sm:p-12 shadow-2xl shadow-cyan-950/60 backdrop-blur-xl flex flex-col items-center justify-center text-center">
              
              {/* Giant Poster Hexagon Emblem */}
              <div className="relative my-4 flex items-center justify-center">
                {/* Glowing Outer Hexagon */}
                <svg className="w-48 h-48 sm:w-60 sm:h-60 drop-shadow-[0_0_30px_rgba(0,217,232,0.3)]" viewBox="0 0 200 200" fill="none">
                  {/* Outer White Hexagon */}
                  <polygon
                    points="100,10 180,56 180,144 100,190 20,144 20,56"
                    stroke="#ffffff"
                    strokeWidth="8"
                    strokeLinejoin="round"
                    className="drop-shadow-md"
                  />
                  {/* Inner Cyan Chevron */}
                  <path
                    d="M85 65L130 100L85 135"
                    stroke="#00d2df"
                    strokeWidth="14"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Sub-label banner */}
              <div className="mt-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-ping" />
                Next-Generation Engineering
              </div>

              {/* Floating micro-badges */}
              <div className="animate-float-reverse absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-5 rounded-2xl border border-cyan-500/25 bg-[#071428]/90 p-3 sm:p-4 shadow-xl shadow-black/60 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-400/15 text-cyan-400 border border-cyan-400/30">
                    <Icon name="hexLogo" className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Sensighty Engine</div>
                    <div className="text-sm font-bold text-white">98.4% Mastery Verified</div>
                  </div>
                </div>
              </div>

              <div className="animate-float-reverse absolute -top-4 -right-4 sm:-top-5 sm:-right-5 rounded-2xl border border-cyan-500/25 bg-[#071428]/90 px-4 py-2.5 shadow-xl shadow-black/60 backdrop-blur-md [animation-delay:1.5s]">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400"></span>
                  </span>
                  <span className="text-xs font-bold text-white tracking-wide">IRT Engine Active</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

