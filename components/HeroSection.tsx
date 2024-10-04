import React from "react";

import { Navbar } from "@/components/Navbar";
import Image from "next/image";
import { productImage1 } from "@/public/images";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <section className="bg-primary min-h-[98vh] w-full overflow-hidden">
      <Navbar />
      <div className="relative pt-[80px] md:pt-[180px] lg:pt-[200px] xl:pt-[230px]">
        <h2 className="text-white text-3xl font-Act_Of_Rejection  uppercase md:text-[60px] lg:text-[90px] xl:text-[140px] opacity-40 absolute top-[12%] left-[4%] md:top-[22%] md:left-[4%] lg:top-[26%] lg:left-[7%]">
          Future looks stylish!
        </h2>
        {/* product cards */}
        <div className="pl-8 md:pl-10 xl:pl-[185px] flex justify-start items-start gap-x-4 ">
          {/* product card */}
          {[1, 2, 3, 4, 5, 6].map((_, index) => (
            <div
              className=" flex flex-col justify-start items-start  text-white  "
              key={index}
            >
              <Link
                href="#"
                className="group relative block bg-black max-w-[280px]  md:max-w-sm h-[280px]  md:h-[395px] w-[250px] md:w-[320px] xl:w-[360px] rounded-xl  shadow-lg"
              >
                <Image
                  alt="product-image"
                  src={productImage1}
                  className="absolute inset-0 h-full w-full object-cover  transition-opacity group-hover:opacity-50 rounded-xl"
                />

                <div className="relative p-4 sm:p-6 lg:p-8">
                  <p className="text-sm font-medium  text-pink-500">for sale</p>

                  <div className="mt-32 sm:mt-48 lg:mt-64">
                    <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 flex justify-center">
                      <button className="bg-white text-black px-4 py-2 text-sm w-full max-w-[80%] rounded-md ">
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
              <div className="pl-2.5 font-medium pt-4">
                <h3 className=" text-base ">Product Name</h3>
                <div className="flex justify-center items-start gap-2 text-white-100 pt-2.5">
                  <p className="text-xl">$ {34.95}</p>
                  <p className="text-xl line-through">$ {38.95}</p>
                </div>
                {/* <button className="bg-white text-primary px-4 py-2 mt-4">
                Buy Now
              </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
