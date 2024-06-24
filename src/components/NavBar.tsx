"use client";

import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();
  const selected = "bg-secondary-100 dark:bg-primary-700 rounded-[16px]";
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
    <div className="fixed top-8 left-1/2 z-10 w-[400px] mx-[-200px]">
      <div className="flex flex-row justify-between items-center bg-navbar-l dark:bg-navbar-d backdrop-blur-lg py-3 px-4 rounded-[24px]">
        <a href="/">
          <p
            className={`b2 font-medium text-neutral-900 dark:text-neutral-100 py-[6px] px-4 ${
              isWork && selected
            }`}
          >
            Work
          </p>
        </a>
        <a href="/blog">
          <p
            className={`b2 font-medium text-neutral-900 dark:text-neutral-100 py-[6px] px-4 ${
              isBlog && selected
            }`}
          >
            Blog
          </p>
        </a>
        <a href="/about">
          <p
            className={`b2 font-medium text-neutral-900 dark:text-neutral-100 py-[6px] px-4 ${
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
          <p className="b2 font-medium text-neutral-900 dark:text-neutral-100 py-[6px] px-4">
            Resume
          </p>
        </a>
      </div>
    </div>
  );
}
