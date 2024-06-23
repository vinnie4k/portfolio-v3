"use client";

import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import FooterMessage from "@/components/FooterMessage";
import FooterBar from "@/components/FooterBar";
import NavBar from "@/components/NavBar";
import { useEffect, useState } from "react";

// Fonts
const cooperBT = localFont({
  src: [
    {
      path: "../../public/fonts/CooperBT-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/CooperBT-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/CooperBT-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-cooperbt",
});
const ttHovesPro = localFont({
  src: [
    {
      path: "../../public/fonts/TTHovesPro-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/TTHovesPro-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/TTHovesPro-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-tthovespro",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <html lang="en">
      <body className={`${cooperBT.variable} ${ttHovesPro.variable} container`}>
        {/* Header */}
        <NavBar />

        {children}

        {/* Footer */}
        <FooterMessage />
        <FooterBar />
      </body>
    </html>
  );
}
