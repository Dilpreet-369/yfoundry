"use client";

import React from "react";
import Link from "next/link";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[95vh] flex flex-col items-center justify-center px-[5%] pt-24 pb-16 overflow-hidden"
    >
      {/* ── Ambient gradient orbs ── */}
      <div aria-hidden="true" className="pointer-events-none">
        {/* Top-right orb */}
        <div
          className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(178,194,209,0.18) 0%, transparent 70%)",
          }}
        />
        {/* Bottom-left orb */}
        <div
          className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(232,218,239,0.18) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* ── Content container ── */}
      <div className="relative z-10 max-w-4xl text-center space-y-7">
        {/* Eyebrow badge */}
        <span className="inline-block bg-mist-blue/10 text-mist-blue border border-mist-blue/20 text-xs font-sans font-medium px-4 py-1.5 rounded-full tracking-wide">
          India&apos;s Startup Ecosystem
        </span>

        {/* Headline */}
        <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-slate-grey tracking-tighter leading-[0.92]">
          Meet the People You Need <br />
          <span className="text-mist-blue italic">to Build Your Startup.</span>
        </h1>

        {/* Description */}
        <p className="font-sans text-base sm:text-lg md:text-xl text-slate-grey/65 max-w-xl mx-auto leading-relaxed">
          Youth Foundry connects startup founders, operators, investors, and
          early team members who want to work together on new companies.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
          <Link
            href="/apply"
            className="w-full sm:w-auto bg-slate-grey text-white px-8 py-3.5 rounded-full font-sans font-medium text-sm tracking-wide shadow-lg shadow-slate-grey/25 hover:shadow-xl hover:shadow-slate-grey/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            Apply to Join
          </Link>
          <Link
            href="/learn"
            className="w-full sm:w-auto border border-slate-grey/25 text-slate-grey px-8 py-3.5 rounded-full font-sans font-medium text-sm tracking-wide hover:bg-slate-grey/5 hover:border-slate-grey/40 transition-all duration-200"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* ── 3D canvas placeholder ── */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        aria-hidden="true"
      >
        {/* <Canvas /> will live here */}
      </div>

      {/* ── Scroll hint ── */}
      <div
        aria-hidden="true"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-30 pointer-events-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-slate-grey"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </section>
  );
};
