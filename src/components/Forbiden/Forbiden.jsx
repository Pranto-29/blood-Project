

import React from "react";
import { Link } from "react-router-dom";

const Forbidden = ({ message }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-base-200 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 text-center max-w-md w-full">
        
        {/* Icon */}
        <div className="text-6xl mb-4">🚫</div>

        {/* Title */}
        <h1 className="text-4xl font-bold text-red-600">
          403 Forbidden
        </h1>

        {/* Message */}
        <p className="text-gray-600 mt-4">
          {message || "আপনার এই পেজে প্রবেশের অনুমতি নেই।"}
        </p>

        {/* Button */}
        <Link
          to="/"
          className="inline-block mt-6 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-focus transition"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default Forbidden;