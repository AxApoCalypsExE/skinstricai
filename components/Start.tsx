"use client";

import React, { ChangeEvent, useState } from "react";
import Image from "next/image";

const API_URL =
  "https://us-central1-frontend-simplified.cloudfunctions.net/skinstricPhaseTwo";

const Start = () => {
  const [base64Image, setBase64Image] = useState<string>("");

  const sendImage = async (base64: string) => {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // Adjust the key ("image") based on your API requirements
        body: JSON.stringify({ image: base64 }),
      });

      const data = await response.json();
      console.log("Response from API:", data);
    } catch (error) {
      console.error("Error sending image:", error);
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      if (reader.result && typeof reader.result === "string") {
        setBase64Image(reader.result);
        sendImage(reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="mt-[--header-height] px-4 lg:px-8 pb-9 w-full overflow-hidden">
      <h1 className="uppercase text-xs font-semibold">To Start Analysis</h1>

      <div className="w-full flex flex-col items-center my-auto pb-20 pt-24 lg:pt-64 lg:justify-around lg:flex-row">
        {/* Camera icon section */}
        <div className="relative mb-[150px] lg:mb-0">
          <Image
            src="/camera.svg"
            alt="access camera"
            width={150}
            height={150}
            className="border p-1 border-black rounded-full w-[60px] h-auto lg:w-[100px] transition-transform duration-300 hover:scale-[0.85]"
          />
          <div className="absolute bottom-[110%] left-[80%]">
            <div className="relative w-[40px] lg:w-[60px] border opacity-60 border-black -rotate-[43deg]" />
            <p className="text-xs lg:text-sm w-[100px] lg:w-[140px] uppercase absolute bottom-4 left-8 lg:bottom-6">
              Allow A.I. To Scan Your Face
            </p>
          </div>
        </div>

        <label htmlFor="galleryInput" className="relative cursor-pointer">
          <Image
            src="/image.svg"
            alt="access gallery"
            width={150}
            height={150}
            className="border p-1 border-black rounded-full w-[60px] h-auto lg:w-[100px] transition-transform duration-300 hover:scale-[0.85]"
          />
          <div className="absolute top-[110%] right-[80%]">
            <div className="relative w-[40px] lg:w-[60px] border opacity-60 border-black -rotate-[43deg]" />
            <p className="text-xs lg:text-sm w-[110px] lg:w-[140px] uppercase absolute top-4 right-4">
              Allow A.I. To Access Gallery
            </p>
          </div>
        </label>

        <input
          id="galleryInput"
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />
      </div>
    </div>
  );
};

export default Start;
