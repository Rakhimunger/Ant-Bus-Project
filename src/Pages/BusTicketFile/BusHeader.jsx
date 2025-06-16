import React from "react";
import Tajmahal from "../../assets/images/Tajmahal.jpg";
import BusAnimation from "../Bus/BusAnimation";

const BusHeader = () => {
  return (
    <div className="relative text-gray-800">
      {/* ========== Hero Image ========== */}
      <div className="relative w-full h-[60vh] sm:h-[90vh]">
        <img
          src={Tajmahal}
          alt="Taj Mahal"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/50 z-0"></div>

        {/* ========== Hero Content ========== */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4 sm:px-8 text-center z-10 mb-10">
          {/* Headline */}
          <h1 className="text-xl sm:text-5xl font-bold leading-snug sm:leading-tight drop-shadow-lg ">
            We provide bus services to
            <br className="hidden sm:block" />
            popular destinations in North India
          </h1>

          {/* Reviews */}
          <div className="flex items-center mt-3 space-x-2 text-yellow-300 text-sm sm:text-lg drop-shadow">
            <span>★ 3.5</span>
            <span className="text-white font-normal">248 Google reviews</span>
          </div>

          {/* Subheading */}
          <p className="text-sm sm:text-xl mt-2 font-medium text-white drop-shadow-md">
            Search bus tickets to Indian destinations
          </p>

          {/* ========== Search Form ========== */}
          <div className="bg-white/20 backdrop-blur-xl rounded-2xl p-4 sm:p-6 mt-5 flex flex-col sm:flex-row gap-4 shadow-2xl w-full max-w-5xl">
            <input
              type="text"
              placeholder="From"
              className="flex-1 px-4 py-3 rounded-lg border border-white/30 text-sm sm:text-base bg-white/10 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              placeholder="To"
              className="flex-1 px-4 py-3 rounded-lg border border-white/30 text-sm sm:text-base bg-white/10 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="date"
              className="flex-1 px-4 py-3 rounded-lg border border-white/30 text-sm sm:text-base bg-white/10 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg text-sm sm:text-base transition-all duration-200">
              Search Buses
            </button>
          </div>
        </div>
      </div>

      {/* ========== Bus Animation Below ========== */}
      <div>
        <BusAnimation />
      </div>
    </div>
  );
};

export default BusHeader;
