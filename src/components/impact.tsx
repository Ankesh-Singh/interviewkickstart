"use client";

import React, { useEffect, useRef, useState } from "react";
import { siteData } from "@/data";

interface CounterStatProps {
  prefix?: string;
  target: number;
  suffix?: string;
  duration?: number;
  isVisible: boolean;
}

function AnimatedCounter({
  prefix = "",
  target,
  suffix = "",
  duration = 900,
  isVisible,
}: CounterStatProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTimestamp: number | null = null;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Ease-out cubic for an energetic snappy acceleration into the final number
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * target));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    const rafId = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(rafId);
  }, [isVisible, target, duration]);

  return (
    <span className="font-inter-tight font-medium whitespace-nowrap text-[rgb(26,26,26)] text-[34px] sm:text-[42px] tracking-[-0.6px] leading-tight">
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

export default function Impact() {
  const { impact } = siteData;
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const parseStat = (val: string) => {
    if (val === "27K+") return { prefix: "", target: 27, suffix: "K+" };
    if (val === "$113M+") return { prefix: "$", target: 113, suffix: "M+" };
    if (val === "700+") return { prefix: "", target: 700, suffix: "+" };
    return { prefix: "", target: parseInt(val.replace(/\D/g, ""), 10) || 0, suffix: "" };
  };

  return (
    <section
      ref={sectionRef}
      aria-label="impact"
      id="outcomes"
      className="flex flex-col items-center justify-start relative w-full bg-white px-4 md:px-10 shrink-0"
    >
      <div
        aria-label="container"
        className="relative flex flex-col items-center justify-start w-full max-w-[1400px] py-12 md:py-[100px] gap-8 md:gap-[60px] border-l border-r border-[rgb(236,236,236)]"
      >
        <div
          aria-label="top section"
          className="flex flex-col md:flex-row items-start md:items-end justify-between w-full px-4 md:px-10 gap-6 md:gap-8"
        >
          <div
            aria-label="content"
            className="flex flex-col grow justify-center w-full md:w-auto max-w-[650px] gap-6 md:gap-8"
          >
            <div aria-label="Variant 1" className="flex items-center justify-start gap-[14px]">
              <div className="w-3 h-3 bg-[rgb(237,70,9)] shrink-0" />
              <p className="font-mono font-medium text-left uppercase text-[rgb(26,26,26)] text-[14px] tracking-[-0.6px] leading-[16.8px]">
                {impact.badge}
              </p>
            </div>

            <div aria-label="Hero Title" className="w-full">
              <h2 className="font-inter-tight font-medium text-[rgb(31,31,31)] text-[32px] sm:text-[40px] md:text-[50px] tracking-[-0.6px] leading-[1.1]">
                {impact.title}
              </h2>
            </div>
          </div>

          <div
            aria-label="Description"
            className="flex flex-col grow justify-center w-full md:w-auto max-w-[500px]"
          >
            <p className="font-inter text-[rgb(118,118,118)] text-[16px] md:text-[18px] tracking-[-0.2px] leading-[25.2px]">
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
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 w-full px-4 md:px-10 justify-items-center"
        >
          {impact.stats.map((stat, idx) => {
            const parsed = parseStat(stat.value);
            return (
              <div
                key={stat.id}
                className={`flex flex-col items-center justify-start w-full max-w-[340px] gap-4 sm:gap-5 transition-all duration-700 ease-out ${
                  isVisible
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-8 scale-95"
                }`}
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <div
                  aria-label="Impact Stat"
                  className="flex items-center justify-center w-[160px] sm:w-[200px] h-[160px] sm:h-[200px] rounded-full border border-[rgb(236,236,236)] shrink-0 shadow-sm transition-transform duration-300 hover:scale-105"
                >
                  <AnimatedCounter
                    prefix={parsed.prefix}
                    target={parsed.target}
                    suffix={parsed.suffix}
                    duration={850}
                    isVisible={isVisible}
                  />
                </div>
                <div aria-label="Description" className="w-full max-w-[90%] text-center">
                  <p className="font-inter text-[rgb(118,118,118)] text-[14px] sm:text-[16px] tracking-[-0.2px] leading-[19.2px]">
                    {stat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}