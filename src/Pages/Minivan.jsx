import React from "react";
import { ArrowRight } from "lucide-react";
import minivan from "../assets/images/minivan.png";

const buses = [
  {
    title: "AC Delux Minivan 49 Seater (2+2)",
    city: "Delhi NCR",
    localRun: "4 Hours 40 km",
    localPrice: "₹14200/-",
    outstationPrice: "₹14200/-",
    image: minivan,
  },
  {
    title: "AC Delux Minivan 49 Seater (2+2)",
    city: "Delhi NCR",
    localRun: "4 Hours 40 km",
    localPrice: "₹14200/-",
    outstationPrice: "₹14200/-",
    image: minivan,
  },
  {
    title: "AC Delux Minivan 49 Seater (2+2)",
    city: "Delhi NCR",
    localRun: "4 Hours 40 km",
    localPrice: "₹14200/-",
    outstationPrice: "₹14200/-",
    image: minivan,
  },
  {
    title: "AC Delux Minivan 49 Seater (2+2)",
    city: "Delhi NCR",
    localRun: "4 Hours 40 km",
    localPrice: "₹14200/-",
    outstationPrice: "₹14200/-",
    image: minivan,
  },
  {
    title: "AC Delux Minivan 49 Seater (2+2)",
    city: "Delhi NCR",
    localRun: "4 Hours 40 km",
    localPrice: "₹14200/-",
    outstationPrice: "₹14200/-",
    image: minivan,
  },
  {
    title: "AC Delux Minivan 49 Seater (2+2)",
    city: "Delhi NCR",
    localRun: "4 Hours 40 km",
    localPrice: "₹14200/-",
    outstationPrice: "₹14200/-",
    image: minivan,
  },
  {
    title: "AC Delux Minivan 49 Seater (2+2)",
    city: "Delhi NCR",
    localRun: "4 Hours 40 km",
    localPrice: "₹14200/-",
    outstationPrice: "₹14200/-",
    image: minivan,
  },
  {
    title: "AC Delux Minivan 49 Seater (2+2)",
    city: "Delhi NCR",
    localRun: "4 Hours 40 km",
    localPrice: "₹14200/-",
    outstationPrice: "₹14200/-",
    image: minivan,
  },
  {
    title: "AC Delux Minivan 49 Seater (2+2)",
    city: "Delhi NCR",
    localRun: "4 Hours 40 km",
    localPrice: "₹14200/-",
    outstationPrice: "₹14200/-",
    image: minivan,
  },
  {
    title: "AC Delux Minivan 49 Seater (2+2)",
    city: "Delhi NCR",
    localRun: "4 Hours 40 km",
    localPrice: "₹14200/-",
    outstationPrice: "₹14200/-",
    image: minivan,
  },
  {
    title: "AC Delux Minivan 49 Seater (2+2)",
    city: "Delhi NCR",
    localRun: "4 Hours 40 km",
    localPrice: "₹14200/-",
    outstationPrice: "₹14200/-",
    image: minivan,
  },
  {
    title: "AC Delux Minivan 49 Seater (2+2)",
    city: "Delhi NCR",
    localRun: "4 Hours 40 km",
    localPrice: "₹14200/-",
    outstationPrice: "₹14200/-",
    image: minivan,
  },
];

const Minivan = ({
  title,
  city,
  localRun,
  localPrice,
  outstationPrice,
  image,
}) => (
  <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden transition duration-300 hover:shadow-2xl hover:scale-[1.02]">
    <img
      src={image}
      alt={title}
      className="h-52 w-full object-cover transform -scale-x-100"
    />
    <div className="p-5 space-y-2 text-sm sm:text-base flex flex-col items-center sm:items-start text-center sm:text-left">
      <h3 className="text-xl font-bold text-blue-900">{title}</h3>
      <p>
        <span className="font-medium">City :</span>{" "}
        <span className="text-orange-600 font-bold">{city}</span>
      </p>
      <p>
        <span className="font-medium">Local Run starting from:</span>
        <br />
        <span className="text-blue-900 font-semibold">
          {localRun} : {localPrice}
        </span>
      </p>
      <p>
        <span className="font-medium">Outstation Run starting from:</span>
        <br />
        <span className="text-blue-900 font-semibold">
          Per km : {outstationPrice}
        </span>
      </p>
      <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-3 pt-4 w-full">
        <button className="flex items-center gap-1 text-white bg-blue-800 px-4 py-2 rounded-full font-semibold hover:bg-blue-900 transition">
          Details <ArrowRight size={18} />
        </button>
        <button className="flex items-center gap-1 text-white bg-blue-800 px-4 py-2 rounded-full font-semibold hover:bg-blue-900 transition">
          Book Now <ArrowRight size={18} />
        </button>
      </div>
    </div>
  </div>
);

export default function BusList() {
  return (
    <div className="bg-gradient-to-br from-white via-blue-50 to-blue-100 min-h-screen px-4 py-10 sm:px-6 lg:px-20">
      <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-blue-900 mb-10">
        Our Available Buses
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {buses.map((bus, index) => (
          <Minivan key={index} {...bus} />
        ))}
      </div>
    </div>
  );
}
