"use client";

import React, { useRef, useState } from "react";
import { siteData } from "@/data";

export default function Services() {
  const { badge, title, arrows, items } = siteData.services;
  const [hoveredCard, setHoveredCard] = useState<string | null>("financial");
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 450;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      aria-label="services"
      className="content-center items-center flex flex-col h-min justify-start overflow-clip relative w-full gap-0 pt-0 pr-10 pb-0 pl-10 shrink-0"
    >
      <div
        aria-label="container"
        className="content-center items-center flex flex-col h-min justify-start overflow-clip relative w-full gap-[60px] max-w-[1400px] pt-20 pr-10 pb-20 pl-10 shrink-0 after:border after:size-full after:pointer-events-none after:absolute after:inset-0 after:border-[rgb(236,236,236)] after:content-['']"
      >
        <div aria-label="title" className="content-end items-end flex h-min justify-between relative w-full shrink-0">
          <div aria-label="content" className="content-start items-start flex flex-col grow h-min justify-center relative w-px basis-0 gap-8 max-w-[650px] shrink-0">
            <div className="contents">
              <div className="relative will-change-transform">
                <div aria-label="Variant 1" className="content-center items-center flex size-min justify-start relative gap-[14px]">
                  <div aria-label="dot" className="aspect-square relative w-3 bg-[rgb(237,70,9)] shrink-0" />
                  <div aria-label="Description" className="flex flex-col justify-start relative whitespace-pre shrink-0">
                    <p className="font-medium text-left uppercase text-[rgb(26,26,26)] text-[14px] tracking-[-0.6px] leading-[16.8px] font-geist-mono">
                      {badge}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div aria-label="Hero Title" className="flex flex-col justify-center relative whitespace-pre-wrap w-full shrink-0">
              <h2 className="font-medium text-[rgb(31,31,31)] text-[50px] tracking-[-0.6px] leading-[55px] font-inter-tight">
                {title}
              </h2>
            </div>
          </div>

          <div className="items-center flex justify-end gap-[10px] shrink-0 pb-2 z-10">
            <button
              type="button"
              onClick={() => scroll("left")}
              aria-label="Previous"
              className="content-center items-center justify-center inline-flex overflow-hidden text-center w-[46px] h-[46px] rounded-full hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <img
                alt="Back Arrow"
                src={arrows.prevSrc}
                className="size-[46px]"
              />
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              aria-label="Next"
              className="content-center items-center justify-center inline-flex overflow-hidden text-center w-[46px] h-[46px] rounded-full hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <img
                alt="Next Arrow"
                src={arrows.nextSrc}
                className="size-[46px]"
              />
            </button>
          </div>
        </div>

        <div aria-label="divider" className="h-px relative w-full bg-[rgb(236,236,236)] shrink-0" />

        <div className="relative w-full overflow-hidden">
          <div
            ref={scrollContainerRef}
            className="flex items-center gap-[24px] overflow-x-auto scroll-smooth w-full py-2 select-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {items.map((item) => {
              const isHovered = hoveredCard === item.id;
              return (
                <div
                  key={item.id}
                  aria-label={item.title}
                  onMouseEnter={() => setHoveredCard(item.id)}
                  className={`group relative flex-none w-[calc((100%-48px)/3)] min-w-[390px] h-[500px] flex flex-col justify-end overflow-hidden p-10 rounded-[1.25rem] border border-[rgb(236,236,236)] transition-all duration-300 cursor-pointer ${
                    isHovered ? "bg-black text-white" : "bg-[rgb(248,248,248)] text-black"
                  }`}
                >
                  <div
                    className={`absolute inset-0 z-0 transition-opacity duration-500 ease-in-out pointer-events-none ${
                      isHovered ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="size-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/45" />
                  </div>

                  <div className="relative z-10 flex flex-col justify-start w-full gap-4 shrink-0 mb-8">
                    <h6
                      className={`font-medium text-[28px] tracking-[-0.6px] leading-[39.2px] font-inter-tight transition-colors duration-300 ${
                        isHovered ? "text-white" : "text-[rgb(31,31,31)]"
                      }`}
                    >
                      {item.title}
                    </h6>
                    <p
                      className={`text-[16px] tracking-[-0.2px] leading-[19.2px] font-inter transition-colors duration-300 ${
                        isHovered ? "text-white/80" : "text-[rgb(118,118,118)]"
                      }`}
                    >
                      {item.description}
                    </p>
                  </div>

                  <div className="relative z-10 flex flex-col justify-start w-full gap-3 shrink-0">
                    {item.stats.map((stat, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-start w-full gap-[14px] shrink-0"
                      >
                        <div className="aspect-square relative w-[18px] flex items-center justify-center shrink-0">
                          <svg
                            width="14"
                            height="11"
                            viewBox="0 0 14 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="stroke-[rgb(237,70,9)] stroke-2"
                          >
                            <path d="M1 5.5L4.5 9L12.5 1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                        <div className="flex flex-col grow justify-start relative whitespace-pre-wrap shrink-0">
                          <p
                            className={`font-medium text-left uppercase text-[14px] tracking-[-0.6px] leading-[16.8px] font-geist-mono transition-colors duration-300 ${
                              isHovered ? "text-white" : "text-[rgb(31,31,31)]"
                            }`}
                          >
                            {stat}
                          </p>
                        </div>
                      </div>
                    ))}
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