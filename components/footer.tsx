import Link from "next/link";
import React from "react";

import { footerIcons, footerNavs, socialIcons } from "@/data";
import Image from "next/image";
import { siteLogoRed } from "@/public/images";

export const Footer = () => {
  return (
    <footer className="text-white bg-black px-4 py-5 ">
      <div className="container mx-auto">
        <div className="flex justify-start items-center pt-12 mb-4 md:pb-8 ">
          <Image
            src={siteLogoRed}
            alt="site-logo"
            width={100}
            height={100}
            className="max-w-[60px] md:max-w-[90px] lg:max-w-fit lg:w-full"
          />
          <h4 className="font-montserrat font-extrabold tracking-[120%] text-2xl sm:text-4xl md:text-[5.25rem] xl:text-[100px]">
            VTMERCH
          </h4>
        </div>
        <div className=" justify-start block sm:grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 sm:gap-6 md:gap-12 border-t pt-6 md:pt-12 border-[#a6a5a377]">
          <div className="col-span-2 lg:max-w-[520px]">
            <p
              className={`mt-2 text-[15px] md:text-lg xl:text-[24px] mb-8 md:mb-10 xl:mb-12 font-montserrat leading-[120%] tracking-[0.5%] text-slate-100`}
            >
              Subscribe and be the first to receive notifications about our
              upcoming releases and the latest news.
            </p>

            <form>
              <div className="flex flex-col items-center  gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-2.5 outline-none bg-transparent border border-white border-opacity-75 rounded-xl placeholder:text-center"
                />
                <button className="p-2.5 rounded-md text-black bg-white outline-none shadow-md focus:shadow-none w-full">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
          <div className="pt-4 md:pt-0">
            {footerNavs.slice(1).map((item, idx) => (
              <ul className="space-y-4" key={idx}>
                <h4 className="font-medium text-lg md:text-xl">{item.label}</h4>
                {item.items.map((el, idx) => (
                  <li key={idx}>
                    <Link
                      href={el.href}
                      className="hover:underline hover:text-primary transition-colors duration-300 text-white-100 font-normal"
                    >
                      {el.name}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
          <div className="pt-4 md:pt-0">
            {footerNavs.slice(0, 1).map((item, idx) => (
              <ul className="space-y-4" key={idx}>
                <h4 className="font-medium text-lg md:text-xl">{item.label}</h4>
                {item.items.map((el, idx) => (
                  <li key={idx}>
                    <Link
                      href={el.href}
                      className="hover:underline hover:text-primary transition-colors duration-300 text-white-100 font-normal"
                    >
                      {el.name}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
          <div className="max-w-[300px] pt-4 md:pt-0">
            <h4 className="font-medium text-lg md:text-xl ">Contact Us</h4>
            <div className="flex flex-col justify-start gap-4">
              <p className="text-white-100">
                Available between 8AM to 8PM. Ready to answer your questions.
              </p>
              <div className="flex justify-start gap-2 text-white-100">
                <img
                  src="/images/icons/telephone (2) 1.svg"
                  alt="social-logo"
                />
                <a>1-800-123-4567</a>
              </div>
              <div className="flex justify-start gap-2 text-white-100">
                <img src="/images/icons/email 1.svg" alt="social-logo" />
                <a>store@valuetainment.com</a>
              </div>
              <div className="flex justify-start gap-2 text-white-100">
                {socialIcons.map((data, index) => (
                  <Link
                    href={data.url}
                    key={index}
                    className="social-icon-wrapper hover:text-primary"
                  >
                    <Image
                      src={data.icon}
                      alt={data.name}
                      width={24}
                      height={24}
                      className="social-icon"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 py-6 items-center justify-between sm:flex">
          <div className="mt-4 sm:mt-0">
            &copy; 2024 Valuetainment Store. All rights reserved.
          </div>
          <div className="mt-6 sm:mt-0">
            <ul className="flex items-center space-x-4">
              {footerIcons.map((icon, index) => (
                <li
                  className="w-8 h-8 flex items-center justify-center"
                  key={index}
                >
                  <Link href="#">
                    <img src={icon} alt="social-logo" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
