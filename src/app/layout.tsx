import { Jost } from 'next/font/google';
import localFont from 'next/font/local';
import "./globals.css";

const jost = Jost({
  subsets: ['latin'],
  variable: '--font-jost', // Exporting as a CSS variable
  display: 'swap',
});

const florian = localFont({
  src: './fonts/florian.woff2', // Path relative to this layout.tsx file
  variable: '--font-florian',  // Exporting as a CSS variable
  display: 'swap',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // Inject variables into the HTML class list
    <html lang="en" className={`${jost.variable} ${florian.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}