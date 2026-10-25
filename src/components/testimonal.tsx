"use client";

import React, { useRef } from "react";
import { siteData } from "@/data";

export default function Testimonial() {
  const { badge, title, quoteIcon, arrows, reviews } = siteData.testimonials;
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
      aria-label="testimonial"
      className="content-center items-center flex flex-col h-min justify-start relative w-full bg-white gap-10 pt-0 pr-10 pb-0 pl-10 shrink-0"
    >
      <div
        aria-label="container"
        className="content-center items-center flex flex-col h-min justify-start overflow-clip relative w-full gap-[60px] max-w-[1400px] pt-[100px] pr-0 pb-[100px] pl-0 shrink-0 after:border-l after:border-r after:size-full after:pointer-events-none after:absolute after:inset-0 after:border-[rgb(236,236,236)] after:content-['']"
      >
        <div
          aria-label="top section"
          className="content-end items-end flex h-min justify-between relative w-full pt-0 pr-10 pb-0 pl-10 shrink-0"
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
              className="flex flex-col justify-center relative w-full shrink-0"
            >
              <h2 className="font-medium text-[rgb(31,31,31)] text-[50px] tracking-[-0.6px] leading-[55px] font-inter-tight">
                {title}
              </h2>
            </div>
          </div>

          <div className="items-center flex justify-end gap-2 shrink-0 pb-2 z-10">
            <button
              type="button"
              onClick={() => scroll("left")}
              aria-label="Previous"
              className="content-center items-center justify-center inline-flex overflow-hidden text-center w-[46px] h-[46px] bg-[rgb(26,26,26)] rounded-3xl hover:opacity-90 active:scale-95 transition-all cursor-pointer"
            >
              <img
                alt="Back Arrow"
                src={arrows.prevSrc}
                className="w-[46px] h-[46px] aspect-square"
              />
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              aria-label="Next"
              className="content-center items-center justify-center inline-flex overflow-hidden text-center w-[46px] h-[46px] bg-[rgb(26,26,26)] rounded-3xl hover:opacity-90 active:scale-95 transition-all cursor-pointer"
            >
              <img
                alt="Next Arrow"
                src={arrows.nextSrc}
                className="w-[46px] h-[46px] aspect-square"
              />
            </button>
          </div>
        </div>

        <div className="h-px relative w-full bg-[rgb(236,236,236)] shrink-0" />

        <div className="relative w-full overflow-hidden px-10">
          <div
            ref={scrollContainerRef}
            className="flex items-center gap-5 overflow-x-auto scroll-smooth w-full py-2 select-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {reviews.map((review) => (
              <div
                key={review.id}
                className="content-start items-start flex flex-col justify-between overflow-clip relative bg-[rgb(248,248,248)] w-[480px] min-w-[380px] h-[360px] p-8 rounded-[1.25rem] border border-[rgb(236,236,236)] shrink-0"
              >
                <div
                  aria-label="Quote Icon"
                  className="content-center items-center flex flex-col size-min justify-center relative gap-3 shrink-0"
                >
                  <div className="relative w-10 aspect-[1.2439/1] shrink-0">
                    <img
                      src={quoteIcon}
                      alt="Quote Icon"
                      className="block size-full"
                    />
                  </div>
                </div>

                <div
                  aria-label="Testimonial Content"
                  className="content-start items-start flex flex-col h-min justify-start relative w-full gap-8 shrink-0"
                >
                  <div className="flex flex-col justify-center relative whitespace-pre-wrap w-full shrink-0">
                    <p className="text-[rgb(31,31,31)] text-[20px] tracking-[-0.4px] leading-[28px] font-inter">
                      {review.quote}
                    </p>
                  </div>

                  <div
                    aria-label="author"
                    className="content-center items-center flex h-min justify-start relative w-full gap-[14px] shrink-0"
                  >
                    <figure className="relative w-[51px] h-[51px] shrink-0 rounded-full overflow-hidden">
                      <img
                        alt={review.author}
                        src={review.avatar}
                        className="block size-full object-contain aspect-square rounded-full"
                      />
                    </figure>
                    <div className="content-start items-start flex flex-col grow h-min justify-start relative w-px basis-0 gap-[2px] shrink-0">
                      <p className="text-[rgb(31,31,31)] text-[20px] tracking-[-0.4px] leading-[28px] font-inter font-medium">
                        {review.author}
                      </p>
                      <p className="text-[rgb(118,118,118)] text-[16px] tracking-[-0.2px] leading-[19.2px] font-inter">
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