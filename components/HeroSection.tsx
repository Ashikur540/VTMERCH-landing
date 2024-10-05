import React from "react";

import { Navbar } from "@/components/Navbar";
import Image from "next/image";
import { productImage1 } from "@/public/images";
import Link from "next/link";
import { heroSectionProducts } from "@/data";

export const HeroSection = () => {
  return (
    <section className="bg-primary  w-full overflow-hidden">
      <Navbar />
      <div className="relative pt-[80px] md:pt-[120px] lg:pt-[160px] pb-8 xl:pb-10">
        <h2 className="text-white text-3xl font-Act_Of_Rejection  uppercase md:text-[60px] lg:text-[90px] xl:text-[100px] 2xl:text-[140px] opacity-40 absolute top-[12%] left-[4%] md:top-[16%] md:left-[4%] lg:top-[20%] lg:left-[7%]">
          Future looks stylish!
        </h2>
        {/* product cards */}
        <div className="pl-8 md:pl-10 xl:pl-[185px] flex justify-start items-start gap-x-4 ">
          {/* product card */}
          {heroSectionProducts.map((product) => (
            <div
              className=" flex flex-col justify-start items-start  text-white  "
              key={product.id}
            >
              <Link
                href="#"
                className="group relative block bg-black max-w-[280px]  md:max-w-sm h-[280px]  md:h-[395px] w-[250px] md:w-[320px] xl:w-[360px] rounded-xl  shadow-lg"
              >
                <Image
                  alt={product.name}
                  src={product.image}
                  width={1000}
                  height={1000}
                  className="absolute inset-0 h-full w-full object-cover  transition-opacity group-hover:opacity-50 rounded-xl"
                />

                <div className="relative p-4 sm:p-6 lg:p-8">
                  {/* <p className="text-sm font-medium  text-pink-500">for sale</p> */}

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
                <h3 className=" text-base ">{product.name}</h3>
                <div className="flex justify-center items-start gap-2 text-white-100 pt-2.5">
                  <p className="text-xl">$ {product.price}</p>
                  <p className="text-xl line-through">$ {product.salePrice}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
