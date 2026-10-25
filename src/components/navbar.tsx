import React from "react";
import { siteData } from "@/data";

export default function Navbar() {
  const { logo, navLinks, cta } = siteData.navbar;

  return (
    <div className="fixed left-0 top-0 right-0 z-5 shrink-0 -order-1000">
      <div className="contents">
        <nav
          aria-label="Desktop"
          className="content-center items-center flex flex-col h-min justify-center overflow-clip relative w-full bg-white gap-[10px] pt-0 pr-10 pb-0 pl-10 after:border-b after:size-full after:pointer-events-none after:absolute after:left-0 after:top-0 after:border-white/0 after:content-['']"
        >
          <div
            aria-label="Container"
            className="content-center items-center flex h-min justify-between overflow-clip relative w-full max-w-[1400px] pt-3 pr-10 pb-3 pl-10 shrink-0 after:border-b after:border-l after:border-r after:size-full after:pointer-events-none after:absolute after:left-0 after:top-0 after:border-[rgb(236,236,236)] after:content-['']"
          >
            <div
              aria-label="Logo + hamburger"
              className="content-center items-center flex size-min justify-start overflow-clip relative gap-[24px] shrink-0"
            >
              <div className="relative w-[120px] shrink-0">
                <a
                  href={logo.url}
                  aria-label="full - dark"
                  className="block overflow-clip relative w-full h-9 text-[rgb(0,0,238)]"
                >
                  <div className="absolute inset-0">
                    <img
                      src={logo.imgSrc}
                      alt={logo.alt}
                      className="block size-full object-contain overflow-clip aspect-auto"
                    />
                  </div>
                </a>
              </div>
            </div>

            <div
              aria-label="Link group"
              className="content-center items-center flex size-min justify-start overflow-clip relative gap-[24px] shrink-0"
            >
              {navLinks.map((link) => (
                <div key={link.label} className="relative shrink-0">
                  <a
                    href={link.href}
                    aria-label="Desktop"
                    className="content-start items-start flex flex-col justify-start overflow-hidden relative w-min h-[18px] text-[rgb(0,0,238)] gap-0"
                  >
                    <div aria-label="Default" className="flex flex-col justify-center relative whitespace-pre shrink-0">
                      <p className="font-medium text-left uppercase text-black text-[14px] tracking-[-0.6px] leading-[16.8px] font-geist-mono">
                        {link.label}
                      </p>
                    </div>
                    <div aria-label="Hover" className="flex flex-col justify-center relative whitespace-pre z-1 shrink-0">
                      <p className="font-medium text-left uppercase text-black text-[14px] tracking-[-0.6px] leading-[16.8px] font-geist-mono">
                        {link.label}
                      </p>
                    </div>
                  </a>
                </div>
              ))}
            </div>

            <div aria-label="CTA" className="relative shrink-0">
              <a
                href={cta.href}
                aria-label="alternative"
                className="content-center items-center flex size-min justify-center relative bg-white text-[rgb(0,0,238)] gap-[8px] pt-[10px] pr-[18px] pb-[10px] pl-[18px] rounded-[6.25rem] after:border after:size-full after:pointer-events-none after:absolute after:left-0 after:top-0 after:border-[rgb(236,236,236)] after:content-[''] after:rounded-[6.25rem]"
              >
                <div aria-label="Button Text" className="flex flex-col justify-start relative whitespace-pre shrink-0">
                  <p className="font-medium text-left uppercase text-[rgb(26,26,26)] tracking-[-0.6px] leading-[14.4px] font-geist-mono">
                    {cta.label}
                  </p>
                </div>
                <div
                  aria-label="icon wrapper"
                  className="content-center items-center flex h-min justify-end overflow-clip relative w-[18px] gap-[5px] shrink-0"
                >
                  <div aria-label="default icon" className="aspect-square relative w-[18px] bg-white shrink-0" />
                  <div aria-label="hover icon" className="aspect-square relative w-[18px] bg-[rgb(26,26,26)] shrink-0" />
                </div>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}