import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Homeimg from "../assets/images/Homeimg.jpg";

const animatedLines = [
  ["Let's make your best", "trip with us"],
  ["Explore beauty of the", "whole world"],
  ["Natural Wonder of", "the world"],
];

const HomePage = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % animatedLines.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative font-[Poppins] w-full h-[50vh] sm:h-[70vh] md:h-[80vh] overflow-hidden">
      {/* Background Image */}
      <img
        src={Homeimg}
        alt="Home Background"
        className="absolute inset-0 w-full h-full object-contain sm:object-cover object-center"
      />

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Animated Content */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-start px-4 sm:px-10 md:px-20 text-white">
        <div className="text-left max-w-[700px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.9 }}
              className="space-y-1 sm:space-y-3"
            >
              <h1 className="text-sm sm:text-2xl italic font-light drop-shadow">
                Get unforgettable pleasure with us
              </h1>
              <div className="text-xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight drop-shadow-xl">
                {animatedLines[index][0]} <br /> {animatedLines[index][1]}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
