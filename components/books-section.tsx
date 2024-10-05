"use client";

import React, { useRef } from "react";
import IconArrowRight from "./icons/IconArrowRight";
import Image from "next/image";
import { bookImage1, bookImage2, signatureImage } from "@/public/images";
import { BlurFade } from "./common/BlurFadeWrapper";
import { motion, useScroll, useTransform } from "framer-motion";

export const BooksSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const signatureWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={sectionRef}
      className="py-10 md:py-16 xl:py-24 mx-auto bg-black"
    >
      <div className="container px-8 sm:px-[15px] mx-auto">
        <div className="flex flex-wrap lg:flex-nowrap items-center justify-between gap-8">
          <div className="flex flex-col justify-start items-start gap-y-8 w-full md:w-1/2">
            <div className="uppercase tracking-[120%]">
              <BlurFade inView delay={0.1} inViewMargin="2%">
                <h3 className="font-montserrat text-5xl text-white font-medium mb-4">
                  Patrick Bet-David&apos;s
                </h3>
              </BlurFade>
              <BlurFade inView delay={0.2} inViewMargin="2%">
                <h2 className="font-bold font-montserrat leading-tight text-4xl md:text-6xl lg:text-6xl xl:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-[#DE2A2F] to-[#EF5256] ">
                  Signed <br className="hidden lg:block" /> Collection
                </h2>
              </BlurFade>
            </div>

            <BlurFade inView delay={0.3} inViewMargin="2%">
              <button className="group bg-white text-sm sm:text-base px-6 py-2.5 sm:py-4 sm:px-8 rounded-xl flex justify-center items-center gap-2 hover:shadow-xl hover:shadow-slate-600 transition-shadow duration-300 tracking-tight uppercase font-medium">
                <span>Shop Now</span>
                <IconArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
              </button>
            </BlurFade>

            <motion.div
              style={{
                width: signatureWidth,
                overflow: "hidden",
              }}
              className="w-full"
            >
              <Image
                src={signatureImage}
                alt="signature-image"
                width={1000}
                height={1000}
                className="h-full w-full"
              />
            </motion.div>
          </div>

          <div className="flex flex-wrap sm:flex-nowrap justify-center items-center gap-x-2 w-full md:w-1/2 mx-auto">
            <motion.div style={{ scale, opacity }}>
              <Image
                src={bookImage2}
                alt="book-image-2"
                className="h-full max-w-[180px] md:max-w-[260px] xl:max-w-[320px] w-full"
              />
            </motion.div>
            <motion.div style={{ scale, opacity }}>
              <Image
                src={bookImage1}
                alt="book-image-1"
                className="h-full max-w-[180px] md:max-w-[260px] xl:max-w-[320px] w-full"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
