import React from "react";

import Minivanimg from "../assets/images/Minivanimg.jpg";

const MiniPage = () => {
  return (
    <div className="text-gray-800">
      <div className="relative w-full h-[20vh] sm:h-[70vh]">
        <img
          src={Minivanimg}
          alt="Minivan"
          className="absolute inset-0 w-full h-full brightness-50 object-cover object-center"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4 z-10">
          <h1 className="text-xl sm:text-5xl font-bold leading-tight sm:mb-2 mb-1">
            Bus Hire
          </h1>
          <p className="text-xs sm:text-lg leading-none">Home &rarr; Minivan</p>
        </div>
      </div>
    </div>
  );
};

export default MiniPage;

// import React from "react";
// import { ArrowUpRight } from "lucide-react";
// import { motion } from "framer-motion";
// import Minivanimg from "../assets/images/Minivanimg.jpg";

// const BusHirePage = () => {
//   return (
//     <div className="text-gray-800 font-sans">
//       {/* 🔷 Hero Section */}
//       <div className="relative w-full h-[20vh] sm:h-[70vh] overflow-hidden rounded-b-3xl shadow-xl">
//         {/* 🔸 Background Image */}
//         <img
//           src={Minivanimg}
//           alt="Minivan"
//           className="absolute inset-0 w-full h-full object-cover brightness-50"
//         />

//         {/* 🔹 Gradient Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-0" />

//         {/* 🔸 Animated Text */}
//         <div className="relative z-10 text-center text-white px-4 flex flex-col items-center justify-center h-full">
//           <motion.h1
//             className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight drop-shadow-lg"
//             animate={{ y: [0, -10, 0] }}
//             transition={{ duration: 3, repeat: Infinity, repeatType: "loop" }}
//           >
//             Book Your Ride – Bus Hire
//           </motion.h1>

//           <motion.p
//             className="text-sm sm:text-lg md:text-xl font-medium opacity-90 mb-6"
//             animate={{ y: [0, 10, 0] }}
//             transition={{
//               duration: 3,
//               repeat: Infinity,
//               repeatType: "loop",
//               delay: 0.5,
//             }}
//           >
//             Home → Bus Hire
//           </motion.p>

//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="inline-flex items-center gap-2 px-6 py-3 border border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition duration-300 shadow-md"
//           >
//             Hire a Bus Today <ArrowUpRight size={20} />
//           </motion.button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BusHirePage;
