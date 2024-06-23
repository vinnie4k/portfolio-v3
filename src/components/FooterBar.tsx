"use client";

import LinkedInIcon from "@/icons/LinkedInIcon";
import InstagramIcon from "@/icons/InstagramIcon";
import GitHubIcon from "@/icons/GitHubIcon";
import SunIcon from "@/icons/SunIcon";
import { inInterval } from "@/helpers";
import { timeIntervals } from "@/constants";
import { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";

export default function FooterBar() {
  const offsetStyle = [
    "ml-[0px]",
    "ml-[28px]",
    "ml-[56px]",
    "ml-[84px]",
    "ml-[112px]",
    "ml-[140px]",
    "ml-[168px]",
    "ml-[196px]",
    "ml-[224px]",
  ];

  // Variables
  const [activeIndex, setActiveIndex] = useState(-1);
  const [isShowing, setIsShowing] = useState(true);

  // Hooks
  useEffect(() => {
    const newActiveIndex = timeIntervals.findIndex((interval) =>
      inInterval(interval[0], interval[1])
    );
    setActiveIndex(newActiveIndex);
    if ([5, 6, 7, 8].includes(newActiveIndex)) {
      document.documentElement.classList.add("dark");
    }
  }, [timeIntervals]);

  // Render
  return (
    <div className="flex flex-col items-center gap-6">
      {/* Toggle */}
      <div className="flex flex-col gap-3 justify-end h-[84px]">
        {/* Circle */}
        <Transition show={isShowing}>
          <div
            className={`animate-footer-circle bg-primary-700 rounded-[24px] w-10 h-10 flex items-center justify-center ${
              activeIndex === -1 ? "hidden" : offsetStyle[activeIndex]
            }`}
          >
            <SunIcon width={16} className="stroke-neutral-100" />
          </div>
        </Transition>

        {/* Bars */}
        <div className="flex flex-row px-[18px] items-end h-8">
          <button
            className={`animate-footer-bar pr-3 ${activeIndex === 0 && "h-10"}`}
            onClick={() => {
              setIsShowing(false);
              setTimeout(() => {
                document.documentElement.classList.remove("dark");
                setActiveIndex(0);
                setIsShowing(true);
              }, 300);
            }}
          >
            <div className="w-1 h-full rounded-[8px] bg-neutral-800" />
          </button>
          <button
            className={`animate-footer-bar px-3 ${activeIndex === 1 && "h-10"}`}
            onClick={() => {
              document.documentElement.classList.remove("dark");
              setIsShowing(false);
              setTimeout(() => {
                setActiveIndex(1);
                setIsShowing(true);
              }, 300);
            }}
          >
            <div className="w-1 h-full rounded-[8px] bg-neutral-800" />
          </button>
          <button
            className={`animate-footer-bar px-3 ${activeIndex === 2 && "h-10"}`}
            onClick={() => {
              document.documentElement.classList.remove("dark");
              setIsShowing(false);
              setTimeout(() => {
                setActiveIndex(2);
                setIsShowing(true);
              }, 300);
            }}
          >
            <div className="w-1 h-full rounded-[8px] bg-neutral-800" />
          </button>
          <button
            className={`animate-footer-bar px-3 ${activeIndex === 3 && "h-10"}`}
            onClick={() => {
              document.documentElement.classList.remove("dark");
              setIsShowing(false);
              setTimeout(() => {
                setActiveIndex(3);
                setIsShowing(true);
              }, 300);
            }}
          >
            <div className="w-1 h-full rounded-[8px] bg-neutral-700" />
          </button>
          <button
            className={`animate-footer-bar px-3 ${activeIndex === 4 && "h-10"}`}
            onClick={() => {
              document.documentElement.classList.remove("dark");
              setIsShowing(false);
              setTimeout(() => {
                setActiveIndex(4);
                setIsShowing(true);
              }, 300);
            }}
          >
            <div className="w-1 h-full rounded-[8px] bg-neutral-600" />
          </button>
          <button
            className={`animate-footer-bar px-3 ${activeIndex === 5 && "h-10"}`}
            onClick={() => {
              document.documentElement.classList.add("dark");
              setIsShowing(false);
              setTimeout(() => {
                setActiveIndex(5);
                setIsShowing(true);
              }, 300);
            }}
          >
            <div className="w-1 h-full rounded-[8px] bg-neutral-500" />
          </button>
          <button
            className={`animate-footer-bar px-3 ${activeIndex === 6 && "h-10"}`}
            onClick={() => {
              document.documentElement.classList.add("dark");
              setIsShowing(false);
              setTimeout(() => {
                setActiveIndex(6);
                setIsShowing(true);
              }, 300);
            }}
          >
            <div className="w-1 h-full rounded-[8px] bg-neutral-400" />
          </button>
          <button
            className={`animate-footer-bar px-3 ${activeIndex === 7 && "h-10"}`}
            onClick={() => {
              document.documentElement.classList.add("dark");
              setIsShowing(false);
              setTimeout(() => {
                setActiveIndex(7);
                setIsShowing(true);
              }, 300);
            }}
          >
            <div className="w-1 h-full rounded-[8px] bg-neutral-400" />
          </button>
          <button
            className={`animate-footer-bar pl-3 ${activeIndex === 8 && "h-10"}`}
            onClick={() => {
              document.documentElement.classList.add("dark");
              setIsShowing(false);
              setTimeout(() => {
                setActiveIndex(8);
                setIsShowing(true);
              }, 300);
            }}
          >
            <div className="w-1 h-full rounded-[8px] bg-neutral-400" />
          </button>
        </div>
      </div>

      <p className="b2 text-neutral-600 dark:text-neutral-400">
        Designed and developed by Vin © 2024
      </p>

      <div className="flex flex-row gap-8">
        <a href="https://github.com/vinnie4k" target="_blank">
          <GitHubIcon
            width={20}
            className="fill-neutral-900 dark:fill-neutral-100"
          />
        </a>
        <a href="https://www.linkedin.com/in/vin-bui/" target="_blank">
          <LinkedInIcon
            width={20}
            className="fill-neutral-900 dark:fill-neutral-100"
          />
        </a>
        <a href="https://www.instagram.com/vin.bui/" target="_blank">
          <InstagramIcon
            width={20}
            className="fill-neutral-900 dark:fill-neutral-100"
          />
        </a>
      </div>
    </div>
  );
}
