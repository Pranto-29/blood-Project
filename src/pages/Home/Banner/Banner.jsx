import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../houk/useAuth";

const Banner = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleJoin = () => {
    if (user) {
      navigate("/join-us");
    } else {
      navigate("/auth/register", { state: { from: "/join-us" } });
    }
  };

  const handleSearch = () => {
    navigate("/search");
  };

  return (
    <div className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[750px] overflow-hidden rounded-xl shadow-xl">
      {/* Background Image */}
      <img
        src="https://c7.alamy.com/comp/2D6N38T/blood-donation-t…hospital-laboratory-world-blood-donor-2D6N38T.jpg"
        alt="Blood Donation Banner"
        className="w-full h-full object-cover brightness-90"
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60 flex flex-col items-center justify-center text-center px-4">
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-4">
          Donate Blood, Save Lives
        </h1>

        {/* Subtext */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 drop-shadow">
          Join our community or search for blood donors near you
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={handleJoin}
            className="bg-red-600 hover:bg-red-700 transition duration-300 ease-in-out text-white px-6 py-3 rounded-lg shadow-lg transform hover:scale-105"
          >
            Join as a Donor
          </button>
          <button
            onClick={handleSearch}
            className="border border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition duration-300 ease-in-out px-6 py-3 rounded-lg shadow-lg transform hover:scale-105"
          >
            Search Donor
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;