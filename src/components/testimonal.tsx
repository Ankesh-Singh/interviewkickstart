"use client";

import React, { useRef } from "react";
import { siteData } from "@/data";

export default function Testimonial() {
  const { badge, title, quoteIcon, arrows, reviews } = siteData.testimonials;
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 380;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      aria-label="testimonial"
      className="flex flex-col items-center justify-start relative w-full bg-white gap-10 px-4 md:px-10 shrink-0"
    >
      <div
        aria-label="container"
        className="flex flex-col items-center justify-start relative w-full gap-8 md:gap-[60px] max-w-[1400px] py-12 md:py-[100px] shrink-0 border-l border-r border-[rgb(236,236,236)]"
      >
        <div
          aria-label="top section"
          className="flex flex-col md:flex-row items-start md:items-end justify-between relative w-full px-4 md:px-10 gap-6 shrink-0"
        >
          <div
            aria-label="content"
            className="flex flex-col grow justify-center w-full md:w-auto gap-6 md:gap-8 max-w-[650px] shrink-0"
          >
            <div aria-label="Variant 1" className="flex items-center justify-start gap-[14px]">
              <div className="w-3 h-3 bg-[rgb(237,70,9)] shrink-0" />
              <p className="font-mono font-medium text-left uppercase text-[rgb(26,26,26)] text-[14px] tracking-[-0.6px] leading-[16.8px]">
                {badge}
              </p>
            </div>

            <div aria-label="Hero Title" className="w-full">
              <h2 className="font-inter-tight font-medium text-[rgb(31,31,31)] text-[32px] sm:text-[40px] md:text-[50px] tracking-[-0.6px] leading-[1.1]">
                {title}
              </h2>
            </div>
          </div>

          <div className="items-center flex justify-end gap-2 shrink-0 pb-2 z-10">
            <button
              type="button"
              onClick={() => scroll("left")}
              aria-label="Previous"
              className="flex items-center justify-center w-[46px] h-[46px] bg-[rgb(26,26,26)] rounded-full hover:opacity-90 active:scale-95 transition-all cursor-pointer"
            >
              <img
                alt="Back Arrow"
                src={arrows.prevSrc}
                className="w-[46px] h-[46px]"
              />
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              aria-label="Next"
              className="flex items-center justify-center w-[46px] h-[46px] bg-[rgb(26,26,26)] rounded-full hover:opacity-90 active:scale-95 transition-all cursor-pointer"
            >
              <img
                alt="Next Arrow"
                src={arrows.nextSrc}
                className="w-[46px] h-[46px]"
              />
            </button>
          </div>
        </div>

        <div className="h-px w-full bg-[rgb(236,236,236)] shrink-0" />

        <div className="relative w-full overflow-hidden px-4 md:px-10">
          <div
            ref={scrollContainerRef}
            className="flex items-center gap-5 overflow-x-auto scroll-smooth w-full py-2 select-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {reviews.map((review) => (
              <div
                key={review.id}
                className="flex flex-col justify-between bg-[rgb(248,248,248)] w-[320px] sm:w-[420px] md:w-[480px] h-[340px] sm:h-[360px] p-6 sm:p-8 rounded-[1.25rem] border border-[rgb(236,236,236)] shrink-0"
              >
                <div aria-label="Quote Icon" className="w-10 shrink-0">
                  <img
                    src={quoteIcon}
                    alt="Quote Icon"
                    className="block w-full h-auto"
                  />
                </div>

                <div className="flex flex-col justify-start w-full gap-6 shrink-0">
                  <p className="text-[rgb(31,31,31)] text-[16px] sm:text-[19px] md:text-[20px] tracking-[-0.4px] leading-relaxed font-inter">
                    {review.quote}
                  </p>

                  <div className="flex items-center gap-[14px] shrink-0">
                    <div className="w-[48px] h-[48px] shrink-0 rounded-full overflow-hidden">
                      <img
                        alt={review.author}
                        src={review.avatar}
                        className="block w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col text-left">
                      <p className="text-[rgb(31,31,31)] text-[16px] sm:text-[18px] tracking-[-0.4px] font-inter font-medium leading-tight">
                        {review.author}
                      </p>
                      <p className="text-[rgb(118,118,118)] text-[13px] sm:text-[14px] tracking-[-0.2px] font-inter leading-tight mt-1">
                        {review.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}