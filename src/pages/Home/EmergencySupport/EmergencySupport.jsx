import React from "react";
import {
  FaPhoneAlt,
  FaExclamationTriangle,
  FaClock,
  FaAmbulance,
} from "react-icons/fa";

const EmergencySupport = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-red-300 via-red-500 to-pink-600 relative overflow-hidden">
      {/* Background Blur */}
      <div className="absolute w-72 h-72 bg-white/10 rounded-full -top-24 -left-20 blur-3xl"></div>
      <div className="absolute w-96 h-96 bg-white/10 rounded-full -bottom-32 -right-20 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        {/* Badge */}
        <span className="inline-block bg-white/20 backdrop-blur-md text-white px-6 py-2 rounded-full font-semibold">
          🚨 Emergency Assistance
        </span>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mt-6">
          Emergency Support Available 24/7
        </h2>

        <p className="mt-6 text-red-100 text-lg max-w-3xl mx-auto leading-8">
          Our emergency response team is available around the clock to help
          patients, blood donors, and hospitals during urgent situations.
        </p>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mt-14">
          <div className="bg-white/15 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
            <FaClock className="text-5xl text-white mx-auto mb-5" />
            <h3 className="text-3xl font-bold text-white">2 Min</h3>
            <p className="text-red-100 mt-2">Average Emergency Response</p>
          </div>

          <div className="bg-white/15 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
            <FaAmbulance className="text-5xl text-white mx-auto mb-5" />
            <h3 className="text-3xl font-bold text-white">24/7</h3>
            <p className="text-red-100 mt-2">Emergency Blood Support</p>
          </div>

          <div className="bg-white/15 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
            <FaExclamationTriangle className="text-5xl text-white mx-auto mb-5" />
            <h3 className="text-3xl font-bold text-white">100%</h3>
            <p className="text-red-100 mt-2">Priority Emergency Cases</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-14 flex flex-col sm:flex-row justify-center gap-6">
          <a
            href="tel:+8801712345678"
            className="inline-flex items-center gap-3 bg-white text-red-600 font-bold px-8 py-4 rounded-2xl shadow-xl hover:scale-105 transition duration-300"
          >
            <FaPhoneAlt />
            Emergency Hotline
          </a>

          <a
            href="/security-report"
            className="inline-flex items-center gap-3 border-2 border-white text-white px-8 py-4 rounded-2xl font-bold hover:bg-white hover:text-red-600 transition duration-300"
          >
            <FaExclamationTriangle />
            Report an Issue
          </a>
        </div>
      </div>
    </section>
  );
};

export default EmergencySupport;
