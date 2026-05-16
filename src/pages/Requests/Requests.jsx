

// // import React, { useEffect, useState } from "react";
// // // import { useNavigate } from "react-router-dom";
// // import useAxiosSecure from "../../houk/useAxiosSecure";
// // import { FiEye } from "react-icons/fi";
// // import { useNavigate } from "react-router";

// // const Requests = () => {
// //   const navigate = useNavigate();
// //   const axiosSecure = useAxiosSecure();

// //   const [requests, setRequests] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   const [search, setSearch] = useState("");
// //   const [bloodFilter, setBloodFilter] = useState("");

// //   // Load ONLY pending requests (PUBLIC PAGE)
// //   useEffect(() => {
// //     const fetchRequests = async () => {
// //       try {
// //         setLoading(true);

// //         const res = await axiosSecure.get("/requests");

// //         const allData = Array.isArray(res.data)
// //           ? res.data
// //           : res.data.request || [];

// //         // ONLY PENDING
// //         const pending = allData.filter(
// //           (item) => item.donation_status === "pending"
// //         );

// //         setRequests(pending);
// //       } catch (err) {
// //         console.log(err);
// //         setRequests([]);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchRequests();
// //   }, [axiosSecure]);

// //   // Filter (search + blood group)
// //   const filteredRequests = requests.filter(
// //     (r) =>
// //       (!search ||
// //         r.recipient_name?.toLowerCase().includes(search.toLowerCase())) &&
// //       (!bloodFilter || r.blood_group === bloodFilter)
// //   );

// //   return (
// //     <div className="min-h-screen p-6 bg-gray-50">

// //       {/* TITLE */}
// //       <h1 className="text-3xl font-bold text-center text-red-600 mb-6">
// //         🩸 Pending Blood Donation Requests
// //       </h1>

// //       {/* FILTER */}
// //       <div className="flex gap-3 mb-6 justify-center">
// //         <input
// //           className="border p-2 rounded"
// //           placeholder="Search recipient name..."
// //           value={search}
// //           onChange={(e) => setSearch(e.target.value)}
// //         />

// //         <select
// //           className="border p-2 rounded"
// //           value={bloodFilter}
// //           onChange={(e) => setBloodFilter(e.target.value)}
// //         >
// //           <option value="">Blood Group</option>
// //           {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map((bg) => (
// //             <option key={bg}>{bg}</option>
// //           ))}
// //         </select>
// //       </div>

// //       {/* LOADING */}
// //       {loading && <p className="text-center">Loading...</p>}

// //       {/* CARDS */}
// //       <div className="space-y-4">
// //         {filteredRequests.map((req) => (
// //           <div
// //             key={req._id}
// //             className="bg-white p-5 rounded shadow flex justify-between"
// //           >
// //             {/* LEFT SIDE */}
// //             <div>
// //               <p className="font-bold text-xl text-pink-500">
// //                 {req.recipient_name}
// //               </p>

// //               <p>📍 Location: {req.recipient_district}, {req.recipient_upazila}</p>
// //               <p>🩸 Blood Group: {req.blood_group}</p>
// //               <p>📅 Date: {req.date}</p>
// //               <p>⏰ Time: {req.time}</p>

// //               {/* VIEW BUTTON (PRIVATE PAGE) */}
// //               <button
// //                 onClick={() => navigate(`/requests/${req._id}`)}
// //                 className="text-red-500 flex items-center gap-1 mt-2 hover:underline"
// //               >
// //                 <FiEye /> View Details
// //               </button>
// //             </div>

// //             {/* STATUS */}
// //             <div className="flex items-start">
// //               <span className="px-3 py-1 text-sm bg-yellow-100 text-yellow-700 rounded">
// //                 {req.donation_status}
// //               </span>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Requests;


// import React, { useEffect, useState } from "react";
// import useAxiosSecure from "../../houk/useAxiosSecure";
// import { FiEye } from "react-icons/fi";
// import { useNavigate } from "react-router";

// const Requests = () => {
//   const navigate = useNavigate();
//   const axiosSecure = useAxiosSecure();

//   const [requests, setRequests] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const [search, setSearch] = useState("");
//   const [bloodFilter, setBloodFilter] = useState("");

//   useEffect(() => {
//     const fetchRequests = async () => {
//       try {
//         setLoading(true);
//         const res = await axiosSecure.get("/requests");

//         const allData = Array.isArray(res.data)
//           ? res.data
//           : res.data.request || [];

//         const pending = allData.filter(
//           (item) => item.donation_status === "pending"
//         );

//         setRequests(pending);
//       } catch (err) {
//         console.log(err);
//         setRequests([]);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchRequests();
//   }, [axiosSecure]);

//   const formatDateTime = (date, time) => {
//     if (!date) return "N/A";

//     const d = new Date(date);
//     const formattedDate = d.toLocaleDateString("en-GB", {
//       day: "2-digit",
//       month: "short",
//       year: "numeric",
//     });

//     return `${formattedDate} • ${time || ""}`;
//   };

//   const filteredRequests = requests.filter(
//     (r) =>
//       (!search ||
//         r.recipient_name?.toLowerCase().includes(search.toLowerCase())) &&
//       (!bloodFilter || r.blood_group === bloodFilter)
//   );

//   return (
//     <div className="min-h-screen bg-gray-50 p-6">

//       {/* TITLE */}
//       <h1 className="text-3xl font-bold text-center text-red-600 mb-8">
//         🩸 Pending Blood Donation Requests
//       </h1>

//       {/* FILTER */}
//       <div className="flex flex-col md:flex-row gap-3 mb-8 justify-center">
//         <input
//           className="border p-3 rounded-lg w-full md:w-64"
//           placeholder="Search recipient name..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />

//         <select
//           className="border p-3 rounded-lg w-full md:w-48"
//           value={bloodFilter}
//           onChange={(e) => setBloodFilter(e.target.value)}
//         >
//           <option value="">All Blood Group</option>
//           {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map((bg) => (
//             <option key={bg} value={bg}>
//               {bg}
//             </option>
//           ))}
//         </select>
//       </div>

//       {/* LOADING */}
//       {loading && (
//         <p className="text-center text-gray-500">Loading requests...</p>
//       )}

//       {/* CARDS */}
//       <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
//         {filteredRequests.map((req) => (
//           <div
//             key={req._id}
//             className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-5 border border-gray-100"
//           >
//             {/* HEADER */}
//             <div className="flex justify-between items-center mb-3">
//               <h2 className="text-xl font-bold text-pink-600">
//                 {req.recipient_name}
//               </h2>

//               <span className="px-3 py-1 text-xs bg-yellow-100 text-yellow-700 rounded-full">
//                 {req.donation_status}
//               </span>
//             </div>

//             {/* INFO */}
//             <div className="space-y-2 text-gray-600 text-sm">
//               <p>
//                 📍 <span className="font-medium">Location:</span>{" "}
//                 {req.recipient_district}, {req.recipient_upazila}
//               </p>

//               <p>
//                 🩸 <span className="font-medium">Blood Group:</span>{" "}
//                 <span className="text-red-500 font-semibold">
//                   {req.blood_group}
//                 </span>
//               </p>

//                 <p>
//                 🩸 <span className="font-medium">Hospital:</span>{" "}
//                 <span className="text-red-500 font-semibold">
//                   {req.hospital_name || "N/A"}
//                 </span>
//               </p>

//              {/* <p className="text-sm text-gray-500 mt-2">
//               📅 {new Date(donar.createdAt).toLocaleDateString()}
//             </p>
//             <p className="text-sm text-gray-500">
//               ⏰ {new Date(donar.createdAt).toLocaleTimeString()}
//             </p> */}
//             </div>

//             {/* BUTTON */}
//             <button
//               onClick={() => navigate(`/requests/${req._id}`)}
//               className="mt-4 w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg transition"
//             >
//               <FiEye /> View Details
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Requests;

// import React, { useEffect, useState } from "react";
// import useAxiosSecure from "../../houk/useAxiosSecure";
// import { FiEye } from "react-icons/fi";
// import { useNavigate } from "react-router";

// const Requests = () => {
//   const navigate = useNavigate();
//   const axiosSecure = useAxiosSecure();

//   const [requests, setRequests] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const [search, setSearch] = useState("");
//   const [bloodFilter, setBloodFilter] = useState("");

//   // Fetch requests
//   useEffect(() => {
//     const fetchRequests = async () => {
//       try {
//         setLoading(true);

//         const res = await axiosSecure.get("/requests");

//         const allData = Array.isArray(res.data)
//           ? res.data
//           : res.data?.request || [];

//         const pending = allData.filter(
//           (item) => item.donation_status === "pending"
//         );

//         setRequests(pending);
//       } catch (error) {
//         console.log(error);
//         setRequests([]);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchRequests();
//   }, [axiosSecure]);

//   // Filter logic
//   const filteredRequests = requests.filter(
//     (r) =>
//       (!search ||
//         r.recipient_name?.toLowerCase().includes(search.toLowerCase())) &&
//       (!bloodFilter || r.blood_group === bloodFilter)
//   );

//   return (
//     <div className="min-h-screen bg-gray-50 p-6">

//       {/* TITLE */}
//       <h1 className="text-3xl font-bold text-center text-red-600 mb-8">
//         🩸 Pending Blood Donation Requests
//       </h1>

//       {/* FILTER */}
//       <div className="flex flex-col md:flex-row gap-3 mb-8 justify-center">
//         <input
//           className="border p-3 rounded-xl w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-red-400"
//           placeholder="Search recipient name..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />

//         <select
//           className="border p-3 rounded-xl w-full md:w-48 focus:outline-none focus:ring-2 focus:ring-red-400"
//           value={bloodFilter}
//           onChange={(e) => setBloodFilter(e.target.value)}
//         >
//           <option value="">All Blood Group</option>
//           {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map((bg) => (
//             <option key={bg} value={bg}>
//               {bg}
//             </option>
//           ))}
//         </select>
//       </div>

//       {/* LOADING */}
//       {loading && (
//         <p className="text-center text-gray-500">
//           Loading requests...
//         </p>
//       )}

//       {/* EMPTY STATE */}
//       {!loading && filteredRequests.length === 0 && (
//         <p className="text-center text-gray-400">
//           No pending requests found 😢
//         </p>
//       )}

//       {/* CARDS */}
//       <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//         {filteredRequests.map((req) => (
//           <div
//             key={req._id}
//             className="bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
//           >
//             {/* TOP BAR */}
//             <div className="h-2 bg-gradient-to-r from-red-400 via-pink-500 to-red-600"></div>

//             <div className="p-6">

//               {/* HEADER */}
//               <div className="flex justify-between items-start mb-4">
//                 <div>
//                   <h2 className="text-xl font-bold text-gray-800">
//                     {req.recipient_name}
//                   </h2>

//                   <p className="text-xs text-gray-400">
//                     ID: {req._id.slice(-6)}
//                   </p>
//                 </div>

//                 <span className="px-3 py-1 text-xs rounded-full bg-yellow-100 text-yellow-700 font-medium">
//                   {req.donation_status}
//                 </span>
//               </div>

//               {/* INFO */}
//               <div className="space-y-3 text-sm text-gray-600">

//                 <p>📍 {req.recipient_district}, {req.recipient_upazila}</p>

//                 <p>
//                   🩸 <span className="text-red-500 font-semibold">
//                     {req.blood_group}
//                   </span>
//                 </p>

//                 <p>🏥 {req.hospital_name || "No hospital info"}</p>

//                 <p className="text-gray-400">
//                   📅 {new Date(req.createdAt).toLocaleDateString()}
//                 </p>

//               </div>

//               {/* BUTTON */}
//               <button
//                 onClick={() => navigate(`/requests/${req._id}`)}
//                 className="mt-5 w-full flex items-center justify-center gap-2 
//                 bg-gradient-to-r from-red-500 to-pink-500 
//                 hover:from-red-600 hover:to-pink-600 
//                 text-white py-2.5 rounded-xl 
//                 shadow-md hover:shadow-lg transition-all"
//               >
//                 <FiEye /> View Details
//               </button>

//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Requests;


import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../houk/useAxiosSecure";
import { FiEye } from "react-icons/fi";
import { useNavigate } from "react-router";

const Requests = () => {
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();

  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [bloodFilter, setBloodFilter] = useState("");

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        setLoading(true);

        const res = await axiosSecure.get("/requests");

        const allData = Array.isArray(res.data)
          ? res.data
          : res.data?.request || [];

        const pending = allData.filter(
          (item) => item.donation_status === "pending"
        );

        setRequests(pending);
      } catch (error) {
        console.log(error);
        setRequests([]);
      } finally {
        setLoading(false);
      }
    };

    fetchRequests();
  }, [axiosSecure]);

  const filteredRequests = requests.filter(
    (r) =>
      (!search ||
        r.recipient_name?.toLowerCase().includes(search.toLowerCase())) &&
      (!bloodFilter || r.blood_group === bloodFilter)
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">

      {/* TITLE */}
      <h1 className="text-3xl font-bold text-center text-red-600 mb-8">
        🩸 Pending Blood Donation Requests
      </h1>

      {/* FILTER */}
      <div className="flex flex-col md:flex-row gap-3 mb-8 justify-center">
        <input
          className="border p-3 rounded-xl w-full md:w-64 focus:ring-2 focus:ring-red-400 outline-none"
          placeholder="Search recipient name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border p-3 rounded-xl w-full md:w-48 focus:ring-2 focus:ring-red-400 outline-none"
          value={bloodFilter}
          onChange={(e) => setBloodFilter(e.target.value)}
        >
          <option value="">All Blood Group</option>
          {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map((bg) => (
            <option key={bg} value={bg}>
              {bg}
            </option>
          ))}
        </select>
      </div>

      {/* LOADING */}
      {loading && (
        <p className="text-center text-gray-500 animate-pulse">
          Loading requests...
        </p>
      )}

      {/* EMPTY */}
      {!loading && filteredRequests.length === 0 && (
        <p className="text-center text-gray-400">
          No pending requests found 😢
        </p>
      )}

      {/* CARDS */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

        {filteredRequests.map((req) => (
          <div
            key={req._id}
            className="bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
          >

            {/* TOP GRADIENT BAR */}
            <div className="h-2 bg-gradient-to-r from-red-400 via-pink-500 to-red-600"></div>

            <div className="p-6">

              {/* HEADER */}
              <div className="flex justify-between items-start mb-4">

                <div>
                  <h2 className="text-xl font-bold text-gray-800">
                    {req.recipient_name}
                  </h2>

                  <p className="text-xs text-gray-400">
                    ID: #{req._id.slice(-6)}
                  </p>
                </div>

                <span className="px-3 py-1 text-xs rounded-full bg-yellow-100 text-yellow-700 font-medium">
                  {req.donation_status}
                </span>

              </div>

              {/* INFO */}
              <div className="space-y-2 text-sm text-gray-600">

                <p>📍 {req.recipient_district}, {req.recipient_upazila}</p>

                <p>
                  🩸{" "}
                  <span className="text-red-500 font-semibold">
                    {req.blood_group}
                  </span>
                </p>

                <p>🏥 {req.hospital_name || "No hospital info"}</p>

              </div>

              {/* DATE TIME (PREMIUM BADGE STYLE) */}
              <div className="flex justify-between items-center mt-4 text-xs">

                <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                  📅{" "}
                  {req.createdAt
                    ? new Date(req.createdAt).toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })
                    : "No date"}
                </span>

                <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                  ⏰{" "}
                  {req.createdAt
                    ? new Date(req.createdAt).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })
                    : "No time"}
                </span>

              </div>

              {/* BUTTON */}
              <button
                onClick={() => navigate(`/requests/${req._id}`)}
                className="mt-5 w-full flex items-center justify-center gap-2 
                bg-gradient-to-r from-red-500 to-pink-500 
                hover:from-red-600 hover:to-pink-600 
                text-white py-2.5 rounded-xl 
                shadow-md hover:shadow-lg transition-all"
              >
                <FiEye /> View Details
              </button>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Requests;