"use client";

import React, { useState } from "react";
import { siteData } from "@/data";

export default function FAQ() {
  const { faq } = siteData;
  const [activeCategory, setActiveCategory] = useState(faq.categories[0].id);
  const [openItem, setOpenItem] = useState<string | null>(
    faq.categories[0].items[0]?.id || null
  );

  const currentCategory =
    faq.categories.find((c) => c.id === activeCategory) || faq.categories[0];

  const toggleAccordion = (id: string) => {
    setOpenItem((prev) => (prev === id ? null : id));
  };

  return (
    <section
      aria-label="faq"
      id="faq"
      className="flex flex-col items-center justify-start relative w-full bg-[rgb(248,248,248)] px-4 md:px-10 shrink-0"
    >
      <div
        aria-label="container"
        className="relative flex flex-col items-center justify-start w-full gap-8 md:gap-10 max-w-[1400px] py-12 md:py-[100px] border-l border-r border-t border-[rgb(236,236,236)]"
      >
        <div
          aria-label="content"
          className="flex flex-col items-center justify-start w-full gap-6 md:gap-8 max-w-[650px] text-center px-4"
        >
          <div aria-label="Variant 1" className="flex items-center justify-start gap-[14px]">
            <div aria-label="dot" className="w-3 h-3 bg-[rgb(237,70,9)] shrink-0" />
            <p className="font-mono font-medium text-left uppercase text-[rgb(26,26,26)] text-[14px] tracking-[-0.6px] leading-[16.8px]">
              {faq.badge}
            </p>
          </div>

          <div aria-label="Hero Title" className="w-full">
            <h2 className="font-inter-tight font-medium text-center text-[rgb(31,31,31)] text-[32px] sm:text-[40px] md:text-[50px] tracking-[-0.6px] leading-[1.1]">
              {faq.title}
            </h2>
          </div>
        </div>

        <div aria-label="divider" className="h-px w-full bg-[rgb(236,236,236)]" />

        <div className="flex flex-col items-center w-full max-w-[900px] gap-6 px-2 sm:px-4">
          <div
            aria-label="Tabs Buttons Group"
            className="flex flex-wrap items-center justify-center bg-neutral-100 p-1.5 rounded-sm border border-[rgb(232,232,232)] gap-1 sm:gap-2"
          >
            {faq.categories.map((category) => {
              const isActive = category.id === currentCategory.id;
              return (
                <button
                  key={category.id}
                  onClick={() => {
                    setActiveCategory(category.id);
                    setOpenItem(category.items[0]?.id || null);
                  }}
                  className={`flex items-center gap-2 py-2 pr-3 sm:pr-4 pl-2 sm:pl-3 rounded-xs text-[12px] sm:text-sm font-mono uppercase tracking-[-0.6px] transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-white text-[rgb(26,26,26)] shadow-sm font-medium"
                      : "text-[rgb(163,163,163)] hover:text-[rgb(70,70,70)]"
                  }`}
                >
                  <svg
                    className={`w-4 h-4 shrink-0 transition-colors ${
                      isActive ? "text-[rgb(26,26,26)]" : "text-[rgb(163,163,163)]"
                    }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                  <span>{category.label}</span>
                </button>
              );
            })}
          </div>

          <div className="flex flex-col w-full gap-2 min-h-[380px]">
            {currentCategory.items.map((item) => {
              const isOpen = openItem === item.id;
              return (
                <div
                  key={item.id}
                  className="flex flex-col w-full bg-white rounded-xl border border-[rgb(236,236,236)] overflow-hidden transition-all duration-300 shadow-xs"
                >
                  <button
                    onClick={() => toggleAccordion(item.id)}
                    aria-expanded={isOpen}
                    className="flex items-center justify-between w-full p-4 sm:p-5 text-left cursor-pointer gap-4 hover:bg-neutral-50/70 transition-colors duration-200"
                  >
                    <span className="font-mono font-medium uppercase text-[rgb(26,26,26)] text-[14px] sm:text-[16px] tracking-[-0.6px] leading-snug">
                      {item.question}
                    </span>
                    <span
                      className={`w-[18px] h-[18px] shrink-0 bg-[rgb(237,70,9)] transition-transform duration-500 ease-in-out mask-center ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      style={{
                        maskImage:
                          "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"6 9 12 15 18 9\"></polyline></svg>')",
                        WebkitMaskImage:
                          "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"6 9 12 15 18 9\"></polyline></svg>')",
                        maskSize: "contain",
                        WebkitMaskSize: "contain",
                        maskRepeat: "no-repeat",
                        WebkitMaskRepeat: "no-repeat",
                      }}
                    />
                  </button>

                  <div
                    className={`grid transition-all duration-650 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-4 sm:px-5 pb-5 pt-1">
                        <p className="font-inter text-[rgb(118,118,118)] text-[14px] sm:text-[16px] tracking-[-0.2px] leading-relaxed transition-opacity duration-500 ease-in-out">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}