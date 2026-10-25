"use client";

import React, { useEffect, useRef, useState } from "react";
import { siteData } from "@/data";

export default function Content() {
  const { content } = siteData;
  const sectionRef = useRef<HTMLElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
        }
      },
      {
        threshold: 0.25,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const words = content.quote.split(" ");

  return (
    <section
      ref={sectionRef}
      aria-label="testimonial (single)"
      className="relative flex flex-col items-center justify-center w-full min-h-[550px] md:h-[720px] max-w-[1400px] px-4 md:px-10 py-16 md:py-[100px] gap-8 md:gap-10 overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src={content.bgImage}
          alt="Interview Kickstart testimonial backdrop"
          loading="lazy"
          className="block w-full h-full object-cover"
        />
      </div>

      <div
        aria-label="container"
        className="relative z-1 flex flex-col items-center justify-center w-full max-w-[770px] p-6 sm:p-10 rounded-lg gap-6 sm:gap-8 backdrop-blur-[7.5px] border border-[rgb(51,51,51)] bg-black/40"
      >
        <div aria-label="Quote Icon" className="flex items-center justify-center">
          <div aria-label="“" className="w-[40px] sm:w-[51px] h-[32px] sm:h-[41px]">
            <img
              src={content.quoteIcon}
              alt="Quote mark"
              className="block w-full h-full"
            />
          </div>
        </div>

        <div aria-label="Hero Title" className="w-full text-center">
          <h4 className="font-medium text-center text-white text-[22px] sm:text-[28px] md:text-[34px] tracking-[-0.6px] leading-snug sm:leading-[46.8px] font-inter-tight flex flex-wrap justify-center gap-x-2 gap-y-1">
            {words.map((word, idx) => (
              <span
                key={idx}
                className={`inline-block transition-all duration-500 ease-out ${
                  revealed
                    ? "opacity-100 translate-y-0 blur-none"
                    : "opacity-0 translate-y-3 blur-xs"
                }`}
                style={{
                  transitionDelay: `${revealed ? 60 + idx * 35 : 0}ms`,
                }}
              >
                {word}
              </span>
            ))}
          </h4>
        </div>

        <div
          aria-label="author card"
          className={`flex items-center justify-center gap-[14px] max-w-[320px] transition-all duration-700 ease-out delay-500 ${
            revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div
            aria-label="avatar"
            className="w-[50px] sm:w-[55px] h-[50px] sm:h-[55px] shrink-0 rounded-full overflow-hidden"
          >
            <img
              src={content.avatar}
              alt={content.author}
              loading="lazy"
              className="block w-full h-full object-cover rounded-full"
            />
          </div>

          <div aria-label="author" className="flex flex-col text-left gap-1">
            <p className="text-white text-[17px] sm:text-[20px] tracking-[-0.4px] leading-tight font-inter font-normal">
              {content.author}
            </p>
            <p className="text-[rgb(209,209,209)] text-[14px] sm:text-[16px] tracking-[-0.2px] leading-tight font-inter font-normal">
              {content.role}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}