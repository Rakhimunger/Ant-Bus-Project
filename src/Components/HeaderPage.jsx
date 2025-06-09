import React from "react";
import { FaBus, FaClock } from "react-icons/fa";
import unsplace1 from "../assets/images/unsplash1.jpg";

const BusHirePage = () => {
  return (
    <div className="text-gray-800 font-sans">
      {/* Hero Section */}
      <div className="relative h-[60vh] sm:h-[70vh] overflow-hidden">
        <img
          src={unsplace1}
          alt="Bus Hire"
          className="w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-transparent" />

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-start text-white px-4 pt-16 sm:pt-24 md:pt-28 text-center">
          <h1 className="text-3xl sm:text-5xl font-extrabold drop-shadow-2xl">
            Book Your Ride – Bus Hire
          </h1>
          <p className="mt-2 text-sm sm:text-base opacity-90 font-medium">
            Home → Bus Hire
          </p>
        </div>
      </div>

      {/* Booking Search Box */}
      <div className="max-w-7xl mx-auto px-4 -mt-20 relative z-10">
        <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10 border border-blue-200">
          <div className="text-center md:text-left w-full md:w-auto">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
              Hire A Bus For Convenient & Comfortable Travel.
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6 w-full">
            {/* Select Type */}
            <div className="flex flex-col">
              <label className="text-sm font-semibold text-gray-800 mb-2 flex items-center gap-2">
                <FaBus className="text-blue-600 text-lg" /> Select Type
              </label>
              <select className="border border-gray-300 rounded-xl px-4 py-2 text-base text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Local Run</option>
                <option>Outstation</option>
              </select>
            </div>

            {/* Select Vehicle */}
            <div className="flex flex-col">
              <label className="text-sm font-semibold text-gray-800 mb-2 flex items-center gap-2">
                <FaBus className="text-blue-600 text-lg" /> Select Vehicle
              </label>
              <select className="border border-gray-300 rounded-xl px-4 py-2 text-base text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>AC Deluxe Buses</option>
                <option>Non-AC Buses</option>
              </select>
            </div>

            {/* Select Package */}
            <div className="flex flex-col">
              <label className="text-sm font-semibold text-gray-800 mb-2 flex items-center gap-2">
                <FaClock className="text-blue-600 text-lg" /> Select Package
              </label>
              <select className="border border-gray-300 rounded-xl px-4 py-2 text-base text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>4hr / 40km</option>
                <option>8hr / 80km</option>
                <option>12hr / 120km</option>
              </select>
            </div>

            {/* Modify Button */}
            <div className="flex-shrink-0">
              <button className="bg-blue-900 hover:bg-blue-900 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-md transition-all">
                🔍 Modify Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusHirePage;
