<<<<<<< HEAD


// // export default DashboardHome;
// import React, { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../../../context/AuthContext/AuthContext";
// import useAxiosSecure from "../../../houk/useAxiosSecure";
// import { FaUser, FaMoneyBillWave, FaTint } from "react-icons/fa";


// const DashboardHome = () => {
//   const axiosSecure = useAxiosSecure();
//   const { user: currentUser } = useContext(AuthContext); // avoid name conflict
//   const [stats, setStats] = useState([
//     { title: "Total Users", value: 0, icon: <FaUser /> },
//     { title: "Total Funding", value: "$0", icon: <FaMoneyBillWave /> },
//     { title: "Blood Donation Requests", value: 0, icon: <FaTint /> },
//   ]);
//   const totalFunding = paymentsData.reduce((sum, p) => {
//   return sum + (p.amount || 0);
// }, 0);

//   useEffect(() => {
//     if (!currentUser) return;

//     axiosSecure.get("/user")
//       .then(res => {
//         const usersData = res.data;
//         // Update stats dynamically based on fetched data
//         setStats([
//           { title: "Total Users", value: usersData.length, icon: <FaUser /> },
//           { title: "Total Funding", value: "userDate", icon: <FaMoneyBillWave /> }, 
//           { title: "Blood Donation Requests", value: 75, icon: <FaTint /> }, 
//         ]);
//       })
//       .catch(err => console.error(err));
//   }, [axiosSecure, currentUser]);

//   return (
//     <div className="p-6">
//       {/* Welcome Section */}
//       <div className="mb-8 bg-red-100 p-6 rounded-lg shadow">
//         <h1 className="text-3xl font-bold mb-2">Welcome to Your Dashboard</h1>
//         <p className="text-gray-700">
//           Here you can manage users, funding, and blood donation requests.
//         </p>
//       </div>

//       {/* Stats Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {stats.map((stat, index) => (
//           <div
//             key={index}
//             className="flex items-center gap-4 p-6 bg-white rounded-lg shadow hover:shadow-md transition"
//           >
//             <div className="text-red-600 text-3xl">{stat.icon}</div>
//             <div>
//               <p className="text-gray-500">{stat.title}</p>
//               <h2 className="text-2xl font-bold">{stat.value}</h2>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default DashboardHome;


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


=======
import React from 'react';

const DashboradHome = () => {
    return (
        <div>
            hiewjkrf
        </div>
    );
};

export default DashboradHome;
>>>>>>> b616efc448974e0ec8e467f018fc2318782d78fc
