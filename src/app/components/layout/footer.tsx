import React from "react";
import Link from "next/link";

const NAV_LINKS = [
  { href: "/initiatives", label: "Initiatives" },
  { href: "/past-work", label: "Past Work" },
  { href: "/opportunities", label: "Opportunities" },
] as const;

const Footer = () => {
  return (
    <footer className="bg-slate-grey/3 border-t border-slate-grey/8">
      <div className="max-w-5xl mx-auto py-12 px-6 md:px-[8%]">
        {/* Top row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Left: Logo + tagline */}
          <div>
            <Link
              href="/"
              className="font-heading text-xl text-slate-grey hover:text-mist-blue transition-colors duration-200"
            >
              Youth Foundry
            </Link>
            <p className="font-sans text-xs text-slate-grey/50 mt-1">
              Where India&apos;s builders find their people.
            </p>
          </div>

          {/* Right: Nav links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-6">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="font-sans text-sm text-slate-grey/60 hover:text-slate-grey transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 mt-8 pt-6 border-t border-slate-grey/8">
          <p className="font-sans text-xs text-slate-grey/40">
            &copy; 2025 Youth Foundry. All rights reserved.
          </p>
          <p className="font-sans text-xs text-slate-grey/40">
            Made with ♥ in India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
