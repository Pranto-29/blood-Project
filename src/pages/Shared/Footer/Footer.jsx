
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Logos from "../../../components/Logos";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Logo / About */}
        <div>
          <h2 className="text-2xl font-bold text-blue mb-5 text-blue-300">
            <Logos></Logos>
          </h2>
          <p className="text-sm">
            A blood donation platform to connect donors with people in need.
            Donate blood, save lives.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-red-500">Home</Link></li>
            <li><Link to="/register" className="hover:text-red-500">Join as Donor</Link></li>
            <li><Link to="/search" className="hover:text-red-500">Search Donors</Link></li>
            <li><Link to="/contact" className="hover:text-red-500">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Contact
          </h3>
          <p className="flex items-center mb-2">
            <FaPhoneAlt className="mr-2 text-red-500" />
            +880 1720932903
          </p>
          <p className="flex items-center">
            <FaEnvelope className="mr-2 text-red-500" />
            support@bloodDonation.com
          </p>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Follow Us
          </h3>
          <div className="flex gap-4 text-xl">
            <FaFacebook className="hover:text-red-500 cursor-pointer" />
            <FaTwitter className="hover:text-red-500 cursor-pointer" />
            <SiGmail className="hover:text-red-500 cursor-pointer" />
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-10 py-4 text-center text-sm">
        © {new Date().getFullYear()} LifeDrof. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
