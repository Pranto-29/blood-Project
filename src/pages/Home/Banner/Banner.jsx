// // // // // // import React from 'react';
// // // // // // import { Carousel } from 'react-responsive-carousel';
// // // // // // import "react-responsive-carousel/lib/styles/carousel.min.css";
// // // // // // import bannerImage1 from '../../../assets/banner/banner1.png';
// // // // // // import bannerImage2 from '../../../assets/banner/banner2.png';
// // // // // // import bannerImage3 from '../../../assets/banner/banner3.png';
// // // // // //  // requires a loader
// // // // // // const Banner = () => {
// // // // // //     return (
// // // // // //         <Carousel
// // // // // //         autoPlay={true}
// // // // // //         infiniteLoop={true}
// // // // // //         interval={1000}
// // // // // //         >
// // // // // //                 <div>

// // // import { useNavigate } from "react-router-dom";
// // // import useAuth from "../../../houk/useAuth";

// // // const Banner = () => {
// // //   const { user } = useAuth(); // Login check
// // //   const navigate = useNavigate();

// // //   const handleJoin = () => {
// // //     if (user) {

// // //       navigate("/join-us");
// // //     } else {

// // //       navigate("/auth/register", { state: { from: "/join-us" } });
// // //     }
// // //   };

// // //   const handleSearch = () => {
// // //     navigate("/search");
// // //   };

// // //   return (
// // //     <div className="bg-red-50 py-20 text-center">
// // //       <h1 className="text-4xl font-bold text-red-600">
// // //         Donate Blood, Save Lives
// // //       </h1>

// // //       <p className="mt-4 text-gray-600 text-lg">
// // //         Join our community or search for blood donors near you
// // //       </p>

// // //       <div className="mt-8 flex justify-center gap-4">
// // //         <button
// // //           onClick={handleJoin}
// // //           className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition"
// // //         >
// // //           Join as a Donor
// // //         </button>

// // //         <button
// // //           onClick={handleSearch}
// // //           className="border border-red-600 text-red-600 px-6 py-3 rounded-lg hover:bg-red-600 hover:text-white transition"
// // //         >
// // //           Search Donors
// // //         </button>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Banner;

// // // src/pages/Home/Banner/Banner.jsx
// // import React from "react";
// // import { useNavigate } from "react-router-dom";
// // import useAuth from "../../../houk/useAuth";

// // const Banner = () => {
// //   const { user } = useAuth(); // check logged in user
// //   const navigate = useNavigate();

// //   const handleJoin = () => {
// //     if (user) {
// //       navigate("/join-us");
// //     } else {
// //       navigate("/auth/register", { state: { from: "/join-us" } });
// //     }
// //   };

// //   const handleSearch = () => {
// //     navigate("/search");
// //   };

// //   return (
// //     <div className="relative w-full h-[500px] overflow-hidden">
// //       {/* Background Video */}
// //       <video
// //         autoPlay
// //         loop
// //         muted
// //         className="w-full h-full object-cover"
// //       >
// //         <source src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD…IgCIiAIiIAiIgCIiAfJ9iIAn2IgCIiAIiIAiIgCIiAIiIB//Z" type="video/mp4" />
// //         Your browser does not support the video tag.
// //       </video>

// //       {/* Overlay */}
// //       <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
// //         <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
// //           Donate Blood, Save Lives
// //         </h1>
// //         <p className="text-lg md:text-xl text-gray-200 mb-6">
// //           Join our community or search for blood donors near you
// //         </p>

// //         <div className="flex flex-col sm:flex-row gap-4">
// //           <button
// //             onClick={handleJoin}
// //             className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition"
// //           >
// //             Join as a Donor
// //           </button>
// //           <button
// //             onClick={handleSearch}
// //             className="border border-red-600 text-red-600 px-6 py-3 rounded-lg hover:bg-red-600 hover:text-white transition"
// //           >
// //             Search Donors
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Banner;

// // src/pages/Home/Banner/Banner.jsx
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
//     <div className="relative w-full h-[500px] flex items-center justify-center overflow-hidden rounded-xl shadow-lg">
//       {/* Background Image from Unsplash */}
//       <img
//         src="	https://c7.alamy.com/comp/2D6N38T/blood-donation-t…hospital-laboratory-world-blood-donor-2D6N38T.jpg"
//         alt="Blood Donation Banner"
//         className="w-full h-full object-cover"
//       />

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
//         <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
//           Donate Blood, Save Lives
//         </h1>
//         <p className="text-lg md:text-xl text-gray-200 mb-6">
//           Join our community or search for blood donors near you
//         </p>

//         <div className="flex flex-col sm:flex-row gap-4">
//           <button
//             onClick={handleJoin}
//             className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition"
//           >
//             Join as a Donor
//           </button>
//           <button
//             onClick={handleSearch}
//             className="border border-red-600 text-red-600 px-6 py-3 rounded-lg hover:bg-red-600 hover:text-white transition"
//           >
//             Search Donors
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banner;

// src/pages/Home/Banner/Banner.jsx
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
            Search Donors
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;