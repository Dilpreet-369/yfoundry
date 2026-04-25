import React from "react";
import Navbar from "./components/layout/navbar";
import { Hero } from "./components/layout/hero";
import AboutEcosystem from "./components/layout/about-ecosystem";
import TargetAudience from "./components/layout/target-audiance";
import HowItWorks from "./components/layout/how-it-works";
import Footer from "./components/layout/footer";
import PetalScene from "./components/3d/petal-scene";

export default function LandingPage() {
  return (
    <div className="relative min-h-screen bg-off-white selection:bg-mist-blue/30">
      {/* FULL BACKGROUND ANIMATION LAYER */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="w-full h-full flex items-center justify-center bg-linear-to-b from-transparent to-powder-blue/5">
          <PetalScene />
        </div>
      </div>

      {/* 1. GLOBAL NAVBAR */}
      <Navbar />

      <main className="flex flex-col lg:flex-row">
        {/* 2. THE CONTENT LAYER (Left 60%) */}
        <div
          className="relative z-10 w-full lg:w-[60%]
                      border-r-0 lg:border-r border-slate-grey/5
                      flex flex-col"
        >
          <Hero />
          <AboutEcosystem />
          <TargetAudience />
          <HowItWorks />
          <Footer />
        </div>

        {/* SPACER FOR RIGHT 40% (maintains layout) */}
        <div className="hidden lg:block lg:w-[40%]" />
      </main>

      {/* MOBILE BACKGROUND */}
      <div className="lg:hidden fixed inset-0 z-0 bg-linear-to-br from-off-white via-off-white to-powder-blue/10 pointer-events-none" />
    </div>
  );
}
