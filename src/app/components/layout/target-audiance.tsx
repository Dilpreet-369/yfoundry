import React from 'react';

const archetypes = [
  {
    title: "Startup Founders",
    description: "Pre-seed to Series A founders finding co-founders, team, and capital.",
    accent: "border-mist-blue/30"
  },
  {
    title: "Builders & Innovators",
    description: "Product and tech minds ready to build something that matters.",
    accent: "border-powder-blue/30"
  },
  {
    title: "Investors & Enablers",
    description: "Angels and ecosystem players accessing vetted deal flow.",
    accent: "border-slate-grey/10"
  },
  {
    title: "Early Contributors",
    description: "Talented people ready to be employee #1 to #10.",
    accent: "border-lilac-tint/30"
  },
  {
    title: "Startup Operators",
    description: "Experienced operators bringing structure to early-stage teams.",
    accent: "border-soft-sky/30"
  }
];

const TargetAudience = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-[10%] py-24">
      <div className="max-w-2xl space-y-16">
        
        {/* Section Header */}
        <div className="space-y-4">
          <h2 className="font-sans text-xs uppercase tracking-[0.3em] text-slate-grey/50 font-semibold">
            Who It&apos;s For
          </h2>
          <h3 className="font-heading text-4xl text-slate-grey tracking-tighter">
            Five archetypes that make <br />
            <span className="text-mist-blue">startups successful.</span>
          </h3>
        </div>

        {/* Minimalist Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-grey/5 border border-slate-grey/5">
          {archetypes.map((item, index) => (
            <div 
              key={index}
              className={`bg-off-white p-8 group hover:bg-white transition-all duration-500 flex flex-col justify-between min-h-[200px] ${item.accent}`}
            >
              <div className="space-y-4">
                <h4 className="font-heading text-xl text-slate-grey group-hover:text-mist-blue transition-colors duration-300">
                  {item.title}
                </h4>
                <p className="font-sans text-sm leading-relaxed text-slate-grey/70">
                  {item.description}
                </p>
              </div>
              
              {/* Subtle architectural accent line */}
              <div className="w-0 group-hover:w-full h-[1px] bg-mist-blue/30 transition-all duration-700 ease-in-out" />
            </div>
          ))}
          
          {/* Empty spacer card to maintain grid balance on desktop */}
          <div className="hidden md:flex bg-off-white/50 p-8 items-center justify-center border-l border-slate-grey/5">
            <span className="font-sans text-[10px] uppercase tracking-widest text-slate-grey/30 italic">
              Youth Foundry Ecosystem
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TargetAudience;