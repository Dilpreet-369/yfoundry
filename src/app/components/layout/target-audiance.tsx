import React from "react";

const archetypes = [
  {
    title: "Startup Founders",
    description:
      "Pre-seed to Series A founders finding co-founders, team, and capital.",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M10 2C10 2 4 5 4 11a6 6 0 0 0 12 0c0-6-6-9-6-9Z" />
        <path d="M10 2v6" />
        <path d="M7.5 14.5L6 17" />
        <path d="M12.5 14.5L14 17" />
        <circle cx="10" cy="11" r="1.5" />
      </svg>
    ),
  },
  {
    title: "Builders & Innovators",
    description:
      "Product and tech minds ready to build something that matters.",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14.7 3.3a2.5 2.5 0 0 0-3.4 3.4L3 15l2 2 8.3-8.3a2.5 2.5 0 0 0 3.4-3.4l-2 2-1.4-1.4 2-2Z" />
        <path d="M5 14l1.5 1.5" />
      </svg>
    ),
  },
  {
    title: "Investors & Enablers",
    description: "Angels and ecosystem players accessing vetted deal flow.",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 14l4-4 3 3 4-5 4 4" />
        <path d="M2 17h16" />
        <path d="M16 6l2 2-2 2" />
      </svg>
    ),
  },
  {
    title: "Early Contributors",
    description: "Talented people ready to be employee #1 to #10.",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="7" cy="6" r="2.5" />
        <circle cx="13" cy="6" r="2.5" />
        <path d="M1 17c0-3.3 2.7-6 6-6h6c3.3 0 6 2.7 6 6" />
      </svg>
    ),
  },
  {
    title: "Startup Operators",
    description:
      "Experienced operators bringing structure to early-stage teams.",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="10" cy="10" r="2.5" />
        <path d="M10 2v2M10 16v2M2 10h2M16 10h2" />
        <path d="M4.2 4.2l1.4 1.4M14.4 14.4l1.4 1.4M4.2 15.8l1.4-1.4M14.4 5.6l1.4-1.4" />
      </svg>
    ),
  },
];

const TargetAudience = () => {
  return (
    <section id="who" className="py-24 md:py-32 px-6 md:px-[8%]">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Section header */}
        <div className="space-y-4">
          <p className="font-sans text-[11px] uppercase tracking-[0.3em] text-mist-blue font-semibold">
            Who It&apos;s For
          </p>
          <h3 className="font-heading text-4xl md:text-5xl text-slate-grey tracking-tighter">
            Five archetypes that make <br />
            <span className="text-mist-blue italic">startups successful.</span>
          </h3>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {archetypes.map((item) => (
            <div
              key={item.title}
              className="bg-white/70 backdrop-blur-sm border border-slate-grey/8 rounded-2xl p-7 group hover:shadow-md hover:border-mist-blue/20 hover:-translate-y-0.5 transition-all duration-300"
            >
              {/* Icon */}
              <div className="bg-mist-blue/8 rounded-xl p-2.5 w-10 h-10 text-mist-blue mb-4 flex items-center justify-center group-hover:bg-mist-blue/15 transition-colors duration-300">
                {item.icon}
              </div>

              {/* Title */}
              <h4 className="font-heading text-xl text-slate-grey mb-2 group-hover:text-mist-blue transition-colors duration-300">
                {item.title}
              </h4>

              {/* Description */}
              <p className="font-sans text-sm leading-relaxed text-slate-grey/65">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
