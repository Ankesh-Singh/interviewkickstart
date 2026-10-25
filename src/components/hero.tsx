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
    <section aria-label="hero" className="content-center items-center flex flex-col h-min justify-start overflow-clip relative w-full gap-0 pt-0 pr-10 pb-0 pl-10 shrink-0">
      <div
        aria-label="container"
        className="content-center items-center flex flex-col h-min justify-start overflow-clip relative w-full gap-[60px] max-w-[1400px] pt-[140px] pr-10 pb-[50px] pl-10 shrink-0 after:border-l after:border-r after:size-full after:pointer-events-none after:absolute after:left-0 after:top-0 after:border-[rgb(236,236,236)] after:content-['']"
      >
        <div aria-label="content" className="content-end items-end flex h-min justify-between relative w-full shrink-0">
          <div aria-label="text wrapper" className="content-start items-start flex flex-col grow h-min justify-start relative w-px basis-0 gap-6 shrink-0">
            <div aria-label="content top" className="content-center items-center flex h-min justify-start relative w-[350px] gap-4 max-w-[350px] shrink-0">
              <div aria-label="team avatar wrapper" className="content-center items-center flex size-min justify-start relative will-change-transform gap-4 shrink-0">
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
              <div aria-label="Description" className="flex flex-col grow justify-start relative whitespace-pre-wrap w-px will-change-transform basis-0 shrink-0">
                <p className="font-medium text-left uppercase text-[rgb(31,31,31)] text-[14px] tracking-[-0.6px] leading-[16.8px] font-geist-mono">
                  {badge.description}
                </p>
              </div>
            </div>

            <div aria-label="Hero Title" className="flex flex-col justify-center relative whitespace-pre-wrap w-[572px] shrink-0">
              <h1 className="font-medium text-[rgb(31,31,31)] text-[70px] tracking-[-0.6px] leading-[63px] font-inter-tight">
                {titleLine1.map((word, idx) => (
                  <React.Fragment key={idx}>
                    <span className="inline-block will-change-transform">{word}</span>
                    {idx < titleLine1.length - 1 && " "}
                  </React.Fragment>
                ))}
              </h1>
              <h1 className="font-medium mt-4 text-[rgb(237,70,9)] text-[70px] tracking-[-0.6px] leading-[63px] font-inter-tight">
                {titleLine2.map((word, idx) => (
                  <React.Fragment key={idx}>
                    <span className="inline-block will-change-transform">{word}</span>
                    {idx < titleLine2.length - 1 && " "}
                  </React.Fragment>
                ))}
              </h1>
            </div>
          </div>

          <div aria-label="Hero Description Container" className="content-start items-start flex flex-col h-min justify-start relative w-[45%] gap-6 shrink-0">
            <div aria-label="Description" className="flex flex-col justify-center relative w-full will-change-transform shrink-0">
              <p className="text-[rgb(118,118,118)] text-[18px] tracking-[-0.2px] leading-[25.2px] font-inter">
                {description}
              </p>
            </div>

            <div aria-label="cta wrapper" className="content-center items-center flex size-min justify-start relative gap-4 shrink-0">
              <div className="contents">
                <div className="relative will-change-transform">
                  <a
                    href={primaryCta.href}
                    aria-label="primary"
                    className="content-center items-center flex size-min justify-center relative bg-[rgb(237,70,9)] text-[rgb(0,0,238)] gap-2 pt-[13px] pr-[18px] pb-[13px] pl-[18px] rounded-[6.25rem]"
                  >
                    <div aria-label="Button Text" className="flex flex-col justify-start relative whitespace-pre shrink-0">
                      <p className="font-medium text-left uppercase text-white tracking-[-0.6px] leading-[14.4px] font-geist-mono">
                        {primaryCta.label}
                      </p>
                    </div>
                    <div aria-label="icon wrapper" className="content-center items-center flex h-min justify-end overflow-clip relative w-[18px] gap-[5px] shrink-0">
                      <div aria-label="default icon" className="aspect-square relative w-[18px] bg-white shrink-0" />
                      <div aria-label="hover icon" className="aspect-square relative w-[18px] bg-white shrink-0" />
                    </div>
                  </a>
                </div>
              </div>

              <div className="contents">
                <div className="self-stretch relative will-change-transform">
                  <a
                    href={secondaryCta.href}
                    aria-label="secondary"
                    className="content-center items-center flex h-full justify-center relative w-min bg-[rgb(26,26,26)] text-[rgb(0,0,238)] gap-2 pt-[13px] pr-[18px] pb-[13px] pl-[18px] rounded-[6.25rem]"
                  >
                    <div aria-label="Button Text" className="flex flex-col justify-start relative whitespace-pre shrink-0">
                      <p className="font-medium text-left uppercase text-white tracking-[-0.6px] leading-[14.4px] font-geist-mono">
                        {secondaryCta.label}
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="contents">
          <figure aria-label="product shot wrapper" className="content-center items-center flex flex-col h-min justify-center overflow-hidden relative w-full will-change-transform gap-0 pt-20 pr-[150px] pb-20 pl-[150px] rounded-[1.25rem]">
            <div className="absolute inset-0 rounded-[1.25rem]">
              <img
                src={productShot.background}
                alt="Background"
                className="block size-full object-cover overflow-clip aspect-auto rounded-[1.25rem]"
              />
            </div>
            <div aria-label="product shot" className="content-start items-start flex flex-col justify-start overflow-hidden relative w-full aspect-[1.49841/1] gap-0 shrink-0 rounded-[0.875rem]">
              <div className="absolute inset-0 rounded-[0.875rem]">
                <img
                  alt={productShot.alt}
                  src={productShot.dashboard}
                  className="block size-full object-cover overflow-clip aspect-auto rounded-[0.875rem]"
                />
              </div>
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}