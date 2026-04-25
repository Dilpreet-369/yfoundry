import type { Metadata } from "next";
import { Jost } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  display: "swap",
});

const florian = localFont({
  src: "./fonts/florian.woff2",
  variable: "--font-florian",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Youth Foundry — Meet the People You Need to Build Your Startup",
  description:
    "Youth Foundry connects startup founders, operators, investors, and early team members who want to work together on new companies in India.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jost.variable} ${florian.variable}`}>
      <body className="antialiased font-sans bg-off-white">{children}</body>
    </html>
  );
}
