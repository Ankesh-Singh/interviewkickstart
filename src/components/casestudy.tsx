import React from "react";
import { siteData } from "@/data";

export default function CaseStudy() {
  const { badge, title, cta, quoteIcon, cases } = siteData.caseStudy;

  return (
    <section
      aria-label="case study"
      className="content-center items-center flex flex-col h-min justify-start relative w-full bg-white gap-10 pt-0 pr-10 pb-0 pl-10 z-1 shrink-0"
    >
      <div
        aria-label="container"
        className="content-start items-start flex flex-col h-min justify-center relative w-full gap-[60px] max-w-[1400px] pt-[100px] pr-[2px] pb-[100px] pl-[2px] z-1 shrink-0 after:border-l after:border-r after:size-full after:pointer-events-none after:absolute after:inset-0 after:border-[rgb(236,236,236)] after:content-['']"
      >
        <div
          aria-label="top section"
          className="content-end items-end flex h-min justify-between relative w-full pt-0 pr-10 pb-0 pl-10 z-1 shrink-0"
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
                    <p className="font-medium text-left uppercase text-[rgb(26,26,26)] text-[14px] tracking-[-0.6px] leading-[16.8px] font-geist-mono">
                      {badge}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              aria-label="Hero Title"
              className="flex flex-col justify-center relative whitespace-pre-wrap w-full shrink-0"
            >
              <h2 className="font-medium text-[rgb(31,31,31)] text-[50px] tracking-[-0.6px] leading-[55px] font-inter-tight">
                {title}
              </h2>
            </div>
          </div>

          <div className="contents">
            <div className="relative will-change-transform">
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
          </div>
        </div>

        <div className="h-px relative w-full bg-[rgb(236,236,236)] shrink-0" />

        <div className="content-center items-center flex flex-col h-min justify-center relative w-full gap-10 shrink-0">
          {cases.map((item, index) => (
            <div key={item.id} className="contents">
              <div
                className="sticky w-full will-change-transform z-1"
                style={{ top: `${120 + index * 20}px` }}
              >
                <div
                  aria-label="desktop"
                  className="content-center items-center flex flex-col h-min justify-start relative w-full bg-white gap-10 p-5 rounded-[1.25rem] border border-[rgb(236,236,236)] shadow-sm"
                >
                  <div
                    aria-label="wrapper"
                    className="content-center items-center flex h-min justify-center relative w-full gap-[50px] pt-0 pr-5 pb-0 pl-5 shrink-0"
                  >
                    <div
                      aria-label="content"
                      className="content-start items-start self-stretch flex flex-col grow justify-between overflow-hidden relative w-px basis-0 py-3 shrink-0"
                    >
                      <div
                        aria-label="case study detail"
                        className="content-start items-start flex flex-col h-min justify-start relative w-full gap-8 shrink-0"
                      >
                        <div
                          aria-label="Hero Title"
                          className="flex flex-col justify-center relative w-full shrink-0"
                        >
                          <h4 className="font-medium text-[rgb(31,31,31)] text-[36px] tracking-[-0.6px] leading-[46.8px] font-inter-tight">
                            {item.title}
                          </h4>
                        </div>

                        <div className="h-px relative w-full bg-[rgb(236,236,236)] shrink-0" />

                        <div
                          aria-label="Process Stats"
                          className="content-start items-start flex h-min justify-start relative w-full gap-8 shrink-0"
                        >
                          {item.stats.map((stat, sIdx) => (
                            <React.Fragment key={sIdx}>
                              <div
                                aria-label="stat"
                                className="content-start items-start flex flex-col grow h-min justify-start relative w-px basis-0 gap-4 shrink-0"
                              >
                                <div className="content-center items-center flex h-min justify-start relative w-full gap-3 shrink-0">
                                  <div className="aspect-square relative w-8 bg-[rgb(26,26,26)] shrink-0 rounded-xs" />
                                  <div className="flex flex-col grow justify-center relative whitespace-pre-wrap shrink-0">
                                    <h5 className="font-medium text-[rgb(31,31,31)] text-[30px] tracking-[-0.6px] leading-[39px] font-inter-tight">
                                      {stat.value}
                                    </h5>
                                  </div>
                                </div>
                                <div className="flex flex-col justify-center relative w-full shrink-0">
                                  <p className="text-[rgb(118,118,118)] text-[16px] tracking-[-0.2px] leading-[19.2px] font-inter">
                                    {stat.description}
                                  </p>
                                </div>
                              </div>
                              {sIdx < item.stats.length - 1 && (
                                <div className="h-full relative w-px bg-[rgb(236,236,236)] shrink-0" />
                              )}
                            </React.Fragment>
                          ))}
                        </div>
                      </div>

                      <div
                        aria-label="testimonial wrapper"
                        className="content-start items-start flex flex-col h-min justify-start relative w-full gap-6 shrink-0 mt-6"
                      >
                        <div
                          aria-label="Quote Icon"
                          className="content-center items-center flex flex-col size-min justify-center relative gap-1 shrink-0"
                        >
                          <div className="relative w-[19px] h-[15px] shrink-0">
                            <img
                              src={quoteIcon}
                              alt="Quote"
                              className="block size-full"
                            />
                          </div>
                        </div>

                        <div className="flex flex-col justify-center relative w-full shrink-0">
                          <p className="font-medium text-left uppercase text-[rgb(118,118,118)] text-[14px] tracking-[-0.6px] leading-[16.8px] font-geist-mono">
                            {item.testimonial.quote}
                          </p>
                        </div>

                        <div
                          aria-label="author card"
                          className="content-center items-center flex h-min justify-start relative w-full gap-[14px] shrink-0"
                        >
                          <figure className="relative w-[51px] h-[51px] shrink-0 rounded-full overflow-hidden">
                            <img
                              alt={item.testimonial.author}
                              src={item.testimonial.avatar}
                              className="block size-full object-cover aspect-square rounded-full"
                            />
                          </figure>
                          <div className="content-start items-start flex flex-col grow h-min justify-start relative w-px basis-0 gap-[2px] shrink-0">
                            <p className="font-medium text-left uppercase text-[rgb(31,31,31)] text-[18px] tracking-[-0.6px] leading-[21.6px] font-geist-mono">
                              {item.testimonial.author}
                            </p>
                            <p className="text-[rgb(118,118,118)] text-[14px] tracking-[-0.2px] leading-[21px] font-inter">
                              {item.testimonial.role}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grow relative w-px h-[600px] basis-0 shrink-0">
                      <div
                        aria-label="image card"
                        className="content-center items-center flex flex-col size-full justify-center overflow-hidden relative shadow-[rgba(0,0,0,0.03)_0px_6px_12px_0px,_rgba(0,0,0,0.03)_0px_22px_22px_0px,_rgba(0,0,0,0.02)_0px_51px_30px_0px,_rgba(0,0,0,0)_0px_90px_36px_0px,_rgba(0,0,0,0)_0px_140px_39px_0px] gap-10 p-20 rounded-[1.25rem] border-2 border-[rgb(236,236,236)]"
                      >
                        <div className="absolute inset-0 rounded-[1.25rem]">
                          <img
                            src={item.cardImage}
                            alt={item.title}
                            className="block size-full object-cover overflow-clip aspect-auto rounded-[1.25rem]"
                          />
                        </div>

                        <figure
                          aria-label="brand logo"
                          className="overflow-clip relative w-full h-[150px] max-w-[250px] z-3 shrink-0"
                        >
                          <div className="absolute inset-0">
                            <img
                              src={item.brandLogo}
                              alt="Brand Logo"
                              className="block size-full object-contain aspect-auto"
                            />
                          </div>
                        </figure>

                        <div className="content-center items-center flex flex-col justify-center overflow-hidden absolute inset-0 gap-10 p-6 z-1 shrink-0 bg-gradient-to-b from-transparent via-black/20 to-black/80" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}