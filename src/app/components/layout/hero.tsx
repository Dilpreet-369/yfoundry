"use client";

import React from 'react';
import Link from 'next/link';

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-[5%] pt-20 overflow-hidden">
      
      {/* Content Container */}
      <div className="relative z-10 max-w-4xl text-center space-y-8">
        
        {/* Headline - Florian Font */}
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-slate-grey tracking-tighter leading-[0.9] transform-gpu">
          Meet the People You Need <br /> 
          <span className="text-mist-blue italic">to Build Your Startup.</span>
        </h1>

        {/* Description - Jost Font */}
        <p className="font-sans text-lg md:text-xl text-slate-grey/70 max-w-2xl mx-auto leading-relaxed">
          Youth Foundry connects startup founders, operators, investors, and early team members 
          who want to work together on new companies.
        </p>

        {/* CTA Group */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
          <Link 
            href="/apply" 
            className="w-full sm:w-auto bg-slate-grey text-off-white px-10 py-4 rounded-full font-sans font-medium hover:scale-[1.03] transition-all shadow-lg hover:shadow-slate-grey/20"
          >
            Apply to Join
          </Link>
          
          <Link 
            href="/roles" 
            className="w-full sm:w-auto border border-slate-grey/20 text-slate-grey px-10 py-4 rounded-full font-sans font-medium hover:bg-slate-grey/5 transition-all"
          >
            View Open Roles
          </Link>
        </div>
      </div>

      {/* 3D Space Placeholder 
          This is where your Rubik's cube 'petals' will live later. 
          We use absolute positioning to keep it behind the text. 
      */}
      <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Your <Canvas /> component will go here eventually */}
      </div>
      
    </section>
  );
};