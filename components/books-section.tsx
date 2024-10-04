import React from "react";
import IconArrowRight from "./icons/IconArrowRight";
import Image from "next/image";
import { bookImage1, bookImage2, signatureImage } from "@/public/images";

export const BooksSection = () => {
  return (
    <section className="py-10 md:py-16 xl:py-24 mx-auto bg-black">
      <div className="container px-8 sm:px-[15px] mx-auto">
        <div className="flex flex-wrap lg:flex-nowrap  items-center justify-between gap-8">
          <div className="flex flex-col justify-start items-start gap-y-8 w-full md:w-1/2">
            <div className="uppercase tracking-[120%]">
              <h3 className="font-montserrat text-5xl text-white font-medium mb-4">
                Patrick Bet-David&apos;s
              </h3>
              <h2 className="font-bold font-montserrat leading-tight  text-4xl md:text-6xl lg:text-6xl xl:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-[#DE2A2F] to-[#EF5256] ">
                Signed <br /> Collection
              </h2>
            </div>

            <button className="group bg-white py-4 px-8 rounded-xl flex justify-center items-center gap-2 hover:shadow-xl hover:shadow-slate-600 transition-shadow duration-300 tracking-tight uppercase font-medium">
              <span>Shop Now</span>
              <IconArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
            </button>

            <Image
              src={signatureImage}
              alt="signature-image"
              width={1000}
              height={1000}
              className="h-full w-full"
            />
          </div>

          <div className=" flex flex-wrap sm:flex-nowrap justify-center items-center gap-x-2 w-full md:w-1/2 mx-auto">
            <Image
              src={bookImage2}
              alt="signature-image"
              //   width={200}
              //   height={`200`}
              className="h-full max-w-[180px]  md:max-w-[260px] xl:max-w-[360px] w-full"
            />
            <Image
              src={bookImage1}
              alt="signature-image"
              //   width={200}
              //   height={200}
              className="h-full max-w-[180px]  md:max-w-[260px] xl:max-w-[360px] w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
