import React from "react";
import { siteData } from "@/data";

function LogoBadge({ alt, src }: { alt: string; src: string }) {
  return (
    <div className="relative shrink-0 opacity-70">
      <figure aria-label="Variant 1" className="relative w-[100px] h-7 gap-6 opacity-50">
        <div className="absolute inset-0">
          <img
            alt={alt}
            src={src}
            className="block size-full object-contain overflow-clip aspect-auto"
          />
        </div>
      </figure>
    </div>
  );
}

export default function Maq() {
  const { badge, firstRowLogos, secondRowLogos } = siteData.maq;

  return (
    <section aria-label="client logo" className="content-center items-center flex flex-col h-min justify-start overflow-clip relative w-full gap-0 px-4 md:px-10 shrink-0">
      <div
        aria-label="container"
        className="content-center items-center flex flex-col h-min justify-start overflow-clip relative w-full gap-8 md:gap-[60px] max-w-[1400px] py-12 md:py-20 px-4 md:px-10 shrink-0 border border-[rgb(236,236,236)]"
      >
        <div aria-label="content" className="content-center items-center flex flex-col h-min justify-start relative w-full gap-[60px] shrink-0">
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

          <div aria-label="client logo (desktop)" className="content-center items-center flex flex-col h-min justify-center overflow-clip relative w-full gap-[50px] shrink-0">
            <div className="content-center items-center flex flex-wrap h-min justify-around overflow-clip relative w-full will-change-transform max-w-[1000px] shrink-0">
              {firstRowLogos.map((logo, idx) => (
                <LogoBadge key={idx} {...logo} />
              ))}
            </div>

            <div className="content-center items-center flex flex-wrap h-min justify-center overflow-clip relative w-full will-change-transform gap-x-[50px] gap-y-0 max-w-[850px] shrink-0">
              {secondRowLogos.map((logo, idx) => (
                <LogoBadge key={idx} {...logo} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}