import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const satoshi = localFont({
  src: [
    {
      path: "../../public/fonts/Satoshi_Complete/Fonts/WEB/fonts/Satoshi-Variable.woff2",
      style: "normal",
    },
    {
      path: "../../public/fonts/Satoshi_Complete/Fonts/WEB/fonts/Satoshi-VariableItalic.woff2",
      style: "italic",
    },
  ],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PFP - Global HR & Payroll Platform",
  description: "Hire, onboard and pay your remote team. The all-in-one platform for modern companies to manage global teams seamlessly.",
};

import DemoHeader from "@/components/DemoHeader";
import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${satoshi.variable} font-sans antialiased bg-pfp-cream-50 text-pfp-dark-700 selection:bg-primary/20 selection:text-primary-foreground`}>
        <DemoHeader />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
