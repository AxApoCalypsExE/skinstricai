"use client";

import Link from "next/link";
import React, { useState } from "react";
import { MdPlayArrow } from "react-icons/md";

interface ApiResponse {
  SUCCESS: string;
}

const Form = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [phase, setPhase] = useState<"name" | "location">("name");

  const handleSubmit = async () => {
    try {
      const response = await fetch(
        "https://us-central1-frontend-simplified.cloudfunctions.net/skinstricPhaseOne",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: name,
            location: location,
          }),
        }
      );
  
      if (!response.ok) {
        const errorBody = await response.text();
        console.error("API error response:", errorBody);
        throw new Error(`Failed to submit data, status: ${response.status}`);
      }
  
      const data: ApiResponse = await response.json();
      console.log("Success:", data.SUCCESS);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  

  const handleNameKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && name.trim() !== "") {
      setPhase("location");
    }
  };

  const handleLocationKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && location.trim() !== "") {
      handleSubmit();
    }
  };

  return (
    <div className="mt-[--header-height] w-full overflow-hidden">
      {phase === "name" && (
        <h1 className="uppercase text-xs font-semibold">Introduce Yourself</h1>
      )}
      {phase === "location" && (
        <h1 className="uppercase text-xs font-semibold">Where are you from?</h1>
      )}

      <div className="flex items-center justify-center flex-col h-[65vh]">
        <h2 className="uppercase opacity-60 text-[10px]">Click to type</h2>
        {phase === "name" && (
          <div className="relative group">
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyDown={handleNameKeyDown}
              className="w-[450px] text-center text-3xl lg:text-5xl border-b-2 border-transparent focus:border-transparent focus:outline-none transition-colors duration-200 placeholder:text-black focus:placeholder:text-opacity-60"
            />
            <span className="absolute left-1/2 bottom-0 h-0.5 w-[350px] bg-black transform -translate-x-1/2 scale-x-0 origin-center group-focus-within:scale-x-100 transition-transform duration-200"></span>
          </div>
        )}
        {phase === "location" && (
          <div className="relative group">
            <input
              type="text"
              placeholder="Your Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              onKeyDown={handleLocationKeyDown}
              className="w-[450px] text-center text-3xl lg:text-5xl border-b-2 border-transparent focus:border-transparent focus:outline-none transition-colors duration-200 placeholder:text-black focus:placeholder:text-opacity-60"
            />
            <span className="absolute left-1/2 bottom-0 h-0.5 w-[350px] bg-black transform -translate-x-1/2 scale-x-0 origin-center group-focus-within:scale-x-100 transition-transform duration-200"></span>
          </div>
        )}
        <div className="hidden lg:block pointer-events-none absolute w-[300px] h-[300px] transform rotate-45 border-2 border-[--primary] border-dotted opacity-30 "></div>
        <div className="hidden lg:block pointer-events-none absolute w-[350px] h-[350px] transform rotate-45 border-2 border-[--primary] border-dotted opacity-20 "></div>
        <div className="hidden lg:block pointer-events-none absolute w-[400px] h-[400px] transform rotate-45 border-2 border-[--primary] border-dotted opacity-10 "></div>
      </div>

      {/* Navigation buttons */}
      <div className="fixed bottom-9 justify-between flex w-[90vw] lg:w-[96vw]">
        <div className="items-center justify-center gap-4 flex flex-row-reverse">
          <p className="text-xs uppercase font-bold opacity-60">Back</p>
          {phase === "location" && (
            <button
              onClick={() => setPhase("name")}
              className="relative flex items-center justify-center w-6 h-6"
            >
              {/* Decorative dotted square */}
              <div className="absolute inset-0 transform rotate-45 border-2 border-[#a0a4ab] pointer-events-none"></div>

              {/* Centered icon */}
              <figure className="relative z-10">
                <MdPlayArrow className="rotate-180" />
              </figure>
            </button>
          )}
          {phase === "name" && (
            <Link
              href={"/"}
              className="relative flex items-center justify-center w-6 h-6"
            >
              {/* Decorative dotted square */}
              <div className="absolute inset-0 transform rotate-45 border-2 border-[#a0a4ab] pointer-events-none"></div>

              {/* Centered icon */}
              <figure className="relative z-10">
                <MdPlayArrow className="rotate-180" />
              </figure>
            </Link>
          )}
        </div>
        {name.trim() !== "" && phase === "name" && (
          <div className="items-center justify-center gap-4 flex flex-row">
            <p className="text-xs uppercase font-bold opacity-60">Next</p>
            <button
              onClick={() => setPhase("location")}
              className="relative flex items-center justify-center w-6 h-6"
            >
              {/* Decorative dotted square */}
              <div className="absolute inset-0 transform rotate-45 border-2 border-[#a0a4ab] pointer-events-none"></div>
              {/* Centered icon */}
              <figure className="relative z-10">
                <MdPlayArrow />
              </figure>
            </button>
          </div>
        )}
        {/* {location.trim() !== "" && phase === "location" && (
          <div className="items-center justify-center gap-4 flex flex-row">
            <p className="text-xs uppercase font-bold opacity-60">Proceed</p>
            <button
              onClick={handleSubmit}
              className="relative flex items-center justify-center w-6 h-6"
            >
              <div className="absolute inset-0 transform rotate-45 border-2 border-[#a0a4ab] pointer-events-none"></div>
              <figure className="relative z-10">
                <MdPlayArrow />
              </figure>
            </button>
          </div>
        )} */}
        {location.trim() !== "" && phase === "location" && (
          <div className="items-center justify-center gap-4 flex flex-row">
            <p className="text-xs uppercase font-bold opacity-60">Proceed</p>
            <Link
              href={"/testing"}
              className="relative flex items-center justify-center w-6 h-6"
            >
              <div className="absolute inset-0 transform rotate-45 border-2 border-[#a0a4ab] pointer-events-none"></div>
              <figure className="relative z-10">
                <MdPlayArrow />
              </figure>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Form;
