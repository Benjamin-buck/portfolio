import type { Metadata } from "next";
import "./globals.css";
import { Instrument_Serif, Schibsted_Grotesk, IBM_Plex_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GridOverlay from "@/components/GridOverlay";

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
});

const sans = Schibsted_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Benjamin Alan — Product Designer & Front-end Developer",
  description:
    "Benjamin Alan is a product designer and front-end developer with 6+ years of experience designing and shipping software for healthcare, government and music.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} ${mono.variable}`}>
      <body className="font-sans min-h-screen flex flex-col">
        <noscript>
          <style>{`.rv-up,.rv-wipe,.rv-rule,.rv-mask>.rv-line>span,.rv-wipe>*{opacity:1!important;transform:none!important;clip-path:none!important}`}</style>
        </noscript>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-ink focus:text-paper focus:px-4 focus:py-2 focus:rounded-full text-sm"
        >
          Skip to content
        </a>
        <Navbar />
        <div id="main" className="flex-1">
          {children}
        </div>
        <Footer />
        <GridOverlay />
      </body>
    </html>
  );
}
