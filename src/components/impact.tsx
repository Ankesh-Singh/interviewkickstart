import React from "react";
import { siteData } from "@/data";

export default function Impact() {
  const { impact } = siteData;

  return (
    <section
      aria-label="impact"
      className="flex flex-col items-center justify-start relative w-full bg-white px-10 shrink-0"
    >
      <div
        aria-label="container"
        className="relative flex flex-col items-center justify-start w-full max-w-[1400px] py-[100px] gap-[60px] border-l border-r border-[rgb(236,236,236)]"
      >
        <div
          aria-label="top section"
          className="flex flex-col md:flex-row items-start md:items-end justify-between w-full px-10 gap-8"
        >
          <div
            aria-label="content"
            className="flex flex-col grow justify-center w-full md:w-auto max-w-[650px] gap-8"
          >
            <div aria-label="Variant 1" className="flex items-center justify-start gap-[14px]">
              <div aria-label="dot" className="w-3 h-3 bg-[rgb(237,70,9)] shrink-0" />
              <p className="font-mono font-medium text-left uppercase text-[rgb(26,26,26)] text-[14px] tracking-[-0.6px] leading-[16.8px]">
                {impact.badge}
              </p>
            </div>

            <div aria-label="Hero Title" className="w-full">
              <h2 className="font-inter-tight font-medium text-[rgb(31,31,31)] text-[50px] tracking-[-0.6px] leading-[55px]">
                {impact.title}
              </h2>
            </div>
          </div>

          <div
            aria-label="Description"
            className="flex flex-col grow justify-center w-full md:w-auto max-w-[500px]"
          >
            <p className="font-inter text-[rgb(118,118,118)] text-[18px] tracking-[-0.2px] leading-[25.2px]">
              {impact.description}
            </p>
          </div>
        </div>

        <div
          aria-label="divider"
          className="h-px w-full bg-[rgb(236,236,236)]"
        />

        <div
          aria-label="Impact Stats"
          className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full px-10 justify-items-center"
        >
          {impact.stats.map((stat) => (
            <div
              key={stat.id}
              className="flex flex-col items-center justify-start w-full max-w-[340px] gap-5"
            >
              <div
                aria-label="Impact Stat"
                className="flex items-center justify-center w-[200px] h-[200px] rounded-full border border-[rgb(236,236,236)] shrink-0"
              >
                <span className="font-inter-tight font-medium whitespace-nowrap text-[rgb(26,26,26)] text-[42px] tracking-[-0.6px] leading-[50.4px]">
                  {stat.value}
                </span>
              </div>
              <div aria-label="Description" className="w-[90%] text-center">
                <p className="font-inter text-[rgb(118,118,118)] text-[16px] tracking-[-0.2px] leading-[19.2px]">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}