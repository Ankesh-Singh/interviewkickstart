"use client";

import React, { useState } from "react";
import { siteData } from "@/data";

function StepIcon({ index }: { index: number }) {
  if (index === 0) {
    // Search / Magnifying Glass
    return (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    );
  }
  if (index === 1) {
    // Sliders / Controls / Tuning
    return (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    );
  }
  if (index === 2) {
    // Eye / Integration & Review
    return (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    );
  }
  // Flag / Launch
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
    </svg>
  );
}

export default function Process() {
  const { badge, title, description, cta, steps, graphic } = siteData.process;
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section
      aria-label="our process"
      id="process"
      className="flex flex-col items-center justify-start relative w-full bg-[rgb(31,31,31)] px-4 md:px-10 shrink-0"
    >
      <div
        aria-label="container"
        className="flex flex-col items-center justify-start relative w-full gap-8 md:gap-[60px] max-w-[1400px] py-12 md:py-20 px-4 md:px-10 shrink-0 border border-[rgb(51,51,51)]"
      >
        <div
          aria-label="title"
          className="flex flex-col lg:flex-row items-start lg:items-end justify-between relative w-full gap-6 shrink-0"
        >
          <div
            aria-label="content"
            className="flex flex-col grow justify-center w-full lg:w-auto gap-6 md:gap-8 max-w-[650px] shrink-0"
          >
            <div aria-label="Variant 1" className="flex items-center justify-start gap-[14px]">
              <div className="w-3 h-3 bg-[rgb(237,70,9)] shrink-0" />
              <p className="font-mono font-medium text-left uppercase text-white text-[14px] tracking-[-0.6px] leading-[16.8px]">
                {badge}
              </p>
            </div>

            <div aria-label="Hero Title" className="w-full">
              <h2 className="font-inter-tight font-medium text-white text-[32px] sm:text-[40px] md:text-[50px] tracking-[-0.6px] leading-[1.1]">
                {title}
              </h2>
            </div>
          </div>

          <div
            aria-label="Description"
            className="flex flex-col justify-center w-full lg:w-[490px] shrink-0"
          >
            <p className="font-inter text-left text-[rgb(209,209,209)] text-[16px] md:text-[18px] tracking-[-0.2px] leading-[25.2px]">
              {description}
            </p>
          </div>
        </div>

        <div className="h-px w-full bg-[rgb(51,51,51)] shrink-0" />

        <div className="flex flex-col lg:flex-row items-stretch justify-center w-full gap-8 lg:gap-[60px]">
          {/* Steps Column */}
          <div className="flex flex-col grow justify-start w-full lg:w-1/2 gap-6">
            {steps.map((step, idx) => {
              const isOpen = activeStep === idx;
              return (
                <div key={step.number} className="flex flex-col w-full gap-4">
                  <div
                    onClick={() => setActiveStep(idx)}
                    className="group flex flex-col w-full gap-4 cursor-pointer transition-all duration-300"
                  >
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-4">
                        <div
                          className={`flex items-center justify-center p-3 rounded-xl border transition-all duration-300 ${
                            isOpen
                              ? "bg-[rgb(237,70,9)] text-white border-[rgb(237,70,9)] shadow-lg shadow-[rgba(237,70,9,0.3)] scale-105"
                              : "bg-[rgb(45,45,45)] text-[rgb(209,209,209)] border-[rgb(58,58,58)] group-hover:border-[rgb(237,70,9)] group-hover:text-white"
                          }`}
                        >
                          <StepIcon index={idx} />
                        </div>
                        <p
                          className={`font-inter text-[20px] md:text-[24px] tracking-[-0.4px] leading-snug transition-colors duration-300 ${
                            isOpen
                              ? "text-[rgb(237,70,9)] font-medium"
                              : "text-white group-hover:text-[rgb(255,140,90)]"
                          }`}
                        >
                          {step.title}
                        </p>
                      </div>
                      <p
                        className={`font-mono font-medium uppercase text-[16px] md:text-[18px] tracking-[-0.6px] transition-colors duration-300 ${
                          isOpen ? "text-[rgb(237,70,9)]" : "text-[rgb(160,160,160)]"
                        }`}
                      >
                        {step.number}
                      </p>
                    </div>

                    {isOpen && (
                      <div className="pl-0 md:pl-[68px] flex flex-col gap-4">
                        <p className="font-inter text-[rgb(209,209,209)] text-[15px] md:text-[16px] tracking-[-0.2px] leading-relaxed">
                          {step.description}
                        </p>
                        <div>
                          <a
                            href={cta.href}
                            className="inline-flex items-center gap-2 bg-[rgb(237,70,9)] hover:bg-[rgb(220,60,0)] text-white text-sm font-mono uppercase tracking-[-0.6px] py-[11px] px-[18px] rounded-full transition-all duration-200 hover:gap-3 cursor-pointer"
                          >
                            <span>{cta.label}</span>
                            <span>→</span>
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="h-px w-full bg-[rgb(51,51,51)] shrink-0" />
                </div>
              );
            })}
          </div>

          {/* Graphic Column */}
          <div className="relative w-full lg:w-1/2 min-h-[350px] lg:min-h-[500px] flex flex-col items-center justify-center p-6 md:p-12 rounded-[1.25rem] border-2 border-[rgb(51,51,51)] overflow-hidden shadow-2xl">
            <div className="absolute inset-0 rounded-[1.25rem]">
              <img
                src={graphic.bgImage}
                alt={graphic.alt}
                className="block size-full object-cover rounded-[1.25rem]"
              />
            </div>
            <div className="relative z-1 w-full aspect-[1.27672/1]">
              <img
                src={graphic.foregroundImage}
                alt={graphic.alt}
                className="block size-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}