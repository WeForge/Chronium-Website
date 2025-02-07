"use client";
import "../globals.css";
import type { Metadata } from "next";
import React from "react";
import Footer from "@/components/footer";
import DesktopNavbar from "@/components/DesktopNavbar";
import MobileNavbar from "@/components/MobileNavbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* You can include additional head elements here */}
      </head>
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
