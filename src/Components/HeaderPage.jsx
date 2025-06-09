import React from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import unsplace1 from "../assets/images/unsplash1.jpg"; // Replace with your actual image

const BusHirePage = () => {
  return (
    <div className="text-gray-800 font-sans">
      {/* Hero Section with Motion & Background */}
      <div
        className="relative w-full h-[80vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${unsplace1})` }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

        {/* Animated Text Content */}
        <div className="relative z-10 text-center text-white px-4">
          {/* Main Heading with bounce animation */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "loop" }}
          >
            Book Your Ride – Bus Hire
          </motion.h1>

          {/* Subtext with up-down motion */}
          <motion.p
            className="text-base sm:text-lg md:text-xl font-medium opacity-90 mb-6"
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "loop",
              delay: 0.5,
            }}
          >
            Home → Bus Hire
          </motion.p>

          {/* CTA Button with new text */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-6 py-3 border border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition duration-300"
          >
            Hire a Bus Today <ArrowUpRight className="ml-2" size={20} />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default BusHirePage;
