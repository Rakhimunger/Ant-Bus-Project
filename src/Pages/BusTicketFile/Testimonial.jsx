import React from "react";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";

import antbus from "../../assets/images/antbus.jpg";

const testimonials = [
  {
    name: "Alex Jordan",
    role: "Traveller",
    img: antbus,
    message:
      "We booked our Char Dham Yatra with ANT Travels and the experience was divine! Clean buses, polite staff, and timely service. Highly recommended!",
  },
  {
    name: "Maria Doe",
    role: "Traveller",
    img: antbus,
    message:
      "I traveled to Vaishno Devi with my family. ANT Travels made it smooth and luxurious. Truly a comfortable journey experience.",
  },
  {
    name: "Ramesh Patel",
    role: "Yatra Seeker",
    img: antbus,
    message:
      "Kedarnath trip was unforgettable. Every small detail from ANT Travels was well organized. Great team, great vibes!",
  },
  {
    name: "Priya Sharma",
    role: "Frequent Traveller",
    img: antbus,
    message:
      "Stress-free trips every time with ANT Travels. Their hospitality, hygiene, and comfort are unmatched.",
  },
];

const Testimonial = () => {
  return (
    <section className="bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white py-12 px-3 sm:px-6 md:px-12 font-sans relative overflow-hidden">
      <div className="text-center mb-10 sm:mb-12">
        <h3 className="text-xs sm:text-sm text-indigo-400 uppercase tracking-wider">
          Testimonials
        </h3>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white drop-shadow-xl">
          ❤️ What Our Travellers Say
        </h2>
        <p className="text-slate-400 mt-2 sm:mt-4 max-w-lg mx-auto text-sm sm:text-base">
          Real voices. Real journeys. Rated with satisfaction and heartfelt
          smiles.
        </p>
      </div>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Autoplay, EffectCoverflow]}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        loop={true}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        effect="coverflow"
        coverflowEffect={{
          rotate: 20,
          stretch: 0,
          depth: 80,
          modifier: 2.5,
          slideShadows: true,
        }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 1.2 },
          1024: { slidesPerView: 1.5 },
        }}
        className="max-w-sm sm:max-w-xl md:max-w-3xl mx-auto"
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 sm:p-6 shadow-xl transition-transform duration-300 hover:scale-[1.02] hover:shadow-indigo-500/50">
              {/* Avatar */}
              <div className="flex justify-center mb-3">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden ring-4 ring-indigo-500 shadow-lg">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Name + Role */}
              <h4 className="text-lg sm:text-xl font-semibold text-indigo-300 text-center">
                {item.name}
              </h4>
              <p className="text-[11px] sm:text-xs text-slate-400 text-center mb-3 uppercase tracking-wide">
                {item.role}
              </p>

              {/* Message */}
              <p className="text-slate-200 text-center italic text-sm sm:text-base leading-snug">
                “{item.message}”
              </p>

              {/* Stars */}
              <div className="flex justify-center mt-4 text-yellow-400">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <FaStar key={i} size={14} />
                  ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;
