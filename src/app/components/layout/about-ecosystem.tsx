import React from "react";

const stats: { value: string; label: string }[] = [
  { value: "500+", label: "Members vetted" },
  { value: "120+", label: "Startups formed" },
  { value: "\u20b910Cr+", label: "Capital raised" },
  { value: "3+", label: "Years running" },
];

const AboutEcosystem = () => {
  return (
    <section
      id="about"
      className="bg-linear-to-b from-white/40 to-transparent py-24 md:py-32 px-6 md:px-[8%]"
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 items-center">
        {/* ── Left column ── */}
        <div className="md:col-span-7 space-y-8">
          {/* Eyebrow */}
          <p className="font-sans text-[11px] uppercase tracking-[0.3em] text-mist-blue font-semibold">
            The Philosophy
          </p>

          {/* Headline */}
          <h3 className="font-heading text-4xl md:text-5xl lg:text-6xl text-slate-grey leading-tight tracking-tighter">
            Not just another community. <br />
            <span className="text-mist-blue italic">A focused ecosystem.</span>
          </h3>

          {/* Body */}
          <p className="font-sans text-base md:text-lg text-slate-grey/70 leading-relaxed font-light max-w-sm">
            Youth Foundry is where India&apos;s most driven young minds find
            their people, build their companies, and accelerate their journey.{" "}
            <span className="block mt-4 font-medium text-slate-grey">
              Every member is vetted. Every interaction is high-signal.
            </span>
          </p>

          {/* Blockquote */}
          <blockquote className="border-l-2 border-mist-blue/30 pl-5 mt-8">
            <p className="font-heading text-2xl text-slate-grey italic tracking-tight">
              &ldquo;The right room changes everything.&rdquo;
            </p>
          </blockquote>
        </div>

        {/* ── Right column — 2×2 stats grid ── */}
        <div className="md:col-span-5 grid grid-cols-2 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-grey/8 shadow-sm"
            >
              <p className="font-heading text-3xl text-slate-grey tracking-tight">
                {stat.value}
              </p>
              <p className="font-sans text-xs text-slate-grey/60 mt-1 font-medium uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutEcosystem;
