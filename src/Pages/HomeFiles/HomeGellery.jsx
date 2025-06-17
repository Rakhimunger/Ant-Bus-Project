import React, { useState } from "react";
import antimg from "../../assets/images/antimg.png";
import antimg2 from "../../assets/images/antimg2.png";
import antimg3 from "../../assets/images/antimg3.png";
import antimg4 from "../../assets/images/antimg4.png";
import antimg5 from "../../assets/images/antimg5.png";

const HomeGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: antimg },
    { src: antimg3 },
    { src: antimg2 }, // this one needs margin-top
    { src: antimg4 },
    { src: antimg5 },
  ];

  return (
    <div className="bg-white py-12 px-4 sm:px-8 lg:px-20">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-xl sm:text-2xl text-blue-800 font-medium">
          Make Your Tour More Pleasure
        </h2>
        <h3 className="text-3xl sm:text-4xl font-bold text-blue-900 mt-2">
          Recent Gallery
        </h3>
      </div>

      {/* Masonry Gallery */}
      <div className="columns-1 sm:columns-2 md:columns-3 gap-5 space-y-5">
        {images.map((img, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedImage(img)}
            className={`rounded-2xl break-inside-avoid overflow-hidden bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer ${
              idx === 2 ? "mt-6" : ""
            } ${idx === 4 ? "mb-16 mx-auto" : ""}`}
          >
            <img
              src={img.src}
              alt={`gallery-${idx}`}
              className="w-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="flex justify-center mt-10">
        <button className="bg-blue-900 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all text-lg font-semibold shadow-md">
          View All →
        </button>
      </div>

      {/* Fullscreen Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center px-4">
          <div className="relative max-w-5xl w-full">
            <img
              src={selectedImage.src}
              alt="Selected"
              className="w-full max-h-[90vh] object-contain rounded-xl border-4 border-white shadow-2xl"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white text-black px-3 py-1 rounded-full text-2xl hover:bg-red-600 hover:text-white transition"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeGallery;
