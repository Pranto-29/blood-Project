import React from 'react';

import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
      
      {/* 404 Text */}
      <h1 className="text-8xl font-extrabold animate-bounce">404</h1>

      {/* Message */}
      <p className="text-2xl mt-4">Oops! Page not found 😢</p>

      <p className="mt-2 text-sm opacity-80">
        The page you are looking for doesn’t exist or has been moved.
      </p>

      {/* Button */}
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-white text-indigo-600 rounded-full font-semibold hover:bg-gray-200 transition duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;