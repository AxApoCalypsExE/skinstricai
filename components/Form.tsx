import React from "react";
import { MdPlayArrow } from "react-icons/md";

const Form = () => {
  return (
    <div className="mt-[--header-height] ">
      <h1 className="uppercase text-xs font-semibold">Introduce Yourself</h1>
      
      <div className="flex items-center justify-center flex-col h-[65vh]">
        <h2 className="uppercase opacity-60 text-[10px]">Click to type</h2>
        <input type="text" placeholder="Full Name" className="text-center text-5xl w-[250px] border-b-2 border-gray-300 focus:border-black focus:outline-none transition-colors duration-200" />
      </div>

      <div className="items-center justify-center gap-4 flex flex-row-reverse fixed bottom-9">
        <p className="text-xs uppercase font-bold opacity-60">Back</p>
        <div className="relative flex items-center justify-center w-6 h-6">
          {/* Decorative dotted square */}
          <div className="absolute inset-0 transform rotate-45 border-2 border-[#a0a4ab] pointer-events-none"></div>

          {/* Centered icon */}
          <figure className="relative z-10">
            <MdPlayArrow className="rotate-180" />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Form;
