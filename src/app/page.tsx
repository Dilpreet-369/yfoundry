import React from 'react';
import Navbar from './components/layout/navbar';
import { Hero } from './components/layout/hero';
import AboutEcosystem from './components/layout/about-ecosystem';
import TargetAudience from './components/layout/target-audiance';
import PetalScene from './components/3d/petal-scene';

export default function LandingPage() {
  return (
    <div className="relative min-h-screen bg-off-white selection:bg-mist-blue/30">
      {/* 1. GLOBAL NAVBAR 
          Keep it here so it stays fixed above everything. 
          The z-index in your navbar component should be high (z-50+).
      */}
      <Navbar />  

      <main className="flex flex-col lg:flex-row">
        
        {/* 2. THE CONTENT LAYER (Left 60%)
            - w-full on mobile (100%)
            - lg:w-[60%] on desktop
            - min-h-screen ensures the background color is consistent
        */}
        <div className="relative z-10 w-full lg:w-[60%] 
                        border-r-0 lg:border-r border-slate-grey/5 
                        flex flex-col">
          <Hero />
          <AboutEcosystem />
          <TargetAudience />
          
          {/* You can add more sections here (e.g., <WhatIsFoundry />) 
              and they will stay within this 60% column. 
          */}
        </div>

        {/* 3. THE 3D LAYER (Right 40%)
            - On mobile: hidden or fixed inset-0 (background)
            - On desktop: fixed right-0 w-[40%]
        */}
        <div className="hidden lg:block fixed top-0 right-0 h-screen lg:w-[40%] z-0">
          <div className="w-full h-full flex items-center justify-center 
                          bg-gradient-to-b from-transparent to-powder-blue/5">
            
            <PetalScene />

          </div>
        </div>
      </main>

      {/* MOBILE BACKGROUND OVERLAY (Optional)
          On mobile, we might want a hint of the 3D world behind the text.
      */}
      <div className="lg:hidden fixed inset-0 z-0 bg-gradient-to-br from-off-white via-off-white to-powder-blue/10 pointer-events-none" />
    </div>
  );
}