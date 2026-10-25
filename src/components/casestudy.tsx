import React from "react";
import { siteData } from "@/data";

export default function CaseStudy() {
  const { badge, title, cta, quoteIcon, cases } = siteData.caseStudy;

  return (
    <section
      aria-label="case study"
      id="reviews"
      className="flex flex-col items-center justify-start relative w-full bg-white gap-10 px-4 md:px-10 z-1 shrink-0"
    >
      <div
        aria-label="container"
        className="flex flex-col items-start justify-center relative w-full gap-8 md:gap-[60px] max-w-[1400px] py-12 md:py-[100px] z-1 shrink-0 border-l border-r border-[rgb(236,236,236)]"
      >
        <div
          aria-label="top section"
          className="flex flex-col md:flex-row items-start md:items-end justify-between relative w-full px-4 md:px-10 gap-6 z-1 shrink-0"
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

          <div>
            <a
              href={cta.href}
              aria-label="primary"
              className="inline-flex items-center gap-2 bg-[rgb(237,70,9)] hover:bg-[rgb(220,60,0)] text-white text-sm font-mono uppercase tracking-[-0.6px] py-[13px] px-[18px] rounded-full transition-colors cursor-pointer"
            >
              <span>{cta.label}</span>
              <span>→</span>
            </a>
          </div>
        </div>

        <div className="h-px w-full bg-[rgb(236,236,236)] shrink-0" />

        <div className="flex flex-col items-center justify-center relative w-full gap-8 md:gap-12 px-2 sm:px-4 shrink-0 pb-12">
          {cases.map((item, index) => (
            <div
              key={item.id}
              className="w-full sticky will-change-transform"
              style={{
                top: `${90 + index * 24}px`,
                zIndex: index + 1,
              }}
            >
              <div
                aria-label="card"
                className="flex flex-col items-center justify-start relative w-full bg-white gap-6 md:gap-10 p-5 md:p-8 rounded-[1.25rem] border border-[rgb(236,236,236)] shadow-lg"
              >
                <div
                  aria-label="wrapper"
                  className="flex flex-col lg:flex-row items-stretch justify-center relative w-full gap-8 lg:gap-[50px] shrink-0"
                >
                  <div
                    aria-label="content"
                    className="flex flex-col justify-between w-full lg:w-1/2 py-2 gap-6"
                  >
                    <div className="flex flex-col gap-6">
                      <h4 className="font-inter-tight font-medium text-[rgb(31,31,31)] text-[24px] sm:text-[30px] md:text-[36px] tracking-[-0.6px] leading-tight">
                        {item.title}
                      </h4>

                      <div className="h-px w-full bg-[rgb(236,236,236)]" />

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                        {item.stats.map((stat, sIdx) => (
                          <div key={sIdx} className="flex flex-col gap-2">
                            <h5 className="font-inter-tight font-medium text-[rgb(31,31,31)] text-[26px] md:text-[30px] tracking-[-0.6px] leading-tight">
                              {stat.value}
                            </h5>
                            <p className="font-inter text-[rgb(118,118,118)] text-[14px] md:text-[16px] tracking-[-0.2px] leading-snug">
                              {stat.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col gap-4 mt-4 pt-4 border-t border-[rgb(236,236,236)]">
                      <div className="w-[19px] h-[15px] shrink-0">
                        <img src={quoteIcon} alt="Quote" className="block w-full h-full" />
                      </div>

                      <p className="font-geist-mono font-medium uppercase text-[rgb(118,118,118)] text-[13px] md:text-[14px] tracking-[-0.6px] leading-relaxed">
                        {item.testimonial.quote}
                      </p>

                      <div className="flex items-center gap-[14px] mt-2">
                        <div className="w-[48px] h-[48px] shrink-0 rounded-full overflow-hidden">
                          <img
                            alt={item.testimonial.author}
                            src={item.testimonial.avatar}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex flex-col">
                          <p className="font-geist-mono font-medium uppercase text-[rgb(31,31,31)] text-[16px] tracking-[-0.6px]">
                            {item.testimonial.author}
                          </p>
                          <p className="font-inter text-[rgb(118,118,118)] text-[13px] tracking-[-0.2px]">
                            {item.testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card Visual */}
                  <div className="relative w-full lg:w-1/2 min-h-[300px] sm:min-h-[400px] lg:min-h-[500px] rounded-[1.25rem] overflow-hidden border-2 border-[rgb(236,236,236)] flex items-center justify-center bg-neutral-100">
                    <img
                      src={item.cardImage}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
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