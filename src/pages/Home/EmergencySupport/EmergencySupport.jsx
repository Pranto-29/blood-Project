// src/components/EmergencySupport.jsx
import React from "react";

const EmergencySupport = () => {
  return (
    <section className="bg-red-50 py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-red-600 mb-4">
          Emergency Support Available 24/7
        </h2>
        <p className="text-gray-700 text-lg sm:text-xl mb-8">
          Our dedicated support team is always ready to help with urgent requests and safety concerns.
        </p>

        {/* Hotline & Report Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="tel:+1234567890"
            className="bg-red-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-red-700 transition transform hover:scale-105"
          >
            Emergency Hotline
          </a>
          <a
            href="/security-report"
            className="border border-red-600 text-red-600 px-6 py-3 rounded-lg shadow-lg hover:bg-red-600 hover:text-white transition transform hover:scale-105"
          >
            Security Report
          </a>
        </div>
      </div>
    </section>
  );
};

export default EmergencySupport;