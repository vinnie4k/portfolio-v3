"use client";

import GitHubIcon from "@/icons/GitHubIcon";
import InstagramIcon from "@/icons/InstagramIcon";
import LinkedInIcon from "@/icons/LinkedInIcon";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import logoLightImg from "../../public/logo-light.png";
import logoDarkImg from "../../public/logo-dark.png";

export default function NavBar() {
  // Hooks
  const pathname = usePathname();
  const [hasScrolled, setHasScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Variables
  const selected =
    "max-md:bg-secondary-100 max-md:dark:bg-primary-700 max-md:rounded-[16px] md:font-medium md:underline-offset-[6px] md:hover:underline-offset-[8px] md:animate-underline md:animate-opacity";
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

  // TODO: Uncomment and figure out dark mode
  let backgroundColor = "bg-secondary-300 dark:bg-primary-900";
  // if (pathname === "/announcements") {
  //   backgroundColor = "bg-[#84D4EE]";
  // } else if (pathname === "/uplift") {
  //   backgroundColor = "bg-[#FCE28B]";
  // } else if (pathname === "/status") {
  //   backgroundColor = "bg-[#7EECC8]";
  // } else if (pathname === "/grabbit") {
  //   backgroundColor = "bg-[#E6E2FF]";
  // } else if (pathname === "/volume") {
  //   backgroundColor = "bg-[#FFC8B2]";
  // } else if (pathname === "/scribbly") {
  //   backgroundColor = "bg-[#192024]";
  // }

  return (
    <>
      {/* Tablet + Desktop */}
      <motion.div
        initial={{ opacity: 0, y: -36 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
        className={`transition-colors duration-300 max-md:hidden fixed w-full z-10 py-6 px-8 lg:px-[calc((100vw-1128px)/2)] flex flex-row justify-between items-center ${
          pathname === "/scribbly" && "dark"
        } ${hasScrolled && backgroundColor}`}
      >
        {/* Pages */}
        <div className="flex flex-row gap-8 lg:gap-12">
          <a href="/">
            <p
              className={`b2 text-neutral-900 dark:text-neutral-100 ${
                isWork && selected
              }`}
            >
              Work
            </p>
          </a>
          <a href="/blog">
            <p
              className={`b2 text-neutral-900 dark:text-neutral-100 ${
                isBlog && selected
              }`}
            >
              Blog
            </p>
          </a>
          <a href="/about">
            <p
              className={`b2 text-neutral-900 dark:text-neutral-100 ${
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
            <p className="b2 text-neutral-900 dark:text-neutral-100">Resume</p>
          </a>
        </div>

        {/* Logo */}
        <img
          src={logoLightImg.src}
          alt="Vin Bui's Logo"
          className="block dark:hidden absolute left-1/2 translate-x-[-16px] w-8 h-8"
        />
        <img
          src={logoDarkImg.src}
          alt="Vin Bui's Logo"
          className="hidden dark:block absolute left-1/2 translate-x-[-16px] w-8 h-8"
        />

        {/* Links */}
        <div className="flex flex-row gap-14 lg:gap-[72px]">
          <a href="https://github.com/vinnie4k" target="_blank">
            <GitHubIcon className="fill-neutral-900 dark:fill-neutral-100 w-5 animate-opacity" />
          </a>
          <a href="https://www.linkedin.com/in/vin-bui/" target="_blank">
            <LinkedInIcon className="fill-neutral-900 dark:fill-neutral-100 w-5 animate-opacity" />
          </a>
          <a href="https://www.instagram.com/vin.bui/" target="_blank">
            <InstagramIcon className="fill-neutral-900 dark:fill-neutral-100 w-5 animate-opacity" />
          </a>
        </div>
      </motion.div>

      {/* Mobile */}
      <div className="md:hidden fixed top-8 w-[calc(100%-32px)] left-4">
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
    </>
  );
}
