import React from 'react';

const AboutEcosystem = () => {
  return (
    <section className="min-h-[70vh] flex flex-col justify-center px-[10%] py-20 bg-white/30">
      <div className="max-w-xl space-y-12">
        
        {/* Header Section */}
        <div className="space-y-4">
          <h2 className="font-sans text-xs uppercase tracking-[0.3em] text-mist-blue font-semibold">
            The Philosophy
          </h2>
          <h3 className="font-heading text-4xl md:text-5xl text-slate-grey leading-tight tracking-tighter">
            Not just another community. <br />
            <span className="text-mist-blue italic">A focused ecosystem.</span>
          </h3>
        </div>

        {/* Body Text (Jost) */}
        <p className="font-sans text-lg md:text-xl text-slate-grey/80 leading-relaxed font-light">
          Youth Foundry is where India's most driven young minds find their people, 
          build their companies, and accelerate their journey. 
          <span className="block mt-4 font-medium text-slate-grey">
            Every member is vetted. Every interaction is high-signal.
          </span>
        </p>

        {/* The Quote / Bottom Line */}
        <div className="pt-6 border-l-2 border-lilac-tint pl-6">
          <p className="font-heading text-2xl text-slate-grey italic tracking-tight">
            "The right room changes everything."
          </p>
        </div>

      </div>
    </section>
  );
};

export default AboutEcosystem;