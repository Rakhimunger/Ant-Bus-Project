// components/Navbar.jsx
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-6 py-3 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src="/logo.png" alt="ANT Logo" className="h-10 w-auto" />
        <div className="text-orange-500 text-xl font-bold tracking-wide">
          A<span className="text-blue-600">N</span>T
        </div>
        <span className="ml-2 text-xs text-gray-600 hidden sm:block">WE MAKE TRAVEL JOYFUL</span>
      </div>

      {/* Navigation Links */}
      <ul className="hidden lg:flex space-x-6 text-sm font-medium text-gray-800">
        <li className="hover:text-blue-600 cursor-pointer">Bus Hire</li>
        <li className="hover:text-blue-600 cursor-pointer">Minivan</li>
        <li className="hover:text-blue-600 cursor-pointer">Car Hire</li>
        <li className="hover:text-blue-600 cursor-pointer">Bus Ticket</li>
        <li className="hover:text-blue-600 cursor-pointer">Bus Tour</li>
      </ul>

      {/* Action Buttons */}
      <div className="flex items-center space-x-4">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition">
          Book Now →
        </button>

        {/* Manage Booking Dropdown */}
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full flex items-center gap-1 hover:bg-blue-200"
          >
            Manage Booking <FaChevronDown className="text-xs" />
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-20">
              <ul className="text-sm text-gray-700 py-2">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Cancel Booking</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Change Travel Date</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Show My Booking</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Email / SMS</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Login / Signup</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
