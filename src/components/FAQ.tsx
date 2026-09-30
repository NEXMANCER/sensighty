import { useState } from "react";
import { FAQ_ITEMS } from "../data/content";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-[#040a17] py-24 lg:py-32 border-t border-cyan-500/10">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-4 inline-flex items-center gap-3">
            <span className="h-[2px] w-6 bg-cyan-400 rounded-full" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-400">
              Questions &amp; Answers
            </span>
            <span className="h-[2px] w-6 bg-cyan-400 rounded-full" />
          </div>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Frequently asked <span className="text-cyan-400">questions</span>
          </h2>
        </div>

        <div className="mt-12 divide-y divide-cyan-500/15 rounded-2xl border border-cyan-500/20 bg-[#08152b]/80 backdrop-blur">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.question}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition hover:text-cyan-300"
                >
                  <span className="text-sm font-bold text-white sm:text-base">{item.question}</span>
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-cyan-400/30 text-cyan-400 transition-transform ${
                      isOpen ? "rotate-45 bg-cyan-500/15" : "bg-cyan-500/5"
                    }`}
                  >
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2.5}>
                      <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 text-sm leading-relaxed text-slate-300">{item.answer}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
