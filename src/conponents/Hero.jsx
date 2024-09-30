import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="flex justify-around items-center flex-col sm:flex-row border border-gray-400">
      {/* left side content */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0 sm:px-0 px-3">
        <div className="text-[#414141]">
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            <p className="font-medium text-sm md:text-base">#bamboooworld</p>
          </div>
          <h1 className="text-3xl sm:py-3 lg:text-5xl leading-relaxed font-[prata]">
            various indoor plant shope
          </h1>
          <div className="flex items-center gap-2">
            <p className="font-semibold text-sm md:text-base">SHOP NOW</p>
            <p className="w-8 md:w-full h-[1px] bg-[#414141]"></p>
          </div>
        </div>
      </div>

      {/* Right side content */}
      <img className="w-full sm:w-1/4 object-cover" 
      src={assets.heroimg} alt="" />
    </div>
  );
};

export default Hero;
