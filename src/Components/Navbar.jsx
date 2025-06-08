import React, { useState } from "react";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-6 py-3 flex items-center justify-between relative z-50">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src={logo} alt="ANT Logo" className="h-10 w-auto" />
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden lg:flex space-x-6 text-sm font-medium text-gray-800">
        <li>
          <Link to="/" className="hover:text-blue-600 cursor-pointer">
            Bus Hire
          </Link>
        </li>
        <li>
          <Link to="/mini-van" className="hover:text-blue-600 cursor-pointer">
            Minivan
          </Link>
        </li>
        <li>
          <Link to="/car-hire" className="hover:text-blue-600 cursor-pointer">
            Car Hire
          </Link>
        </li>
        <li>
          <Link to="/bus-ticket" className="hover:text-blue-600 cursor-pointer">
            Bus Ticket
          </Link>
        </li>
        <li>
          <Link to="/bus-tour" className="hover:text-blue-600 cursor-pointer">
            Bus Tour
          </Link>
        </li>
      </ul>

      {/* Right Side Buttons */}
      <div className="hidden lg:flex items-center space-x-4">
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
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Cancel Booking
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Change Travel Date
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Show My Booking
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Email / SMS
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Login / Signup
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Hamburger Icon */}
      <div className="lg:hidden">
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-white shadow-lg p-6 z-40">
          <div className="flex justify-between items-center mb-4">
            <img src={logo} alt="ANT Logo" className="h-10" />
            <button onClick={() => setMobileMenuOpen(false)}>
              <FaTimes size={20} />
            </button>
          </div>
          <ul className="space-y-4 text-gray-800 font-medium">
            <li>
              <Link to="/" className="hover:text-blue-600 cursor-pointer">
                Bus Hire
              </Link>
            </li>
            <li>
              <Link
                to="/mini-van"
                className="hover:text-blue-600 cursor-pointer"
              >
                Minivan
              </Link>
            </li>
            <li>
              <Link
                to="/car-hire"
                className="hover:text-blue-600 cursor-pointer"
              >
                Car Hire
              </Link>
            </li>
            <li>
              <Link
                to="/bus-ticket"
                className="hover:text-blue-600 cursor-pointer"
              >
                Bus Ticket
              </Link>
            </li>
            <li>
              <Link
                to="/bus-tour"
                className="hover:text-blue-600 cursor-pointer"
              >
                Bus Tour
              </Link>
            </li>
          </ul>

          {/* Book Now and Dropdown inside mobile menu */}
          <div className="mt-6 space-y-4">
            <button className="w-full bg-blue-600 text-white py-2 rounded-full">
              Book Now →
            </button>

            <div>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="w-full bg-blue-100 text-blue-700 py-2 rounded-full flex items-center justify-center gap-1"
              >
                Manage Booking <FaChevronDown className="text-xs" />
              </button>

              {dropdownOpen && (
                <div className="mt-2 w-full bg-white shadow-md rounded-md">
                  <ul className="text-sm text-gray-700 py-2">
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Cancel Booking
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Change Travel Date
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Show My Booking
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Email / SMS
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Login / Signup
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
