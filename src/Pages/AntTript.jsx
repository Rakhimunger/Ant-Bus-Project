import React from "react";
import antimg3 from "../assets/images/antimg3.png";
import antsirimg from "../assets/images/antsirimg.jpeg";
import antimg from "../assets/images/antimg.png";

const AntTript = () => {
  return (
    <div className="bg-white py-10 px-4 sm:px-6 md:px-10 lg:px-20 text-gray-800">
      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-4">
            <img
              src={antimg3}
              alt="ANT Bus"
              className="rounded-xl shadow-lg w-full h-[180px] sm:h-[200px] md:h-[240px] object-cover   hover:scale-105 transition duration-300"
            />
            <img
              src={antimg}
              alt="ANT Group"
              className="rounded-xl shadow-lg w-full h-[180px] sm:h-[200px] md:h-[240px] object-cover  hover:scale-105 transition duration-300"
            />
          </div>
          <img
            src={antsirimg}
            alt="ANT Sir"
            className="rounded-xl shadow-xl w-full h-full object-cover   hover:scale-105 transition duration-300"
          />
        </div>

        {/* Text Section */}
        <div className="space-y-5 mt-6 lg:mt-0">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-black">
            Let’s Go Together
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-4xl font-extrabold text-blue-800">
            Plan Your Trip With Us
          </h2>
          <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">
            Welcome to{" "}
            <span className="font-semibold text-blue-800">ANT Travels</span> —
            your trusted partner in transportation since 2003. We offer safe,
            punctual, and comfortable travel services across Delhi/NCR.
          </p>
          <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">
            Our core strength lies in professional, on-time group and corporate
            transport in Delhi, Noida, and Gurgaon.
          </p>
          <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">
            Backed by a skilled team and a modern fleet, we craft customized
            transport solutions tailored to your needs.
          </p>
          <button className="bg-gradient-to-r from-[#3B4B96] to-[#FF5722] text-white px-6 py-3 rounded-xl text-base font-medium hover:from-[#2C3A7D] hover:to-[#E64A19] transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">
            Read More
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="mt-20 max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
        <div className=" bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300 hover:-translate-y-1 border border-orange-200">
          <h3 className="text-3xl font-bold text-orange-600">20+ Years</h3>
          <p className="mt-2 text-gray-800 text-base">Industry Experience</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition duration-300 hover:-translate-y-1 border border-orange-200">
          <h3 className="text-3xl font-bold text-orange-600">100+ Clients</h3>
          <p className="mt-2 text-gray-800 text-base">Served Across NCR</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300 hover:-translate-y-1 border border-orange-200">
          <h3 className="text-3xl font-bold text-orange-600">24/7</h3>
          <p className="mt-2 text-gray-800 text-base">Customer Support</p>
        </div>
      </div>
    </div>
  );
};

export default AntTript;
