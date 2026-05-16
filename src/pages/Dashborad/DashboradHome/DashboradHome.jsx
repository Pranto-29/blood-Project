

import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthContext/AuthContext";
import useAxiosSecure from "../../../houk/useAxiosSecure";
import { FaUser, FaMoneyBillWave, FaTint } from "react-icons/fa";

const DashboardHome = () => {
  const axiosSecure = useAxiosSecure();
  const { user: currentUser } = useContext(AuthContext);

  const [stats, setStats] = useState([
    { title: "Total Users", value: 0, icon: <FaUser /> },
    { title: "Total Funding", value: "$0", icon: <FaMoneyBillWave /> },
    { title: "Blood Donation Requests", value: 0, icon: <FaTint /> },
  ]);

  useEffect(() => {
    if (!currentUser) return;

    const fetchData = async () => {
      try {
        const usersRes = await axiosSecure.get("/user");
        const paymentsRes = await axiosSecure.get("/payments");
        const requestsRes = await axiosSecure.get("/requests");

        const usersData = usersRes.data;
        const paymentsData = paymentsRes.data;
        const requestsData = requestsRes.data;

        //  TOTAL FUNDING CALCULATION
        const totalFunding = paymentsData.reduce(
          (sum, p) => sum + (p.amount || 0),
          0
        );

        setStats([
          {
            title: "Total Users",
            value: usersData.length,
            icon: <FaUser />
          },
          {
            title: "Total Funding",
            value: `$${totalFunding}`,
            icon: <FaMoneyBillWave />
          },
          {
            title: "Blood Donation Requests",
            value: requestsData.length,
            icon: <FaTint />
          }
        ]);

      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [axiosSecure, currentUser]);

  return (
    <div className="p-6">
      <div className="mb-8 bg-red-100 p-6 rounded-lg shadow">
        <h1 className="text-3xl font-bold mb-2">
          Welcome to Your Dashboard
        </h1>
        <p className="text-gray-700">
          Here you can manage users, funding, and blood donation requests.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex items-center gap-4 p-6 bg-white rounded-lg shadow"
          >
            <div className="text-red-600 text-3xl">{stat.icon}</div>
            <div>
              <p className="text-gray-500">{stat.title}</p>
              <h2 className="text-2xl font-bold">{stat.value}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardHome;

// import React, { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../../../context/AuthContext/AuthContext";
// import useAxiosSecure from "../../../houk/useAxiosSecure";

// import {
//   FaUser,
//   FaMoneyBillWave,
//   FaTint,
// } from "react-icons/fa";

// const DashboardHome = () => {
//   const axiosSecure = useAxiosSecure();
//   const { user: currentUser } = useContext(AuthContext);

//   const [stats, setStats] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (!currentUser) return;

//     const fetchData = async () => {
//       try {
//         setLoading(true);

//         // API Requests
//         const usersRes = await axiosSecure.get("/user");
//         const paymentsRes = await axiosSecure.get("/payments");
//         const requestsRes = await axiosSecure.get("/requests");

//         // Data
//         const usersData = usersRes?.data || [];

//         const paymentsData = Array.isArray(paymentsRes?.data)
//           ? paymentsRes.data
//           : paymentsRes?.data?.payments || [];

//         const requestsData = Array.isArray(requestsRes?.data)
//           ? requestsRes.data
//           : requestsRes?.data?.requests || [];

//         // Total Funding
//         const totalFunding = paymentsData.reduce(
//           (sum, payment) => sum + (payment.amount || 0),
//           0
//         );

//         // Dashboard Stats
//         setStats([
//           {
//             title: "Total Donors",
//             value: usersData.length,
//             icon: <FaUser />,
//             gradient: "from-blue-500 to-indigo-600",
//           },

//           {
//             title: "Total Funding",
//             value: `৳ ${totalFunding}`,
//             icon: <FaMoneyBillWave />,
//             gradient: "from-green-500 to-emerald-600",
//           },

//           {
//             title: "Blood Requests",
//             value: requestsData.length,
//             icon: <FaTint />,
//             gradient: "from-red-500 to-pink-600",
//           },
//         ]);
//       } catch (err) {
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [axiosSecure, currentUser]);

//   return (
//     <div className="min-h-screen p-6 bg-gradient-to-br from-gray-50 via-white to-red-50">

//       {/* Welcome Section */}
//       <div className="mb-10 bg-white rounded-3xl shadow-md p-8 border border-gray-100">

//         <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
//           👋 Welcome Admin,
//           <span className="text-red-500 ml-2">
//             {currentUser?.displayName || "Admin"}
//           </span>
//         </h1>

//         <p className="text-gray-500 mt-3 text-lg">
//           Manage users, funding, and blood donation requests easily.
//         </p>

//       </div>

//       {/* Loading */}
//       {loading ? (
//         <div className="flex justify-center items-center py-20">
//           <span className="loading loading-spinner loading-lg text-red-500"></span>
//         </div>
//       ) : (
//         <>
//           {/* Statistics Cards */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">

//             {stats.map((stat, index) => (
//               <div
//                 key={index}
//                 className="relative overflow-hidden rounded-3xl bg-white p-6 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100"
//               >

//                 {/* Background Glow */}
//                 <div
//                   className={`absolute inset-0 opacity-10 bg-gradient-to-r ${stat.gradient}`}
//                 ></div>

//                 {/* Content */}
//                 <div className="relative flex items-center justify-between">

//                   {/* Left Side */}
//                   <div>

//                     <p className="text-gray-500 text-sm font-semibold uppercase tracking-wide">
//                       {stat.title}
//                     </p>

//                     <h2 className="text-4xl font-bold text-gray-800 mt-3">
//                       {stat.value}
//                     </h2>

//                   </div>

//                   {/* Icon */}
//                   <div
//                     className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white text-3xl bg-gradient-to-r ${stat.gradient} shadow-lg`}
//                   >
//                     {stat.icon}
//                   </div>

//                 </div>

//                 {/* Bottom Gradient Line */}
//                 <div
//                   className={`h-1 w-full mt-6 rounded-full bg-gradient-to-r ${stat.gradient}`}
//                 ></div>

//               </div>
//             ))}

//           </div>

//           {/* Extra Section */}
//           <div className="mt-12 bg-white rounded-3xl shadow-md p-8 border border-gray-100">

//             <h2 className="text-2xl font-bold text-gray-800 mb-3">
//               🩸 Blood Donation Management System
//             </h2>

//             <p className="text-gray-600 leading-relaxed">
//               Monitor donor activity, track funding,
//               and manage blood donation requests from
//               one powerful dashboard panel.
//             </p>

//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default DashboardHome;


