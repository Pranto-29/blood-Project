

import React from "react";
import { FaHeart, FaHospital, FaTint, FaUsers } from "react-icons/fa";

const Work = () => {
  return (
    <section className="bg-gradient-to-b from-red-50 to-white py-20 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-800">
            Why <span className="text-red-600">Donate Blood?</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Your small act of kindness can make a life-saving difference.
            Blood donation helps patients during emergencies, surgeries,
            and critical treatments.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

          {/* Card 1 */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 text-center">
            <div className="bg-red-100 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-5">
              <FaHeart className="text-red-600 text-2xl" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Save Lives</h3>
            <p className="text-sm text-gray-600">
              One blood donation can save up to three lives in critical situations.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 text-center">
            <div className="bg-red-100 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-5">
              <FaTint className="text-red-600 text-2xl" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Emergency Support</h3>
            <p className="text-sm text-gray-600">
              Blood is urgently needed during accidents, surgeries, and disasters.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 text-center">
            <div className="bg-red-100 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-5">
              <FaHospital className="text-red-600 text-2xl" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Support Hospitals</h3>
            <p className="text-sm text-gray-600">
              Hospitals depend on generous donors to treat patients effectively.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 text-center">
            <div className="bg-red-100 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-5">
              <FaUsers className="text-red-600 text-2xl" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Build Community</h3>
            <p className="text-sm text-gray-600">
              Join a trusted community of donors committed to saving lives.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Work;