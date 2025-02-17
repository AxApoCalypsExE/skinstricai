import Link from "next/link";
import React from "react";
import { MdPlayArrow } from "react-icons/md";

const Intro = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Left diamond */}
        <div className="pointer-events-none absolute w-[300px] h-[300px] transform rotate-45 border-2 border-[--primary] border-dotted opacity-30 lg:left-[-225px] lg:w-[400px] lg:h-[400px] lg:opacity-60"></div>
        {/* Right diamond */}
        <div className="pointer-events-none absolute w-[350px] h-[350px] transform rotate-45 border-2 border-[--primary] border-dotted opacity-60 lg:right-[-225px] lg:w-[400px] lg:h-[400px] lg:opacity-60"></div>

        {/* Take Test button */}
        <Link
          href={"/testing"}
          className="hidden items-center justify-center gap-4 lg:flex lg:absolute right-16 cursor-pointer"
        >
          <p className="text-xs uppercase font-bold opacity-60">Take Test</p>
          <div className="relative flex items-center justify-center w-8 h-8">
            {/* Decorative dotted square */}
            <div className="absolute inset-0 transform rotate-45 border-2 border-[#a0a4ab] pointer-events-none"></div>

            {/* Centered icon */}
            <figure className="relative z-10">
              <MdPlayArrow className="" />
            </figure>
          </div>
        </Link>

        {/* Discover A.I. button */}
        <div className="hidden items-center justify-center gap-4 lg:flex lg:flex-row-reverse lg:absolute left-16">
          <p className="text-xs uppercase font-bold opacity-60">
            Discover A.I.
          </p>
          <div className="relative flex items-center justify-center w-8 h-8">
            {/* Decorative dotted square */}
            <div className="absolute inset-0 transform rotate-45 border-2 border-[#a0a4ab] pointer-events-none"></div>

            {/* Centered icon */}
            <figure className="relative z-10">
              <MdPlayArrow className="rotate-180" />
            </figure>
          </div>
        </div>
      </div>

      <div className="flex items-center flex-col m-auto px-4 h-screen justify-center gap-10">
        <h1 className="text-5xl lg:text-8xl lg:max-w-[600px] text-center tracking-[-0.07em]">
          <span>Sophisticated</span>{" "}
          <span className="inline-block">skincare</span>
        </h1>
        <p className="text-xs uppercase text-center leading-[1.71] lg:text-sm lg:max-w-[300px] lg:text-start lg:absolute lg:bottom-0 lg:left-0 lg:pb-9 lg:px-8">
          Skinstric developed an A.I. that creates a highly-personalised routine
          tailored to what your skin needs.
        </p>
        <div className="flex items-center justify-center gap-4 lg:hidden">
          <p className="text-[10px] uppercase font-bold">Enter Experience</p>
          <div className="relative flex items-center justify-center w-[25px] h-[25px]">
            {/* Decorative dotted square */}
            <div className="absolute inset-0 transform rotate-45 border-2 border-[#a0a4ab] pointer-events-none"></div>

            {/* Centered icon */}
            <figure className="relative z-10">
              <MdPlayArrow className="" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
