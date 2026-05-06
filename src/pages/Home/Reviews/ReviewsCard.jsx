import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa6';

const ReviewsCard = ({ story }) => {
  const { testimonial, name, role, location, bloodGroup, photoURL, featured } = story;

  return (
    <div
      className={`w-80 bg-white rounded-xl shadow-lg p-6 transition-transform duration-300 hover:scale-105 ${
        featured ? "border-2 border-red-500" : ""
      }`}
    >
      <FaQuoteLeft className="text-3xl text-gray-400 mb-3" />
      <p className="text-gray-700 leading-relaxed mb-4">{testimonial}</p>

      <div className="flex items-center gap-3 mt-4">
        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-300 hover:bg-blue-300">
          <img className="w-full h-full object-cover" src={photoURL} alt={name} />
        </div>
        <div className="text-left">
          <h3 className="font-semibold text-gray-900">{name}</h3>
          <p className="text-sm text-gray-500">{role}</p>
          <p className="text-sm text-gray-500">{location}</p>
          <p className="text-sm text-gray-500 font-semibold">Blood Group: {bloodGroup}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewsCard;