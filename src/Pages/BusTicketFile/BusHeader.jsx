import React from "react";
import Tajmahal from "../../assets/images/Tajmahal.jpg";
import BusAnimation from "../Bus/BusAnimation";

const BusHeader = () => {
  return (
    <div className="text-gray-800 relative">
      {/* ========= Background Image Section ========= */}
      <div className="relative w-full h-[40vh] sm:h-[80vh]">
        {/* Background Image */}
        <img
          src={Tajmahal}
          alt="Taj Mahal"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FF8A65] to-[#7986CB] opacity-80 z-0"></div>

        {/* ========= Centered Content ========= */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-6 text-center space-y-5 z-0 mb-20 sm:mb-30">
          <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight drop-shadow-xl">
            We provide bus services to
            <br className="hidden sm:block" />
            popular destinations in North India
          </h1>

          <p className="flex items-center space-x-1 text-yellow-300 font-semibold text-lg drop-shadow-md">
            <span>★ 3.5</span>
            <span className="text-white font-normal">248 Google reviews</span>
          </p>

          <p className="text-lg sm:text-xl font-medium drop-shadow-md">
            Search bus tickets to Indian destinations
          </p>
        </div>
      </div>

      {/* ========= Bus Animation: Only on Large Screens ========= */}
      <div className="hidden lg:block">
        <BusAnimation />
      </div>
    </div>
  );
};

export default BusHeader;
