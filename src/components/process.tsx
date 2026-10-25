"use client";

import React, { useState } from "react";
import { siteData } from "@/data";

export default function Process() {
  const { badge, title, description, cta, steps, graphic } = siteData.process;
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section
      aria-label="our process"
      className="content-center items-center flex flex-col h-min justify-start overflow-clip relative w-full bg-[rgb(31,31,31)] gap-0 pt-0 pr-10 pb-0 pl-10 shrink-0"
    >
      <div
        aria-label="container"
        className="content-center items-center flex flex-col h-min justify-start overflow-clip relative w-full gap-[60px] max-w-[1400px] pt-20 pr-0 pb-20 pl-0 shrink-0 after:border after:size-full after:pointer-events-none after:absolute after:inset-0 after:border-[rgb(51,51,51)] after:content-['']"
      >
        <div
          aria-label="title"
          className="content-end items-end flex h-min justify-start relative w-full gap-[60px] pt-0 pr-10 pb-0 pl-10 shrink-0"
        >
          <div
            aria-label="content"
            className="content-start items-start flex flex-col grow h-min justify-center relative w-px basis-0 gap-8 max-w-[650px] shrink-0"
          >
            <div className="contents">
              <div className="relative will-change-transform">
                <div
                  aria-label="Variant 1"
                  className="content-center items-center flex size-min justify-start relative gap-[14px]"
                >
                  <div className="aspect-square relative w-3 bg-[rgb(237,70,9)] shrink-0" />
                  <div className="flex flex-col justify-start relative whitespace-pre shrink-0">
                    <p className="font-medium text-left uppercase text-white text-[14px] tracking-[-0.6px] leading-[16.8px] font-geist-mono">
                      {badge}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              aria-label="Hero Title"
              className="flex flex-col justify-center relative w-full shrink-0"
            >
              <h2 className="font-medium text-white text-[50px] tracking-[-0.6px] leading-[55px] font-inter-tight">
                {title}
              </h2>
            </div>
          </div>

          <div
            aria-label="Description"
            className="flex flex-col justify-center relative whitespace-pre-wrap will-change-transform w-[490px] shrink-0"
          >
            <p className="text-left text-[rgb(209,209,209)] text-[18px] tracking-[-0.2px] leading-[25.2px] font-inter">
              {description}
            </p>
          </div>
        </div>

        <div className="h-px relative w-full bg-[rgb(51,51,51)] shrink-0" />

        <div className="contents">
          <div className="relative w-full will-change-transform z-2">
            <div
              aria-label="Desktop tab"
              className="content-start items-start flex h-min justify-center overflow-clip relative w-full gap-[60px] pt-0 pr-10 pb-0 pl-10"
            >
              <div
                aria-label="content"
                className="content-start items-start flex flex-col grow h-min justify-start overflow-clip relative w-px basis-0 gap-[30px] shrink-0"
              >
                {steps.map((step, idx) => {
                  const isOpen = activeStep === idx;
                  return (
                    <React.Fragment key={step.number}>
                      <div className="relative w-full shrink-0">
                        <div
                          onClick={() => setActiveStep(idx)}
                          className="content-start items-start flex flex-col justify-start overflow-clip relative w-full gap-5 cursor-pointer transition-all duration-300"
                        >
                          <div className="content-start items-start flex flex-col h-min justify-start relative w-full gap-5 shrink-0">
                            <div className="content-center items-center flex h-min justify-between relative w-full shrink-0">
                              <div className="content-center items-center flex h-min justify-start relative w-[85%] gap-5 shrink-0">
                                <div className="content-center items-center flex size-min justify-start overflow-hidden relative bg-[rgb(51,51,51)] shadow-[rgba(77,77,77,0.05)_0px_1.13636px_1.13636px_0px,_rgba(77,77,77,0.04)_0px_3.40909px_3.40909px_0px,_rgba(77,77,77,0.03)_0px_6.81818px_4.54545px_0px,_rgba(77,77,77,0.01)_0px_12.5px_4.54545px_0px,_rgba(77,77,77,0)_0px_19.3182px_5.68182px_0px] p-[14px] shrink-0 rounded-[0.568125rem] border border-[rgb(51,51,51)]">
                                  <div className="aspect-square relative w-6 bg-white shrink-0 rounded-xs" />
                                </div>
                                <div className="flex flex-col justify-center relative whitespace-pre shrink-0">
                                  <p className="text-white text-[24px] tracking-[-0.4px] leading-[33.6px] font-inter">
                                    {step.title}
                                  </p>
                                </div>
                              </div>
                              <div className="flex flex-col justify-center relative whitespace-pre shrink-0">
                                <p className="font-medium text-left uppercase text-[rgb(209,209,209)] text-[18px] tracking-[-0.6px] leading-[21.6px] font-geist-mono">
                                  {step.number}
                                </p>
                              </div>
                            </div>

                            {isOpen && (
                              <div className="flex flex-col justify-center relative whitespace-pre-wrap w-full max-w-[85%] shrink-0">
                                <p className="text-[rgb(209,209,209)] text-[16px] tracking-[-0.2px] leading-[19.2px] font-inter">
                                  {step.description}
                                </p>
                              </div>
                            )}
                          </div>

                          {isOpen && (
                            <div className="relative shrink-0 pt-2">
                              <a
                                href={cta.href}
                                aria-label="primary"
                                className="content-center items-center flex size-min justify-center relative bg-[rgb(237,70,9)] text-white gap-2 pt-[13px] pr-[18px] pb-[13px] pl-[18px] rounded-[6.25rem] hover:opacity-90 transition-opacity"
                              >
                                <div className="flex flex-col justify-start relative whitespace-pre shrink-0">
                                  <p className="font-medium text-left uppercase text-white tracking-[-0.6px] leading-[14.4px] font-geist-mono">
                                    {cta.label}
                                  </p>
                                </div>
                                <div className="content-center items-center flex h-min justify-end overflow-clip relative w-[18px] gap-[5px] shrink-0">
                                  <div className="aspect-square relative w-[18px] bg-white shrink-0" />
                                  <div className="aspect-square relative w-[18px] bg-white shrink-0" />
                                </div>
                              </a>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="h-px relative w-full bg-[rgb(51,51,51)] shrink-0" />
                    </React.Fragment>
                  );
                })}
              </div>

              <div className="self-stretch grow relative w-px basis-0 shrink-0 min-h-[500px]">
                <div
                  aria-label="graphic 1"
                  className="content-center items-center flex flex-col size-full justify-center overflow-hidden relative shadow-[rgba(0,0,0,0.03)_0px_6px_12px_0px,_rgba(0,0,0,0.03)_0px_22px_22px_0px,_rgba(0,0,0,0.02)_0px_51px_30px_0px,_rgba(0,0,0,0)_0px_90px_36px_0px,_rgba(0,0,0,0)_0px_140px_39px_0px] gap-5 pt-20 pr-[60px] pb-20 pl-[60px] rounded-[1.25rem] border-2 border-[rgb(51,51,51)]"
                >
                  <div className="absolute inset-0 rounded-[1.25rem]">
                    <img
                      src={graphic.bgImage}
                      alt={graphic.alt}
                      className="block size-full object-cover overflow-clip aspect-auto rounded-[1.25rem]"
                    />
                  </div>
                  <div
                    aria-label="graphic foreground"
                    className="relative w-full aspect-[1.27672/1] shrink-0 z-1"
                  >
                    <div className="absolute inset-0">
                      <img
                        src={graphic.foregroundImage}
                        alt={graphic.alt}
                        className="block size-full object-contain overflow-clip aspect-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}