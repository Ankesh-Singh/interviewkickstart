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
          className="relative flex items-center justify-center w-full py-[120px] overflow-hidden border border-[rgb(51,51,51)]"
        >
          {/* Interactive Grid Background */}
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
          <div className="relative z-1 flex flex-col items-center justify-start max-w-[650px] px-6 gap-8 pointer-events-auto">
            <div aria-label="Badge" className="flex items-center gap-[14px]">
              <div aria-label="dot" className="w-3 h-3 bg-[rgb(237,70,9)] shrink-0" />
              <p className="font-mono font-medium text-left uppercase text-white text-[14px] tracking-[-0.6px] leading-[16.8px]">
                {footer.cta.badge}
              </p>
            </div>

            <div className="flex flex-col items-center gap-4 text-center">
              <h2 className="font-inter-tight font-medium text-white text-[50px] tracking-[-0.6px] leading-[55px]">
                {footer.cta.title}
              </h2>
              <p className="font-inter text-[rgb(209,209,209)] text-[18px] tracking-[-0.2px] leading-[25.2px]">
                {footer.cta.description}
              </p>
            </div>

            <a
              href={footer.cta.primaryCta.href}
              className="flex items-center gap-2 bg-[rgb(237,70,9)] hover:bg-[rgb(220,60,0)] text-white text-[14px] font-mono uppercase tracking-[-0.6px] py-[13px] px-[18px] rounded-full transition-colors cursor-pointer group"
            >
              <span>{footer.cta.primaryCta.label}</span>
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>

        {/* Link Groups */}
        <div className="relative flex flex-col w-full bg-[rgb(31,31,31)] pt-20 border border-[rgb(51,51,51)]">
          <div className="flex flex-col lg:flex-row items-start justify-between w-full px-10 gap-10 border-t border-b border-[rgb(51,51,51)]">
            {/* Brand column */}
            <div className="flex flex-col gap-6 py-10 w-full lg:w-1/4">
              <a href="#" className="block w-[125px] h-9">
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10 w-full lg:w-3/4 divide-y md:divide-y-0 md:divide-x divide-[rgb(51,51,51)]">
              {footer.sections.map((section, idx) => (
                <div key={section.title} className={`flex flex-col gap-5 ${idx !== 0 ? "md:pl-8 pt-6 md:pt-0" : ""}`}>
                  <p className="font-mono font-medium uppercase text-white text-[14px] tracking-[-0.6px] leading-[16.8px]">
                    {section.title}
                  </p>
                  <ul className="flex flex-col gap-3">
                    {section.links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className="font-inter text-[rgb(209,209,209)] hover:text-white text-[16px] tracking-[-0.2px] leading-[19.2px] transition-colors"
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
          <div className="flex flex-col sm:flex-row items-center justify-between w-full p-10 gap-4">
            <p className="font-inter text-[rgb(186,186,186)] text-[14px] tracking-[-0.2px] leading-[21px]">
              {footer.copyright}
            </p>
            <div className="flex items-center gap-3">
              <span className="font-inter text-[rgb(186,186,186)] text-[14px] tracking-[-0.2px] leading-[21px]">
                Powered by
              </span>
              <div
                className="w-[114px] h-4 bg-contain bg-no-repeat"
                style={{
                  backgroundImage:
                    'url("data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 114 16%22><g><path d=%22M 0 14.365 L 0 0 L 113.616 0 L 113.616 14.365 Z%22 fill=%22transparent%22></path><path d=%22M 99.404 5.945 L 91.745 5.945 L 99.169 8.906 L 99.404 8.906 L 99.404 11.866 L 85.262 11.866 L 85.262 8.906 L 92.851 8.906 L 85.428 5.945 L 85.262 5.945 L 85.262 2.984 L 99.404 2.984 Z%22 fill=%22rgb(186,186,186)%22></path><path d=%22M 45.862 3.012 L 34.098 3.012 L 34.098 11.883 L 37.039 11.883 L 37.039 10.382 L 45.862 10.382 L 45.862 11.883 L 48.804 11.883 L 48.804 3.012 Z M 37.039 7.446 L 37.039 5.945 L 45.862 5.945 L 45.862 7.446 Z%22 fill=%22rgb(186,186,186)%22></path><path d=%22M 79.96 3.012 L 68.195 3.012 L 68.195 11.883 L 71.138 11.883 L 71.138 10.382 L 79.96 10.382 L 79.96 11.883 L 82.902 11.883 L 82.902 3.012 Z M 71.138 7.446 L 71.138 5.945 L 79.961 5.945 L 79.961 7.446 Z%22 fill=%22rgb(186,186,186)%22></path><path d=%22M 109.477 8.914 L 113.611 5.948 L 113.611 3.012 L 101.352 3.012 L 101.352 11.883 L 104.293 11.883 L 104.293 11.85 L 113.618 11.865 L 113.618 8.904 Z M 108.566 5.948 L 104.471 8.916 L 104.289 8.916 L 104.289 5.948 Z%22 fill=%22rgb(186,186,186)%22></path><path d=%22M 11.764 3.012 L 0 3.012 L 0 11.883 L 14.707 11.883 L 14.707 3.012 L 11.765 3.012 Z M 2.941 8.914 L 2.941 5.945 L 11.764 5.945 L 11.764 8.914 Z%22 fill=%22rgb(186,186,186)%22></path><path d=%22M 65.851 5.951 L 65.851 3.016 L 54.086 3.016 L 54.086 0 L 51.145 0 L 51.145 11.886 L 54.086 11.886 L 54.086 5.951 L 56.623 5.951 L 54.981 8.205 L 63.806 14.347 L 65.806 11.868 L 56.873 5.951 Z%22 fill=%22rgb(186,186,186)%22></path><path d=%22M 28.815 3.015 L 26.145 3.015 L 26.145 2.387 L 23.204 2.387 L 23.204 3.015 L 17.051 3.015 L 17.051 11.886 L 19.992 11.886 L 19.992 5.951 L 23.204 5.951 L 23.204 11.886 L 26.145 11.886 L 26.145 5.951 L 28.815 5.951 L 28.815 11.886 L 31.757 11.886 L 31.757 3.015 Z%22 fill=%22rgb(186,186,186)%22></path></g></svg>")',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}