

// import React, { useEffect, useState, useContext } from "react";
// import { useParams, useNavigate, Link } from "react-router-dom";
// import useAxiosSecure from "../../../houk/useAxiosSecure";
// import { AuthContext } from "../../../context/AuthContext/AuthContext";

// const RequestDetails = () => {
//   const { id } = useParams();
//   const { user } = useContext(AuthContext);
//   const axiosSecure = useAxiosSecure();

//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true)
//   const { user } = useContext(AuthContext);
//   const axiosSecure = useAxiosSecure();

//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const [openModal, setOpenModal] = useState(false);
//   const [updating, setUpdating] = useState(false);
//   const navigate = useNavigate();
//   const axiosSecure = useAxiosSecure();
//   const { user: currentUser } = useContext(AuthContext);

//   const [request, setRequest] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [amount, setAmount] = useState("");


//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await axiosSecure.get(`/requests/${id}`);

//         setData(res.data);
//       } catch (err) {
//         console.log(err);
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

//   }, [id, axiosSecure]);

//   // const handleConfirm = async () => {
//   //   setUpdating(true);
//   //   try {
//   //     await axiosSecure.patch(`/update/request/status/${id}`, {
//   //       donation_status: "inprogress",
//   //       donor_name: user?.displayName,
//   //       donor_email: user?.email,
//   //     });

//   //     setData((prev) => ({
//   //       ...prev,
//   //       donation_status: "inprogress",
//   //     }));

//   //     setOpenModal(false);
//   //   } catch (err) {
//   //     console.log(err);
//   //     alert("Failed!");
//   //   } finally {
//   //     setUpdating(false);
//   //   }
//   // };
//   const handleConfirm = async () => {
//   setUpdating(true);
//   try {
//     await axiosSecure.patch(`/requests/${id}`, {
//       donation_status: "inprogress",
//       donor_name: user?.displayName,
//       donor_email: user?.email,
//     });

//     setData((prev) => ({
//       ...prev,
//       donation_status: "inprogress",
//     }));

//     setOpenModal(false);
//   } catch (err) {
//     console.log("ERROR:", err.response?.data || err.message);
//     alert("Failed!");
//   } finally {
//     setUpdating(false);
//   }
// };

//   if (loading)
//     return (
//       <p className="text-center mt-20 text-gray-500 text-lg">
//         Loading request details...
//       </p>
//     );

//   if (!data)
//     return (
//       <p className="text-center mt-20 text-red-500 text-lg">
//         Request not found
//       </p>
//     );

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-red-50 to-gray-100 flex items-center justify-center p-4">

//       {/* CARD */}
//       <div className="w-full max-w-2xl bg-white shadow-2xl rounded-2xl overflow-hidden">

//         {/* HEADER */}
//         <div className="bg-red-500 text-white text-center py-5">
//           <h2 className="text-2xl font-bold">🩸 Blood Donation Request</h2>
//         </div>

//         {/* BODY */}
//         <div className="p-6 space-y-3 text-gray-700">

//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

//             <p><span className="font-semibold">Recipient:</span> {data.recipient_name}</p>

//             <p><span className="font-semibold">Blood Group:</span> {data.blood_group}</p>

//             <p><span className="font-semibold">District:</span> {data.recipient_district},</p>

//               <p><span className="font-semibold">Upazila:</span> {data.recipient_upazila}</p>

//             <p><span className="font-semibold">Hospital:</span> {data.hospital_name}</p>
//           </div>

//           {/* STATUS BADGE */}
//           <div className="mt-4">
//             <span className={`px-3 py-1 rounded-full text-sm font-medium
//               ${data.donation_status === "pending" ? "bg-yellow-100 text-yellow-700" : "bg-green-100 text-green-700"}
//             `}>
//               {data.donation_status}
//             </span>
//           </div>

//           {/* BUTTON */}
//           {data.donation_status === "pending" && (
//             <button
//               onClick={() => setOpenModal(true)}
//               className="mt-6 w-full bg-red-500 hover:bg-red-600 text-white py-2.5 rounded-xl transition"
//             >
//               Donate Now
//             </button>
//           )}

//         </div>
//       </div>

//       {/* MODAL */}
//       {openModal && (
//         <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4">

//           <div className="bg-white w-full max-w-sm rounded-2xl shadow-xl p-6">

//             <h3 className="text-xl font-bold text-center mb-4 text-red-500">
//               Confirm Donation
//             </h3>

//             <div className="space-y-3">

//               <input
//                 readOnly
//                 value={user?.displayName || ""}
//                 className="w-full border rounded-lg p-2 bg-pink-200"
//               />

//               <input
//                 readOnly
//                 value={user?.email || ""}
//                 className="w-full border rounded-lg p-2 bg-gray-100"
//               />

//             </div>

//             <div className="flex justify-end gap-2 mt-5">

//               <button
//                 onClick={() => setOpenModal(false)}
//                 className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg"
//               >
//                 Cancel
//               </button>

//               <button
//                 onClick={handleConfirm}
//                 disabled={updating}
//                 className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg"
//               >
//                 {updating ? "Processing..." : "Confirm"}
//               </button>
//             </div>

//           </div>
//         </div>
//       )}
//     </div>
//   }, [id];

//   const handleCheckout = async (e) => {
//     e.preventDefault();

//     const donateAmount = Number(amount);

//     if (!donateAmount || donateAmount <= 0) {
//       alert("Please enter a valid amount");
//       return;
//     }

//     const formData = {
//       requestId: id,
//       donorEmail: currentUser?.email,
//       donorName: currentUser?.displayName,
//       amount: donateAmount,
//     };

//     try {
//       const res = await axiosSecure.post(
//         "/create-payment-checkout",
//         formData
//       );

//       if (res.data.url) {
//         window.location.href = res.data.url;
//       }
//     } catch (err) {
//       console.log(err);
//       alert("Payment failed. Try again!");
//     }
//   };

//   if (loading) {
//     return (
//       <div className="h-screen flex items-center justify-center">
//         <p className="text-lg font-semibold text-gray-500">Loading...</p>
//       </div>
//     );
//   }

//   if (!request) {
//     return (
//       <div className="h-screen flex items-center justify-center">
//         <p className="text-red-500 text-lg">Request not found</p>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">

//       <div className="w-full max-w-2xl bg-white shadow-2xl rounded-2xl p-8">

//         {/* Header */}
//         <Link
//           to="/dashboard/donation-request"
//           className="text-blue-500 hover:underline text-sm"
//         >
//           ← Back to Requests
//         </Link>

//         <h2 className="text-3xl font-bold text-red-600 mt-2 mb-6 text-center">
//           Donation Request Details
//         </h2>

//         {/* Info Card */}
//         <div className="bg-red-50 border border-red-200 rounded-xl p-5 space-y-2 mb-6">
//           <p><b>Recipient Name:</b> {request.recipient_name}</p>
//           <p><b>Blood Group:</b> {request.blood_group}</p>
//           <p><b>Hospital:</b> {request.hospital_name}</p>
//           <p>
//             <b>Status:</b>{" "}
//             <span
//               className={`px-2 py-1 rounded text-white text-sm ${
//                 request.donation_status === "pending"
//                   ? "bg-yellow-500"
//                   : "bg-green-500"
//               }`}
//             >
//               {request.donation_status}
//             </span>
//           </p>
//         </div>

//         {/* Donation Form */}
//         {request.donation_status === "pending" && (
//           <form
//             onSubmit={handleCheckout}
//             className="bg-gray-50 border rounded-xl p-5 space-y-4"
//           >
             
//             <h3 className="text-lg font-semibold text-gray-700 text-center">
//               Make a Donation 💖
//             </h3>

//             <input
//               type="number"
//               value={amount}
//               onChange={(e) => setAmount(e.target.value)}
//               placeholder="Enter donation amount"
//               className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
//             />

//             <button
//               type="submit"
//               className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-semibold transition"
//             >
//               Donate Now
//             </button>

//           </form>
//         )}

//         {/* Already donated */}
//         {request.donation_status !== "pending" && (
//           <div className="text-center mt-6 text-green-600 font-semibold">
//             This request is already in progress ❤️
//           </div>
//         )}
//       </div>

//     </div>
//   );

// export default RequestDetails;

import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import useAxiosSecure from "../../../houk/useAxiosSecure";
import { AuthContext } from "../../../context/AuthContext/AuthContext";

const RequestDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const [openModal, setOpenModal] = useState(false);
  const [updating, setUpdating] = useState(false);

  const [amount, setAmount] = useState("");

  // === FETCH ===
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosSecure.get(`/requests/${id}`);
        setData(res.data);
      } catch (err) {
        console.log(err);
        alert("Request not found");
        navigate("/dashboard/donation-request");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id, axiosSecure, navigate]);

  // === CONFIRM DONATION ===
  const handleConfirm = async () => {
    setUpdating(true);
    try {
      await axiosSecure.patch(`/requests/${id}`, {
        donation_status: "inprogress",
        donor_name: user?.displayName,
        donor_email: user?.email,
      });

      setData((prev) => ({
        ...prev,
        donation_status: "inprogress",
      }));

      setOpenModal(false);
    } catch (err) {
      console.log("ERROR:", err.response?.data || err.message);
      alert("Failed!");
    } finally {
      setUpdating(false);
    }
  };

  // === LOADING ===
  if (loading) {
    return (
      <p className="text-center mt-20 text-gray-500 text-lg">
        Loading request details...
      </p>
    );
  }

  // === NOT FOUND ===
  if (!data) {
    return (
      <p className="text-center mt-20 text-red-500 text-lg">
        Request not found
      </p>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-gray-100 flex items-center justify-center p-4">

      {/* CARD */}
      <div className="w-full max-w-2xl bg-white shadow-2xl rounded-2xl overflow-hidden">

        {/* HEADER */}
        <div className="bg-red-500 text-white text-center py-5">
          <h2 className="text-2xl font-bold">🩸 Blood Donation Request</h2>
        </div>

        {/* BODY */}
        <div className="p-6 space-y-3 text-gray-700">

          <p><b>Recipient:</b> {data.recipient_name}</p>
          <p><b>Blood Group:</b> {data.blood_group}</p>
          <p>
            <b>Location:</b> {data.recipient_district}, {data.recipient_upazila}
          </p>
          <p><b>Hospital:</b> {data.hospital_name}</p>

          {/* STATUS */}
          <span className={`px-3 py-1 rounded-full text-sm font-medium
            ${data.donation_status === "pending"
              ? "bg-yellow-100 text-yellow-700"
              : "bg-green-100 text-green-700"}
          `}>
            {data.donation_status}
          </span>

          {/* BUTTON */}
          {data.donation_status === "pending" && (
            <button
              onClick={() => setOpenModal(true)}
              className="mt-6 w-full bg-red-500 hover:bg-red-600 text-white py-2.5 rounded-xl"
            >
              Donate Now
            </button>
          )}

        </div>
      </div>

      {/* MODAL */}
      {openModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4">

          <div className="bg-white w-full max-w-sm rounded-2xl shadow-xl p-6">

            <h3 className="text-xl font-bold text-center mb-4 text-red-500">
              Confirm Donation
            </h3>

            <div className="space-y-3">

              <input
                readOnly
                value={user?.displayName || ""}
                className="w-full border rounded-lg p-2 bg-pink-100"
              />

              <input
                readOnly
                value={user?.email || ""}
                className="w-full border rounded-lg p-2 bg-gray-100"
              />

            </div>

            <div className="flex justify-end gap-2 mt-5">

              <button
                onClick={() => setOpenModal(false)}
                className="px-4 py-2 bg-gray-200 rounded-lg"
              >
                Cancel
              </button>

              <button
                onClick={handleConfirm}
                disabled={updating}
                className="px-4 py-2 bg-green-500 text-white rounded-lg"
              >
                {updating ? "Processing..." : "Confirm"}
              </button>

            </div>

          </div>
        </div>
      )}

      {/* BACK */}
      <Link
        to="/dashboard/donation-request"
        className="absolute top-5 left-5 text-blue-500"
      >
        ← Back
      </Link>

    </div>
  );
};

export default RequestDetails;