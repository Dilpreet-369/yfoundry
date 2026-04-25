"use client"; // Required for interactivity/scrolling later

import Link from 'next/link';
import Image from 'next/image'; // Import Next.js Image component
import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 px-8 py-4 bg-off-white/80 backdrop-blur-md border-b border-slate-grey/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center">
          <Image 
            src="/yfoundry.svg" // Path to public/logo.svg
            alt="Youth Foundry Logo" 
            width={150}      // Set appropriate width
            height={150}     // Set appropriate height
            priority        // High priority for the logo
          />
          {/* If you want the text logo in Florian font next to the SVG */}
        </Link>

        {/* Navigation Links (Jost font via font-sans) */}
        <div className="hidden md:flex items-center gap-8 font-sans text-sm font-medium text-slate-grey/80">
          <Link href="/initiatives" className="hover:text-mist-blue transition-colors">Initiatives</Link>
          <Link href="/past-work" className="hover:text-mist-blue transition-colors">Past Work</Link>
          <Link href="/opportunities" className="hover:text-mist-blue transition-colors">Opportunities</Link>
          
          <Link 
            href="/join" 
            className="bg-slate-grey text-off-white px-5 py-2 rounded-full hover:opacity-90 transition-all"
          >
            Join Ecosystem
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;