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
//         navigate("/dashboard/donation-request");
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
//                 <label className="font-semibold block mb-1">Donar Email</label>
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



// import React, { useEffect, useState, useContext } from "react";
// import { useParams, useNavigate, Link } from "react-router-dom";
// import useAxiosSecure from "../../../houk/useAxiosSecure";
// import { AuthContext } from "../../../context/AuthContext/AuthContext";

// const RequestDetails = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const axiosSecure = useAxiosSecure();
//   const { user: currentUser } = useContext(AuthContext);

//   const [request, setRequest] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [showModal, setShowModal] = useState(false);
//   const [donationLoading, setDonationLoading] = useState(false);

//   // GET request
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await axiosSecure.get(`/requests/${id}`);
//         setRequest(res.data);
//       } catch (err) {
//         console.log(err);
//         alert("Request not found");
//         navigate("/dashboard/donation-request");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [id]);

//   // confirm donation
//   const handleConfirmDonation = async () => {
//     setDonationLoading(true);

//     try {
//       const res = await axiosSecure.patch(`/update/request/status/${id}`, {
//         donation_status: "inprogress",
//         donor_name: currentUser.displayName,
//         donor_email: currentUser.email,
//       });

//       if (res.data.modifiedCount > 0) {
//         setRequest((prev) => ({
//           ...prev,
//           donation_status: "inprogress",
//         }));

//         setShowModal(false);
//         alert("Donation confirmed!");
//       }
//     } catch (err) {
//       console.log(err);
//       alert("Failed to confirm donation");
//     } finally {
//       setDonationLoading(false);
//     }
//   };

//   if (loading) return <p className="p-6">Loading...</p>;
//   if (!request) return <p className="p-6 text-red-500">Not found</p>;

//   return (
//     <div className="max-w-3xl mx-auto p-6 bg-white shadow rounded">

//       <Link
//         to="/dashboard/donation-request"
//         className="text-blue-500 mb-4 inline-block"
//       >
//         ← Back
//       </Link>

//       <h2 className="text-2xl font-bold text-red-600 mb-4">
//         Donation Request Details
//       </h2>

//       <p><b>Name:</b> {request.recipient_name}</p>
//       <p><b>Blood Group:</b> {request.blood_group}</p>
//       <p><b>Hospital:</b> {request.hospital_name}</p>
//       <p><b>Status:</b> {request.donation_status}</p>

//       {/* Donate Button */}
//       {request.donation_status === "pending" && (
//         <button
//           onClick={() => setShowModal(true)}
//           className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
//         >
//           Donate
//         </button>
//       )}

//       {/* Modal */}
//       {showModal && (
//         <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
//           <div className="bg-white p-6 rounded w-96">

//             <h3 className="text-xl font-bold mb-4">Confirm Donation</h3>

//             <input
//               readOnly
//               value={currentUser.displayName}
//               className="border p-2 w-full mb-2"
//             />

//             <input
//               readOnly
//               value={currentUser.email}
//               className="border p-2 w-full mb-4"
//             />

//             <div className="flex justify-end gap-2">
//               <button
//                 onClick={() => setShowModal(false)}
//                 className="px-3 py-1 bg-gray-300"
//               >
//                 Cancel
//               </button>

//               <button
//                 onClick={handleConfirmDonation}
//                 disabled={donationLoading}
//                 className="px-3 py-1 bg-green-500 text-white"
//               >
//                 {donationLoading ? "Saving..." : "Confirm"}
//               </button>
//             </div>

//           </div>
//         </div>
//       )}

//     </div>
//   );
// };

// export default RequestDetails;

import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import useAxiosSecure from "../../../houk/useAxiosSecure";
import { AuthContext } from "../../../context/AuthContext/AuthContext";

const RequestDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const { user: currentUser } = useContext(AuthContext);

  const [request, setRequest] = useState(null);
  const [loading, setLoading] = useState(true);
  const [amount, setAmount] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosSecure.get(`/requests/${id}`);
        setRequest(res.data);
      } catch (err) {
        console.log(err);
        alert("Request not found");
        navigate("/dashboard/donation-request");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const handleCheckout = async (e) => {
    e.preventDefault();

    const donateAmount = Number(amount);

    if (!donateAmount || donateAmount <= 0) {
      alert("Please enter a valid amount");
      return;
    }

    const formData = {
      requestId: id,
      donorEmail: currentUser?.email,
      donorName: currentUser?.displayName,
      amount: donateAmount,
    };

    try {
      const res = await axiosSecure.post(
        "/create-payment-checkout",
        formData
      );

      if (res.data.url) {
        window.location.href = res.data.url;
      }
    } catch (err) {
      console.log(err);
      alert("Payment failed. Try again!");
    }
  };

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p className="text-lg font-semibold text-gray-500">Loading...</p>
      </div>
    );
  }

  if (!request) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p className="text-red-500 text-lg">Request not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">

      <div className="w-full max-w-2xl bg-white shadow-2xl rounded-2xl p-8">

        {/* Header */}
        <Link
          to="/dashboard/donation-request"
          className="text-blue-500 hover:underline text-sm"
        >
          ← Back to Requests
        </Link>

        <h2 className="text-3xl font-bold text-red-600 mt-2 mb-6 text-center">
          Donation Request Details
        </h2>

        {/* Info Card */}
        <div className="bg-red-50 border border-red-200 rounded-xl p-5 space-y-2 mb-6">
          <p><b>Recipient Name:</b> {request.recipient_name}</p>
          <p><b>Blood Group:</b> {request.blood_group}</p>
          <p><b>Hospital:</b> {request.hospital_name}</p>
          <p>
            <b>Status:</b>{" "}
            <span
              className={`px-2 py-1 rounded text-white text-sm ${
                request.donation_status === "pending"
                  ? "bg-yellow-500"
                  : "bg-green-500"
              }`}
            >
              {request.donation_status}
            </span>
          </p>
        </div>

        {/* Donation Form */}
        {request.donation_status === "pending" && (
          <form
            onSubmit={handleCheckout}
            className="bg-gray-50 border rounded-xl p-5 space-y-4"
          >
             
            <h3 className="text-lg font-semibold text-gray-700 text-center">
              Make a Donation 💖
            </h3>

            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter donation amount"
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
            />

            <button
              type="submit"
              className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-semibold transition"
            >
              Donate Now
            </button>

          </form>
        )}

        {/* Already donated */}
        {request.donation_status !== "pending" && (
          <div className="text-center mt-6 text-green-600 font-semibold">
            This request is already in progress ❤️
          </div>
        )}

        

      </div>
    </div>
  );
};

export default RequestDetails;