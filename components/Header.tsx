import React from "react";

const Header = () => {
  return (
    <div className="fixed top-4 left-0 right-0 px-4 flex items-center justify-between lg:px-8">
      <div className="uppercase text-[10px] flex gap-2">
        <span className="font-bold">Skinstric</span>

        <div className="flex items-center space-x-1 opacity-60">
          {/* Left bracket */}
          <div className="flex flex-col justify-between h-3">
            <div className="w-1 border-t border-current self-start"></div>
            <div className="border-l border-current flex-grow"></div>
            <div className="w-1 border-b border-current self-start"></div>
          </div>

          <span className="relative font-bold">Intro</span>

          {/* Right bracket */}
          <div className="flex flex-col justify-between h-3">
            <div className="w-1 border-t border-current self-end"></div>
            <div className="border-r border-current flex-grow"></div>
            <div className="w-1 border-b border-current self-end"></div>
          </div>
        </div>
      </div>

      <figure className="bg-black py-2 px-4 flex items-center justify-center">
        <button className="text-center uppercase text-[10px] font-bold text-[--secondary]">
          Enter Code
        </button>
      </figure>
    </div>
  );
};

export default Header;
