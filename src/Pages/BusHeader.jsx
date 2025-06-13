import React from "react";
import Tajmahal from "../assets/images/Tajmahal.jpg";

const BusHeader = () => {
  return (
    <div className="text-gray-800 relative">
      {/* Background Image Section */}
      <div className="relative w-full h-[40vh] sm:h-[80vh]">
        <img
          src={Tajmahal}
          alt="Taj Mahal"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Colorful Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#3B4B96] to-[#FF5722] opacity-80 z-0"></div>

        {/* Centered Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-6 text-center space-y-5 z-10">
          <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight drop-shadow-xl">
            We provide bus services to
            <br className="hidden sm:block" />
            popular destinations in North India
          </h1>

          <p className="flex items-center space-x-2 text-yellow-300 font-semibold text-lg drop-shadow-md">
            <span>★ 3.5</span>
            <span className="text-white font-normal">248 Google reviews</span>
          </p>

          <p className="text-lg sm:text-xl font-medium drop-shadow-md">
            Search bus tickets to Indian destinations
          </p>
        </div>
      </div>
    </div>
  );
};

export default BusHeader;
