
// // src/pages/Dashboard.jsx
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext"; // Logged-in donor info
// import {
//   getDonorRequestsAPI,
//   updateRequestStatusAPI,
//   deleteRequestAPI,
// } from "../api/donor"; // তোমার API functions

// const Home = () => {
//   const { user } = useAuth(); // Logged-in donor info
//   const navigate = useNavigate();
//   const [requests, setRequests] = useState([]);

//   // Fetch recent 3 requests
//   useEffect(() => {
//     const fetchRequests = async () => {
//       try {
//         const data = await getDonorRequestsAPI(user.email); // শুধু logged-in donor এর requests
//         setRequests(data.slice(0, 3)); // সর্বাধিক 3 recent request
//       } catch (err) {
//         console.error("Error fetching requests:", err);
//       }
//     };
//     fetchRequests();
//   }, [user.email]);

//   // Status update
//   const handleStatusChange = async (id, newStatus) => {
//     try {
//       await updateRequestStatusAPI(id, newStatus);
//       setRequests((prev) =>
//         prev.map((r) => (r.id === id ? { ...r, status: newStatus } : r))
//       );
//     } catch (err) {
//       console.error("Error updating status:", err);
//     }
//   };

//   // Delete request
//   const handleDelete = async (id) => {
//     if (window.confirm("Are you sure you want to delete this request?")) {
//       try {
//         await deleteRequestAPI(id);
//         setRequests((prev) => prev.filter((r) => r.id !== id));
//       } catch (err) {
//         console.error("Error deleting request:", err);
//       }
//     }
//   };

//   return (
//     <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded shadow">
//       <h2 className="text-3xl font-bold mb-6">Welcome, {user.name}</h2>

//       {requests.length > 0 && (
//         <>
//           <h3 className="text-xl font-semibold mb-2">Recent Donation Requests</h3>
//           <table className="table-auto w-full border mb-4">
//             <thead>
//               <tr className="bg-gray-200">
//                 <th className="border px-2 py-1">Recipient Name</th>
//                 <th className="border px-2 py-1">Location</th>
//                 <th className="border px-2 py-1">Date</th>
//                 <th className="border px-2 py-1">Time</th>
//                 <th className="border px-2 py-1">Blood Group</th>
//                 <th className="border px-2 py-1">Status</th>
//                 <th className="border px-2 py-1">Donor Info</th>
//                 <th className="border px-2 py-1">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {requests.map((req) => (
//                 <tr key={req.id}>
//                   <td className="border px-2 py-1">{req.recipientName}</td>
//                   <td className="border px-2 py-1">
//                     {req.district}, {req.upazila}
//                   </td>
//                   <td className="border px-2 py-1">{req.donationDate}</td>
//                   <td className="border px-2 py-1">{req.donationTime}</td>
//                   <td className="border px-2 py-1">{req.bloodGroup}</td>
//                   <td className="border px-2 py-1">{req.status}</td>
//                   <td className="border px-2 py-1">
//                     {req.status === "inprogress" && (
//                       <>
//                         {req.donorName} <br /> {req.donorEmail}
//                       </>
//                     )}
//                   </td>
//                   <td className="border px-2 py-1 space-x-1">
//                     {req.status === "inprogress" && (
//                       <>
//                         <button
//                           className="btn btn-success btn-sm"
//                           onClick={() => handleStatusChange(req.id, "done")}
//                         >
//                           Done
//                         </button>
//                         <button
//                           className="btn btn-warning btn-sm"
//                           onClick={() => handleStatusChange(req.id, "canceled")}
//                         >
//                           Cancel
//                         </button>
//                       </>
//                     )}
//                     <button
//                       className="btn btn-primary btn-sm"
//                       onClick={() => navigate(`/edit-request/${req.id}`)}
//                     >
//                       Edit
//                     </button>
//                     <button
//                       className="btn btn-danger btn-sm"
//                       onClick={() => handleDelete(req.id)}
//                     >
//                       Delete
//                     </button>
//                     <button
//                       className="btn btn-info btn-sm"
//                       onClick={() => navigate(`/request-details/${req.id}`)}
//                     >
//                       View
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>

//           <button
//             className="btn btn-primary mt-4"
//             onClick={() => navigate("/my-requests")}
//           >
//             View My All Requests
//           </button>
//         </>
//       )}

//       {requests.length === 0 && (
//         <p className="text-gray-600">You have not made any donation request yet.</p>
//       )}
//     </div>
//   );
// };

// export default Home;











import React from "react";
// import useRole from "../../hooks/useRole"; // role hook
import useAuth from "../../hooks/useAuth"; // logged-in user info hook
import useRole from "../../../houk/useRole";

const Home = () => {
  const { role } = useRole(); // donor / admin / volunteer
  const { user } = useAuth(); // user object: {name, email, ...}

  return (
    <div>
      {/* Welcome Section */}
      <h1 className="text-3xl font-bold mb-6">
        Welcome, {user?.name || "User"}!
      </h1>

      {/* Donor Dashboard Home */}
      {role === "donor" && (
        <div>
          <h2 className="text-xl font-semibold mb-4">Recent Donation Requests</h2>
          {/* Recent donation requests table */}
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Recipient</th>
                  <th>Location</th>
                  <th>Blood Group</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {/* TODO: Map recent donation requests */}
                <tr>
                  <td colSpan="7" className="text-center">
                    No donation requests yet.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Admin Dashboard Home */}
      {role === "admin" && (
        <div className="grid grid-cols-3 gap-4">
          <div className="p-4 bg-white rounded shadow">
            <h3 className="font-semibold">Total Users</h3>
            <p className="text-2xl">123</p>
          </div>
          <div className="p-4 bg-white rounded shadow">
            <h3 className="font-semibold">Total Funding</h3>
            <p className="text-2xl">$12,345</p>
          </div>
          <div className="p-4 bg-white rounded shadow">
            <h3 className="font-semibold">Total Blood Requests</h3>
            <p className="text-2xl">456</p>
          </div>
        </div>
      )}

      {/* Volunteer Dashboard Home */}
      {role === "volunteer" && (
        <div>
          <h2 className="text-xl font-semibold mb-4">All Blood Donation Requests</h2>
          <p>Volunteers can view and update donation status only.</p>
        </div>
      )}
    </div>
  );
};

export default Home;
