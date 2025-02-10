"use client";
import "../globals.css";
import React from "react";
import Footer from "@/components/footer";
import DesktopNavbar from "@/components/DesktopNavbar";
import MobileNavbar from "@/components/MobileNavbar";
import Head from 'next/head';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <title>Chronium | Home</title>
        <meta name="description" content="All-In-One discord bot which is 100% free!" />
      </Head>
      <body>
        {/* Mobile Navbar shown on small screens */}
        <div className="block md:hidden">
          <MobileNavbar />
        </div>
        {/* Desktop Navbar shown on medium and larger screens */}
        <div className="hidden md:block">
          <DesktopNavbar />
        </div>
        <main className="Root">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
