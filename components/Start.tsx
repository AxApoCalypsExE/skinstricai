import Image from "next/image";
import React from "react";

const Start = () => {
  return (
    <div className="mt-[--header-height] px-4 lg:px-8 pb-9 w-full overflow-hidden">
      <h1 className="uppercase text-xs font-semibold">To Start Analysis</h1>
      <div className="w-full flex flex-col items-center my-auto pb-20 pt-24 lg:pt-64 lg:justify-around lg:flex-row">
        <div className="relative mb-[150px] lg:mb-0">
          <Image
            src="/camera.svg"
            alt="access camera"
            width={150}
            height={150}
            className="border p-1 border-black rounded-full w-[60px] h-auto lg:w-[100px]"
          />
          <div className="absolute bottom-[110%] left-[80%]">
            <div className="relative w-[40px] lg:w-[60px] border opacity-60 border-black -rotate-[43deg]" />
            <p className="text-xs lg:text-sm w-[100px] lg:w-[140px] uppercase absolute bottom-4 left-8 lg:bottom-6">
              Allow A.I. To Scan Your Face
            </p>
          </div>
        </div>
        <div className="relative">
          <Image
            src="/image.svg"
            alt="access camera"
            width={150}
            height={150}
            className="border p-1 border-black rounded-full w-[60px] h-auto lg:w-[100px]"
          />
          <div className="absolute top-[110%] right-[80%]">
            <div className="relative w-[40px] lg:w-[60px] border opacity-60 border-black -rotate-[43deg]" />
            <p className="text-xs lg:text-sm w-[110px] lg:w-[140px] uppercase absolute top-4 right-4">
              Allow A.I. To Access Gallery
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Start;
