"use client";

import React, { useMemo } from "react";
import { siteData } from "@/data";

const TOTAL_COLS = 30;
const TOTAL_ROWS = 14;

// Default highlighted coordinates matching original artwork
const INITIAL_HIGHLIGHTS = [
  "0,8", "1,10", "2,19", "4,2", "4,18", "4,25", "4,27", "5,11", "6,15",
  "7,7", "8,14", "9,4", "9,20", "9,24", "10,21", "11,13", "11,28", "12,23",
];

export default function Footer() {
  const { footer } = siteData;

  const initialSet = useMemo(() => new Set(INITIAL_HIGHLIGHTS), []);

  return (
    <footer aria-label="desktop" className="flex flex-col items-center justify-start relative w-full bg-[rgb(26,26,26)]">
      <div
        aria-label="container"
        className="flex flex-col items-center justify-start relative w-full max-w-[1400px] pb-[50px]"
      >
        {/* Before Footer CTA Section */}
        <div
          aria-label="before footer cta"
          className="relative flex items-center justify-center w-full py-16 sm:py-24 md:py-[120px] overflow-hidden border border-[rgb(51,51,51)]"
        >
          {/* Interactive Grid Background with hover square animation */}
          <div className="absolute inset-0 z-0">
            <div
              className="grid w-full h-full"
              style={{
                gridTemplateColumns: `repeat(${TOTAL_COLS}, minmax(0, 1fr))`,
                gridTemplateRows: `repeat(${TOTAL_ROWS}, minmax(0, 1fr))`,
              }}
            >
              {Array.from({ length: TOTAL_ROWS * TOTAL_COLS }).map((_, idx) => {
                const r = Math.floor(idx / TOTAL_COLS);
                const c = idx % TOTAL_COLS;
                const isDefault = initialSet.has(`${r},${c}`);

                return (
                  <div
                    key={`${r}-${c}`}
                    className={`border border-white/5 transition-colors duration-150 cursor-pointer ${
                      isDefault ? "bg-white/10" : "bg-transparent"
                    } hover:bg-white/20 hover:border-white/20`}
                  />
                );
              })}
            </div>
          </div>

          {/* Foreground CTA Content */}
          <div className="relative z-1 flex flex-col items-center justify-start max-w-[650px] px-4 sm:px-6 gap-6 sm:gap-8 pointer-events-auto text-center">
            <div aria-label="Badge" className="flex items-center gap-[14px]">
              <div aria-label="dot" className="w-3 h-3 bg-[rgb(237,70,9)] shrink-0" />
              <p className="font-mono font-medium text-left uppercase text-white text-[13px] sm:text-[14px] tracking-[-0.6px] leading-[16.8px]">
                {footer.cta.badge}
              </p>
            </div>

            <div className="flex flex-col items-center gap-4 text-center">
              <h2 className="font-inter-tight font-medium text-white text-[32px] sm:text-[42px] md:text-[50px] tracking-[-0.6px] leading-[1.1]">
                {footer.cta.title}
              </h2>
              <p className="font-inter text-[rgb(209,209,209)] text-[15px] sm:text-[18px] tracking-[-0.2px] leading-relaxed">
                {footer.cta.description}
              </p>
            </div>

            <a
              href={footer.cta.primaryCta.href}
              className="flex items-center gap-2 bg-[rgb(237,70,9)] hover:bg-[rgb(220,60,0)] text-white text-[13px] sm:text-[14px] font-mono uppercase tracking-[-0.6px] py-[13px] px-[18px] rounded-full transition-colors cursor-pointer group"
            >
              <span>{footer.cta.primaryCta.label}</span>
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>

        {/* Link Groups */}
        <div className="relative flex flex-col w-full bg-[rgb(31,31,31)] pt-12 md:pt-20 border border-[rgb(51,51,51)]">
          <div className="flex flex-col lg:flex-row items-start justify-between w-full px-4 sm:px-10 gap-8 md:gap-10 border-t border-b border-[rgb(51,51,51)]">
            {/* Brand column */}
            <div className="flex flex-col gap-6 py-6 md:py-10 w-full lg:w-1/4">
              <a href="https://www.interviewkickstart.com/" className="block w-[125px] h-9">
                <img
                  src={footer.brand.logoSrc}
                  alt={footer.brand.alt}
                  className="w-full h-full object-contain"
                />
              </a>

              <div className="flex items-center gap-3">
                {footer.brand.socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    aria-label={social.name}
                    className="flex items-center justify-center w-[38px] h-[38px] rounded-full bg-[rgb(51,51,51)] hover:bg-[rgb(68,68,68)] transition-colors"
                  >
                    <img
                      src={social.icon}
                      alt={social.name}
                      className="w-5 h-5 object-contain"
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* Links Columns */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 py-6 md:py-10 w-full lg:w-3/4 divide-y sm:divide-y-0 sm:divide-x divide-[rgb(51,51,51)]">
              {footer.sections.map((section, idx) => (
                <div key={section.title} className={`flex flex-col gap-4 sm:gap-5 ${idx !== 0 ? "sm:pl-8 pt-6 sm:pt-0" : ""}`}>
                  <p className="font-mono font-medium uppercase text-white text-[14px] tracking-[-0.6px] leading-[16.8px]">
                    {section.title}
                  </p>
                  <ul className="flex flex-col gap-3">
                    {section.links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className="font-inter text-[rgb(209,209,209)] hover:text-white text-[15px] sm:text-[16px] tracking-[-0.2px] leading-[19.2px] transition-colors"
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

          {/* Copyright bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between w-full p-6 sm:p-10 gap-4 text-center sm:text-left">
            <p className="font-inter text-[rgb(186,186,186)] text-[13px] sm:text-[14px] tracking-[-0.2px] leading-[21px]">
              {footer.copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}