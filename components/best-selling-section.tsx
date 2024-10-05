import { productImage2 } from "@/public/images";
import Image from "next/image";
import React from "react";
import IconCartPlus from "./icons/IconCartPlus";
import IconWishlist from "./icons/IconWishlist";
import { bestSellingProducts } from "@/data";

export const BestSellingSection = () => {
  return (
    <section className=" py-10 md:py-16 xl:py-24 mx-auto bg-secondary">
      <div className="container mx-auto px-[15px]">
        <h2 className="text-3xl md:text-5xl xl:text-[64px] font-semibold uppercase leading-[120%] mb-4 md:mb-12 tracking-[0.5px] font-montserrat2">
          Buy one get 1 free <br /> on{" "}
          <span
            className="bg-clip-text text-white bg-gradient-to-b from-neutral-50 to-slate-50  "
            style={{
              WebkitTextStroke: "1px #000000",
              WebkitTextFillColor: "#fff",
              fontWeight: "bold",
              strokeLinejoin: "round",
              strokeMiterlimit: "1",
              color: "#ff",
            }}
          >
            all bestselling products
          </span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center gap-10">
          {bestSellingProducts.map((products) => (
            <div
              className="group bg-white  max-w-sm rounded-lg mx-auto"
              style={{
                boxShadow: "6px 6px 12px rgba(47, 47, 47, 0.02)", // Shadow effect
              }}
              key={products.id}
            >
              <div className="relative p-4 overflow-hidden cursor-pointer">
                {/* Product Image */}
                <Image
                  src={products.image}
                  alt="Product"
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover  rounded-lg "
                />

                {/* Hover Overlay */}
                <div className="absolute inset-4 rounded-lg bg-black bg-opacity-50  opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

                {/* Icons (shown on hover) */}
                <div className="absolute top-8 left-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <button className="p-2 bg-white rounded-full shadow-lg transform group-hover:translate-x-4 transition-transform duration-500">
                    <IconCartPlus />
                  </button>
                  <button className="p-2 bg-white rounded-full shadow-lg transform group-hover:translate-x-4 transition-transform duration-500">
                    <IconWishlist />
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4">
                <h3 className="text-sm font-semibold">{products.name}</h3>
                <div className="flex justify-start items-center gap-3">
                  <p className="text-lg font-bold">$ {products.price}</p>
                  <p className="text-gray-500 line-through">
                    $ {products.salePrice}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
