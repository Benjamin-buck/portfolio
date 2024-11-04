import type { Metadata } from "next";
import "./globals.css";
import { Inter, Lexend } from "next/font/google";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
});

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
});

export const metadata: Metadata = {
  title: "Benjamin Alan - React Developer",
  description:
    "Benjamin Alan is a React / Next.js developer with 4 years of experience in the field. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} ${lexend.variable} mx-auto container mt-4`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
