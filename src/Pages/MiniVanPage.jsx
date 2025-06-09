import React from "react";
import Minivan from "../Pages/Minivan";
import Minivanimg from "../assets/images/Minivanimg.jpg";
import BookBusHire from "./BookBusHire";

const MiniVanPage = () => {
  return (
    <div className="text-gray-800">
      {/* ✅ Hero Section */}
      <div className="relative w-full h-[50vh] sm:h-[70vh] overflow-hidden">
        <img
          src={Minivanimg}
          alt="Minivan"
          className="absolute inset-0 w-full h-full object-contain sm:object-cover object-center brightness-50"
        />

        {/* ✅ Text Overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4 z-10">
          <h1 className="text-xl sm:text-5xl font-bold leading-tight sm:mb-2 mb-1">
            Minivan
          </h1>
          <p className="text-xs sm:text-lg leading-none">Home &rarr; Minivan</p>
        </div>
      </div>

      <Minivan />
      <BookBusHire />
    </div>
  );
};

export default MiniVanPage;
