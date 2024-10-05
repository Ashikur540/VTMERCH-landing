import { manImage, quoteSvg } from "@/public/images";
import Image from "next/image";
import React from "react";

export const OurMission = () => {
  return (
    <section
      id="our-mission "
      className="bg-gradient-to-r from-[#EC3339] to-[#BB1117] relative "
    >
      <div className="container mx-auto px-4">
        {/* Text Container */}
        <div className="flex justify-between items-center flex-wrap gap-6 md:gap-10 xl:gap-0">
          <div className="flex-grow lg:max-w-screen-md xl:max-w-[860px] lg:pt-20 lg:pb-10 xl:py-40 px-6 md:px-0">
            <div className=" absolute top-[2%] left-[4%] md:top-[2%] md:left-[6%] xl:top-[4%] xl:left-[4%] ">
              <Image
                src={quoteSvg} // Replace with the correct image path
                alt="Mission Image"
                width={180} // Adjust accordingly
                height={180}
                className="w-[4rem] md:w-[120px] lg:w-[160px] xl:w-[210px] "
              />
            </div>
            <blockquote className="text-xl md:text-3xl lg:text-4xl font-bold  pt-10 md:pt-16 lg:pt-2 font-montserrat text-white">
              OUR MISSION IS TO ENLIGHTEN, ENTERTAIN AND EMPOWER CURRENT AND
              FUTURE LEADERS AROUND THE WORLD.
            </blockquote>
          </div>

          {/* Elevated Image Effect */}
          <div className="static mx-auto xl:absolute bottom-0 right-[5%]">
            <Image
              src={manImage} // Same image or an additional element to create elevation
              alt="Elevated Image"
              width={300} // Adjust based on design
              height={300}
              className="min-h-full sm:h-[20rem] xl:h-[35.5rem] w-full "
            />
          </div>
        </div>
      </div>
    </section>
  );
};
