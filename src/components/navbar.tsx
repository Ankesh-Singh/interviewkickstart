"use client";

import React, { useState } from "react";
import { siteData } from "@/data";

export default function Navbar() {
  const { logo, navLinks, cta, coursesDropdown } = siteData.navbar;
  const [coursesOpen, setCoursesOpen] = useState(false);

  return (
    <div className="fixed left-0 top-0 right-0 z-50 shrink-0">
      <nav
        aria-label="Desktop"
        className="flex flex-col items-center justify-center relative w-full bg-white px-4 md:px-10 border-b border-neutral-100"
      >
        <div
          aria-label="Container"
          className="flex items-center justify-between relative w-full max-w-[1400px] py-3 px-4 md:px-10 shrink-0 border-b border-l border-r border-[rgb(236,236,236)] bg-white"
        >
          {/* Logo */}
          <div className="flex items-center gap-6 shrink-0">
            <a
              href={logo.url}
              aria-label="Interview Kickstart"
              className="block relative w-[130px] h-9"
            >
              <img
                src={logo.imgSrc}
                alt={logo.alt}
                className="w-full h-full object-contain"
              />
            </a>
          </div>

          {/* Navigation Links with Courses Dropdown */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-4 shrink-0">
            {/* Courses Interactive Dropdown Button */}
            <div
              className="relative"
              onMouseEnter={() => setCoursesOpen(true)}
              onMouseLeave={() => setCoursesOpen(false)}
            >
              <button
                type="button"
                onClick={() => setCoursesOpen((prev) => !prev)}
                className="group flex items-center gap-1.5 px-3 py-1.5 rounded-full hover:bg-neutral-100 transition-colors duration-200 cursor-pointer"
              >
                <span className="font-geist-mono font-medium text-[14px] uppercase text-black tracking-[-0.6px]">
                  Courses
                </span>
                <svg
                  className={`w-3.5 h-3.5 text-neutral-700 transition-transform duration-200 group-hover:translate-y-0.5 ${
                    coursesOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
                <span className="text-[10px] font-mono uppercase bg-blue-100 text-blue-600 px-1.5 py-0.5 rounded-full font-bold ml-0.5">
                  NEW
                </span>
              </button>

              {/* Mega-menu dropdown panel */}
              {coursesOpen && (
                <div className="absolute top-full left-0 pt-2 w-[880px] z-50">
                  <div className="bg-white rounded-2xl shadow-2xl border border-neutral-200 p-8 grid grid-cols-3 gap-8">
                    {coursesDropdown.map((col) => (
                      <div key={col.category} className="flex flex-col gap-4">
                        <h4 className="font-inter-tight font-bold text-[16px] text-neutral-900 leading-snug">
                          {col.category}
                        </h4>
                        <ul className="flex flex-col gap-3">
                          {col.links.map((link) => (
                            <li key={link.label}>
                              <a
                                href={link.href}
                                className="font-inter text-[14px] text-neutral-600 hover:text-black transition-colors leading-relaxed block"
                              >
                                {link.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Other Nav Links */}
            {navLinks.slice(1).map((link) => (
              <div key={link.label} className="relative shrink-0">
                <a
                  href={link.href}
                  className="px-3 py-1.5 rounded-full hover:bg-neutral-100 transition-colors duration-200 block"
                >
                  <span className="font-geist-mono font-medium text-[14px] uppercase text-black tracking-[-0.6px]">
                    {link.label}
                  </span>
                </a>
              </div>
            ))}
          </div>

          {/* Top CTA Button matching user screenshot */}
          <div aria-label="CTA" className="relative shrink-0">
            <a
              href={cta.href}
              className="group flex items-center justify-center gap-2 bg-white hover:bg-neutral-100 border border-[rgb(236,236,236)] py-[10px] px-5 rounded-full transition-colors duration-200 cursor-pointer shadow-xs"
            >
              <span className="font-geist-mono font-medium text-[14px] uppercase text-[rgb(26,26,26)] tracking-[-0.6px]">
                {cta.label}
              </span>
              <svg
                className="w-4 h-4 text-[rgb(26,26,26)] shrink-0 transition-transform duration-200 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}