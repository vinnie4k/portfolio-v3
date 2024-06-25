"use client";

import "./globals.css";
import localFont from "next/font/local";
import FooterMessage from "@/components/FooterMessage";
import FooterBar from "@/components/FooterBar";
import NavBar from "@/components/NavBar";
import { useEffect } from "react";

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
    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <html lang="en">
      <body
        className={`${cooperBT.variable} ${ttHovesPro.variable} bg-secondary-300 dark:bg-primary-900`}
      >
        {/* Header */}
        <NavBar />

        <div className="mx-auto flex flex-col gap-[120px] lg:gap-[160px] pt-[120px] lg:pt-[160px] pb-[60px] lg:pb-[80px] px-[16px] md:px-[32px] lg:px-[calc((100vw-1128px)/2)]">
          {children}

          {/* Footer */}
          <FooterMessage />
          <FooterBar />
        </div>
      </body>
    </html>
  );
}
