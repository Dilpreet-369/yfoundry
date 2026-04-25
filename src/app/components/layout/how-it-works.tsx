import React from "react";

const steps = [
  {
    number: "01",
    title: "Apply",
    description:
      "Submit your profile telling us who you are and what you're building.",
  },
  {
    number: "02",
    title: "Get Vetted",
    description: "Our team reviews every application for quality and intent.",
  },
  {
    number: "03",
    title: "Join the Room",
    description: "Access curated introductions, events, and opportunities.",
  },
  {
    number: "04",
    title: "Build Together",
    description: "Find your co-founder, first hire, or next investment.",
  },
];

const HowItWorks = () => {
  return (
    <section
      id="how"
      className="py-24 md:py-32 px-6 md:px-[8%] bg-linear-to-b from-transparent via-soft-sky/10 to-transparent"
    >
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Section header */}
        <div className="space-y-4">
          <p className="font-sans text-[11px] uppercase tracking-[0.3em] text-mist-blue font-semibold">
            How It Works
          </p>
          <h3 className="font-heading text-4xl md:text-5xl text-slate-grey tracking-tighter">
            Four steps to your <br />
            <span className="text-mist-blue italic">next chapter.</span>
          </h3>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative bg-white/50 border border-slate-grey/8 rounded-2xl p-7 group hover:shadow-md hover:border-mist-blue/20 transition-all duration-300"
            >
              {/* Large step number */}
              <p className="font-heading text-6xl text-mist-blue/15 leading-none mb-4 select-none group-hover:text-mist-blue/25 transition-colors duration-300">
                {step.number}
              </p>

              {/* Step title */}
              <h4 className="font-heading text-xl text-slate-grey mb-2">
                {step.title}
              </h4>

              {/* Step description */}
              <p className="font-sans text-sm text-slate-grey/65 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
