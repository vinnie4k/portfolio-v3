"use client";

import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();
  const selected = "bg-white rounded-[16px]";
  const isWork = [
    "/",
    "/announcements",
    "/uplift",
    "/status",
    "/grabbit",
    "/volume",
    "/scribbly",
  ].includes(pathname);
  const isBlog = pathname.startsWith("/blog");

  return (
    <div className="fixed top-8 z-10 w-full hero-container">
      <div className="flex flex-row justify-between items-center bg-custom-navbar backdrop-blur-lg py-3 px-4 rounded-[24px]">
        <a href="/">
          <p
            className={`b2 font-medium text-neutral-900 py-[6px] px-4 ${
              isWork && selected
            }`}
          >
            Work
          </p>
        </a>
        <a href="/blog">
          <p
            className={`b2 font-medium text-neutral-900 py-[6px] px-4 ${
              isBlog && selected
            }`}
          >
            Blog
          </p>
        </a>
        <a href="/about">
          <p
            className={`b2 font-medium text-neutral-900 py-[6px] px-4 ${
              pathname === "/about" && selected
            }`}
          >
            About
          </p>
        </a>
        <a
          href="https://drive.google.com/file/d/1OnT9r7J92da_CVz9K7e_BXUB98A9K2PZ/view?usp=drive_link"
          target="_blank"
        >
          <p className="b2 font-medium text-neutral-900 py-[6px] px-4">
            Resume
          </p>
        </a>
      </div>
    </div>
  );
}
