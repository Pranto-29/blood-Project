




// import React, { useEffect, useState, useContext } from "react";
// import useAxiosSecure from "../../../houk/useAxiosSecure";
// import { AuthContext } from "../../../context/AuthContext/AuthContext";
// import { FaUser, FaMoneyBillWave, FaTint } from "react-icons/fa";

// const AdminDashboardHome = () => {
//   const axiosSecure = useAxiosSecure();
//   const { user } = useContext(AuthContext);

//   const [stats, setStats] = useState([]);

//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);

//         const usersRes = await axiosSecure.get("/user");
//         const requestsRes = await axiosSecure.get("/requests");
//         const paymentsRes = await axiosSecure.get("/payments");

//         const users = usersRes.data || [];

//         const requests = Array.isArray(requestsRes.data)
//           ? requestsRes.data
//           : requestsRes.data?.request || [];

//         const payments = paymentsRes.data?.payments || paymentsRes.data || [];

//         const totalFunding = payments.reduce(
//           (sum, p) => sum + (p.amount || 0),
//           0
//         );

//         setStats([
//           {
//             title: "Total Users",
//             value: users.length,
//             icon: <FaUser />,
//             color: "from-blue-500 to-indigo-600",
//           },
//           {
//             title: "Total Funding",
//             value: `৳${totalFunding}`,
//             icon: <FaMoneyBillWave />,
//             color: "from-green-500 to-emerald-600",
//           },
//           {
//             title: "Total Requests",
//             value: requests.length,
//             icon: <FaTint />,
//             color: "from-red-500 to-pink-600",
//           },
//         ]);
//       } catch (error) {
//         console.log(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [axiosSecure]);

//   return (
//     <div className="p-6 min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">

//       {/* Welcome Section */}
//       <div className="mb-8">
//         <h1 className="text-3xl font-bold text-gray-800">
//           👋 Welcome Admin,{" "}
//           <span className="text-red-500">
//             {user?.displayName}
//           </span>
//         </h1>
//         <p className="text-gray-500 mt-1">
//           Here’s your system overview
//         </p>
//       </div>

//       {/* Loading */}
//       {loading && (
//         <p className="text-center text-gray-500">
//           Loading dashboard...
//         </p>
//       )}

//       {/* Stats Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

//         {stats.map((s, i) => (
//           <div
//             key={i}
//             className="relative overflow-hidden bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6"
//           >

//             {/* background glow */}
//             <div className={`absolute inset-0 opacity-10 bg-gradient-to-r ${s.color}`}></div>

//             <div className="relative flex items-center justify-between">

//               {/* text */}
//               <div>
//                 <h2 className="text-gray-500 font-medium">
//                   {s.title}
//                 </h2>
//                 <p className="text-3xl font-bold text-gray-800 mt-2">
//                   {s.value}
//                 </p>
//               </div>

//               {/* icon */}
//               <div className={`text-white text-2xl p-4 rounded-full bg-gradient-to-r ${s.color} shadow-lg`}>
//                 {s.icon}
//               </div>

//             </div>
//           </div>
//         ))}



//   useEffect(() => {
//     const fetchData = async () => {
//       const users = await axiosSecure.get("/user");
//       const requests = await axiosSecure.get("/requests");
//       const payments = await axiosSecure.get("/payments");

//       const totalFunding = payments.data.reduce(
//         (sum, p) => sum + (p.amount || 0),
//         0
//       );

//       setStats([
//         { title: "Total Users", value: users.data.length, icon: <FaUser /> },
//         { title: "Total Funding", value: `$${totalFunding}`, icon: <FaMoneyBillWave /> },
//         { title: "Total Requests", value: requests.data.length, icon: <FaTint /> },
//       ]);
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1 className="text-2xl font-bold mb-4">
//         Welcome Admin, {user?.displayName}
//       </h1>

//       <div className="grid grid-cols-3 gap-4">
//         {stats.map((s, i) => (
//           <div key={i} className="p-4 bg-white shadow rounded">
//             <div className="text-2xl text-red-500">{s.icon}</div>
//             <h2 className="font-bold">{s.title}</h2>
//             <p>{s.value}</p>
//           </div>
//         ))}

//       </div>
//     </div>
//   );
// };


// export default AdminDashboardHome;


import React, { useEffect, useState, useContext } from "react";
import useAxiosSecure from "../../../houk/useAxiosSecure";
import { AuthContext } from "../../../context/AuthContext/AuthContext";
import { FaUser, FaMoneyBillWave, FaTint } from "react-icons/fa";

const AdminDashboardHome = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);

  const [stats, setStats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // API Calls
        const usersRes = await axiosSecure.get("/user");
        const requestsRes = await axiosSecure.get("/requests");
        const paymentsRes = await axiosSecure.get("/payments");

        // Data
        const users = usersRes.data || [];

        const requests = Array.isArray(requestsRes.data)
          ? requestsRes.data
          : requestsRes.data?.request || [];

        const payments = Array.isArray(paymentsRes.data)
          ? paymentsRes.data
          : paymentsRes.data?.payments || [];

        // Total Funding
        const totalFunding = payments.reduce(
          (sum, payment) => sum + Number(payment.amount || 0),
          0
        );

        // Stats
        setStats([
          {
            title: "Total Users",
            value: users.length,
            icon: <FaUser />,
            color: "from-blue-500 to-indigo-600",
          },
          {
            title: "Total Funding",
            value: `৳ ${totalFunding}`,
            icon: <FaMoneyBillWave />,
            color: "from-green-500 to-emerald-600",
          },
          {
            title: "Total Requests",
            value: requests.length,
            icon: <FaTint />,
            color: "from-red-500 to-pink-600",
          },
        ]);
      } catch (error) {
        console.log("Dashboard Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [axiosSecure]);

  return (
    <div className="p-6 min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          👋 Welcome Admin,{" "}
          <span className="text-red-500">
            {user?.displayName || "Admin"}
          </span>
        </h1>

        <p className="text-gray-500 mt-1">
          Here’s your system overview
        </p>
      </div>

      {/* Loading */}
      {loading ? (
        <div className="flex justify-center items-center h-40">
          <p className="text-lg font-medium text-gray-500 animate-pulse">
            Loading dashboard...
          </p>
        </div>
      ) : (
        <>
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((s, i) => (
              <div
                key={i}
                className="relative overflow-hidden bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6"
              >
                {/* Background Glow */}
                <div
                  className={`absolute inset-0 opacity-10 bg-gradient-to-r ${s.color}`}
                ></div>

                <div className="relative flex items-center justify-between">
                  
                  {/* Text */}
                  <div>
                    <h2 className="text-gray-500 font-medium">
                      {s.title}
                    </h2>

                    <p className="text-3xl font-bold text-gray-800 mt-2">
                      {s.value}
                    </p>
                  </div>

                  {/* Icon */}
                  <div
                    className={`text-white text-2xl p-4 rounded-full bg-gradient-to-r ${s.color} shadow-lg`}
                  >
                    {s.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default AdminDashboardHome;