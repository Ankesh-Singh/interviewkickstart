import React from "react";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Maq from "@/components/maq";
import Services from "@/components/services";
import Process from "@/components/process";
import CaseStudy from "@/components/casestudy";
import Content from "@/components/content";
import Impact from "@/components/impact";
import Testimonial from "@/components/testimonal";
import FAQ from "@/components/faq";
import Footer from "@/components/footer";

export default function App() {
  return (
    <div className="text-black text-[16px] leading-[normal] font-times no-underline w-full max-w-[1480px] scale-100 mx-auto">
      <div className="bg-white text-[12px] font-sans">
        <div>
          <div className="content-center items-center flex flex-col h-min justify-start relative bg-white gap-0">
            <Navbar />
            <div className="content-center items-center contents h-min justify-start relative bg-white gap-0">
              <main
                aria-label="main"
                className="content-center items-center flex flex-col h-min justify-start relative w-full gap-0 z-2"
              >
                <Hero />
                <Maq />
                <Services />
                <Process />
                <CaseStudy />
                <Content />
                <Impact />
                <Testimonial />
                <FAQ />
              </main>
            </div>
            <Footer />
            <div className="relative z-1 shrink-0 order-[1004]" />
          </div>
          <div />
        </div>
      </div>
    </div>
  );
}
