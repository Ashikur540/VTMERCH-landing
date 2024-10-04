import Image from "next/image";
import React from "react";

import { siteLogo } from "@/public/images";
import IconBars from "@/components/icons/IconBars";

export const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between items-center py-4 md:py-6 xl:py-10  bg-primary text-white  mx-auto px-4 sm:px-8 md:px-16 lg:px-20">
        <div id="logo" className="flex items-center space-x-4 py-2">
          <Image
            src={siteLogo}
            alt="site-logo"
            width={100}
            height={100}
            className="max-w-[40px] md:max-w-[64px] lg:max-w-[72px] filter invert"
          />
          <h4 className="font-montserrat font-extrabold text-white text-2xl md:text-4xl xl:text-[100px]">
            VTMERCH
          </h4>
        </div>

        <IconBars className="text-white text-2xl sm:text-4xl cursor-pointer" />
      </div>
    </div>
  );
};
