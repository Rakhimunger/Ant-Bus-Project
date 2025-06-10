// import React from "react";
// import Slider from "react-slick";
// import { motion } from "framer-motion";
// import Mobifest from "../assets/images/Mobifest.jpg";

// const TrendingPage = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 800,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: false,
//     arrows: false,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: { slidesToShow: 2 },
//       },
//       {
//         breakpoint: 640,
//         settings: { slidesToShow: 1 },
//       },
//     ],
//     appendDots: (dots) => (
//       <div>
//         <ul className="mt-6 flex justify-center gap-3">{dots}</ul>
//       </div>
//     ),
//     customPaging: () => (
//       <div className="w-3 h-3 rounded-full bg-gray-300 hover:bg-[#4450A0] transition-colors duration-300"></div>
//     ),
//   };

//   const offers = [Mobifest, Mobifest, Mobifest];

//   return (
//     <div className="py-12 px-4 sm:px-8 bg-white text-center relative">
//       {/* Header */}
//       <div className="max-w-5xl mx-auto mb-8">
//         <motion.h3
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-2xl sm:text-3xl text-[#4450A0] font-semibold"
//           style={{ fontFamily: "'Dancing Script', cursive" }}
//         >
//           Discover the Hottest Deals of the Season
//         </motion.h3>

//         <motion.h2
//           initial={{ opacity: 0, y: -10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2 }}
//           className="text-3xl sm:text-4xl font-bold text-[#2B3A67] mt-2"
//         >
//           Trending Offers
//         </motion.h2>
//       </div>

//       {/* Slider */}
//       <Slider {...settings}>
//         {offers.map((img, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3 }}
//             className="px-3"
//           >
//             <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300">
//               <img
//                 src={img}
//                 alt={`Offer ${index + 1}`}
//                 className="w-full h-auto object-cover"
//               />
//             </div>
//           </motion.div>
//         ))}
//       </Slider>

//       {/* View All Button */}
//       <motion.div
//         initial={{ opacity: 0, y: 10 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.8 }}
//         className="mt-10"
//       >
//         <button className="text-white bg-[#4450A0] px-6 py-2 rounded-full text-lg font-medium hover:bg-[#2d357d] transition-all duration-300 shadow-md">
//           View All →
//         </button>
//       </motion.div>
//     </div>
//   );
// };

// export default TrendingPage;
