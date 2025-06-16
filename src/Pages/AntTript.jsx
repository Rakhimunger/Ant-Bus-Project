import React from "react";
import antsirimg from "../assets/images/antsirimg.jpeg";

const AntTript = () => {
  return (
    <div className="bg-white py-14 px-5 sm:px-12 lg:px-24 text-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center gap-10">
        {/* Image Section */}
        <div className="w-full sm:w-5/12 flex justify-center">
          <img
            src={antsirimg}
            alt="ANT Sir"
            className="rounded-2xl shadow-xl w-[220px] sm:w-[280px] lg:w-[320px] object-cover border-4 border-orange-300"
          />
        </div>

        {/* Text Content */}
        <div className="w-full sm:w-7/12 space-y-5">
          <h1 className="text-3xl sm:text-4xl font-bold text-orange-600 leading-tight">
            Let’s Go Together
          </h1>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-700">
            Plan Your Trip With Us
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Welcome to ANT Travels – your trusted partner in transportation
            since 2003. With years of experience, we offer safe, reliable, and
            comfortable transport services across Delhi/NCR.
          </p>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Our commitment to punctuality and customer satisfaction has made us
            a top choice for corporate & group transport in Delhi, Noida, and
            Gurgaon.
          </p>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Backed by a professional and skilled team, we ensure end-to-end
            travel solutions tailored to your needs.
          </p>
          <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-medium transition-all duration-300">
            Explore Services
          </button>
        </div>
      </div>

      {/* Highlight Section */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        <div className="p-6 bg-orange-50 rounded-xl shadow hover:shadow-md transition">
          <h3 className="text-2xl font-bold text-orange-600">20+ Years</h3>
          <p className="text-gray-600 mt-2">Industry Experience</p>
        </div>
        <div className="p-6 bg-orange-50 rounded-xl shadow hover:shadow-md transition">
          <h3 className="text-2xl font-bold text-orange-600">100+ Clients</h3>
          <p className="text-gray-600 mt-2">Served Across NCR</p>
        </div>
        <div className="p-6 bg-orange-50 rounded-xl shadow hover:shadow-md transition">
          <h3 className="text-2xl font-bold text-orange-600">24/7</h3>
          <p className="text-gray-600 mt-2">Customer Support</p>
        </div>
      </div>
    </div>
  );
};

export default AntTript;
