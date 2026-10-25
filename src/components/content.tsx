import React from "react";
import { siteData } from "@/data";

export default function Content() {
  const { content } = siteData;

  return (
    <section
      aria-label="testimonial (single)"
      className="relative flex flex-col items-center justify-center w-full h-[720px] max-w-[1400px] px-10 py-[100px] gap-10 overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src={content.bgImage}
          alt="Atmospheric landscape background"
          loading="lazy"
          className="block w-full h-full object-cover"
        />
      </div>

      <div
        aria-label="container"
        className="relative z-1 flex flex-col items-center justify-center w-full max-w-[770px] p-10 rounded-lg gap-8 backdrop-blur-[7.5px] border border-[rgb(51,51,51)]"
      >
        <div aria-label="Quote Icon" className="flex items-center justify-center">
          <div aria-label="“" className="w-[51px] h-[41px]">
            <img
              src={content.quoteIcon}
              alt="Quote mark"
              className="block w-full h-full"
            />
          </div>
        </div>

        <div aria-label="Hero Title" className="w-full text-center">
          <h4 className="font-medium text-center text-white text-[36px] tracking-[-0.6px] leading-[46.8px] font-inter-tight">
            {content.quote}
          </h4>
        </div>

        <div
          aria-label="author card"
          className="flex items-center justify-center gap-[14px] max-w-[300px]"
        >
          <div
            aria-label="avatar"
            className="w-[55px] h-[55px] shrink-0 rounded-full overflow-hidden"
          >
            <img
              src={content.avatar}
              alt={content.author}
              loading="lazy"
              className="block w-full h-full object-cover rounded-full"
            />
          </div>

          <div aria-label="author" className="flex flex-col text-left gap-1">
            <p className="text-white text-[20px] tracking-[-0.4px] leading-7 font-inter font-normal">
              {content.author}
            </p>
            <p className="text-[rgb(209,209,209)] text-[16px] tracking-[-0.2px] leading-[19.2px] font-inter font-normal">
              {content.role}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}