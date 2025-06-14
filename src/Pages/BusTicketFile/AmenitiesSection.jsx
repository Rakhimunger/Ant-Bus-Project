import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import {
  FaToilet,
  FaWater,
  FaCamera,
  FaChargingStation,
  FaBed,
  FaBook,
  FaUserTie,
  FaPhoneAlt,
} from "react-icons/fa";
import { GiPillow } from "react-icons/gi";
import { MdAirlineSeatReclineExtra } from "react-icons/md";

// Amenities Data
const amenities = [
  { icon: <FaCamera size={44} className="text-blue-500" />, label: "CCTV" },
  { icon: <FaToilet size={44} className="text-pink-500" />, label: "Toilet" },
  {
    icon: <FaWater size={44} className="text-cyan-500" />,
    label: "Water Bottle",
  },
  {
    icon: <MdAirlineSeatReclineExtra size={44} className="text-yellow-500" />,
    label: "Seat Cover",
  },
  {
    icon: <FaPhoneAlt size={44} className="text-red-500" />,
    label: "Emergency Contact",
  },
  {
    icon: <FaChargingStation size={44} className="text-green-600" />,
    label: "Charging Point",
  },
  { icon: <FaBed size={44} className="text-purple-500" />, label: "Blankets" },
  {
    icon: <FaBook size={44} className="text-amber-500" />,
    label: "Reading Light",
  },
  { icon: <GiPillow size={44} className="text-indigo-500" />, label: "Pillow" },
  {
    icon: <FaUserTie size={44} className="text-rose-500" />,
    label: "Tour Guide",
  },
];

const AmenitiesSection = () => {
  return (
    <div className="bg-gradient-to-b from-white via-blue-50 to-white py-16 px-4 text-center">
      <p className="text-lg sm:text-xl text-indigo-600 font-bold mb-2">
        Amenities
      </p>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-800 mb-12">
        What We Offer for Your Comfort
      </h2>

      <Swiper
        slidesPerView={1}
        spaceBetween={24}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        breakpoints={{
          480: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        modules={[Pagination, Autoplay]}
        className="w-full max-w-6xl mx-auto pb-24"
      >
        {amenities.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white h-52 sm:h-56 md:h-64 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 sm:p-8 flex flex-col items-center justify-center gap-4 hover:scale-105 group">
              <div className="transform transition-transform duration-500 group-hover:rotate-12">
                {item.icon}
              </div>
              <p className="text-base sm:text-lg  text-black font-bold group-hover:text-blue-800 transition-all">
                {item.label}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom bullet styles */}
      <style>{`
        .swiper-pagination-bullets {
          bottom: -40px !important;
        }
        .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #3B4B96;
          opacity: 0.4;
          border-radius: 9999px;
          margin: 0 6px !important;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
          background: #FF5722;
          transform: scale(1.2);
        }
      `}</style>
    </div>
  );
};

export default AmenitiesSection;
