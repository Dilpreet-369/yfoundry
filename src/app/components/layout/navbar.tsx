"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "/initiatives", label: "Initiatives" },
  { href: "/past-work", label: "Past Work" },
  { href: "/opportunities", label: "Opportunities" },
] as const;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="fixed top-0 w-full z-50">
      <nav
        className={[
          "w-full px-8 py-4 border-b transition-all duration-300",
          scrolled
            ? "bg-off-white/95 backdrop-blur-md border-slate-grey/15 shadow-sm"
            : "bg-off-white/80 backdrop-blur-md border-slate-grey/10",
        ].join(" ")}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/yfoundry.svg"
              alt="Youth Foundry"
              width={120}
              height={40}
              priority
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8 font-sans text-sm font-medium text-slate-grey/80">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={[
                  "relative hover:text-mist-blue transition-colors duration-200",
                  "after:absolute after:-bottom-0.5 after:left-0",
                  "after:h-px after:w-0 after:bg-mist-blue",
                  "after:transition-[width] after:duration-300",
                  "hover:after:w-full",
                ].join(" ")}
              >
                {label}
              </Link>
            ))}

            <Link
              href="/join"
              className={[
                "bg-slate-grey text-off-white px-5 py-2 rounded-full font-medium",
                "transition-all duration-200",
                "hover:opacity-90 hover:shadow-md hover:scale-[1.02]",
              ].join(" ")}
            >
              Join Ecosystem
            </Link>
          </div>

          {/* Mobile hamburger button */}
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.25 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-mist-blue"
          >
            <span
              className={[
                "block w-6 h-0.5 bg-slate-grey rounded-full transition-transform duration-300 origin-center",
                mobileOpen ? "translate-y-1.75 rotate-45" : "",
              ].join(" ")}
            />
            <span
              className={[
                "block w-6 h-0.5 bg-slate-grey rounded-full transition-all duration-200",
                mobileOpen ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100",
              ].join(" ")}
            />
            <span
              className={[
                "block w-6 h-0.5 bg-slate-grey rounded-full transition-transform duration-300 origin-center",
                mobileOpen ? "-translate-y-1.75 -rotate-45" : "",
              ].join(" ")}
            />
          </button>
        </div>
      </nav>

      {/* Mobile dropdown overlay */}
      <div
        className={[
          "md:hidden w-full bg-off-white/95 backdrop-blur-md border-b border-slate-grey/10",
          "transition-all duration-300 overflow-hidden",
          mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0",
        ].join(" ")}
        aria-hidden={!mobileOpen}
      >
        <div className="max-w-7xl mx-auto px-8 py-6 flex flex-col gap-5 font-sans text-sm font-medium text-slate-grey/80">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMobileOpen(false)}
              className="hover:text-mist-blue transition-colors duration-200 py-1"
            >
              {label}
            </Link>
          ))}

          <Link
            href="/join"
            onClick={() => setMobileOpen(false)}
            className={[
              "mt-2 self-start bg-slate-grey text-off-white px-5 py-2 rounded-full font-medium",
              "transition-all duration-200",
              "hover:opacity-90 hover:shadow-md hover:scale-[1.02]",
            ].join(" ")}
          >
            Join Ecosystem
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
