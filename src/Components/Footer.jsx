import React from "react";
import logo from "../assets/images/logo.png";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#dfefff] via-[#eaf3ff] to-[#f4f9ff] text-[#1b2a4e] text-sm pt-12">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-gray-300">
        {/* Logo & About */}
        <div>
          <img src={logo} alt="ANT Logo" className="w-32 mb-4" />
          <p className="text-sm leading-relaxed text-gray-700">
            We are one of the oldest transport service providers in Delhi/NCR
            since 2003. Serving companies in Delhi, Gurgaon, & Noida with a
            skilled, dedicated team offering end-to-end solutions.
          </p>
          <div className="flex space-x-3 mt-4">
            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="bg-orange-600 hover:bg-orange-800 transition-colors p-2 rounded-full text-white shadow-md"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="text-lg text-blue-700 font-semibold mb-4">
            Our Services
          </h3>
          <ul className="space-y-2 text-sm text-gray-800">
            {[
              "Home",
              "AC Delux Bus Hire",
              "AC Luxury Bus Hire",
              "AC Super Bus Hire",
              "AC Delux Minivan Hire",
              "AC Luxury Minivan Hire",
              "Sedan / Hatchback Car Hire",
              "SUV / MUV Car Hire",
            ].map((item, idx) => (
              <li key={idx} className="hover:text-blue-500 cursor-pointer">
                › {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg text-blue-700 font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm text-gray-800">
            {[
              "Become Bus Operator",
              "About Us",
              "Contact Us",
              "Site Map",
              "Gallery",
              "Terms & Conditions",
              "Policy",
            ].map((item, idx) => (
              <li key={idx} className="hover:text-blue-500 cursor-pointer">
                › {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Address */}
        <div>
          <h3 className="text-lg text-blue-700 font-semibold mb-4">Address</h3>
          <ul className="space-y-4 text-sm text-gray-800">
            <li className="flex items-start">
              <span className="bg-orange-600 text-white p-2 rounded-full mr-3 shadow-md">
                <Phone className="w-4 h-4" />
              </span>
              <span className="pt-1">+91-1800 102 7408</span>
            </li>
            <li className="flex items-start">
              <span className="bg-orange-600 text-white p-2 rounded-full mr-3 shadow-md">
                <Mail className="w-4 h-4" />
              </span>
              <span className="pt-1">mail@anttravels.com</span>
            </li>
            <li className="flex items-start">
              <span className="bg-orange-600 text-white p-2 rounded-full mr-3 shadow-md">
                <MapPin className="w-4 h-4" />
              </span>
              <span className="pt-1">
                B-128, Transport Nagar, Sector-69,
                <br />
                Noida, 201301 (Uttar Pradesh) India
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#f44336] text-white py-4 px-4 md:px-12 flex flex-col md:flex-row justify-between items-center text-sm">
        <p className="text-center">
          © All Rights Reserved. Designed by{" "}
          <strong>A N T Soft Solution</strong>
        </p>
        <div className="flex items-center space-x-3 mt-3 md:mt-0">
          <span>We Accept</span>
          <img src="/visa.png" alt="Visa" className="h-5" />
          <img src="/mastercard.png" alt="Mastercard" className="h-5" />
          <img src="/paypal.png" alt="Paypal" className="h-5" />
          <img src="/applepay.png" alt="Apple Pay" className="h-5" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
