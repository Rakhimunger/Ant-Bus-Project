import React from "react";

const AntTript = () => {
  return (
    <div className="bg-white py-10 px-4 sm:px-6 md:px-10 lg:px-20 text-gray-800">
      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Image Section */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-4">
            <img
              src="src/assets/images/antimg3.png"
              alt="ANT Bus"
              className="rounded-xl shadow-lg w-full h-[160px] sm:h-[200px] md:h-[220px] object-cover border-4 border-orange-300 hover:scale-105 transition duration-300"
            />
            <img
              src="src/assets/images/antimg.png"
              alt="ANT Group"
              className="rounded-xl shadow-lg w-full h-[160px] sm:h-[200px] md:h-[220px] object-cover border-4 border-orange-300 hover:scale-105 transition duration-300"
            />
          </div>
          <img
            src="src/assets/images/antsirimg.jpeg"
            alt="ANT Sir"
            className="rounded-xl shadow-xl w-full h-full object-cover border-4 border-orange-300 hover:scale-105 transition duration-300"
          />
        </div>

        {/* Text Section */}
        <div className="space-y-4 mt-6 lg:mt-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-800">
            Let’s Go Together
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-black">
            Plan Your Trip With Us
          </h2>
          <p className="text-black text-sm sm:text-base md:text-lg leading-relaxed">
            Welcome to{" "}
            <span className="font-semibold text-blue-800">ANT Travels</span> —
            your trusted partner in transportation since 2003. We provide
            reliable, safe, and comfortable transport services across Delhi/NCR.
          </p>
          <p className="text-black text-sm sm:text-base md:text-lg leading-relaxed">
            We specialize in punctual, professional corporate and group
            transport services across Delhi, Noida, and Gurgaon.
          </p>
          <p className="text-black text-sm sm:text-base md:text-lg leading-relaxed">
            Our trained team and modern fleet are here to deliver customized
            solutions just for you.
          </p>
          <button className="bg-gradient-to-r from-[#3B4B96] to-[#FF5722] text-white px-4 py-2 sm:px-6 sm:py-2.5 rounded-xl text-sm sm:text-base font-medium hover:from-[#2C3A7D] hover:to-[#E64A19] transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
            Read More
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="mt-16 max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
        <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition duration-300 hover:-translate-y-1">
          <h3 className="text-2xl sm:text-3xl font-bold text-orange-600">
            20+ Years
          </h3>
          <p className="mt-2 text-black text-sm sm:text-base">
            Industry Experience
          </p>
        </div>
        <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition duration-300 hover:-translate-y-1">
          <h3 className="text-2xl sm:text-3xl font-bold text-orange-600">
            100+ Clients
          </h3>
          <p className="mt-2 text-black text-sm sm:text-base">
            Served Across NCR
          </p>
        </div>
        <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition duration-300 hover:-translate-y-1">
          <h3 className="text-2xl sm:text-3xl font-bold text-orange-600">
            24/7
          </h3>
          <p className="mt-2 text-black text-sm sm:text-base">
            Customer Support
          </p>
        </div>
      </div>
    </div>
  );
};

export default AntTript;
