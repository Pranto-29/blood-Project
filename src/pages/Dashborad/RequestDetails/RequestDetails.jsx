// import React, { useEffect, useState, useContext } from "react";
// import { useParams, useNavigate, Link } from "react-router-dom";
// import useAxiosSecure from "../../../houk/useAxiosSecure";
// import { AuthContext } from "../../../context/AuthContext/AuthContext";
// import axios from "axios";

// const RequestDetails = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const { user } = useContext(AuthContext);
//   const axiosSecure = useAxiosSecure();

//   const [request, setRequest] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [showModal, setShowModal] = useState(false);
//   const [donationLoading, setDonationLoading] = useState(false);

//   // Fetch request details
//   useEffect(() => {
//     axios
//       .get(`http://localhost:5000/requests/${id}`)
//       .then((res) => {
//         setRequest(res.data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error(err);
//         alert("Request not found");
//         navigate("/dashboard/all-blood-donation-requests");
//       });
//   }, [id, navigate]);

//   if (loading) return <p className="p-6 text-lg">Loading request details...</p>;
//   if (!request) return <p className="p-6 text-red-500 text-lg">Request not found</p>;

//   // Handle donation confirmation
//   const handleConfirmDonation = async () => {
//     setDonationLoading(true);
//     try {
//       const res = await axiosSecure.patch(`/update/request/status/${id}`, {
//         status: "inprogress",
//         donor_name: user.displayName,
//         donor_email: user.email,
//       });

//       if (res.data.modifiedCount > 0) {
//         setRequest({ ...request, status: "inprogress" });
//         alert("Donation confirmed! Status updated to inprogress.");
//         setShowModal(false);
//       }
//     } catch (err) {
//       console.error(err);
//       alert("Failed to confirm donation");
//     } finally {
//       setDonationLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-3xl mx-auto bg-white shadow-md p-6 rounded mt-6">
//       {/* Back button */}
//       <Link
//         to="/dashboard/all-blood-donation-requests"
//         className="btn btn-sm btn-ghost mb-4"
//       >
//         ← Back to Requests
//       </Link>

//       <h2 className="text-2xl font-bold mb-6 text-center text-red-600">
//         Blood Donation Request Details
//       </h2>

//       {/* Request Info */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 mb-6">
//         <div>
//           <p>
//             <span className="font-semibold">Recipient Name:</span> {request.recipient_name}
//           </p>
//           <p>
//             <span className="font-semibold">Blood Group:</span> {request.blood_group}
//           </p>
//           <p>
//             <span className="font-semibold">District:</span> {request.recipient_district}
//           </p>
//           <p>
//             <span className="font-semibold">Upazila:</span> {request.recipient_upazila}
//           </p>
//         </div>
//         <div>
//           <p>
//             <span className="font-semibold">Hospital:</span> {request.hospital_name}
//           </p>
//           <p>
//             <span className="font-semibold">Full Address:</span> {request.full_address}
//           </p>
//           <p>
//             <span className="font-semibold">Message:</span> {request.request_message}
//           </p>
//           <p>
//             <span className="font-semibold">Status:</span> {request.status || "Pending"}
//           </p>
//           <p>
//             <span className="font-semibold">Requested By:</span> {request.requester_name} (
//             {request.requester_email})
//           </p>
//           <p>
//             <span className="font-semibold">Created At:</span>{" "}
//             {new Date(request.createdAt).toLocaleString()}
//           </p>
//         </div>
//       </div>

//       {/* Donate Button */}
//       {request.status === "pending" && (
//         <button
//           onClick={() => setShowModal(true)}
//           className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
//         >
//           Donate
//         </button>
//       )}

//       {/* Donate Modal */}
//       {showModal && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white rounded-xl p-6 w-11/12 md:w-1/2">
//             <h3 className="text-xl font-bold mb-4 text-center text-green-600">
//               Confirm Donation
//             </h3>

//             <div className="space-y-3">
//               <div>
//                 <label className="font-semibold block mb-1">Donor Name</label>
//                 <input
//                   type="text"
//                   readOnly
//                   value={user.displayName}
//                   className="input input-bordered w-full"
//                 />
//               </div>
//               <div>
//                 <label className="font-semibold block mb-1">Donor Email</label>
//                 <input
//                   type="email"
//                   readOnly
//                   value={user.email}
//                   className="input input-bordered w-full"
//                 />
//               </div>
//             </div>

//             <div className="mt-6 flex justify-end space-x-2">
//               <button
//                 onClick={() => setShowModal(false)}
//                 className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleConfirmDonation}
//                 className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
//                 disabled={donationLoading}
//               >
//                 {donationLoading ? "Confirming..." : "Confirm Donation"}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default RequestDetails;

