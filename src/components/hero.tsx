import React from "react";
import { siteData } from "@/data";

export default function Hero() {
  const {
    badge,
    titleLine1,
    titleLine2,
    description,
    primaryCta,
    secondaryCta,
    productShot,
  } = siteData.hero;

  return (
    <section aria-label="hero" className="flex flex-col items-center justify-start relative w-full px-4 md:px-10 shrink-0">
      <div
        aria-label="container"
        className="flex flex-col items-center justify-start relative w-full gap-10 md:gap-[60px] max-w-[1400px] pt-[120px] md:pt-[140px] px-4 md:px-10 pb-[50px] shrink-0 border-l border-r border-[rgb(236,236,236)]"
      >
        <div aria-label="content" className="flex flex-col lg:flex-row items-start lg:items-end justify-between w-full gap-8 shrink-0">
          <div aria-label="text wrapper" className="flex flex-col grow justify-start w-full lg:w-auto gap-6 shrink-0">
            <div aria-label="content top" className="flex items-center justify-start w-full max-w-[420px] gap-4 shrink-0">
              <div aria-label="team avatar wrapper" className="flex items-center justify-start relative gap-4 shrink-0">
                {badge.teamAvatars.map((avatar, idx) => (
                  <div key={idx} className="contents">
                    <div aria-label="avatar" className={avatar.className}>
                      <div className="absolute inset-0 rounded-full">
                        <img
                          src={avatar.src}
                          alt="Team avatar"
                          className="block size-full overflow-clip aspect-square rounded-full"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div aria-label="Description" className="flex flex-col grow justify-start">
                <p className="font-medium text-left uppercase text-[rgb(31,31,31)] text-[13px] md:text-[14px] tracking-[-0.6px] leading-[16.8px] font-geist-mono">
                  {badge.description}
                </p>
              </div>
            </div>

            <div aria-label="Hero Title" className="flex flex-col justify-center w-full max-w-[620px] shrink-0">
              <h1 className="font-medium text-[rgb(31,31,31)] text-[42px] sm:text-[56px] md:text-[70px] tracking-[-0.6px] leading-[1.05] font-inter-tight">
                {titleLine1.map((word, idx) => (
                  <React.Fragment key={idx}>
                    <span className="inline-block will-change-transform">{word}</span>
                    {idx < titleLine1.length - 1 && " "}
                  </React.Fragment>
                ))}
              </h1>
              <h1 className="font-medium mt-2 md:mt-4 text-[rgb(237,70,9)] text-[42px] sm:text-[56px] md:text-[70px] tracking-[-0.6px] leading-[1.05] font-inter-tight">
                {titleLine2.map((word, idx) => (
                  <React.Fragment key={idx}>
                    <span className="inline-block will-change-transform">{word}</span>
                    {idx < titleLine2.length - 1 && " "}
                  </React.Fragment>
                ))}
              </h1>
            </div>
          </div>

          <div aria-label="Hero Description Container" className="flex flex-col justify-start w-full lg:w-[45%] gap-6 shrink-0">
            <div aria-label="Description" className="flex flex-col justify-center w-full shrink-0">
              <p className="text-[rgb(118,118,118)] text-[16px] md:text-[18px] tracking-[-0.2px] leading-[25.2px] font-inter">
                {description}
              </p>
            </div>

            <div aria-label="cta wrapper" className="flex flex-wrap items-center justify-start gap-4 shrink-0">
              <a
                href={primaryCta.href}
                aria-label="primary"
                className="flex items-center justify-center bg-[rgb(237,70,9)] hover:bg-[rgb(220,60,0)] text-white gap-2 py-[13px] px-[18px] rounded-full transition-colors cursor-pointer"
              >
                <span className="font-medium text-left uppercase text-white tracking-[-0.6px] leading-[14.4px] font-geist-mono text-sm">
                  {primaryCta.label}
                </span>
                <span className="text-white text-sm">→</span>
              </a>

              <a
                href={secondaryCta.href}
                aria-label="secondary"
                className="flex items-center justify-center bg-[rgb(26,26,26)] hover:bg-black text-white gap-2 py-[13px] px-[18px] rounded-full transition-colors cursor-pointer"
              >
                <span className="font-medium text-left uppercase text-white tracking-[-0.6px] leading-[14.4px] font-geist-mono text-sm">
                  {secondaryCta.label}
                </span>
              </a>
            </div>
          </div>
        </div>

        <figure aria-label="product shot wrapper" className="relative flex flex-col items-center justify-center w-full py-6 px-3 sm:py-10 sm:px-8 lg:py-14 lg:px-16 rounded-[1.25rem] overflow-hidden">
          <div className="absolute inset-0 rounded-[1.25rem]">
            <img
              src={productShot.background}
              alt="Background"
              className="block size-full object-cover rounded-[1.25rem]"
            />
          </div>
          <div aria-label="product shot" className="relative w-full max-w-[1100px] shrink-0 rounded-[0.875rem] overflow-hidden shadow-2xl bg-white border border-black/5">
            <img
              alt={productShot.alt}
              src={productShot.dashboard}
              className="block w-full h-auto object-contain rounded-[0.875rem]"
            />
          </div>
        </figure>
      </div>
    </section>
  );
}