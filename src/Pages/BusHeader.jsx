import React from "react";
import Tajmahal from "../../assets/images/Tajmahal.jpg";
import BusAnimation from "../Bus/BusAnimation";

const BusHeader = () => {
  return (
    <div className="text-gray-800 relative">
      {/* Background Image Section */}
      <div className="relative w-full h-[20vh] sm:h-[70vh]">
        <img
          src={Tajmahal}
          alt="Taj Mahal"
          className="absolute inset-0 w-full h-full brightness-50 object-cover object-center"
        />

        {/* Colorful Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FF8A65] to-[#7986CB] opacity-80 z-0"></div>

        {/* Centered Content - moved up */}
        <div className="absolute inset-0 flex flex-col justify-start items-center text-white px-2 sm:px-6 text-center space-y-2 sm:space-y-5 z-10 ">
          <h1 className="text-base sm:text-5xl font-bold sm:font-extrabold leading-snug sm:leading-tight drop-shadow-xl">
            We provide bus services to
            <br className="hidden sm:block" />
            popular destinations in North India
          </h1>

          {/* <p className="flex items-center space-x-1 sm:space-x-2 text-yellow-300 font-medium text-xs sm:text-lg drop-shadow-md">
            <span>★ 3.5</span>
            <span className="text-white font-normal">248 Google reviews</span>
          </p> */}

          {/* <p className="text-xs sm:text-xl font-medium drop-shadow-md">
            Search bus tickets to Indian destinations
          </p> */}
        </div>
      </div>

      {/* Bus Animation - hidden on small and medium screens */}
      <div className="hidden lg:block">
        <BusAnimation />
      </div>
    </div>
  );
};

export default BusHeader;
