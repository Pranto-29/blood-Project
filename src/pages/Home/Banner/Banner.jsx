// import React from "react";
// import { useNavigate } from "react-router-dom";
// import useAuth from "../../../houk/useAuth";

// const Banner = () => {
//   const { user } = useAuth();
//   const navigate = useNavigate();

//   const handleJoin = () => {
//     if (user) {
//       navigate("/join-us");
//     } else {
//       navigate("/auth/register", { state: { from: "/join-us" } });
//     }
//   };

//   const handleSearch = () => {
//     navigate("/search");
//   };

//   return (
//     <div className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[750px] overflow-hidden rounded-xl shadow-xl">
//       {/* Background Image */}
//       <img
//         src="https://c7.alamy.com/comp/2D6N38T/blood-donation-t…hospital-laboratory-world-blood-donor-2D6N38T.jpg"
//         alt="Blood Donation Banner"
//         className="w-full h-full object-cover brightness-90"
//       />

//       {/* Overlay Gradient */}
//       <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60 flex flex-col items-center justify-center text-center px-4">
//         {/* Heading */}
//         <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-4">
//           Donate Blood, Save Lives
//         </h1>

//         {/* Subtext */}
//         <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 drop-shadow">
//           Join our community or search for blood donors near you
//         </p>

//         {/* Buttons */}
//         <div className="flex flex-col sm:flex-row gap-4">
//           <button
//             onClick={handleJoin}
//             className="bg-red-600 hover:bg-red-700 transition duration-300 ease-in-out text-white px-6 py-3 rounded-lg shadow-lg transform hover:scale-105"
//           >
//             Join as a Donor
//           </button>
//           <button
//             onClick={handleSearch}
//             className="border border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition duration-300 ease-in-out px-6 py-3 rounded-lg shadow-lg transform hover:scale-105"
//           >
//             Search Donor
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banner;

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
      navigate("/auth/register", {
        state: { from: "/join-us" },
      });
    }
  };

  const handleSearch = () => {
    navigate("/search");
  };

  return (
    <section className="relative h-[90vh] md:h-screen overflow-hidden">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&w=1600&q=80"
        alt="Blood Donation"
        className="absolute inset-0 w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-[8000ms]"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-red-950/60 to-black/70"></div>

      {/* Decorative Blur */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-red-500/20 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-red-600/20 rounded-full blur-[120px]"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-5">
        <div className="max-w-4xl text-center backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl px-8 py-12 shadow-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/30 text-red-200 px-5 py-2 rounded-full mb-6">
            ❤️ Every Donation Can Save Up To 3 Lives
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white">
            Donate Blood,
            <span className="block text-red-500 mt-2">
              Become Someone's Hero
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-gray-200 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Join thousands of voluntary blood donors and help save lives. Find
            nearby donors instantly or register yourself to become a lifesaver
            today.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">
            <button
              onClick={handleJoin}
              className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-xl shadow-xl hover:shadow-red-500/40 transition-all duration-300 hover:-translate-y-1"
            >
              Join as a Donor
            </button>

            <button
              onClick={handleSearch}
              className="border-2 border-white text-white hover:bg-white hover:text-red-600 font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:-translate-y-1"
            >
              Search Donor
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/20">
            <div>
              <h2 className="text-3xl font-bold text-red-500">10K+</h2>
              <p className="text-gray-300 text-sm mt-1">Registered Donors</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-red-500">5K+</h2>
              <p className="text-gray-300 text-sm mt-1">Lives Saved</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-red-500">64</h2>
              <p className="text-gray-300 text-sm mt-1">District Coverage</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white dark:from-gray-900 to-transparent"></div>
    </section>
  );
};

export default Banner;